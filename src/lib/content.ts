export type Strength = '구조 설계' | '검증·운영' | '협업·주도';
export type Evidence = { title: string; src: string; kind: 'image' | 'pdf'; alt?: string };
export type GalleryImage = { src: string; title: string; alt: string; description?: string };
export type Project = {
  slug: string; name: string; eyebrow: string; subtitle: string; summary: string;
  role: string; period?: string; team?: string; tags: Strength[]; technologies: string[];
  availability?: 'published' | 'draft';
  cover: string; coverWide: string; accent: string; contributions: string[]; outcome: string;
  flow: { title: string; detail: string }[]; github?: string; awardIds: string[];
  evidence: Evidence[]; gallery?: GalleryImage[]; presentation?: { title: string; src: string; preview: string; pages: number };
};
export type Experience = { id: string; name: string; year?: string; type: string; summary: string; actions: string[]; gallery?: GalleryImage[]; takeaway?: string };
export type Credential = { id: string; name: string; kind: 'certificate' | 'education'; issuer: string; date: string; detail: string; published: boolean; evidence?: Evidence };
export type Award = { id: string; name: string; grade: string; issuer: string; date: string; projectSlug?: string; evidence?: Evidence };
export type Education = { id: string; institution: string; program: string; kind: 'university' | 'community'; period?: string };

