import React from 'react';

const TabMenu = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="flex space-x-4 border-b-2 border-gray-300">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`p-2 py-5 flex-1 text-xl ${activeTab === index ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabMenu;