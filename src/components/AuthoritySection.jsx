import React from 'react';
import './AuthoritySection.css';
import AnimatedSection from './AnimatedSection';

export default function AuthoritySection() {
  return (
    <AnimatedSection className="authority-section" id="authority">
      <div className="section-container">
        <h2 className="text-center" style={{ fontSize: '3rem', color: '#fff', marginBottom: '1.5rem', lineHeight: '1.2' }}>
          "솔직히 말씀드립니다.<br/>
          <span className="text-gradient">저도 똑같은 지옥을 겪었습니다."</span>
        </h2>
        
        <div className="authority-body">
          <p>
            지금은 '밸류 메이커'라는 이름으로 남들의 전략을 짜드리고 있지만, 저라고 처음부터 잘했을까요? 절대 아닙니다.<br/><br/>
            저 또한 <strong>"좋은 상품만 만들면 고객이 알아서 사주겠지"</strong>라는 착각에 빠져 있었습니다. 제품 퀄리티를 높이는 데에는 목숨을 걸고 밤을 새웠지만, 정작 고객에게 '왜 내 물건을 사야 하는지'를 설득하지 못했습니다.
          </p>
          <p>
            경쟁사보다 우리 제품이 훨씬 좋은데, 말도 안 되는 상품을 파는 그들이 <strong>'기가 막힌 제안(Offer)'</strong> 하나로 시장을 장악하는 걸 보며 피눈물을 흘리기도 했습니다.
          </p>
          <p style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: '700', color: 'var(--accent-color)', borderColor: 'rgba(59, 130, 246, 0.4)' }}>
            그 수많은 실패와 턴어라운드 경험 끝에 깨달은 진리는 하나입니다.<br/>
            "최고의 제품이 팔리는 게 아니라, '최고의 제안(Offer)'이 팔린다."
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
