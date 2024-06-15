import { Client } from 'pg'
 
const client = new Client("postgresql://0amatsu0:Spt5gWhAM7iK@ep-dry-morning-a5i1dua1.us-east-2.aws.neon.tech/Space?sslmode=require")
      
async function createUsersTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result)
}

createUsersTable();