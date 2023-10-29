import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ysngcugmdngxexfmpnwr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzbmdjdWdtZG5neGV4Zm1wbndyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg1NTkwMzIsImV4cCI6MjAxNDEzNTAzMn0.UwV-XhAvr__6nB3kU07ltmYNeemmZH-4tfKg48URSKc";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
