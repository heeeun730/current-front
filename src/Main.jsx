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
        <header className='fixed w-full flex justify-between px-6 py-2 text-base'>
          <NavLink className='font-black'>ATREE</NavLink>
          <nav className='uppercase flex gap-2 leading-7'>
            <NavLink className='px-2 hover:bg-[#000AFF] hover:rounded-md hover:text-[#f5f2ef]'>
              About
            </NavLink>
            <NavLink className='px-2 hover:bg-[#000AFF] hover:rounded-md hover:text-[#f5f2ef]'>
              Work
            </NavLink>
            <NavLink className='px-2 hover:bg-[#000AFF] hover:rounded-md hover:text-[#f5f2ef]'>
              Contact
            </NavLink>
          </nav>
        </header>
        <div
          data-aos='fade-right'
          className='fixed flex overflow-hidden top-[100px]'
        >
          <div className='animate-marquee whitespace-nowrap text-[150px] font-[100] -tracking-wide leading-none p-10'>
            Atree Company
            <span className='text-[#000AFF]'>*</span>
          </div>
        </div>
        <div
          data-aos='fade-right'
          className='fixed top-[400px] flex overflow-hidden'
        >
          <div className='animate-marquee2 whitespace-nowrap text-[500px] font-[100] -tracking-wide leading-none'>
            WORK
            <span className='text-[#000AFF]'>*</span>
          </div>
        </div>
        <div className='grid grid-cols-4 gap-y-[200px] px-10 py-[400px]'>
          <div
            data-aos='fade-up'
            className='col-start-2 col-span-2 self-center h-[550px] flex flex-col gap-1 text-sm'
          >
            <div>@2024</div>
            <div className='w-full h-full bg-[url(./work-thumb-01.png)] bg-cover bg-center flex items-center justify-center bg-no-repeat'></div>
            <div className='uppercase self-end'>
              talesrunner official website
            </div>
          </div>
          <div
            data-aos='fade-up'
            className='col-start-3 col-span-1 self-end h-[300px] flex flex-col gap-1 text-sm'
          >
            <div>@2024</div>
            <div className='w-full h-full bg-[url(./work-thumb-02.png)] bg-center flex items-center justify-center'></div>
            <div className='uppercase self-end'>SAVVY website</div>
          </div>
          <div
            data-aos='fade-up'
            className='col-start-2 col-span-1 self-center h-[400px] flex flex-col gap-1 text-sm'
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
    // <div className='main'>
    //   <BrowserView>
    //     <div className='animated-title'>
    //       <div className='track'>
    //         <div>
    //           we are create for your the
    //           current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we are create for your
    //           the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; we are create for
    //           your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we are create
    //           for your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; we are
    //           create for your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we
    //           are create for your the
    //           current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; we are create for your
    //           the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we are create for
    //           your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; we are create
    //           for your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we are
    //           create for your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; we
    //           are create for your the
    //           current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we are create for your
    //           the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; we are create for
    //           your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we are create
    //           for your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; we are
    //           create for your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we
    //           are create for your the
    //           current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //         </div>
    //       </div>
    //     </div>
    //     <header className='header-wrap'>TCL</header>
    //     <div className='container'>
    //       <div className='copyright'>
    //         TCL
    //         <p>
    //           We are create <br />
    //           for your the current
    //           <br /> <br />Ⓒ 2024 The Current Lab
    //         </p>
    //       </div>
    //       <div className='content'>
    //         <section className='sec2'>
    //           <ul>
    //             <li
    //               data-aos='fade-up'
    //               data-aos-duration='1300'
    //               data-aos-offset='300'
    //               data-aos-once='true'
    //               className='aos-init aos-animate'
    //             >
    //               <dl>
    //                 <dt>BX</dt>
    //                 <dd className='txt0'>
    //                   Brand Strategy
    //                   <br />
    //                   Naming
    //                   <br />
    //                   Application Design
    //                   <br />
    //                   Signage Design
    //                   <br />
    //                   Marketing Design
    //                 </dd>
    //                 <dd className='txt1'>
    //                   브랜드 전략 컨설팅
    //                   <br />
    //                   브랜드 네이밍
    //                   <br />
    //                   온 / 오프라인 어플리케이션
    //                   <br />
    //                   사이니지 디자인
    //                   <br />
    //                   SNS 마케팅 디자인
    //                 </dd>
    //               </dl>
    //             </li>
    //             <li
    //               data-aos='fade-up'
    //               data-aos-duration='1300'
    //               data-aos-offset='300'
    //               data-aos-once='true'
    //               className='aos-init aos-animate'
    //             >
    //               <dl>
    //                 <dt>UX</dt>
    //                 <dd className='txt0'>
    //                   UX Architecture
    //                   <br />
    //                   Web Design
    //                   <br />
    //                   Mobile App Design
    //                   <br />
    //                   GUI Design
    //                   <br />
    //                   UX Accelerating
    //                 </dd>
    //                 <dd className='txt1'>
    //                   사용자 경험 설계 및 컨설팅
    //                   <br />
    //                   웹 사이트 디자인
    //                   <br />
    //                   모바일 앱 디자인
    //                   <br />
    //                   GUI 디자인
    //                   <br />
    //                   스타트업 UX 엑셀 레이팅
    //                 </dd>
    //               </dl>
    //             </li>
    //           </ul>
    //         </section>
    //         <section
    //           className='sec3 aos-init aos-animate'
    //           data-aos='fade-up'
    //           data-aos-duration='1300'
    //           data-aos-once='true'
    //         >
    //           <p>
    //             막연한 고민보다 한 번의 연락이 기대 이상의 <br />
    //             결과를 만들 수 있습니다.
    //           </p>
    //         </section>
    //         <section
    //           className='sec4 aos-init aos-animate'
    //           data-aos='fade-up'
    //           data-aos-duration='1300'
    //           data-aos-once='true'
    //         >
    //           <p>thecurrentkr@gmail.com</p>
    //         </section>
    //       </div>
    //     </div>
    //   </BrowserView>
    //   <MobileView>
    //     <div className='animated-title'>
    //       <div className='track'>
    //         <div>
    //           we are create for your the
    //           current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we are create for your
    //           the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; we are create for
    //           your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we are create
    //           for your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; we are
    //           create for your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we
    //           are create for your the
    //           current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; we are create for your
    //           the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we are create for
    //           your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; we are create
    //           for your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we are
    //           create for your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; we
    //           are create for your the
    //           current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we are create for your
    //           the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; we are create for
    //           your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we are create
    //           for your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; we are
    //           create for your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we
    //           are create for your the
    //           current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //         </div>
    //       </div>
    //     </div>
    //     <header>
    //       <img
    //         src={CurrentLogo}
    //         className='animate__animated animate__pulse'
    //         alt='the current'
    //       />
    //     </header>
    //     <div className='container'>
    //       <div className='copyright'>
    //         <p>
    //           We are create <br />
    //           for your the current
    //           <br /> <br />Ⓒ 2024 The Current Lab
    //         </p>
    //       </div>
    //       <div className='content'>
    //         <section className='sec2'>
    //           <ul>
    //             <li
    //               data-aos='fade-up'
    //               data-aos-duration='1300'
    //               data-aos-offset='300'
    //               data-aos-once='true'
    //               className='aos-init aos-animate'
    //             >
    //               <dl>
    //                 <dt>BX</dt>
    //                 <dd className='txt0'>
    //                   Brand Strategy
    //                   <br />
    //                   Naming
    //                   <br />
    //                   Application Design
    //                   <br />
    //                   Signage Design
    //                   <br />
    //                   Marketing Design
    //                 </dd>
    //                 <dd className='txt1'>
    //                   브랜드 전략 컨설팅
    //                   <br />
    //                   브랜드 네이밍
    //                   <br />
    //                   온 / 오프라인 어플리케이션
    //                   <br />
    //                   사이니지 디자인
    //                   <br />
    //                   SNS 마케팅 디자인
    //                 </dd>
    //               </dl>
    //             </li>
    //             <li
    //               data-aos='fade-up'
    //               data-aos-duration='1300'
    //               data-aos-offset='300'
    //               data-aos-once='true'
    //               className='aos-init aos-animate'
    //             >
    //               <dl>
    //                 <dt>UX</dt>
    //                 <dd className='txt0'>
    //                   UX Architecture
    //                   <br />
    //                   Web Design
    //                   <br />
    //                   Mobile App Design
    //                   <br />
    //                   GUI Design
    //                   <br />
    //                   UX Accelerating
    //                 </dd>
    //                 <dd className='txt1'>
    //                   사용자 경험 설계 및 컨설팅
    //                   <br />
    //                   웹 사이트 디자인
    //                   <br />
    //                   모바일 앱 디자인
    //                   <br />
    //                   GUI 디자인
    //                   <br />
    //                   스타트업 UX 엑셀 레이팅
    //                 </dd>
    //               </dl>
    //             </li>
    //           </ul>
    //         </section>
    //         <section
    //           className='sec3 aos-init aos-animate'
    //           data-aos='fade-up'
    //           data-aos-duration='1300'
    //           data-aos-once='true'
    //         >
    //           <p className=''>
    //             막연한 고민보다 한 번의 연락이 기대 이상의 <br />
    //             결과를 만들 수 있습니다.
    //           </p>
    //         </section>
    //         <section
    //           className='sec4 aos-init aos-animate'
    //           data-aos='fade-up'
    //           data-aos-duration='1300'
    //           data-aos-once='true'
    //         >
    //           <p className=''>thecurrentkr@gmail.com</p>
    //         </section>
    //       </div>
    //     </div>
    //   </MobileView>
    // </div>
  )
}

export default Main
