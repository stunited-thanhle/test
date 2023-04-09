import { createBrowserRouter } from "react-router-dom";
import Part01 from "./components/Part01";
import Part02 from "./components/Part02";
import Ref from "./components/useRef";
import Memoryzation from "./components/Memoryzation";
import UseHoc from "./components/Hoc";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Part01 />,
  },
  {
    path: "/useEffect",
    element: <Part02 />,
  },
  {
    path: "/Ref",
    element: <Ref />,
  },
  {
    path: "/memoryzation",
    element: <Memoryzation />,
  },
  {
    path: "/hoc",
    element: <UseHoc />,
  },
]);

export default router;
