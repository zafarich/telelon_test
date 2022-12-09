import { defineStore } from "pinia";
// import * as api from "src/api/user";
import {
  getTokenFromCache,
  removeTokenFromCache,
  setTokenToCache,
} from "src/utils/auth";
import { ref } from "vue";

import { useRouter } from "vue-router";

export const useUserStore = defineStore("user", () => {
  const user = ref(null);
});
