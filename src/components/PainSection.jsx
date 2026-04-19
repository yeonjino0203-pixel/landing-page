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
          <p>
            지금 당신에게 필요한 건 더 많은 광고가 아니라,<br />
            광고 없이도 고객이 줄을 서게 만드는 <span className="text-white-highlight">'상품의 유전자 재설계'</span>입니다.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
