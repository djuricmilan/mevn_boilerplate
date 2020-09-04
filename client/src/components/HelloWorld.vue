<template>
  <div>
    <span v-if="helloMessage">
      {{author}} says {{helloMessage}}
    </span>
    <span v-else>
      Hello message not found
    </span>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    ...mapGetters({
      helloMessage: 'hello/getHelloMessage',
      author: 'hello/getAuthor'
    })
  },
  created(){
    this.fetchData();
  },
  methods:{
    ...mapActions({
      fetchData: 'hello/fetchData'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
