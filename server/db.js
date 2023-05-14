import { Client } from "pg";

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "8520",
    database: "test"
})

client.connect( );
client.query(`SELECT  * from person`)