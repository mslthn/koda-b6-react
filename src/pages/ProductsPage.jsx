import { useState, useEffect } from "react";
import bgProduct from "../assets/images/bgProduct.svg";
import happyMothers from "../assets/images/happy-mothers-day.png";
import yellowVoucher from "../assets/images/get-a-cup-of-coffee.png";
import MenuFrame from "../components/MenuFrame";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const ProductsPage = () => {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);

  const itemsPerPage = 6;

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

  const navigate = useNavigate()

  const toDetailProduct = (productId) => {
    navigate (`/products/${productId}`)
  }

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      <main>
        <section>
          <div className="absolute">
            <img src={bgProduct} alt="Coffee Milk Images" className="w-screen"/>
          </div>
          <div className="relative flex flex-row top-30 pl-20 w-full items-center text-white text-5xl">
            <p>We Provide Good Coffee and Healthy Meals</p>
          </div>
        </section>

        <section className="mt-90">
          <div className="flex px-20 justify-between">
            <div className="text-3xl">Today Promo</div>
            <div className="flex gap-5">
              <button className="size-13 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-3xl">&larr;</span>
              </button>
              <button className="size-13 rounded-full bg-[#FF8906] flex items-center justify-center">
                <span className="text-3xl">&rarr;</span>
              </button>
            </div>
          </div>
          <div className="flex overflow-y-auto">
            <div className="flex gap-5 mt-5">
              <div className="w-100 h-32 flex bg-[#88B788] p-3 pb-0 rounded-2xl">
                <div className="w-1/4">
                  <img className="size-full" src={happyMothers} alt="Coupon" />
                </div>
                <div className="w-3/4">
                  <div className="font-bold">HAPPY MOTHER'S DAY</div>
                  <div>Get one of our favorite menu for free!</div>
                  <div className="text-white">Klaim Kupon</div>
                </div>
              </div>
              <div className="w-100 h-32 flex bg-[#88B788] p-3 pb-0 rounded-2xl">
                <div className="w-1/4">
                  <img className="size-full" src={happyMothers} alt="Coupon" />
                </div>
                <div className="w-3/4">
                  <div className="font-bold">HAPPY MOTHER'S DAY</div>
                  <div>Get one of our favorite menu for free!</div>
                  <div className="text-white">Klaim Kupon</div>
                </div>
              </div>
              <div className="w-100 h-32 flex bg-[#88B788] p-3 pb-0 rounded-2xl">
                <div className="w-1/4">
                  <img className="size-full" src={happyMothers} alt="Coupon" />
                </div>
                <div className="w-3/4">
                  <div className="font-bold">HAPPY MOTHER'S DAY</div>
                  <div>Get one of our favorite menu for free!</div>
                  <div className="text-white">Klaim Kupon</div>
                </div>
              </div>
              <div className="w-100 h-32 flex bg-[#F5C361] p-3 pb-0 rounded-2xl">
                <div className="w-1/4">
                  <img className="size-full" src={yellowVoucher} alt="Coupon" />
                </div>
                <div className="w-3/4">
                  <div className="font-bold">
                    Get a cup of coffee for free on sunday morning
                  </div>
                  <div>Only at 7 to 9 AM</div>
                </div>
              </div>
              <div className="w-100 h-32 flex bg-[#F5C361] p-3 pb-0 rounded-2xl">
                <div className="w-1/4">
                  <img className="size-full" src={yellowVoucher} alt="Coupon" />
                </div>
                <div className="w-3/4">
                  <div className="font-bold">
                    Get a cup of coffee for free on sunday morning
                  </div>
                  <div>Only at 7 to 9 AM</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-evenly gap-10 mx-20 my-10">
            {/* Filter Section BELUM JALAN*/}
            <form className="w-1/3 h-fit bg-[#0B0909] rounded-xl p-5 flex flex-col gap-5">
              <div className="flex justify-between text-white font-bold">
                <div>Filter</div>
                <div>
                  <button type="reset">Reset Filter</button>
                </div>
              </div>
              <div className="text-white">
                <Input label="Search" placeholder="Search Your Product" />
              </div>
              <div>
                <div className="text-white">Category</div>
                <div className="flex flex-col gap-5 text-white">
                  <div className="flex gap-3">
                    <input type="checkbox" name="" id="favoriteProduct"
                    checked={()=>{}}/>
                    <label htmlFor="favoriteProduct">Favorite Product</label>
                  </div>
                  <div className="flex gap-3">
                    <input type="checkbox" name="" id="coffe" />
                    <label htmlFor="coffe">Coffee</label>
                  </div>
                  <div className="flex gap-3">
                    <input type="checkbox" name="" id="nonCoffee" />
                    <label htmlFor="nonCoffee">Non Coffee</label>
                  </div>
                  <div className="flex gap-3">
                    <input type="checkbox" name="" id="foods" />
                    <label htmlFor="foods">Foods</label>
                  </div>
                  <div className="flex gap-3">
                    <input type="checkbox" name="" id="addOn" />
                    <label htmlFor="addOn">Add on</label>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-white">Sort by</div>
                <div className="flex flex-col gap-5 text-white">
                  <div className="flex gap-3">
                    <input type="checkbox" name="" id="buy1get1" />
                    <label htmlFor="buy1get1">Buy 1 Get 1</label>
                  </div>
                  <div className="flex gap-3">
                    <input type="checkbox" name="" id="flashSale" />
                    <label htmlFor="flashSale">Flash Sale</label>
                  </div>
                  <div className="flex gap-3">
                    <input type="checkbox" name="" id="birthdayPack" />
                    <label htmlFor="birthdayPack">Birthday Package</label>
                  </div>
                  <div className="flex gap-3">
                    <input type="checkbox" name="" id="Cheap" />
                    <label htmlFor="Cheap">Cheap</label>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-white">Range Price</h2>
                <input type="range" />
              </div>
              <Button type="submit" text="Apply Filter" 
                onClick={()=>{

              }}/>
            </form>

            {/* Products Grid */}
            <div className="w-2/3">
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <p className="text-xl">Loading products...</p>
                </div>
              ) : (
                <>
                  {/* <div className="flex flex-wrap flex-row gap-20"> */}
                  <div className="grid grid-cols-2 gap-5">
                    
                      {currentItems.map((item, index) => (
                        <div
                          key={item.id || index}
                          onClick={() => toDetailProduct(item.id)}
                          className="cursor-pointer"
                        >
                          <MenuFrame
                            image={item.images[0]}
                            title={item.title || item.name}
                            description={item.description}
                            showRating={true}
                            rating={item.rating}
                            oldPrice={item.oldPrice}
                            price={item.price}
                            showFlashSale={item.flashSale || false}
                          />
                        </div>
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
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductsPage;
