import { motion } from 'framer-motion';

const AboutMe = () => (
   <section id="about" className="px-6 md:px-10 lg:px-16 py-12 md:py-24">
      <motion.div
         className="max-w-7xl mx-auto text-center"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1.5 }}
      >
         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 dark:text-white">About Shuriken</h2>
         <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Shuriken is more than just a job portal; it is a platform designed to connect job seekers with opportunities across multiple industries. Whether you are looking for a full-time position, a part-time job, or a freelance gig, Shuriken offers a wide array of job listings to suit your needs. In addition to job applications, we also provide curated learning paths to help you enhance your skills and boost employability.
         </p>
      </motion.div>
   </section>
);

export default AboutMe;
