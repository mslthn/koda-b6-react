import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function MenuFrame(props) {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate('/checkoutProduct')
  }

  const {
    image,
    title,
    description,
    showRating = false,
    ratingValue,
    oldPrice,
    price,
    showFlashSale = false,
  } = props;

  const rating = 5;
  const rate = Math.min(rating, 5);
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col items-center">
      {showFlashSale && (
        <h4 className="top-15 justify-self-start bg-[#d00000] text-white text-lg font-bold p-2 px-5 rounded-3xl z-3 relative">
          FLASH SALE!
        </h4>
      )}
      <header className=" z-2">
        <img src={image} alt={title} className="size-72 object-cover" />
      </header>
      <div className="bg-white w-3xs h-3/4 p-2 -mt-15  z-2">
        <h3 className="text-[22px] font-medium text-[#0b132a]">
          {title}
        </h3>
        <p className="text-[#4f5665] text-sm font-normal">
          {description}
        </p>
        {showRating && (
          <div className="flex items-center">
            {stars.slice(0, rate).map((star) => (
              <img
                key={star}
                src="src/assets/icons/star.svg"
                alt="star rating"
                className="mr-2"
              />
            ))}
            <span className="text-[#4f5665]">
              {ratingValue || `${rate}.0`}
            </span>
          </div>
        )}
        <div className="flex items-center">
          {oldPrice && (
            <span className="text-[#d00000] text-xs font-medium line-through mr-2">
              {oldPrice}
            </span>
          )}
          <span className="text-[#ff8906] text-xl font-medium ">
            {price}
          </span>
        </div>
        <footer className="flex items-center gap-2">
          <div className="flex w-2/3">
            <Button text="Buy" onClick={handleButtonClick}></Button>
          </div>
          <a href="#" className="flex w-1/3 flex items-center justify-center border border-[#ff8906] rounded-md p-1">
            <img src="src/assets/icons/ShoppingCartOren.svg" alt="icon-cart-shopping" className="w-6 h-6" />
          </a>
        </footer>
      </div>
    </div>
  );
}

export default MenuFrame;
