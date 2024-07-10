import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Detail } from "./routes/Detail";
import Home from "./routes/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const router = createBrowserRouter([
    {
      path: "/react",
      element: (
        <Home/>
      ),
    },
    {
      path: "/react/movie/:id",
      element: (
        <Detail/>
      ),
    },
  ]);
  return (
    <RouterProvider router={router}/>
  )

}

export default App;
