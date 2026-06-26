import styled from 'styled-components';

// 페이지 콘텐츠의 최대 너비와 좌우 여백을 통일하는 공통 레이아웃 컴포넌트입니다.
const Container = styled.div`
  width: 100%;
  max-width: 1180px;

  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export default Container;
