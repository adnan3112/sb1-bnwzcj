import { Lightbulb, Target, Users } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container">
          <h1 
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
            data-aos="fade-up"
          >
            About Groww Digitally
          </h1>
          <p 
            className="text-xl max-w-3xl mx-auto text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            A leading IT solutions company providing services like Custom Software Development, 
            ERP Solutions, and Website Design. We empower businesses by delivering innovative IT solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div 
              className="card"
              data-aos="fade-right"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold ml-4">Our Mission</h2>
              </div>
              <p className="text-gray-600">
                Empower businesses through innovative IT solutions that drive growth, 
                efficiency, and digital transformation. We strive to be the catalyst 
                that propels organizations into the digital future.
              </p>
            </div>

            <div 
              className="card"
              data-aos="fade-left"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold ml-4">Our Vision</h2>
              </div>
              <p className="text-gray-600">
                Help businesses unlock new opportunities and create meaningful customer 
                experiences through cutting-edge technology solutions and digital innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              data-aos="fade-up"
            >
              Meet Our Team
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Our talented team of professionals is dedicated to delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Alex Thompson',
                role: 'CEO & Founder',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
                description: 'With over 15 years of experience in digital transformation'
              },
              {
                name: 'Sarah Chen',
                role: 'Technical Director',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
                description: 'Expert in software architecture and development'
              },
              {
                name: 'Michael Roberts',
                role: 'Creative Director',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
                description: 'Passionate about creating impactful digital experiences'
              }
            ].map((member, index) => (
              <div 
                key={member.name}
                className="card text-center group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-6 relative mx-auto w-32 h-32 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-secondary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;