export const profile = {
  name: '박찬건', handle: 'coldgeon', role: 'Web Developer',
  github: 'https://github.com/coldgeon',
  email: 'cksrjs4726@gmail.com',
  phone: '010-3327-4726',
  phoneHref: '+821033274726',
  portrait: '/images/park-changeon.jpg',
  description: '문제를 발견하고, 함께 해결할 구조를 만드는 개발자 박찬건입니다.',
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
    subtitle: '복잡한 마이그레이션을 검증 가능한 자동화 과정으로 바꾸다.',
    summary: 'React 프로젝트를 Next.js로 전환하는 반복 작업을 5단계 파이프라인으로 구조화했습니다. 팀장으로 방향 전환과 전체 흐름을 설계하고, 타입체크 검증기와 성능 비교 보고서를 개발했습니다.',
    role: '팀장 · 전체 흐름 설계 · 검증기 개발', period: '2025 — 2026', team: '4명 → 3명',
    tags: ['구조 설계', '검증·운영', '협업·주도'], technologies: ['React', 'Next.js', 'Node.js', 'ts-morph', 'Gemini API', 'Lighthouse'],
    cover: '/images/projects/nextify/selected-projects-cover.png', coverWide: '/images/nextify-wide.svg', accent: '#e4eae6',
    contributions: ['Next.js 실행 구조를 기준으로 5단계·86개 세부 작업의 전환 흐름 설계', '규칙 기반 자동화·프롬프트 제약형 AI·사용자 개입을 결합한 처리 구조 설계', '타입체크를 단계별로 실행해 오류를 선제 처리하는 검증기 개발', '동일 환경에서 3회 측정한 중앙값으로 FCP·LCP·SEO를 비교하는 보고서 개발', '팀 축소 이후 주제를 전환하고 팀의 목표와 역할 조율'],
    outcome: '지원 범위 내 오픈소스 30개 평가에서 30개 모두 빌드에 성공했고, 평균 FCP 38.3%·LCP 18.7%·SEO 7.6% 개선과 마이그레이션 시간 78.4% 단축을 기록했습니다. CLI는 npm에, Review Extension은 VS Code Marketplace에 배포했습니다.',
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
    slug: 'ai-org-simulation', name: 'AI Org Simulation', eyebrow: 'AI AGENT · BACKEND & INFRA',
    subtitle: '프로젝트 기록을 정리하고 있습니다.',
    summary: '역할과 구현 내용을 검토해 포트폴리오용 프로젝트 기록으로 정리 중입니다.',
    role: '정리 중', availability: 'draft',
    tags: ['구조 설계', '검증·운영'], technologies: ['Python', 'FastAPI', 'Vertex AI', 'Cloud Run', 'Docker'],
    cover: '/images/ai-org-simulation.svg', coverWide: '/images/ai-org-simulation-wide.svg', accent: '#e5e8f0',
    contributions: ['FastAPI 세션 API와 PDF 텍스트 추출 파이프라인 연결', 'Requirements·Shadow Roleplay Agent 실행 환경 구성', '프론트엔드·백엔드 Cloud Run 배포와 권한·로그 설정', '메모리 초과와 장시간 스트림 요청을 분석하고 실행 설정 조정'],
    outcome: 'PDF 입력부터 보고서까지 이어지는 데모와 클라우드 실행 환경을 구성했습니다.',
    flow: [{title:'PDF 기획서',detail:'텍스트 추출'},{title:'요구사항 분석',detail:'Vertex AI'},{title:'팀 매칭·시뮬레이션',detail:'역할별 협업'},{title:'리포트',detail:'결과 정리'}],
    awardIds: [], evidence: [],
  },
  {
    slug: 'alarm-u', name: 'AlarmIT', eyebrow: 'MAINTENANCE · BACKEND',
    subtitle: '기존 서비스의 취약점을 발견하고 운영 구조를 다듬다.',
    summary: '이미 운영 중인 알림 서비스를 유지보수하며, 노출될 수 있던 device_id와 FCM token에 RSA·AES 하이브리드 암호화를 적용했습니다. 관리자 페이지를 구현하고, 온프레미스·Nginx 환경에 맞춰 프론트엔드 빌드를 백엔드 배포 흐름에 통합했습니다.',
    role: '백엔드 유지보수 · 관리자 페이지',
    tags: ['검증·운영'], technologies: ['RSA · AES', 'FCM', 'Nginx', 'On-premise'],
    cover: '/images/projects/alarm-it/overview.png', coverWide: '/images/projects/alarm-it/overview.png', accent: '#eef8f6',
    gallery: [
      {src:'/images/projects/alarm-it/gallery-1.jpg',title:'알림it · 서비스 소개',alt:'울산대학교 공지 알림 서비스 알림it의 앱 소개와 주요 화면'},
      {src:'/images/projects/alarm-it/gallery-2.png',title:'중요한 공지 알림',alt:'중요한 공지를 푸시 알림으로 확인하는 알림it 화면'},
      {src:'/images/projects/alarm-it/gallery-3.png',title:'공지 검색',alt:'검색어를 입력해 원하는 공지를 찾는 알림it 화면'},
      {src:'/images/projects/alarm-it/gallery-4.png',title:'관심 공지 모아보기',alt:'원하는 공지를 북마크하는 알림it 화면'},
      {src:'/images/projects/alarm-it/gallery-5.png',title:'학부별 공지 확인',alt:'학부별 공지 목록과 카테고리를 보여주는 알림it 화면'},
    ],
    contributions: ['로그인 기능 부재로 노출될 수 있던 device_id·FCM token에 RSA·AES 하이브리드 암호화 적용', '관리자 페이지의 화면과 백엔드 연동 구현', '온프레미스·Nginx 환경을 분석해 프론트엔드 빌드를 백엔드 배포 흐름에 통합', '기존 서비스 구조를 파악한 뒤 보안·관리 기능의 변경 범위 정리'],
    outcome: '기존 서비스 유지보수에서 보안 취약점 대응, 관리자 기능, 배포 구조를 함께 다루며 기능 구현 이후의 운영 관점까지 확장했습니다.',
    flow: [{title:'기존 구조 파악',detail:'서비스·배포 흐름 확인'},{title:'노출 데이터 식별',detail:'device_id · FCM token'},{title:'보호·관리 기능',detail:'암호화 · 관리자 페이지'},{title:'통합 배포',detail:'Nginx · On-premise'}],
    awardIds: [], evidence: [],
  },
  {
    slug: 'replendar', name: 'Replendar', eyebrow: 'UMC 7TH · WEB LEAD',
    subtitle: '대학생의 과제와 일정을, 팀의 개발 흐름과 함께 연결하다.',
    summary: '대학생이 과제의 마감일과 진행 상태를 한눈에 관리하고 친구와 공유하는 서비스입니다. 프론트 팀장으로 초기 세팅과 개발 일정, PR 리뷰를 맡고 카카오 로그인부터 테마 변경, 배포까지 구현했습니다.',
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
    contributions: ['프론트엔드 프로젝트 초기 세팅과 개발 일정 조율', 'Pull Request 병합 전 코드 리뷰와 Web 파트 작업 흐름 관리', '카카오 소셜 로그인과 백엔드 API 연동', '지연 로딩, 스크롤 사이드바와 반응형 인터랙션 구현', '전역 상태를 활용한 배경 테마 변경과 GitHub Pages 배포', '노션으로 API 명세·파트 회의·전체 회의 기록 관리'],
    outcome: '과제·일정 관리 서비스를 GitHub Pages로 배포하고, 코드 리뷰와 API·회의 문서를 연결해 Web 파트의 개발 흐름을 운영했습니다.',
    flow: [{title:'초기 세팅',detail:'일정·역할 조율'},{title:'화면·인터랙션',detail:'과제·테마 UI'},{title:'로그인·API',detail:'카카오·서버 연동'},{title:'리뷰·배포',detail:'PR · GitHub Pages'}],
    github: 'https://github.com/coldgeon/replendar_release', awardIds: ['umc-7-best-member'], evidence: [
      {title:'카카오 로그인 화면 보기',src:'/images/projects/replendar/kakao-login.png',kind:'image',alt:'Replendar의 카카오 로그인 화면'},
      {title:'서비스 IA 보기',src:'/images/projects/replendar/information-architecture.png',kind:'image',alt:'로그인부터 과제·친구·내 정보·환경 설정으로 이어지는 Replendar 정보 구조도'},
      {title:'테마 변경 화면 보기',src:'/images/projects/replendar/theme-variants.png',kind:'image',alt:'초록색·파란색·보라색 배경 테마를 적용한 Replendar 화면 비교'},
    ],
  },
];

