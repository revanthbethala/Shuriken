import { linkedin, facebook } from "../data";
const Footer = () => {
   return (
      <footer id="contact" className="bg-gray-800 text-white py-12">
         <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div>
                  <h3 className="text-lg font-semibold mb-4">About Shuriken</h3>
                  <p className="text-gray-400">
                     Shuriken is your one-stop platform for exploring job opportunities and enhancing your skills with top-notch courses. Our mission is to help you grow and succeed in your career.
                  </p>
               </div>

               <div>
                  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-3">
                     <li>
                        <a href="#home" className="text-gray-400 hover:text-blue-500">Home</a>
                     </li>
                     <li>
                        <a href="#courses" className="text-gray-400 hover:text-blue-500">Courses</a>
                     </li>
                     <li>
                        <a href="#about" className="text-gray-400 hover:text-blue-500">About</a>
                     </li>
                     <li>
                        <a href="#contact" className="text-gray-400 hover:text-blue-500">Contact</a>
                     </li>
                  </ul>
               </div>

               <div>
                  <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
                  <div className="flex flex-col gap-3 hover:text-underline underline-offset-2">
                     <a href="https://www.facebook.com" className="text-gray-400 hover:text-blue-500">
                        <div className="flex gap-2">
                           <img src={facebook} alt="facebook" className="w-5 h-5" />
                           <p>Facebook</p>
                        </div>
                     </a>
                     <a href="https://www.linkedin.com" className="text-gray-400 hover:text-blue-500 hover:text-underline underline-offset-2">
                        <div className="flex gap-2">
                           <img src={linkedin} alt="linkedin" className="w-5 h-5" />
                           <p>Linked In</p>
                        </div>
                     </a>

                  </div>
               </div>
            </div>

            <div className="mt-12 border-t border-gray-700 pt-6 text-center">
               <p className="text-gray-400 text-sm">
                  &copy; 2024 Shuriken. All Rights Reserved. | <a href="#privacy" className="hover:text-blue-500">Privacy Policy</a> | <a href="#terms" className="hover:text-blue-500">Terms of Service</a>
               </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
