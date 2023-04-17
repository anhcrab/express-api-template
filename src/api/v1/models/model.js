import { pool } from "./pool.js";

class Model {
  constructor(table) {
    this.pool = pool;
    this.table = table;
    this.pool.on('error', (error, client) => `Error, ${error}, on idle client: ${client}`);
  };

  async select(column, clause) {
    let query = `SELECT ${column} FROM ${this.table} WHERE`;
    if (clause) query += clause;
    return this.pool.query(query);
  }
}

export default Model;
