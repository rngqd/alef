<template>
  <div class="user-inputs">
    <h2 class="page-title user-inputs__title">Персональные данные</h2>
    <div class="user-inputs__user">
      <AppInput
        :only-numbers="false"
        :value="userName"
        label="Имя"
        @update="updateUserName"
      />
      <AppInput
        :only-numbers="true"
        :value="userAge"
        label="Возраст"
        @update="updateUserAge"
      />
    </div>
    <div class="user-inputs__controls">
      <h2 class="page-title user-inputs__validate-text">Дети (макс. 5)</h2>
      <AppButton
        v-if="children.length < 5"
        :disabled="isAddChildDisable"
        :isLight="true"
        icon="add"
        label="Добавить ребенка"
        @click="addChild"
      />
    </div>
    <div>
      <div
        v-for="(child, idx) in children"
        :key="idx"
        class="user-inputs__child-container"
      >
        <div class="user-inputs__child-input">
          <AppInput
            :only-numbers="false"
            :value="child.name"
            label="Имя"
            @update="(val) => updateChildren('name', val, idx)"
          />
        </div>
        <div class="user-inputs__child-input">
          <AppInput
            :only-numbers="true"
            :value="child.age"
            label="Возраст"
            @update="(val) => updateChildren('age', val, idx)"
          />
        </div>
        <q-btn dense flat label="Удалить" no-caps @click="deleteChild(idx)" />
      </div>
    </div>
    <AppButton
      class="user-inputs__save-btn"
      label="Сохранить"
      @click="saveUser"
    />
  </div>
</template>

<script lang="ts" setup>
import AppInput from 'components/UI/AppInput/AppInput.vue';
import AppButton from 'components/UI/AppButton/AppButton.vue';
import { computed, ref } from 'vue';
import { useUserStore } from 'stores/user-store';
import { IInputValue, IPerson } from 'src/models';
import { Notify } from 'quasar';

const store = useUserStore();

const userName = ref(store.user.name);
const userAge = ref(store.user.age);
const children = ref(store.user.children);

const isAddChildDisable = computed(() => {
  if (children.value.length === 0) {
    return false;
  }
  if (!children.value.length) {
    return true;
  } else return children.value.some((child) => !child.name || !child.age);
});

function updateUserName(val: IInputValue) {
  userName.value = val;
}

function updateUserAge(val: IInputValue) {
  userAge.value = val;
}

function updateChildren(type: keyof IPerson, val: IInputValue, idx: number) {
  let copyTargetIds = [...children.value];
  copyTargetIds[idx][type] = val;
  children.value = copyTargetIds;
}

function addChild() {
  if (!isAddChildDisable.value) {
    children.value = [...children.value, { name: '', age: '' }];
  }
}

function deleteChild(idx: number) {
  const filteredChildren = children.value.filter((child, id) => {
    if (id !== idx) {
      return child;
    }
  });
  children.value = filteredChildren;
  Notify.create({ message: 'Данные удалены', color: 'gray' });
}

function saveUser() {
  const user = {
    name: userName.value,
    age: userAge.value,
    children: children.value,
  };
  store.$patch({ user });
  sessionStorage.setItem('alefUser', JSON.stringify(user));
  Notify.create({ message: 'Данные сохранены', color: 'primary' });
}
</script>

<style lang="sass" scoped>
@import 'src/css/quasar.variables.sass'
.user-inputs
  padding: 30px 0
  max-width: 616px
  margin: 0 auto

  .user-inputs__title
    margin-bottom: 20px
    font-size: 16px
    font-weight: 500
    line-height: 1.5
    color: $black

  .user-inputs__user
    display: flex
    flex-direction: column
    gap: 10px

  .user-inputs__controls
    display: flex
    justify-content: space-between
    align-items: center
    margin-top: 33px

  .user-inputs__child-container
    margin-top: 10px
    width: 100%
    display: flex
    flex: 1 1 auto
    gap: 18px
    align-items: center
    justify-content: space-between

    .user-inputs__child-input
      width: calc((100% - 60px) / 2)

  .user-inputs__save-btn
    margin-top: 30px
</style>
