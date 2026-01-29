import bigImage from "../assets/images/cafe-latte.jpg"
import smImage1 from "../assets/images/hazelnut-latte.png"
import smImage2 from "../assets/images/Authentic-Coffee.jpg"
import smImage3 from "../assets/images/latte-art-detail.jpg"
import cartIcon from "../assets/icons/ShoppingCartOren.svg"
import MenuFrame from "../components/MenuFrame"

const DetailProductsPage = () => {
    return (
        <div>
            <div className="flex flex-row gap-5 mx-20 my-20">
                <div className="w-1/2 flex flex-col gap-3 justify-center">
                    <div className="flex justify-center">
                        <img className="size-150 object-cover" src={bigImage} alt="latte art image" />
                    </div>
                    <div className="flex flex-row gap-5 justify-center">
                        <div><img className="object-cover size-45" src={smImage1} alt="latte art image" /></div>
                        <div><img className="object-cover size-45" src={smImage2} alt="arabica coffee" /></div>
                        <div><img className="object-cover size-45" src={smImage3} alt="Latte art image" /></div>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col gap-3">
                    <div className="text-xl text-white bg-[#d00000] font-bold w-fit px-8 py-1 rounded-3xl">FLASH SALE</div>
                    <div className="text-5xl font-medium">Hazelnut Latte</div>
                    <div className="flex gap-3">
                        <div className="text-[#d00000] text-xs font-medium font-[Plus_Jakarta_Sans] line-through">IDR 20.000</div>
                        <div className="text-[#ff8906] text-2xl font-medium font-[Plus_Jakarta_Sans]">IDR 10.000</div>
                    </div>
                    <div>rating</div>
                    <div>200+ Reviews | Recommendation</div>
                    <div>Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.</div>
                    <div className="flex flex-row gap-5 items-center">
                        <button className="size-10 border-2 border-[#FF8906] rounded-lg text-3xl flex items-center justify-center">-</button>
                        <div className="text-2xl">1</div>
                        <button className="size-10 bg-[#FF8906] rounded-lg text-3xl flex items-center justify-center">+</button>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="text-2xl font-bold">Choose</div>
                        <div className="flex flex-row gap-5 w-full">
                            <button className="w-1/3 border-1 border-[#FF8906]">Regular</button>
                            <button className="w-1/3 border-1 border-[#FF8906]">Medium</button>
                            <button className="w-1/3 border-1 border-[#FF8906]">Large</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="text-2xl font-bold">Hot/Ice?</div>
                        <div className="flex flex-row gap-5 w-full">
                            <button className="w-1/2 border-1 border-[#FF8906]">Ice</button>
                            <button className="w-1/2 border-1 border-[#FF8906]">Hot</button>
                        </div>
                    </div>
                    <div className="flex flex-row gap-3">
                        <button className="w-1/2 bg-[#FF8906] p-3 rounded-lg">Buy</button>
                        <button className="flex items-center justify-center p-3 rounded-lg w-1/2 border-1 border-[#FF8906]">
                            <img src={cartIcon} alt="Add to cart" />
                            Add to cart</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 p-20 pt-0 items-center">
                <div className="text-5xl">Recommendation for you</div>
                <div className="flex flex-row gap-5">
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
                </div>
                <div className="flex gap-5 justify-center w-full col-span-2 mt-5">
                    <button className="size-13 flex items-center justify-center rounded-full text-2xl text-gray-500 bg-gray-200">1</button>
                    <button className="size-13 flex items-center justify-center rounded-full text-2xl text-gray-500 bg-gray-200">2</button>
                    <button className="size-13 flex items-center justify-center rounded-full text-2xl text-gray-500 bg-gray-200">3</button>
                    <button className="size-13 flex items-center justify-center rounded-full text-2xl text-gray-500 bg-gray-200">4</button>
                    <button className="size-13 flex items-center justify-center rounded-full text-2xl text-gray-500 bg-gray-200">&rarr;</button>
                </div>
            </div>
        </div>
    )
}

export default DetailProductsPage