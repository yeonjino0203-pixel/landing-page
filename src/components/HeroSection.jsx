import React from 'react';
import AnimatedSection from './AnimatedSection';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <AnimatedSection className="hero-section text-center" id="hero">
      <div className="hero-content">
        <h1 className="hero-headline">
          마케팅 대행사에 갖다 바치던 돈을<br />
          <span className="text-silver">'순이익'</span>으로 돌려받는 법.
        </h1>
        <p className="hero-subheadline">
          광고비 0원에서도 팔리는 상위 0.1% 하이엔드 수익 구조,<br />
          그 설계도를 공개합니다.
        </p>
      </div>
      
      {/* Decorative Grid Line */}
      <div className="hero-grid-line"></div>
    </AnimatedSection>
  );
}
