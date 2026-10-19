# 검증 기록

검증일: 2026-09-12. Windows / 설치된 Chrome / Next.js 프로덕션 서버를 사용했습니다.

## 코드와 탐색

- Next.js 프로덕션 빌드 성공, TypeScript 검사 통과
- ESLint 오류·경고 없음
- Playwright 핵심 테스트 8개 통과
- 결과·회고 순서 정리 후 빌드·린트를 다시 통과하고, 모달 및 상세 경로 테스트 2개 재검증 통과
- 390px / 768px / 1440px 홈·상세 화면 가로 넘침 없음
- 프로젝트 필터, 모달 닫기·Escape, 뒤로·앞으로 가기, 새로고침·직접 접속 확인
- 모달을 닫은 뒤 필터·스크롤·포커스 복귀 확인
- 키보드로 모바일 메뉴 → 프로젝트 → 아코디언 → 닫기 → 메뉴 버튼 복귀 확인
- 테마 저장, 교육·수료 구분, 이메일 복사 성공·실패 안내 확인
- 프로젝트 4개의 메타데이터·공유 이미지·정상 주소와 잘못된 주소의 404 확인
- axe 자동 검사: 라이트·다크·모바일 메뉴·프로젝트 모달의 WCAG A/AA 위반 0개

## 모바일 Lighthouse

Lighthouse 13.4.1, 로컬 프로덕션 URL, 기본 모바일 시뮬레이션, 2026-09-12 16:13 KST 측정.

| 항목 | 결과 |
|---|---:|
| 성능 | 95 |
| 접근성 | 100 |
| 권장사항 | 100 |
| SEO | 100 |
| FCP | 1.3초 |
| LCP | 2.8초 |
| TBT | 80ms |
| CLS | 0 |

첫 측정의 성능 88점에서 폰트 통합 후 95점으로 개선했습니다. 이 점수는 로컬 측정값이며 실제 Vercel 배포·네트워크·기기에 따라 달라집니다. 자동 접근성 검사가 모든 사용자 환경을 보장하지는 않습니다.

HTML·JSON 보고서는 `.local/lighthouse-mobile.*`, Playwright 화면 캡처와 보고서는 `test-results/`, `playwright-report/`에 저장됩니다. `pnpm audit:performance`와 `pnpm test:e2e`로 다시 실행할 수 있습니다.

## About me 사진·Education 추가 검증

사용자 지정 노션 사진을 로컬 이미지로 반영하고 원형 사진·소개 2열 구조와 Education 4개 이력을 추가했습니다. 변경 후 빌드·TypeScript·ESLint를 통과하고 기존 반응형·접근성 검사 2개를 재실행했습니다. 390px / 768px / 1440px에서 사진 로딩·배치를 확인했고 가로 넘침이 없었습니다. `.local/about-*.png`에 화면 캡처를 보관합니다. 위 Lighthouse 점수는 이 추가 작업 이전의 측정값입니다.

## 남은 외부 작업

Vercel 대시보드는 로그인 화면으로 연결되어 Preview/운영 배포를 진행하지 않았습니다. GitHub 저장소 연결, Vercel 로그인·Import, 운영 주소 설정 후 배포 환경에서 다시 확인해야 합니다. 실제 서비스 화면과 증빙·발표 PDF, 공개 보류 정보는 [콘텐츠 검토 문서](CONTENT_REVIEW.md)를 따릅니다.

## 2026-10-13 ONE ACTION · 로컬 콘텐츠 업데이트 검증

- 프로덕션 빌드, 타입 검사, ESLint 통과. Playwright 전체 13개 테스트 통과.
- 시연 6장·첨부 아키텍처·서비스 흐름·담당 범위의 9장 순서와 로딩, 390px·1440px 카루셀, 확대 원본 비율·Escape 닫기 확인. 기존 768px 반응형·모달·메타데이터·404·접근성·모션 검사도 통과.
- 접근성 검사는 모션 감소 설정으로 클릭 타이밍을 분리하고 실제 스크롤 효과는 별도 모션 테스트로 검증.
- 노션 ONE ACTION 경험 페이지에 동일한 자료를 접어보기 2개로 저장. 이미지 파일 9개가 모두 다운로드 참조로 해결되고 기존 경험 본문이 보존된 것을 확인.
- 최신 로컬 미리보기: `http://127.0.0.1:3000/projects/one-action`. 이번 작업에서 운영 배포와 새 Git 태그 생성은 수행하지 않음. 위 Lighthouse 점수는 이번 추가 자료 이전 측정값.

