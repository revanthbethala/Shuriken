import Header from './Header'
import CourseCards from './CourseCards'
import Hero from './Hero'
import Connections from './Connections'
import HowItWorks from './HowItWorks'
import AboutMe from './About'
import Footer from './Footer'

function DashBoard() {
   return (
      <div>
         <Header />
         <Hero />
         <CourseCards />
         <Connections />
         <HowItWorks />
         <AboutMe />
         <Footer />
      </div>
   )
}

export default DashBoard