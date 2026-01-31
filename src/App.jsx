import {createBrowserRouter, RouterProvider, } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import RegisterPage from './pages/Register'
import LoginPage from './pages/Login'
import ForgotPasswordPage from './pages/ForgotPassword'
import ProductsPage from './pages/ProductsPage'
import DetailProductsPage from './pages/DetailProductsPage'
import CheckoutProductPage from './pages/CheckoutProductPage'
import OrderHistory from './pages/OrderHistory'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/register",
    element: <RegisterPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/forgotPassword",
    element: <ForgotPasswordPage/>
  },
  {
    path: "/products",
    element: <ProductsPage/>
  },
  {
    path: "/detailProduct",
    element: <DetailProductsPage/>
  },
  {
    path: "/checkoutProduct",
    element: <CheckoutProductPage/>
  },
  {
    path: "/orderHistory",
    element: <OrderHistory/>
  }
])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
