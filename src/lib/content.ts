export type Strength = '구조 설계' | '검증·운영' | '협업·주도';
export type Evidence = { title: string; src: string; kind: 'image' | 'pdf'; alt?: string };
export type GalleryImage = { src: string; title: string; alt: string; description?: string; previewCrop?: 'top' };
export type Project = {
  slug: string; name: string; eyebrow: string; subtitle: string; summary: string;
  role: string; period?: string; team?: string; tags: Strength[]; technologies: string[];
  availability?: 'published' | 'draft';
  highlights?: {value: string; label: string; detail: string}[]; cardResult?: string;
  cover: string; coverWide: string; accent: string; contributions: string[]; outcome: string;
  flow: { title: string; detail: string }[]; github?: string; awardIds: string[];
  evidence: Evidence[]; gallery?: GalleryImage[]; presentation?: { title: string; src: string; preview: string; pages: number };
};
export type Experience = { id: string; name: string; year?: string; type: string; summary: string; role: string; actions: string[]; outcome: string; gallery?: GalleryImage[]; takeaway?: string; note?: string; projectSlug?: string };
export type Credential = { id: string; name: string; kind: 'certificate' | 'education'; issuer: string; date: string; detail: string; published: boolean; evidence?: Evidence };
export type Award = { id: string; name: string; grade: string; issuer: string; date: string; projectSlug?: string; evidence?: Evidence };
export type Education = { id: string; institution: string; program: string; kind: 'university' | 'community'; period?: string };

export const profile = {
  name: '박찬건', handle: 'coldgeon', role: 'Software Developer',
  github: 'https://github.com/coldgeon',
  email: 'cksrjs4726@gmail.com',
  phone: '010-3327-4726',
  phoneHref: '+821033274726',
  portrait: '/images/park-changeon.jpg',
  description: '업무의 흐름을 이해하고, 자동화와 검증으로 개선을 만드는 개발자 박찬건입니다. LINC 업무 자동화, Nextify 전환·검증, 알림 it 관리자 인증·배포 경험을 소개합니다.',
};

export const education: Education[] = [
  {id:'ulsan',institution:'울산대학교',program:'IT융합학과',kind:'university'},
  {id:'goorm-univ-4',institution:'구름톤 UNIV',program:'4기 · Backend Developer',kind:'community',period:'2025.03 — 2025.07'},
  {id:'umc-7',institution:'전국 IT 연합 동아리 UMC',program:'7기 · Web Frontend',kind:'community',period:'2024.09 — 2025.01'},
  {id:'umc-6',institution:'전국 IT 연합 동아리 UMC',program:'6기 · Web Frontend',kind:'community',period:'2024.03 — 2024.08'},
];

