<template>
  <div id="app">
    <h2>Завдання 1 - зміна фону</h2>
    <Color />
    <Function />
  </div>
</template>

<script>
import Color from './components/Color.vue'
import Function from './components/Function.vue'

export default {
  name: 'App',
  components: {
    Color,
    Function
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
}
</style>
