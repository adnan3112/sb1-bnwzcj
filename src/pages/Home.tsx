import { Helmet } from 'react-helmet'; // Import Helmet for SEO
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Rocket, Target, Users, Hospital, WalletCards, ShoppingCart, School, BriefcaseBusiness } from 'lucide-react'; // Import the new icon
import { Swiper, SwiperSlide } from 'swiper/react'; // For carousel
import 'swiper/css'; // Import Swiper styles
import { useEffect } from 'react';
import { gsap } from 'gsap'; // For animations

const Home = () => {
  useEffect(() => {
    // Animating the "Industries We Serve" section with GSAP
    gsap.fromTo(".industry-card", 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1 }
    );
  }, []);

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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Planting Seeds for Your Digital Future
            </h1>
            <p className="text-lg sm:text-xl mb-8">
              Empowering different sectors through innovative IT solutions and digital transformation
            </p>
            <Link to="/contact" className="btn btn-secondary inline-flex items-center px-8 py-4">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="section bg-white py-16">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Industries We Serve</h2>
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 3000 }}
            direction="horizontal" // Ensure horizontal direction
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 3 },
            }}
            className="animate__animated animate__fadeIn" // Animation class added
          >
            {[
              { name: 'Education', description: 'Transforming learning through digital tools', icon: <School className="h-12 w-12 text-primary" /> },
              { name: 'Business', description: 'Innovative solutions for modern business needs', icon: <BriefcaseBusiness className="h-12 w-12 text-primary" /> },  {/* Updated icon here */}
              { name: 'Healthcare', description: 'Innovative solutions for better patient care', icon: <Hospital className="h-12 w-12 text-primary" /> },
              { name: 'Finance', description: 'Secure and scalable financial platforms', icon: <WalletCards className="h-12 w-12 text-primary" /> },
            ].map((industry) => (
              <SwiperSlide key={industry.name}>
                <div className="industry-card text-center p-6 bg-light rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="mb-4 flex justify-center">{industry.icon}</div> {/* Ensure icons are centered */}
                  <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-secondary text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Grow Digitally?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Let's transform your sector with our innovative IT solutions
          </p>
          <Link to="/contact" className="btn bg-white text-secondary hover:bg-gray-100 inline-flex items-center px-8 py-4">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
