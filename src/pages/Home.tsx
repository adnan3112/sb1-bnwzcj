import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, Lock, BarChart, Globe, Layers, Users, TrendingUp } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Set Page Metadata */}
      <Helmet>
        <title>Custom Software Development Services | Groww Digitally</title>
        <meta
          name="description"
          content="Tailored IT solutions to transform businesses, leveraging cutting-edge technology and a personalized approach for sustained growth."
        />
        <meta
          name="keywords"
          content="custom software, IT solutions, business growth, software development, digital transformation, innovation"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-primary text-white py-20 sm:py-32 relative">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4"
            data-aos="fade-up"
          >
            Custom Software Development Services
          </h1>
          <p
            className="text-lg sm:text-xl mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Tailored solutions to transform your business and drive growth.
          </p>
          <Link
            to="/contact"
            className="btn btn-secondary inline-flex items-center px-8 py-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-light py-20 sm:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-12"
            data-aos="fade-up"
          >
            Why Our Solutions Stand Out
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { icon: <Lock />, title: "Security", description: "Robust and secure systems to protect your data." },
              { icon: <BarChart />, title: "Scalability", description: "Solutions that grow with your business." },
              { icon: <Globe />, title: "Global Reach", description: "Tools to expand your market reach effectively." },
              { icon: <Layers />, title: "Customization", description: "Tailored systems to meet your specific needs." },
              { icon: <Users />, title: "Collaboration", description: "Seamless teamwork and integration." },
              { icon: <TrendingUp />, title: "Performance", description: "Optimized solutions for maximum efficiency." },
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="p-4 rounded-full bg-secondary text-white w-16 h-16 flex items-center justify-center mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="mt-4 font-semibold text-xl">{benefit.title}</h3>
                <p className="text-gray-700 mt-2">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-12"
            data-aos="fade-up"
          >
            Our Process
          </h2>
          <div className="relative">
            <div className="absolute inset-0 flex justify-center">
              <div className="w-1 bg-gray-200"></div>
            </div>
            <div className="space-y-12">
              {[
                { step: "Discovery & Analysis", description: "We identify your needs and goals to ensure tailored solutions.", delay: 0 },
                { step: "Design", description: "Creative and functional designs aligned with your brand.", delay: 100 },
                { step: "Development", description: "Building robust and scalable software solutions.", delay: 200 },
                { step: "Testing & Deployment", description: "Ensuring high-quality delivery with thorough testing.", delay: 300 },
              ].map((process, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-6"
                  data-aos="fade-right"
                  data-aos-delay={process.delay}
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{process.step}</h3>
                    <p className="text-gray-700 mt-2">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="bg-light py-20 sm:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-12"
            data-aos="fade-up"
          >
            Industries We Serve
          </h2>
          <div
            className="carousel space-x-4 overflow-x-auto flex"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {[
              { name: "Retail", description: "Boost sales and customer experience with our solutions.", img: "/images/retail.jpg" },
              { name: "Healthcare", description: "Secure and efficient systems for healthcare providers.", img: "/images/healthcare.jpg" },
              { name: "Finance", description: "Optimized tools for managing financial operations.", img: "/images/finance.jpg" },
              { name: "Education", description: "Innovative e-learning platforms and tools.", img: "/images/education.jpg" },
            ].map((industry, index) => (
              <div
                key={index}
                className="min-w-[250px] bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={industry.img}
                  alt={industry.name}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{industry.name}</h3>
                  <p className="text-gray-700 mt-2">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
