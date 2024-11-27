import { Helmet } from 'react-helmet'; // For SEO
import { Link } from 'react-router-dom'; // For navigation
import { useEffect } from 'react'; // For lifecycle methods
import { gsap } from 'gsap'; // For animations
import {
  ArrowRight,
  Code,
  Rocket,
  Target,
  Users,
  Lock,
  BarChart,
  School,
  Hospital,
  WalletCards,
  BriefcaseBusiness,
} from 'lucide-react';

const Home = () => {
  useEffect(() => {
    // Animating the Industries We Serve section
    gsap.fromTo(
      '.card',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1 }
    );
  }, []);

  return (
    <div>
      {/* Set Page Metadata */}
      <Helmet>
        <title>Groww Digitally</title>
        <meta
          name="description"
          content="Groww Digitally provides innovative IT solutions, digital transformation, and custom services to help businesses thrive in the digital era."
        />
        <meta
          name="keywords"
          content="digital solutions, IT services, custom software, digital transformation, technology company, innovation, collaboration"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-primary text-white py-20 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Planting Seeds for Your Digital Future
            </h1>
            <p className="text-lg sm:text-xl mb-8">
              Empowering different sectors through innovative IT solutions and
              digital transformation.
            </p>
            <Link
              to="/contact"
              className="btn btn-secondary inline-flex items-center px-8 py-4"
            >
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section bg-light py-16">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8" />,
                title: 'Innovation',
                description: 'Pushing boundaries with cutting-edge solutions.',
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: 'Collaboration',
                description: 'Working together to achieve excellence.',
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: 'Precision',
                description: 'Attention to detail in every project.',
              },
              {
                icon: <Rocket className="h-8 w-8" />,
                title: 'Growth',
                description: 'Continuous improvement and learning.',
              },
            ].map((value) => (
              <div key={value.title} className="card text-center">
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

      {/* Industries We Serve Section */}
      <section className="section bg-white py-16">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Education',
                description: 'Transforming learning through digital tools.',
                icon: <School className="h-12 w-12 text-primary" />,
              },
              {
                name: 'Business',
                description: 'Innovative solutions for modern business needs.',
                icon: <BriefcaseBusiness className="h-12 w-12 text-primary" />,
              },
              {
                name: 'Healthcare',
                description: 'Innovative solutions for better patient care.',
                icon: <Hospital className="h-12 w-12 text-primary" />,
              },
              {
                name: 'Finance',
                description: 'Secure and scalable financial platforms.',
                icon: <WalletCards className="h-12 w-12 text-primary" />,
              },
            ].map((industry) => (
              <div key={industry.name} className="card text-center">
                <div className="mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-gray-100 py-16">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Benefits of Partnering with Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lock className="h-10 w-10 text-secondary" />,
                title: 'Security',
                description: 'Robust measures to keep your data safe.',
              },
              {
                icon: <BarChart className="h-10 w-10 text-secondary" />,
                title: 'Scalability',
                description: 'Solutions that grow with your business.',
              },
              {
                icon: <Rocket className="h-10 w-10 text-secondary" />,
                title: 'Performance',
                description: 'Optimized systems for seamless operations.',
              },
            ].map((benefit) => (
              <div key={benefit.title} className="card text-center">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Grow Digitally?
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Let's transform your sector with our innovative IT solutions. Get in touch today to begin your digital journey.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-4 text-lg font-semibold bg-white text-secondary rounded-lg hover:bg-gray-100 transition-all duration-300"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
