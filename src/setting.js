import dotenv from 'dotenv';

dotenv.config();

export const testEvironmentVariable = process.env.TEST_ENV_VARIABLE;

export const postgres = {
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_USER_PASSWORD,
  port: process.env.PG_PORT,
};
