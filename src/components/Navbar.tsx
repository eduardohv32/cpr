import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img 
                src="/Lincoln_CPR_Logo.png" 
                alt="Lincoln CPR Logo" 
                className="h-12"
              />
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link 
              to="/" 
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isScrolled 
                  ? 'text-gray-900 hover:text-red-600' 
                  : 'text-white hover:text-red-200'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isScrolled 
                  ? 'text-gray-900 hover:text-red-600' 
                  : 'text-white hover:text-red-200'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/instructors" 
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isScrolled 
                  ? 'text-gray-900 hover:text-red-600' 
                  : 'text-white hover:text-red-200'
              }`}
            >
              Instructors
            </Link>
            <Link 
              to="/contact" 
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isScrolled 
                  ? 'text-gray-900 hover:text-red-600' 
                  : 'text-white hover:text-red-200'
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled 
                  ? 'text-gray-900 hover:text-red-600 hover:bg-gray-100' 
                  : 'text-white hover:text-red-200 hover:bg-black/20'
              } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={`sm:hidden ${
          isScrolled ? 'bg-white/90' : 'bg-black/80'
        } backdrop-blur-sm`}>
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`block pl-3 pr-4 py-2 text-base font-medium ${
                isScrolled 
                  ? 'text-gray-900 hover:text-red-600 hover:bg-gray-100' 
                  : 'text-white hover:text-red-200 hover:bg-black/20'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`block pl-3 pr-4 py-2 text-base font-medium ${
                isScrolled 
                  ? 'text-gray-900 hover:text-red-600 hover:bg-gray-100' 
                  : 'text-white hover:text-red-200 hover:bg-black/20'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/instructors"
              className={`block pl-3 pr-4 py-2 text-base font-medium ${
                isScrolled 
                  ? 'text-gray-900 hover:text-red-600 hover:bg-gray-100' 
                  : 'text-white hover:text-red-200 hover:bg-black/20'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Instructors
            </Link>
            <Link
              to="/contact"
              className={`block pl-3 pr-4 py-2 text-base font-medium ${
                isScrolled 
                  ? 'text-gray-900 hover:text-red-600 hover:bg-gray-100' 
                  : 'text-white hover:text-red-200 hover:bg-black/20'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}