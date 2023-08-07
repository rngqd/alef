<template>
  <header class="header">
    <a href="https://alef.im/" target="_blank">
      <img :src="headerLogo" alt="alef logo" class="header__logo" />
    </a>
    <nav class="header__navigation">
      <router-link
        class="header__link"
        exact-active-class="header__link_active"
        to="/"
      >
        Форма
      </router-link>
      <router-link
        class="header__link"
        exact-active-class="header__link_active"
        to="/preview"
      >
        Превью
      </router-link>
    </nav>
  </header>
</template>

<script setup>
import headerLogo from 'src/assets/header-logo.svg';
</script>

<style lang="sass" scoped>
@import 'src/css/quasar.variables'
.header
  padding: 22px 51px
  box-shadow: 0 1px 0 0 rgba(17, 17, 17, 0.10)
  display: flex
  align-items: center

.header__navigation
  display: flex
  align-items: center
  margin: 0 auto
  gap: 24px


.header__link
  font-size: 14px
  line-height: 1.7
  color: $gray
  text-decoration: none

  tra

.header__link_active
  color: $primary
  text-decoration: underline
</style>
