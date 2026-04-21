import React from "react";
import "./HeroSection.css";
import AnimatedSection from "./AnimatedSection";

export default function HeroSection({ onOpenModal }) {
  return (
    <AnimatedSection className="hero-section">
      <div className="hero-content">
        <h1 className="hero-headline">
          "당신의 비즈니스는 지금 <br />
          <span className="text-gradient">
            '면접' 중인가, '심사' 중인가?"
          </span>
        </h1>
        <p className="hero-subheadline">
          선택을 갈구하는 을(乙)의 언어를 버리고,
          <br />
          <strong className="text-white">
            시장의 판을 지배하는 '상위 프레임'의 법칙
          </strong>
        </p>
        <button className="glow-button" onClick={onOpenModal}>
          <span>비즈니스 주도권 설계 지침서 무료 신청하기</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </AnimatedSection>
  );
}
