import React from 'react';
import './WarningSection.css';
import AnimatedSection from './AnimatedSection';

export default function WarningSection() {
  return (
    <AnimatedSection className="warning-section" id="warning">
      <div className="warning-list-container">
        <h2 className="text-center" style={{ fontSize: '3rem', color: '#fff', marginBottom: '1.5rem', lineHeight: '1.2' }}>
          "답답한 마음에 해보신 그 방법들, <br/>
          <span className="text-gradient-accent">사실은 독이 되고 있었습니다."</span>
        </h2>
        <p className="text-center" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem' }}>
          문제가 생기면 대부분의 대표님들은 급한 불을 끄기 위해 아래 3가지 선택을 합니다.<br/>안타깝게도 이는 회사를 더 깊은 수렁으로 밀어 넣습니다.
        </p>
        
        <ul className="warning-list">
          <li>
            <h3 className="warning-item-title">[밑 빠진 독에 물 붓기]</h3>
            <p>"노출이 부족한가?" 싶어 타겟팅 없이 광고비 예산만 늘립니다.</p>
          </li>
          
          <li>
            <h3 className="warning-item-title">[제 살 깎아먹기]</h3>
            <p>"비싸서 안 팔리나?" 싶어 가격을 내립니다. 마진은 줄고, 가격만 따지는 진상 고객만 꼬입니다.</p>
          </li>
          
          <li>
            <h3 className="warning-item-title">[공급자 마인드]</h3>
            <p>"설명이 부족했나?" 싶어 고객이 관심 없는 기능 설명만 더 길게 늘어놓습니다.</p>
          </li>
        </ul>
      </div>
    </AnimatedSection>
  );
}
