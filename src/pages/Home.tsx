import { Helmet } from 'react-helmet';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Lock, Rocket, BarChart, Code, Users, Target } from 'lucide-react';

const Home = () => {
  const industries = [
    { name: 'Retail', description: 'Optimize sales channels and enhance customer experience', icon: <BarChart className="h-12 w-12 text-primary" /> },
    { name: 'Healthcare', description: 'Innovative solutions for better patient care', icon: <Lock className="h-12 w-12 text-primary" /> },
    { name: 'Finance', description: 'Secure and scalable financial platforms', icon: <Rocket className="h-12 w-12 text-primary" /> },
    { name: 'Education', description: 'Transforming learning through digital tools', icon: <Code className="h-12 w-12 text-primary" /> },
  ];

  const processSteps = [
    { title: 'Discovery & Analysis', description: 'Understanding your goals and challenges to craft a tailored solution.', icon: <Target className="h-10 w-10 text-secondary" /> },
    { title: 'Design & Planning', description: 'Crafting intuitive designs and comprehensive project plans.', icon: <Rocket className="h-10 w-10 text-secondary" /> },
    { title: 'Development', description: 'Building robust, scalable, and secure software solutions.', icon: <Code className="h-10 w-10 text-secondary" /> },
    { title: 'Deployment & Support', description: 'Ensuring smooth implementation and ongoing support.', icon: <Users className="h-10 w-10 text-secondary" /> },
  ];

  const benefits = [
    { title: 'Security', description: 'Industry-leading data protection.', icon: <Lock className="h-8 w-8 text-secondary" /> },
    { title: 'Scalability', description: 'Easily grow with demand.', icon: <BarChart className="h-8 w-8 text-secondary" /> },
    { title: 'Efficiency', description: 'Streamlined processes.', icon: <Rocket className="h-8 w-8 text-secondary" /> },
    { title: 'Customization', description: 'Solutions tailored for you.', icon: <Code className="h-8 w-8 text-secondary" /> },
    { title: 'Collaboration', description: 'We work together to succeed.', icon: <Users className="h-8 w-8 text-secondary" /> },
    { title: 'Innovation', description: 'Forward-thinking technology.', icon: <Target className="h-8 w-8 text-secondary" /> },
  ];

  return (
    <div>
      <Helmet>
        <title>Groww Digitally</title>
        <meta name="description" content="Innovative IT solutions for businesses." />
      </Helmet>

      {/* Industries Section */}
      <section className="section bg-white">
        <h2 className="section-title">Industries We Serve</h2>
        <Swiper loop={true} autoplay={{ delay: 3000 }} spaceBetween={20} slidesPerView={3} breakpoints={{ 640: { slidesPerView: 1 }, 1024: { slidesPerView: 3 } }}>
          {industries.map((industry, index) => (
            <SwiperSlide key={index}>
              <div className="card text-center">
                {industry.icon}
                <h3 className="text-xl font-semibold mt-4">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Our Process Section */}
      <section className="section bg-gray-100">
        <h2 className="section-title">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              {step.icon}
              <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-light">
        <h2 className="section-title">Benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="card text-center">
              {benefit.icon}
              <h3 className="text-xl font-semibold mt-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
