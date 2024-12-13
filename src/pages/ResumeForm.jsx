/* eslint-disable react/prop-types */

const ResumeForm = ({
   formData,
   handleChange,
   addEducation,
   removeEducation,
   addExperience,
   removeExperience
}) => {
   return (
      <form className="space-y-6 flex flex-col items-start">
         {/* Personal Information */}
         <div className="space-y-3">
            <h2 className="text-2xl font-semibold">Personal Information</h2>
            <input
               type="text"
               name="name"
               placeholder="Full Name"
               value={formData.name}
               onChange={(e) => handleChange(e, 'personal', 0)}
               className="w-full px-4 py-2 border rounded-md"
            />
            <input
               type="email"
               name="email"
               placeholder="Email"
               value={formData.email}
               onChange={(e) => handleChange(e, 'personal', 0)}
               className="w-full px-4 py-2 border rounded-md"
            />
            <input
               type="text"
               name="phone"
               placeholder="Phone"
               value={formData.phone}
               onChange={(e) => handleChange(e, 'personal', 0)}
               className="w-full px-4 py-2 border rounded-md"
            />
         </div>

         {/* Education */}
         <div className="space-y-3">
            <h2 className="text-2xl font-semibold">Education</h2>
            {formData.education.map((edu, index) => (
               <div key={index} className="space-y-1">
                  <div className="flex justify-between">
                     <label className="font-medium">Degree / Course</label>
                     {index > 0 && (
                        <button
                           type="button"
                           onClick={() => removeEducation(index)}
                           className="text-red-500 hover:underline"
                        >
                           Remove
                        </button>
                     )}
                  </div>
                  <input
                     type="text"
                     name="degree"
                     placeholder="Degree / Course"
                     value={edu.degree}
                     onChange={(e) => handleChange(e, 'education', index)}
                     className="w-full px-4 py-2 border rounded-md"
                  />
                  <input
                     type="text"
                     name="duration"
                     placeholder="Duration (e.g., 2019-2023)"
                     value={edu.duration}
                     onChange={(e) => handleChange(e, 'education', index)}
                     className="w-full px-4 py-2 border rounded-md"
                  />
                  <input
                     type="text"
                     name="percentage"
                     placeholder="Percentage / CGPA"
                     value={edu.percentage}
                     onChange={(e) => handleChange(e, 'education', index)}
                     className="w-full px-4 py-2 border rounded-md"
                  />
               </div>
            ))}
            <button
               type="button"
               onClick={addEducation}
               className="text-blue-500 hover:underline"
            >
               Add More Education
            </button>
         </div>

         {/* Experience */}
         <div className="space-y-3">
            <h2 className="text-2xl font-semibold">Experience</h2>
            {formData.experience.map((exp, index) => (
               <div key={index} className="space-y-1">
                  <div className="flex justify-between">
                     <label className="font-medium">Role</label>
                     {index > 0 && (
                        <button
                           type="button"
                           onClick={() => removeExperience(index)}
                           className="text-red-500 hover:underline"
                        >
                           Remove
                        </button>
                     )}
                  </div>
                  <input
                     type="text"
                     name="role"
                     placeholder="Role"
                     value={exp.role}
                     onChange={(e) => handleChange(e, 'experience', index)}
                     className="w-full px-4 py-2 border rounded-md"
                  />
                  <input
                     type="text"
                     name="duration"
                     placeholder="Duration (e.g., Jan 2021 - Dec 2023)"
                     value={exp.duration}
                     onChange={(e) => handleChange(e, 'experience', index)}
                     className="w-full px-4 py-2 border rounded-md"
                  />
                  <textarea
                     name="details"
                     placeholder="Experience Details"
                     value={exp.details}
                     onChange={(e) => handleChange(e, 'experience', index)}
                     className="w-full px-4 py-2 border rounded-md"
                     rows="4"
                  />
               </div>
            ))}
            <button
               type="button"
               onClick={addExperience}
               className="text-blue-500 hover:underline"
            >
               Add More Experience
            </button>
         </div>

         {/* Other Sections */}
         {/* You can add similar sections for skills, achievements, etc. */}

         {/* Submit Button */}
         <div className="flex justify-end mt-6">
            <button
               type="submit"
               className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
            >
               Submit Resume
            </button>
         </div>
      </form>
   );
};

export default ResumeForm;
