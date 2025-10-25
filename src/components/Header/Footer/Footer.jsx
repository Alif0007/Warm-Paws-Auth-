import { FaFacebookF, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="flex items-center gap-2">
            <FaPhone /> +880 1700-123456
          </p>
          <p className="flex items-center gap-2 my-2">
            <FaEnvelope /> support@warmpaws.com
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt /> Dhaka, Bangladesh
          </p>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-yellow-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-400"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-400"><FaTwitter /></a>
          </div>
        </div>

        {/* Policy */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Policies</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-400">Refund Policy</a></li>
            <li><a href="#" className="hover:text-yellow-400">Terms & Conditions</a></li>
          </ul>
        </div>

      </div>

      <hr className="border-gray-700 my-6 max-w-6xl mx-auto" />

      <p className="text-center text-sm text-gray-400">
        © {new Date().getFullYear()} WarmPaws. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