## 2026-10-14 v1.2.0 · 배포 전 검증

- 현재 소스의 `pnpm build`와 `pnpm test:e2e`를 다시 실행해 통과. Playwright 전체 13개 테스트 통과.
- 릴리스 내용: ONE ACTION 프로젝트·시연 및 구조 자료 9장, 소프트뱅크 예선 최우수상·상장, 프로젝트·경험 요약 개선. AI Org Simulation은 정리 중·상세 404 유지.
- 배포 방식: `main`과 주석 태그 `v1.2.0`을 GitHub에 올리고 기존 Vercel Git 연동의 Production 배포 상태를 확인.
- Lighthouse는 이번 릴리스에서 재측정하지 않았으며, 위 성능 점수는 이전 측정값.

## 2026-10-14 범용 포트폴리오 · 최종 로컬 검증

- `pnpm typecheck`, ESLint, `pnpm build`(Webpack) 통과. 최종 Playwright 14개 테스트 전체 통과(2.2분).
- 390 / 768 / 1440px 홈·상세·카루셀 가로 넘침 없음. 실제 인앱 브라우저에서 데스크톱·390px 소개, 기술 맥락, 펼친 AI 프로토타입과 ONE ACTION 사례를 확인했다.
- 필터·모달·Escape·뒤로/앞으로·새로고침·독립 접속, 필터/스크롤/포커스 복원, 중첩 증빙 모달과 복귀, 모바일 업무 경험 목록 복귀 통과.
- 대표 3개·보조 Replendar·홈 AI 프로토타입·별도 LINC Work 구성을 확인. 기술 링크의 해시 대상이 존재하고 AI 기술이 404 상세 주소로 연결되지 않음. AI 상세·존재하지 않는 주소는 404 유지.
- 라이트·다크·모바일 메뉴·프로젝트 모달·펼친 AI 기록의 axe WCAG A/AA 자동 위반 0개. 모션 감소·스크롤 재등장은 별도 동작 검사 통과.
- 공개 이미지·Nextify PDF, 프로젝트 메타데이터·공유 이미지 응답과 알림 it 공유 이미지의 한글 표시 확인. ONE ACTION의 새 공개 기록·인프라 사본 고정 링크는 GitHub에서 존재 확인.
- 코드 기반 사실과 실행 확인을 구분한 문구 검토는 [범용 콘텐츠 검토](GENERAL_PORTFOLIO_REVIEW.md)에 기록. 운영 배포·Git 커밋·태그는 수행하지 않았다.

### 실제 측정에 따른 성능 보완

Lighthouse 13.4.1 / Headless Chrome 155 / 모바일 시뮬레이션 CPU 4배 / 로컬 프로덕션 홈 기준. 이 세션의 동일 설정에서 변경 전후 각 1회 측정이며 실행 환경의 변동이 있어 통계적 개선율로 해석하지 않는다.

| 항목 | 보완 전 | 최종 |
|---|---:|---:|
| 성능 | 71 | 82 |
| 접근성 / 권장사항 / SEO | 100 / 100 / 100 | 100 / 100 / 100 |
| FCP | 2.1초 | 1.9초 |
| LCP | 2.4초 | 2.1초 |
| TBT | 1,300ms | 620ms |
| CLS | 0 | 0 |

초기 보고서에서 Style/Layout 약4.2초와 스크립트 평가 약1.7초를 관찰했다. 최종 구현은 섹션의 `contain: layout style`, 필요할 때 프로젝트 문서를 요청하도록 선행 로딩 비활성화, 첫 카드 배치 계산 생략·필터 조작 시 위치 애니메이션 활성화이다. 시각적 등장·모달·필터 동작은 유지된다.

