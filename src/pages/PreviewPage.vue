<template>
  <div class="preview">
    <h2 class="page-title preview__title">Персональные данные</h2>
    <p class="preview__user">{{ parseUserInfo(userName, userAge) }}</p>
    <h2 v-if="children.length" class="page-title preview__title">Дети</h2>
    <div class="preview_children">
      <div v-for="(child, idx) in children" :key="idx" class="preview__child">
        {{ parseUserInfo(child.name, child.age) }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from 'stores/user-store';
import { ref } from 'vue';
import { IInputValue } from 'src/models';

const store = useUserStore();
const userName = ref(store.user.name);
const userAge = ref(store.user.age);
const children = ref(store.user.children);

function parseUserInfo(personName: IInputValue, personAge: IInputValue) {
  let yearsPhrase;
  if (personName && personAge) {
    const age = +personAge;
    if (age % 10 === 1 && age % 100 !== 11) {
      yearsPhrase = 'год';
    } else if (
      age % 10 >= 2 &&
      age % 10 <= 4 &&
      !(age % 100 >= 12 && age % 100 <= 14)
    ) {
      yearsPhrase = 'года';
    } else {
      yearsPhrase = 'лет';
    }

    return `${personName}, ${age} ${yearsPhrase}`;
  } else {
    return 'Укажите данные о пользователе';
  }
}
</script>

<style lang="sass" scoped>
@import "src/css/quasar.variables"
.preview
  font-size: 16px
  line-height: 1.5
  color: $black

.preview__user
  margin: 20px 0 60px 0
  font-weight: 700

.preview_children
  margin-top: 20px
  display: flex
  flex-direction: column
  gap: 20px

.preview__child
  padding: 10px 20px
  width: fit-content
  border-radius: 5px
  background-color: $grayL
  font-weight: 700
</style>
