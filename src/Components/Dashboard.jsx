import React, { useState } from "react";
import {
  FaPlus,
  FaBell,
  FaHome,
  FaTasks,
  FaFileInvoiceDollar,
  FaTicketAlt,
  FaListAlt,
  FaUtensils,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
      {sidebarOpen && (
        <aside className="w-full lg:w-64 bg-white text-black flex flex-col border-r border-gray-200 z-10 lg:relative fixed lg:static h-full">
          <div className="p-4 flex justify-between items-center lg:justify-center">
            <img
              src="/Images/Version 2 Fairy Craft Jewellery.png"
              alt="Logo"
              className="h-32 sm:h-40"
            />
            {/* Close button for mobile */}
            <button
              className="lg:hidden text-black text-2xl"
              onClick={() => setSidebarOpen(false)}
            >
              <FaTimes />
            </button>
          </div>
          <nav className="flex-1 px-4 space-y-2">
  <Link
    to="/"
    className="flex items-center px-4 py-2 bg-orange-500 text-white rounded"
  >
    <FaHome className="mr-2" /> Home
  </Link>

  {/* Billing Dropdown */}
  <div>
    <button className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-700 hover:text-white rounded">
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

  {/* Properly Aligned Nav Links */}
  <Link
    to="/vendors"
    className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white rounded"
  >
    <FaTasks className="mr-2" /> Vendors
  </Link>
  <Link
    to="/userdetails"
    className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white rounded"
  >
    <FaTasks className="mr-2" /> Users
  </Link>
  <Link
    to="/customerdetails"
    className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white rounded"
  >
    <FaTasks className="mr-2" /> Customers
  </Link>
  <Link
    to="/productdetails"
    className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white rounded"
  >
    <FaTasks className="mr-2" /> Products
  </Link>

  {/* Settings Dropdown */}
  <div>
    <button className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-700 hover:text-white rounded">
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

  {/* Finance Dropdown */}
  <div>
    <button className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-700 hover:text-white rounded">
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
      )}

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 flex flex-col min-h-screen">
        {/* Top Bar */}
        <div className="flex justify-between items-center p-4 bg-white shadow">
          {/* Toggle Sidebar Button */}
          <button
            className="text-black text-2xl lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FaBars />
          </button>

          <div className="flex items-center space-x-4 ml-auto">
            <FaBell />
            <img
              src="/Images/Test Profile.png"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div className="text-sm text-right">
              <p className="text-red-500 font-semibold">Ella Jones</p>
              <p className="text-gray-600">Admin</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded shadow text-center">
            <FaBell className="text-2xl mb-2 mx-auto" />
            <h2 className="text-lg font-semibold">Revenue</h2>
            <p className="text-lg font-bold">$23,540.00</p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <FaBell className="text-2xl mb-2 mx-auto" />
            <h2 className="text-lg font-semibold">Orders</h2>
            <p className="text-lg font-bold">20</p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <FaFileInvoiceDollar className="text-2xl mb-2 mx-auto" />
            <h2 className="text-lg font-semibold">Room Available</h2>
            <p className="text-lg font-bold">100</p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <FaTasks className="text-2xl mb-2 mx-auto" />
            <h2 className="text-lg font-semibold">Bookings</h2>
            <p className="text-lg font-bold">50</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 p-4">
          <button className="flex items-center justify-center bg-white px-4 py-2 rounded shadow w-full sm:w-auto">
            <FaTicketAlt className="mr-2" /> New Booking
          </button>
          <button className="flex items-center justify-center bg-white px-4 py-2 rounded shadow w-full sm:w-auto">
            <FaListAlt className="mr-2" /> Room Food Order
          </button>
          <button className="flex items-center justify-center bg-white px-4 py-2 rounded shadow w-full sm:w-auto">
            <FaUtensils className="mr-2" /> Restaurant Order
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto p-4">
          <table className="min-w-full bg-white shadow rounded text-sm">
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
            <tbody>{/* Table data here */}</tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
