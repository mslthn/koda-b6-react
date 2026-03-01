import { use, useContext } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import UserContext from "./context/UserContext"

const NavigationBar = () => {
    const navigate = useNavigate()
    const user = useContext(UserContext)

    function toProductPage(){
        navigate("/products")
    }

    function logOut(){
        localStorage.removeItem("loggedInUser")
        navigate("/login")
    }

    return (
        <div className="fixed w-full z-5">
            <nav className=" flex flex-row justify-around bg-[#0B090921] p-5 items-center">
                <div className="flex flex-row gap-15 items-center">
                    <div>
                        <Link to="/" className="flex flex-row">
                            <img src="../src/assets/icons/logo-putih.svg" alt="Logo" />
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
                    <div>
                        <svg onClick={()=>{toProductPage()}} className="cursor-pointer" stroke="currentColor" color="white" fill="none" stroke-width="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z" fill="currentColor"></path></svg>
                    </div>
                    <div>
                        <svg className="cursor-pointer" stroke="currentColor" color="white" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path></svg>
                        {/* <img src="../src/assets/icons/ShoppingCart.svg" alt="Shoping cart" /> */}
                    </div>
                    { user ? 
                        <>
                            <button className="cursor-pointer text-black font-semibold border border-white bg-orange-300 size-10 rounded-full flex items-center justify-center"
                                // next klik tampilin pilihan Profile, logout
                                // onClick={}
                            >
                                {(user.fullname).charAt(0)}
                            </button>
                            <button
                                className="cursor-pointer border border-[#FF8906] bg-amber-500 hover:bg-amber-600 rounded-lg px-5 py-2" 
                                onClick={()=>{logOut()}}
                                >Log out</button>
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