import { Helmet } from 'react-helmet'; // For SEO
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, TrendingUp, Briefcase, Globe, Users, Cog } from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      {/* Set Page Metadata */}
      <Helmet>
        <title>Groww Digitally</title>
        <meta name="description" content="Groww Digitally provides innovative IT solutions, digital transformation, and custom services to help businesses thrive in the digital era." />
        <meta name="keywords" content="digital solutions, IT services, custom software, digital transformation, technology company, innovation, collaboration" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-primary text-white py-20 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 
              className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6"
              data-aos="fade-up"
            >
              Planting Seeds for Your Digital Future
            </h1>
            <p 
              className="text-lg sm:text-xl mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Empowering different sectors through innovative IT solutions and digital transformation.
            </p>
            <Link 
              to="/contact"
              className="btn btn-secondary inline-flex items-center px-8 py-4" 
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div data-aos="fade-right">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Choose Us</h2>
              <ul className="space-y-4 text-gray-700">
                <li>✅ Personalized approach tailored to your needs.</li>
                <li>✅ Cutting-edge technologies and best practices.</li>
                <li>✅ Reliable support and on-time project delivery.</li>
                <li>✅ Dedicated team of skilled professionals.</li>
              </ul>
            </div>

            {/* Right Column */}
            <div className="grid grid-cols-2 gap-6" data-aos="fade-left">
              {[
                { icon: <Shield className="h-10 w-10 text-secondary" />, label: 'Security' },
                { icon: <TrendingUp className="h-10 w-10 text-secondary" />, label: 'Scalability' },
                { icon: <Briefcase className="h-10 w-10 text-secondary" />, label: 'Professionalism' },
                { icon: <Cog className="h-10 w-10 text-secondary" />, label: 'Innovative Solutions' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center bg-white shadow-lg p-4 rounded-lg"
                >
                  {item.icon}
                  <p className="mt-4 font-semibold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Our Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Shield className="h-10 w-10" />, label: 'Robust Security' },
              { icon: <TrendingUp className="h-10 w-10" />, label: 'Scalable Solutions' },
              { icon: <Cog className="h-10 w-10" />, label: 'Custom Integrations' },
              { icon: <Users className="h-10 w-10" />, label: 'Dedicated Support' },
              { icon: <Briefcase className="h-10 w-10" />, label: 'Expert Team' },
              { icon: <Globe className="h-10 w-10" />, label: 'Global Reach' },
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-secondary text-white p-6 rounded-lg shadow-md"
              >
                <div className="mb-4">{benefit.icon}</div>
                <p className="font-semibold">{benefit.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Industries We Serve
          </h2>
          <div className="relative">
            {/* Carousel Slider */}
            <div className="carousel flex overflow-x-auto space-x-6">
              {[
                { industry: 'Retail', description: 'E-commerce and supply chain solutions.' },
                { industry: 'Healthcare', description: 'Healthcare IT and patient systems.' },
                { industry: 'Education', description: 'EdTech platforms and LMS.' },
                { industry: 'Finance', description: 'Banking and FinTech innovations.' },
                { industry: 'Manufacturing', description: 'Automation and IoT integrations.' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex-none w-80 bg-white rounded-lg shadow-md p-6 text-center"
                  data-aos="fade-up"
                >
                  <h3 className="text-xl font-semibold mb-4">{item.industry}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
            {/* Navigation Indicators (Optional) */}
            <div className="absolute inset-x-0 flex justify-center mt-6">
              <button className="h-2 w-2 rounded-full bg-secondary mx-1"></button>
              <button className="h-2 w-2 rounded-full bg-gray-400 mx-1"></button>
              <button className="h-2 w-2 rounded-full bg-gray-400 mx-1"></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
