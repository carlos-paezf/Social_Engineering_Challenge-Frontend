interface ImportMetaEnv {
    readonly VITE_APP_NAME: string;
    readonly VITE_MAX_ATTEMPTS: string;
    readonly VITE_GAME_DURATION: string;
    readonly VITE_INSTITUTION_NAME: string;
    readonly VITE_SHOW_TIMER: boolean;
    readonly VITE_ENVIRONMENT: "development" | "production" | "staging";
    readonly VITE_API_BASE_URL: string;
    readonly VITE_ENABLE_DEBUG: boolean;
    readonly VITE_SHOW_DEVTOOLS: boolean;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}