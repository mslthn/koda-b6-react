import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="flex flex-row gap-5 p-10 bg-gray-300/30 justify-center">
            <div className="w-md flex flex-col gap-5">
                <div className="flex flex-row">
                    <img src="./src/assets/icons/coffee.svg" alt="Logo" />
                    <div className="font-sacramento">Coffee Shop</div>
                </div>
                <div>Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</div>
                <div>&copy;2020CoffeeStore</div>
            </div>
            <div className="w-3xs flex flex-col gap-5">
                <h4 className="text-18px font-bold">Product</h4>
                <ul>
                    <li>Our Product</li>
                    <li>Pricing</li>
                    <li>Locations</li>
                    <li>Countries</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="w-3xs flex flex-col gap-5">
                <h4 className="text-18px font-bold">Engage</h4>
                <ul>
                    <li>Partner</li>
                    <li>FAQ</li>
                    <li>About Us</li>
                    <li>Privacy Policy</li>
                    <li>Term of Service</li>
                </ul>
            </div>
            <div className="w-sm flex flex-col gap-5">
                <h4 className="text-18px font-bold">Social Media</h4>
                <div className="flex flex-row gap-3">
                    <img src="./src/assets/icons/Facebook-oren.svg" alt="Facebook"/>
                    <img src="./src/assets/icons/Twitter.svg" alt="Twitter"/>
                    <img src="./src/assets/icons/Instagram.svg" alt="Instagram"/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;