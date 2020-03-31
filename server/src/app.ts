import express, { Application } from "express";
import IndexRoutes from "./routes/index.routes";
import BookRoutes from "./routes/book.routes";
import bodyParser  from 'body-parser';
import cors from 'cors';
import { sequlize } from "./database";


export class App {

    app: Application;

    constructor(private port: string | number) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private settings() {
        this.app.set('port', this.port);
    }

    private middlewares() {
        this.app.use(bodyParser.json())
        // this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use(cors())
    }

    private routes() {
        this.app.use(IndexRoutes);
        this.app.use("/books", BookRoutes);
    }

    async listen(): Promise<void> {
        await this.app.listen(this.app.get('port'));
        console.log(`server on url http://localhost:${this.app.get('port')}/`);
       
        sequlize.authenticate().then(async() => {
            console.log("database connected");
    
            // try {
            //     await sequlize.sync({force: true});
            // } catch (error) {
            //     console.log(error.message);
            // }
    });


}
}
