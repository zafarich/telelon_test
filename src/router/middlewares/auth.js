import { useUserStore } from "src/stores/user";
export default async function auth({ next }) {
  // next();
  // return;
  const userStore = useUserStore();
  if (userStore.isAuth) {
    return next();
  }
  next({ name: "index" });
}
