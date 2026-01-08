import MoDuel from "./MoDuel";
import Team from "./Team";
import Home from "./home";
import Archive from "./Archive";

export const pages = [
    {
        path: "/MoDuel",
        element: <MoDuel/>,
        title: "MoDuel"
    },
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/Team",
        element: <Team />,
        title: "Team"
    },
    {
        path: "/Archives",
        element: <Archive />,
        title: "Archives"
    }
]