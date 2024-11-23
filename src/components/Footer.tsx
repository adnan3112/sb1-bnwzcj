import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';  // Using react-icons
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="https://i.imgur.com/zvoXvgM.png" 
                alt="Logo" 
                className="h-16 w-16" 
              />
              <span className="font-bold text-xl">Groww Digitally</span>
            </Link>
            <p className="text-sm text-gray-300">
              Planting Seeds for Your Digital Future
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-500 hover:text-blue-700 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-500 hover:text-blue-700 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-500 hover:text-blue-700 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-500 hover:text-blue-700 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li>+91 91586 69195</li>
              <li>info@growwdigitally.com</li>
              <li>Sainath Nagar, Boisar West</li>
              <li>Maharashtra, India</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-700 transition-colors">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-700 transition-colors">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-700 transition-colors">
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>
            For more services visit{' '}
            <a 
              href="https://www.growwdigitally.com" 
              className="text-blue-500 hover:text-blue-700" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              growwdigitally.com
            </a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
