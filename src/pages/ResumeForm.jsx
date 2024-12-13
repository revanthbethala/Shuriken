import React, { useState } from "react";

const ResumeForm = ({ handleFormChange }) => {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      github: '',
      linkedin: '',
      portfolio: '',
      education: [{ degree: '', duration: '', percentage: '' }],
      experience: [{ role: '', duration: '', details: '' }],
      projects: [{ title: '', description: '' }],
      skills: [],
      certifications: [{ title: '', issuedBy: '', date: '' }],
      languages: [],
      achievements: '',
      extraCurricular: ''
   });

   const handleChange = (e, section, index) => {
      const { name, value } = e.target;
      const updatedData = { ...formData };

      if (section === 'personal') {
         updatedData[name] = value;
      } else if (section === 'education') {
         updatedData.education[index][name] = value;
      } else if (section === 'experience') {
         updatedData.experience[index][name] = value;
      } else if (section === 'projects') {
         updatedData.projects[index][name] = value;
      } else if (section === 'certifications') {
         updatedData.certifications[index][name] = value;
      } else if (section === 'skills') {
         updatedData.skills = value.split(",").map(skill => skill.trim());
      } else if (section === 'languages') {
         updatedData.languages = value.split(",").map(lang => lang.trim());
      }

      setFormData(updatedData);
      handleFormChange(updatedData); // Pass changes back to parent
   };

   const addItem = (section) => {
      const newItem = {
         education: { degree: '', duration: '', percentage: '' },
         experience: { role: '', duration: '', details: '' },
         projects: { title: '', description: '' },
         certifications: { title: '', issuedBy: '', date: '' },
      }[section];
      setFormData((prevData) => ({
         ...prevData,
         [section]: [...prevData[section], newItem]
      }));
   };

   const removeItem = (section, index) => {
      setFormData((prevData) => ({
         ...prevData,
         [section]: prevData[section].filter((_, i) => i !== index)
      }));
   };

   return (
      <div className="w-full max-w-xl p-6 bg-gray-50 shadow-md rounded-lg">
         <h2 className="text-2xl font-semibold mb-6">Create Your Resume</h2>

         {/* Personal Information */}
         <div className="mb-6">
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
               type="text"
               name="name"
               placeholder="Full Name"
               value={formData.name}
               onChange={(e) => handleChange(e, 'personal')}
               className="w-full px-4 py-2 border rounded-md mb-4"
            />
            <label className="block text-gray-700 mb-1">Email</label>
            <input
               type="email"
               name="email"
               placeholder="Email"
               value={formData.email}
               onChange={(e) => handleChange(e, 'personal')}
               className="w-full px-4 py-2 border rounded-md mb-4"
            />
            <label className="block text-gray-700 mb-1">Phone</label>
            <input
               type="text"
               name="phone"
               placeholder="Phone"
               value={formData.phone}
               onChange={(e) => handleChange(e, 'personal')}
               className="w-full px-4 py-2 border rounded-md"
            />
         </div>

         {/* Links */}
         <div className="mb-6">
            <label className="block text-gray-700 mb-1">GitHub URL</label>
            <input
               type="url"
               name="github"
               placeholder="GitHub URL"
               value={formData.github}
               onChange={(e) => handleChange(e, 'personal')}
               className="w-full px-4 py-2 border rounded-md mb-4"
            />
            <label className="block text-gray-700 mb-1">LinkedIn URL</label>
            <input
               type="url"
               name="linkedin"
               placeholder="LinkedIn URL"
               value={formData.linkedin}
               onChange={(e) => handleChange(e, 'personal')}
               className="w-full px-4 py-2 border rounded-md mb-4"
            />
            <label className="block text-gray-700 mb-1">Portfolio URL</label>
            <input
               type="url"
               name="portfolio"
               placeholder="Portfolio URL"
               value={formData.portfolio}
               onChange={(e) => handleChange(e, 'personal')}
               className="w-full px-4 py-2 border rounded-md"
            />
         </div>

         {/* Education Section */}
         <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Education</h3>
            {formData.education.map((edu, index) => (
               <div key={index} className="space-y-3">
                  <label className="block text-gray-700 mb-1">Degree</label>
                  <input
                     type="text"
                     name="degree"
                     placeholder="Degree"
                     value={edu.degree}
                     onChange={(e) => handleChange(e, 'education', index)}
                     className="w-full px-4 py-2 border rounded-md"
                  />
                  <label className="block text-gray-700 mb-1">Duration</label>
                  <input
                     type="text"
                     name="duration"
                     placeholder="Duration (e.g., 2019-2023)"
                     value={edu.duration}
                     onChange={(e) => handleChange(e, 'education', index)}
                     className="w-full px-4 py-2 border rounded-md"
                  />
                  <label className="block text-gray-700 mb-1">Percentage/CGPA</label>
                  <input
                     type="text"
                     name="percentage"
                     placeholder="Percentage / CGPA"
                     value={edu.percentage}
                     onChange={(e) => handleChange(e, 'education', index)}
                     className="w-full px-4 py-2 border rounded-md"
                  />
                  {index > 0 && (
                     <button
                        type="button"
                        onClick={() => removeItem('education', index)}
                        className="text-red-500 hover:underline"
                     >
                        Remove Education
                     </button>
                  )}
               </div>
            ))}
            <button
               type="button"
               onClick={() => addItem('education')}
               className="text-blue-500 hover:underline"
            >
               Add More Education
            </button>
         </div>

         {/* Repeat for other sections like Experience, Projects, Skills, etc. */}
         {/* Skills Section */}
         <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Skills</h3>
            <label className="block text-gray-700 mb-1">List your skills (comma-separated)</label>
            <input
               type="text"
               name="skills"
               placeholder="e.g., JavaScript, React, Node.js"
               value={formData.skills.join(", ")}
               onChange={(e) => handleChange(e, 'skills')}
               className="w-full px-4 py-2 border rounded-md"
            />
         </div>

         {/* Languages Section */}
         <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Languages</h3>
            <label className="block text-gray-700 mb-1">List languages (comma-separated)</label>
            <input
               type="text"
               name="languages"
               placeholder="e.g., English, Spanish, French"
               value={formData.languages.join(", ")}
               onChange={(e) => handleChange(e, 'languages')}
               className="w-full px-4 py-2 border rounded-md"
            />
         </div>
      </div>
   );
};

export default ResumeForm;
