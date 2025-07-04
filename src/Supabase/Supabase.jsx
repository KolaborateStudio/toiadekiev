// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wwetpxbracvnoacwvbib.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3ZXRweGJyYWN2bm9hY3d2YmliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzMDE3NzYsImV4cCI6MjA2Njg3Nzc3Nn0.QlDELadvpjLYiJf0LFXJUCAJWlxRVSj6WQfdFf2e-uI';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
