import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';
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
import fetchMenuData from './lib/fetchMenu';
import AdminDashboard from './pages/AdminDashboard';
export const ProductContext = createContext();
import AdminLayout from './layout/AdminLayout';

const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: <AdminLayout/>,
    children: [
      {
        path: '/dashboard',
        element: <AdminDashboard/>,
      },
    ],
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path:'/',
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
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchMenuData();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      <RouterProvider router={router} />
    </ProductContext.Provider>
  );
}

export default App;