import { config } from "dotenv";


config({ path: `.env.${process.env.NODENV || 'development'}`});

export const { PORT, NODENV, DB_URI } = process.env
