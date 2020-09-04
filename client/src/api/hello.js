import axios from 'axios';

export default{
  async fetchData(){
    try{
      const response = await axios.get('/hello');
      return response.data.hellos[0];
    }catch(error){
      return Promise.reject(error.response.data.message);
    }
  }
};