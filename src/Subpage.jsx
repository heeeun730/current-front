import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Ci from './img/ci.png';
import PcRoom from './img/pc-room.png';
import Banner from './img/slide.png';
import Thumb001 from './img/thumb001.jpeg';
import Thumb002 from './img/thumb002.png';
import Thumb003 from './img/thumb003.jpeg';
import Thumb004 from './img/thumb004.png';
import LoginBg from './img/login-bg.png';
import NoticeBanner from './img/notice-banner.png';
import IcoAdd from './img/icon/ico-add-24-line-b.svg';
import Update from './img/update.png';
import Guide from './img/guide.png';

const noticeInfo = [
  {
    id: 1,
    category: '[안내]',
    name: '불건전 커뮤니티 이용자 단속 현황 안내',
    new: true,
  },
  {
    id: 2,
    category: '[안내]',
    name: '불건전 커뮤니티 이용자 단속 현황 안내',
    new: true,
  },
  {
    id: 3,
    category: '[안내]',
    name: '불건전 커뮤니티 이용자 단속 현황 안내',
  },
  {
    id: 4,
    category: '[안내]',
    name: '불건전 커뮤니티 이용자 단속 현황 안내',
  },
];

const noticeItems = noticeInfo.map((notice) => (
  <li key={notice.id} className="text-[16px] font-[400] leading-[19px]">
    <NavLink to="/">
      <span className="flex align-center gap-x-[4px]">
        {notice.category}
        <span className="text-ellipsis overflow-hidden whitespace-nowrap">
          {notice.name}
        </span>
        {notice.new ? (
          <span className="bg-[red] px-[4px] bg-[#E9473F] text-[#ffffff] text-[10px] rounded-[4px]">
            NEW
          </span>
        ) : null}
      </span>
    </NavLink>
  </li>
));

const menuNames = [
  { id: 1, name: '새소식' },
  { id: 2, name: '게임소개' },
  { id: 3, name: '커뮤니티' },
  { id: 4, name: '랭킹' },
  { id: 5, name: '고객지원' },
];
const listItems = menuNames.map((menu) => (
  <li
    key={menu.id}
    className="w-[132px] text-center text-[16px] font-[600] leading-[40px]"
  >
    <NavLink to="/">{menu.name}</NavLink>
  </li>
));

const thumbsNewsInfo = [
  {
    id: 1,
    image: Thumb001,
    title:
      '[발표] I HATE X-MAS 댓글 이벤트 당첨자 안내 텍스트 말줄임 테스트입니다. 정말 길게넣기 해봅시다.',
  },
  { id: 2, image: Thumb002, title: '[웹툰] 데저트 킹덤 1화 바로가기' },
  {
    id: 3,
    image: Thumb003,
    title: '2023 겨울 채널 ❄데저트 킹덤❄을 소개합니다! : 테일즈런너',
  },
  {
    id: 4,
    image: Thumb004,
    title:
      '자유를 사랑한 사막의 왕자, 신규 캐릭터 시드 모션 미리보기 : 테일즈런너',
  },
];

const thumbsNews = thumbsNewsInfo.map((news) => (
  <Link to="/" key={news.id}>
    <div className="w-[280px]">
      <img
        src={news.image}
        alt={news.title}
        className="object-cover w-full h-[158px]"
      />
      <div className="border-solid border border-[#eaecf0] p-[16px] min-h-[76px]">
        <p
          title={news.title}
          className="text-[14px] text-[#344054] font-[500] leading-[21px] text-ellipsis overflow-hidden line-clamp-2"
        >
          {news.title}
        </p>
      </div>
    </div>
  </Link>
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
      <main className="min-w-[1280px] py-[48px] flex flex-col gap-y-[64px]">
        <div className="flex  gap-x-[32px]">
          <div className="w-[280px] h-[240px] flex flex-col justify-between">
            <div className="flex justify-between">
              <h3 className="text-[21px] text-[#344054] font-[600] leading-[25px]">
                공지사항
              </h3>
              <Link to="/">
                <img src={IcoAdd} alt="더보기" />
              </Link>
            </div>
            <div>
              <ul className="flex flex-col gap-y-[16px]">{noticeItems}</ul>
            </div>
            <div className="flex gap-x-[4px] h-[52px] text-[16px] font-[600] leading-[24px] text-[#7A5AF8]">
              <Link
                to="/"
                className="flex justify-center gap-x-[4px] items-center basis-1/2 bg-[#EBE9FE]"
              >
                <img src={Guide} alt="" />
                테런 가이드
              </Link>
              <Link
                to="/"
                className="flex justify-center gap-x-[4px] items-center basis-1/2 bg-[#E3FBCC]"
              >
                <img src={Update} alt="" />
                업데이트 소식
              </Link>
            </div>
          </div>
          <div>
            <img src={NoticeBanner} alt="" />
          </div>
          <div>
            <div
              className="bg-no-repeat w-[280px] h-[128px] text-[#ffffff] font-[600] tracking-[-1px] flex flex-col items-center justify-center gap-y-[12px]"
              style={{ backgroundImage: `url(${LoginBg})` }}
            >
              <Link to="/" className="text-[36px]">
                게임시작
              </Link>
              <ul className="w-[146px] h-[18px] flex items-center">
                <li className="border-r border-solid border-[#ffffff] basis-1/2">
                  <Link to="/">다운로드</Link>
                </li>
                <li className="basis-1/2 text-right">
                  <Link to="/">문제해결</Link>
                </li>
              </ul>
            </div>
            <div className="px-[13px] h-[112px] flex flex-col justify-center items-center gap-y-[12px] border border-solid border-[#EAECF0]">
              <Link
                to="/"
                className="block w-[173px] h-[44px] bg-[#D84425] rounded-[8px] text-[#ffffff] text-[16px] font-[600] leading-[44px] text-center"
              >
                라온 ID 로그인
              </Link>
              <ul className="w-[240px] flex text-[12px] text-[#98A2B3]">
                <li className="basis-1/2 font-[600]">
                  <Link to="/">회원가입</Link>
                </li>
                <li className="basis-1/2 flex gap-x-[16px]">
                  <Link to="/">ID 찾기</Link>
                  <Link to="/">비밀번호 찾기</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-[16px]">
          <h3 className="text-[18px] text-[#344054] font-[500] leading-[27px]">
            삐에로 소식
          </h3>
          <div className="flex gap-[32px]">{thumbsNews}</div>
        </div>
      </main>
    </div>
  );
}
