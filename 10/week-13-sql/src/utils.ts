import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://postgres:D076siEtcYMhAmPo@warily-profitable-snipe.data-1.use1.tembo.io:5432/postgres");
    await client.connect();
    return client;
}