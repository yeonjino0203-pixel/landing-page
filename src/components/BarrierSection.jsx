import React from 'react';
import './BarrierSection.css';
import AnimatedSection from './AnimatedSection';

export default function BarrierSection() {
  return (
    <AnimatedSection className="barrier-section" id="barrier">
      <div className="barrier-list-container">
        <h2 className="text-center" style={{ fontSize: '3rem', color: '#fff', marginBottom: '1.5rem', lineHeight: '1.2' }}>
          "하지만... 대표님에겐 <br/>
          <span className="text-gradient-accent">'시간'과 '전문성'이 부족합니다."</span>
        </h2>
        <p className="text-center" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem' }}>
          "말이 쉽지, 그걸 언제 다 해?"라는 생각이 드셨을 겁니다. 맞습니다. 그게 냉정한 현실입니다.<br/>대표님의 능력이 부족해서가 아니라, 물리적인 '한계' 때문입니다.
        </p>

        <ul className="barrier-list">
          <li>
            <h3 className="barrier-item-title">한계 1. [전문성의 벽]</h3>
            <p>대표님은 '제품'을 만드는 전문가이지, '파는 심리학'의 전문가는 아닙니다. 오퍼를 짜고 스크립트를 쓰는 것은 완전히 다른 영역의 전문 기술입니다.</p>
          </li>
          <li>
            <h3 className="barrier-item-title">한계 2. [연결의 부재]</h3>
            <p>기획은 기획대로, 마케팅은 마케팅대로 따로 놀면 소용없습니다. 시장-오퍼-설득력이 하나의 톱니바퀴처럼 맞물려야 하는데, 이를 조율할 컨트롤 타워가 내부에 없습니다.</p>
          </li>
          <li>
            <h3 className="barrier-item-title">한계 3. [물리적 시간 부족]</h3>
            <p>당장 터지는 사고 수습하고 영업 뛰기에도 하루 24시간이 모자랍니다. 언제 책상에 앉아 시장 조사를 하고 치밀한 판매 시나리오를 짜고 계시겠습니까?</p>
          </li>
          <li>
            <h3 className="barrier-item-title">한계 4. [객관화의 함정]</h3>
            <p>내 제품은 내 자식 같아서 단점이 안 보입니다. 고객이 처음 접할 때 느끼는 '낯섦'과 '의심'을 객관적으로 파악하지 못해 소구점을 빗나갑니다.</p>
          </li>
          <li style={{ gridColumn: '1 / -1' }}>
            <h3 className="barrier-item-title text-gradient">한계 5. [시행착오의 비용]</h3>
            <p>스스로 공부해서 할 수도 있습니다. 하지만 내 사업 자금으로 테스트하며 날리는 광고비(수업료)는 누가 보상합니까? 전문가를 쓰는 비용보다, 모르고 덤벼서 잃는 비용이 훨씬 큽니다.</p>
          </li>
        </ul>
      </div>
    </AnimatedSection>
  );
}
