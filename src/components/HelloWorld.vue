<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link :to="{name: 'he1'}">he1</router-link>
    <router-link :to="{name: 'he2'}">he2</router-link>
      <router-view/>
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

