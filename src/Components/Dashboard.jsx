import React from "react";
import {
  FaPlus,
  FaBell,
  FaHome,
  FaTasks,
  FaFileInvoiceDollar,
  FaTicketAlt,
  FaListAlt,
  FaUtensils,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64  text-black flex flex-col">
        <div className="p-4">
          <img
            src="/Images/Version 2 Fairy Craft Jewellery.png"
            alt="Logo"
            className="h-40"
          />
        </div>
        <nav className="flex-1 px-4 space-y-4">
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
              <Link to="#">Sales</Link>
              <Link to="#">Purchases</Link>
              <Link to="#">Orders</Link>
              <Link to="#">Revenue</Link>
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
            to="/customerdetails"
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
              <a href="#">User Role</a>
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

      {/* Main Content */}
      <main className="flex-1 bg-gray-100">
        <div className="flex justify-end p-4 bg-white shadow">
          <div className="flex items-center space-x-4">
            <FaBell />
            <img
              src="/Images/Test Profile.png"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-red-500">Ella Jones</p>
              <p className="text-sm">Admin</p>
            </div>
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
          <div className="bg-white text-black p-6 rounded shadow text-center">
            <FaBell className="text-2xl mb-2" />
            <h2 className="text-xl font-semibold">Revenue</h2>
            <p className="text-lg font-bold">$23,540.00</p>
          </div>
          <div className="bg-white text-black  p-6 rounded shadow text-center">
            <FaBell className="text-2xl mb-2" />
            <h2 className="text-xl font-semibold">Orders</h2>
            <p className="text-lg font-bold">20</p>
          </div>
          <div className="bg-white text-black p-6 rounded shadow text-center">
            <FaFileInvoiceDollar className="text-2xl mb-2" />
            <h2 className="text-xl font-semibold">Room Available</h2>
            <p className="text-lg font-bold">100</p>
          </div>
          <div className="bg-white text-black p-6 rounded shadow text-center">
            <FaTasks className="text-2xl mb-2" />
            <h2 className="text-xl font-semibold">Bookings</h2>
            <p className="text-lg font-bold">50</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 p-6">
          <button className="flex items-center bg-white text-black px-6 py-3 rounded shadow">
            <FaTicketAlt className="mr-2" /> New Booking
          </button>
          <button className="flex items-center bg-white text-black px-6 py-3 rounded shadow">
            <FaListAlt className="mr-2" /> Room Food Order
          </button>
          <button className="flex items-center bg-white text-black px-6 py-3 rounded shadow">
            <FaUtensils className="mr-2" /> Restaurant Order
          </button>
        </div>

        <div className="overflow-x-auto p-6">
          <table className="min-w-full bg-white shadow rounded">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Order ID</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Quantity</th>
                <th className="p-3 text-left">Total</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
