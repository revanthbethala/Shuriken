import { howItWorks } from "../data";

const HowItWorks = () => {
   const features = [
      {
         title: "Assess Your Skills with Mock Tests",
         description:
            "Evaluate your expertise in various domains through our comprehensive mock tests. ",
      },
      {
         title: "Personalized Course and Job Recommendations",
         description:
            "Based on your test scores, we suggest tailored courses to enhance your skills and jobs that match your expertise.",
      },
      {
         title: "Automated Resume Builder",
         description:
            "Simplify your job application process with our automated resume builder.",
      },
      {
         title: "Earn Certifications",
         description:
            "On successful completion of your courses, earn verified certifications to showcase your skills. ",
      },
   ];

   return (
      <div className="flex flex-col lg:flex-row items-center justify-between p-6 lg:p-12">
         <div className="w-full lg:w-1/2 flex justify-center">
            <img
               src={howItWorks}
               alt="Illustration of How It Works"
               className="w-full max-w-md lg:max-w-lg object-contain"
            />
         </div>
         <div className="w-full lg:w-1/2 py-8 lg:py-0">
            <h2 className="text-3xl lg:text-4xl font-semibold text-center lg:text-left text-gray-800 mb-8">
               How Shuriken Works
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {features.map((feature, index) => (
                  <div
                     key={index}
                     className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  >
                     <h3 className="text-lg font-semibold text-blue-600 mb-2">
                        {feature.title}
                     </h3>
                     <p className="text-gray-700 text-sm">{feature.description}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default HowItWorks;
