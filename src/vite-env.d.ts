/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WHATSAPP_NUMBER: string;
  readonly VITE_SITE_URL: string;
  readonly VITE_GA_ID?: string;
  readonly VITE_BRAND_NAME?: string;
  readonly VITE_APPS_SCRIPT_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
