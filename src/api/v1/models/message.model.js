import { pool } from "./pool.js";

class Model {
  constructor(table) {
    this.pool = pool;
    this.table = table;
    this.pool.on('error', (error, client) => `Error, ${error}, on idle client: ${client}`);
  };

  async select(clause) {
    let query = `SELECT * FROM ${this.table}`;
    if (clause) query += ` WHERE ${clause};`;
    return await this.pool.query(query);
  };

  async insertWithReturn(columns, values) {
    const query = 
      `INSERT INTO ${this.table}(${columns})
      VALUES (${values});`;
    return await this.pool.query(query);
  }
}

export default Model;
