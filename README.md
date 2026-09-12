# coldgeon · 박찬건 포트폴리오

Next.js App Router, TypeScript, Tailwind CSS, Motion, Radix UI, MDX로 만든 개발자 포트폴리오입니다. 노션에서 검토한 내용만 사이트에 반영합니다.

## 실행

Node.js 22 이상과 pnpm 11을 사용합니다.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm start
```

## 콘텐츠 수정

- `src/lib/content.ts`: 프로젝트·경험·자격·교육·수상·연락처와 메뉴
- `src/content/`: 프로젝트별 MDX 사례 문서. 모달과 상세 페이지가 같은 문서를 사용합니다.
- `public/images/`: 프로젝트 커버와 공개 가능한 서비스 화면입니다.
- `profile.portrait`와 `education`: About me 프로필 사진과 학력·교육 활동 이력. 노션 사진 사본은 `public/images/park-changeon.jpg`입니다.
- `skillGroups[].items[].icon`: `public/icons/`에 저장한 기술별 SVG 파일명. 아이콘 출처는 [에셋 크레딧](docs/ASSET_CREDITS.md)에 기록합니다.

프로젝트를 추가할 때 콘텐츠 데이터, MDX 문서와 `ProjectDocument`의 문서 매핑을 함께 추가합니다. `Credential.published`가 true인 기록만 표시합니다. SAP 기초·중급 과정은 수료증의 기관·교육 기간·시간을 확인해 각각 공개했습니다.

MDX의 `<CaseStudy>`는 문제 해결 아코디언, `<Outcome />`은 해당 프로젝트의 결과·증빙을 표시합니다. 문서는 협업 사례 → `<Outcome />` → 회고 순서로 마무리합니다.

증빙은 공개용으로 준비한 이미지를 `public/evidence/`에 넣고 `{ title, src, kind: 'image', alt }`를 항목의 `evidence`에 연결합니다. PDF는 `kind: 'pdf'`로 지정합니다. 노션 첨부파일의 만료되는 URL을 그대로 붙이지 않습니다. 파일이 없는 항목에는 증빙 버튼을 표시하지 않습니다.

## 라우팅

홈의 프로젝트 링크는 Next.js Intercepting/Parallel Routes로 상세 모달을 엽니다. URL 직접 접속·새로고침은 독립 문서로 렌더링됩니다. 기본 모달 슬롯과 catch-all을 통해 다른 화면으로 이동할 때 열린 모달을 정리합니다.

## 검증

```sh
pnpm lint
pnpm typecheck
pnpm build
pnpm test:e2e
pnpm audit:performance
```

Playwright는 설치된 Chrome을 사용하며 3000번 포트에서 프로덕션 서버를 시작하거나 기존 서버를 재사용합니다. Lighthouse는 프로덕션 서버를 대상으로 측정합니다.

최근 결과: 핵심 테스트 8개 통과, 모바일 Lighthouse 성능 95 / 접근성 100 / 권장사항 100 / SEO 100. 측정 환경과 범위는 [검증 기록](docs/VALIDATION.md)을 참고하세요.

`pnpm audit:performance`는 서버가 실행 중일 때 사용하며 결과를 `.local/lighthouse-mobile.html`과 JSON으로 저장합니다. Windows에서 임시 Chrome 프로필 삭제 시 생기는 오류를 피하도록 독립 프로필도 `.local` 아래에 유지합니다. Next.js 개발·빌드는 Windows MDX 처리의 호환성을 위해 Webpack을 사용합니다.

## Vercel 배포

1. GitHub 저장소에 코드를 올리고 Vercel에서 해당 저장소를 Import합니다.
2. Framework Preset은 Next.js, Install Command는 `pnpm install --frozen-lockfile`, Build Command는 `pnpm build`입니다.
3. `NEXT_PUBLIC_SITE_URL`에 실제 운영 주소를 설정합니다. 미설정 시 Vercel의 production URL 환경변수를 사용하고, 로컬에서는 localhost를 사용합니다.
4. Preview에서 프로젝트 모달·직접 접속·다크 모드·모바일 메뉴를 확인한 뒤 운영에 반영합니다.

실행 중 Notion API나 별도 DB는 필요하지 않습니다. 비밀키를 브라우저 번들에 넣지 않습니다.
