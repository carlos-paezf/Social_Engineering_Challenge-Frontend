export const config = {
    appName: import.meta.env.VITE_APP_NAME,
    maxAttempts: import.meta.env.VITE_MAX_ATTEMPTS,
    gameDuration: import.meta.env.VITE_GAME_DURATION,
    institutionName: import.meta.env.VITE_INSTITUTION_NAME,
    showTimer: import.meta.env.VITE_SHOW_TIMER,
    environment: import.meta.env.VITE_ENVIRONMENT,
    apiUrl: import.meta.env.VITE_API_BASE_URL,
    debug: import.meta.env.VITE_ENABLE_DEBUG,
    showDevtools: import.meta.env.VITE_SHOW_DEVTOOLS,
};