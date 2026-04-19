import React from 'react';
import AnimatedSection from './AnimatedSection';
import './AuthoritySection.css';

export default function AuthoritySection() {
  return (
    <AnimatedSection className="authority-section" id="authority">
      <div className="authority-container">
        <h2 className="authority-headline text-center">200개 비즈니스 엔진을 해부한 집도 기록.</h2>
        
        <div className="metrics-container">
          <div className="metric-item">
            <div className="metric-number">200+</div>
            <div className="metric-title">Cases</div>
            <p className="metric-desc">업종 불문, 비즈니스 수익 구조 정밀 분석 완료.</p>
          </div>
          
          <div className="metric-item">
            <div className="metric-number">3,000B+</div>
            <div className="metric-title">Data</div>
            <p className="metric-desc">조달 전문가로서 목격한 자금 흐름의 데이터.</p>
          </div>
          
          <div className="metric-item">
            <div className="metric-number">0.1%</div>
            <div className="metric-title">Only</div>
            <p className="metric-desc">레드오션에서 하이엔드로 전환시킨 독점적 전략.</p>
          </div>
        </div>
        
        <p className="authority-body text-center">
          저는 돈만 빌려주는 사람이 아닙니다.<br />
          <strong>돈이 마르지 않는 '엔진'을 설계하는 빌더입니다.</strong>
        </p>
      </div>
    </AnimatedSection>
  );
}
