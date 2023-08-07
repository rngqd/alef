<template>
  <q-btn
    ref="button"
    :class="props.isLight ? 'app-button app-button_color_light' : 'app-button'"
    :disable="props.disabled"
    flat
    no-caps
  >
    <q-icon v-if="props.icon" :name="props.icon" class="app-button__icon" />
    {{ props.label }}
  </q-btn>
</template>

<script lang="ts" setup>
import { IButtonProps } from 'components/UI/AppButton/models';
import { Ref, ref } from 'vue';

const props = withDefaults(defineProps<IButtonProps>(), {
  isLight: false,
  disabled: false,
  icon: null,
});
const button: Ref<HTMLButtonElement | null> = ref(null);
</script>

<style lang="sass">
@import 'src/css/quasar.variables'
.app-button
  padding: 10px 20px
  border-radius: 100px
  background-color: $primary
  font-size: 14px
  line-height: 1.7
  color: #FFF
  width: fit-content

  &_color_light
    background-color: transparent
    color: $primary
    border: 1px solid $primary

  .app-button__icon
    margin-right: 4px
</style>
