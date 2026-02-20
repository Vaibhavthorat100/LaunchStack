import PricingCard from "../components/PricingCard";

export default function Pricing() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Simple Pricing</h2>
        <p className="text-gray-600">Choose the plan that suits you best.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        <PricingCard
          title="Basic"
          price="499"
          features={["Analytics", "Limited Support", "Basic Reports"]}
        />

        <PricingCard
          title="Pro"
          price="999"
          features={[
            "All Basic Features",
            "Priority Support",
            "Advanced Reports",
          ]}
          popular
        />

        <PricingCard
          title="Enterprise"
          price="1999"
          features={[
            "All Pro Features",
            "Dedicated Manager",
            "Unlimited Access",
          ]}
        />
      </div>
    </div>
  );
}