// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import {createBrowserRouter, RouterProvider, } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import RegisterPage from './pages/Register'
import LoginPage from './pages/Login'
import ForgotPasswordPage from './pages/ForgotPassword'
import ProductsPage from './pages/ProductsPage'
import DetailProductsPage from './pages/DetailProductsPage'

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
  }
])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
