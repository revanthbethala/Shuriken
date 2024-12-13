import React, { useState } from "react";
import ResumeForm from "./ResumeForm"; // Assuming this is your form component
import ResumePreview from "./ResumePreview"; // Assuming this is your preview component

const ResumeBuilder = () => {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      github: '',
      linkedin: '',
      portfolio: '',
      education: [{ degree: '', duration: '', percentage: '', place: '' }],
      experience: [{ role: '', duration: '', details: '', place: '' }],
      projects: [{ title: '', description: '' }],
      skills: [],
      certifications: [{ title: '', issuedBy: '', date: '' }],
      languages: [],
      achievements: '',
      extraCurricular: ''
   });

   // Update form data when changes are made
   const handleFormChange = (updatedData) => {
      setFormData(updatedData);
   };

   return (
      <div className="flex flex-col lg:flex-row gap-8">
         {/* Form Section */}
         <div className="w-full lg:w-1/2 bg-gray-100 p-4 rounded-md shadow-md">
            <ResumeForm handleFormChange={handleFormChange} />
         </div>

         {/* Preview Section */}
         <div className="w-full lg:w-1/2 bg-gray-50 p-4 rounded-md shadow-md">
            <ResumePreview formData={formData} />
         </div>
      </div>
   );
};

export default ResumeBuilder;
