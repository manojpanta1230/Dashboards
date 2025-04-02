import React from "react";
import {
  FaBell,
  FaTicketAlt,
  FaListAlt,
  FaUtensils,
  FaEdit,
  FaPlus,
  FaHome,
  FaFileInvoiceDollar,
  FaTasks,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const ProductDetails = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 text-black min-h-screen overflow-y-auto">
        <div className="p-4">
          <img
            src="/Images/Version 2 Fairy Craft Jewellery.png"
            alt="Logo"
            className="h-40"
          />
        </div>
        <nav className="flex flex-col px-4 space-y-4">
          <Link
            to="/"
            className="flex items-center px-4 py-2 bg-orange-500 rounded"
          >
            <FaHome className="mr-2" /> Home
          </Link>
          <div>
            <button className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-700 hover:text-white">
              <span className="flex items-center">
                <FaFileInvoiceDollar className="mr-2" /> Billing
              </span>
              <FaPlus />
            </button>
            <div className="pl-6 space-y-1 hidden">
              <a href="#">Sales</a>
              <a href="#">Purchases</a>
              <a href="#">Orders</a>
              <a href="#">Revenue</a>
            </div>
          </div>
          <Link
            to="/vendors"
            className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white"
          >
            <FaTasks className="mr-2" /> Vendors
          </Link>
          <Link
            to="/userdetails"
            className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white"
          >
            <FaTasks className="mr-2" /> Users
          </Link>
          <Link
            href="/customerdetails"
            className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white"
          >
            <FaTasks className="mr-2" /> Customers
          </Link>
          <Link
            to="/productdetails"
            className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white"
          >
            <FaTasks className="mr-2" /> Products
          </Link>
          <div>
            <button className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-700 hover:text-white">
              <span className="flex items-center">
                <FaFileInvoiceDollar className="mr-2" /> Settings
              </span>
              <FaPlus />
            </button>
            <div className="pl-6 space-y-1 hidden">
              <a href="#">Category</a>
              <a href="#">Sub Category</a>
              <a href="#">Unit</a>
              <a href="#">User Role </a>
            </div>
          </div>
          <div>
            <button className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-700 hover:text-white">
              <span className="flex items-center">
                <FaFileInvoiceDollar className="mr-2" /> Finance
              </span>
              <FaPlus />
            </button>
            <div className="pl-6 space-y-1 hidden">
              <a href="#">Inventory</a>
              <a href="#">Items</a>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Section */}
      <main className="flex-1 bg-gray-100">
        {/* Topbar */}
        <div className="flex justify-end items-center p-4 bg-white shadow">
          <FaBell className="mr-4" />
          <img
            src="/Images/Test Profile.png"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-4">
            <p className="text-red-500">Ella Jones</p>
            <p className="text-sm">Admin</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 p-6">
          <button className="flex items-center  bg-white text-black px-6 py-3 rounded shadow">
            <FaTicketAlt className="mr-2" /> New Booking
          </button>
          <button className="flex items-center bg-white text-black px-6 py-3 rounded shadow">
            <FaListAlt className="mr-2" /> Room Food Order
          </button>
          <button className="flex items-center  bg-white text-black px-6 py-3 rounded shadow">
            <FaUtensils className="mr-2" /> Restaurant Order
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto p-6">
          <table className="min-w-full bg-white shadow rounded text-sm">
            <thead className="bg-black text-white">
              <tr>
                <th className="px-4 py-2 text-left">Code</th>
                <th className="px-4 py-2 text-left"> Name of Product</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left"> Product</th>
                <th className="px-4 py-2 text-left"> Total</th>
              </tr>
            </thead>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;
