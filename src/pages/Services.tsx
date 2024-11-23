import { Link } from 'react-router-dom';
import { services } from '../data/services';

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 sm:py-32">
        <div className="container text-center">
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            data-aos="fade-up"
            data-aos-duration="200"  {/* Reduced duration */}
          >
            Our Services
          </h1>
          <p 
            className="text-lg sm:text-xl max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="200"  {/* Reduced duration */}
          >
            Comprehensive digital solutions to help your sector grow and succeed
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="card group hover:bg-primary hover:text-white transition-all duration-200 p-6"  {/* Faster transition */}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-duration="200"  {/* Reduced duration */}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center">
                      <Icon className="h-8 w-8" />
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
