import { createClient } from "@supabase/supabase-js";
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ??
  "https://cxsdwkqjqhtdwmvrpvjy.supabase.co";
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4c2R3a3FqcWh0ZHdtdnJwdmp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1ODk2MTIsImV4cCI6MjA1MTE2NTYxMn0.qNXxPHxFm0EgDgbdaSftn4rXOkMpSIF0tZRighV3sys";
export const supabase = createClient(supabaseUrl, supabaseKey);
