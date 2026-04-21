import React from 'react';
import './DiagnosisSection.css';
import AnimatedSection from './AnimatedSection';

export default function DiagnosisSection() {
  return (
    <AnimatedSection className="diagnosis-section" id="diagnosis">
      <div className="section-container">
        <h2 className="section-headline text-center">
          "쉬운 경쟁에 매달려 있다면, <br/>
          <span className="text-gradient">당신은 이미 위기입니다."</span>
        </h2>
        <p className="text-center" style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: '4rem', lineHeight: '1.8' }}>
          오늘도 고객 연락에 스마트폰을 손에서 놓지 못하시나요?<br />
          가격을 깎아달라는 고객에게 장점만 구구절절 '설명'하고 있다면,<br />
          당신은 비즈니스를 주도하는 것이 아니라 <strong className="text-white">주도권을 완전히 상실한 프레임</strong>에 갇혀 있는 것입니다.
        </p>
        
        <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          
          <div className="glass-panel">
            <h3 className="card-title">[시간 주도권 박탈]</h3>
            <p className="card-desc">
              문제 해결에 관심 없는 가격 줄다리기 문의와, 고객 연락에 맞춰 24시간 전전긍긍 대기해야 하는 낭비 시스템.
            </p>
          </div>

          <div className="glass-panel">
            <h3 className="card-title">[가격 주도권 박탈]</h3>
            <p className="card-desc">
              내 가치의 기준이 '시장 평균가'에 묶여, 단돈 천 원 차이에도 고객을 경쟁사에 속절없이 빼앗기는 비참한 현실.
            </p>
          </div>

          <div className="glass-panel">
            <h3 className="card-title">[지위 주도권 박탈]</h3>
            <p className="card-desc">
              내가 90% 이상 말을 하며 애원하는 구조. 전문가는 커녕 무료로 정보만 취하고 떠나는 무미건조한 방문객들.
            </p>
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
}
