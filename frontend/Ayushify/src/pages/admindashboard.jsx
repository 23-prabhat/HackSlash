import React, { useState } from 'react';
import { BarChart2, Users, FileText, Settings, LogOut } from 'lucide-react';

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('Overview');

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-green-200 via-teal-200 to-blue-200">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-8 text-blue-600">Admin Panel</h2>
          <nav className="space-y-4">
            <button
              onClick={() => setSelectedTab('Overview')}
              className={`flex items-center w-full text-left p-2 rounded-lg hover:bg-blue-100 ${
                selectedTab === 'Overview' ? 'bg-blue-200' : ''
              }`}
            >
              <BarChart2 className="w-5 h-5 mr-2" /> Overview
            </button>
            <button
              onClick={() => setSelectedTab('Users')}
              className={`flex items-center w-full text-left p-2 rounded-lg hover:bg-blue-100 ${
                selectedTab === 'Users' ? 'bg-blue-200' : ''
              }`}
            >
              <Users className="w-5 h-5 mr-2" /> Manage Users
            </button>
            <button
              onClick={() => setSelectedTab('Documents')}
              className={`flex items-center w-full text-left p-2 rounded-lg hover:bg-blue-100 ${
                selectedTab === 'Documents' ? 'bg-blue-200' : ''
              }`}
            >
              <FileText className="w-5 h-5 mr-2" /> Documents
            </button>
            <button
              onClick={() => setSelectedTab('Settings')}
              className={`flex items-center w-full text-left p-2 rounded-lg hover:bg-blue-100 ${
                selectedTab === 'Settings' ? 'bg-blue-200' : ''
              }`}
            >
              <Settings className="w-5 h-5 mr-2" /> Settings
            </button>
          </nav>
        </div>
        <button className="flex items-center p-2 text-red-500 hover:bg-red-100 rounded-lg">
          <LogOut className="w-5 h-5 mr-2" /> Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">{selectedTab}</h1>
          <div className="text-gray-700">🔔 Notifications</div>
        </header>

        <div className="bg-white shadow-md rounded-lg p-6">
          {/* Tab content */}
          {selectedTab === 'Overview' && (
            <div>
              <p className="mb-4 text-lg text-gray-700">Welcome, Admin! Here is the system overview.</p>
              <div className="w-full bg-gray-300 rounded-full h-4 mb-4">
                <div className="bg-blue-600 h-4 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <p className="text-gray-800">📊 Current verification progress: 65%</p>
            </div>
          )}

          {selectedTab === 'Users' && (
            <div>
              <p className="text-lg text-gray-700">👥 Manage registered users here.</p>
              {/* Add user list or actions */}
            </div>
          )}

          {selectedTab === 'Documents' && (
            <div>
              <p className="text-lg text-gray-700">📁 View uploaded documents and verify them.</p>
              {/* Add document review interface */}
            </div>
          )}

          {selectedTab === 'Settings' && (
            <div>
              <p className="text-lg text-gray-700">⚙️ Configure admin preferences and system settings.</p>
              {/* Add settings controls */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
