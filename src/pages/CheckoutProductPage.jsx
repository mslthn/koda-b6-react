import { useState } from "react";
import imageOrder from "../assets/images/hazelnut-latte.png";
import Button from "../components/Button";
import Input from "../components/Input";
import briLogo from "../assets/icons/Bank BRI (Bank Rakyat Indonesia) Logo (SVG-240p) - FileVector69 1.svg";
import danaLogo from "../assets/icons/Logo DANA (PNG-240p) - FileVector69 1.svg";
import bcaLogo from "../assets/icons/Bank BCA Logo (SVG-240p) - FileVector69 1.svg";
import gopay from "../assets/icons/Logo GoPay (SVG-240p) - FileVector69 1.svg";
import ovo from "../assets/icons/Vector.svg";
import paypal from "../assets/icons/logos_paypal.svg";
import { useNavigate } from "react-router-dom";

const CheckoutProductPage = () => {
  const navigate = useNavigate();

  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Hazelnut Latte",
      price: 10000,
      originalPrice: 20000,
      qty: 1,
      size: "Regular",
      ice: "Ice",
      delivery: "Dine In",
      image: imageOrder,
    },
  ]);

  const [formData, setFormData] = useState({
    email: "",
    fullname: "",
    address: "",
    deliveryMethod: "Dine In",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddMenu = () => {
    navigate("/products")
  };

  const handleDelete = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDelivery = (method) => {
    setFormData((prev) => ({ ...prev, deliveryMethod: method }));
  };

  const orderTotal = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const tax = orderTotal * 0.1;
  const deliveryFee = formData.deliveryMethod === "Door Delivery" ? 5000 : 0;
  const subTotal = orderTotal + tax + deliveryFee;

  const handleCheckout = () => {
    if (!formData.email || !formData.fullname || !formData.address) {
      alert("Please complete your payment info");
      return;
    }

    const orderHistory = JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      id: Date.now(),
      items: cart,
      customer: formData,
      total: subTotal,
      date: new Date().toLocaleString("id-ID"),
    };

    localStorage.setItem(
      "orders",
      JSON.stringify([...orderHistory, newOrder])
    );

    setShowSuccess(true);
    setCart([]);
  };

  return (
    <>
      <div className="m-20 mt-30 flex flex-col gap-10">
        <div className="text-5xl font-medium">Payment Details</div>

        <div className="flex gap-5">
          {/* LEFT */}
          <div className="w-2/3 flex flex-col gap-10">
            <div>
              <div className="flex justify-between pr-20">
                <div className="text-xl">Your Order</div>
                <button
                  onClick={handleAddMenu}
                  className="bg-[#FF8906] rounded-lg px-10 py-2 cursor-pointer hover:bg-[#FE9909]"
                >
                  + Add Menu
                </button>
              </div>

              {cart.map((item) => (
                <div key={item.id} className="flex gap-5 mt-5">
                  <div className="w-1/3">
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className="w-1/3 flex flex-col gap-3">
                    <div className="text-sm text-white bg-[#d00000] font-bold w-fit px-5 py-1 rounded-3xl">
                      FLASH SALE!
                    </div>
                    <div className="text-lg font-medium">{item.name}</div>
                    <div>
                      {item.qty} pcs | {item.size} | {item.ice} |{" "}
                      {item.delivery}
                    </div>
                    <div className="flex gap-3 items-center">
                      <div className="text-[#d00000] text-sm line-through">
                        IDR {item.originalPrice.toLocaleString()}
                      </div>
                      <div className="text-[#ff8906] text-lg">
                        IDR {item.price.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="w-1/3 flex justify-center items-center">
                    <p
                      onClick={() => handleDelete(item.id)}
                      className="cursor-pointer flex items-center justify-center text-red-600 rounded-full w-8 h-8 border border-red-600"
                    >
                      X
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* PAYMENT INFO */}
            <div className="flex flex-col gap-5">
              <div className="text-xl">Payment Info & Delivery</div>

              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="Enter Your Email"
                onChange={handleChange}
              />
              <Input
                label="Full Name"
                name="fullname"
                type="text"
                placeholder="Enter Your Full Name"
                onChange={handleChange}
              />
              <Input
                label="Address"
                name="address"
                type="text"
                placeholder="Enter Your Address"
                onChange={handleChange}
              />

              <div>
                <div>Delivery</div>
                <div className="flex justify-between">
                  {["Dine In", "Door Delivery", "Pick Up"].map((method) => (
                    <button
                      key={method}
                      onClick={() => handleDelivery(method)}
                      className={`w-1/3 mx-2 h-8 border ${
                        formData.deliveryMethod === method
                          ? "bg-[#FF8906] text-white"
                          : "border-[#FF8906]"
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-1/3 flex flex-col gap-3">
            <div>Total</div>

            <div className="flex justify-between">
              <div>Order</div>
              <div>IDR {orderTotal.toLocaleString()}</div>
            </div>

            <div className="flex justify-between">
              <div>Delivery</div>
              <div>IDR {deliveryFee.toLocaleString()}</div>
            </div>

            <div className="flex justify-between">
              <div>Tax</div>
              <div>IDR {tax.toLocaleString()}</div>
            </div>

            <div className="flex justify-between border-t-2 border-gray-200">
              <div>Sub Total</div>
              <div>IDR {subTotal.toLocaleString()}</div>
            </div>

            <Button text="Checkout" onClick={handleCheckout} />

            <div className="flex flex-col gap-3">
              <div>We accept</div>
              <div className="flex justify-evenly">
                <img src={briLogo} alt="BRI" />
                <img src={danaLogo} alt="DANA" />
                <img src={bcaLogo} alt="BCA" />
                <img src={gopay} alt="GOPAY" />
                <img src={ovo} alt="OVO" />
                <img src={paypal} alt="PAYPAL" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-10 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-3">Checkout Success 🎉</h2>
            <p>Your order has been saved</p>
            <button
              onClick={() => setShowSuccess(false)}
              className="mt-5 bg-[#FF8906] px-6 py-2 rounded text-white"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutProductPage;
