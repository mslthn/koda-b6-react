import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
import AdminLayout from './layout/AdminLayout';
import UserContext from './components/context/UserContext';
import ProductContext from './components/context/ProductContext';

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
        path: 'products/:productId',
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
  const [user, setUser] = useState(null)

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

    setUser(JSON.parse(localStorage.getItem("loggedInUser")) || null)
  }, []);

  return (
    <UserContext value={user}>
      <ProductContext.Provider value={{ products, loading, error }}>
        <RouterProvider router={router} />
      </ProductContext.Provider>
    </UserContext>
  );
}

export default App;