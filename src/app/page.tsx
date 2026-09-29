import {ArrowUpRight,Github,Mail,Layers,ScanLine,UsersRound,Monitor,Database,Cloud,Workflow,ArrowDown,GraduationCap} from 'lucide-react';
import Image from 'next/image';
import {profile,experiences,awards,projects,skillGroups,education} from '@/lib/content';
import {Reveal} from '@/components/reveal';
import {ProjectGrid} from '@/components/project-grid';
import {ProjectLink} from '@/components/project-link';
import {Credentials} from '@/components/credentials';
import {Contact} from '@/components/contact';
import {Evidence} from '@/components/evidence';
import {ImageCarousel} from '@/components/image-carousel';
import {AwardGradeBadge,AwardMedal} from '@/components/award-grade';
import type {Metadata} from 'next';
export const metadata:Metadata={alternates:{canonical:'/'}};

function SectionHeading({label,index,description}:{label:string;index:string;description?:string}){return <div className="section-heading"><div><p className="section-index">{index} / EXPLORE</p><h2>{label}</h2></div>{description&&<p>{description}</p>}</div>;}
const strengths=[
 {icon:Layers,title:'반복 업무에서 개선할 지점을 찾습니다.',label:'UNDERSTAND',text:'두 Excel 파일을 대조해 누락된 기업명을 채우는 업무를 Python으로 자동화했습니다. 실행 후 입력 결과를 직접 확인하며 반복 작업에 드는 시간을 줄였습니다.',project:'linc-automation'},
 {icon:ScanLine,title:'자동화의 결과까지 검증합니다.',label:'VERIFY',text:'Nextify의 전환 흐름을 5단계로 설계하고 검증기와 성능 보고서를 개발했습니다. AI가 맡을 작업과 결과를 확인할 방법을 함께 정했습니다.',project:'nextify'},
 {icon:UsersRound,title:'운영 환경에 맞춰 연결합니다.',label:'CONNECT',text:'AlarmIT 관리자 인증에서 토큰 보관·갱신 방식을 재검토했습니다. 화면과 API를 연결하고 기존 온프레미스 배포 흐름에 통합했습니다.',project:'alarm-u'},
];
const selectedEvidence=[
 {slug:'linc-automation',label:'업무 이해',name:'LINC 업무 자동화',detail:'Excel 기업명 입력 자동화'},
 {slug:'nextify',label:'자동화 · 검증',name:'Nextify',detail:'최종 평가 30 / 30 빌드 성공'},
 {slug:'alarm-u',label:'인증 · 운영',name:'AlarmIT',detail:'토큰 보관부터 갱신·배포까지'},
];
export default function HomePage(){return <>
 <section id="hero" className="hero"><div className="hero-inner">
  <p className="hero-eyebrow">PARK CHANGEON · SOFTWARE DEVELOPER</p>
  <h1>업무를 이해하고,<br/>개선의 결과까지 확인하는<br/>개발자 <span className="hero-name">박찬건</span>입니다.</h1>
  <p className="hero-description">기업 명단 비교 자동화부터 코드 전환 결과 검증,<br className="desktop-break"/> 운영 서비스의 인증·배포까지. 업무의 흐름을 코드로 연결합니다.</p>
  <div className="hero-evidence" aria-label="지원 역량을 보여주는 대표 경험">{selectedEvidence.map(item=><ProjectLink key={item.slug} href={`/projects/${item.slug}`} className="hero-evidence-link"><span>{item.label}<ArrowUpRight size={14}/></span><strong>{item.name}</strong><small>{item.detail}</small></ProjectLink>)}</div>
  <div className="hero-socials"><a href="#projects">프로젝트 전체 보기 <ArrowDown size={15}/></a><a href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/>GitHub</a>{profile.email&&<a href={`mailto:${profile.email}`}><Mail size={16}/>Email</a>}</div>
 </div></section>
 <section id="about" className="home-section">
  <div className="content-width"><Reveal>
   <SectionHeading label="About me" index="01" description="어떤 문제를, 어떻게 해결하는 사람인지."/>
   <div className="about-layout">
    <figure className="about-profile">
     <div className="portrait-frame"><Image src={profile.portrait} alt="박찬건 프로필 사진" width={413} height={531} sizes="(max-width: 767px) 160px, (max-width: 1200px) 184px, 216px"/></div>
     <figcaption><strong>{profile.name}</strong><span>{profile.role}</span></figcaption>
     <p className="profile-motto">꾸준하게 배우고,<br/>함께 성장합니다.</p>
    </figure>
    <div className="about-copy">
     <div className="strength-list">{strengths.map(s=><article className="strength-row" key={s.label}>
      <s.icon size={22} strokeWidth={1.5}/>
      <div className="strength-title"><span>{s.label}</span><h3>{s.title}</h3></div>
      <div className="strength-body"><p>{s.text}</p><ProjectLink className="text-link" href={`/projects/${s.project}`}>관련 경험 살펴보기 <ArrowUpRight size={14}/></ProjectLink></div>
     </article>)}</div>
     <div className="about-note"><span className="small-square"/><p>업무 이해 → 기술 선택 → 구현 → 결과 확인. 개선의 전 과정을 연결합니다.</p></div>
    </div>
   </div>
   <section className="education-block" aria-labelledby="education-heading">
    <div className="education-heading"><h3 id="education-heading"><GraduationCap size={21} strokeWidth={1.5}/>Education</h3><p>학업과 개발 커뮤니티에서 쌓아 온 경험.</p></div>
    <div className="education-list">{education.map(item=><article className="education-row" key={item.id}>
     <div className="education-period">{item.period||'University'}</div>
     <div className="education-info"><h4>{item.institution}</h4><p>{item.program}</p></div>
     <span className="education-kind">{item.kind==='university'?'학력':'교육·활동'}</span>
    </article>)}</div>
   </section>
  </Reveal></div>
 </section>
 <section id="projects" className="home-section"><div className="content-width"><Reveal><SectionHeading label="Selected projects" index="02" description="업무 자동화, 결과 검증, 서비스 운영으로 이어지는 경험."/></Reveal><ProjectGrid/></div></section>
 <section id="skills" className="home-section"><div className="content-width"><Reveal>
  <SectionHeading label="Technical skills" index="03" description="개발에 활용하는 기술과 그 맥락."/>
  <div className="skills-grid">{skillGroups.map((group,i)=>{
   const Icon=[Monitor,Database,Cloud,Workflow][i];
   return <div className="skill-group" key={group.name}><h3><Icon size={18}/>{group.name}</h3><div className="skill-items">{group.items.map(item=>{
    const label=<><span className="skill-logo" aria-hidden="true"><Image src={`/icons/${item.icon}.svg`} alt="" width={20} height={20}/></span><span className="skill-name">{item.name}</span></>;
    return item.project
     ? <ProjectLink key={item.name} href={`/projects/${item.project}`} aria-label={`${item.name} 사용 사례: ${item.project}`} className="skill-item">{label}<ArrowUpRight size={13}/></ProjectLink>
     : <div key={item.name} className="skill-item">{label}</div>;
   })}</div></div>;
  })}</div>
  <p className="section-footnote"><ArrowUpRight size={13}/>표시가 있는 기술은 사용한 프로젝트로 연결됩니다.</p>
 </Reveal></div></section>
 <section id="experience" className="home-section"><div className="content-width"><Reveal><SectionHeading label="Experience" index="04" description="프로젝트 밖에서도, 문제를 해결하는 방식."/><div className="timeline">{experiences.map(e=><article className="timeline-row" key={e.id}><div className="timeline-year">{e.year?<time>{e.year}</time>:<span>Work</span>}<span className="timeline-dot"/></div><div className="timeline-content"><p className="eyebrow">{e.type}</p><h3>{e.name}</h3><p>{e.summary}</p><ul>{e.actions.map(a=><li key={a}>{a}</li>)}</ul>{e.takeaway&&<p className="experience-takeaway">{e.takeaway}</p>}{e.gallery&&<ImageCarousel images={e.gallery} title={`${e.name} 활동 기록`} compact/>}</div></article>)}</div></Reveal></div></section>
 <section id="credentials" className="home-section"><div className="content-width"><Reveal><SectionHeading label="Credentials" index="05" description="학습을 쌓고, 역량을 확인한 기록."/><Credentials/></Reveal></div></section>
 <section id="awards" className="home-section"><div className="content-width"><Reveal><SectionHeading label="Awards" index="06" description="함께 만든 결과, 그리고 인정받은 순간."/><div className="awards-list">{awards.map(a=><article className="award-row" key={a.id}><div className="record-icon"><AwardMedal grade={a.grade}/></div><div className="record-info"><div className="award-name"><h3>{a.name}</h3><AwardGradeBadge grade={a.grade}/></div><p>{a.issuer}</p>{a.projectSlug&&<ProjectLink className="text-link" href={`/projects/${a.projectSlug}`}>{projects.find(project=>project.slug===a.projectSlug)?.name ?? '프로젝트'} 프로젝트 <ArrowUpRight size={13}/></ProjectLink>}{a.evidence&&<Evidence item={a.evidence}/>}</div><time>{a.date}</time></article>)}</div></Reveal></div></section>
 <section id="contact" className="home-section contact-section"><div className="content-width"><Reveal><SectionHeading label="Let's connect" index="07"/><Contact/></Reveal></div></section>
 </>;}
