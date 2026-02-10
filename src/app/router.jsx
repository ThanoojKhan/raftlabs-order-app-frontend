import { createBrowserRouter } from "react-router-dom";

import AppLayout from "./AppLayout";
import Menu from "../features/menu/MenuPage";
import Cart from "../features/cart/CartPage";
import Checkout from "../features/order/CheckoutPage";
import TrackOrder from "../features/order/TrackOrderPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Menu /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/track/:id", element: <TrackOrder /> },
    ],
  },
]);

export default router;