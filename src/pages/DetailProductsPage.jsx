import cartIcon from "../assets/icons/ShoppingCartOren.svg"
import MenuFrame from "../components/MenuFrame";
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom"
import ProductContext from "../components/context/ProductContext"

const DetailProductsPage = () => {
    const [product, setProduct] = useState(null)
    const [quantity, setQuantity] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [recommendations, setRecommendations] = useState([]);
    const {productId} = useParams()
    const { products, loading: productsLoading } = useContext(ProductContext)
    const navigate = useNavigate();

    const itemsPerPage = 3;

    useEffect(() => {
      if (products && products.length > 0) {
        const foundProduct = products.find(p => p.id.toString() === productId);
        setProduct(foundProduct);

        const recommendedProducts = products.filter(p => p.id.toString() !== productId);
        setRecommendations(recommendedProducts);
        
        setQuantity(1);
        window.scrollTo(0, 0);
      }
    }, [products, productId]);

    const handleIncrement = () => {
      setQuantity(prev => prev + 1);
    };

    const handleDecrement = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    };
    
    const totalPages = Math.ceil(recommendations.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = recommendations.slice(startIndex, endIndex);
    
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
    
    const getPageNumbers = () => {
      const pages = [];
      for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
      }
      return pages.slice(0, 4);
    };

    const toDetailProduct = (id) => {
      navigate(`/products/${id}`);
    };

    if (productsLoading) {
      return <div className="flex justify-center items-center h-screen text-2xl">Loading product...</div>;
    }

    if (!product) {
        return <div className="flex justify-center items-center h-screen text-2xl">Product not found.</div>;
    }
    
    return (
        <div>
            <div className="flex flex-col md:flex-row gap-10 mx-5 md:mx-20 mb-20 mt-40">
                <div className="w-1/2 flex flex-col gap-3 justify-center">
                    <div className="flex justify-center">
                        <img
                          src={product.images?.[0]}
                          alt={product.title}
                          className="w-full h-auto max-h-[500px] object-cover rounded-lg"
                        />
                    </div>
                    <div className="flex flex-row gap-5 justify-center">
                        {product.images?.slice(1, 4).map((img, index) => (
                          <div key={index}>
                            <img
                              src={img}
                              alt={`${product.title} view ${index + 1}`}
                              className="object-cover size-32 md:size-45 rounded-lg"
                            />
                          </div>
                        ))}

                        {/* {product.images.slice(1, 4).map((img, index) => (
                             <div key={index}><img className="object-cover size-32 md:size-45 rounded-lg" src={img} alt={`${product.title} view ${index + 1}`} /></div>
                        ))} */}
                    </div>
                </div>
                <div className="w-1/2 flex flex-col gap-3">
                    {product.flashSale && (
                        <div className="text-xl text-white bg-[#d00000] font-bold w-fit px-8 py-1 rounded-3xl">FLASH SALE</div>
                    )}
                    <div className="text-5xl font-medium">{product.title}</div>
                    <div className="flex gap-3 items-center">
                      {product.oldPrice && (
                        <div className="text-[#d00000] line-through">
                          IDR {product.oldPrice.toLocaleString("id-ID")}
                        </div>
                      )}

                      <div className="text-[#ff8906] text-2xl font-medium">
                        IDR {product.price?.toLocaleString("id-ID")}
                      </div>
                    </div>

                    {/* <div className="flex gap-3 items-center">
                        {product.oldPrice && (
                            <div className="text-[#d00000] text-lg font-medium font-[Plus_Jakarta_Sans] line-through">
                                IDR {product.oldPrice.toLocaleString('id-ID')}
                            </div>
                        )}
                        <div className="text-[#ff8906] text-2xl font-medium font-[Plus_Jakarta_Sans]">
                            IDR {product.price.toLocaleString('id-ID')}
                        </div>
                    </div> */}

                    {product.rating && (
                      <div>⭐ {product.rating} (200+ Reviews | Recommendation)</div>
                    )}
                    {/* <div>⭐ {product.rating} (200+ Reviews | Recommendation)</div> */}
                    
                    <div>
                      {product.description || "No description available."}
                    </div>
                    {/* <div>{product.description}</div> */}
                    
                    <div className="flex flex-row gap-5 items-center">
                        <button className="size-10 border-2 border-[#FF8906] rounded-lg text-3xl flex items-center justify-center"
                          onClick={handleDecrement}
                        >
                          -</button>
                        <div className="text-2xl">{quantity}</div>
                        <button className="size-10 bg-[#FF8906] rounded-lg text-3xl flex items-center justify-center text-white"
                          onClick={handleIncrement}
                        >
                          +
                        </button>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="text-2xl font-bold">Choose Size</div>
                        <div className="flex flex-row gap-5 w-full">
                            <button className="w-1/3 border border-[#FF8906] py-2 rounded-md hover:bg-orange-100">Regular</button>
                            <button className="w-1/3 border border-[#FF8906] py-2 rounded-md hover:bg-orange-100">Medium</button>
                            <button className="w-1/3 border border-[#FF8906] py-2 rounded-md hover:bg-orange-100">Large</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="text-2xl font-bold">Hot/Ice?</div>
                        <div className="flex flex-row gap-5 w-full">
                            <button className="w-1/2 border border-[#FF8906] py-2 rounded-md hover:bg-orange-100">Ice</button>
                            <button className="w-1/2 border border-[#FF8906] py-2 rounded-md hover:bg-orange-100">Hot</button>
                        </div>
                    </div>
                    <div className="flex flex-row gap-3 mt-4">
                        <button className="w-1/2 bg-[#FF8906] p-3 rounded-lg text-white font-bold">Buy</button>
                        <button className="flex items-center justify-center gap-2 p-3 rounded-lg w-1/2 border border-[#FF8906] font-bold">
                            <img src={cartIcon} alt="Add to cart" />
                            Add to cart</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 p-5 md:p-20 pt-0 items-center">
                <div className="text-5xl mb-5">Recommendation for you</div>
                <div className="w-full">
                    <div>
                        {productsLoading ? (
                          <div className="flex justify-center items-center h-64">
                            <p className="text-xl">Loading recommendations...</p>
                          </div>
                        ) : (
                          <>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                              {currentItems.map((item) => (
                                <div
                                    key={item.id}
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

            </div>
        </div>
    )
}

export default DetailProductsPage