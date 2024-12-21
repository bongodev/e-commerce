import dotenv from 'dotenv';
dotenv.config();

export const appConfig = {
  PORT: process.env.PORT || 5000,
  ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN,
};
