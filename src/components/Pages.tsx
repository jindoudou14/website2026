import MoDuel from "./MoDuel";
import Team from "./Team";
import Home from "./home";
import Archive from "./Archive";
import Credits from "./Credits";
import Quiz from "./quiz";
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
    },
    {
        path: "/Credits",
        element: <Credits />,
        title: "Credits"
    },
    {
        path: "/Island",
        element: <Quiz />,
        title: "Island"
    },
    {
        path: "/panel",
        // element: <Home />,
        title: "Control Panel"
    }
]