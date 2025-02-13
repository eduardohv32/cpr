import { Mail, Phone } from 'lucide-react';
import Footer from '../components/Footer';

export default function Instructors() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[400px] mb-16"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our Expert Instructor
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Learn from experienced professionals dedicated to teaching life-saving techniques
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-96 w-full object-cover md:w-96"
                src="/instructor.jpg"
                alt="Satwinder Grewal"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-red-600 font-semibold">Lead Instructor</div>
              <h2 className="mt-2 text-2xl font-bold text-gray-900">Satwinder Grewal</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Satwinder Grewal began her professional journey in 1991 in Canada, where she built a strong foundation in healthcare and       education. Over the years, she discovered her true passion for teaching and has dedicated herself to empowering others with life-saving skills. With extensive experience in CPR and BLS (Basic Life Support) training, Satwinder is committed to equipping individuals with the knowledge and confidence to respond effectively in emergencies.

Her teaching approach is both engaging and inspiring, making learning an enjoyable and impactful experience. Satwinder takes pride in guiding students toward successful careers in healthcare, ensuring they are well-prepared to make a difference in their communities. Her dedication to education, combined with her expertise, makes her an invaluable mentor and trainer in the field of CPR and BLS.
              </p>
              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-3">Contact Information</h3>
                <div className="space-y-2">
                  <a href="tel:+19162959649" className="flex items-center text-gray-600 hover:text-red-600">
                    <Phone className="h-5 w-5 mr-2" />
                    (916) 295-9649
                  </a>
                  <a href="mailto:sarah@lifesavercpr.com" className="flex items-center text-gray-600 hover:text-red-600">
                    <Mail className="h-5 w-5 mr-2" />
                    satwinder@lifesavercpr.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}