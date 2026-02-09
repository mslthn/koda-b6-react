import { LuGlassWater } from "react-icons/lu";
import { TbApps } from "react-icons/tb";
import { IoBagCheckOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { FiCoffee } from "react-icons/fi";

const AdminSidebar = () => {
  const menuItems = [
    { icon: <TbApps />, label: 'Dashboard', active: true },
    { icon: <LuGlassWater/>, label: 'Product', active: false },
    { icon: <IoBagCheckOutline/>, label: 'Promo', active: false },
    { icon: <FiUsers/>, label: 'User', active: false },
    { icon: <FiLogOut />, label: 'Product', active: false }
  ];

  return (
    <aside className="fixed left-0 top-0 h-full mt-19 w-64 bg-white border-r border-slate-200 shadow-sm z-20">
      <nav className="p-4 space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              item.active
                ? 'bg-[#FF8906] text-white shadow-md hover:shadow-lg'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className={item.active ? 'font-semibold' : 'font-medium'}>
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