`content-visibility:auto`는 실험 중 스크롤 복귀를 바꿔 적용에서 제외했다. [MDN의 해당 기능 설명](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/content-visibility)을 확인했지만 실제 탐색 검사를 우선했다. 최종 소스에는 이 속성이 없다.

최종 Style/Layout 약3.0초·스크립트 평가 약0.9초와 TBT 620ms가 남았다. 성능 90점 목표는 미달이다. 콘텐츠·라우팅 수정과 탐색 안정성을 우선한 범위에서 보완했고 추후 폰트 배치·프레임워크 초기 실행 비용의 추가 프로파일링이 필요하다. 오래된 95점 기록을 현재 결과로 사용하지 않는다.

보고서: `.local/lighthouse-mobile.json`, `.local/lighthouse-mobile.html`. 보완 전 사본: `.local/general-portfolio/lighthouse-before.*`. 검토 캡처: `.local/general-portfolio/desktop-hero.jpg`, `mobile-hero.jpg`; Playwright 화면·추적: `test-results/`, `playwright-report/`.

미리보기는 `http://127.0.0.1:3000/`에서 프로덕션 빌드로 실행한다. 서버를 종료한 뒤 다시 확인할 때는 `pnpm start`를 사용한다.

## 2026-10-15 Technical skills 아이콘 전용 화면

- 사용자 요청에 따라 사용 맥락·역할 문구·프로젝트 링크·안내 문장을 제거하고 분야별 25개 기술 아이콘을 표시한다. 기술명은 호버·포커스·터치 안내와 접근 가능한 버튼 이름으로 제공한다.
- 기존에 묶였던 기술을 개별 아이콘으로 분리했다. Kubernetes·Terraform·AWS·Google Cloud 로고 4개를 기존 Devicon 고정 버전에서 추가하고 출처·갱신 스크립트를 갱신했다.
- 프로덕션 빌드(TypeScript 포함), ESLint, 관련 Playwright 5개 검사 통과. 툴팁 포커스·호버·Escape, 390/768/1440px 가로 넘침, 라이트·다크·모달 접근성, 기존 필터·포커스/스크롤 복원·등장 효과를 확인했다.
- 인앱 브라우저에서 390px·1440px의 실제 아이콘 배열과 로고 23개 로딩을 확인했다. SQL·Vertex AI는 일반 심벌 2개를 사용한다.
- 캡처: `.local/skills-icons.jpg`, `.local/skills-icons-mobile.jpg`. 미리보기: `http://127.0.0.1:3000/#skills`. 운영 배포와 성능 재측정은 이번 변경에 포함하지 않았다.

## 2026-10-16 AI Org Simulation 상세 공개

- 팀 4명·백엔드/인프라와 실행 설정 변경 후 전체 흐름 완료를 사용자 확인으로 반영했다. 공개 소스의 모델·마이그레이션·시드·조회 API를 대조하고 노션 경험·포트폴리오 기록을 갱신했다.
- 랜딩 대표 이미지, 서비스 화면 카루셀 6장, 최상단 Figma 16장 뷰어를 추가했다. 발표 원본은 요청할 때만 로드하고 이전/다음·슬라이드 선택을 제공한다. 실제 Figma 표지와 13번 GCP 슬라이드의 렌더링을 인앱 브라우저에서 확인했다.
- 프로덕션 빌드(Webpack·TypeScript 포함), ESLint, `git diff --check` 통과. Corepack의 pnpm bootstrap 네트워크 제한으로 설치된 `node_modules`의 Next·ESLint·Playwright CLI를 직접 실행했다. 패키지·잠금 파일은 변경하지 않았다.
- 기존 Playwright 14개 통과. 추가 AI Org 검사는 발표의 외부 요청 지연, 1/2/16번 슬라이드 이동, 모달·포커스 복귀, 앞으로 가기·새로고침·직접 주소, 390/1440px의 이미지 6장·확대·가로 넘침·접근성을 검증했다. 테스트의 전역 카루셀 선택을 문서 내부로 수정한 뒤, 실제 슬라이드 변경의 iframe 방문 기록 간섭을 발견해 슬라이드마다 iframe을 다시 마운트했다. 최종 빌드 후 해당 AI Org 검사 통과.
- 데스크톱·390px 화면 확인, 접근성 위반 없음. 캡처: `.local/ai-org-overview.jpg`, `.local/ai-org-mobile.jpg`. 외부 Figma는 자동 검사에서 fixture로 분리하고 실제 원본 렌더링은 브라우저로 검증했다.
- 최종 실제 통합 확인: 홈→AI Org 모달→Figma 13번 GCP 슬라이드 렌더링→브라우저 뒤로가기가 한 번에 `/#projects`로 복귀하고 모달이 닫히는 것을 확인했다.
- 로컬 서버: `http://127.0.0.1:3000/projects/ai-org-simulation`. 운영 배포·Git 커밋·태그·Lighthouse 재측정은 포함하지 않았다.

