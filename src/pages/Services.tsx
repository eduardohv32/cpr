import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Services() {
  const courses = [
    {
      title: "Basic CPR Course",
      price: "$65",
      duration: "4 hours",
      features: [
        "Learn basic life support techniques",
        "Hands-on practice with mannequins",
        "AED training included",
        "2-year certification",
        "Small class sizes"
      ]
    },
    {
      title: "Group Training",
      price: "Contact us",
      duration: "Flexible",
      features: [
        "Customized training programs",
        "On-site training available",
        "Corporate rates",
        "Team certification tracking",
        "Flexible scheduling"
      ]
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[400px] mb-16"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional CPR Training Programs
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              From basic life support to advanced certification courses, we offer comprehensive CPR training to meet your needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our CPR Training Courses
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the right course for your needs and get certified today
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2">
          {courses.map((course) => (
            <div key={course.title} className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">{course.price}</span>
                </p>
                <p className="mt-2 text-sm text-gray-500">Duration: {course.duration}</p>

                <ul className="mt-6 space-y-6">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 w-6 h-6 text-green-500" />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className="mt-8 block w-full bg-red-600 border border-transparent rounded-md py-3 px-6 text-center font-medium text-white hover:bg-red-700"
              >
                Enroll Now
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Information Section */}
        <div className="mt-24 mb-32">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Our Training Programs?
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our comprehensive training programs are designed to provide you with the skills and confidence needed to respond effectively in emergency situations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-red-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Certified Instructors</h4>
                <p className="text-gray-600">Learn from experienced healthcare professionals with years of practical experience.</p>
              </div>
              <div className="text-center">
                <div className="bg-red-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Hands-on Practice</h4>
                <p className="text-gray-600">Get extensive practice with professional equipment and realistic scenarios.</p>
              </div>
              <div className="text-center">
                <div className="bg-red-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Flexible Scheduling</h4>
                <p className="text-gray-600">Choose from multiple class times to fit your busy schedule.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}