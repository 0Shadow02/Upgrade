// write a function to create a users table in your database.
import { Client } from 'pg'
 
const client = new Client({
  connectionString: "postgresql://postgres:mypass@localhost/postgres"
})

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
async function insertUser(username:string, password:string, email:string) {
  await client.connect()
  const result = await client.query(`
     INSERT INTO users (username, password, email)
     VALUES ($1, $2, $3);
  `, [username, password, email]);
  console.log(result)
}


insertUser("shadow1", "password", "shadow1@gmail.com");