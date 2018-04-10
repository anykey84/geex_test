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
            .related-items__item-name BATHING SUIT 2 — $255
            .related-items__item-collection New Swimwear Collection
          swiper-slide
            img.related-items__slide-image(src="../../assets/images/rectangle2.png")
            .related-items__item-name BATHING SUIT 3 — $355
            .related-items__item-collection New Swimwear Collection
          swiper-slide
            img.related-items__slide-image(src="../../assets/images/rectangle2.png")
            .related-items__item-name BATHING SUIT 4 — $455
            .related-items__item-collection New Swimwear Collection
          swiper-slide
            img.related-items__slide-image(src="../../assets/images/rectangle2.png")
            .related-items__item-name BATHING SUIT 5 — $555
            .related-items__item-collection New Swimwear Collection
          swiper-slide
            img.related-items__slide-image(src="../../assets/images/rectangle2.png")
            .related-items__item-name BATHING SUIT 6 — $655
            .related-items__item-collection New Swimwear Collection
      .related-items__arrow-right next
    .related-items__view-item.double-button
      .double-button__inner view item


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
          spaceBetween: 50,
          initialSlide: 1
        }
      }
    }
  }
</script>

