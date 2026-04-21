import React from 'react';
import './CtaSection.css';
import AnimatedSection from './AnimatedSection';

export default function CtaSection({ onOpenModal }) {
  return (
    <AnimatedSection className="cta-section" id="cta">
      <div className="cta-container">
        <h2 className="cta-headline" style={{ marginBottom: '1rem' }}>
          주도권은 막연한 '기분'이 아니라<br/>
          <span className="text-gradient-accent">'숫자'로 증명되는 전략입니다.</span>
        </h2>
        
        <div style={{ background: 'var(--card-bg)', backdropFilter: 'blur(16px)', borderRadius: '24px', padding: '0', border: '1px solid var(--card-border)', marginBottom: '5rem', overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 1fr) 1fr 1fr', background: 'rgba(255,255,255,0.05)', padding: '1.5rem', fontWeight: 'bold', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            <div>기준(KPI)</div>
            <div>기존 방식 (하위 프레임)</div>
            <div style={{ color: 'var(--accent-color)' }}>OJO (상위 프레임)</div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 1fr) 1fr 1fr', padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '1.1rem', color: '#fff', alignItems: 'center' }}>
            <div style={{ color: 'var(--text-secondary)' }}>구매 전환율</div>
            <div>5~10% (설득/재촉)</div>
            <div style={{ fontWeight: '700' }}>40% 이상 (권위/간청)</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 1fr) 1fr 1fr', padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '1.1rem', color: '#fff', alignItems: 'center' }}>
            <div style={{ color: 'var(--text-secondary)' }}>광고 효율</div>
            <div>150~200% (저가 강조)</div>
            <div style={{ fontWeight: '700' }}>500~1000%↑ (가치 증명)</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 1fr) 1fr 1fr', padding: '1.5rem', fontSize: '1.1rem', color: '#fff', alignItems: 'center' }}>
            <div style={{ color: 'var(--text-secondary)' }}>영업 마진</div>
            <div>시장 평균가 (할인 압박)</div>
            <div style={{ fontWeight: '700' }}>시장가의 3~10배 (프리미엄)</div>
          </div>
        </div>

        <h2 className="cta-headline" style={{ fontSize: '2.5rem' }}>
          "진짜 문제는 실력이 아니라<br/>
          <span className="text-gradient">'주도권'입니다."</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', textAlign: 'center', marginBottom: '4rem', lineHeight: '1.8' }}>
          고객에게 가치를 주려 애쓰지 마십시오. 한 차원 높은 곳에서 원인을 지적하십시오.<br /><br />
          <strong className="text-white">수백 개 기업 구조를 분석한 [비즈니스 주도권의 정석]</strong><br />흔들리지 않는 본질의 힘을 확인하십시오.
        </p>

        <button className="glow-button final-cta-button" onClick={onOpenModal}>
          <span>비즈니스 주도권 설계 지침서 무료 신청하기</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </button>

        <footer className="footer">
          <p>© 2024 Value Maker. All rights reserved.</p>
        </footer>
      </div>
    </AnimatedSection>
  );
}
