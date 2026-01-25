import { Link } from "react-router-dom"

const NavigationBar = () => {
    return (
        <>
            <nav className="flex flex-row justify-around bg-gray-500/30 p-5 items-center">
                <div className="flex flex-row gap-15 items-center">
                    <div>
                        <Link to="/" className="flex flex-row">
                            <img src="./src/assets/icons/logo-putih.svg" alt="Logo" />
                            <p className="font-sacramento">Coffee Shop</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                    <div>Products</div>
                </div>
                <div className="flex flex-row gap-10">
                    <div><img src="./src/assets/icons/Search.svg" alt="Search Icon" /></div>
                    <div><img src="./src/assets/icons/ShoppingCart.svg" alt="Shoping cart" /></div>
                    <div>Sign In</div>
                    <div>
                        <Link to="/register">Sign Up</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavigationBar