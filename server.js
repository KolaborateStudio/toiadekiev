const express = require('express');
const path = require('path');
const fs = require('fs');
const https = require('https');
const http = require('http');
const cors = require('cors');
const multer = require('multer');
const { createClient } = require('@supabase/supabase-js');
const { MercadoPagoConfig, Preference } = require('mercadopago');

// Inicializar Supabase
const supabaseUrl = 'https://wwetpxbracvnoacwvbib.supabase.co'; // reemplazá con tu URL real
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // reemplazá con tu anon/public key
const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();

app.use(cors({
  origin: 'https://themarketingtailor.com',
  methods: ['POST', 'GET'],
  credentials: true,
}));

// Multer para archivos (guardamos en memoria)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
});

const options = {
  cert: fs.readFileSync(path.join(__dirname, 'certificates', 'certificate.crt')),
  key: fs.readFileSync(path.join(__dirname, 'certificates', 'private.key')),
  ca: fs.readFileSync(path.join(__dirname, 'certificates', 'ca_bundle.crt')),
};

app.use('/.well-known', express.static(path.join(__dirname, '.well-known')));
app.use(express.json());

// Endpoint para subir imagen a Supabase Storage
app.post('/product-manager/upload', upload.single('image'), async (req, res) => {
  console.log('llegando');
  try {
    if (!req.file) return res.status(400).send('No file uploaded.');

    const fileExt = req.file.originalname.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `productos/${fileName}`;

    // Subir el buffer al bucket 'productos'
    const { error } = await supabase.storage
      .from('productos')
      .upload(filePath, req.file.buffer, {
        cacheControl: '3600',
        upsert: false,
        contentType: req.file.mimetype,
      });

    if (error) {
      console.error('Error subiendo imagen a Supabase:', error);
      return res.status(500).send('Error al subir imagen');
    }

    // Obtener URL pública
    const { publicURL, error: urlError } = supabase.storage.from('productos').getPublicUrl(filePath);
    if (urlError) {
      console.error('Error obteniendo URL pública:', urlError);
      return res.status(500).send('Error obteniendo URL');
    }

    res.json({ imageUrl: publicURL });
  } catch (error) {
    console.error('Error al subir imagen:', error);
    res.status(500).send('Error al subir imagen');
  }
});

// Mercado Pago SDK v2
const mp = new MercadoPagoConfig({
  accessToken: 'APP_USR-3707665360456300-052019-d682b02bf447d7bc469b4f9c51ddf948-267928819',
});

app.post('/create_preference', async (req, res) => {
  const cart = req.body.cart || [];

  const items = cart.map(item => ({
    title: item.name,
    quantity: item.quantity,
    currency_id: 'ARS',
    unit_price: item.price,
  }));

  const preference = {
    items,
    back_urls: {
      success: 'https://themarketingtailor.com/success',
      failure: 'https://themarketingtailor.com/failure',
    },
    auto_return: 'approved',
  };

  try {
    const preferenceClient = new Preference(mp);
    const response = await preferenceClient.create({ body: preference });
    res.json({ init_point: response.init_point });
  } catch (error) {
    console.error('❌ Error creando preferencia:', error);
    res.status(500).send(error.message);
  }
});

// Archivos estáticos y fallback SPA
app.use(express.static(path.join(__dirname, 'dist')));
app.use((req, res, next) => {
  if (req.method === 'GET' && !req.url.startsWith('/create_preference') && !req.url.includes('.')) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  } else {
    next();
  }
});

// HTTPS server
https.createServer(options, app).listen(443, () => {
  console.log('✅ Servidor HTTPS en puerto 443');
});

// HTTP → HTTPS redirection
http.createServer((req, res) => {
  const hostHeader = req.headers.host;

  if (!hostHeader) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Bad Request: Missing Host header');
    return;
  }

  const host = hostHeader.replace(/:\d+$/, '');
  res.writeHead(301, { Location: `https://${host}${req.url}` });
  res.end();
}).listen(80, () => {
  console.log('🌐 Redirigiendo HTTP a HTTPS en puerto 80');
});
