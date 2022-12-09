import AuthMiddleware from "src/router/middlewares/auth";
const routes = [
  {
    path: "/auth/",
    component: () => import("src/layouts/AuthLayout.vue"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("src/pages/auth/LoginPage.vue"),
      },
      // {
      //   path: "register",
      //   name: "register",
      //   component: () => import("src/pages/auth/RegisterPage.vue"),
      // },
      // {
      //   path: "recover-password",
      //   name: "recover_password",
      //   component: () => import("src/pages/auth/RecoverPasswordPage.vue"),
      // },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "index",
        component: () => import("src/pages/IndexPage.vue"),
      },

      {
        path: "add",
        name: "add",
        component: () => import("pages/add/IndexPage.vue"),
      },
      {
        path: "search-tel",
        name: "search-tel",
        component: () => import("pages/search-tel/IndexPage.vue"),
      },
      {
        path: "chat",
        name: "chat",
        component: () => import("pages/chat/IndexPage.vue"),
      },
      {
        path: "profile",
        name: "profile",
        component: () => import("pages/profile/IndexPage.vue"),
        meta: { middlewares: [AuthMiddleware] },
      },
      {
        path: "category",
        name: "category",
        component: () => import("pages/category/IndexPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
