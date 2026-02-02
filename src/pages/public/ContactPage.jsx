import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
      {/* Header */}
      <div className="bg-black bg-opacity-50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Cloud className="w-8 h-8 text-blue-400" />
            <Link to="/" className="text-2xl font-bold text-white hover:text-blue-300">
              WeatherHub
            </Link>
          </div>
          <div className="flex gap-4">
            <Link to="/about" className="text-white hover:text-blue-300">About</Link>
            <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Login</Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100">We'd love to hear from you. Get in touch with our team.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            {/* Email */}
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-2xl border border-white border-opacity-20 mb-6">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-8 h-8 text-blue-300" />
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-blue-200 text-sm">support@weatherhub.com</p>
                </div>
              </div>
              <p className="text-blue-100 text-sm">We respond within 24 hours</p>
            </div>

            {/* Phone */}
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-2xl border border-white border-opacity-20 mb-6">
              <div className="flex items-center gap-4 mb-4">
                <Phone className="w-8 h-8 text-blue-300" />
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <p className="text-blue-200 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              <p className="text-blue-100 text-sm">Monday - Friday, 9AM - 6PM EST</p>
            </div>

            {/* Address */}
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-2xl border border-white border-opacity-20">
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-8 h-8 text-blue-300" />
                <div>
                  <h3 className="text-white font-semibold">Address</h3>
                  <p className="text-blue-200 text-sm">123 Weather Street</p>
                </div>
              </div>
              <p className="text-blue-100 text-sm">New York, NY 10001, USA</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl border border-white border-opacity-20">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>

              {submitted && (
                <div className="bg-green-500 bg-opacity-20 border border-green-500 text-green-200 px-4 py-3 rounded-lg mb-6">
                  ✓ Thank you! We've received your message and will get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-white mb-2 font-semibold">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 text-white outline-none focus:ring-2 focus:ring-blue-400 placeholder-blue-200"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-white mb-2 font-semibold">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 text-white outline-none focus:ring-2 focus:ring-blue-400 placeholder-blue-200"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-white mb-2 font-semibold">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 text-white outline-none focus:ring-2 focus:ring-blue-400 placeholder-blue-200"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-white mb-2 font-semibold">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows="6"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 text-white outline-none focus:ring-2 focus:ring-blue-400 placeholder-blue-200 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition font-semibold flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { q: 'How accurate are the forecasts?', a: 'Our forecasts are typically 85-90% accurate for the first 7 days.' },
              { q: 'Is there a free tier?', a: 'Yes! Basic features are available for free. Premium plans offer advanced features.' },
              { q: 'Can I get historical data?', a: 'Yes, we maintain weather history for the past 10 years for most locations.' },
              { q: 'How often is data updated?', a: 'Weather data is updated every 15 minutes from our multiple sources.' },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20"
              >
                <h4 className="text-white font-semibold mb-2">{faq.q}</h4>
                <p className="text-blue-200">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
