import React from 'react';
import './HeroSection.css';
import AnimatedSection from './AnimatedSection';

export default function HeroSection({ onOpenModal }) {
  return (
    <AnimatedSection className="hero-section">
      <div className="hero-content">
        <h1 className="hero-headline">
          "대표님, 제품은 완벽한데 <br/>
          <span className="text-gradient">왜 통장은 비어있을까요?"</span>
        </h1>
        <p className="hero-subheadline">
          이 문서는 밤낮없이 일하지만 정작 손에 쥐는 수익은 없는 대표님의 답답한 현실에 공감하며,<br/>
          <strong className="text-white">그 악순환의 고리를 끊어낼 실질적이고 즉각적인 해답</strong>을 드리기 위해 작성되었습니다.
        </p>
        <button className="glow-button" onClick={onOpenModal}>
          <span>악순환의 고리를 끊어낼 해답 신청하기</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </button>
      </div>
    </AnimatedSection>
  );
}
