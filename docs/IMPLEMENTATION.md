# 박찬건 포트폴리오 — 구현 기준

2026-09-12 · [디자인 레퍼런스](https://oxxultus.github.io/resume/#hero)

흰색 본문, 회색 사이드바, 얇은 구분선과 넓은 여백을 사용합니다. 데스크톱 사이드바는 244px, 상단 바는 48px이며 1024px 미만에서 메뉴 서랍으로 전환됩니다. 처음에는 라이트 모드로 열고 사용자의 테마 선택을 저장합니다.

## 탐색

Home → About → Projects → Skills → Experience → Credentials → Awards → Contact 순서로 구성했습니다. 현재 섹션과 문맥을 사이드바·상단 바에 표시합니다. 프로젝트는 구조 설계 / 검증·운영 / 협업·주도로 필터링합니다.

홈에서 프로젝트를 열면 `/projects/[slug]` URL을 가진 모달이 열립니다. 직접 접속과 새로고침은 독립 문서로 표시합니다. Next.js Intercepting Routes와 Parallel Routes를 사용하며 닫기·Escape·브라우저 뒤로/앞으로 가기를 지원합니다. 같은 MDX 콘텐츠를 두 화면에서 공유합니다.

## 기술

- Next.js App Router + TypeScript + Tailwind CSS
- Motion for React: 필터 배치와 절제된 등장 효과
- Radix UI: Dialog / Accordion / Tabs
- Lucide React, Noto Sans KR, Outfit
- 로컬 TypeScript 데이터 + MDX, Vercel 배포 구성

이 Windows 실행 환경에서 Turbopack의 MDX loader 프로세스 생성이 실패해 공식 Webpack 빌드를 사용합니다. `pnpm dev`와 `pnpm build`에 `--webpack`을 지정했습니다.

## 콘텐츠

Nextify / AlarmIT / Replendar를 공개 대표 프로젝트로, 19문파 / 도란도란 / LINC 업무 자동화를 경험으로 정리했습니다. AI Org Simulation은 카드에 ‘정리 중’으로만 표시하며 상세 주소를 공개하지 않습니다. 실측 성과와 향후 과제를 구분하며 알려지지 않은 날짜와 성과 수치는 작성하지 않았습니다. 출처와 공개 보류 항목은 [콘텐츠 검토 문서](CONTENT_REVIEW.md)에 기록했습니다.

연락처는 사용자가 제공한 `cksrjs4726@gmail.com`과 `010-3327-4726`입니다. 자격증과 교육·수료는 하나의 데이터 모델에서 구분하고 수상은 별도로 관리합니다. Nextify 상세 상단에는 16페이지 최종 발표 PDF를 내장하고 실행·검증·설계 이미지를 확대 증빙으로 연결했습니다.

## 운영

노션 경험 DB → 공개 내용 검토 → 저장소의 데이터·MDX 수정 → 빌드 → Vercel 순서로 갱신합니다. API, 로그인, 실시간 노션 연동, 블로그, 문의 폼은 포함하지 않습니다. GitHub/Vercel 계정 연동과 운영 도메인 설정은 배포 시 필요합니다.
