<template lang="pug">
  header
    .header__inner.container
      .header__topmenu
        a.header__topmenu__item(href="#") Activities
        a.header__topmenu__item(href="#") Tops
        a.header__topmenu__item(href="#") Bottoms
        a.header__topmenu__item(href="#") Accessories
        a.header__topmenu__item(href="#") Culture
      .header__logo
        a.header__logo__link(href="#") AG
      .header__shopping-cart
        .header__shopping-cart__title Cart
        .header__shopping-cart__count 0
</template>

<script>
  import './Header.sass'

  export default {
    name: 'Header'
  }
</script>
