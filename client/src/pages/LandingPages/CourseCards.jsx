
import { courses } from "../../data";
const CourseCards = () => {

   return (
      <div id="courses" className="py-12 px-6">
         <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8 dark:text-white">
            Mock Tests
         </h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
               <div
                  key={index}
                  className="dark:bg-[#020817] bg-white border-b dark:border-b-gray-800g-slate-50 border-gray-100 border-2 p-6 rounded-lg shadow-lg hover:shadow-lg transition duration-300"
               >
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 dark:text-white">{course.name}</h3>
                  <p className="text-gray-500">{course.description}</p>
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
