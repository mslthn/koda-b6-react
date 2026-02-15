import { use, useContext } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import UserContext from "./context/UserContext"

const NavigationBar = () => {
    const navigate = useNavigate()
    const user = useContext(UserContext)

    function logOut(){
        localStorage.removeItem("loggedInUser")
        navigate("/login")
    }

    return (
        <div className="fixed w-full z-5">
            <nav className="flex flex-row justify-around bg-[#0B090921] p-5 items-center">
                <div className="flex flex-row gap-15 items-center">
                    <div>
                        <Link to="/" className="flex flex-row">
                            <img src="./src/assets/icons/logo-putih.svg" alt="Logo" />
                            <p className="font-[sacramento] text-white">Coffee Shop</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className="text-white">Home</Link>
                    </div>
                    <div>
                        <Link to="/products" className="text-white">Products</Link>
                    </div>
                </div>
                <div className="flex flex-row gap-8 items-center">
                    <div><img src="./src/assets/icons/Search.svg" alt="Search Icon" /></div>
                    <div><img src="./src/assets/icons/ShoppingCart.svg" alt="Shoping cart" /></div>
                    { user ? 
                        <>
                            <button className="text-black border border-white h-12 w-20 flex items-center justify-center rounded-lg">
                                {user.fullname}
                            </button>
                            <button onClick={()=>{logOut()}}>Log out</button>
                        </>
                        :
                        <>
                            <div className="text-white border border-white h-12 w-20 flex items-center justify-center rounded-lg">
                                <Link to="/login">Sign In</Link>
                            </div>
                            <div>
                                <Link to="/register" className="bg-[#FF8906] h-12 w-20 flex items-center justify-center rounded-lg hover:bg-orange-500">Sign Up</Link>
                            </div>
                        </>
                    }
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar