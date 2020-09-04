import { Router } from "express";
import HelloController from '../controllers/hello';

class HelloRoutes{
  router: Router;
  
  constructor(){
    this.router = Router();
    this.configRoutes();
  }

  configRoutes(){
    this.router.get('/', HelloController.getHelloMessage);
  }
}

export default new HelloRoutes().router;