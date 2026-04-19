import React from 'react';
import AnimatedSection from './AnimatedSection';
import './PainSection.css';

export default function PainSection() {
  return (
    <AnimatedSection className="pain-section" id="pain">
      <div className="pain-container">
        <h2 className="pain-headline">왜 당신의 상품은 마케팅을 할수록 적자인가?</h2>
        <div className="pain-body">
          <p>
            상세페이지를 고치고 SNS에 돈을 쏟아부어도 수익이 제자리라면 문제는 홍보가 아닙니다.<br />
            <strong>'안 팔릴 상품'을 억지로 팔고 있기 때문입니다.</strong>
          </p>
          <p className="text-center" style={{ marginTop: '2rem' }}>
            <span style={{ fontSize: '1.1rem', color: 'var(--color-dark-gray)' }}>저는 그럴싸한 계획이나 방향성만 던져주지 않습니다.</span><br />
            <br />
            <strong style={{ fontSize: '1.3rem' }}><span className="text-silver">끝까지 함께 실행해 내는 파트너</span>입니다.</strong>
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
