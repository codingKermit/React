import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Detail, loader as detailLoader } from "./routes/Detail";
import Home from "./routes/Home";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home/>
      ),
    },
    {
      path: "/movie/:id",
      element: (
        <Detail/>
      ),
      loader : detailLoader
    },
  ],{
    basename:"/react"
  });
  return (
    <RouterProvider router={router}/>
  )

}

export default App;
