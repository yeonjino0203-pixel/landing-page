import React from 'react';
import './CtaSection.css';
import AnimatedSection from './AnimatedSection';

export default function CtaSection({ onOpenModal }) {
  return (
    <AnimatedSection className="cta-section" id="cta">
      <div className="cta-container">
        <h2 className="cta-headline">
          "대표님은 이제 '세일즈'하지 마시고 <br/>
          <span className="text-gradient-accent">'선택'</span>하십시오."
        </h2>
        
        <div style={{ background: 'var(--card-bg)', backdropFilter: 'blur(16px)', borderRadius: '24px', padding: '3rem', border: '1px solid var(--card-border)', marginBottom: '3rem', textAlign: 'left' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2rem', textAlign: 'center' }}>
            밸류 메이커의 시스템이 이식된 후, 대표님이 맞이할 미래는 다릅니다.
          </p>
          <ul style={{ color: '#fff', fontSize: '1.15rem', lineHeight: '1.8', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
              <span style={{ color: 'var(--accent-color)' }}>✔</span>
              <span><strong>[을에서 갑으로]</strong> 고객에게 사달라고 애원하는 게 아니라, 고객이 제발 팔아달라고 줄을 섭니다.</span>
            </li>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
              <span style={{ color: 'var(--accent-color)' }}>✔</span>
              <span><strong>[시스템의 자유]</strong> 대표님의 '감'이나 '개인기'에 의존하지 않고, 누가 팔아도 팔리는 '불패의 시스템'을 갖게 됩니다.</span>
            </li>
          </ul>
          <p style={{ color: '#fff', fontSize: '1.4rem', fontWeight: '700', textAlign: 'center', marginTop: '3rem' }}>
            이제 실행만 하십시오. 결과는 따라옵니다.
          </p>
        </div>

        <button className="glow-button final-cta-button" onClick={onOpenModal}>
          <span>무료 체크리스트 & 90분 긴급진단 신청</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </button>

        <footer className="footer">
          <p>© 2024 Value Maker. All rights reserved.</p>
        </footer>
      </div>
    </AnimatedSection>
  );
}
