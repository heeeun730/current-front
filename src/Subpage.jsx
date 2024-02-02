import React from 'react';
import './css/subpage.scss';

export default function Subpage() {
  return (
    <div className="sub-page flex">
      <header>
        <div className="gnb">
          <a href="/" className="gnb-ci">
            <span class="blind">테일즈런너 홈 바로가기</span>
          </a>
          <nav>
            <ul>
              <li>새소식</li>
              <li>게임소개</li>
              <li>커뮤니티</li>
              <li>랭킹</li>
              <li>고객지원</li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div></div>
      </main>
    </div>
  );
}
