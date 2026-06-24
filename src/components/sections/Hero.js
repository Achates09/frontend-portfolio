'use client';

import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: 100vh;

  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 72px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 42px;
  }
`;

const Description = styled.p`
  margin-top: 20px;

  font-size: 24px;
  color: #8b949e;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <Title>
        안녕하세요.
        <br />
        프론트엔드 개발자 홍길동입니다.
      </Title>

      <Description>React · Next.js · Redux-Saga</Description>
    </Wrapper>
  );
};

export default Hero;
