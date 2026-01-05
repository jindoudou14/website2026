import MoDuel from "./MoDuel";
import Team from "./Team";
import Home from "./home";

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
    }
]