import { $t } from "@/plugins/i18n";
import type { RouteConfigsTable } from "/#/index";

const testRouter: RouteConfigsTable = {
  path: "/test",
  redirect: "/test/index",
  meta: {
    icon: "test",
    title: $t("menus.hstest-ymf"),
    rank: 16
  },
  children: [
    {
      path: "/test/index",
      name: "Test",
      component: () => import("@/views/test/index.vue"),
      meta: {
        title: $t("menus.hstest-ymf")
      }
    }
  ]
};

export default testRouter;
