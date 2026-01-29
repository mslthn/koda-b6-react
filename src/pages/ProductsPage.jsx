import { Link } from "react-router-dom";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import bgProduct from "../assets/images/bgProduct.svg"
import happyMothers from "../assets/images/happy-mothers-day.png"
import yellowVoucher from "../assets/images/get-a-cup-of-coffee.png"
import MenuFrame from "../components/MenuFrame";
import Input from "../components/Input";
import Button from "../components/Button";


const ProductsPage = () =>{
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
                <section>
                    <div className="flex px-20 justify-between">
                        <div className="text-3xl">Today Promo</div>
                        <div className="flex gap-5">
                            <button className="size-13 rounded-full bg-gray-300 flex items-center justify-center"><span className="text-3xl">&larr;</span></button>
                            <button className="size-13 rounded-full bg-[#FF8906] flex items-center justify-center"><span className="text-3xl">&rarr;</span></button>
                        </div>
                    </div>
                    <div className="flex  overflow-y-auto">
                        <div className="flex gap-5 mt-5">
                            <div className="w-100 h-32 flex bg-[#88B788] p-3 pb-0 rounded-2xl">
                                <div className="w-1/4"><img className="size-full" src={happyMothers} alt="Coupon" /></div>
                                <div className="w-3/4">
                                    <div className="font-bold">HAPPY MOTHER'S DAY</div>
                                    <div>Get one of our favorite menu for free!</div>
                                    <div className="text-white">Klaim Kupon</div>
                                </div>
                            </div>
                            <div className="w-100 h-32 flex bg-[#88B788] p-3 pb-0 rounded-2xl">
                                <div className="w-1/4"><img className="size-full" src={happyMothers} alt="Coupon" /></div>
                                <div className="w-3/4">
                                    <div className="font-bold">HAPPY MOTHER'S DAY</div>
                                    <div>Get one of our favorite menu for free!</div>
                                    <div className="text-white">Klaim Kupon</div>
                                </div>
                            </div>
                            <div className="w-100 h-32 flex bg-[#88B788] p-3 pb-0 rounded-2xl">
                                <div className="w-1/4"><img className="size-full" src={happyMothers} alt="Coupon" /></div>
                                <div className="w-3/4">
                                    <div className="font-bold">HAPPY MOTHER'S DAY</div>
                                    <div>Get one of our favorite menu for free!</div>
                                    <div className="text-white">Klaim Kupon</div>
                                </div>
                            </div>
                            <div className="w-100 h-32 flex bg-[#88B788] p-3 pb-0 rounded-2xl">
                                <div className="w-1/4"><img className="size-full" src={happyMothers} alt="Coupon" /></div>
                                <div className="w-3/4">
                                    <div className="font-bold">HAPPY MOTHER'S DAY</div>
                                    <div>Get one of our favorite menu for free!</div>
                                    <div className="text-white">Klaim Kupon</div>
                                </div>
                            </div>
                            <div className="w-100 h-32 flex bg-[#88B788] p-3 pb-0 rounded-2xl">
                                <div className="w-1/4"><img className="size-full" src={happyMothers} alt="Coupon" /></div>
                                <div className="w-3/4">
                                    <div className="font-bold">HAPPY MOTHER'S DAY</div>
                                    <div>Get one of our favorite menu for free!</div>
                                    <div className="text-white">Klaim Kupon</div>
                                </div>
                            </div>
                            <div className="w-100 h-32 flex bg-[#88B788] p-3 pb-0 rounded-2xl">
                                <div className="w-1/4"><img className="size-full" src={happyMothers} alt="Coupon" /></div>
                                <div className="w-3/4">
                                    <div className="font-bold">HAPPY MOTHER'S DAY</div>
                                    <div>Get one of our favorite menu for free!</div>
                                    <div className="text-white">Klaim Kupon</div>
                                </div>
                            </div>
                            <div className="w-100 h-32 flex bg-[#88B788] p-3 pb-0 rounded-2xl">
                                <div className="w-1/4"><img className="size-full" src={happyMothers} alt="Coupon" /></div>
                                <div className="w-3/4">
                                    <div className="font-bold">HAPPY MOTHER'S DAY</div>
                                    <div>Get one of our favorite menu for free!</div>
                                    <div className="text-white">Klaim Kupon</div>
                                </div>
                            </div>
                            <div className="w-100 h-32 flex bg-[#88B788] p-3 pb-0 rounded-2xl">
                                <div className="w-1/3"><img className="size-full" src={happyMothers} alt="Coupon" /></div>
                                <div className="w-3/4">
                                    <div className="font-bold">HAPPY MOTHER'S DAY</div>
                                    <div>Get one of our favorite menu for free!</div>
                                    <div className="text-white">Klaim Kupon</div>
                                </div>
                            </div>
                            <div className="w-100 h-32 flex bg-[#F5C361] p-3 pb-0 rounded-2xl">
                                <div className="w-1/4"><img className="size-full" src={yellowVoucher} alt="Coupon" /></div>
                                <div className="w-3/4">
                                    <div className="font-bold">Get a cup of coffee for free on sunday morning</div>
                                    <div>Only at 7 to 9 AM</div>
                                </div>
                            </div>
                            <div className="w-100 h-32 flex bg-[#F5C361] p-3 pb-0 rounded-2xl">
                                <div className="w-1/4"><img className="size-full" src={yellowVoucher} alt="Coupon" /></div>
                                <div className="w-3/4">
                                    <div className="font-bold">Get a cup of coffee for free on sunday morning</div>
                                    <div>Only at 7 to 9 AM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex gap-5 mx-20 my-10">
                        <form className="w-1/3 h-fit bg-[#0B0909] rounded-xl p-5 flex flex-col gap-5">
                            <div className="flex justify-between text-white font-bold">
                                <div>Filter</div>
                                <div><button type="reset">Reset Filter</button></div>
                            </div>
                            <div className="text-white">
                                <Input
                                label="Search"
                                placeholder="Search Your Product" />
                            </div>
                            <div>
                                <div className="text-white">Category</div>
                                <div className="flex flex-col gap-5 text-white">
                                    <div className="flex gap-3">
                                        <input type="checkbox" name="" id="favoriteProduct"/>
                                        <label htmlFor="favoriteProduct">Favorite Product</label>
                                    </div>
                                    <div className="flex gap-3">
                                        <input type="checkbox" name="" id="coffe"/>
                                        <label htmlFor="coffe">Coffee</label>
                                    </div>
                                    <div className="flex gap-3">
                                        <input type="checkbox" name="" id="nonCoffee"/>
                                        <label htmlFor="nonCoffee">Non Coffee</label>
                                    </div>
                                    <div className="flex gap-3">
                                        <input type="checkbox" name="" id="foods"/>
                                        <label htmlFor="foods">Foods</label>
                                    </div>
                                    <div className="flex gap-3">
                                        <input type="checkbox" name="" id="addOn"/>
                                        <label htmlFor="addOn">Add on</label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="text-white">Sort by</div>
                                <div className="flex flex-col gap-5 text-white">
                                    <div className="flex gap-3">
                                        <input type="checkbox" name="" id="buy1get1"/>
                                        <label htmlFor="buy1get1">Buy 1 Get 1</label>
                                    </div>
                                    <div className="flex gap-3">
                                        <input type="checkbox" name="" id="flashSale"/>
                                        <label htmlFor="flashSale">Flash Sale</label>
                                    </div>
                                    <div className="flex gap-3">
                                        <input type="checkbox" name="" id="birthdayPack"/>
                                        <label htmlFor="birthdayPack">Birthday Package</label>
                                    </div>
                                    <div className="flex gap-3">
                                        <input type="checkbox" name="" id="Cheap"/>
                                        <label htmlFor="Cheap">Cheap</label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2>Range Price</h2>
                                <input type="range"/>
                            </div>
                            <Button
                                type="submit"
                                text="Apply Filter"/>
                        </form>
                        <div className="w-2/3 grid grid-cols-2 col-span-2">
                            <MenuFrame
                                image='src/assets/images/chocolatte-frappe.jpg'
                                title='Chocolatte Frappe'
                                description='You can explore the menu that we provide with fun and have their own taste and make your day better.'
                                showRating={true}
                                oldPrice='IDR 20.000'
                                price='IDR 10.000'
                                showFlashSale={true}/>
                            <MenuFrame
                                image='src/assets/images/chocolatte-frappe.jpg'
                                title='Chocolatte Frappe'
                                description='You can explore the menu that we provide with fun and have their own taste and make your day better.'
                                showRating={true}
                                oldPrice='IDR 20.000'
                                price='IDR 10.000'
                                showFlashSale={true}/>
                            <MenuFrame
                                image='src/assets/images/chocolatte-frappe.jpg'
                                title='Chocolatte Frappe'
                                description='You can explore the menu that we provide with fun and have their own taste and make your day better.'
                                showRating={true}
                                oldPrice='IDR 20.000'
                                price='IDR 10.000'
                                showFlashSale={true}/>
                            <MenuFrame
                                image='src/assets/images/chocolatte-frappe.jpg'
                                title='Chocolatte Frappe'
                                description='You can explore the menu that we provide with fun and have their own taste and make your day better.'
                                showRating={true}
                                oldPrice='IDR 20.000'
                                price='IDR 10.000'
                                showFlashSale={true}/>
                            <MenuFrame
                                image='src/assets/images/chocolatte-frappe.jpg'
                                title='Chocolatte Frappe'
                                description='You can explore the menu that we provide with fun and have their own taste and make your day better.'
                                showRating={true}
                                oldPrice='IDR 20.000'
                                price='IDR 10.000'
                                showFlashSale={true}/>
                            <MenuFrame
                                image='src/assets/images/chocolatte-frappe.jpg'
                                title='Chocolatte Frappe'
                                description='You can explore the menu that we provide with fun and have their own taste and make your day better.'
                                showRating={true}
                                oldPrice='IDR 20.000'
                                price='IDR 10.000'
                                showFlashSale={true}/>
                            <div className="flex gap-5 justify-center w-full col-span-2 mt-5">
                                <button className="size-13 flex items-center justify-center rounded-full text-2xl text-gray-500 bg-gray-200">1</button>
                                <button className="size-13 flex items-center justify-center rounded-full text-2xl text-gray-500 bg-gray-200">2</button>
                                <button className="size-13 flex items-center justify-center rounded-full text-2xl text-gray-500 bg-gray-200">3</button>
                                <button className="size-13 flex items-center justify-center rounded-full text-2xl text-gray-500 bg-gray-200">4</button>
                                <button className="size-13 flex items-center justify-center rounded-full text-2xl text-gray-500 bg-gray-200">&rarr;</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default ProductsPage