export const experiences: Experience[] = [
  {id:'doran',name:'도란도란 알고리즘 스터디',year:'2025',type:'STUDY · ORGANIZER',summary:'개념을 정리하고 설명한 뒤, 함께 문제를 풀고 서로의 풀이를 리뷰하는 학습 흐름을 설계했습니다.',
    actions:['이코테를 바탕으로 10주 커리큘럼과 주 2회 학습 운영안 구성','주차별 문제·일정·공지와 팀원별 개념 정리 페이지를 노션으로 관리','개념 발표 후 미리 공지한 2~3문제를 함께 풀고, 코드를 공유하며 풀이 방식 리뷰'],
    takeaway:'함께 공부를 이어가려면 주차별 목표와 각자가 설명할 기회, 서로의 풀이를 확인하는 구조가 필요하다는 점을 배웠습니다.',
    gallery:[
      {src:'/images/experiences/doran/gallery-1.png',title:'한곳에 모은 스터디 운영 정보',alt:'도란도란 노션 메인 페이지의 커리큘럼·공지·팀원별 학습 공간',description:'일정, 공지, 문제 목록과 개인 페이지를 한곳에서 찾아볼 수 있도록 구성했습니다.'},
      {src:'/images/experiences/doran/gallery-2.png',title:'주차별 알고리즘 커리큘럼',alt:'날짜와 알고리즘 주제로 구성된 도란도란 커리큘럼 데이터베이스',description:'이코테를 바탕으로 주차마다 공부할 알고리즘과 일정을 정리했습니다.'},
      {src:'/images/experiences/doran/gallery-3.png',title:'각자의 언어로 정리하는 개인 페이지',alt:'박찬건의 도란도란 개인 학습 페이지와 주차별 학습 기록',description:'문제를 풀기 전에 각자 해당 주차의 알고리즘 개념을 자신의 방식으로 정리하도록 했습니다.'},
      {src:'/images/experiences/doran/gallery-4.png',title:'개념 정리에서 발표로',alt:'1주차 그리디 알고리즘 개념을 정리한 노션 문서',description:'정리 후 팀원 중 한 명을 무작위로 선정해 개념을 설명하고, 함께 이해도를 확인했습니다.'},
      {src:'/images/experiences/doran/gallery-5.png',title:'같은 문제를 함께 풀기',alt:'주차별 문제와 풀이 현황을 관리하는 도란도란 문제 데이터베이스',description:'개념 발표 뒤 사전에 공지한 2~3문제를 1~2시간 동안 함께 풀었습니다.'},
      {src:'/images/experiences/doran/gallery-6.png',title:'코드와 풀이 방식 공유',alt:'노션에 공유한 백준 5585번 문제의 Python 풀이 코드',description:'작성한 코드를 노션에 공유하고, 문제를 해결한 사람이 자신의 접근과 풀이 과정을 설명했습니다.'},
    ]},
  {id:'19munpa',name:'19문파 · 공동 학습 공간',year:'2024',type:'STUDY · COLLABORATION',summary:'친구들과 과목별 자료를 모으고, 정리한 사람이 설명하며 함께 이해하는 공동 학습 공간을 만들었습니다.',
    actions:['공통 전공과 개별 수강 과목을 페이지로 나누고 주차별 학습 데이터베이스 구성','각자 맡은 내용을 정리한 뒤 빈 강의실에서 발표·질의응답 진행','시험 전 핵심 내용을 점검하고 예상 문제를 함께 풀며 먼저 해결한 사람이 풀이 설명'],
    takeaway:'배운 내용을 다른 사람에게 설명하는 과정에서 이해의 빈틈을 발견했습니다. 노션을 개인 필기에서 공동 학습의 기반으로 확장한 경험입니다.',
    gallery:[
      {src:'/images/experiences/19munpa/gallery-1.png',title:'과목별로 나눈 공동 학습 공간',alt:'학기별 전공 과목 페이지를 모은 19문파 공동 노션 워크스페이스',description:'함께 듣는 전공뿐 아니라 각자가 수강하는 과목도 정리할 수 있도록 과목별 페이지를 만들었습니다.'},
      {src:'/images/experiences/19munpa/gallery-2.png',title:'주차별 학습 데이터베이스',alt:'컴퓨터네트워크 강의 내용을 주차별로 정리한 노션 데이터베이스',description:'각 과목 안에서는 주차별로 강의 내용을 쌓고 필요한 자료를 찾아볼 수 있도록 했습니다.'},
      {src:'/images/experiences/19munpa/gallery-3.png',title:'정리한 사람이 직접 설명하기',alt:'Application Layer 강의 내용을 정리한 19문파 노션 학습 문서',description:'주말이나 일과 후 빈 강의실에 모여 노션 문서를 띄우고, 정리한 사람이 해당 주차 내용을 설명했습니다.'},
      {src:'/images/experiences/19munpa/gallery-4.png',title:'예상 문제 풀이와 자유로운 설명',alt:'시험 전 핵심 내용을 바탕으로 작성한 컴퓨터네트워크 예상 문제 문서',description:'시험 약 2주 전 핵심 내용을 점검하고 생성형 AI로 예상 문제를 구성했습니다. 함께 푼 뒤 먼저 해결한 사람이 자유롭게 설명했습니다.'},
    ]},
  {id:'linc',name:'LINC 사업단 · 업무 자동화',type:'WORK · AUTOMATION',summary:'반복되는 Excel 기업 명단 비교 업무를 Python으로 개선했습니다.',actions:['자료 비교 기준을 파악하고 pandas·NumPy로 자동화','처리 결과를 검증하고 누락을 확인하는 업무 흐름 개선']},
];

