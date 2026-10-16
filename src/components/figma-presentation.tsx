'use client';

import {useState} from 'react';
import {ArrowUpRight,ChevronLeft,ChevronRight,Presentation} from 'lucide-react';
import type {Project} from '@/lib/content';

export function FigmaPresentation({presentation}: {presentation: NonNullable<Project['figmaPresentation']>}) {
  const [loaded,setLoaded]=useState(false);
  const [index,setIndex]=useState(0);
  const embed=new URL(presentation.embedSrc);
  embed.searchParams.set('node-id',presentation.frameIds[index]);
  const source=new URL(presentation.href);
  source.searchParams.set('node-id',presentation.frameIds[index]);
  const total=presentation.frameIds.length;
  return <section className="presentation-viewer figma-presentation" aria-label={presentation.title}>
    <div className="presentation-heading">
      <div><p className="eyebrow">PRESENTATION</p><h2>{presentation.title}</h2><span>Figma · {total} slides · 팀 최종 제출 자료</span></div>
      <div className="presentation-actions"><a href={source.href} target="_blank" rel="noreferrer">Figma에서 보기<ArrowUpRight size={14}/></a></div>
    </div>
    {loaded?<><iframe key={index} className="figma-frame" src={embed.href} title={`${presentation.title} · ${index+1}번 슬라이드`} allowFullScreen/>
      <div className="presentation-controls">
        <button type="button" className="icon-button" aria-label="이전 발표 슬라이드" disabled={index===0} onClick={()=>setIndex(value=>value-1)}><ChevronLeft size={19}/></button>
        <span role="status" aria-live="polite">{index+1} / {total}</span>
        <button type="button" className="icon-button" aria-label="다음 발표 슬라이드" disabled={index===total-1} onClick={()=>setIndex(value=>value+1)}><ChevronRight size={19}/></button>
        <select aria-label="발표 슬라이드 선택" value={index} onChange={event=>setIndex(Number(event.target.value))}>{presentation.frameIds.map((id,i)=><option key={id} value={i}>{i+1}번 슬라이드</option>)}</select>
      </div></>:
      <div className="figma-placeholder"><Presentation size={30} aria-hidden="true"/><p>서비스 흐름과 에이전트·GCP 구조를 정리한 발표 자료입니다.</p><button type="button" onClick={()=>setLoaded(true)}>발표 자료 미리보기<ArrowUpRight size={15}/></button></div>}
    <p className="presentation-note">팀의 설계·기대 효과를 포함한 자료입니다. 실제 구현 범위와 제 기여는 본문에 구분했습니다.</p>
  </section>;
}
