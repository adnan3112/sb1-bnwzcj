import { useState, FormEvent } from 'react';
import emailjs from 'emailjs-com';  // Importing EmailJS service

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // State for form submission status
  const [isLoading, setIsLoading] = useState(false); // Loading state for form submission

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state when submitting

    // Prepare the data object to be sent
    const data = {
      to_name: 'Groww Digitally Team',  // You can replace this with your recipient's name
      from_name: formData.name,
      message: formData.message,
    };

    // Send the email via EmailJS
    emailjs
      .send(
        'service_xt66o39', // Your Service ID
        'template_5rsscrl', // Your Template ID
        data, // Data to send (form fields)
        'TC7GBas9O4jpNcloh' // Your Public Key
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          setIsSubmitted(true); // Set submitted state after successful send
          setIsLoading(false);  // Reset loading state
        },
        (error) => {
          console.error('Error sending email:', error);
          setIsLoading(false);  // Reset loading state on error
        }
      );
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container text-center">
          <h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            data-aos="fade-up"
          >
            Contact Us
          </h1>
          <p 
            className="text-xl max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We'd love to hear from you! Fill out the form below, and we'll get back to you shortly.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section bg-light">
        <div className="container">
          {isSubmitted ? (
            <div className="text-center p-6 bg-green-100 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-green-800">
                Thank you for submitting! We'll get back to you shortly.
              </h2>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div 
                className="space-y-8"
                data-aos="fade-right"
              >
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                {/* Add your contact information here */}
              </div>

              {/* Contact Form */}
              <div 
                className="card"
                data-aos="fade-left"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-secondary w-full"
                    disabled={isLoading} // Disable button when loading
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
