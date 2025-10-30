import { useRoutes } from "react-router-dom";
import { pages } from "./Pages";

const Routes = () => {
    return <div>
        {useRoutes(pages)}
    </div>
}

export default Routes