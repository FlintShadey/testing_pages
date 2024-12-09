import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

import Concussion from "../views/conditions/Concussion.vue";
import About from "../views/About.vue";
import HeadInjury from "../views/conditions/HeadInjury.vue";
import HeadInjuryNoCT from "../views/conditions/HeadInjuryNoCT.vue";
const routes = [
  { path: "/", name: "Home", component: Home },

  { path: "/concussion", name: "Concussion", component: Concussion},
  { path: "/about", component: About },
  { path: "/head-injury", component: HeadInjury },
  { path: "/head-injury-no-ct", component: HeadInjuryNoCT },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
