import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import ForgotPasswordPage from './pages/ForgotPassword';
import ProductsPage from './pages/ProductsPage';
import DetailProductsPage from './pages/DetailProductsPage';
import CheckoutProductPage from './pages/CheckoutProductPage';
import OrderHistory from './pages/OrderHistory';
import OrderDetail from './pages/OrderDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'detailProduct',
        element: <DetailProductsPage />,
      },
      {
        path: 'checkoutProduct',
        element: <CheckoutProductPage />,
      },
      {
        path: 'orderHistory',
        element: <OrderHistory />,
      },
      {
        path: 'orderDetail',
        element: <OrderDetail />,
      },
    ],
  },
  {
    path: 'register',
    element: <RegisterPage />,
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: 'forgotPassword',
    element: <ForgotPasswordPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;