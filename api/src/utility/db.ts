export default {
  buildProductionDbOptions(){
    return {
      type: <any>process.env.DB_TYPE,
      url: process.env.DB_URL,
      logging: true,
      synchronize: false,
      entities: ["./dist/models/*.js"]
    };
  },
  buildDevelopmentDbOptions(){
    return {
      type: <any>process.env.DB_TYPE,
      host: process.env.DB_HOST,
      port: parseInt(<string>process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      logging: true,
      synchronize: true,
      entities: ["./src/models/*.ts"]
    };
  }
}