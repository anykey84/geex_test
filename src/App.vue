<template lang="pug">
  #app(v-scroll="onScroll")
    .container
      Header
    ProductGallery
    ProductInfo
</template>

<script>
import Header from './components/Header/Header.vue'
import ProductGallery from './components/ProductGallery/ProductGallery.vue'
import ProductInfo from './components/ProductInfo/ProductInfo.vue'
import './App.sass'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Header,
    ProductGallery,
    ProductInfo
  },
  methods: {
    onScroll () {
      console.log('scroll')
    }
  }
}
</script>
