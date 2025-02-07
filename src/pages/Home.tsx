import { ArrowRight, Award, Clock, Heart, Users, Activity, Zap, ChevronFirst as FirstAid, Trophy, UserCheck, Calendar, BookOpen, Brain, HeartPulse, Stethoscope, Building2, Users2, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCountUp } from '../hooks/useCountUp';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const certifiedCount = useCountUp(5000);
  const successRate = useCountUp(99);
  const yearsCount = useCountUp(15);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const faqs = [
    {
      question: "How long does CPR certification last?",
      answer: "Our CPR certification is valid for 2 years from the date of completion. After that, you can take a renewal course to maintain your certification."
    },
    {
      question: "Do I need prior medical knowledge?",
      answer: "No prior medical knowledge is required. Our courses are designed for everyone, from complete beginners to healthcare professionals."
    },
    {
      question: "How long are the training sessions?",
      answer: "Training sessions vary from 4 to 8 hours depending on the course level. Basic CPR courses are typically 4 hours, while Professional courses are 8 hours."
    },
    {
      question: "What will I learn in the course?",
      answer: "You'll learn essential life-saving techniques including chest compressions, rescue breaths, AED use, and how to respond in various emergency situations."
    }
  ];

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className={`flex flex-col min-h-screen transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Hero Section */}
        <div 
          className="relative bg-cover bg-center h-[600px]"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            backgroundBlend: 'overlay'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Learn CPR, Save Lives
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                Every second counts in a cardiac emergency. Get certified in CPR today and be prepared to save a life when it matters most.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
              >
                Get Certified Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Metrics Section */}
        <div className="relative -mt-24 mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-2xl p-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {/* Students Certified */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                    <Trophy className="h-8 w-8 text-red-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {certifiedCount}+
                  </div>
                  <p className="text-gray-600">Students Certified</p>
                </div>

                {/* Success Rate */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                    <UserCheck className="h-8 w-8 text-red-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {successRate}%
                  </div>
                  <p className="text-gray-600">Success Rate</p>
                </div>

                {/* Years of Experience */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                    <Calendar className="h-8 w-8 text-red-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {yearsCount}+
                  </div>
                  <p className="text-gray-600">Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Training Courses Section */}
        <div className="relative pb-20 bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* CPR Training */}
              <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="p-8">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Activity className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">CPR Training</h3>
                  <p className="text-gray-600 mb-6">
                    Master life-saving chest compressions and rescue breathing techniques. Learn to respond quickly and effectively in cardiac emergencies.
                  </p>
                </div>
              </div>

              {/* AED Training */}
              <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="p-8">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">AED Training</h3>
                  <p className="text-gray-600 mb-6">
                    Learn to use Automated External Defibrillators confidently. Understand when and how to apply AED in emergency situations.
                  </p>
                </div>
              </div>

              {/* BLS Training */}
              <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="p-8">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <FirstAid className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">BLS Training</h3>
                  <p className="text-gray-600 mb-6">
                    Complete Basic Life Support training for healthcare providers. Includes advanced techniques and professional certification.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View All Training Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* CPR & BLS Information Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
                Understanding CPR and Basic Life Support
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Learn about these essential life-saving techniques and why they're crucial for emergency response
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* What is CPR */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <HeartPulse className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">What is CPR?</h3>
                <p className="text-gray-600 mb-4">
                  Cardiopulmonary Resuscitation (CPR) is a life-saving emergency procedure performed when someone's breathing or heartbeat has stopped. It combines chest compressions with artificial ventilation to maintain blood flow to vital organs.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Maintains blood circulation
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Prevents brain damage
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Increases survival chances
                  </li>
                </ul>
              </div>

              {/* What is BLS */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Understanding BLS</h3>
                <p className="text-gray-600 mb-4">
                  Basic Life Support (BLS) is a higher level of medical care typically used by healthcare providers. It includes CPR techniques plus additional skills for professional rescuers.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Advanced airway management
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Team-based response
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Professional certification
                  </li>
                </ul>
              </div>

              {/* Why Learn CPR & BLS */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <BookOpen className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Learn These Skills?</h3>
                <p className="text-gray-600 mb-4">
                  Learning CPR and BLS is crucial for both healthcare professionals and the general public. These skills can mean the difference between life and death in emergency situations.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Immediate response saves lives
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Required for many professions
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Builds emergency preparedness
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                According to the American Heart Association, more than 350,000 cardiac arrests occur outside of hospitals each year. Immediate CPR can double or triple the chances of survival after cardiac arrest.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
              >
                Start Your CPR Training Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Training Needs Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
                CPR Training for Every Need
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                No matter your background or goals—whether you're a healthcare professional, need safety certification for your job, or simply want to learn CPR to safeguard your family and friends—we offer courses tailored to your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Healthcare Providers */}
              <div className="relative group">
                <div className="aspect-w-16 aspect-h-9 mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80&w=800"
                    alt="Healthcare professionals training"
                    className="object-cover rounded-xl shadow-lg group-hover:opacity-90 transition-opacity duration-300"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-red-600 rounded-full p-3">
                  <Stethoscope className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">For Healthcare Providers</h3>
                <p className="text-gray-600">
                  Advanced CPR and emergency response training for healthcare workers and first responders.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center mt-4 text-red-600 hover:text-red-700 font-medium"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              {/* Workplace Compliance */}
              <div className="relative group">
                <div className="aspect-w-16 aspect-h-9 mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=800"
                    alt="Workplace safety training"
                    className="object-cover rounded-xl shadow-lg group-hover:opacity-90 transition-opacity duration-300"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-red-600 rounded-full p-3">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">For Workplace Compliance</h3>
                <p className="text-gray-600">
                  CPR, AED, and First Aid certification to meet job requirements or for personal knowledge.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center mt-4 text-red-600 hover:text-red-700 font-medium"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              {/* Communities & Schools */}
              <div className="relative group">
                <div className="aspect-w-16 aspect-h-9 mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=800"
                    alt="Community CPR training"
                    className="object-cover rounded-xl shadow-lg group-hover:opacity-90 transition-opacity duration-300"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-red-600 rounded-full p-3">
                  <Users2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">For Communities & Schools</h3>
                <p className="text-gray-600">
                  CPR education and training programs designed for individuals, schools, and community groups.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center mt-4 text-red-600 hover:text-red-700 font-medium"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Everything you need to know about our CPR certification courses
              </p>
            </div>

            <div className="mt-12">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      {faq.question}
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      {faq.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-red-600">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to become a lifesaver?</span>
              <span className="block text-red-200">Get certified today.</span>
            </h2>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="tel:+19162959649"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-red-50"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
              <div className="inline-flex rounded-md shadow">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-800 hover:bg-red-900"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}