### 발표 자료 위치 조정

- 사용자 요청에 따라 AI Org의 Figma 발표 자료를 상세 본문 뒤 맨 아래로 이동했다. 상단 카루셀만 Project Overview를 사용하고 발표 영역은 Presentation으로 구분한다.
- Webpack 프로덕션 빌드·TypeScript·변경 파일 ESLint·AI Org Playwright 검사 통과. 모달·독립 페이지 순서, 390/1440px 이미지·확대·슬라이드 탐색·접근성을 확인했다.
- 캡처: `.local/ai-org-presentation-bottom.jpg`. 운영 배포는 포함하지 않는다.

## 2026-10-16 v1.3.0 배포 전 검증

- 범용 개발자 소개·프로젝트 기여/검증 근거 정리, LINC의 업무 경험 배치, 스킬 아이콘과 AI Org 상세·발표·화면을 릴리스에 포함한다.
- 고정된 pnpm 11.19.0으로 `pnpm build`, `pnpm lint`, `pnpm test:e2e` 실행 완료. 프로덕션 빌드·TypeScript·린트·Playwright 15개 모두 통과. 잠금 파일 변경 없음.
- 전체 검사는 프로젝트 필터·URL 모달·뒤로/앞으로·새로고침·포커스/스크롤 복귀, Figma 슬라이드·이미지 확대, 390/768/1440px, 라이트/다크·키보드·접근성·공유 메타데이터·404를 포함한다.
- 공개 운영 도메인은 로그인 없이 HTTP 200이며 canonical이 해당 도메인인 것을 확인했다. 릴리스는 GitHub `main`과 annotated `v1.3.0` 태그를 함께 push하고, Vercel Production의 커밋·성공 상태와 운영 화면을 대조한다.
- 위의 ‘운영 배포 미포함’은 각 로컬 수정 단계의 기록이다. 운영 릴리스 추적은 Git 태그와 GitHub/Vercel 배포 상태를 따른다.

## 2026-10-16 v1.3.1 배포 전 검증

- 사용자 지정 소개 문구로 변경하고, 데스크톱에서 마지막 단어만 별도 줄로 떨어지지 않도록 히어로 제목 최대 크기를 44px에서 42px로 조정했다.
- `pnpm build`(Webpack·TypeScript 포함), `pnpm lint`, 최종 빌드의 `pnpm test:e2e` 15개 모두 통과.
- 390/768/1440px에서 새 문구·줄바꿈·가로 넘침 없음 확인. 캡처: `.local/hero-v1.3.1-local-*.png`.
- GitHub `main`과 annotated `v1.3.1` 태그로 소스 버전을 고정하고 Vercel Production의 커밋·배포 성공 상태 및 공개 화면을 대조한다. Lighthouse 재측정은 포함하지 않는다.

## 2026-10-19 v1.3.2 배포 전 검증

- 마지막 연락처 섹션 제목을 사용자가 선택한 `Contact me`로 변경했다.
- `pnpm build`(Webpack·TypeScript 포함), `pnpm lint`, `pnpm test:e2e` 15개 모두 통과.
- 390/1440px에서 제목·연락처 표시 및 가로 넘침 없음 확인. 캡처: `.local/contact-v1.3.2-local-*.png`.
- GitHub `main`과 annotated `v1.3.2` 태그로 소스를 고정하고 Vercel Production의 커밋·성공 상태 및 공개 화면을 대조한다. Lighthouse 재측정은 포함하지 않는다.
