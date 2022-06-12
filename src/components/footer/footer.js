import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer-1 bg-gray-100 py-8 sm:py-12 ">
        <div className="container mx-auto px-4">
          <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
              <h5 className="text-xl font-bold mb-6">Quick Links</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <Link
                    to="/"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/conference"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Conference
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/about_gwalior"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    About Gwalior
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/guidelines"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Guidelines
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/schedule"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Schedule
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/important_dates"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Important Dates
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/advisory_memebers"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Advisory Memebers
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/registration"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Registration
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/contact"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
              <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">
                Stay connected
              </h5>
              <div className="flex sm:justify-center xl:justify-start">
                <a
                  href="/"
                  className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="/"
                  className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="/"
                  className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600"
                >
                  <i className="fab fa-google-plus-g"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t text-3xl md:text-xl">
          <div className="sm:w-full px-4 md:w-1/6">
              <img src={Logo} alt="logo" className="md:h-40 lg:block h-12 mb-3  w-auto" />
            </div>
            <div className="sm:w-full px-4 md:w-1/6">
              <strong>Prestige Institute of Management and Research</strong>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
              <h6 className="font-bold mb-2">Address</h6>
              <address className="not-italic mb-4 text-sm">
                Airport Rd, D.D. Nagar, Deen Dayal Nagar,
                <br />
                Gwalior, Madhya Pradesh 474020
                <br />
                <a className="text-sky-700 underline decoration-sky-500"href="mailto:info@prestigegwl.org">info@prestigegwl.org</a><br/>
                <a className="text-sky-700 underline decoration-sky-500"href="tel:09827057466">098270 57466</a>

              </address>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
              <h6 className="font-bold mb-2">Copyright</h6>
              <p className="mb-4 text-sm">
                Prestige Institute of Management & Research <strong>&copy; 2022</strong>.<br />
                <em>All Right Reserved</em>
              </p>
            </div>
            
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
