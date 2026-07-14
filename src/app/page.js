import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import ScrollReveal from '@/components/common/ScrollReveal';
import ScrollToTop from '@/components/common/ScrollToTop';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Education from '@/components/sections/Education';
import Experience from '@/components/sections/Experience';
import Hero from '@/components/sections/Hero';
import Skills from '@/components/sections/Skills';
import { portfolioData } from '@/data/portfolio';

// 포트폴리오 데이터는 로컬 정적 파일이므로 빌드 시 HTML로 미리 생성합니다.
// 요청별 서버 실행을 없애 무료 정적 호스팅에서도 동일한 화면과 기능을 제공할 수 있습니다.
export const dynamic = 'force-static';

// 포트폴리오 메인 페이지를 섹션 단위로 조립하는 역할을 합니다.
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* direction 값을 바꾸면 각 섹션이 들어오는 방향을 쉽게 조정할 수 있습니다.
            예: 전체를 up으로 통일하면 더 단정하고, left/right를 섞으면 더 리듬감이 생깁니다. */}
        <ScrollReveal direction="up">
          <Hero data={portfolioData.hero} />
        </ScrollReveal>
        <ScrollReveal direction="up">
          <About data={portfolioData.about} />
        </ScrollReveal>
        {/* background는 ScrollReveal의 바깥 영역에 적용합니다.
            그래야 내부 콘텐츠만 슬라이드되고, 섹션 구분 배경은 제자리에서 컨텍스트 영역과 맞게 유지됩니다. */}
        <ScrollReveal direction="up" background="subtle">
          <Experience items={portfolioData.experiences} />
        </ScrollReveal>
        <ScrollReveal direction="up">
          <Skills groups={portfolioData.skills} />
        </ScrollReveal>
        <ScrollReveal direction="up" background="subtle">
          <Education items={portfolioData.education} />
        </ScrollReveal>
        {/* Contact는 패널 바깥 여백이 넓어서 body 그라데이션이 비치면 좌측 하단이 밝게 튈 수 있습니다.
            base 배경으로 섹션 전체를 덮어 주변 배경과 안정적으로 이어지게 합니다. */}
        <ScrollReveal direction="up" background="base">
          <Contact data={portfolioData.contact} />
        </ScrollReveal>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
