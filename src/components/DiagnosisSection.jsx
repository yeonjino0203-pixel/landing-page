import React from 'react';
import './DiagnosisSection.css';
import AnimatedSection from './AnimatedSection';

export default function DiagnosisSection() {
  return (
    <AnimatedSection className="diagnosis-section" id="diagnosis">
      <div className="section-container">
        <h2 className="section-headline text-center">
          "남들이 볼 땐 성공한 사장님인데, <br/>
          <span className="text-gradient">속은 곪아 터지고 계시진 않습니까?"</span>
        </h2>
        <p className="text-center" style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: '4rem' }}>
          사업 초기에는 열정 하나로 버텼지만, 어느 순간 알 수 없는 '보이지 않는 벽'에 부딪힙니다.<br/>
          지금 대표님이 겪고 계신 상황, 혹시 이 3가지 중 하나 아닙니까?
        </p>
        
        <div className="bento-grid">
          
          <div className="glass-panel">
            <h3 className="card-title">유형 A. [공허한 외침]</h3>
            <p className="card-metric text-gradient-accent" style={{ marginBottom: '1rem' }}>"광고비는 쓰는데 반응이 없습니다."</p>
            <p className="card-desc">
              <strong>(노출 O / 유입 X)</strong> 남들 다 하는 SNS, 검색 광고 다 해봤습니다. 매달 광고비는 나가는데 고객은 클릭조차 하지 않습니다. 허공에 돈을 뿌리는 기분입니다.
            </p>
          </div>

          <div className="glass-panel">
            <h3 className="card-title">유형 B. [빛 좋은 개살구]</h3>
            <p className="card-metric text-gradient-accent" style={{ marginBottom: '1rem' }}>"문의는 오는데 결제를 안 합니다."</p>
            <p className="card-desc">
              <strong>(유입 O / 구매 X)</strong> "좋네요, 근데 좀 비싸서요." 고객이 간만 봅니다. 견적서 보내달라, 자료 달라 해서 밤새 만들어 보냈더니 읽고 답장이 없습니다. 실속은 하나도 없습니다.
            </p>
          </div>

          <div className="glass-panel">
            <h3 className="card-title">유형 C. [밑 빠진 독]</h3>
            <p className="card-metric text-gradient-accent" style={{ marginBottom: '1rem' }}>"매출은 오르는데, 남는 게 없습니다."</p>
            <p className="card-desc">
              <strong>(구매 O / 수익 X)</strong> 죽어라 팔아서 매출 규모는 키웠습니다. 그런데 월말에 정산해보면 다 떼고 대표님 가져갈 월급조차 빠듯합니다. 일은 직원보다 많이 하는데, 돈은 제일 못 법니다.
            </p>
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
}
