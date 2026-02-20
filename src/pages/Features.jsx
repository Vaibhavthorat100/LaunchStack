import { FaRobot, FaUsers, FaCloud, FaFileInvoice, FaLock, FaTools } from "react-icons/fa";

export default function Features() {
  const features = [
    { icon: <FaRobot />, title: "AI Insights", desc: "Advanced AI analytics." },
    { icon: <FaUsers />, title: "Team Collaboration", desc: "Work together easily." },
    { icon: <FaCloud />, title: "Cloud Sync", desc: "Access anywhere anytime." },
    { icon: <FaFileInvoice />, title: "Advanced Reports", desc: "Generate reports instantly." },
    { icon: <FaLock />, title: "Secure Storage", desc: "Enterprise-level security." },
    { icon: <FaTools />, title: "Automation Tools", desc: "Automate repetitive tasks." },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
            <div className="text-indigo-600 text-3xl mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}