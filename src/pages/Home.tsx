import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Code, Rocket, Target, Users, Lock, BarChart, 
  School, Hospital, WalletCards, ShoppingCart, BriefcaseBusiness 
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect } from 'react';
import { gsap } from 'gsap';

const Home = () => {
  useEffect(() => {
    // Animate cards in "Industries We Serve" section
    gsap.fromTo(
      ".industry-card",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1 }
    );
  }, []);

  const coreValues = [
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
  ];

  const industries = [
    {
      name: 'Education',
      description: 'Transforming learning through digital tools',
      icon: <School className="h-12 w-12 text-primary" />,
    },
    {
      name: 'Business',
      description: 'Innovative solutions for modern business needs',
      icon: <BriefcaseBusiness className="h-12 w-12 text-primary" />,
    },
    {
      name: 'Healthcare',
      description: 'Innovative solutions for better patient care',
      icon: <Hospital className="h-12 w-12 text-primary" />,
    },
    {
      name: 'Finance',
      description: 'Secure and scalable financial platforms',
      icon: <WalletCards className="h-12 w-12 text-primary" />,
    },
  ];

  const processSteps = [
    {
      title: 'Discovery & Analysis',
      description: 'Understanding your goals and challenges to craft a tailored solution.',
      icon: <Target className="h-12 w-12 text-secondary" />,
    },
    {
      title: 'Design & Planning',
      description: 'Crafting intuitive designs and comprehensive project plans.',
      icon: <Rocket className="h-12 w-12 text-secondary" />,
    },
    {
      title: 'Development',
      description: 'Building robust, scalable, and secure software solutions.',
      icon: <Code className="h-12 w-12 text-secondary" />,
    },
    {
      title: 'Deployment & Support',
      description: 'Ensuring smooth implementation and ongoing support.',
      icon: <Users className="h-12 w-12 text-secondary" />,
    },
  ];

  return (
    <div>
      {/* SEO Metadata */}
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
        <div className="container text-center">
          <h1 className="title">Planting Seeds for Your Digital Future</h1>
          <p className="subheading">
            Empowering different sectors through innovative IT solutions and digital transformation
          </p>
          <Link to="/contact" className="btn btn-secondary inline-flex items-center">
            Contact Us <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {coreValues.map((value) => (
              <div key={value.title} className="card text-center">
                <div className="flex-center w-16 h-16 rounded-full bg-secondary text-white mb-4 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Industries We Serve</h2>
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            loop
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 3 },
            }}
          >
            {industries.map((industry) => (
              <SwiperSlide key={industry.name}>
                <div className="industry-card">
                  <div className="mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-semibold">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="section bg-gray-100">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <div className="flex flex-wrap justify-between">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center mx-auto mb-8">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-secondary text-white">
        <div className="container text-center">
          <h2 className="section-title">Ready to Grow Digitally?</h2>
          <p className="subheading max-w-2xl mx-auto">
            Let's transform your sector with our innovative IT solutions
          </p>
          <Link to="/contact" className="btn bg-white text-secondary">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
