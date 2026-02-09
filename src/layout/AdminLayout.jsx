import { Outlet } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar.jsx';
import AdminSidebar from '../components/AdminSidebar.jsx';

const AdminLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AdminNavbar />
      {/* <main className="flex-grow"> */}
        <Outlet />
      {/* </main> */}
      <AdminSidebar />
    </div>
  );
};

export default AdminLayout;