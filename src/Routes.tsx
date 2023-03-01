import { useRoutes, RouteObject } from "react-router-dom";
import App from "./App";
import NotFound from "./views/404";
import EpisodeCharacters from "./views/EpisodeCharacters";
import Episodes from "./views/Episodes";
import Locations from "./views/Locations";

const Router = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/episodes",
      element: <Episodes />,
    },
    {
      path: "/episodes/:id",
      element: <EpisodeCharacters />,
    },
    {
      path: "/locations",
      element: <Locations />,
    },
  ];

  return useRoutes(routes);
};
export default Router;
