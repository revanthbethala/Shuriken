/* eslint-disable react/prop-types */

const ResumePreview = ({ formData }) => {


   return (
      <div>

         <div id="resume-preview" className="max-w-4xl mx-auto p-6 shadow-md rounded-lg space-y-2">
            <div className="text-center mb-6">
               <h1 className="text-3xl font-bold">{formData.name}</h1>
               <p className="text-gray-600">{formData.email} | {formData.phone}</p>
               <div className="mt-2">
                  <a href={formData.github} className="underline">GitHub</a> |
                  <a href={formData.linkedin} className="underline"> Linked In</a> |
                  <a href={formData.portfolio} className="underline"> Portfolio</a>
               </div>
            </div>

            {/* Education Section */}
            <div className="mb-6">
               <h2 className="text-2xl font-semibold mb-4">Education</h2>
               {formData.education.map((edu, index) => (
                  <div key={index} className="mb-4">
                     <p className="font-semibold">{edu.degree}</p>
                     <p>{edu.duration}</p>
                     <p>{edu.percentage}</p>
                  </div>
               ))}
            </div>

            {/* Experience Section */}
            <div className="mb-6">
               <h2 className="text-2xl font-semibold mb-4">Experience</h2>
               {formData.experience.map((exp, index) => (
                  <div key={index} className="mb-4">
                     <p className="font-semibold">{exp.role}</p>
                     <p>{exp.duration}</p>
                     <p>{exp.details}</p>
                  </div>
               ))}
            </div>

            {/* Projects Section */}
            <div className="mb-6">
               <h2 className="text-2xl font-semibold mb-4">Projects</h2>
               {formData.projects.map((project, index) => (
                  <div key={index} className="mb-4">
                     <p className="font-semibold">{project.title}</p>
                     <p>{project.description}</p>
                  </div>
               ))}
            </div>

            {/* Skills Section */}
            <div className="mb-6">
               <h2 className="text-2xl font-semibold mb-4">Skills</h2>
               <ul className="list-disc pl-6">
                  {formData.skills.map((skill, index) => (
                     <li key={index}>{skill}</li>
                  ))}
               </ul>
            </div>

            {/* Languages Section */}
            <div className="mb-6">
               <h2 className="text-2xl font-semibold mb-4">Languages</h2>
               <ul className="list-disc pl-6">
                  {formData.languages.map((lang, index) => (
                     <li key={index}>{lang}</li>
                  ))}
               </ul>
            </div>

            {/* Certifications Section */}
            <div className="mb-6">
               <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
               {formData.certifications.map((cert, index) => (
                  <div key={index} className="mb-4">
                     <p className="font-semibold">{cert.title}</p>
                     <p>{cert.issuedBy} - {cert.date}</p>
                  </div>
               ))}
            </div>

            {/* Achievements Section */}
            <div className="mb-6">
               <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
               <p>{formData.achievements}</p>
            </div>

            {/* Extra Curricular Section */}
            <div className="mb-6">
               <h2 className="text-2xl font-semibold mb-4">Extra-Curricular Activities</h2>
               <p>{formData.extraCurricular}</p>
            </div>
         </div>
      </div>
   );
};

export default ResumePreview;
