import React from 'react';
import AnimatedSection from './AnimatedSection';
import './CtaSection.css';

export default function CtaSection({ onOpenModal }) {
  return (
    <AnimatedSection className="cta-section text-center" id="cta">
      <div className="cta-container">
        <h2 className="cta-headline">선택은 오직 두 가지뿐입니다.</h2>
        
        <div className="mece-grid">
          <div className="mece-card card-status-quo">
            <div className="mece-title">[ 선택 A ]<br/>과거에 머무르기</div>
            <ul className="mece-list text-left">
              <li>광고비 없이는 팔리지 않는 구조</li>
              <li>평범한 상품으로 무한 단가 경쟁</li>
              <li>매출이 올라도 적자가 되는 굴레</li>
            </ul>
          </div>

          <div className="mece-card card-ojo">
            <div className="mece-title">[ 선택 B ]<br/>하이엔드 브랜드 소유하기</div>
            <ul className="mece-list text-left">
              <li>광고비 없이 알아서 순환되는 엔진</li>
              <li>경쟁할 수 없는 독보적인 가치 증명</li>
              <li>압도적 마진을 남기는 자동화 수익</li>
            </ul>
          </div>
        </div>

        <p className="cta-subheadline">
          당신의 비즈니스는 어떤 경로를 밟아가시겠습니까?
        </p>
        
        <button className="cta-button final-cta-button" onClick={onOpenModal}>
          팔리는 공식: 7단계 체크리스트 무료 받기
        </button>
      </div>
    </AnimatedSection>
  );
}
