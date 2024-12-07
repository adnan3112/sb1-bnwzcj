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

  const Icon = service.icon;

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
              className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center"
              data-aos="fade-right"
            >
              <Icon className="h-8 w-8" />
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {service.features.map((feature, index) => {
    if (typeof feature === 'string') {
      return (
        <div
          key={index}
          className="card"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center mb-4">
            <span className="font-bold">{index + 1}</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">{feature}</h3>
        </div>
      );
    } else {
      return (
        <div
          key={index}
          className="card"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center mb-4">
            <span className="font-bold">{index + 1}</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="mb-2"><strong>Objective:</strong> {feature.objective}</p>
          <p className="mb-2"><strong>Features:</strong> {feature.features.join(', ')}</p>
          <p><strong>Outcome:</strong> {feature.outcome}</p>
        </div>
      );
    }
  })}
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
