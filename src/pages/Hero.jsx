import { motion } from 'framer-motion';
import { homeImg } from "../data";

const Hero = () => {
   return (
      <div id='home' className="px-6 md:px-10 lg:px-16 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-20 lg:mt-0">
         <motion.div
            className="mx-auto text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
         >
            <div className="flex flex-col gap-6 items-start">
               <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Welcome to Shuriken
               </h1>
               <p className="text-base md:text-lg text-gray-600 text-justify">
                  Our platform provides a wide range of job opportunities, including full-time, part-time, remote, and freelance roles across various industries. We make job applications simple with one-click apply and instant notifications for new openings.
               </p>

               <div className='flex gap-2'>
                  <motion.button
                     className="px-4 py-3 text-base text-center font-semibold bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                     whileHover={{ scale: 1.05 }}
                     transition={{ type: 'spring', stiffness: 300 }}
                  >
                     View Jobs
                  </motion.button>
                  <motion.button
                     className="px-4 py-3 text-base text-center font-semibold bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                     whileHover={{ scale: 1.05 }}
                     transition={{ type: 'spring', stiffness: 300 }}
                  >
                     View Courses
                  </motion.button>
               </div>
            </div>
         </motion.div>

         <div className="flex justify-center md:justify-end">
            <img src={homeImg} alt="Job Portal" className="w-full max-w-sm md:max-w-lg lg:max-w-xl" />
         </div>
      </div>
   );
};

export default Hero;
