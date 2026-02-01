import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;