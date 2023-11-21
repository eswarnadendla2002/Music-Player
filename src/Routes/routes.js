import Home from "../pages/Home/home";
import Signup from "../pages/Signup/signup";
import Login from "../pages/login/login";

export const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/",
    component: Login,
  },
  {
    path: "/signup",
    component: Signup,
  },
  {
    path: "/home",
    component: Home,
  },
];
