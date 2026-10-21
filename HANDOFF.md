# 인수인계 — OJO 정책자금 구조 개선 랜딩페이지

_작성일: 2026-10-21_

## 한 줄 요약
정책자금 무료 상담 신청을 받는 **정적 HTML 랜딩페이지**입니다. 실제로 배포되는 파일은 `index.html`과 `thanks.html` 두 개뿐입니다.

## 파일 구조

| 파일 | 역할 |
|---|---|
| `index.html` | **실제 랜딩페이지.** HTML, CSS, JS가 이 파일 하나에 모두 들어 있습니다. |
| `thanks.html` | 상담 신청을 완료하면 이동하는 감사 페이지 |
| `vercel.json` | Vercel 정적 배포 설정 (빌드 없음, 루트 폴더 그대로 배포, `.html` 확장자 생략) |
| `.vercelignore` | 배포에서 빼는 파일 (`src/`, `node_modules` 등) |
| `public/` | 정적 파일(이미지 등) |
| `src/`, `vite.config.js`, `package.json` | **예전 React/Vite 버전. 지금은 사용하지 않고 배포에서도 빠집니다.** 참고용으로만 남아 있습니다. |

### index.html 섹션 순서
`id`로 찾으면 됩니다.

1. `#hero`: 헤드라인, 신뢰 지표(200개 / 500억 / 24h), 무료 상담 버튼
2. `#gap`: 같은 매출인데 왜 거절되는지
3. `#story`: 연료와 엔진 비유, 구조 개선 소개
4. `#core-truth`: 3단계 설명 (정부가 돈을 푸는 이유 → 정부가 미는 회사 → 4-Why 정렬)
5. `#offer`: 현재와 구조 개선 후의 숫자 비교, 상담 시 제공 항목
6. `#faq`: 자주 묻는 질문
7. `#cta`: 마지막 상담 신청 영역
8. 모달 `#apply-form`: 신청 폼 (업체명, 대표자명, 휴대폰, 개인정보 동의)

스타일은 Tailwind CDN과 `<head>` 안의 `tailwind.config`(색상 토큰), 그리고 Pretendard 폰트를 씁니다.

## 상담 신청 데이터 흐름
- 폼을 제출하면 입력값을 검증하고 **Google Apps Script 웹앱**으로 POST한 뒤 `thanks.html`로 이동합니다.
- 전송 주소: `index.html` 안의 `SHEETS_WEBHOOK_URL`
  `https://script.google.com/macros/s/AKfycbwgqMK0QGXUe7OLsUH_8IPWQn00pWbplTyD8nKrkH3imSNFpgL9NUAxplbUHFwYbHg2/exec`
- 보내는 값: `company`, `ceo`, `phone`, `timestamp`, `source`
- `mode: 'no-cors'`로 보내기 때문에 **전송에 실패해도 화면에는 오류가 표시되지 않습니다.** 신청 건이 실제로 들어오는지는 구글 시트에서 직접 확인해야 합니다.
- 참고: `src/components/LeadCaptureModal.jsx`에도 다른 Apps Script 주소가 있지만, 예전 React 버전이라 사용하지 않습니다.
- Apps Script와 구글 시트는 저장소 밖에 있으므로 **접근 권한은 별도로 받아야 합니다.**

## 광고 추적
- `index.html`에 Google Ads 태그 `AW-17908236137`이 설치되어 있습니다.
- `thanks.html`에는 **전환 이벤트 코드가 아직 없습니다.** 광고 전환을 측정하려면 추가해야 합니다.

## 로컬에서 보기
빌드는 필요 없습니다. 폴더에서 아래 명령을 실행한 뒤 http://localhost:5500 에 접속하세요.

```bash
python3 -m http.server 5500
```

파일을 더블클릭해서 바로 열면 일부 스크립트가 동작하지 않을 수 있습니다.

## 배포
- GitHub `yeonjino0203-pixel/landing-page` 저장소의 `main` 브랜치에 푸시하면 **Vercel이 자동으로 배포**합니다.
- Vercel 프로젝트: `landing-page`
- 기본 주소: https://landing-page-theta-five-54.vercel.app

## ⚠️ 남은 문제 (우선 처리 필요)
1. **사이트 접속 불가:** Vercel이 위 기본 주소를 `찡뗽기쯰.com`(`xn--ok0by1mxztsfa.com`)으로 리디렉트하고 있는데, 이 도메인은 **등록되지 않은 도메인**입니다. Vercel → landing-page → Settings → Domains에서 해당 도메인을 삭제하거나 올바른 도메인으로 고쳐야 합니다.
2. **감사 페이지 전환 추적 없음:** 위 "광고 추적" 항목 참고
3. **저장소가 공개(public) 상태입니다.** 필요하면 비공개로 바꾸세요.
4. **예전 React 코드 정리:** 사용하지 않는 `src/`, `package.json` 등은 정리해도 됩니다.

## 필요한 권한 (기존 담당자에게 요청)
- GitHub 저장소 Collaborator
- Vercel 프로젝트 Member
- 신청 데이터가 쌓이는 구글 시트와 Apps Script 편집 권한
- Google Ads 계정 (전환 추적 작업 시)
