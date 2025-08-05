import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white py-10 px-6 md:px-20 text-gray-700 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-lg font-bold text-black mb-2">Panto</h2>
          <p>The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.</p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-2">Services</h3>
          <ul className="space-y-1">
            <li>Email Marketing</li>
            <li>Campaigns</li>
            <li>Branding</li>
          </ul>
        </div>

        {/* Furniture */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-2">Furniture</h3>
          <ul className="space-y-1">
            <li>Beds</li>
            <li>Chair</li>
            <li>All</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-2">Follow Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Facebook className="w-4 h-4" />
              Facebook
            </li>
            <li className="flex items-center gap-2">
              <Twitter className="w-4 h-4" />
              Twitter
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="w-4 h-4" />
              Instagram
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 border-t pt-6">
        <p>&copy; 2021</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
