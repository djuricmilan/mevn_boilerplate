import helloApi from '../../api/hello';

const state = {
  helloMessage: '',
  author: ''
};

const getters = {
  getHelloMessage: (state) => state.helloMessage,
  getAuthor: (state) => state.author
};

const actions = {
  async fetchData({commit}){
    try{
      const {helloMessage, author} = await helloApi.fetchData();
      commit('setHelloMessage', helloMessage);
      commit('setAuthor', author);
    }catch(error){
      return Promise.reject(error);
    }
  }
};

const mutations = {
  setHelloMessage: (state, helloMessage) => state.helloMessage = helloMessage,
  setAuthor: (state, author) => state.author = author
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}