export const credentials: Credential[] = [
  {id:'engineer-information-processing',name:'정보처리기사',kind:'certificate',issuer:'한국산업인력공단',date:'2026.09.11',detail:'국가기술자격 · 소프트웨어',published:true},
  {id:'sqld',name:'SQLD · SQL 개발자',kind:'certificate',issuer:'한국데이터산업진흥원',date:'2023.07.07',detail:'데이터베이스 · SQL',published:true},
  {id:'topcit',name:'TOPCIT',kind:'certificate',issuer:'정보통신기획평가원',date:'2026.05.16',detail:'IT 역량 평가 · 537점',published:true},
  {id:'sap-abap-intermediate',name:'SAP 클래식 ABAP 중급 개발자 과정',kind:'education',issuer:'SAP코리아 교육센터',date:'2026.01.05 — 2026.01.27',detail:'수료 · 71.5시간',published:true,evidence:{title:'중급 과정 수료증 보기',src:'/evidence/sap-abap-intermediate.png',kind:'image',alt:'박찬건의 SAP 인재양성 교육과정 클래식 ABAP 중급 개발자 과정 수료증. 2026년 1월 5일부터 1월 27일까지 총 71.5시간.'}},
  {id:'sap-abap-basic',name:'SAP 클래식 ABAP 기초 개발자 과정',kind:'education',issuer:'SAP코리아 교육센터',date:'2025.09.26 — 2025.12.26',detail:'수료 · 48시간',published:true,evidence:{title:'기초 과정 수료증 보기',src:'/evidence/sap-abap-basic.png',kind:'image',alt:'박찬건의 SAP 인재양성 교육과정 클래식 ABAP 기초 개발자 과정 수료증. 2025년 9월 26일부터 12월 26일까지 총 48시간.'}},
];

