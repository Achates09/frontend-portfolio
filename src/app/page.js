import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Experience from '@/components/sections/Experience';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';

// 포트폴리오 메인 페이지를 섹션 단위로 조립하는 역할을 합니다.
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
