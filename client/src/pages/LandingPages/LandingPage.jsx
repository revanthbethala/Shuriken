import Navbar from '@/components/Navbar'
import { lazy, Suspense } from 'react'

// const Header = lazy(() => import("./Header"))
const CourseCards = lazy(() => import("./CourseCards"))
const Hero = lazy(() => import("./Hero"))
const Connections = lazy(() => import("./Connections"))
const HowItWorks = lazy(() => import("./HowItWorks"))
const About = lazy(() => import("./About"))
const Footer = lazy(() => import("./Footer"))
function LandingPage() {
   return (
      <Suspense fallback={<div>Loading...</div>}>
         <div>
            <Navbar />
            <Hero />
            <CourseCards />
            <Connections />
            <HowItWorks />
            <About />
            <Footer />
         </div>
      </Suspense >
   )
}

export default LandingPage