export const projects: Project[] = [
  {
    slug: 'nextify', name: 'Nextify', eyebrow: 'CAPSTONE · TEAM LEAD',
    subtitle: 'React → Next.js 마이그레이션 자동화 도구',
    summary: '5단계 전환 흐름을 설계하고, 오류 검증기와 반복 측정 기반 성능 보고서를 구현했습니다.',
    cardResult: '최종 평가 · 지원 범위 내 30개 프로젝트 모두 빌드 성공',
    highlights: [{value:'30 / 30',label:'최종 평가 빌드 성공',detail:'지원 범위 내 오픈소스 30개 대상 · 팀 결과'},{value:'2 → 18 / 20',label:'프로토타입 빌드 성공',detail:'20개 대상 평가 · 최종 30개 평가와 별도'},{value:'5단계',label:'내가 설계한 전환 흐름',detail:'검증기와 성능 비교 보고서 개발'}],
    role: '팀장 · 전체 흐름 설계 · 검증기 개발', period: '2025 — 2026', team: '4명 → 3명',
    tags: ['구조 설계', '검증·운영', '협업·주도'], technologies: ['React', 'Next.js', 'Node.js', 'ts-morph', 'Gemini API', 'Lighthouse'],
    cover: '/images/projects/nextify/selected-projects-cover.png', coverWide: '/images/nextify-wide.svg', accent: '#e4eae6',
    contributions: ['설계: 5단계·86개 작업을 규칙·AST·제약형 AI·사용자 판단으로 분리', '검증: 타입체크·자동 보정·재검사·오류 증가 시 롤백 구현', '보고서: 동일 환경 3회 측정의 중앙값으로 FCP·LCP·SEO 비교', '팀 리딩: 4→3명 축소 후 주제 전환과 목표·역할 재정렬'],
    outcome: '지원 범위 내 30개 프로젝트 모두 빌드 성공. CLI·Review Extension·성능 보고서를 공개하고 캡스톤 대상·WAVE 최우수상을 수상했습니다.',
    flow: [{title:'프로젝트 분석',detail:'환경·지원 범위 확인'},{title:'5단계 전환',detail:'규칙·제약형 AI'},{title:'검증기',detail:'타입체크·오류 처리'},{title:'보고·리뷰',detail:'성능·Diff 확인'}],
    awardIds: ['capstone-2026','wave-2026'], presentation: {title:'Nextify 발표 자료',src:'/presentations/nextify-final-presentation.pdf',preview:'/images/projects/nextify/presentation-cover.png',pages:16}, evidence: [
      {title:'CLI 실행 화면 보기',src:'/images/projects/nextify/migration-cli.png',kind:'image',alt:'VS Code 터미널에서 Nextify 마이그레이션 명령을 실행한 화면'},
      {title:'검증기 실행 화면 보기',src:'/images/projects/nextify/validator.png',kind:'image',alt:'Nextify가 TypeScript 타입 검증과 빌드 검사를 진행하는 터미널 화면'},
      {title:'성능 보고서 화면 보기',src:'/images/projects/nextify/performance-report.png',kind:'image',alt:'React와 Next.js 변환 결과의 FCP, LCP, SEO와 JavaScript 크기를 비교한 Nextify 성능 보고서'},
      {title:'5단계 설계 보기',src:'/images/projects/nextify/five-step-flow.png',kind:'image',alt:'Environment, Structure, Routing, Assets, Runtime으로 구성된 Nextify 5단계 마이그레이션 설계'},
      {title:'초기 흐름 설계 보기',src:'/images/projects/nextify/flow-whiteboard.png',kind:'image',alt:'Nextify의 단계별 변환과 검증 흐름을 논의하며 작성한 화이트보드 설계 기록'},
    ],
  },
  {
    slug: 'one-action', name: 'ONE ACTION', eyebrow: 'SOFTBANK HACKATHON · CLOUD INFRA',
    subtitle: 'PR 검토부터 AWS·GCP·로컬 배포까지 연결하는 플랫폼',
    summary: 'EKS·GKE 실행 기반, 권한·시크릿·저장소와 외부 접속·로컬 알림 경로를 구성하고 검증했습니다.',
    role: '클라우드 인프라 · 환경 연동', period: '2026.10.05 — 10.11', team: 'Team Crystal · 4명',
    tags: ['구조 설계', '검증·운영', '협업·주도'],
    technologies: ['Kubernetes', 'Terraform', 'AWS EKS', 'GCP GKE', 'Argo CD', 'IAM · RBAC'],
    cardResult: '소프트뱅크 해커톤 예선 최우수상(1등) · 세 환경 배포 시연',
    highlights: [
      {value:'예선 1등',label:'소프트뱅크 해커톤',detail:'2026.10.11 · 팀 공동 성과'},
      {value:'3개 환경',label:'같은 버전 앱 배포 시연',detail:'AWS EKS · GCP GKE · 로컬 Kubernetes'},
      {value:'2 → 3노드',label:'내 담당 실행·저장 기반',detail:'노드 확장 · Pod 교체 후 파일 보존 확인'},
    ],
    cover: '/images/projects/one-action/cover.svg', coverWide: '/images/projects/one-action/service-flow.png', accent: '#eef2f9',
    gallery: [
      {src:"/images/projects/one-action/demo-01-review-list.png",title:"검토 목록",alt:"같은 앱의 PR이 배포 커밋됨·거절됨·막힘·실패로 나뉘는 ONE ACTION 검토 목록",description:"2026.10.11 리허설 · PR별 검토·배포 상태를 한곳에서 확인합니다."},
      {src:"/images/projects/one-action/demo-02-ai-fix.png",title:"검토 결과·배포 진행",alt:"ONE ACTION 검토 보고서와 환경별 배포 단계 및 접힌 AI 처리 이력 화면",description:"검토 보고서와 환경별 배포 단계·AI 처리 이력을 한 화면에서 확인합니다.",previewCrop:"top"},
      {src:"/images/projects/one-action/demo-03-safety-guard.png",title:"가드 차단",alt:"AI 검토는 pass지만 Ingress 삭제 위험을 병합 직전 가드가 차단한 ONE ACTION 화면",description:"AI가 통과시켜도 기존 Ingress 삭제가 예상되면 병합·배포 설정 반영을 막습니다.",previewCrop:"top"},
      {src:"/images/projects/one-action/demo-04-human-decision.png",title:"사람의 결정",alt:"데이터 영속성 변경을 사람이 확인하고 거절한 ONE ACTION 승인 화면",description:"자동으로 결정하기 어려운 변경을 승인 화면으로 넘깁니다. 이 시연에서는 사람이 거절했습니다."},
      {src:"/images/projects/one-action/demo-05-environments.png",title:"세 환경 배포",alt:"서울 AWS·부산 로컬·도쿄 GCP의 앱과 버전을 비교한 ONE ACTION 배포 화면",description:"도쿄를 v2로 수동 승격한 순간입니다. 서울·부산은 아직 v1이며 환경마다 배포 전략이 다릅니다."},
      {src:"/images/projects/one-action/demo-06-health-abort.jpg",title:"헬스체크 자동 중단",alt:"새 버전이 준비되지 않아 중단되고 이전 버전의 두 Pod가 계속 실행되는 로컬 Argo CD 화면",description:"2026.10.12 대회 이후 재현 · 새 버전은 준비에 실패해 중단되고 이전 버전이 서비스를 유지했습니다."},
      {src:"/images/projects/one-action/team-architecture.png",title:"팀 아키텍처 · 설계 자료",alt:"AWS EKS와 GCP·로컬 Kubernetes, 네트워크·저장소·외부 AI 및 초기 CI 도구 구성을 나타낸 팀 아키텍처 설계도",description:"초기 도구 구성을 포함한 설계도입니다. 최종 시연의 CI·이미지 저장소는 GitHub Actions·GHCR을 사용했습니다."},
      {src:"/images/projects/one-action/service-flow.png",title:"ONE ACTION · 서비스 흐름",alt:"PR 검토와 수정·승인, GitOps를 거쳐 서울 EKS·도쿄 GKE·부산 로컬 배포와 결과 확인으로 이어지는 ONE ACTION 흐름",description:"팀이 만든 서비스 전체 흐름. 최종 시연은 AWS 명세 하나를 검토한 뒤 공통 이미지를 세 환경에 배포했습니다."},
      {src:"/images/projects/one-action/my-role.png",title:"내 담당 · 인프라와 환경 연동",alt:"박찬건의 담당인 EKS·GKE 실행 공간, IAM·Secret·EBS, 외부 접속·로컬 알림과 팀원의 API·AI·배포 역할을 구분한 구조",description:"실행 기반·권한·데이터·환경 연결을 맡고, 구현·검사에 AI를 활용하며 범위 판단·결과 확인·팀 인계를 수행했습니다."},
    ],
    contributions: ['실행 기반: Terraform EKS 구성·노드 확장, GKE 접근·중앙 배포 연동', '권한·저장: IAM·RBAC·시크릿 공급·EBS CSI 구성과 허용 범위·데이터 보존 검증', '환경 연결: ALB 외부 접속·GKE 승격 권한·로컬 HTTPS 알림 경로 보완', '협업: 초기 사용자 흐름 제안, 실제 응답·검증 결과·접근 방법을 팀에 인계'],
    outcome: '예선 최우수상(1등)을 수상하고 세 환경에서 같은 버전의 앱을 시연했습니다. 내 담당에서는 외부 HTTP 200·Pod 교체 데이터 보존·권한과 알림 경로를 확인했습니다.',
    flow: [{title:'PR 검토',detail:'규칙·과거 사례·AI 제안'},{title:'수정·승인',detail:'자동 수정·사람 판단·가드'},{title:'GitOps·배포',detail:'EKS · GKE · 로컬'},{title:'결과 확인',detail:'응답·상태·알림'}],
    github: 'https://github.com/Crystal-SBHackathon2026', awardIds: ['softbank-2026-preliminary'], evidence: [],
  },
  {
    slug: 'alarm-u', name: '알림 it', eyebrow: 'AUTHENTICATION · OPERATIONS',
    subtitle: '울산대학교 공지 알림 서비스 · 관리자 기능·백엔드 유지보수',
    summary: '관리자 인증·API 연동·통합 배포를 구현하고, 기존 알림 식별자에 RSA·AES 암호화를 적용했습니다.',
    cardResult: '메모리 + HttpOnly 쿠키 · 새로고침 후 인증 복원 · RTR',
    highlights: [{value:'Memory',label:'액세스 토큰 보관',detail:'로컬스토리지에 남기지 않는 구조'},{value:'HttpOnly + RTR',label:'리프레시 토큰 관리',detail:'쿠키 보관 · 갱신 시 토큰 교체'},{value:'통합 배포',label:'기존 운영 환경에 연결',detail:'Vite · Spring Boot · Nginx'}],
    role: '관리자 인증 · API 연동 · 배포',
    tags: ['구조 설계', '검증·운영'], technologies: ['Vite', 'JavaScript', 'Spring Boot', 'HttpOnly · RTR', 'Nginx'],
    cover: '/images/projects/alarm-it/overview.png', coverWide: '/images/projects/alarm-it/overview.png', accent: '#eef8f6',
    gallery: [
      {src:'/images/projects/alarm-it/gallery-1.jpg',title:'알림 it · 서비스 소개',alt:'울산대학교 공지 알림 서비스 알림 it의 앱 소개와 주요 화면'},
      {src:'/images/projects/alarm-it/gallery-2.png',title:'중요한 공지 알림',alt:'중요한 공지를 푸시 알림으로 확인하는 알림 it 화면'},
      {src:'/images/projects/alarm-it/gallery-3.png',title:'공지 검색',alt:'검색어를 입력해 원하는 공지를 찾는 알림 it 화면'},
      {src:'/images/projects/alarm-it/gallery-4.png',title:'관심 공지 모아보기',alt:'원하는 공지를 북마크하는 알림 it 화면'},
      {src:'/images/projects/alarm-it/gallery-5.png',title:'학부별 공지 확인',alt:'학부별 공지 목록과 카테고리를 보여주는 알림 it 화면'},
    ],
    contributions: ['인증: 메모리 액세스 토큰·HttpOnly 쿠키·RTR·새로고침 후 인증 복원', '관리자 기능: Vite·JavaScript 화면과 Spring Boot API 연동', '배포: 프론트 빌드를 백엔드에 통합해 온프레미스·Nginx 환경에 제공', '데이터 보호: device_id·FCM token에 RSA·AES 하이브리드 암호화 적용'],
    outcome: '관리자 인증·화면·API를 기존 운영 환경에 통합하고 알림 식별자 보호를 보완했습니다.',
    flow: [{title:'로그인·발급',detail:'기존 Spring Boot API'},{title:'토큰 보관',detail:'메모리 · HttpOnly 쿠키'},{title:'새로고침·갱신',detail:'액세스 토큰 재발급 · RTR'},{title:'서비스 제공',detail:'백엔드 통합 · Nginx'}],
    awardIds: [], evidence: [],
  },
  {
    slug: 'linc-automation', name: 'LINC 업무 자동화', eyebrow: 'WORK EXPERIENCE · AUTOMATION',
    subtitle: '두 Excel 파일을 대조해, 비어 있는 기업명을 채우다.',
    summary: '두 Excel 자료를 대조해 기업명을 채우는 Python 프로그램을 만들고, 실제 입력 결과를 직접 확인했습니다.',
    role: '기업명 입력 자동화 · 결과 확인', tags: ['구조 설계', '검증·운영'], technologies: ['Python', 'pandas', 'NumPy', 'Excel'],
    cardResult: '반복 대조·기업명 입력을 프로그램 처리로 전환',
    cover: '/images/linc-automation.svg', coverWide: '/images/linc-automation.svg', accent: '#edf2f5',
    contributions: ['업무 파악: 두 Excel 자료의 기업 정보 대조·입력 과정 분석', '자동화: pandas·NumPy로 해당 기업명을 비교·입력하는 프로그램 구현', '검증: 실제 업무 자료에 실행한 뒤 입력 결과 직접 확인'],
    outcome: '수작업으로 대조·입력하던 기업 명단을 프로그램으로 처리하고 결과를 확인해 업무에 적용했습니다.',
    flow: [{title:'두 파일 확인',detail:'기업 정보 · 기업명 빈칸'},{title:'정보 대조',detail:'해당 기업 찾기'},{title:'기업명 입력',detail:'Python으로 자동화'},{title:'직접 검증',detail:'입력 결과 확인'}],
    awardIds: [], evidence: [],
  },
  {
    slug: 'replendar', name: 'Replendar', eyebrow: 'UMC 7TH · WEB LEAD',
    subtitle: '대학생 과제·일정 관리 및 공유 서비스',
    summary: 'Web 파트의 초기 세팅·일정·PR 리뷰를 맡고, 카카오 로그인·테마 변경·API 연동·배포를 구현했습니다.',
    cardResult: '웹 결과물·GitHub Pages 배포 · UMC 7기 베스트 파트원',
    role: '프론트 팀장 · 초기 세팅 · PR 리뷰',
    tags: ['협업·주도'], technologies: ['React', 'TypeScript', 'Kakao Login', 'GitHub Pages'],
    cover: '/images/projects/replendar/overview.png', coverWide: '/images/projects/replendar/overview.png', accent: '#eef1ee',
    gallery: [
      {src:'/images/projects/replendar/gallery-1.png',title:'Replendar · 서비스 소개',alt:'대학생을 위한 과제 관리 서비스 Replendar의 대표 화면'},
      {src:'/images/projects/replendar/gallery-2.png',title:'브랜드와 서비스 방향',alt:'Replendar 로고와 직관·공유·체계 키워드, 캐릭터 소개'},
      {src:'/images/projects/replendar/gallery-3.png',title:'서비스 정보 구조',alt:'로그인부터 과제·친구·내 정보·환경 설정으로 이어지는 Replendar 정보 구조도'},
      {src:'/images/projects/replendar/gallery-4.png',title:'과제 확인과 등록',alt:'과제 목록, 달력과 과제 등록 기능을 보여주는 Replendar 화면'},
      {src:'/images/projects/replendar/gallery-5.png',title:'내 정보',alt:'프로필과 학습 정보를 확인하는 Replendar 내 정보 화면'},
      {src:'/images/projects/replendar/gallery-6.png',title:'배경 테마 변경',alt:'초록색·파란색·보라색 테마를 적용한 Replendar 화면'},
      {src:'/images/projects/replendar/gallery-7.png',title:'과제 일정 설정',alt:'달력에서 과제 날짜를 선택하는 Replendar 화면'},
    ],
    contributions: ['팀 리딩: 초기 세팅·개발 일정·PR 코드 리뷰와 머지 흐름 관리', '기능 구현: 카카오 로그인·API 연동·전역 테마·지연 로딩·스크롤 인터랙션', '협업: Notion API 명세·파트 및 전체 회의 결정사항 공유', '배포: GitHub Pages로 프론트엔드 결과물 제공'],
    outcome: '웹 기능·배포 결과물과 API·회의 문서를 남겼고 UMC 7기 베스트 파트원을 수상했습니다.',
    flow: [{title:'초기 세팅',detail:'일정·역할 조율'},{title:'화면·인터랙션',detail:'과제·테마 UI'},{title:'로그인·API',detail:'카카오·서버 연동'},{title:'리뷰·배포',detail:'PR · GitHub Pages'}],
    github: 'https://github.com/coldgeon/replendar_release', awardIds: ['umc-7-best-member'], evidence: [
      {title:'카카오 로그인 화면 보기',src:'/images/projects/replendar/kakao-login.png',kind:'image',alt:'Replendar의 카카오 로그인 화면'},
      {title:'서비스 IA 보기',src:'/images/projects/replendar/information-architecture.png',kind:'image',alt:'로그인부터 과제·친구·내 정보·환경 설정으로 이어지는 Replendar 정보 구조도'},
      {title:'테마 변경 화면 보기',src:'/images/projects/replendar/theme-variants.png',kind:'image',alt:'초록색·파란색·보라색 배경 테마를 적용한 Replendar 화면 비교'},
    ],
  },
  {
    slug: 'ai-org-simulation', name: 'AI Org Simulation', eyebrow: 'AI AGENT · BACKEND & INFRA',
    subtitle: 'PRD 분석·팀 추천·가상 회의·리포트 프로토타입',
    summary: 'PDF·세션 API와 AI·SSE·리포트 흐름을 연결하고 Cloud Run 배포·로그 분석을 담당했습니다.',
    role: 'Backend · Infra', availability: 'draft',
    tags: ['구조 설계', '검증·운영'], technologies: ['Python', 'FastAPI', 'Vertex AI', 'Cloud Run', 'Docker'],
    cover: '/images/ai-org-simulation.svg', coverWide: '/images/ai-org-simulation-wide.svg', accent: '#e5e8f0',
    contributions: ['FastAPI 세션 API와 PDF 텍스트 추출 파이프라인 연결', 'Requirements·Shadow Roleplay Agent 실행 환경 구성', '프론트엔드·백엔드 Cloud Run 배포와 권한·로그 설정', '메모리 초과와 장시간 스트림 요청을 분석하고 실행 설정 조정'],
    outcome: 'PDF 입력부터 보고서까지 이어지는 데모와 클라우드 실행 환경을 구성했습니다.',
    flow: [{title:'PDF 기획서',detail:'텍스트 추출'},{title:'요구사항 분석',detail:'Vertex AI'},{title:'팀 매칭·시뮬레이션',detail:'역할별 협업'},{title:'리포트',detail:'결과 정리'}],
    awardIds: [], evidence: [],
  },
];

