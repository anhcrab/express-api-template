import { postgres } from "../../../setting.js";
import dotenv from 'dotenv'
dotenv.config();

export const postgreSQL =
  `postgresql://${postgres.user}:${postgres.password}@${postgres.host}:${postgres.port}/${postgres.database}`;
  
export const mySQL = {
    // Database details
};

export const mongoDB = {
    // Database details
};

