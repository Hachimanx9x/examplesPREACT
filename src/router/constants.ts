import { Home, Other } from "../views";

export const listRoutes = [
  {
    path: "/",
    component: Home,
    auth: false,
  },
  {
    path: "/Other",
    component: Other,
    auth: false,
  },
];
