export default function PricingCard({ title, price, features, popular }) {
  return (
    <div
      className={`p-8 rounded-xl shadow-lg ${
        popular ? "bg-indigo-600 text-white scale-105" : "bg-white"
      }`}
    >
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-4xl font-bold mb-6">
        ₹{price}
        <span className="text-lg">/mo</span>
      </p>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index}>✔ {feature}</li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-lg font-semibold ${
          popular
            ? "bg-white text-indigo-600"
            : "bg-indigo-600 text-white"
        }`}
      >
        Choose Plan
      </button>
    </div>
  );
}