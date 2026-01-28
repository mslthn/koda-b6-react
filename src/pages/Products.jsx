import { Link } from "react-router-dom";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import bgProduct from "../assets/images/bgProduct.svg"

const Products = () =>{
    return (
        <div>
            <NavigationBar/>
            <main>
                <section>
                    {/* className="bg-[url(src/assets/images/bgProduct.svg)] flex items-center" */}
                    <div className="">
                        <img src={bgProduct} alt="Coffee Milk Images" />
                    </div>
                    <div className=" text-white text-5xl">We Provide Good Coffee and Healthy Meals</div>
                    {/* <div className="h-76 w-full">
                        <div className="text-white text-5xl">We Provide Good Coffee and Healthy Meals</div>
                    </div> */}
                </section>
                <section></section>
                <section></section>
            </main>
            <Footer/>
        </div>
    )
}

export default Products