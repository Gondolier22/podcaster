import { HiMicrophone } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo y título */}
          <Link
            to="/"
            className="flex items-center space-x-3 text-white hover:text-blue-100 transition-colors duration-200"
          >
            <div className="flex items-center justify-center w-10 h-10 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm">
              <HiMicrophone className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold tracking-tight">Podcaster</h1>
              {!isHomePage && (
                <span className="text-xs text-blue-100 font-medium">
                  Descubre podcasts increíbles
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
