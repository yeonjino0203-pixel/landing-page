import React from 'react';
import './PrescriptionSection.css';
import AnimatedSection from './AnimatedSection';

export default function PrescriptionSection() {
  return (
    <AnimatedSection className="prescription-section" id="prescription">
      <div className="section-container">
        <h2 className="text-center" style={{ fontSize: '3rem', color: '#fff', marginBottom: '1.5rem', lineHeight: '1.2' }}>
          "컨설팅? 굳이 안 받으셔도 됩니다.<br/>
          <span className="text-gradient">이 5가지만 직접 챙기십시오."</span>
        </h2>
        <p className="text-center" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem' }}>
          돈 아끼십시오. 대표님이 직접 아래 5가지 핵심 과제를 완벽하게 수행하실 수 있다면, <br/>굳이 저를 쓰실 필요 없습니다. 회사는 무조건 살아납니다.
        </p>

        <div className="grid-5">
          <div className="base-card">
            <h3 className="card-title">1. 시장 정의</h3>
            <p className="card-desc">허공에 대고 소리치지 마십시오. 내 물건이 없으면 당장 고통스러운 사람들, 돈을 들고 기다리는 <strong>'진짜 시장(Starving Crowd)'</strong>을 찾아내십시오.</p>
          </div>

          <div className="base-card">
            <h3 className="card-title">2. 압도적 제안</h3>
            <p className="card-desc">경쟁사와 가격으로 싸우지 마십시오. 고객이 가격을 듣고 <strong>"이 가격에 이걸 다 준다고? 안 사면 손해네"</strong>라고 느끼게 만들 '거절 불가 제안'을 설계하십시오.</p>
          </div>

          <div className="base-card">
            <h3 className="card-title">3. 수익 구조</h3>
            <p className="card-desc">많이 팔고 손해 보는 장사를 멈추십시오. 원가 기반이 아닌 가치 기반 프라이싱으로 마진율을 확보하고, 팔수록 돈이 쌓이는 구조를 만드십시오.</p>
          </div>

          <div className="base-card">
            <h3 className="card-title">4. 구매 전환</h3>
            <p className="card-desc">고객을 가르치려 들지 마십시오. 기능 설명 대신 그들이 얻게 될 <strong>'변화된 미래'</strong>를 보여주고, 감정을 자극해 구매 버튼을 누르게 만드십시오.</p>
          </div>

          <div className="base-card">
            <h3 className="card-title">5. 심리 장치</h3>
            <p className="card-desc">고민할 시간을 주지 마십시오. 희소성과 긴급성을 주입하여 <strong>'지금 당장'</strong> 결제해야만 하는 명확한 이유를 심어주십시오.</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
