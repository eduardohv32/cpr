import { Mail, MapPin, Phone } from 'lucide-react';
import { FormEvent, useState } from 'react';
import Footer from '../components/Footer';
import { useEmailService } from '../services/emailService';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { sendEmail, isLoading, error } = useEmailService();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: 'Basic CPR Course',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const success = await sendEmail(formData);
    if (success) {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        course: 'Basic CPR Course',
        message: ''
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[400px] mb-16"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1516841273335-e39b37888115?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Have questions about our training programs? We're here to help you start your journey to becoming certified in life-saving techniques.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Get in touch to start your CPR certification journey
          </p>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="bg-red-600 p-8 lg:p-12">
              <div className="text-white">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                                <div className="mt-8 space-y-6">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-red-200" />
                    <span className="ml-4 text-red-100">(916) 295-9649</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-red-200" />
                    <span className="ml-4 text-red-100">info@lifesavercpr.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-red-200" />
                    <span className="ml-4 text-red-100">
                      831 Sterling Pkwy<br />
                      Suite 110<br />
                      Lincoln, CA 95648
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-red-200" />
                    <span className="ml-4 text-red-100">
                      1824 Avondale avenue<br />
                      Suite B<br />
                      Sacramento, CA 95825
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-red-200" />
                    <span className="ml-4 text-red-100">
                      2775 Park Marina Dr<br />
                      Suite B<br />
                      Redding, CA 96001
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 lg:p-12">
              {submitted ? (
                <div className="text-center">
                  <h3 className="text-2xl font-medium text-gray-900">Thank you for your message!</h3>
                  <p className="mt-4 text-gray-600">
                    We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 text-red-700 bg-red-100 rounded-md">
                      {error}
                    </div>
                  )}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700">
                      Interested Course
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                    >
                      <option>CPR Course</option>
                      <option>AED Course</option>
                      <option>BLS Course</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}