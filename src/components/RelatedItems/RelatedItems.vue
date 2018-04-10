<template lang="pug">
  .related-items
    swiper(:options="swiperOption")
      swiper-slide
        img.related-items__slide-image(src="../../assets/images/rectangle1.png")
      swiper-slide
        img.related-items__slide-image(src="../../assets/images/rectangle2.png")
      swiper-slide
        img.related-items__slide-image(src="../../assets/images/rectangle4.png")
      swiper-slide
        img.related-items__slide-image(src="../../assets/images/rectangle1.png")
      swiper-slide
        img.related-items__slide-image(src="../../assets/images/rectangle2.png")
      swiper-slide
        img.related-items__slide-image(src="../../assets/images/rectangle4.png")


</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'
  import './RelatedItems.sass'

  export default {
    name: 'RelatedItems',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          keyboard: {
            enabled: true,
          },
          navigation: {
            nextEl: '.related-items__arrow-right',
            prevEl: '.related-items__arrow-left'
          },
          slidesPerView: 3,
          centeredSlides: true,
          loop: true
        }
      }
    }
  }
</script>

