import LandingPage from '@/pages/LandingPages/LandingPage'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <LandingPage />
      <div className='flex-1 mt-16'>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout