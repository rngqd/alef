<template>
  <q-layout view="lHh Lpr lFf">
    <div class="wrapper">
      <AppHeader />
      <div class="content">
        <q-page-container>
          <router-view />
        </q-page-container>
      </div>
      <div class="footer">
        <AppFooter />
      </div>
    </div>
  </q-layout>
</template>

<script lang="ts" setup>
import AppHeader from 'src/components/AppHeader/AppHeader.vue';
import AppFooter from 'components/AppFooter/AppFooter.vue';
</script>

<style lang="sass">
.wrapper
  display: flex
  flex-direction: column
  min-height: 100vh

.content
  flex: 1 1 auto
  padding: 30px 0
  max-width: 616px
  width: 100%
  margin: 0 auto
</style>
