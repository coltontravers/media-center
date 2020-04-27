import { faHome, faUsers } from "@fortawesome/free-solid-svg-icons";
import Home from "../pages/Home/Home";
import Library from "../pages/Library/Library";

const routes = [
    {
        path: "/",
        name: "home",
        description: "Home",
        component: Home,
        sidebarEnabled: true,
        icon: faHome,
        exact: true
    },
    {
        path: "/library",
        name: "library",
        description: "Library",
        component: Library,
        sidebarEnabled: true,
        icon: faUsers
    }
];

export default routes;
