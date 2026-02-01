import { Link } from "react-router-dom";
import heroImage from "../assets/images/home.jpg";
import baristaImage from "../assets/images/barista-Rectangle.jpg";
import MenuFrame from "../components/MenuFrame";
import mapImage from "../assets/images/Huge Global.svg"
import ikoUwais from "../assets/images/iko-uwais.jpeg"

const HomePage = () => {
  return (
    <>
      <main>
        <section className="flex flex-row">
          <div className="w-1/2 flex items-center justify-center bg-[linear-gradient(168.18deg,_#777C82_-114.74%,_#0B0909_91.35%)]">
            <div className="w-md flex flex-col gap-10">
              <h1 className="text-5xl text-[#FFFFFF]">
                Start Your Day with Coffee and Good Meals
              </h1>
              <p className="text-[#FFFFFF]">
                We provide high quality beans, good taste, and healthy meals
                made by love just for you. Start your day with us for a bigger
                smile!
              </p>
              <div className="bg-[#FF8906] rounded-md w-1/3 h-12 flex items-center justify-center"><Link to="">Get Started</Link></div>
              <div className="grid grid-cols-3 divide-x-1 divide-solid divide-[#FFFFFF]">
                <div>
                  <div className="text-5xl text-[#FF8906]">90+</div>
                  <div className="text-[#FFFFFF]">Staff</div>
                </div>
                <div className="pl-10">
                  <div className="text-5xl text-[#FF8906] ">30+</div>
                  <div className="text-[#FFFFFF]">Stores</div>
                </div>
                <div className="pl-10">
                  <div className="text-5xl text-[#FF8906]">800+</div>
                  <div className="text-[#FFFFFF]">Customers</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <img src={heroImage} alt="Portafilter with different filling" />
          </div>
        </section>
        <section className="flex flex-row">
            <div className="w-1/2 flex flex-col items-center justify-center">
                <div className="w-md flex flex-col gap-5 items-start justify-center">
                    <h1 className="text-5xl">We Provide Good Coffee and Healthy Meals</h1>
                    <p className="text-[1rem]">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                    <ul className="flex flex-col gap-5">
                        <li>High quality beans</li>
                        <li>Healthy meals, you can request the ingredients</li>
                        <li>Chat with our staff to get better experience for ordering</li>
                        <li>Free member card with a minimum purchase of IDR 200.000.</li>
                    </ul>
                </div>
            </div>
            <div className="w-1/2 h-1/2">
                <img className="w-full" src={baristaImage} alt="Barista" />
            </div>
        </section>
        <section>
            <div className="flex flex-col gap-5 items-center p-20">
                <div className="flex flex-col gap-5 items-center">
                    <h1 className="text-5xl">Here is People’s Favorite</h1>
                    <div className="border-solid border-[#FF8906] border w-16"></div>
                    <p>Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
                </div>
                <div className="grid grid-cols-4 gap-10 ">
                    <MenuFrame
                      image='src/assets/images/hazelnut-latte-1.png'
                      title='Hazelnut Latte'
                      description='You can explore the menu that we provide with fun and have their own taste and make your day better.'
                      showRating={false}
                      oldPrice='IDR 20.000'
                      price='IDR 10.000'
                      showFlashSale={false}/>
                    <MenuFrame
                      image='src/assets/images/frappucino.jpg'
                      title='Frappucino'
                      description='You can explore the menu that we provide with fun and have their own taste and make your day better.'
                      showRating={false}
                      oldPrice='IDR 20.000'
                      price='IDR 10.000'
                      showFlashSale={false}/>
                      <MenuFrame
                      image='src/assets/images/strawberry-matcha.jpg'
                      title='Strawberry Matcha'
                      description='You can explore the menu that we provide with fun and have their own taste and make your day better.'
                      showRating={false}
                      oldPrice='IDR 20.000'
                      price='IDR 10.000'
                      showFlashSale={false}/>
                      <MenuFrame
                      image='src/assets/images/chocolatte-frappe.jpg'
                      title='Chocolatte Frappe'
                      description='You can explore the menu that we provide with fun and have their own taste and make your day better.'
                      showRating={false}
                      oldPrice='IDR 20.000'
                      price='IDR 10.000'
                      showFlashSale={false}/>
                    {/* <div>x</div>
                    <div>x</div>
                    <div>x</div>
                    <div>x</div> */}
                </div>
            </div>
        </section>
        <section className="">
          <div className="flex flex-col gap-5 items-center px-30">
            <div className="text-5xl">Visit Our Store in the Spot on the Map Below</div>
            <div className="w-12 border-3 border-[#FF8906]"></div>
            <div>You can explore the menu that we provide with fun and have their own taste and make your day better.</div>
            <div>
              <img src={mapImage} alt="Map Image" />
            </div>
          </div>
        </section>
        <section className="flex items-center my-10 justify-center bg-[linear-gradient(168.18deg,_#777C82_-114.74%,_#0B0909_91.35%)]">
          <div className="flex flex-row gap-5 m-15">
            <div className="w-1/2"><img src={ikoUwais} alt="Iko Uwais" /></div>
            <div className="w-1/2 flex flex-col gap-4">
              <div className="text-white">TESTIMONIAL</div>
              <div className="text-white text-5xl border-l-5 border-[#FF8906] pl-3">Iko Uwais</div>
              <div className="text-[#FF8906]">Aktor</div>
              <div className="text-white">I love this coffee shop, the coffee and meals are unimaginable. I will recommend this place to my friends!</div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
