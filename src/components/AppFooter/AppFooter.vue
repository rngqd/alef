<template>
  <footer class="footer">
    <p class="footer__right">all rights reserved</p>
  </footer>
</template>

<script setup></script>

<style lang="sass" scoped>
@import 'src/css/quasar.variables'
.footer
  padding: 30px 51px
  background-color: $grayM
  box-shadow: 0 1px 0 0 rgba(17, 17, 17, 0.10)
  display: flex
  justify-content: center
  align-items: center

.footer__right
  font-size: 13px
  line-height: 1
  color: $black
</style>
