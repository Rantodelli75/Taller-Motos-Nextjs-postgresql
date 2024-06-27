import { createClient } from '@supabase/supabase-js';

export default function initSupabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase variables are not set in environment.');
    return null;
  }

  return createClient(supabaseUrl, supabaseAnonKey);
}