import pg from 'pg';
import { postgreSQL } from '../config/db.config.js';

export const pool = new pg.Pool({
  connectionString: postgreSQL
});
