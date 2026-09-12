import Image from 'next/image';
import {CalendarDays,UserRound,UsersRound,ArrowUpRight,Check,GitBranch,Download} from 'lucide-react';
import {type Project,awards} from '@/lib/content';
import {Evidence} from './evidence';
import {AwardGradeBadge} from './award-grade';
import type {MDXComponents} from 'mdx/types';
import Nextify from '@/content/nextify.mdx';
import AiOrg from '@/content/ai-org-simulation.mdx';
import AlarmIT from '@/content/alarm-u.mdx';
import Replendar from '@/content/replendar.mdx';
const bodies:Record<string,React.ComponentType<{components:MDXComponents}>>={nextify:Nextify,'ai-org-simulation':AiOrg,'alarm-u':AlarmIT,replendar:Replendar};
export function ProjectDocument({project:p}:{project:Project}) {
 const Body=bodies[p.slug];
 return <article className="project-document"><header className="document-header"><p className="eyebrow">{p.eyebrow}</p><h1>{p.name}</h1><p className="document-subtitle">{p.subtitle}</p><div className="document-meta">{p.period&&<span><CalendarDays size={15}/>{p.period}</span>}{p.team&&<span><UsersRound size={15}/>{p.team}</span>}<span><UserRound size={15}/>{p.role}</span></div><div className="document-links">{p.github&&<a className="text-link" href={p.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14}/></a>}{awards.filter(a=>p.awardIds.includes(a.id)).map(a=><span className="document-award" key={a.id}><AwardGradeBadge grade={a.grade}/><span>{a.name}</span></span>)}</div></header>
 {p.presentation?<section className="presentation-viewer" aria-labelledby={`${p.slug}-presentation-title`}><div className="presentation-heading"><div><p className="eyebrow">FINAL PRESENTATION</p><h2 id={`${p.slug}-presentation-title`}>{p.presentation.title}</h2><span>PDF · {p.presentation.pages} pages</span></div><div className="presentation-actions"><a href={p.presentation.src} target="_blank" rel="noreferrer">새 탭에서 보기 <ArrowUpRight size={14}/></a><a href={p.presentation.src} download>다운로드 <Download size={14}/></a></div></div><iframe className="presentation-frame" src={`${p.presentation.src}#page=1&view=FitH&navpanes=0`} title={`${p.presentation.title} PDF 미리보기`}/><a className="presentation-mobile-preview" href={p.presentation.src} target="_blank" rel="noreferrer" aria-label={`${p.presentation.title} PDF 전체 보기`}><Image src={p.presentation.preview} alt={`${p.presentation.title} 첫 슬라이드`} width={1440} height={810} sizes="calc(100vw - 44px)" loading="eager"/><span>{p.presentation.pages}쪽 발표 자료 전체 보기 <ArrowUpRight size={15}/></span></a></section>:<figure className="document-cover"><Image src={p.coverWide} style={{background:p.accent}} alt={`${p.name}의 주요 흐름을 요약한 프로젝트 커버`} width={1100} height={550} sizes="(max-width: 800px) 100vw, 760px"/><figcaption>{p.name} · 프로젝트 개요</figcaption></figure>}
 <p className="document-intro">{p.summary}</p><div className="tech-tags">{p.technologies.map(t=><span key={t}>{t}</span>)}</div>
 <section className="document-section"><p className="eyebrow">CONTRIBUTION</p><h2>내가 맡은 일</h2><ul className="contributions">{p.contributions.map(c=><li key={c}><Check size={16}/><span>{c}</span></li>)}</ul></section>
 <section className="document-section"><p className="eyebrow">SYSTEM OVERVIEW</p><h2>전체 흐름</h2><div className="flow-diagram" role="img" aria-label={p.flow.map(n=>`${n.title}: ${n.detail}`).join(' → ')}>{p.flow.map((n,i)=><div className="flow-step" key={n.title}><span className="flow-index">0{i+1}</span><strong>{n.title}</strong><span>{n.detail}</span></div>)}</div><p className="section-footnote"><GitBranch size={13}/> 담당 범위를 중심으로 정리한 개념 흐름입니다.</p></section>
 <div className="mdx-content"><Body components={{Outcome:()=><section className="document-section result-section"><p className="eyebrow">OUTCOME</p><h2>남긴 결과</h2><p>{p.outcome}</p>{p.evidence.length>0&&<div className="evidence-links">{p.evidence.map(item=><Evidence key={item.src} item={item}/>)}</div>}{p.github&&<a href={p.github} target="_blank" rel="noreferrer" className="text-link">결과물 저장소 보기 <ArrowUpRight size={15}/></a>}</section>}}/></div>
 </article>;
}
