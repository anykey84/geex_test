<template lang="pug">
  .related-items
    .related-items__header RELATED ITEMS
    .related-items__inner
      .related-items__arrow-left prev
      .related-items__gallery
        swiper(:options="swiperOption")
          swiper-slide
            img.related-items__slide-image(src="../../assets/images/rectangle2.png")
            .related-items__item-name BATHING SUIT 1 — $55
            .related-items__item-collection New Swimwear Collection
          swiper-slide
            img.related-items__slide-image(src="../../assets/images/rectangle2.png")
            .related-items__item-name BATHING SUIT 1 — $55
            .related-items__item-collection New Swimwear Collection
          swiper-slide
            img.related-items__slide-image(src="../../assets/images/rectangle2.png")
            .related-items__item-name BATHING SUIT 1 — $55
            .related-items__item-collection New Swimwear Collection
          swiper-slide
            img.related-items__slide-image(src="../../assets/images/rectangle2.png")
            .related-items__item-name BATHING SUIT 1 — $55
            .related-items__item-collection New Swimwear Collection
          swiper-slide
            img.related-items__slide-image(src="../../assets/images/rectangle2.png")
            .related-items__item-name BATHING SUIT 1 — $55
            .related-items__item-collection New Swimwear Collection
          swiper-slide
            img.related-items__slide-image(src="../../assets/images/rectangle2.png")
            .related-items__item-name BATHING SUIT 1 — $55
            .related-items__item-collection New Swimwear Collection
      .related-items__arrow-right next


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
          spaceBetween: 50
        }
      }
    }
  }
</script>

