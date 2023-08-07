<template>
  <router-view />
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import {useUserStore} from 'stores/user-store';
import { IUser } from 'stores/models';
const store = useUserStore();

onMounted(() => {
  const user: IUser = JSON.parse(sessionStorage.getItem('alefUser') as string);

  if(user){
    store.$patch({
      user
    })
  }
})
</script>
