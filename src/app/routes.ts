import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Aquarium from "./pages/Aquarium";
import FishList from "./pages/FishList";
import AngelFishDetail from "./pages/AngelFishDetail";
import CorydoraDetail from "./pages/CorydoraDetail";
import GoldfishDetail from "./pages/GoldfishDetail";
import GuppyDetail from "./pages/GuppyDetail";
import KuhliLoachDetail from "./pages/KuhliLoachDetail";
import NeonTetraDetail from "./pages/NeonTetraDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/aquarium",
    Component: Aquarium,
  },
  {
    path: "/fish-list",
    Component: FishList,
  },
  {
    path: "/fish/angelfish",
    Component: AngelFishDetail,
  },
  {
    path: "/fish/corydora",
    Component: CorydoraDetail,
  },
  {
    path: "/fish/goldfish",
    Component: GoldfishDetail,
  },
  {
    path: "/fish/guppy",
    Component: GuppyDetail,
  },
  {
    path: "/fish/kuhli-loach",
    Component: KuhliLoachDetail,
  },
  {
    path: "/fish/neon-tetra",
    Component: NeonTetraDetail,
  },
]);
