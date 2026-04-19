import React from 'react';
import AnimatedSection from './AnimatedSection';
import './SolutionSection.css';

export default function SolutionSection() {
  const steps = [
    { num: '01', title: 'Market', desc: '피 흘리는 0.1%의 군중을 찾는 법' },
    { num: '02', title: 'Offer', desc: '거절이 지능의 문제로 느껴지는 가치 설계' },
    { num: '03', title: 'Risk', desc: '고객의 불안을 확신으로 바꾸는 장치' },
    { num: '04', title: 'Proof', desc: '의심을 파괴하는 압도적 증명' },
    { num: '05', title: 'Delivery', desc: '기대를 초과하는 딜리버리 시스템' },
    { num: '06', title: 'Ascension', desc: '단골을 팬으로 만드는 점진적 승급' },
    { num: '07', title: 'System', desc: '광고비 없이 수익이 순환되는 하이엔드 엔진' },
  ];

  return (
    <AnimatedSection className="solution-section" id="solution">
      <div className="solution-container">
        <h2 className="solution-headline text-center">
          <span className="text-silver">[OJO 수익 구조 설계도 :</span><br />
          7단계 체크리스트]
        </h2>
        
        <div className="steps-list">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <div className="step-num">{step.num}.</div>
              <div className="step-content">
                <span className="step-title">{step.title}</span>
                <span className="step-separator"></span>
                <span className="step-desc">{step.desc}</span>
              </div>
            </div>
          ))}
        </div>
        
        <p className="solution-footer text-center">
          이 리포트를 읽는 것만으로도 당신의 상품 유전자가 바뀝니다.
        </p>
      </div>
    </AnimatedSection>
  );
}
