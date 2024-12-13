import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, LogIn, UserPlus } from "lucide-react";
import { logo } from "../data";

const Logo = () => (
   <motion.div
      className="flex items-center gap-3 text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
   >
      <img src={logo} alt="Shuriken Logo" className="w-14 h-14" />
      <div className="flex flex-col justify-center">
         <h2 className="text-3xl font-bold">Shuriken</h2>
         <p className="text-base font-medium">Sure you can</p>
      </div>
   </motion.div>
);

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);

   const navLinks = [
      { href: "#home", label: "Home" },
      { href: "#courses", label: "Courses" },
      { href: "#about", label: "About" },
      { href: "#contact", label: "Contact" },
   ];

   return (
      <motion.nav
         className="bg-white shadow-md w-full fixed top-0 z-50"
         initial={{ y: -100 }}
         animate={{ y: 0 }}
         transition={{ type: "spring", stiffness: 100 }}
      >
         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Logo />

            {/* Mobile Menu Toggle */}
            <div className="block lg:hidden">
               <motion.button
                  className="text-gray-800 focus:outline-none"
                  onClick={() => setIsOpen(!isOpen)}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
               >
                  <Menu className="w-8 h-8" />
               </motion.button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-6 text-lg">
               {navLinks.map((link, index) => (
                  <motion.a
                     key={index}
                     href={link.href}
                     whileHover={{ scale: 1.1 }}
                     transition={{ type: "spring", stiffness: 300 }}
                     className="text-gray-800 font-medium hover:text-blue-600"

                  >
                     {link.label}
                  </motion.a>
               ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex space-x-4">
               <motion.button
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
               >
                  <LogIn /> Sign In
               </motion.button>
               <motion.button
                  className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
               >
                  <UserPlus /> Sign Up
               </motion.button>
            </div>
         </div>

         {/* Mobile Navigation */}
         {isOpen && (
            <motion.div
               className="lg:hidden absolute top-19 left-0 w-full bg-white shadow-md"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.3 }}
            >
               <div className="flex flex-col items-center space-y-4 py-4">
                  {navLinks.map((link, index) => (
                     <motion.a
                        key={index}
                        href={link.href}
                        className="text-gray-800 font-medium hover:text-blue-600"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                     >
                        {link.label}
                     </motion.a>
                  ))}
                  <motion.button
                     className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center gap-2"
                     whileHover={{ scale: 1.05 }}
                     transition={{ type: "spring", stiffness: 300 }}
                  >
                     <LogIn /> Sign In
                  </motion.button>
                  <motion.button
                     className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300 flex items-center gap-2"
                     whileHover={{ scale: 1.05 }}
                     transition={{ type: "spring", stiffness: 300 }}
                  >
                     <UserPlus /> Sign Up
                  </motion.button>
               </div>
            </motion.div>
         )}
      </motion.nav>
   );
};

export default Header;
