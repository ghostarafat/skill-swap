import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 text-gray-700 py-8 mt-12 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        {/* Contact  */}
        <div>
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <p>Email: support@skillswap.com</p>
          <p>Phone: +880 1234 567890</p>
        </div>

        {/* Social  */}
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

        {/* Legal / Privacy */}
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <a
            href="/privacy-policy"
            className="hover:underline hover:text-gray-900"
          >
            Privacy Policy
          </a>
        </div>
      </div>

      <div className="text-center mt-6 text-sm text-gray-600">
        &copy;2025 SkillSwap | Connect. Learn. Grow.
      </div>
    </footer>
  );
}

export default Footer;
