import React, { useState } from 'react';
import messageIcon from '../assets/icons/message.svg'
import calendar from '../assets/icons/Calendar.svg'

const OrderHistory = () => {
  const [activeTab, setActiveTab] = useState('On Progress');
  const [currentPage, setCurrentPage] = useState(1);

  // Sample order data
  const orders = [
    {
      id: '#12354-09893',
      date: '23 January 2023',
      total: 'Rp 40.000',
      status: 'On Progress',
      image: 'https://placehold.co/100x100.png'
    },
    {
      id: '#12354-09893',
      date: '24 January 2023',
      total: 'Rp 40.000',
      status: 'On Progress',
      image: 'https://placehold.co/100x100.png'
    },
    {
      id: '#12354-09893',
      date: '25 January 2023',
      total: 'Rp 40.000',
      status: 'On Progress',
      image: 'https://placehold.co/100x100.png'
    },
    {
      id: '#12354-09893',
      date: '26 January 2023',
      total: 'Rp 40.000',
      status: 'On Progress',
      image: 'https://placehold.co/100x100.png'
    }
  ];

  const tabs = ['On Progress', 'Sending Goods', 'Finish Order'];

  return (
    <div className="min-h-screen bg-gray-50 px-30">
      <div className="max-w-7xl mx-auto flex gap-6">
        {/* Order History */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">History Order</h1>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
              <img src={calendar} alt="Calendar" />
              <span className="text-gray-700">January 2023</span>
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="flex gap-4 mb-6 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 px-2 font-medium transition-colors ${
                  activeTab === tab
                    ? 'text-orange-500 border-b-2 border-orange-500'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Order List */}
          <div className="space-y-4">
            {orders.map((order, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4">
                  {/* Product Image */}
                  <img
                    src={order.image}
                    alt="Product"
                    className="w-20 h-20 rounded-lg object-cover"
                  />

                  {/* Order Details */}
                  <div className="flex-1 grid grid-cols-4 gap-4 items-center">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">No. Order</p>
                      <p className="font-semibold text-gray-800">{order.id}</p>
                      {/* View Details Link */}
                      <button className="text-orange-500 hover:text-orange-600 font-medium text-sm whitespace-nowrap">
                        View Order Detail
                      </button>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Date</p>
                      <p className="text-gray-800">{order.date}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Total</p>
                      <p className="font-semibold text-gray-800">{order.total}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Status</p>
                      <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                        {order.status}
                      </span>
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <button className="w-10 h-10 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors">
              1
            </button>
            <button className="w-10 h-10 rounded-full bg-white text-gray-700 font-medium hover:bg-gray-100 transition-colors border border-gray-200">
              2
            </button>
            <button className="w-10 h-10 rounded-full bg-white text-gray-700 font-medium hover:bg-gray-100 transition-colors border border-gray-200">
              3
            </button>
            <button className="w-10 h-10 rounded-full bg-white text-gray-700 font-medium hover:bg-gray-100 transition-colors border border-gray-200">
              4
            </button>
            <button className="w-10 h-10 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors">
              &#8827;
            </button>
          </div>
        </div>

        {/* Sidebar - Message Section */}
        <div className="w-80">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            {/* Chat Icon */}
            <div className="flex justify-center mb-4">
              <div className="bg-gray-800 rounded-full">
                <img src={messageIcon} alt="Send a message" />
              </div>
            </div>
            {/* Message Title */}
            <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">
              Send Us Message
            </h3>
            <p className="text-gray-600 text-sm mb-6 text-center">
              If you're unable to find answer or find your product quickly, please describe your problem and we will get back to your question.
            </p>
            <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
