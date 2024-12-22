import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { services } from '../data/services';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen bg-light flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Link to="/services" className="text-secondary hover:underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container">
          <Link
            to="/services"
            className="inline-flex items-center text-accent hover:text-white mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Services
          </Link>
          <div className="flex items-center mb-8">
            <div
              className="w-16 h-16 flex items-center justify-center"
              data-aos="fade-right"
            >
              <img src={service.icon} />
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold ml-6"
              data-aos="fade-left"
            >
              {service.title}
            </h1>
          </div>
          <p
            className="text-xl max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {service.fullDescription}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-light">
        <div className="container">
          <h2
            className="text-3xl font-bold mb-12 text-center"
            data-aos="fade-up"
          >
            What We Offer
          </h2>
          <div className="space-y-12">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                } items-center md:items-start gap-6`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="rounded-lg object-contain w-full h-64 md:h-96"
                  />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 flex flex-col gap-4 self-center">
                  <h6 className="text-xl font-semibold mb-1 inline-block relative">
                    <span
                      className="text border-b-2 border-secondary w-1/2 mx-auto"
                    >
                      {service.title}
                    </span>
                  </h6>
                  <h3 className="text-2xl font-semibold text-gray-800">{feature.title}</h3>
                  <p className="text-lg text-gray-700">
                    <strong>Objective:</strong> {feature.objective}
                  </p>
                  <p className="text-lg text-gray-700">
                    <strong>Features:</strong> {feature.features.join(', ')}
                  </p>
                  <p className="text-lg text-gray-700">
                    <strong>Outcome:</strong> {feature.outcome}
                  </p>
                  <div className="flex items-center justify-center mt-4">
                    <Link
                      to="/contact"
                      className="btn bg-secondary text-white py-2 px-6 rounded-lg hover:bg-secondary-dark transition-all duration-300"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* FAQ Section */}
{service.faqs && service.faqs.length > 0 && (
        <section className="section bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {service.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="faq-item"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <h3 className="text-xl font-semibold mb-2">
                    Q: {faq.question}
                  </h3>
                  <p className="text-lg">
                    A: {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* CTA Section */}
      <section className="section bg-secondary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
            Ready to Get Started?
          </h2>
          <p
            className="text-xl mb-8 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Contact us today to learn more about our {service.title.toLowerCase()} services.
          </p>
          <Link
            to="/contact"
            className="btn bg-white text-secondary hover:bg-gray-100"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
