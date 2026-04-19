import React from 'react';
import AnimatedSection from './AnimatedSection';
import './QualificationSection.css';

export default function QualificationSection() {
  return (
    <AnimatedSection className="qualification-section" id="qualification">
      <h2 className="text-center qualification-headline">모든 사장님을 위한 자료가 아닙니다.</h2>
      
      <div className="qualification-grid">
        <div className="qualification-card card-yes">
          <div className="card-header">YES</div>
          <p>마케팅의 노예에서 벗어나<br/>'진짜 브랜드'를 만들고 싶은 대표님.</p>
        </div>
        
        <div className="qualification-card card-no">
          <div className="card-header">NO</div>
          <p>본질적 변화 없이<br/>'쉽고 빠르게 돈 벌 기술'만 찾는 분.</p>
        </div>
      </div>

      <p className="text-center qualification-footer">
        하이엔드는 배타적입니다.<br />
        본질을 바꿀 의지가 있는 0.1%만 클릭하십시오.
      </p>
    </AnimatedSection>
  );
}
