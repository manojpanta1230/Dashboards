import React, { useState } from "react";
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
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const VendorDetails = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
      {sidebarOpen && (
        <aside className="w-full lg:w-64 text-black min-h-screen bg-white z-10 lg:relative fixed lg:static overflow-y-auto">
          <div className="p-4 flex justify-between items-center lg:justify-center">
            <img
              src="/Images/Version 2 Fairy Craft Jewellery.png"
              alt="Logo"
              className="h-32 sm:h-40"
            />
            <button
              className="lg:hidden text-black text-2xl"
              onClick={() => setSidebarOpen(false)}
            >
              <FaTimes />
            </button>
          </div>

          <nav className="flex flex-col px-4 space-y-2 pb-4">
            <Link
              to="/"
              className="flex items-center px-4 py-2 bg-orange-500 text-white rounded"
            >
              <FaHome className="mr-2" /> Home
            </Link>

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

            <div>
              <button className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-700 hover:text-white rounded">
                <span className="flex items-center">
                  <FaFileInvoiceDollar className="mr-2" /> Settings
                </span>
                <FaPlus />
              </button>
              <div className="pl-6 space-y-1 hidden">
                <Link to="#">Category</Link>
                <Link to="#">Sub Category</Link>
                <Link to="#">Unit</Link>
                <Link to="#">User Role</Link>
              </div>
            </div>

            <div>
              <button className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-700 hover:text-white rounded">
                <span className="flex items-center">
                  <FaFileInvoiceDollar className="mr-2" /> Finance
                </span>
                <FaPlus />
              </button>
              <div className="pl-6 space-y-1 hidden">
                <Link to="#">Inventory</Link>
                <Link to="#">Items</Link>
              </div>
            </div>
          </nav>
        </aside>
      )}

      {/* Main Section */}
      <main className="flex-1 bg-gray-100 flex flex-col min-h-screen">
        {/* Topbar */}
        <div className="flex justify-between items-center p-4 bg-white shadow">
          <button
            className="text-black text-2xl lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FaBars />
          </button>
          <div className="flex items-center space-x-4 ml-auto">
            <FaBell className="text-lg" />
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

        {/* Action Buttons */}
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

        {/* Vendor Table */}
        <div className="overflow-x-auto p-6">
          <table className="min-w-full bg-white shadow rounded text-sm">
            <thead className="bg-black text-white">
              <tr>
                <th className="px-4 py-2 text-left">Code</th>
                <th className="px-4 py-2 text-left">Company Name</th>
                <th className="px-4 py-2 text-left">Company Email</th>
                <th className="px-4 py-2 text-left">Company Contact</th>
                <th className="px-4 py-2 text-left">Company Address</th>
                <th className="px-4 py-2 text-left">Staff Name</th>
                <th className="px-4 py-2 text-left">Staff Email</th>
                <th className="px-4 py-2 text-left">Staff Contact</th>
                <th className="px-4 py-2 text-left">Designation</th>
                <th className="px-4 py-2 text-left">Gender</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">001</td>
                <td className="px-4 py-2">Tech Innovations Ltd.</td>
                <td className="px-4 py-2">contact@techinnovations.com</td>
                <td className="px-4 py-2">+1 234 567 890</td>
                <td className="px-4 py-2">
                  123 Silicon Valley, Suite 200, San Francisco, CA
                </td>
                <td className="px-4 py-2">John Doe</td>
                <td className="px-4 py-2">johndoe@techinnovations.com</td>
                <td className="px-4 py-2">+1 234 567 891</td>
                <td className="px-4 py-2">Project Manager</td>
                <td className="px-4 py-2">Male</td>
                <td className="px-4 py-2">Active</td>
                <td className="px-4 py-2 flex space-x-2">
                  <Link to="/edit-vendor">
                    <FaEdit />
                  </Link>
                  <Link to="/edit-vendor">
                    <FaEdit />
                  </Link>
                  <Link to="/edit-vendor">
                    <FaEdit />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default VendorDetails;