export const experiences: Experience[] = [
  {id:'doran',name:'도란도란 알고리즘 스터디',year:'2025',type:'STUDY · ORGANIZER',summary:'10주 알고리즘 학습 계획과 개념·풀이를 공유하는 Notion 공간',
    role:'커리큘럼·학습 공간 설계 및 스터디 운영',
    actions:['핵심 알고리즘 8주·심화 2주, 주 2회 학습 운영안 구성','개인 개념 정리 → 발표 → 문제 풀이 → 코드 리뷰로 연결'],
    outcome:'주차별 학습 기록과 서로 설명·리뷰하는 운영 방식 마련.',
    takeaway:'함께 학습할 목표와 설명·리뷰할 기회를 구조로 만들었습니다.',
    gallery:[
      {src:'/images/experiences/doran/gallery-1.png',title:'한곳에 모은 스터디 운영 정보',alt:'도란도란 노션 메인 페이지의 커리큘럼·공지·팀원별 학습 공간',description:'일정, 공지, 문제 목록과 개인 페이지를 한곳에서 찾아볼 수 있도록 구성했습니다.'},
      {src:'/images/experiences/doran/gallery-2.png',title:'주차별 알고리즘 커리큘럼',alt:'날짜와 알고리즘 주제로 구성된 도란도란 커리큘럼 데이터베이스',description:'이코테를 바탕으로 주차마다 공부할 알고리즘과 일정을 정리했습니다.'},
      {src:'/images/experiences/doran/gallery-3.png',title:'각자의 언어로 정리하는 개인 페이지',alt:'박찬건의 도란도란 개인 학습 페이지와 주차별 학습 기록',description:'문제를 풀기 전에 각자 해당 주차의 알고리즘 개념을 자신의 방식으로 정리하도록 했습니다.'},
      {src:'/images/experiences/doran/gallery-4.png',title:'개념 정리에서 발표로',alt:'1주차 그리디 알고리즘 개념을 정리한 노션 문서',description:'정리 후 팀원 중 한 명을 무작위로 선정해 개념을 설명하고, 함께 이해도를 확인했습니다.'},
      {src:'/images/experiences/doran/gallery-5.png',title:'같은 문제를 함께 풀기',alt:'주차별 문제와 풀이 현황을 관리하는 도란도란 문제 데이터베이스',description:'개념 발표 뒤 사전에 공지한 2~3문제를 1~2시간 동안 함께 풀었습니다.'},
      {src:'/images/experiences/doran/gallery-6.png',title:'코드와 풀이 방식 공유',alt:'노션에 공유한 백준 5585번 문제의 Python 풀이 코드',description:'작성한 코드를 노션에 공유하고, 문제를 해결한 사람이 자신의 접근과 풀이 과정을 설명했습니다.'},
    ]},
  {id:'19munpa',name:'19문파 · 공동 학습 공간',year:'2024',type:'STUDY · COLLABORATION',summary:'과목·주차별 강의 자료와 학습 기록을 모은 공동 Notion 워크스페이스',
    role:'공동 학습 방식 제안·운영 및 워크스페이스 구축',
    actions:['과목·주차별 DB 구성과 정리할 내용 분담','분담 정리 → 발표·질의응답 → 기출·예상 문제 토론으로 운영'],
    outcome:'공동 자료를 바탕으로 함께 설명하고 시험을 준비하는 방식 정착.',
    takeaway:'다른 사람에게 설명하며 이해의 빈틈을 확인했습니다.',
    gallery:[
      {src:'/images/experiences/19munpa/gallery-1.png',title:'과목별로 나눈 공동 학습 공간',alt:'학기별 전공 과목 페이지를 모은 19문파 공동 노션 워크스페이스',description:'함께 듣는 전공뿐 아니라 각자가 수강하는 과목도 정리할 수 있도록 과목별 페이지를 만들었습니다.'},
      {src:'/images/experiences/19munpa/gallery-2.png',title:'주차별 학습 데이터베이스',alt:'컴퓨터네트워크 강의 내용을 주차별로 정리한 노션 데이터베이스',description:'각 과목 안에서는 주차별로 강의 내용을 쌓고 필요한 자료를 찾아볼 수 있도록 했습니다.'},
      {src:'/images/experiences/19munpa/gallery-3.png',title:'정리한 사람이 직접 설명하기',alt:'Application Layer 강의 내용을 정리한 19문파 노션 학습 문서',description:'주말이나 일과 후 빈 강의실에 모여 노션 문서를 띄우고, 정리한 사람이 해당 주차 내용을 설명했습니다.'},
      {src:'/images/experiences/19munpa/gallery-4.png',title:'예상 문제 풀이와 자유로운 설명',alt:'시험 전 핵심 내용을 바탕으로 작성한 컴퓨터네트워크 예상 문제 문서',description:'시험 약 2주 전 핵심 내용을 점검하고 생성형 AI로 예상 문제를 구성했습니다. 함께 푼 뒤 먼저 해결한 사람이 자유롭게 설명했습니다.'},
    ]},
  {id:'linc',name:'LINC 사업단 업무 자동화',type:'WORK · AUTOMATION',summary:'두 Excel 명단을 대조해 기업명을 채우는 Python 프로그램',
    role:'기업 명단 비교 업무 및 자동화 프로그램 구현',
    actions:['수작업 대조 과정을 분석하고 pandas·NumPy로 비교·입력 자동화','실제 업무 자료에 실행한 뒤 기업명이 맞게 입력됐는지 직접 확인'],
    outcome:'반복 명단 대조·입력을 프로그램 처리로 전환.',
    takeaway:'업무의 목적과 결과 확인 기준을 먼저 이해해야 했습니다.',
    note:'원본 코드는 남아 있지 않아 당시 경험을 바탕으로 소개합니다. 시간 단축 수치는 기재하지 않았습니다.',projectSlug:'linc-automation'},
];

