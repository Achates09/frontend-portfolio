'use client';

import styled from 'styled-components';
import Container from './Container';
import { email, githubUrl } from '@/data/portfolio';

// 사이트 하단의 저작권 문구와 외부 링크 영역입니다.
const Wrapper = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  padding: 30px 0;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Inner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 16px;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <p>{`© ${new Date().getFullYear()} Wi Seokryang. Built with Next.js.`}</p>
        <Links>
          {/* <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={`mailto:${email}`}>Email</a> */}
        </Links>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
