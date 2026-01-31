import React from 'react';
import profile from '../assets/icons/Profile.svg'
import locationIcon from '../assets/icons/Location.svg'
import phoneIcon from '../assets/icons/PhoneCall.svg'
import paymentIcon from '../assets/icons/u_postcard.svg'
import statusIcon from '../assets/icons/u_process.svg'
import truckIcon from '../assets/icons/truckIcon.svg'

const OrderDetail = () => {
  const orderInfo = {
    orderNumber: '#12354-09893',
    date: '21 March 2023 at 10:30 AM',
    fullName: 'Ghaluh Wizard Anggoro',
    address: 'Griya bandung Indah',
    phone: '082136304338',
    paymentMethod: 'Cash',
    shipping: 'Dine In',
    status: 'Done',
    totalTransaction: 'IDR 40.000'
  };

  const orderItems = [
    {
      id: 1,
      name: 'Hazelnut Latte',
      quantity: '2pcs',
      size: 'Regular',
      type: 'Ice',
      dining: 'Dine In',
      originalPrice: 'IDR40.000',
      price: 'IDR 20.000',
      image: 'https://placehold.co/200x200.png',
      isFlagged: true
    },
    {
      id: 2,
      name: 'Hazelnut Latte',
      quantity: '2pcs',
      size: 'Regular',
      type: 'Ice',
      dining: 'Dine In',
      originalPrice: 'IDR40.000',
      price: 'IDR 20.000',
      image: 'https://placehold.co/200x200.png',
      isFlagged: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-1">
            Order {orderInfo.orderNumber}
          </h1>
          <p className="text-gray-500 text-sm">{orderInfo.date}</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Order Information */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Order Information</h2>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="space-y-4">
                {/* Full Name */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3 text-gray-600">
                    <img src={profile} alt="" />
                    <span className="text-sm">Full Name</span>
                  </div>
                  <span className="font-semibold text-gray-800">{orderInfo.fullName}</span>
                </div>

                {/* Address */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3 text-gray-600">
                    <img src={locationIcon} alt="Address" />
                    <span className="text-sm">Address</span>
                  </div>
                  <span className="font-semibold text-gray-800">{orderInfo.address}</span>
                </div>

                {/* Phone */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3 text-gray-600">
                    <img src={phoneIcon} alt="Phone" />
                    <span className="text-sm">Phone</span>
                  </div>
                  <span className="font-semibold text-gray-800">{orderInfo.phone}</span>
                </div>

                {/* Payment Method */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3 text-gray-600">
                    <img src={paymentIcon} alt="Payment" />
                    <span className="text-sm">Payment Method</span>
                  </div>
                  <span className="font-semibold text-gray-800">{orderInfo.paymentMethod}</span>
                </div>

                {/* Shipping */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3 text-gray-600">
                    <img src={truckIcon} alt="" />
                    <span className="text-sm">Shipping</span>
                  </div>
                  <span className="font-semibold text-gray-800">{orderInfo.shipping}</span>
                </div>

                {/* Status */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3 text-gray-600">
                    <img src={statusIcon} alt="" />
                    <span className="text-sm">Status</span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                    {orderInfo.status}
                  </span>
                </div>
              </div>

              {/* Total Transaction */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Total Transaction</span>
                  <span className="text-xl font-bold text-orange-500">{orderInfo.totalTransaction}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Your Order */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Your Order</h2>
            <div className="space-y-4">
              {orderItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 rounded-lg object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      {item.isFlagged && (
                        <span className="-top-1 -right-28 bg-[#d00000] text-white text-sm px-2 py-1 rounded-3xl font-medium">
                        {/* // <span className="text-sm text-white bg-[#d00000] font-bold w-fit px-5 py-1 rounded-3xl"> */}
                          FLASH SALE!
                        </span>
                      )}
                      <h3 className="font-bold text-gray-800 mb-2">{item.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {item.quantity} | {item.size} | {item.type} | {item.dining}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400 line-through">
                          {item.originalPrice}
                        </span>
                        <span className="text-lg font-bold text-orange-500">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
