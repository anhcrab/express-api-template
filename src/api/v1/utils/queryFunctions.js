import { pool } from "../models/pool.js";
import { 
        createMessageTable,
        insertMessageTable,
        dropMessageTable
       } from "./queries.js";

export const executeQueryArray = async (arr) => new Promise( 
  (resolve) => {
    const stop = arr.length;
    arr.forEach( async (q, index) => {
      await pool.query(q);
      if (index + 1 === stop) resolve(); 
    });
  });

export const dropTable = () => executeQueryArray([dropMessageTable]);
export const createTable = () => executeQueryArray([createMessageTable]);
export const insertIntoTable = () => executeQueryArray([insertMessageTable]); 
