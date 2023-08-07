<template>
  <q-input
    :label="label"
    :model-value="propsValue"
    :type="inputType"
    class="app-input"
    clearable
    color="black"
    label-color="gray"
    outlined
    @clear="$emit('update', null)"
    @update:model-value="(val) => emit('update', val)"
  />
</template>

<script lang="ts" setup>
import { IInputProps } from 'components/UI/AppInput/models';
import { computed } from 'vue';

const props = defineProps<IInputProps>();
const emit = defineEmits(['update', 'delete']);

const propsValue = computed(() => props.value);
const inputType = computed(() => (props.onlyNumbers ? 'number' : 'text'));
</script>

<style lang="sass" scoped>
@import "src/css/quasar.variables"

.q-field--outlined .q-field__control:before
  border: 1px solid $grayL
  border-radius: 4px
</style>
