import React, { useEffect } from 'react';
import AOS from 'aos';
import { MobileView, BrowserView } from 'react-device-detect';
import CurrentLogo from './current.png';
const Main = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <div className="main">
      <BrowserView>
        <div className="animated-title">
          <div className="track">
            <div>
              we are create for your the
              current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we are create for your
              the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; we are create for
              your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we are create
              for your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; we are
              create for your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we
              are create for your the
              current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; we are create for your
              the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we are create for
              your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; we are create
              for your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we are
              create for your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; we
              are create for your the
              current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we are create for your
              the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; we are create for
              your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we are create
              for your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; we are
              create for your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we
              are create for your the
              current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>
        <header>
          <img
            src={CurrentLogo}
            className="animate__animated animate__pulse"
            alt="the current"
          />
        </header>
        <div className="container">
          <div className="copyright">
            <p>
              We are create <br />
              for your the current
              <br /> <br />Ⓒ 2024 The Current Lab
            </p>
          </div>
          <div className="content">
            <section className="sec2">
              <ul>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1300"
                  data-aos-offset="300"
                  data-aos-once="true"
                  className="aos-init aos-animate"
                >
                  <dl>
                    <dt>BX</dt>
                    <dd className="txt0">
                      Brand Strategy
                      <br />
                      Naming
                      <br />
                      Application Design
                      <br />
                      Signage Design
                      <br />
                      Marketing Design
                    </dd>
                    <dd className="txt1">
                      브랜드 전략 컨설팅
                      <br />
                      브랜드 네이밍
                      <br />
                      온 / 오프라인 어플리케이션
                      <br />
                      사이니지 디자인
                      <br />
                      SNS 마케팅 디자인
                    </dd>
                  </dl>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1300"
                  data-aos-offset="300"
                  data-aos-once="true"
                  className="aos-init aos-animate"
                >
                  <dl>
                    <dt>UX</dt>
                    <dd className="txt0">
                      UX Architecture
                      <br />
                      Web Design
                      <br />
                      Mobile App Design
                      <br />
                      GUI Design
                      <br />
                      UX Accelerating
                    </dd>
                    <dd className="txt1">
                      사용자 경험 설계 및 컨설팅
                      <br />
                      웹 사이트 디자인
                      <br />
                      모바일 앱 디자인
                      <br />
                      GUI 디자인
                      <br />
                      스타트업 UX 엑셀 레이팅
                    </dd>
                  </dl>
                </li>
              </ul>
            </section>
            <section
              className="sec3 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="1300"
              data-aos-once="true"
            >
              <p>
                막연한 고민보다 한 번의 연락이 기대 이상의 <br />
                결과를 만들 수 있습니다.
              </p>
            </section>
            <section
              className="sec4 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="1300"
              data-aos-once="true"
            >
              <p>thecurrentkr@gmail.com</p>
            </section>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div className="animated-title">
          <div className="track">
            <div>
              we are create for your the
              current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we are create for your
              the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; we are create for
              your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we are create
              for your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; we are
              create for your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we
              are create for your the
              current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; we are create for your
              the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we are create for
              your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; we are create
              for your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we are
              create for your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; we
              are create for your the
              current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we are create for your
              the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; we are create for
              your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we are create
              for your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; we are
              create for your the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we
              are create for your the
              current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>
        <header>
          <img
            src={CurrentLogo}
            className="animate__animated animate__pulse"
            alt="the current"
          />
        </header>
        <div className="container">
          <div className="copyright">
            <p>
              We are create <br />
              for your the current
              <br /> <br />Ⓒ 2024 The Current Lab
            </p>
          </div>
          <div className="content">
            <section className="sec2">
              <ul>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1300"
                  data-aos-offset="300"
                  data-aos-once="true"
                  className="aos-init aos-animate"
                >
                  <dl>
                    <dt>BX</dt>
                    <dd className="txt0">
                      Brand Strategy
                      <br />
                      Naming
                      <br />
                      Application Design
                      <br />
                      Signage Design
                      <br />
                      Marketing Design
                    </dd>
                    <dd className="txt1">
                      브랜드 전략 컨설팅
                      <br />
                      브랜드 네이밍
                      <br />
                      온 / 오프라인 어플리케이션
                      <br />
                      사이니지 디자인
                      <br />
                      SNS 마케팅 디자인
                    </dd>
                  </dl>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1300"
                  data-aos-offset="300"
                  data-aos-once="true"
                  className="aos-init aos-animate"
                >
                  <dl>
                    <dt>UX</dt>
                    <dd className="txt0">
                      UX Architecture
                      <br />
                      Web Design
                      <br />
                      Mobile App Design
                      <br />
                      GUI Design
                      <br />
                      UX Accelerating
                    </dd>
                    <dd className="txt1">
                      사용자 경험 설계 및 컨설팅
                      <br />
                      웹 사이트 디자인
                      <br />
                      모바일 앱 디자인
                      <br />
                      GUI 디자인
                      <br />
                      스타트업 UX 엑셀 레이팅
                    </dd>
                  </dl>
                </li>
              </ul>
            </section>
            <section
              className="sec3 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="1300"
              data-aos-once="true"
            >
              <p className="">
                막연한 고민보다 한 번의 연락이 기대 이상의 <br />
                결과를 만들 수 있습니다.
              </p>
            </section>
            <section
              className="sec4 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="1300"
              data-aos-once="true"
            >
              <p className="">thecurrentkr@gmail.com</p>
            </section>
          </div>
        </div>
      </MobileView>
    </div>
  );
};

export default Main;
