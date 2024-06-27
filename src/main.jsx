import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/layout/Layout.jsx'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AboutUs from './page/about-us/AboutUs.jsx'
import Products from './page/products/Products.jsx'
import ContactUs from './page/contact-us/ContactUs.jsx'
import Error from './page/error-page/Error.jsx'
import Count from './page/counter/Count.jsx'
import ProductDetail from './page/product-detail/ProductDetail.jsx'
import Cart from './page/cart/Cart.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <Error />,
    children:[
      {
        path: "/",
        element: <App/>
      },
      {
        path: "/about-us",
        element: <AboutUs/>
      },
      {
        path: "/products",
        element: <Products/>
      },
      {
        path: "/contact-us",
        element: <ContactUs/>
      },
      {
        path: "/count",
        element: <Count/>
      },
      {
        path: "/product/:id",
        element: <ProductDetail/>
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);

