import { FaUsers, FaRupeeSign, FaArrowUp } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-10 bg-gray-100 min-h-screen">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <StatCard icon={<FaUsers />} title="Users" value="1,245" />
          <StatCard icon={<FaRupeeSign />} title="Revenue" value="₹75,000" />
          <StatCard icon={<FaArrowUp />} title="Growth" value="+18%" />
        </div>
      </div>
    </div>
  );
}