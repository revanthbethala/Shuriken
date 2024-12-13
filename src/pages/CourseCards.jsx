
const CourseCards = () => {
   const courses = [
      { name: "Web Development", description: "Learn how to build websites using modern technologies like HTML, CSS, JavaScript, and React." },
      { name: "Data Science", description: "Dive into data analysis, visualization, and machine learning with Python and tools like Pandas, Matplotlib, and Scikit-Learn." },
      { name: "Machine Learning", description: "Master the fundamentals of machine learning and build intelligent models using Python and popular libraries like TensorFlow." },
      { name: "Artificial Intelligence", description: "Explore the world of AI, from basic algorithms to advanced neural networks and natural language processing." },
      { name: "Cloud Computing", description: "Understand cloud platforms like AWS, Azure, and Google Cloud, and how to deploy scalable applications in the cloud." },
      { name: "UI/UX Design", description: "Learn the principles of UI/UX design and how to create user-centered designs that enhance the user experience." },
   ];

   return (
      <div id="courses" className="py-12 px-6">
         <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Mock Tests
         </h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
               <div
                  key={index}
                  className="bg-slate-50 border-gray-100 border-2 p-6 rounded-lg shadow-lg hover:shadow-lg transition duration-300"
               >
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{course.name}</h3>
                  <p className="text-gray-600">{course.description}</p>
                  <button className="mt-4 px-6 py-2 bg-blue-500 font-semibold text-white rounded-lg hover:bg-blue-600">
                     Attempt Test
                  </button>
               </div>
            ))}
         </div>
      </div>
   );
};

export default CourseCards;
