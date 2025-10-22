import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-yellow-100 text-gray-700 py-6 mt-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        {/* Contact  */}
        <div>
          <h4 className="font-semibold">Contact Us</h4>
          <p>Email: support@skillswap.com</p>
          <p>Phone: +880 1234 567890</p>
        </div>

        {/* Social  */}
        <div>
          <h4 className="font-semibold">Follow Us</h4>
          <div className="flex justify-center md:justify-start gap-4 mt-2 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="hover:text-blue-600" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="hover:text-blue-400" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-blue-700" />
            </a>
          </div>
        </div>

        {/* Privacy part */}
        <div>
          <h4 className="font-semibold">Legal</h4>
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>

      <div className="text-center mt-6 text-sm text-gray-600 ">
        © 2025 SkillSwap | Connect. Learn. Grow.
      </div>
    </footer>
  );
}

export default Footer;
