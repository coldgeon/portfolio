'use client';
import Image from 'next/image';
import {useState} from 'react';
import {AnimatePresence,motion,useReducedMotion} from 'motion/react';
import {ArrowUpRight,ArrowRight} from 'lucide-react';
import {projects,awards,type Strength} from '@/lib/content';
import {ProjectLink} from './project-link';
import {AwardGradeBadge} from './award-grade';

const filters=['전체','구조 설계','검증·운영','협업·주도'] as const;
export function ProjectGrid(){
  const [filter,setFilter]=useState<(typeof filters)[number]>('전체');
  const reduced=useReducedMotion();
  const visible=projects.filter(p=>filter==='전체'||p.tags.includes(filter as Strength));
  return <>
    <div className="project-toolbar"><div className="filter-group" role="group" aria-label="프로젝트 강점 필터">{filters.map(f=><button key={f} aria-pressed={filter===f} onClick={()=>setFilter(f)}>{f}</button>)}</div><span className="result-count" aria-live="polite">{String(visible.length).padStart(2,'0')} projects</span></div>
    <div className="project-grid"><AnimatePresence initial={false} mode="popLayout">{visible.map(p=>{const isDraft=p.availability==='draft';return <motion.article className={`project-card scroll-reveal ${isDraft?'project-card--draft':''}`} data-project={p.slug} key={p.slug} layout={!reduced} initial={{opacity:0}} animate={{opacity:1,y:0}} whileInView={reduced?undefined:{opacity:[0.2,1],y:[20,0],transition:{duration:.6,ease:[0.22,1,0.36,1]}}} viewport={{once:false,amount:'some',margin:'0px 0px -32px 0px'}} exit={{opacity:0}} transition={{duration:reduced?0:.2}}>
      {isDraft?<div className="project-art project-art--draft" style={{background:p.accent}} aria-hidden="true">
        <Image src={p.cover} alt={`${p.name} 프로젝트 개요`} width={800} height={700} sizes="(max-width: 640px) 100vw, 340px"/>
        <span className="art-index">0{projects.indexOf(p)+1}</span>
      </div>:<ProjectLink className="project-art" style={{background:p.accent}} href={`/projects/${p.slug}`} aria-label={`${p.name} 프로젝트 상세 보기`} tabIndex={-1}>
        <Image src={p.cover} alt={`${p.name} 프로젝트 개요`} width={800} height={700} sizes="(max-width: 640px) 100vw, 340px"/>
        <span className="art-index" aria-hidden="true">0{projects.indexOf(p)+1}</span>
        <span className="art-open" aria-hidden="true"><ArrowUpRight size={18}/></span>
      </ProjectLink>}
      <div className="project-info">
        <p className="eyebrow">{p.eyebrow}</p>
        <div className="project-title-row"><h3>{p.name}</h3>{p.awardIds.length>0&&<span className="award-inline">{p.awardIds.map(id=>{const award=awards.find(a=>a.id===id);return award?<AwardGradeBadge key={id} grade={award.grade}/>:null;})}</span>}</div>
        <p className="project-subtitle">{p.subtitle}</p>
        <p className="project-summary">{p.summary}</p>
        <div className="tech-tags">{p.technologies.map(t=><span key={t}>{t}</span>)}</div>
        <div className="project-card-bottom"><span>{p.role.split(' · ').slice(0,2).join(' · ')}</span>{isDraft?<span className="detail-link detail-link--disabled" aria-disabled="true">정리 중</span>:<ProjectLink href={`/projects/${p.slug}`} className="detail-link"><span><span className="sr-only">{p.name} </span>상세 보기</span><ArrowRight size={16}/></ProjectLink>}</div>
      </div>
      {isDraft&&<div className="project-draft-mask"><span>PROJECT IN PROGRESS</span><strong>정리 중</strong><p>프로젝트 내용을 보완하고 있습니다.</p></div>}
    </motion.article>})}</AnimatePresence></div>
  </>;
}
