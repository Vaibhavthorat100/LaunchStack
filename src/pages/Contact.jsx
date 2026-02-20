export default function Contact() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Contact Us
        </h2>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 border rounded-lg"
          ></textarea>

          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}