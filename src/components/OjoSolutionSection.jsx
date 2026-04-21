import React from 'react';
import './OjoSolutionSection.css';
import AnimatedSection from './AnimatedSection';

export default function OjoSolutionSection() {
  return (
    <AnimatedSection className="ojo-solution-section" id="solution">
      <div className="section-container">
        <h2 className="text-center" style={{ fontSize: '3rem', color: '#fff', marginBottom: '1.5rem', lineHeight: '1.2' }}>
          "드러난 현상 뒤에 숨겨진 <br/>
          <span className="text-gradient">진짜 원인을 해부하라"</span>
        </h2>
        <p className="text-center" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '4rem' }}>
          주도권은 고객이 호소하는 불편함을 단순한 '표면적 현상'으로 정의하고,<br/>
          당신만이 꿰뚫어 볼 수 있는 <strong className="text-white">'진짜 원인'</strong>을 지적할 때 생깁니다.
        </p>

        <div className="ojo-steps-container" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
          
          <div className="ojo-step">
            <div className="step-number">Step 01.</div>
            <div className="step-content">
              <h3 className="step-title">해결해야 할 진짜 문제 찾기</h3>
              <p className="text-gradient-accent" style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1rem', lineHeight: '1.6' }}>
                가격 불만과 기능 타령은 단순한 핑계일 뿐입니다.
              </p>
              <div className="step-desc">
                고객의 불평에 타협하지 마십시오. 당신만이 풀 수 있는 비즈니스의 진짜 구조적 결함을 날카롭게 짚어내 판을 흔들어야 합니다.
              </div>
            </div>
          </div>

          <div className="ojo-step">
            <div className="step-number">Step 02.</div>
            <div className="step-content">
              <h3 className="step-title">전문가의 지위 획득</h3>
              <p className="text-gradient-accent" style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1rem', lineHeight: '1.6' }}>
                애원하는 자에서, 문제를 처방하는 자로.
              </p>
              <div className="step-desc">
                "겪고 계신 문제의 진짜 원인은 이것입니다"라고 딱 잘라 진단하는 순간, 고객은 비로소 입을 닫고 당신의 해결책을 간청하게 됩니다.
              </div>
            </div>
          </div>

        </div>

        <p className="text-center text-gradient" style={{ marginTop: '4rem', fontSize: '1.3rem', fontWeight: '700' }}>
          고객의 문제를 해결해주는 '하위 프레임'을 벗어나, 문제를 규정하는 '상위 프레임'을 구축하십시오.
        </p>
      </div>
    </AnimatedSection>
  );
}
