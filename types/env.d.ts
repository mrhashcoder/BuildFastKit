// types/env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    NEXT_PUBLIC_BASE_SERVER_URL?: string;
    NEXT_PUBLIC_AXIOS_TOKEN?: string;
    BASE_SERVER_URL?: string;
  }
}