export const credentials: Credential[] = [
  {id:'engineer-information-processing',name:'정보처리기사',kind:'certificate',issuer:'한국산업인력공단',date:'2026.09.11',detail:'국가기술자격 · 소프트웨어',published:true},
  {id:'sqld',name:'SQLD · SQL 개발자',kind:'certificate',issuer:'한국데이터산업진흥원',date:'2023.07.07',detail:'데이터베이스 · SQL',published:true},
  {id:'topcit',name:'TOPCIT',kind:'certificate',issuer:'정보통신기획평가원',date:'2026.05.16',detail:'IT 역량 평가 · 537점',published:true},
  {id:'sap-abap-intermediate',name:'SAP 클래식 ABAP 중급 개발자 과정',kind:'education',issuer:'SAP코리아 교육센터',date:'2026.01.05 — 2026.01.27',detail:'수료 · 71.5시간',published:true,evidence:{title:'중급 과정 수료증 보기',src:'/evidence/sap-abap-intermediate.png',kind:'image',alt:'박찬건의 SAP 인재양성 교육과정 클래식 ABAP 중급 개발자 과정 수료증. 2026년 1월 5일부터 1월 27일까지 총 71.5시간.'}},
  {id:'sap-abap-basic',name:'SAP 클래식 ABAP 기초 개발자 과정',kind:'education',issuer:'SAP코리아 교육센터',date:'2025.09.26 — 2025.12.26',detail:'수료 · 48시간',published:true,evidence:{title:'기초 과정 수료증 보기',src:'/evidence/sap-abap-basic.png',kind:'image',alt:'박찬건의 SAP 인재양성 교육과정 클래식 ABAP 기초 개발자 과정 수료증. 2025년 9월 26일부터 12월 26일까지 총 48시간.'}},
];

