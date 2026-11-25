// Stylera public Supabase configuration.
// Publishable keys are designed for client use, but RLS policies must protect all data.
// Do not include database passwords, service-role keys, or secret API keys here.
// This file is loaded by Stylera support pages.
(() => {
const styleraSupabaseConfig = Object.freeze({
  url: "https://agqjcvacbrzhwgjbhcqs.supabase.co",
  publishableKey: "sb_publishable_Efaabu3t4Ye52NjM9IGYrg_Ehx_hTHS"
});

if (typeof window !== 'undefined') window.STYLERA_SUPABASE_CONFIG = styleraSupabaseConfig;
if (typeof module !== 'undefined' && module.exports) module.exports = styleraSupabaseConfig;

})();
