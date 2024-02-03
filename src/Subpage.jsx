import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Subpage() {
  return (
    <div className="max-w-[1440px] m-auto">
      <header className="w-full flex justify-between items-center h-[80px]">
        <Link to="/">
          <img src="./img/ci.png" alt="테일즈런너 홈 바로가기" />
        </Link>
        <nav className="w-[660px]">
          <ul className="flex justify-around h-[40px] items-center text-[16px]">
            <li>
              <NavLink to="/">새소식</NavLink>
            </li>
            <li>
              <NavLink to="/">게임소개</NavLink>
            </li>
            <li>
              <NavLink to="/">커뮤니티</NavLink>
            </li>
            <li>
              <NavLink to="/">랭킹</NavLink>
            </li>
            <li>
              <NavLink to="/">고객지원</NavLink>
            </li>
          </ul>
        </nav>
        <Link to="/">
          <img src="./img/pc-room.png" alt="PC방 바로가기" />
        </Link>
      </header>
      <div className="h-[400px] bg-[#4672e4]">
        <img src="./img/slide.png" alt="slide" />
      </div>
      <main>
        <div></div>
      </main>
    </div>
  );
}