export const awards: Award[] = [
  {id:'softbank-2026-preliminary',name:'2026 소프트뱅크 채용 연계 해커톤 예선',grade:'최우수상',issuer:'SoftBank Hackathon 2026 · Progate & KOREC · 예선 1등',date:'2026.10.11',projectSlug:'one-action',evidence:{title:'소프트뱅크 예선 최우수상 상장 보기',src:'/evidence/softbank-hackathon-2026.png',kind:'image',alt:'SoftBank Hackathon 2026 예선 1등 상장. Team Crystal의 Park Chan-geon에게 수여, 대회 기간 2026년 10월 10일부터 11일까지.'}},
  {id:'wave-2026',name:'WAVE 2026 AI/SW 아이디어 피칭대회',grade:'최우수상',issuer:'울산세계미래산업박람회 · WAVE 2026 공동주관',date:'2026.09.11',projectSlug:'nextify'},
  {id:'capstone-2026',name:'2026 울산대학교 캡스톤디자인 경진대회',grade:'대상',issuer:'울산대학교 SW중심대학사업단',date:'2026.07.14',projectSlug:'nextify',evidence:{title:'캡스톤 대상 상장 보기',src:'/evidence/capstone-2026.jpg',kind:'image',alt:'2026년 7월 14일 울산대학교 SW중심대학사업단이 수여한 캡스톤디자인 경진대회 대상 상장. 팀 17조, 박찬건 외 팀원 2명.'}},
  {id:'umc-7-best-member',name:'UMC 7기 베스트 파트원상',grade:'베스트 파트원',issuer:'University MakeUs Challenge · UMC 7기',date:'2025.02.21',projectSlug:'replendar',evidence:{title:'UMC 7기 베스트 파트원 상장 보기',src:'/evidence/umc-7-best-member.jpg',kind:'image',alt:'University MakeUs Challenge UMC 7기 베스트 파트원상. 울산대학교 소속 박찬건의 Web 파트 활동을 인정한 상장으로, 활동 기간은 2024년 9월 16일부터 12월 27일까지이며 발급일은 2025년 2월 21일.'}},
];

