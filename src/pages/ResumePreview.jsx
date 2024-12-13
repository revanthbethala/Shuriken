/* eslint-disable react/prop-types */

const ResumePreview = ({ formData }) => {
   return (
      <div className="p-6 border rounded-lg space-y-4">
         <h3 className="text-xl font-bold">{formData.name}</h3>
         <p>{formData.email} | {formData.phone}</p>

         <div>
            <h4 className="font-semibold">Education</h4>
            <p>{formData.education} ({formData.educationDuration})</p>
            <p>Percentage: {formData.educationPercentage}</p>
         </div>

         <div>
            <h4 className="font-semibold">Experience</h4>
            <p>{formData.experienceRole} - {formData.experienceDuration}</p>
            <p>{formData.experience}</p>
         </div>

         <div>
            <h4 className="font-semibold">Achievements</h4>
            <p>{formData.achievements}</p>
         </div>

         <div>
            <h4 className="font-semibold">Extra-Curricular Activities</h4>
            <p>{formData.extraCurricular}</p>
         </div>

         <div>
            <h4 className="font-semibold">Projects</h4>
            <p>{formData.projects}</p>
         </div>

         <div>
            <h4 className="font-semibold">Links</h4>
            <p>GitHub: <a href={formData.github} target="_blank" rel="noopener noreferrer">{formData.github}</a></p>
            <p>LinkedIn: <a href={formData.linkedin} target="_blank" rel="noopener noreferrer">{formData.linkedin}</a></p>
            <p>Portfolio: <a href={formData.portfolio} target="_blank" rel="noopener noreferrer">{formData.portfolio}</a></p>
         </div>
      </div>
   );
};

export default ResumePreview;
