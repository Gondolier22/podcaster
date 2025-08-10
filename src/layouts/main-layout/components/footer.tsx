import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMicrophone } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg">
              <HiMicrophone className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-300">
                Hecho por
                <strong className="text-white ml-1">
                  Christian Portillo Sánchez
                </strong>
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Gondolier22"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/christian-portillo-s%C3%A1nchez-433b62131/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
