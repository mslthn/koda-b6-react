import imageOrder from "../assets/images/hazelnut-latte.png";
import Button from "../components/Button";
import briLogo from "../assets/icons/Bank BRI (Bank Rakyat Indonesia) Logo (SVG-240p) - FileVector69 1.svg";
import danaLogo from "../assets/icons/Logo DANA (PNG-240p) - FileVector69 1.svg";
import bcaLogo from "../assets/icons/Bank BCA Logo (SVG-240p) - FileVector69 1.svg";
import gopay from "../assets/icons/Logo GoPay (SVG-240p) - FileVector69 1.svg";
import ovo from "../assets/icons/Vector.svg";
import paypal from "../assets/icons/logos_paypal.svg";
import Input from "../components/Input";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";

const CheckoutProductPage = () => {
  return (
    <>
      <div className="m-20 flex flex-col gap-5">
        <div className="text-3xl">Payment Details</div>
        <div className="flex flew-row gap-5">
          <div className="w-2/3 flex flex-col gap-10">
            <div>
              <div className="flex justify-between pr-20">
                <div className="text-xl">Your Order</div>
                <div>
                  <button className="bg-[#FF8906] rounded-lg px-10 py-2">
                    + Add Menu
                  </button>
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <div className="w-1/3">
                  <img src={imageOrder} alt="Hazelnut Latte" />
                </div>
                <div className="w-1/3 flex flex-col gap-3">
                  <div className="text-sm text-white bg-[#d00000] font-bold w-fit px-5 py-1 rounded-3xl">
                    FLASH SALE!
                  </div>
                  <div className="text-lg font-medium">Hazelnut Latte</div>
                  <div>2pcs | Regular | Ice | Dine in</div>
                  <div className="flex flex-row gap-3 items-center">
                    <div className="text-[#d00000] text-sm line-through">
                      IDR 20.000
                    </div>
                    <div className="text-[#ff8906] text-lg">IDR 10.000</div>
                  </div>
                </div>
                <div className="w-1/3 flex justify-center items-center">
                  <p className="flex items-center justify-center text-red-600 rounded-full w-8 h-8 border-1 border-red-600">
                    X
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="text-xl">Payment Info & Delivery</div>
              <form className="flex flex-col gap-3">
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Enter Your Email"
                    src="./src/assets/icons/mail.svg"
                    alt="Email Icon"
                  ></Input>
                  <Input
                      label="Full Name"
                      name="fullname"
                      type="text"
                      id="fullname"
                      placeholder="Enter Your Full Name"
                      src="./src/assets/icons/Profile.svg"
                      alt="Profile Icon"
                    ></Input>
                    <Input
                      label="Address"
                      name="address"
                      type="text"
                      id="address"
                      placeholder="Enter Your Address"
                      src="./src/assets/icons/Location.svg"
                      alt="Profile Icon"
                    >
                    </Input>
                    <div>
                        <div>Delivery</div>
                        <div className="flex justify-between">
                            <button className="w-1/3 mx-2 h-8 border-1 border-[#FF8906]">Dine In</button>
                            <button className="w-1/3 mx-2 h-8 border-1 border-[#FF8906]">Door Delivery</button>
                            <button className="w-1/3 mx-2 h-8 border-1 border-[#FF8906]">Pick Up</button>
                        </div>
                    </div>
              </form>
            </div>
          </div>
          <div className="w-1/3 flex flex-col gap-3">
            <div>Total</div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <div>Order</div>
                <div>Idr. 40.000</div>
              </div>
              <div className="flex justify-between">
                <div>Delivery</div>
                <div>Idr. 0</div>
              </div>
              <div className="flex justify-between">
                <div>Tax</div>
                <div>Idr. 4000</div>
              </div>
              <div className="flex justify-between border-t-2 border-gray-200">
                <div>Sub Total</div>
                <div>Idr. 44.000</div>
              </div>
              <div>
                <Button text="Checkout"></Button>
              </div>
              <div className="flex flex-col gap-3">
                <div>We accept</div>
                <div className="flex flex-row justify-evenly">
                  <img src={briLogo} alt="BRI" />
                  <img src={danaLogo} alt="DANA" />
                  <img src={bcaLogo} alt="BCA" />
                  <img src={gopay} alt="GOPAY" />
                  <img src={ovo} alt="OVO" />
                  <img src={paypal} alt="PAYPAL" />
                </div>
                <div>*Get discount if you pay with Bank Central Asia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutProductPage;
