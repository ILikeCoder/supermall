import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    //重定向
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: () => import("views/home/Home"), //路由懒加载
    meta: {
      title: "首页"
    }
  },

  {
    path: "/classify",
    component: () => import("views/classify/Classify"),
    meta: {
      title: "分类"
    }
  },
  {
    path: "/cart",
    component: () => import("views/cart/Cart"),
    meta: {
      title: "购物车"
    }
  },
  {
    path: "/mine",
    component: () => import("views/mine/Mine"),
    meta: {
      title: "我的"
    }
  },
  {
    path: "/detail/:iid",
    component: () => import("views/detail/Detail"),
    meta: {
      title: "详情"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  //路由导航守卫 动态改变标题
  document.title = to.matched[0].meta.title;
  next();
});
export default router;
