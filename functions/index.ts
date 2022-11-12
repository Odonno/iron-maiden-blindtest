export const isProduction = process.env.NODE_ENV === "production";

export const isServerSide = () => typeof window === "undefined";
export const isClientSide = () => !isServerSide();
