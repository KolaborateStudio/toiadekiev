import { useEffect } from 'react';
import './App2.css';

function App2() {
  useEffect(() => {
    // Cambiar el título
    document.title = '\u200B';


    // Crear el nuevo favicon
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/svg+xml';
    link.href =
      'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>🙂</text></svg>';

    // Eliminar favicons anteriores y agregar el nuevo
    const oldIcons = document.querySelectorAll("link[rel='icon']");
    oldIcons.forEach(icon => icon.remove());
    document.head.appendChild(link);
  }, []);

  return (
    <div className="centered">
    </div>
  );
}

export default App2;
