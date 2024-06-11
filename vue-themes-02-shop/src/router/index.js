import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import ShopMain from "@/pages/shop/ShopMain.vue";
import ShopDetail from "@/pages/shop/ShopDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {path: "/", name: "home", component: Home,},
    {path: "/shop", name: "shopMain", component: ShopMain,},
    {path: "/shop/:id", name: "shopDetail", component: ShopDetail,},
  ],
});

export default router;
