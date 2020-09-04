import { Request, Response } from "express";
import { HelloDto } from "../dto/hello";
import HelloService from '../services/hello';

class HelloController{
  public async getHelloMessage(request: Request, response: Response){
    let retval: HelloDto = await HelloService.getFirstHelloMessage();
    response.status(retval.status).send(retval);
  }
}

export default new HelloController();