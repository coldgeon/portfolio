import {ArrowUpRight,Github,Mail,Layers,ScanLine,UsersRound,Monitor,Database,Cloud,Workflow,ArrowDown,GraduationCap} from 'lucide-react';
import Image from 'next/image';
import {profile,awards,projects,skillGroups,education} from '@/lib/content';
import {Reveal} from '@/components/reveal';
import {ProjectGrid} from '@/components/project-grid';
import {ProjectLink} from '@/components/project-link';
import {Credentials} from '@/components/credentials';
import {Contact} from '@/components/contact';
import {Evidence} from '@/components/evidence';
import {ExperienceList} from '@/components/experience-list';
import {AwardGradeBadge,AwardMedal} from '@/components/award-grade';
import {SupportingProjects} from '@/components/supporting-projects';
import {SkillIcon} from '@/components/skill-icon';
import type {Metadata} from 'next';
export const metadata:Metadata={alternates:{canonical:'/'}};

function SectionHeading({label,index,description}:{label:string;index:string;description?:string}){return <div className="section-heading"><div><p className="section-index">{index} / EXPLORE</p><h2>{label}</h2></div>{description&&<p>{description}</p>}</div>;}
const strengths=[
 {icon:ScanLine,title:'변환과 검증을 함께 설계했습니다.',label:'DESIGN & VERIFY',text:'Nextify에서 5단계 전환 흐름, 오류 검증기와 성능 보고서를 맡았습니다. 규칙·AI·사용자 판단의 경계를 나누고 오류가 누적될 때 복구할 방법을 구현했습니다.',project:'nextify'},
 {icon:Layers,title:'기존 서비스에 기능을 연결했습니다.',label:'BUILD & CONNECT',text:'알림 it의 관리자 화면과 인증 API를 수정했습니다. 메모리 토큰·쿠키·JPA 저장소를 연결하고, 새로고침 오류와 기존 배포 경로를 보완했습니다.',project:'alarm-u'},
 {icon:UsersRound,title:'설정 이후 실제 동작을 확인했습니다.',label:'DEPLOY & CHECK',text:'ONE ACTION의 EKS·GKE 실행 기반과 권한·저장소·알림 경로를 맡았습니다. 외부 응답과 Pod 교체 후 파일 보존을 확인해 팀원의 기능 연동을 지원했습니다.',project:'one-action'},
];
const selectedEvidence=[
 {slug:'nextify',label:'구조 설계 · AI 결과 검증',name:'Nextify',detail:'검증기·성능 보고서 개발'},
 {slug:'alarm-u',label:'웹 기능 · API 연동',name:'알림 it',detail:'관리자 인증·기존 배포 통합'},
 {slug:'one-action',label:'클라우드 · 연결 검증',name:'ONE ACTION',detail:'EKS·GKE·권한·저장소 구성'},
];
export default function HomePage(){return <>
 <section id="hero" className="hero"><div className="hero-inner">
  <p className="hero-eyebrow">PARK CHANGEON · SOFTWARE DEVELOPER</p>
  <h1>웹 서비스를 만들고,<br/>API·배포·검증을 연결하는<br/>개발자 <span className="hero-name">박찬건</span>입니다.</h1>
  <p className="hero-description">화면과 인증 API 구현, AI 실행 흐름 연결, 클라우드 배포를 경험했습니다.<br className="desktop-break"/> 프로젝트마다 직접 맡은 범위와 결과를 확인한 방법을 소개합니다.</p>
  <div className="hero-evidence" aria-label="대표 프로젝트와 담당 범위">{selectedEvidence.map(item=><ProjectLink key={item.slug} href={`/projects/${item.slug}`} className="hero-evidence-link"><span>{item.label}<ArrowUpRight size={14}/></span><strong>{item.name}</strong><small>{item.detail}</small></ProjectLink>)}</div>
  <div className="hero-socials"><a href="#projects">프로젝트 전체 보기 <ArrowDown size={15}/></a><a href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/>GitHub</a>{profile.email&&<a href={`mailto:${profile.email}`}><Mail size={16}/>Email</a>}</div>
 </div></section>
 <section id="about" className="home-section">
  <div className="content-width"><Reveal>
   <SectionHeading label="About me" index="01" description="어떤 문제를, 어떻게 해결하는 사람인지."/>
   <div className="about-layout">
    <figure className="about-profile">
     <div className="portrait-frame"><Image src={profile.portrait} alt="박찬건 프로필 사진" width={413} height={531} sizes="(max-width: 767px) 160px, (max-width: 1200px) 184px, 216px"/></div>
     <figcaption><strong>{profile.name}</strong><span>{profile.role}</span></figcaption>
     <p className="profile-motto">웹 기능 · API 연동<br/>배포 · 결과 검증</p>
    </figure>
    <div className="about-copy">
     <div className="strength-list">{strengths.map(s=><article className="strength-row" key={s.label}>
      <s.icon size={22} strokeWidth={1.5}/>
      <div className="strength-title"><span>{s.label}</span><h3>{s.title}</h3></div>
      <div className="strength-body"><p>{s.text}</p><ProjectLink className="text-link" href={`/projects/${s.project}`}>관련 경험 살펴보기 <ArrowUpRight size={14}/></ProjectLink></div>
     </article>)}</div>
     <div className="about-note"><span className="small-square"/><p>문제 파악 → 범위와 구조 판단 → 구현 → 실행 결과 확인.</p></div>
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
 <section id="projects" className="home-section"><div className="content-width"><Reveal><SectionHeading label="Selected projects" index="02" description="구조·검증, 웹 유지보수, 클라우드 연결의 세 사례."/></Reveal><ProjectGrid/><SupportingProjects/></div></section>
 <section id="skills" className="home-section"><div className="content-width"><Reveal>
  <SectionHeading label="Technical skills" index="03"/>
  <div className="skills-grid">{skillGroups.map((group,i)=>{
   const Icon=[Monitor,Database,Cloud,Workflow][i];
   return <div className="skill-group" key={group.name}><h3><Icon size={18}/>{group.name}</h3><ul className="skill-items" aria-label={group.name}>{group.items.map(item=><SkillIcon key={item.name} skill={item}/>)}</ul></div>;
  })}</div>
 </Reveal></div></section>
 <section id="experience" className="home-section"><div className="content-width"><Reveal><SectionHeading label="Experience" index="04" description="반복 업무 자동화와 공동 학습 공간 운영."/><ExperienceList/></Reveal></div></section>
 <section id="credentials" className="home-section"><div className="content-width"><Reveal><SectionHeading label="Credentials" index="05" description="학습을 쌓고, 역량을 확인한 기록."/><Credentials/></Reveal></div></section>
 <section id="awards" className="home-section"><div className="content-width"><Reveal><SectionHeading label="Awards" index="06" description="함께 만든 결과, 그리고 인정받은 순간."/><div className="awards-list">{awards.map(a=><article className="award-row" key={a.id}><div className="record-icon"><AwardMedal grade={a.grade}/></div><div className="record-info"><div className="award-name"><h3>{a.name}</h3><AwardGradeBadge grade={a.grade}/></div><p>{a.issuer}</p>{a.projectSlug&&<ProjectLink className="text-link" href={`/projects/${a.projectSlug}`}>{projects.find(project=>project.slug===a.projectSlug)?.name ?? '프로젝트'} 프로젝트 <ArrowUpRight size={13}/></ProjectLink>}{a.evidence&&<Evidence item={a.evidence}/>}</div><time>{a.date}</time></article>)}</div></Reveal></div></section>
 <section id="contact" className="home-section contact-section"><div className="content-width"><Reveal><SectionHeading label="Let's connect" index="07"/><Contact/></Reveal></div></section>
 </>;}
