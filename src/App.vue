<template lang="pug">
  #app(v-scroll="onScroll")
    .container
      Header
</template>

<script>
import Header from './components/Header/Header.vue'
import './App.sass'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Header
  },
  methods: {
    onScroll () {
      console.log('scroll')
    }
  }
}
</script>
