import { Client } from "pg";
const client = new Client("postgresql://0amatsu0:Spt5gWhAM7iK@ep-dry-morning-a5i1dua1.us-east-2.aws.neon.tech/Space?sslmode=require")
export async function insertInto(){
    await client.connect()
    const insertQuery = 'INSERT INTO example_table(column1, column2) VALUES($1, $2)';
    const res = await client.query(insertQuery, ["Shadow", "san"]);
   console.log(res)
}