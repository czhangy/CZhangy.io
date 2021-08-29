import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("@/views/Main.vue"),
    meta: {
      title: "CZhangy",
    },
  },
  {
    path: "/under-construction",
    name: "Under Construction",
    component: () => import("@/views/UnderConstruction.vue"),
    meta: {
      title: "CZhangy | Under Construction",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // Scroll to top of page on redirect
  window.scrollTo(0, 0);
  // Handle metadata
  assignPageTitles();
  function assignPageTitles() {
    const nearestWithTitle = to.matched
      .slice()
      .reverse()
      .find((r) => r.meta && r.meta.title);
    const nearestWithMeta = to.matched
      .slice()
      .reverse()
      .find((r) => r.meta && r.meta.metaTags);
    if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
    Array.from(
      document.querySelectorAll("[data-vue-router-controlled]")
    ).map((el) => el.parentNode.removeChild(el));
    if (!nearestWithMeta) return next();
    nearestWithMeta.meta.metaTags
      .map((tagDef) => {
        const tag = document.createElement("meta");
        Object.keys(tagDef).forEach((key) => {
          tag.setAttribute(key, tagDef[key]);
        });
        tag.setAttribute("data-vue-router-controlled", "");
        return tag;
      })
      .forEach((tag) => document.head.appendChild(tag));
    next();
  }
});

export default router;