export const skillGroups: {name:string;icon:string;items:{name:string;icon:string;project?:string}[]}[] = [
  {name:'Frontend',icon:'frontend',items:[{name:'React',icon:'react',project:'replendar'},{name:'TypeScript',icon:'typescript',project:'replendar'},{name:'Next.js',icon:'nextjs',project:'nextify'},{name:'Vite',icon:'vitejs',project:'alarm-u'},{name:'styled-components',icon:'styledcomponents'}]},
  {name:'Backend & Data',icon:'database',items:[{name:'Java',icon:'java'},{name:'Spring Boot',icon:'spring',project:'alarm-u'},{name:'MySQL',icon:'mysql'},{name:'JPA',icon:'jpa'},{name:'Python',icon:'python',project:'linc-automation'},{name:'FastAPI',icon:'fastapi'},{name:'PostgreSQL',icon:'postgresql'}]},
  {name:'Cloud & Deployment',icon:'cloud',items:[{name:'Docker',icon:'docker'},{name:'Cloud Run',icon:'cloudrun'},{name:'Nginx',icon:'nginx',project:'alarm-u'}]},
  {name:'Collaboration & Quality',icon:'tools',items:[{name:'Git',icon:'git',project:'replendar'},{name:'GitHub',icon:'github',project:'replendar'},{name:'Notion',icon:'notion',project:'replendar'},{name:'Lighthouse',icon:'lighthouse',project:'nextify'}]},
];

export const navigation = [
  {id:'hero',label:'Home'}, {id:'about',label:'About'}, {id:'projects',label:'Projects'},
  {id:'skills',label:'Skills'}, {id:'experience',label:'Experience'},
  {id:'credentials',label:'Credentials'}, {id:'awards',label:'Awards'}, {id:'contact',label:'Contact'},
];
export function getProject(slug: string) { return projects.find(project => project.slug === slug); }
export function siteUrl() {
  const origin = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');
  return new URL(origin);
}
