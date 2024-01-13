import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/ui/AppLayout";
import HomePage from "./pages/HomePage";
import UserLoginPage from "./pages/UserLoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <h1>404 PAGE NOT FOUND</h1>,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <UserLoginPage />
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
