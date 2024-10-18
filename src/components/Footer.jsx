

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Company</h3>
            <ul>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Brand Center</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>

          {/* Help Center Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Help Center</h3>
            <ul>
              <li><a href="#" className="hover:underline">Discord Server</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Legal</h3>
            <ul>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Licensing</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Download Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Download</h3>
            <ul>
              <li><a href="#" className="hover:underline">iOS</a></li>
              <li><a href="#" className="hover:underline">Android</a></li>
              <li><a href="#" className="hover:underline">Windows</a></li>
              <li><a href="#" className="hover:underline">MacOS</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons and Footer Bottom Section */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
          <p className="text-sm">&copy; 2024 All rights reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-blue-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-pink-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-red-500">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
