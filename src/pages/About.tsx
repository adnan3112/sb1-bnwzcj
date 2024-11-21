import { Lightbulb, Target, Users } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center" data-aos="fade-up">
            About Groww Digitally
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-center" data-aos="fade-up" data-aos-delay="100">
            A leading IT solutions company providing services like Custom Software Development, 
            ERP Solutions, and Website Design.
          </p>
        </div>
      </section>

      <section className="section bg-light">
  <div className="container">
    <div className="grid md:grid-cols-2 gap-12">
      {/* Mission */}
      <div className="card p-6" data-aos="fade-right">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center">
            <Target className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold ml-4">Our Mission</h2>
        </div>
        <p className="text-gray-600">
          To revolutionize sectors with cutting-edge digital solutions that enhance efficiency, 
          inspire innovation, and create a lasting impact. We are committed to empowering organizations 
          to thrive in a rapidly evolving world by delivering technology that truly transforms lives.
        </p>
      </div>

      {/* Vision */}
      <div className="card p-6" data-aos="fade-left">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center">
            <Lightbulb className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold ml-4">Our Vision</h2>
        </div>
        <p className="text-gray-600">
          To be the global leader in driving digital transformation across diverse sectors, 
          enabling people and organizations to unlock their full potential. Through collaboration, 
          innovation, and excellence, we envision a world where technology fosters growth, sustainability, 
          and better futures for everyone.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Team Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Our talented team of professionals is dedicated to delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Melvin',
                role: 'Managing Director',
                image: 'https://i.imgur.com/nnsQuB5.jpg', // External image URL
                description: 'Leads the organization with a vision to innovate and excel.'
              },
              {
                name: 'Xavier',
                role: 'Technical Director',
                image: 'https://avatar.iran.liara.run/public/13', // External image URL
                description: 'Expert in technology solutions and software architecture.'
              },
              {
                name: 'Bhairav',
                role: 'Creative Director',
                image: 'https://i.imgur.com/HYO67oe.jpg', // External image URL
                description: 'Passionate about creating memorable and impactful experiences.'
              }
            ].map((member, index) => (
              <div key={member.name} className="card text-center group shadow-lg p-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="mb-6 relative mx-auto w-32 h-32 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e: any) => e.target.src = 'https://via.placeholder.com/150'} // Fallback image
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
