import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { Helmet } from 'react-helmet';

const Services = () => {
  return (
    <div>
      {/* SEO Tags */}
      <Helmet>
      <meta charSet="UTF-8" />
        <meta 
          name="description" 
          content="Explore our comprehensive range of digital solutions, from software development to IT consulting, designed to help your business grow and succeed in the digital age." 
        />
        <meta name="keywords" content="digital solutions, IT consulting, software development, business growth, tech services" />
        <meta name="author" content="Groww Digitally" />
        <title>Our Services - Groww Digitally</title>
        <link rel="canonical" href="https://your-website.com/services" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container text-center">
          <h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            data-aos="fade-up"
          >
            Our Services
          </h1>
          <p 
            className="text-xl max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Comprehensive digital solutions to help your sector grow and succeed
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="card group hover:bg-primary hover:text-white transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold ml-4">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 group-hover:text-gray-200">
                    {service.shortDescription}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
