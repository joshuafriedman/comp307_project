import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Classes from "./views/Classes.vue";
import Login from "./views/Login.vue";
import GeneralInfo from "./views/GeneralInfo.vue";
import News from "./views/News.vue";
import People from "./views/People.vue";
import NewPage from "./views/NewPage.vue";





Vue.use(Router);



export default new Router({
    // mode: "history",
    base: process.env.BASE_URL,
    routes: [
      {
        path: "/",
        name: "home",
        component: Home,
        props: (route) => ({ query: route.query.success_id }) 
      },
      {
        path: "/classes",
        name: "classes",
        component: Classes,
      },
      {
        path: "/login",
        name: "login",
        component: Login,
      },
      {
        path: "/Login",
        name: "login",
        component: Login,
      },
      {
        path: "/people",
        name: "people",
        component: People,
      },
      {
        path: "/news",
        name: "news",
        component: News,
      },
      {
        path: "/general-info",
        name: "general-info",
        component: GeneralInfo,
      },
      {
        path: "/new-page",
        name: "new-page",
        component: NewPage,
      },
    ]
  });
  