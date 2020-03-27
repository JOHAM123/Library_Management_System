import { Pool } from "pg";

export async function connect(): Promise<Pool> {

    const connection = await new Pool({
        user: "joham" ,
        database: "joham_db",
        password: "joham123",
        port: 5432,
        host: "localhost",
        connectionTimeoutMillis:10000
       })

    return connection;
}