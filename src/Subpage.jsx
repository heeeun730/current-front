import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Ci from './img/ci.png';
import PcRoom from './img/pc-room.png';
import Banner from './img/slide.png';

const menuNames = ['새소식', '게임소개', '커뮤니티', '랭킹', '고객지원'];
const listItems = menuNames.map((name) => (
  <li className="w-[132px] text-center text-[16px] font-[600] leading-[40px]">
    <NavLink to="/">{name}</NavLink>
  </li>
));

export default function Subpage() {
  return (
    <div className="m-auto">
      <header className="max-w-[1440px] w-[1280px] m-auto flex justify-between items-center h-[80px]">
        <Link to="/">
          <img src={Ci} alt="테일즈런너 홈 바로가기" className="h-[40px]" />
        </Link>
        <nav>
          <ul className="flex justify-around h-[40px] items-center">
            {listItems}
          </ul>
        </nav>
        <Link to="/">
          <img src={PcRoom} alt="PC방 바로가기" className="h-[30px]" />
        </Link>
      </header>
      <div className="h-[400px] bg-[#4672e4]">
        <img src={Banner} alt="slide" className="object-cover h-[400px]" />
      </div>
      <div className="h-[56px] bg-[#101828]"></div>
      <main className="max-w-[1440px]">
        <div></div>
      </main>
    </div>
  );
}
