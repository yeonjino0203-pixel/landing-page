import React from 'react';
import './WarningSection.css';
import AnimatedSection from './AnimatedSection';

export default function WarningSection() {
  return (
    <AnimatedSection className="warning-section" id="warning">
      <div className="warning-list-container">
        <h2 className="text-center" style={{ fontSize: '3rem', color: '#fff', marginBottom: '1.5rem', lineHeight: '1.2' }}>
          "왜 당신의 노력은 매번 <br/>
          <span className="text-gradient-accent">'무거운 족쇄'가 되어 돌아오는가?"</span>
        </h2>
        <p className="text-center" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.8' }}>
          대부분의 비즈니스 구조적 결함을 '마케팅 기술'이나 '노력'만으로 덮으려 합니다.<br/>하지만 이는 오히려 당신을 더 깊은 늪으로 밀어 넣습니다.
        </p>
        
        <ul className="warning-list">
          <li>
            <h3 className="warning-item-title">[화법의 오류]</h3>
            <p>본질은 화술이 아닌 대화의 <strong className="text-white">[지위]</strong>입니다. 프레임이 '을'인 구조에서의 세일즈 교육은 그저 세련된 구걸일 뿐입니다.</p>
          </li>
          
          <li>
            <h3 className="warning-item-title">[마케팅의 오류]</h3>
            <p>상위 프레임 설계 없이 겉멋 든 광고 소재만 바꾸는 것은 더 큰 '단가 전쟁'을 불러올 뿐입니다.</p>
          </li>
          
          <li>
            <h3 className="warning-item-title">[태도의 오류]</h3>
            <p>고객은 하인에게 큰돈을 쓰지 않습니다. 고객은 문제를 정확히 진단하는 '전문가'에게 지갑을 엽니다.</p>
          </li>
        </ul>
      </div>
    </AnimatedSection>
  );
}
