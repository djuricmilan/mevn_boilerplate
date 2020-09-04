import app from './app';
import dotenv from 'dotenv';
import dbUtility from './utility/db';
import { createConnection, ConnectionOptions } from 'typeorm';

let DB_OPTIONS: ConnectionOptions;
if(process.env.ENV_TYPE == "production"){
  //if we are in production mode, use heroku environment variables
  DB_OPTIONS = dbUtility.buildProductionDbOptions();
}
else if(process.env.ENV_TYPE == "development-docker"){
  //if we are in development mode with docker, then environment variables have been passed in docker-compose
  DB_OPTIONS = dbUtility.buildDevelopmentDbOptions();
}
else{
  //if we are in develoipment mode with our local host machine, then environment variables are in the file which needs to be loaded to process.env object using dotenv module
  dotenv.config({path: process.argv[2]});
  DB_OPTIONS = dbUtility.buildDevelopmentDbOptions();
}

const PORT = process.env.PORT || 3000;

(async () => {
  try{
    let reponse = await createConnection(DB_OPTIONS);
    app.listen(PORT, () => {
      console.log(`Api application listening at port ${PORT}`);
    })
  }catch(error){
    console.log(error);
  }
})()
