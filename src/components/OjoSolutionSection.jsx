import React from 'react';
import './OjoSolutionSection.css';
import AnimatedSection from './AnimatedSection';

export default function OjoSolutionSection() {
  return (
    <AnimatedSection className="ojo-solution-section" id="solution">
      <div className="section-container">
        <h2 className="text-center" style={{ fontSize: '3rem', color: '#fff', marginBottom: '1.5rem', lineHeight: '1.2' }}>
          "그래서 밸류 메이커가 존재합니다.<br/>
          <span className="text-gradient">고기 대신 그물을 짜드립니다."</span>
        </h2>
        <p className="text-center" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '4rem' }}>
          대표님은 본업(제품 개발/운영)에만 집중하십시오. 나머지 골치 아픈 숙제는 제가 해결합니다.<br/>
          단순 대행이 아닙니다. 저는 시장(Market)을 찾고, 오퍼(Offer)라는 무기를 쥐여드리고, <strong className="text-white">설득력(Persuasion)</strong>이라는 사격술을 전수합니다.
        </p>

        <div className="ojo-steps-container">
          
          <div className="ojo-step">
            <div className="step-number">1단계 (Planning)</div>
            <div className="step-content">
              <h3 className="step-title">시장 (Market)</h3>
              <p className="text-gradient-accent" style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>"살 사람이 어디 있는지 찍어줍니다."</p>
              <div className="step-desc">
                <strong>[4대 불패 기준 진단]</strong>
                <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li><strong>고통:</strong> 밤잠 설칠 만큼 간절한가?</li>
                  <li><strong>구매력:</strong> 지불 능력이 충분한가?</li>
                  <li><strong>접근성:</strong> 마케팅 도달이 쉬운가?</li>
                  <li><strong>성장성:</strong> 파도가 밀려오는 시장인가?</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="ojo-step">
            <div className="step-number">2단계 (Plan)</div>
            <div className="step-content">
              <h3 className="step-title">오퍼 (Offer)</h3>
              <p className="text-gradient-accent" style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>"지갑을 열 수밖에 없는 제안을 만듭니다."</p>
              <div className="step-desc">
                <strong>[6-Step 오퍼 빌딩]</strong>
                <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li><strong>꿈의 결과 정의:</strong> 최종 상태(Status) 정의</li>
                  <li><strong>장애물 해결:</strong> 모든 방해 요소 제거</li>
                  <li><strong>가치 방정식:</strong> 성공 확률 ↑ / 노력 ↓</li>
                  <li><strong>프라이싱:</strong> 가치 기반 고가 전략</li>
                  <li><strong>보너스/보장:</strong> 리스크 0% 설계</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="ojo-step">
            <div className="step-number">3단계 (Execution)</div>
            <div className="step-content">
              <h3 className="step-title">설득력 (Persuasion)</h3>
              <p className="text-gradient-accent" style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>"무조건 팔리는 방법을 전수합니다."</p>
              <div className="step-desc">
                <strong>[3가지 핵심 무기 장착]</strong>
                <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li><strong>전환 스크립트:</strong> 후킹→공감→제안→클로징</li>
                  <li><strong>반박 제거 매뉴얼:</strong> 가격 저항 대응 SOP</li>
                  <li><strong>희소성 주입기:</strong> 즉시 결제 유도 장치</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        <p className="text-center text-gradient" style={{ marginTop: '4rem', fontSize: '1.3rem', fontWeight: '700' }}>
          단순 조언자가 아닌 '사업 파트너'로서, 이 3가지가 세팅된 비즈니스를 함께 완성합니다.
        </p>
      </div>
    </AnimatedSection>
  );
}
