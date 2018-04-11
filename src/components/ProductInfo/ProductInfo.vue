<template lang="pug">
  .product-info
    .product-info__info
      .product-info__col-left
        .product-info__photo
          img.product-info__photo_image(src="../../assets/images/rectangle6.png")
      .product-info__col-right
        .product-info__title-label BIKINI INFO
        .product-info__title MYKONOS
        p.product-info__text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          | incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          | nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          | Duis aute irure dolor in reprehenderit in voluptate
          | esse cillum dolore eu fugiat nulla cillum dolore eu fugiat eu.
          br
          br
          | Are you interested and want to know more? Click the link below.

    .product-info__materials
      .product-info__col-left
        .product-info__title-label HIGH QUALITY
        .product-info__title MATERIALS USED
        ul.product-info__list
          li - Material Item 001
          li - Material Item 002
          li - Material Item 003
          li - Material Item 004
          li - Material Item 005

      .product-info__col-right
        .product-info__photo
          img.product-info__photo_image(src="../../assets/images/rectangle7.png")

</template>

<script>
  import './ProductInfo.sass'

  export default {
    name: 'ProductInfo'
  }
</script>