export const awards: Award[] = [
  {id:'wave-2026',name:'WAVE 2026 AI/SW 아이디어 피칭대회',grade:'최우수상',issuer:'울산세계미래산업박람회 · WAVE 2026 공동주관',date:'2026.09.11',projectSlug:'nextify'},
  {id:'capstone-2026',name:'2026 울산대학교 캡스톤디자인 경진대회',grade:'대상',issuer:'울산대학교 SW중심대학사업단',date:'2026.07.14',projectSlug:'nextify',evidence:{title:'캡스톤 대상 상장 보기',src:'/evidence/capstone-2026.jpg',kind:'image',alt:'2026년 7월 14일 울산대학교 SW중심대학사업단이 수여한 캡스톤디자인 경진대회 대상 상장. 팀 17조, 박찬건 외 팀원 2명.'}},
  {id:'umc-7-best-member',name:'UMC 7기 베스트 파트원상',grade:'베스트 파트원',issuer:'University MakeUs Challenge · UMC 7기',date:'2025.02.21',projectSlug:'replendar',evidence:{title:'UMC 7기 베스트 파트원 상장 보기',src:'/evidence/umc-7-best-member.jpg',kind:'image',alt:'University MakeUs Challenge UMC 7기 베스트 파트원상. 울산대학교 소속 박찬건의 Web 파트 활동을 인정한 상장으로, 활동 기간은 2024년 9월 16일부터 12월 27일까지이며 발급일은 2025년 2월 21일.'}},
  {id:'ctl-2024',name:'CTL 학습공모전',grade:'동상',issuer:'교내 CTL · 디지털 학습도구 활용 사례',date:'2024'},
];

export const skillGroups: {name:string;icon:string;items:{name:string;icon:string;project?:string}[]}[] = [
  {name:'Frontend',icon:'frontend',items:[{name:'React',icon:'react',project:'replendar'},{name:'TypeScript',icon:'typescript',project:'replendar'},{name:'Next.js',icon:'nextjs',project:'nextify'},{name:'Vite',icon:'vitejs'},{name:'styled-components',icon:'styledcomponents'}]},
  {name:'Backend & Data',icon:'database',items:[{name:'Java',icon:'java'},{name:'Spring Boot',icon:'spring'},{name:'MySQL',icon:'mysql'},{name:'JPA',icon:'jpa'},{name:'Python',icon:'python'},{name:'FastAPI',icon:'fastapi'},{name:'PostgreSQL',icon:'postgresql'}]},
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
