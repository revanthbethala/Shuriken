import { useState } from "react";
import ResumeForm from "./ResumeForm"; // Assuming this is your form component
import ResumePreview from "./ResumePreview"; // Assuming this is your preview component
import Navbar from "@/components/Navbar";

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

   const handleFormChange = (updatedData) => {
      setFormData(updatedData);
   };

   return (
      <>
         <Navbar />
         <div className="grid lg:grid-cols-2 py-20">
            <ResumeForm handleFormChange={handleFormChange} />
            <div>

               <ResumePreview formData={formData} />
            </div>
         </div>
      </>
   );
};

export default ResumeBuilder;
