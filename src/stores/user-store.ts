import { defineStore } from 'pinia';
import { IUser } from 'stores/models';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      name: '',
      age: '',
      children: [],
    } as IUser,
  }),
  getters: {
    userName: (state) => state.user.name,
    userYears: (state) => state.user.age,
    userChildren: (state) => state.user.children,
  },
});
