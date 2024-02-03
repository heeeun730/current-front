import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Ci from './img/ci.png';
import PcRoom from './img/pc-room.png';
import Banner from './img/slide.png';
import Thumb001 from './img/thumb001.jpeg';
import Thumb002 from './img/thumb002.png';

const menuNames = [
  { id: 0, name: '새소식' },
  { id: 1, name: '게임소개' },
  { id: 2, name: '커뮤니티' },
  { id: 3, name: '랭킹' },
  { id: 4, name: '고객지원' },
];
const listItems = menuNames.map((menu) => (
  <li
    key={menu.id}
    className="w-[132px] text-center text-[16px] font-[600] leading-[40px]"
  >
    <NavLink to="/">{menu.name}</NavLink>
  </li>
));

export default function Subpage() {
  return (
    <div className="flex flex-col items-center">
      <header className="max-w-[1440px] w-[1280px] flex justify-between items-center h-[80px]">
        <Link to="/">
          <img src={Ci} alt="테일즈런너 홈 바로가기" className="h-[40px]" />
        </Link>
        <nav>
          <ul className="flex h-[40px] items-center">{listItems}</ul>
        </nav>
        <Link to="/">
          <img src={PcRoom} alt="PC방 바로가기" className="h-[30px]" />
        </Link>
      </header>
      <div className="h-[400px] bg-[#4672e4]">
        <img src={Banner} alt="slide" className="object-cover h-[400px]" />
      </div>
      <div className="w-full h-[56px] bg-[#101828]"></div>
      <main className="min-w-[1280px]">
        <div className="flex">
          <div className="w-[280px]">
            <Link to="/">
              <img
                src={Thumb001}
                alt="[발표] I HATE X-MAS 댓글 이벤트 당첨자 안내"
                className="object-cover w-full h-[158px]"
              />
              <div className="border-solid border border-[#eaecf0] p-[16px] min-h-[76px]">
                <h5 className="text-[14px ]text-[#344054] font-[500] leading-[21px]">
                  [발표] I HATE X-MAS 댓글 이벤트 당첨자 안내
                </h5>
              </div>
            </Link>
          </div>
          <div className="w-[280px]">
            <Link to="/">
              <img
                src={Thumb002}
                alt="[웹툰] 데저트 킹덤 1화 바로가기"
                className="object-cover w-full h-[158px]"
              />
              <div className="border-solid border border-[#eaecf0] p-[16px] min-h-[76px]">
                <h5 className="text-[14px ]text-[#344054] font-[500] leading-[21px]">
                  [웹툰] 데저트 킹덤 1화 바로가기
                </h5>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
