/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_GITHUB_PAGES_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
