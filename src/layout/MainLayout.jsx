import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { useEffect, useState } from 'react';
import fetchMenuData from '../lib/fetchMenu.js';

const Layout = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    (async()=>{
      const data = await(fetchMenuData)
      setProducts(products)
    })

  },[])

  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />
      {/* <main className="flex-grow"> */}
        <Outlet />
      {/* </main> */}
      <Footer />
    </div>
  );
};

export default Layout;