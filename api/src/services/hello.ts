import { getRepository } from "typeorm";
import {Hello} from '../models/hello';
import { HelloDto } from "../dto/hello";

class HelloService{
  public async getFirstHelloMessage(): Promise<HelloDto>{
    try{
      const helloRepository = getRepository(Hello);
      const hello: Hello = (await helloRepository.find({}))[0];
      return {
        success: !!hello,
        status: !!hello ? 200: 404,
        hellos: !!hello ? [hello]: [],
        message: !!hello ? 'OK': 'Hello message not found'
      };
    }catch(error){
      return {
        success: false,
        status: 404,
        hellos: [],
        message: 'Hello message not found'
      };
    }
  }
}

export default new HelloService();