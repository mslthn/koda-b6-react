import { Link } from "react-router-dom"
import { MdExpandMore } from "react-icons/md";
import { PiShoppingCartLight } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";

const AdminNavbar = () => {
    return (
        <div className="fixed w-full z-5">
            <nav className="flex flex-row justify-between bg-[#FFFFFF] border-1 border-[#E8E8E8] p-5 px-10 items-center">
                <div className="flex flex-row gap-15 items-center">
                    <div>
                        <Link to="/" className="flex flex-row">
                            <img src="./src/assets/icons/coffee.svg" alt="Logo" />
                            <p className="font-[sacramento] text-[#8E6447]">Coffee Shop</p>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row gap-5 items-center">
                    <div>
                        <FiSearch color="gray" size={25}/>
                    </div>
                    <div>
                        <PiShoppingCartLight color="gray" size={25}/>
                    </div>
                    <div className="text-white border border-white size-8 rounded-full flex items-center justify-center">
                        <img className="rounded-full" src="https://i.pravatar.cc/30?img=37" alt="Profile" />
                    </div>
                    <div>
                        <MdExpandMore color="gray" size={25}/>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AdminNavbar