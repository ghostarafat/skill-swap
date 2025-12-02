import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiBodySwapping } from "react-icons/gi";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 text-gray-700 py-8 mt-12 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        {/* Logo (ADDED) */}
        <div>
          <h2 className="text-xl font-bold text-yellow-800 flex items-center justify-center md:justify-start gap-1">
            <GiBodySwapping /> SkillSwap
          </h2>
          <p className="mt-2 text-sm">Exchange skills. Empower growth.</p>
        </div>

        {/* Contact (UNCHANGED) */}
        <div>
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <p>Email: support@skillswap.com</p>
          <p>Phone: +880 1234 567890</p>
        </div>

        {/* Social (UNCHANGED) */}
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex justify-center md:justify-start gap-4 mt-2 text-xl">
            {[FaFacebook, FaTwitter, FaLinkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-125 hover:text-yellow-700"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links (ADDED) */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <p>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </p>
          <p>
            <Link to="/all-items" className="hover:underline">
              All Items
            </Link>
          </p>
          <p>
            <Link to="/about" className="hover:underline">
              About Us
            </Link>
          </p>
          <p>
            <Link to="/support" className="hover:underline">
              Support
            </Link>
          </p>
          <p>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </p>
        </div>
      </div>

      <div className="text-center mt-6 text-sm text-gray-600">
        &copy;2025 SkillSwap | Connect. Learn. Grow.
      </div>
    </footer>
  );
}

export default Footer;
