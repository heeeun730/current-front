import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { NavLink } from 'react-router-dom'
// import { MobileView, BrowserView } from 'react-device-detect'
const Main = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  })
  return (
    <>
      <div className='bg-black text-[#f5f2ef] selection:bg-[#000AFF]'>
        <header className='w-full flex justify-between px-6 py-6 text-3xl sticky top-0 bg-black z-10'>
          <NavLink className='font-black'>TC</NavLink>
          <nav className='uppercase flex gap-2 leading-7'>
            {/* <NavLink className='px-2 hover:bg-[#000AFF] hover:rounded-md hover:text-[#f5f2ef]'>
              About
            </NavLink> */}
            {/* <NavLink className='px-2 hover:bg-[#000AFF] hover:rounded-md hover:text-[#f5f2ef]'>
              Work
            </NavLink> */}
            {/* <NavLink className='px-2 hover:bg-[#000AFF] hover:rounded-md hover:text-[#f5f2ef]'>
              Contact
            </NavLink> */}
          </nav>
        </header>
        <div
          data-aos='fade-right'
          className='fixed top-[400px] flex overflow-hidden'
        >
          <div className='animate-marquee2 whitespace-nowrap text-[500px] font-[100] -tracking-wide leading-none'>
            WORK
          </div>
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-y-20 px-10 py-20'>
          <div data-aos='fade-right' className='grid-cols-2'>
            <div className='whitespace-nowrap text-xl -tracking-wide leading-none uppercase mb-2'>
              the current
              <span className='text-[#000AFF]'>*</span>
            </div>
            <span className='rounded-lg bg-[#000AFF] text-white px-2 py-1 text-lg'>
              thecurrentkr@gmail.com
            </span>
          </div>
          <div
            data-aos='fade-up'
            className='grid-cols-1 md:col-start-2 col-start-1 self-center h-[550px] flex flex-col gap-1 text-sm'
          >
            <div>@2025</div>
            <div className='w-full h-full bg-[url(./work-thumb-04.png)] bg-cover bg-center flex items-center justify-center bg-no-repeat'></div>
            <div className='uppercase self-end'>
              HO internal medicine clinic website
            </div>
          </div>
          <div
            data-aos='fade-up'
            className='grid-cols-1 md:col-start-2 col-start-1  self-center h-[550px] flex flex-col gap-1 text-sm'
          >
            <div>@2025</div>
            <div className='w-full h-full bg-[url(./work-thumb-05.png)] bg-cover bg-center flex items-center justify-center bg-no-repeat'></div>
            <div className='uppercase self-end'>gemhubplay portal website</div>
          </div>
          <div
            data-aos='fade-up'
            className='grid-cols-1 md:col-start-2 col-start-1  self-center h-[550px] flex flex-col gap-1 text-sm'
          >
            <div>@2024</div>
            <div className='w-full h-full bg-[url(./work-thumb-01.png)] bg-cover bg-center flex items-center justify-center bg-no-repeat'></div>
            <div className='uppercase self-end'>
              talesrunner official website
            </div>
          </div>
          <div
            data-aos='fade-up'
            className='grid-cols-1 md:col-start-2 col-start-1 self-end h-[300px] flex flex-col gap-1 text-sm'
          >
            <div>@2024</div>
            <div className='w-full h-full bg-[url(./work-thumb-02.png)] bg-center flex items-center justify-center'></div>
            <div className='uppercase self-end'>SAVVY portal website</div>
          </div>
          <div
            data-aos='fade-up'
            className='grid-cols-1 md:col-start-2 col-start-1 self-center h-[400px] flex flex-col gap-1 text-sm'
          >
            <div>@2022</div>
            <div className='w-full h-full bg-[url(./work-thumb-03.png)] bg-cover bg-center flex items-center justify-center bg-no-repeat'></div>
            <div className='uppercase self-end'>
              SIHEUNG DREAM HYANGYOU
              <br />
              colorectal breast surgery
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
