import Home from "../pages/Home/home";
import ProfileCard from "../pages/Profile/profilecard";
import Search from "../pages/Search/search";
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
  {
    path: "/search",
    component: Search,
  },
  {
    path: "/profile",
    component: ProfileCard,
  },
];
