import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { services } from "../data/services";

const Services = () => {
  return (
    <div>
      {/* Set Page Metadata */}
      <Helmet>
        <title>Our Services | Comprehensive Digital Solutions</title>
        <meta
          name="description"
          content="Explore our range of digital solutions, including website development, SEO services, ERP solutions, and more."
        />
        <meta
          name="keywords"
          content="digital solutions, IT services, website development, SEO"
        />
      </Helmet>

      {/* Hero Section - Services Page */}
      <section
        className="relative bg-fixed bg-center pt-40 pb-32"
        style={{
          backgroundImage: "url('/assets/icons/services.jpg')", // Adjust if you have a specific services background
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark blur overlay */}
        <div className="absolute inset-0 bg-dark bg-opacity-70 backdrop-blur-sm"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-light text-center px-4 pb-24">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            data-aos="fade-up"
            data-aos-duration="300"
          >
            Our Services
          </h1>
          <p
            className="text-lg sm:text-xl max-w-2xl mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Comprehensive digital solutions to help your sector grow and
            succeed.
          </p>
          <p
            className="text-base sm:text-lg max-w-3xl text-gray-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            From custom software development and innovative web design to ERP
            systems, mobile apps, and full-stack digital strategies — we deliver
            scalable, impactful, and future-ready solutions tailored to your
            business needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="card group hover:bg-primary hover:text-white transition-all duration-200 p-6"
                  data-aos="fade-up"
                  data-aos-delay={index * 50} // Reduced delay to 50ms between items
                >
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center">
                      <img src={service.icon} />
                    </div>
                    <h3 className="text-xl font-semibold ml-4">
                      {service.title}
                    </h3>
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
