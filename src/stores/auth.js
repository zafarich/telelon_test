import { defineStore } from "pinia";
import * as api from "src/api/auth";
import { useUserStore } from "stores/user";
export const useAuthStore = defineStore("auth", () => {
  const userStore = useUserStore();

  async function login(payload) {
    const res = await api.login(payload);
    return data;
  }
});
