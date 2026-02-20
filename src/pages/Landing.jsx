export default function Landing() {
  return (
    <div>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold mb-6">
            Boost Your Productivity with AI
          </h2>
          <p className="text-lg mb-8">
            Smart analytics, automation & insights — all in one platform.
          </p>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Smart Analytics</h3>
          <p>Real-time insights powered by AI algorithms.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Automation</h3>
          <p>Automate repetitive tasks and save valuable time.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Secure Platform</h3>
          <p>Enterprise-grade security for your data.</p>
        </div>
      </section>
    </div>
  );
}