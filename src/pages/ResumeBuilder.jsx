import { useState } from 'react';
import { motion } from 'framer-motion';
import ResumeForm from './ResumeForm';

const ResumeBuilder = () => {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      skills: '',
      achievements: '',
      extraCurricular: '',
      projects: '',
      github: '',
      linkedin: '',
      portfolio: '',
      education: [{ degree: '', duration: '', percentage: '' }],
      experience: [{ role: '', duration: '', details: '' }]
   });

   const handleChange = (e, section, index) => {
      const { name, value } = e.target;
      const updatedSection = [...formData[section]];
      updatedSection[index] = { ...updatedSection[index], [name]: value };
      setFormData((prevData) => ({
         ...prevData,
         [section]: updatedSection
      }));
   };

   const addEducation = () => {
      setFormData((prevData) => ({
         ...prevData,
         education: [...prevData.education, { degree: '', duration: '', percentage: '' }]
      }));
   };

   const removeEducation = (index) => {
      const updatedEducation = formData.education.filter((_, i) => i !== index);
      setFormData((prevData) => ({
         ...prevData,
         education: updatedEducation
      }));
   };

   const addExperience = () => {
      setFormData((prevData) => ({
         ...prevData,
         experience: [...prevData.experience, { role: '', duration: '', details: '' }]
      }));
   };

   const removeExperience = (index) => {
      const updatedExperience = formData.experience.filter((_, i) => i !== index);
      setFormData((prevData) => ({
         ...prevData,
         experience: updatedExperience
      }));
   };

   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
         className="mx-auto p-6 bg-gray-50 shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6"
      >
         <div>
            <h1 className="text-3xl font-bold text-center mb-6">Resume Builder</h1>
            <ResumeForm
               formData={formData}
               handleChange={handleChange}
               addEducation={addEducation}
               removeEducation={removeEducation}
               addExperience={addExperience}
               removeExperience={removeExperience}
            />
         </div>
      </motion.div>
   );
};

export default ResumeBuilder;
