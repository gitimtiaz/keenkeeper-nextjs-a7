import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        {/* Brand */}
        <h2 className="text-5xl font-bold mb-3 tracking-tight">KeenKeeper</h2>
        <p className="text-gray-300 text-sm max-w-md mx-auto mb-8 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <p className="text-xs font-semibold tracking-widest text-gray-200 mb-4">
          Social Links
        </p>
        <div className="flex items-center justify-center gap-4 mb-10">
          {[
            { icon: <FaFacebookF size={16} />, href: "#" },
            { icon: <FaTwitter size={16} />, href: "#" },
            { icon: <FaInstagram size={16} />, href: "#" },
          ].map(({ icon, href }, i) => (
            <a
              key={i}
              href={href}
              className="w-8 h-8 rounded-full flex items-center justify-center text-black bg-white hover:bg-green-950 hover:text-white transition-all duration-200"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-green-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <span>© 2026 KeenKeeper. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;