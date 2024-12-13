import { howItWorks, features } from "../../data";

const HowItWorks = () => {


   return (
      <div className="flex flex-col lg:flex-row items-center justify-between p-6 lg:p-12">
         <div className="w-full lg:w-1/2 flex justify-center">
            <img
               src={howItWorks}
               loading="lazy"
               alt="Illustration of How It Works"
               className="w-full max-w-md lg:max-w-lg object-contain"
            />
         </div>
         <div className="w-full lg:w-1/2 py-8 lg:py-0">
            <h2 className="text-3xl lg:text-4xl font-semibold text-center lg:text-left text-gray-800 mb-8 dark:text-white">
               How Shuriken Works
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {features.map((feature, index) => (
                  <div
                     key={index}
                     className="dark:border-2 dark:border-white bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 dark:bg-[#020817] "
                  >
                     <h3 className="text-lg font-semibold text-blue-600 mb-2 dark:text-gray-50">
                        {feature.title}
                     </h3>
                     <p className="text-gray-500 text-sm">{feature.description}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default HowItWorks;
