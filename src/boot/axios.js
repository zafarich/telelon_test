import { boot } from "quasar/wrappers";
import axios from "axios";
import { getTokenFromCache } from "src/utils/auth";
import { Notify } from "quasar";
const api = axios.create({ baseURL: process.env.API });

export default boot(({ app }) => {
  api.interceptors.request.use(
    (config) => {
      const token = getTokenFromCache();
      if (token) config.headers.token = "Bearer " + token;
      let lang = localStorage.getItem("locale");

      config.headers["Language"] = lang || "uz";

      return config;
    },
    (error) => Promise.reject(error)
  );

  api.interceptors.response.use(
    (response) => {
      return response.data;
    },
    async (error) => {
      const status = error?.response?.status;
      let message;
      if (status?.toString()?.slice(0, 1) === 5) {
        message = "Serverda xatolik";
      } else {
        message = "Noma'lum xatolik";
      }
      if (message) {
        Notify.create({
          progress: true,
          position: "top",
          message,
          type: "negative",
          timeout: 6000,
        });
      }
      return { data: { result: null, error: true } };
    }
  );
});

export { api };
