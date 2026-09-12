import {ArrowRight,ArrowUpRight,Github,Mail,Layers,ScanLine,UsersRound,Monitor,Database,Cloud,Workflow,MessageSquare,ArrowDown,GraduationCap} from 'lucide-react';
import Image from 'next/image';
import {profile,experiences,awards,projects,skillGroups,education} from '@/lib/content';
import {Reveal} from '@/components/reveal';
import {ProjectGrid} from '@/components/project-grid';
import {ProjectLink} from '@/components/project-link';
import {Credentials} from '@/components/credentials';
import {Contact} from '@/components/contact';
import {Evidence} from '@/components/evidence';
import {AwardGradeBadge,AwardMedal} from '@/components/award-grade';
import type {Metadata} from 'next';
export const metadata:Metadata={alternates:{canonical:'/'}};

function SectionHeading({label,index,description}:{label:string;index:string;description?:string}){return <div className="section-heading"><div><p className="section-index">{index} / EXPLORE</p><h2>{label}</h2></div>{description&&<p>{description}</p>}</div>;}
const strengths=[
 {icon:Layers,title:'복잡한 흐름을 구조화합니다.',label:'STRUCTURE',text:'Nextify의 전환 과정을 단계별로 나누고 전체 구조를 설계했습니다. 문제를 작은 단위로 정리하고, 각 단계의 역할과 연결을 분명하게 만듭니다.',project:'nextify'},
 {icon:ScanLine,title:'만든 결과를 끝까지 확인합니다.',label:'VERIFICATION',text:'변환 결과를 확인하는 검증기와 성능 비교 보고서를 개발했습니다. 구현한 결과를 같은 기준에서 측정하고, 다음 개선을 위한 근거로 남깁니다.',project:'nextify'},
 {icon:UsersRound,title:'함께 움직일 수 있는 방식을 만듭니다.',label:'COLLABORATION',text:'팀 인원이 줄어든 상황에서 새로운 방향을 제안하고 역할을 조율했습니다. 스터디에서도 역할 분담과 발표·질의응답으로 함께 배우는 구조를 만들었습니다.',project:'nextify'},
];
export default function HomePage(){return <>
 <section id="hero" className="hero"><div className="hero-inner"><div className="hero-symbol"><MessageSquare size={23} strokeWidth={1.5}/></div><p className="hero-eyebrow">PARK CHANGEON · WEB DEVELOPER</p><h1>문제를 발견하고,<br/>함께 해결할 구조를 만드는<br/>개발자 <span className="hero-name">박찬건</span>입니다.</h1><p className="hero-description">프로젝트의 전체 흐름을 설계하고 결과를 검증하며,<br className="desktop-break"/> 팀이 끝까지 움직일 수 있는 방법을 고민합니다.</p><div className="quick-links"><p>저의 이야기를 살펴보세요.</p><div><a href="#projects">대표 프로젝트 <ArrowUpRight size={14}/></a><a href="#about">일하는 방식 <ArrowUpRight size={14}/></a><a href="#contact" className="primary">연락하기 <ArrowRight size={14}/></a></div></div><div className="hero-socials"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/>GitHub</a>{profile.email&&<a href={`mailto:${profile.email}`}><Mail size={16}/>Email</a>}</div></div><a className="scroll-hint" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a></section>
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
     <div className="about-note"><span className="small-square"/><p>기술을 연결하고, 결과를 확인하고, 배운 것을 공유합니다.</p></div>
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
 <section id="projects" className="home-section"><div className="content-width"><SectionHeading label="Selected projects" index="02" description="직접 고민하고, 만들고, 검증한 경험들."/><ProjectGrid/></div></section>
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
 <section id="experience" className="home-section"><div className="content-width"><Reveal><SectionHeading label="Experience" index="04" description="프로젝트 밖에서도, 문제를 해결하는 방식."/><div className="timeline">{experiences.map(e=><article className="timeline-row" key={e.id}><div className="timeline-year">{e.year?<time>{e.year}</time>:<span>Work</span>}<span className="timeline-dot"/></div><div className="timeline-content"><p className="eyebrow">{e.type}</p><h3>{e.name}</h3><p>{e.summary}</p><ul>{e.actions.map(a=><li key={a}>{a}</li>)}</ul></div></article>)}</div></Reveal></div></section>
 <section id="credentials" className="home-section"><div className="content-width"><Reveal><SectionHeading label="Credentials" index="05" description="학습을 쌓고, 역량을 확인한 기록."/><Credentials/></Reveal></div></section>
 <section id="awards" className="home-section"><div className="content-width"><Reveal><SectionHeading label="Awards" index="06" description="함께 만든 결과, 그리고 인정받은 순간."/><div className="awards-list">{awards.map(a=><article className="award-row" key={a.id}><div className="record-icon"><AwardMedal grade={a.grade}/></div><div className="record-info"><div className="award-name"><h3>{a.name}</h3><AwardGradeBadge grade={a.grade}/></div><p>{a.issuer}</p>{a.projectSlug&&<ProjectLink className="text-link" href={`/projects/${a.projectSlug}`}>{projects.find(project=>project.slug===a.projectSlug)?.name ?? '프로젝트'} 프로젝트 <ArrowUpRight size={13}/></ProjectLink>}{a.evidence&&<Evidence item={a.evidence}/>}</div><time>{a.date}</time></article>)}</div></Reveal></div></section>
 <section id="contact" className="home-section contact-section"><div className="content-width"><Reveal><SectionHeading label="Let's connect" index="07"/><Contact/></Reveal></div></section>
 </>;}
