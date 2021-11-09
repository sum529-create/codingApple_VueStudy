import { createWebHistory, createRouter } from "vue-router";
import List from "@/components/List";
import MainContent from "@/components/MainContent";
import Detail from "@/components/Detail";
import Author from "@/components/Author";
import Comment from "@/components/Comment";

const routes = [
  /* 위에 적용할 수록 우선권을 갖는다. */
  {
    path: "/detail/:id",
    component: Detail,
    /* 특정 페이지 안에서 route를 나누고 싶을 경우 nested routes */
    children: [
      {
        path: "author",
        component: Author,
      },
      {
        path: "comment",
        component: Comment,
        // to - 목적지 페이지, from - 출발 페이지
        // beforeEnter: (to, from) => {
        //   console.log(to.fullPath);
        //   console.log(to.params.id);
        //   console.log(from.fullPath);
        //   return false;
        // },
      },
    ],
  },
  {
    path: "/list",
    component: List,
    // 경로로 들어가기 전에 뭔가 검사를 하려고 할 시 : Navigation guards
    // beforeEnter: () => {
    //   if (isLogin == false) {
    //     return '/login'
    //   }
    // },
  },
  {
    path: "/",
    component: MainContent,
  },
  {
    path: "/:anything(.*)" /* 모든 문자라는 정규식 표현 (404페이지) */,
    component: MainContent,
  },
];

const router = createRouter({
  // history: createWebHashHistory(), /detail/# 으로 사용되어 # 뒤 내용은 서버에 전송되지 않음
  history: createWebHistory(),
  routes,
});

export default router;
