import Vue from 'vue';
import vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/lib/util/colors';
Vue.use(vuetify);

export default new vuetify({
  //some default colors to use in components
  theme: {
    themes: {
      light: {
        primary: colors.blue.darken1,
        secondary: colors.red.darken1,
        snackbarError: colors.red.darken1,
        background: colors.grey.darken3,
        appBar: colors.red.darken1,
        slider: colors.red.darken3
      },
    },
  },
})