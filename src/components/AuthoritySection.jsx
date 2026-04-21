import React from 'react';
import './AuthoritySection.css';
import AnimatedSection from './AnimatedSection';

export default function AuthoritySection() {
  return (
    <AnimatedSection className="authority-section" id="authority">
      <div className="section-container">
        <h2 className="text-center" style={{ fontSize: '3rem', color: '#fff', marginBottom: '1.5rem', lineHeight: '1.2' }}>
          "나 역시 한때는 실력만 좋은<br/>
          <span className="text-gradient">'똑똑한 거지'였습니다."</span>
        </h2>
        
        <div className="authority-body">
          <p>
            제아무리 실력이 좋아도 주도권을 쥐지 못하면 시장의 처분만 기다릴 수밖에 없습니다.<br/><br/>
            저 역시 배가 가라앉는 본질적 결함을 무시한 채 <strong>노력만 열심히 하던 '을'</strong>의 시절이 있었습니다.
          </p>
          <p style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: '700', color: 'var(--accent-color)', borderColor: 'rgba(59, 130, 246, 0.4)', marginTop: '2.5rem' }}>
            수많은 실패 끝에 깨달은 단 하나의 진실.<br/>
            "이제는 맹목적 '노력'이 아닌 <strong>'구조'</strong>를 통째로 바꿔야 할 때입니다."
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
