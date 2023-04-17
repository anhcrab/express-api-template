import { createTable, insertIntoTable } from "./queryFunctions.js";

(async () => {
  await createTable();
  await insertIntoTable();
})();
