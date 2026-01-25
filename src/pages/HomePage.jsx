import { Link } from "react-router-dom"
import NavigationBar from "../components/Navbar"

const HomePage = ()=>{
    return (
        <>
        <div>
            <NavigationBar />
            <h1>Home Page</h1>

            {/* <Link to="/register">Register</Link> */}
        </div>
        </>
    )
}

export default HomePage