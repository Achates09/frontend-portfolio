import axios from 'axios';

const PORTFOLIO_API_PATH = '/api/portfolio';

const getServerBaseURL = () => {
  if (typeof window !== 'undefined') return '';
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

  return 'http://localhost:3000';
};

// Next.js Route Handler로 만든 포트폴리오 API를 호출합니다.
export const getPortfolioData = ({ baseURL } = {}) => {
  const requestBaseURL = baseURL || getServerBaseURL();
  // console.log('requestBaseURL', requestBaseURL);
  const config = requestBaseURL ? { baseURL: requestBaseURL } : undefined;
  // console.log('config', config);

  return axios.get(PORTFOLIO_API_PATH, config);
};
