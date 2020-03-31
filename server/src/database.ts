// import { Pool } from "pg";

// export async function connect(): Promise<Pool> {

//     const connection = await new Pool({
//         user: "joham" ,
//         database: "joham_db",
//         password: "joham123",
//         port: 5432,
//         host: "localhost",
//         connectionTimeoutMillis:10000
//        })

//     return connection;
// }

import {Sequelize} from "sequelize-typescript"

export const sequlize = new Sequelize('joham_db', 'joham', 'joham123', {
   host: 'localhost',
   dialect: 'postgres',
   models: [__dirname + '/model'] 
});