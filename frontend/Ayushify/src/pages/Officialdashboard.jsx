import React from 'react';
import { User, FileText, Settings, Bell, LogOut } from 'lucide-react';

const OfficialDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <div className="flex items-center mb-6">
          <User className="w-8 h-8 mr-2 text-blue-600" />
          <span className="text-lg font-semibold">Official</span>
        </div>
        <nav className="space-y-4">
          <button className="flex items-center w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100 rounded">
            <FileText className="mr-2 w-5 h-5" /> Dashboard
          </button>
          <button className="flex items-center w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100 rounded">
            <Settings className="mr-2 w-5 h-5" /> Settings
          </button>
          <button className="flex items-center w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100 rounded">
            <LogOut className="mr-2 w-5 h-5" /> Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard Overview</h1>
          <Bell className="w-6 h-6 text-gray-600" />
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-gray-600">New Applications</h2>
            <p className="text-2xl font-bold">12</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-gray-600">Pending Reviews</h2>
            <p className="text-2xl font-bold">8</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-gray-600">Completed</h2>
            <p className="text-2xl font-bold">34</p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Submissions</h2>
          <table className="w-full table-auto text-left">
            <thead>
              <tr className="border-b">
                <th className="p-2">Applicant</th>
                <th className="p-2">Status</th>
                <th className="p-2">Submitted</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-2">Soham Joshi</td>
                <td className="p-2 text-yellow-600">Pending</td>
                <td className="p-2">15 Jul 2025</td>
                <td className="p-2">
                  <button className="text-blue-600 hover:underline">Review</button>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-2">Amit Kumar</td>
                <td className="p-2 text-green-600">Approved</td>
                <td className="p-2">14 Jul 2025</td>
                <td className="p-2">
                  <button className="text-blue-600 hover:underline">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default OfficialDashboard;