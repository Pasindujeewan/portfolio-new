import { createClient } from "@supabase/supabase-js";

function supabaseServerKey() {
  return process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
}

export function hasSupabaseConfig() {
  return Boolean(process.env.SUPABASE_URL && supabaseServerKey());
}

export function createSupabaseAdminClient() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serverKey = supabaseServerKey();

  if (!supabaseUrl || !serverKey) {
    throw new Error("Supabase environment variables are not configured.");
  }

  // This privileged client must only be used in server files/actions.
  return createClient(supabaseUrl, serverKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });
}
