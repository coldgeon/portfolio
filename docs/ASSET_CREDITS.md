# 기술 아이콘 출처

## AI Org Simulation · 2026-10-16

- `public/images/projects/ai-org-simulation/`: 사용자 경험정리의 서비스 스크린샷 6장. 랜딩·PRD 입력·PM 설정·팀 선택·역할극·리포트 순서로 원본을 보관하고, 랜딩 이미지를 대표 사진으로 사용한다.
- 출처: [AI Org Simulation 경험정리](https://app.notion.com/p/3d8d45b9a2d68119aac0fece86677e04). 화면에 표시된 점수·인원은 시연 데이터이며 프로젝트 성과나 개발 팀 규모로 사용하지 않는다.
- [Figma 팀 최종 발표 자료](https://www.figma.com/design/XBCaez1b86vBYquhEl56gB/Google-Cloud-AI-Agent-Challenge?node-id=251-1896): PPT/PDF 사본으로 가장하지 않고 원본 링크와 요청 시 불러오는 공식 임베드로 제공한다. 설계·기대 효과와 실제 구현 범위를 본문에서 구분한다.

## 기술 로고

- 기술 로고 21개: [Devicon](https://github.com/devicons/devicon), MIT. Spring Boot는 Spring, AWS EKS·GCP GKE는 각 클라우드 제공사의 로고를 사용합니다.
- Lighthouse 로고: [GoogleChrome/lighthouse](https://github.com/GoogleChrome/lighthouse/blob/main/assets/lighthouse-logo.svg), Apache-2.0.
- JPA: 포트폴리오에서 작성한 데이터베이스 심벌. 특정 JPA 구현체의 로고로 표시하지 않습니다.
- SQL·Vertex AI: Lucide의 Database·Sparkles 일반 심벌. 특정 제품의 공식 로고로 표시하지 않습니다.

2026-10-15: Kubernetes·Terraform·AWS·Google Cloud 로고 4개는 기존 Devicon과 동일한 고정 커밋에서 추가했습니다. 기술명을 가리는 아이콘 전용 배치에서도 호버·포커스·터치 안내와 버튼의 접근 가능한 이름으로 각 기술을 구분합니다.

원본 SVG와 라이선스는 `public/icons/`, 파일별 원본 주소와 커밋은 `public/icons/sources.json`에 보관합니다. 브랜드 이미지는 색상 변형 없이 흰색 배경 위에 표시합니다. 기술명이 옆에 있어 이미지의 대체 텍스트는 비워 중복 낭독을 방지합니다.

아이콘 갱신: `node scripts/sync-skill-icons.mjs`. 갱신 후 화면과 출처 파일을 함께 검토합니다. JPA 심벌은 외부 다운로드 대상이 아닙니다.

## ONE ACTION · 2026-10-13

- `public/images/projects/one-action/service-flow.png`, `my-role.png`: 사용자의 Notion ‘ONE ACTION — 프로젝트와 내 기여’에 첨부된 서비스·역할 설명 이미지의 공개용 사본.
- `public/evidence/softbank-hackathon-2026.png`: 사용자 수상 DB의 소프트뱅크 해커톤 예선 1등 상장 사본.
- `public/images/projects/one-action/cover.svg`: 포트폴리오에서 작성한 서비스 흐름 요약 커버. 실제 앱 화면으로 표시하지 않음.
- `public/images/projects/one-action/selected-projects-cover.png`: 사용자가 2026-10-14에 제공한 세 환경 배포 시연 화면. ONE ACTION 카드 대표 이미지로 사용하며 원본 전체 비율을 유지.
- `public/images/projects/one-action/demo-01-review-list.png` ~ `demo-06-health-abort.jpg`: [Team Crystal DEMO.md](https://github.com/Crystal-SBHackathon2026/.github/blob/962730edad33ed522543a91262779a18d80f3ec3/profile/DEMO.md)의 시연 사진 6장. 커밋 `962730edad33ed522543a91262779a18d80f3ec3`의 `profile/demo` 원본을 순서대로 보관. 긴 화면은 카루셀 미리보기만 상단 중심으로 표시하며 확대에서는 원본 전체를 표시.
- `public/images/projects/one-action/team-architecture.png`: 사용자가 첨부한 팀 아키텍처 원본 사본. 초기 GitLab·Jenkins·Harbor 구성이 포함된 설계 자료이며 최종 시연의 GitHub Actions·GHCR 구성과 구분.
