import express from 'express';
import bodyParser from 'body-parser';
import router from "../routes/index.routes.js";

export default class Server {
    constructor(){
        this.app = express();
        this.port = 8080;
    }
    connectionDB(){

    }
    middleware(){
        this.app.use(bodyParser.json());
    }
    route(){
        this.app.use(router)
    }
    runServer(){
        this.app.listen(this.port, ()=> {console.log("server");})
    }
    load(){
        this.connectionDB();
        this.middleware();
        this.route();
        this.runServer();
    }
}