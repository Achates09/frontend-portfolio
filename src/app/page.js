import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import ScrollReveal from '@/components/common/ScrollReveal';
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
        {/* direction 값을 바꾸면 각 섹션이 들어오는 방향을 쉽게 조정할 수 있습니다.
            예: 전체를 up으로 통일하면 더 단정하고, left/right를 섞으면 더 리듬감이 생깁니다. */}
        <ScrollReveal direction="up">
          <Hero data={portfolio.hero} />
        </ScrollReveal>
        <ScrollReveal direction="up">
          <About data={portfolio.about} />
        </ScrollReveal>
        {/* background는 ScrollReveal의 바깥 영역에 적용합니다.
            그래야 내부 콘텐츠만 슬라이드되고, 섹션 구분 배경은 제자리에서 컨텍스트 영역과 맞게 유지됩니다. */}
        <ScrollReveal direction="up" background="subtle">
          <Experience items={portfolio.experiences} />
        </ScrollReveal>
        <ScrollReveal direction="up">
          <Skills groups={portfolio.skills} />
        </ScrollReveal>
        <ScrollReveal direction="up" background="subtle">
          <Projects items={portfolio.projects} />
        </ScrollReveal>
        {/* Contact는 패널 바깥 여백이 넓어서 body 그라데이션이 비치면 좌측 하단이 밝게 튈 수 있습니다.
            base 배경으로 섹션 전체를 덮어 주변 배경과 안정적으로 이어지게 합니다. */}
        <ScrollReveal direction="up" background="base">
          <Contact data={portfolio.contact} />
        </ScrollReveal>
      </main>
      <Footer />
    </StoreProvider>
  );
}
