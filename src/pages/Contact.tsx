import { useState, FormEvent } from "react";
import { Helmet } from "react-helmet";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendWhatsAppMessage = async () => {
    const phone = "+91 9545818948"; // <-- Your WhatsApp number
    const apikey = "YOUR_API_KEY"; // <-- Your CallMeBot API key
    const text = `🚀 New Lead from Groww Digitally:\n\n👤 Name: ${
      formData.name
    }\n📧 Email: ${formData.email}\n📱 Phone: ${
      formData.phone || "N/A"
    }\n💬 Message: ${formData.message}`;

    try {
      const response = await fetch(
        `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodeURIComponent(
          text
        )}&apikey=${apikey}`
      );
      const data = await response.text();
      console.log("WhatsApp Response:", data);
    } catch (err) {
      console.error("Error sending WhatsApp message:", err);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      to_name: "Groww Digitally Team",
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send("service_xt66o39", "template_5rsscrl", data, "TC7GBas9O4jpNcloh")
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          sendWhatsAppMessage(); // Trigger WhatsApp notification
          setIsSubmitted(true);
          setIsLoading(false);
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.error("Error sending email:", error);
          setIsLoading(false);
          setError(
            "There was an error sending your message. Please try again."
          );
        }
      );
  };

  return (
    <div>
      <Helmet>
        <title>Contact Us - Groww Digitally</title>
        <meta
          name="description"
          content="Get in touch with Groww Digitally for any inquiries or support."
        />
        <meta
          name="keywords"
          content="contact Groww Digitally, email, phone, address"
        />
        <meta name="author" content="Groww Digitally" />
        <meta property="og:title" content="Contact Us - Groww Digitally" />
        <meta
          property="og:description"
          content="We'd love to hear from you! Fill out the contact form or use our contact details to reach us."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.growwdigitally.com/contact"
        />
      </Helmet>

      <section
        className="relative bg-fixed bg-center pt-40 pb-40"
        style={{
          backgroundImage: "url('/assets/icons/contact.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-dark bg-opacity-70 backdrop-blur-sm"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-light text-center px-4 pb-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            We'd love to hear from you! Fill out the form below, and we'll get
            back to you shortly.
          </p>
        </div>
      </section>

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
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                    <p className="text-gray-600">+91 97333 16555
                     <br />
                        +91 93704 16478
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-gray-600">info@growwdigitally.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Address</h3>
                    <p className="text-gray-600">
                      Thakur Galaxy, Building No.4, Office No.401
                    <br />
                      Boisar, Maharashtra 401501                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                {error && (
                  <div className="text-red-600 text-center">{error}</div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-secondary w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-6">Find Us Here</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.7480270554684!2d72.75048761490343!3d19.803538486683875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71eff0c52e159%3A0xa01dd6cbf3721c6a!2sYashwant%20Shrusti%2C%20Boisar%2C%20Maharashtra%20401501!5e0!3m2!1sen!2sin!4v1683037663915!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
