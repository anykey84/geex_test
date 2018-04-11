<template lang="pug">
  .footer
    .footer__left_block
      .footer__logo ALTO GIRO
      .footer__copyright © 2017 Alto Giro, All rights reserved
    .footer__middle_block
      .footer__menu
        a.footer__menu__item(href="#") Activities
        a.footer__menu__item(href="#") Tops
        a.footer__menu__item(href="#") Bottoms
        a.footer__menu__item(href="#") Accessories
        a.footer__menu__item(href="#") Culture
    .footer__right_block
      .footer__social
        img(src="../../assets/images/facebook-176.svg")
        img(src="../../assets/images/twitter-154.svg")
        img(src="../../assets/images/instagram-167.svg")
</template>

<script>
  import './Footer.sass'

  export default {
    name: 'Footer'
  }
</script>
