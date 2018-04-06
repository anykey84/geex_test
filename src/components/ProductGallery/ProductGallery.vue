<template lang="pug">
  .product-gallery
    .product-gallery__inner
      .product-gallery__product-description
        .product-gallery__title-label Collection
        .product-gallery__title Bikini — Mykonis
        p.product-gallery__description The same top of the line accessories you’re used to but we have formulated these specifically for your activite lifestyle.
        .product-gallery__options-selectors
          .product-gallery__color-picker
            input.product-gallery__color-picker__item-selected(type="text", placeholder="Pick a color")
          .product-gallery__count-selector
            .product-gallery__count-selector-button -
            .product-gallery__counter 1
            .product-gallery__count-selector-button +
        .product-gallery__addtocart.double-button
          .double-button__inner Add to cart
      .product-gallery__images
        img.product-gallery__images__item.active(src="../../assets/images/rectangle3.png")
        img.product-gallery__images__item(src="../../assets/images/rectangle6.png")
        img.product-gallery__images__item(src="../../assets/images/rectangle7.png")


</template>

<script>
  import './ProductGallery.sass'

  export default {
    name: 'ProductGallery'
  }
</script>
