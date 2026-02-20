export default function StatCard({ icon, title, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg flex items-center gap-4">
      <div className="text-indigo-600 text-3xl">
        {icon}
      </div>
      <div>
        <h4 className="text-gray-600">{title}</h4>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}