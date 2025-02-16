import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/Lincoln_CPR_white.png" 
                alt="Lincoln CPR Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 text-base mb-6">
              Empowering individuals with the knowledge and skills to save lives through professional CPR training.
            </p>
            <div className="space-y-2">
              <p className="text-gray-400 flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                (916) 295-9649
              </p>
              <p className="text-gray-400 flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                info@lincolncprtraining.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#courses" className="text-gray-400 hover:text-white transition-colors">
                  Courses
                </a>
              </li>
            </ul>
          </div>

          {/* Training Locations */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Training Locations</h3>
            <ul className="space-y-4">
              <li className="text-gray-400">
                <h4 className="font-medium text-white">Lincoln</h4>
                <p>831 Sterling Pkwy</p>
                <p>Suite 110</p>
                <p>Lincoln, CA 95648</p>
              </li>
              <li className="text-gray-400">
                <h4 className="font-medium text-white">Sacramento</h4>
                <p>1824 Avondale avenue</p>
                <p>Suite B</p>
                <p>Sacramento, CA 95825</p>
              </li>
              <li className="text-gray-400">
                <h4 className="font-medium text-white">Redding</h4>
                <p>2775 Park Marina Drive</p>
                <p>Suite B</p>
                <p>Redding, CA 96001</p>
              </li>              
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Lincoln CPR Training. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}