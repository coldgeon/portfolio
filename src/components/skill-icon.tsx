'use client';
import Image from 'next/image';
import {useId,useRef,useState} from 'react';
import {Database,Sparkles} from 'lucide-react';
import type {Skill} from '@/lib/content';

export function SkillIcon({skill}:{skill:Skill}) {
  const [open,setOpen]=useState(false);
  const button=useRef<HTMLButtonElement>(null);
  const tooltipId=useId();
  const Symbol=skill.symbol==='sparkles'?Sparkles:Database;
  return <li className="skill-item" onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>{if(document.activeElement!==button.current)setOpen(false);}}>
    <button ref={button} type="button" className="skill-icon-button" aria-label={skill.name} aria-describedby={open?tooltipId:undefined}
      onFocus={()=>setOpen(true)} onBlur={()=>setOpen(false)} onClick={()=>setOpen(true)}
      onKeyDown={event=>{if(event.key==='Escape'){setOpen(false);event.stopPropagation();}}}>
      <span className="skill-logo" aria-hidden="true">{skill.icon?<Image src={`/icons/${skill.icon}.svg`} alt="" width={32} height={32}/>:<Symbol size={30} strokeWidth={1.6}/>}</span>
    </button>
    {open&&<span role="tooltip" id={tooltipId} className="skill-tooltip"><span>{skill.name}</span></span>}
  </li>;
}
