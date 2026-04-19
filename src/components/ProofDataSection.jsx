import React from 'react';
import AnimatedSection from './AnimatedSection';
import './ProofDataSection.css';

export default function ProofDataSection() {
  const dataList = [
    { label: '고객 반응률 (Response)', before: '0.013%', after: '0.033%', result: '2.5배 상승' },
    { label: '영업 전환율 (Closing)', before: '16%', after: '37%', result: '2.3배 상승' },
    { label: '판매 단가 (Price)', before: '100만 원', after: '400만 원', result: '4배 확보' },
    { label: '최종 현금 확보 (Total)', before: '500만 원', after: '1억 1,200만 원', result: '22.4배 폭발', highlight: true },
    { label: '광고 수익률 (ROAS)', before: '0.5 : 1 (적자)', after: '11.2 : 1 (수익)', result: '수직 상승' },
  ];

  return (
    <AnimatedSection className="proof-data-section" id="proof-data">
      <div className="proof-data-container">
        <h2 className="proof-headline text-center">
          '평범한 상품'에서<br />
          '하이엔드 오퍼'로<br />
          전환 시 일어나는 변화
        </h2>
        
        <p className="proof-subheadline text-center">
          똑같은 광고비 1,000만 원을 써도 결과는 <strong>22배</strong>가 차이 납니다.<br />
          이것은 단순한 희망 사항이 아니라, '오퍼의 구조'가 바뀌었을 때 나타나는 실측 데이터입니다.
        </p>
        
        <div className="infographic-wrapper">
          <div className="infographic-header">
            <div className="col col-label">분류 지표</div>
            <div className="col col-before">일반 상품 (Commodity)</div>
            <div className="col col-after">하이엔드 오퍼 (OJO Offer)</div>
            <div className="col col-result">개선 성과</div>
          </div>
          
          <div className="infographic-body">
            {dataList.map((item, index) => (
              <div className={`infographic-row ${item.highlight ? 'row-highlight' : ''}`} key={index}>
                <div className="col col-label" data-th="분류 지표">{item.label}</div>
                <div className="col col-before" data-th="일반 상품">
                  <span className="value-box before-box">{item.before}</span>
                </div>
                <div className="col col-after" data-th="하이엔드 오퍼">
                  <span className="value-box after-box">{item.after}</span>
                </div>
                <div className="col col-result" data-th="개선 성과">
                  <span className="result-badge">{item.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
