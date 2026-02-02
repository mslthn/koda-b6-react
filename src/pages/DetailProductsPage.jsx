import bigImage from "../assets/images/cafe-latte.jpg"
import smImage1 from "../assets/images/hazelnut-latte.png"
import smImage2 from "../assets/images/Authentic-Coffee.jpg"
import smImage3 from "../assets/images/latte-art-detail.jpg"
import cartIcon from "../assets/icons/ShoppingCartOren.svg"
import MenuFrame from "../components/MenuFrame"
import { useState, useEffect } from "react"

const DetailProductsPage = () => {
    const [menuData, setMenuData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 3;

    useEffect(() => {
        const fetchMenuData = async () => {
          try {
            setLoading(true);
            const response = await fetch(
              "https://raw.githubusercontent.com/mslthn/koda-b6-react/refs/heads/main/src/assets/data/products.json",
            );
            const data = await response.json();
            setMenuData(data);
            setFilteredData(data);
          } catch (error) {
            console.error("Error fetching menu data:", error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchMenuData();
      }, []);
    
      const totalPages = Math.ceil(filteredData.length / itemsPerPage);
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const currentItems = filteredData.slice(startIndex, endIndex);
    
      const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ behavior: "smooth" });
        // window.scrollTo({ top: 0, behavior: "smooth" });
      };
    
      const getPageNumbers = () => {
        const pages = [];
        const maxPagesToShow = 4;
    
        if (totalPages <= maxPagesToShow) {
          for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
          }
        } else {
          if (currentPage <= 2) {
            pages.push(1, 2, 3, 4);
          } else if (currentPage >= totalPages - 1) {
            pages.push(totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
          } else {
            pages.push(
              currentPage - 1,
              currentPage,
              currentPage + 1,
              currentPage + 2,
            );
          }
        }
        return pages;
      };
    
    return (
        <div>
            <div className="flex flex-row gap-5 mx-20 mb-20 mt-40">
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
                    {/* Products */}
                    <div>
                        {loading ? (
                          <div className="flex justify-center items-center h-64">
                            <p className="text-xl">Loading products...</p>
                          </div>
                        ) : (
                          <>
                            <div className="grid grid-cols-3 gap-5">
                              {currentItems.map((item, index) => (
                                <MenuFrame
                                  key={item.id || index}
                                  image={item.image}
                                  title={item.title || item.name}
                                  description={item.description}
                                  showRating={true}
                                  rating={item.rating}
                                  oldPrice={item.oldPrice}
                                  price={item.price}
                                  showFlashSale={item.flashSale || false}
                                />
                              ))}
                            </div>
                          
                            {/* Pagination */}
                            {totalPages > 1 && (
                              <div className="flex gap-5 justify-center w-full mt-8">
                                {getPageNumbers().map((pageNum) => (
                                  <button
                                    key={pageNum}
                                    onClick={() => handlePageChange(pageNum)}
                                    className={`size-13 flex items-center justify-center rounded-full text-2xl ${
                                      currentPage === pageNum
                                        ? "bg-[#FF8906] text-white"
                                        : "bg-gray-200 text-gray-500"
                                    }`}
                                  >
                                    {pageNum}
                                  </button>
                                ))}

                                {currentPage < totalPages && (
                                  <button
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    className="size-13 flex items-center justify-center rounded-full text-2xl text-gray-500 bg-gray-200"
                                  >
                                    &rarr;
                                  </button>
                                )}
                              </div>
                            )}
                          </>
                        )}
                    </div>
                    {/* <MenuFrame
                                image='src/assets/images/chocolatte-frappe.jpg'
                                title='Chocolatte Frappe'
                                description='You can explore the menu that we provide with fun and have their own taste and make your day better.'
                                showRating={true}
                                oldPrice='20.000'
                                price='10.000'
                                showFlashSale={true}/>
                    <MenuFrame
                                image='src/assets/images/chocolatte-frappe.jpg'
                                title='Chocolatte Frappe'
                                description='You can explore the menu that we provide with fun and have their own taste and make your day better.'
                                showRating={true}
                                oldPrice='20.000'
                                price='10.000'
                                showFlashSale={true}/>
                    <MenuFrame
                                image='src/assets/images/chocolatte-frappe.jpg'
                                title='Chocolatte Frappe'
                                description='You can explore the menu that we provide with fun and have their own taste and make your day better.'
                                showRating={true}
                                oldPrice='20.000'
                                price='10.000'
                                showFlashSale={true}/> */}
                </div>

            </div>
        </div>
    )
}

export default DetailProductsPage