import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/ui/AppLayout";
import HomePage from "./pages/HomePage";
import UserLoginPage from "./pages/UserLoginPage";
import ContactPage from "./pages/ContactPage";
import PurchasePage from "./pages/PurchasePage";
import RefundPage from "./pages/RefundPage";
import PrivacyPage from "./pages/PrivacyPage";

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
      {
        path: "contact",
        element: <ContactPage />
      },
      {
        path: 'purchase',
        element: <PurchasePage />
      },
      {
        path: 'refund',
        element: <RefundPage />
      },
      {
        path: 'privacy',
        element: <PrivacyPage />
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
