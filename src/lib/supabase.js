import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// Create a mock client if credentials are missing (for deployment without Supabase setup)
const createMockClient = () => ({
  from: () => ({
    insert: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } }),
    select: () => Promise.resolve({ data: [], error: null })
  })
});

export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createMockClient();

// Export a flag to check if Supabase is properly configured
export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey);