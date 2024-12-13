/* eslint-disable react/prop-types */
import html2pdf from "html2pdf.js";
import { useState } from "react";

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
      projects: [{ title: '', techStack: '', description: '' }],
      skills: [],
      certifications: [{ title: '', issuedBy: '', date: '' }],
      languages: [],
      achievements: '',
      extraCurricular: ''
   });
   const downloadResume = () => {
      const element = document.getElementById("resume-preview");
      const options = {
         margin: 1,
         filename: 'resume.pdf',
         image: { type: 'jpeg', quality: 0.98 },
         html2canvas: { scale: 2 },
         jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

      // Use html2pdf to convert the element to PDF
      html2pdf()
         .from(element)
         .set(options)
         .save();
   };

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
      } else if (section === 'achievements') {
         updatedData.achievements = value;
      } else if (section === 'extraCurricular') {
         updatedData.extraCurricular = value;
      }

      setFormData(updatedData);
      handleFormChange(updatedData); // Pass changes back to parent
   };

   const addItem = (section) => {
      const newItem = {
         education: { degree: '', duration: '', percentage: '' },
         experience: { role: '', duration: '', details: '' },
         projects: { title: '', techStack: '', description: '' },
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
      <div className="w-full max-w-xl p-6 shadow-md rounded-lg ">
         <h2 className="text-2xl font-semibold mb-6">Create Your Resume</h2>

         {/* Personal Information */}
         <div className="mb-6">
            <label className="block text-gray-400 mb-1">Full Name</label>
            <input
               type="text"
               name="name"
               placeholder="Full Name"
               value={formData.name}
               onChange={(e) => handleChange(e, 'personal')}
               className="w-full px-4 py-2 border rounded-md mb-4"
            />
            <label className="block text-gray-400 mb-1">Email</label>
            <input
               type="email"
               name="email"
               placeholder="Email"
               value={formData.email}
               onChange={(e) => handleChange(e, 'personal')}
               className="w-full px-4 py-2 border rounded-md mb-4"
            />
            <label className="block text-gray-400 mb-1">Phone</label>
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
            <label className="block text-gray-400 mb-1">GitHub URL</label>
            <input
               type="url"
               name="github"
               placeholder="GitHub URL"
               value={formData.github}
               onChange={(e) => handleChange(e, 'personal')}
               className="w-full px-4 py-2 border rounded-md mb-4"
            />
            <label className="block text-gray-400 mb-1">LinkedIn URL</label>
            <input
               type="url"
               name="linkedin"
               placeholder="LinkedIn URL"
               value={formData.linkedin}
               onChange={(e) => handleChange(e, 'personal')}
               className="w-full px-4 py-2 border rounded-md mb-4"
            />
            <label className="block text-gray-400 mb-1">Portfolio URL</label>
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
                  <label className="block text-gray-400 mb-1">Degree</label>
                  <input
                     type="text"
                     name="degree"
                     placeholder="Degree"
                     value={edu.degree}
                     onChange={(e) => handleChange(e, 'education', index)}
                     className="w-full px-4 py-2 border rounded-md"
                  />
                  <label className="block text-gray-400 mb-1">Duration</label>
                  <input
                     type="text"
                     name="duration"
                     placeholder="Duration (e.g., 2019-2023)"
                     value={edu.duration}
                     onChange={(e) => handleChange(e, 'education', index)}
                     className="w-full px-4 py-2 border rounded-md"
                  />
                  <label className="block text-gray-400 mb-1">Percentage/CGPA</label>
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
         {/* Experience Section */}
         <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Experience</h3>
            {formData.experience.map((exp, index) => (
               <div key={index} className="space-y-3">
                  <label className="block text-gray-400 mb-1">Role</label>
                  <input
                     type="text"
                     name="role"
                     placeholder="Role"
                     value={exp.role}
                     onChange={(e) => handleChange(e, 'experience', index)}
                     className="w-full px-4 py-2 border rounded-md"
                  />
                  <label className="block text-gray-400 mb-1">Duration</label>
                  <input
                     type="text"
                     name="duration"
                     placeholder="Duration (e.g., 2020-2022)"
                     value={exp.duration}
                     onChange={(e) => handleChange(e, 'experience', index)}
                     className="w-full px-4 py-2 border rounded-md"
                  />
                  <label className="block text-gray-400 mb-1">Details</label>
                  <textarea
                     name="details"
                     placeholder="Job details"
                     value={exp.details}
                     onChange={(e) => handleChange(e, 'experience', index)}
                     className="w-full px-4 py-2 border rounded-md"
                  />
                  {index > 0 && (
                     <button
                        type="button"
                        onClick={() => removeItem('experience', index)}
                        className="text-red-500 hover:underline"
                     >
                        Remove Experience
                     </button>
                  )}
               </div>
            ))}
            <button
               type="button"
               onClick={() => addItem('experience')}
               className="text-blue-500 hover:underline"
            >
               Add More Experience
            </button>
         </div>


         {/* Projects Section */}
         <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Projects</h3>
            {formData.projects.map((project, index) => (
               <div key={index} className="space-y-3">
                  <label className="block text-gray-400 mb-1">Project Title</label>
                  <input
                     type="text"
                     name="title"
                     placeholder="Project Title"
                     value={project.title}
                     onChange={(e) => handleChange(e, 'projects', index)}
                     className="w-full px-4 py-2 border rounded-md"
                  />
                  <label className="block text-gray-400 mb-1">Tech Stack</label>
                  <input
                     type="text"
                     name="techStack"
                     placeholder="Tech Stack Used (comma-separated)"
                     value={project.techStack}
                     onChange={(e) => handleChange(e, 'projects', index)}
                     className="w-full px-4 py-2 border rounded-md"
                  />
                  <label className="block text-gray-400 mb-1">Description</label>
                  <textarea
                     name="description"
                     placeholder="Project Description"
                     value={project.description}
                     onChange={(e) => handleChange(e, 'projects', index)}
                     className="w-full px-4 py-2 border rounded-md"
                  />
                  {index > 0 && (
                     <button
                        type="button"
                        onClick={() => removeItem('projects', index)}
                        className="text-red-500 hover:underline"
                     >
                        Remove Project
                     </button>
                  )}
               </div>
            ))}
            <button
               type="button"
               onClick={() => addItem('projects')}
               className="text-blue-500 hover:underline"
            >
               Add More Project
            </button>
         </div>

         {/* Certifications Section */}
         <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Certifications</h3>
            {formData.certifications.map((cert, index) => (
               <div key={index} className="space-y-3">
                  <label className="block text-gray-400 mb-1">Certification Title</label>
                  <input
                     type="text"
                     name="title"
                     placeholder="Certification Title"
                     value={cert.title}
                     onChange={(e) => handleChange(e, 'certifications', index)}
                     className="w-full px-4 py-2 border rounded-md"
                  />
                  <label className="block text-gray-400 mb-1">Issued By</label>
                  <input
                     type="text"
                     name="issuedBy"
                     placeholder="Issued By"
                     value={cert.issuedBy}
                     onChange={(e) => handleChange(e, 'certifications', index)}
                     className="w-full px-4 py-2 border rounded-md"
                  />
                  <label className="block text-gray-400 mb-1">Date of Issue</label>
                  <input
                     type="date"
                     name="date"
                     value={cert.date}
                     onChange={(e) => handleChange(e, 'certifications', index)}
                     className="w-full px-4 py-2 border rounded-md"
                  />
                  {index > 0 && (
                     <button
                        type="button"
                        onClick={() => removeItem('certifications', index)}
                        className="text-red-500 hover:underline"
                     >
                        Remove Certification
                     </button>
                  )}
               </div>
            ))}
            <button
               type="button"
               onClick={() => addItem('certifications')}
               className="text-blue-500 hover:underline"
            >
               Add More Certification
            </button>
         </div>

         {/* Skills Section */}
         <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Skills</h3>
            <label className="block text-gray-400 mb-1">List your skills (comma-separated)</label>
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
            <label className="block text-gray-400 mb-1">List languages (comma-separated)</label>
            <input
               type="text"
               name="languages"
               placeholder="e.g., English, Spanish, French"
               value={formData.languages.join(", ")}
               onChange={(e) => handleChange(e, 'languages')}
               className="w-full px-4 py-2 border rounded-md"
            />
         </div>

         {/* Achievements Section */}
         <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Achievements</h3>
            <label className="block text-gray-400 mb-1">List your achievements</label>
            <textarea
               name="achievements"
               placeholder="e.g., Awarded 'Employee of the Year' at XYZ company."
               value={formData.achievements}
               onChange={(e) => handleChange(e, 'achievements')}
               className="w-full px-4 py-2 border rounded-md"
            />
         </div>

         {/* Extra-Curricular Activities Section */}
         <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Extra-Curricular Activities</h3>
            <label className="block text-gray-400 mb-1">List your extra-curricular activities</label>
            <textarea
               name="extraCurricular"
               placeholder="e.g., Volunteer work, sports, etc."
               value={formData.extraCurricular}
               onChange={(e) => handleChange(e, 'extraCurricular')}
               className="w-full px-4 py-2 border rounded-md"
            />
         </div>

         <button onClick={downloadResume} className="mb-4 p-2 bg-blue-500 text-white rounded">
            Download Resume
         </button>
      </div>
   );
};

export default ResumeForm;
