/* eslint-disable react/prop-types */
const ResumePreview = ({ formData }) => {
   return (
      <div className="p-8 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
         <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold text-gray-800">{formData.name}</h1>
            <p className="text-lg text-gray-600">
               {formData.email} | {formData.phone}
            </p>
         </div>
         <div className="flex flex-row text-black font-semibold items-center justify-center gap-4">
            <a
               href={formData.github}
               target="_blank"
               rel="noopener noreferrer"
               className="text-underline underline-offset-2"
            >
               GitHub
            </a>
            <a
               href={formData.linkedin}
               target="_blank"
               rel="noopener noreferrer"
               className="text-underline underline-offset-2"
            >
               Linked In
            </a>
            <a
               href={formData.portfolio}
               target="_blank"
               rel="noopener noreferrer"
               className="text-underline underline-offset-2"
            >
               Portfolio
            </a>
         </div>
         <div className="border-b-2 border-gray-200 py-4"></div>

         {/* Education Section */}
         <div className="space-y-4 py-3">
            <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2">
               Education
            </h3>
            {formData.education.map((edu, index) => (
               <div key={index} className="space-y-2">
                  <p className="text-lg font-semibold text-gray-700">{edu.degree}</p>
                  <p className="text-sm text-gray-500">{edu.duration}</p>
                  <p className="text-sm text-gray-600">Percentage/CGPA: {edu.percentage}</p>
               </div>
            ))}
         </div>

         {/* Experience Section */}
         <div className="space-y-4 mt-6">
            <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2">
               Experience
            </h3>
            {formData.experience.map((exp, index) => (
               <div key={index} className="space-y-2">
                  <p className="text-lg font-semibold text-gray-700">{exp.role}</p>
                  <p className="text-sm text-gray-500">{exp.duration}</p>
                  <p className="text-sm text-gray-600">{exp.details}</p>
               </div>
            ))}
         </div>

         {/* Projects Section */}
         <div className="space-y-4 mt-6">
            <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2">
               Projects
            </h3>
            {formData.projects.map((project, index) => (
               <div key={index} className="space-y-2">
                  <p className="text-lg font-semibold text-gray-700">{project.title}</p>
                  <p className="text-sm text-gray-600">{project.description}</p>
               </div>
            ))}
         </div>

         {/* Achievements Section */}
         <div className="space-y-4 mt-6">
            <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2">
               Achievements
            </h3>
            <p className="text-sm text-gray-600">{formData.achievements}</p>
         </div>

         {/* Extra-Curricular Activities Section */}
         <div className="space-y-4 mt-6">
            <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2">
               Extra-Curricular Activities
            </h3>
            <p className="text-sm text-gray-600">{formData.extraCurricular}</p>
         </div>
      </div>
   );
};

export default ResumePreview;
