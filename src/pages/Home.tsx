import { Link } from 'react-router-dom';
import { ArrowRight, Code, Rocket, Target, Users } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              data-aos="fade-up"
            >
              Planting Seeds for Your Digital Future
            </h1>
            <p 
              className="text-xl mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Empowering different sectors through innovative IT solutions and digital transformation
            </p>
            <Link 
              to="/contact"
              className="btn btn-secondary inline-flex items-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            data-aos="fade-up"
          >
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8" />,
                title: 'Innovation',
                description: 'Pushing boundaries with cutting-edge solutions',
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: 'Collaboration',
                description: 'Working together to achieve excellence',
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: 'Precision',
                description: 'Attention to detail in every project',
              },
              {
                icon: <Rocket className="h-8 w-8" />,
                title: 'Growth',
                description: 'Continuous improvement and learning',
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className="card text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-white mb-4 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-secondary text-white">
        <div className="container text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            data-aos="fade-up"
          >
            Ready to Grow Digitally?
          </h2>
          <p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Let's transform your sector with our innovative IT solutions
          </p>
          <Link 
            to="/contact"
            className="btn bg-white text-secondary hover:bg-gray-100 inline-flex items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
