<template>
  <div class="hello">
    <h2>Homeworks</h2>
      <router-link to="/one" tag="p">#1</router-link>
      <router-link to="/two" tag="p">#2</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
