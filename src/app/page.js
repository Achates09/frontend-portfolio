import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Experience from '@/components/sections/Experience';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import StoreProvider from '@/redux/StoreProvider';
import { loadPortfolioStateOnServer } from '@/redux/serverPortfolioStore';

// App Router의 page.js는 기본적으로 서버 컴포넌트입니다.
// 그래서 Pages Router의 getServerSideProps 없이도 async 함수 안에서 서버 데이터를 가져올 수 있습니다.
// force-dynamic은 이 페이지를 빌드 시 정적으로 고정하지 않고, 요청마다 서버에서 렌더링하게 합니다.
// 정적 포트폴리오로 바꾸려면 'force-static'을 사용하세요.
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// 포트폴리오 메인 페이지를 섹션 단위로 조립하는 역할을 합니다.
export default async function Home() {
  const preloadedState = await loadPortfolioStateOnServer();
  const portfolio = preloadedState.portfolio.data;

  return (
    <StoreProvider preloadedState={preloadedState}>
      <Navbar />
      <main>
        <Hero data={portfolio.hero} />
        <About data={portfolio.about} />
        <Experience items={portfolio.experiences} />
        <Skills groups={portfolio.skills} />
        <Projects items={portfolio.projects} />
        <Contact data={portfolio.contact} />
      </main>
      <Footer />
    </StoreProvider>
  );
}
