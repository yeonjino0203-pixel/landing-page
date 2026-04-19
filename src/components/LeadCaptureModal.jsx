import React, { useState } from 'react';
import './LeadCaptureModal.css';

export default function LeadCaptureModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 구글 앱스 스크립트 웹 앱 배포 URL (안전하게 연결되었습니다)
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwpNQ3HUXAhSN71uGqYeL9QmbcIqOFZxUGPORACJuZ2j1M5ffgj_VmZC9EC0g5kzinWEQ/exec';
    
    try {
      const formBody = new URLSearchParams();
      formBody.append('이름', formData.name);
      formBody.append('연락처', formData.phone);
      formBody.append('이메일', formData.email);

      // 구글 스크립트에 POST 요청 (no-cors 사용)
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        mode: 'no-cors',
        body: formBody.toString()
      });

      alert(`신청이 완료되었습니다!\n${formData.name}님의 이메일(${formData.email})로 안내를 드리겠습니다.`);
      onClose();
    } catch (error) {
      alert('오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
      setFormData({ name: '', phone: '', email: '' });
    }
  };

  return (
    <div className="modal-overlay fade-in visible" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h3 className="modal-title">
          상위 0.1% 하이엔드<br/>수익 구조 설계도 받기
        </h3>
        <p className="modal-desc">
          아래 정보를 정확히 입력해주시면,<br/>작성해주신 이메일로 즉시 체크리스트를 발송해 드립니다.
        </p>
        
        <form onSubmit={handleSubmit} className="lead-form">
          <div className="form-group">
            <label>성함 (이름)</label>
            <input 
              type="text" 
              value={formData.name} 
              onChange={e => setFormData({...formData, name: e.target.value})} 
              required 
              placeholder="홍길동" 
            />
          </div>
          <div className="form-group">
            <label>연락처 (핸드폰 번호)</label>
            <input 
              type="tel" 
              value={formData.phone} 
              onChange={e => setFormData({...formData, phone: e.target.value})} 
              required 
              placeholder="010-0000-0000" 
            />
          </div>
          <div className="form-group">
            <label>이메일 주소</label>
            <input 
              type="email" 
              value={formData.email} 
              onChange={e => setFormData({...formData, email: e.target.value})} 
              required 
              placeholder="example@email.com" 
            />
          </div>
          <button type="submit" className="glow-button modal-submit" disabled={isSubmitting}>
            {isSubmitting ? '신청 중입니다...' : '무료로 신청하기'}
          </button>
        </form>
      </div>
    </div>
  );
}
