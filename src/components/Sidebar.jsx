import { FaChartLine, FaChartBar, FaFileAlt, FaCog } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-64 bg-indigo-600 text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-10">Dashboard</h2>

      <ul className="space-y-6">
        <li className="flex items-center gap-3 hover:text-gray-200 cursor-pointer">
          <FaChartLine /> Overview
        </li>

        <li className="flex items-center gap-3 hover:text-gray-200 cursor-pointer">
          <FaChartBar /> Analytics
        </li>

        <li className="flex items-center gap-3 hover:text-gray-200 cursor-pointer">
          <FaFileAlt /> Reports
        </li>

        <li className="flex items-center gap-3 hover:text-gray-200 cursor-pointer">
          <FaCog /> Settings
        </li>
      </ul>
    </div>
  );
}