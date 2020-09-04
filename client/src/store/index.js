import Vue from 'vue';
import vuex from 'vuex';
import hello from './modules/hello';
import VuexPersistence from 'vuex-persist';
import localforage from 'localforage';

Vue.use(vuex);

export default new vuex.Store({
  modules: {
    hello
  },
  plugins: [
    new VuexPersistence({
      //use localstorage in browser
      storage: localStorage,
      
      //map entire module to local storage
      modules: [hello]
    }).plugin,
    new VuexPersistence({
      //use IndexedDB
      storage: localforage,

      //use reducers when you want to fine-tune which parts of state in modules you want to persist
      reducer: (state) => {
        return {
          hello: {
            helloMessage: state.hello.helloMessage
          }
        };
      }
    }).plugin
  ]
});