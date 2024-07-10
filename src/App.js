import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from "react-router-dom";

import { Detail } from "./routes/Detail";
import Home from "./routes/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const ErrorBoundary = () => {
    const error = useRouteError();
    return <div>⚠️ 주문 내역이 없습니다</div>;
  };

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
    },
  ],{
    basename:"/react"
  });
  return (
    <RouterProvider router={router}/>
  )

}

export default App;
