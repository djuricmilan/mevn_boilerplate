import express, { Application } from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes';

class App{
  app: Application;
  
  constructor(){
    this.app = express();
    this.configureRoutes();
  }

  configureRoutes(){
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: true}));
    
    this.app.use('/', router);
  }
}

export default new App().app;