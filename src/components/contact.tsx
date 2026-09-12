'use client';
import {useState} from 'react';
import {ArrowUpRight,Copy,Check,Github,Mail,Phone} from 'lucide-react';
import {profile} from '@/lib/content';
export function Contact(){
  const [status,setStatus]=useState('');
  async function copy(){try{await navigator.clipboard.writeText(profile.email);setStatus('이메일 주소를 복사했습니다.');}catch{setStatus('복사하지 못했습니다. 이메일 주소를 직접 선택해 복사해 주세요.');}}
  return <div className="contact-content"><div><p className="contact-title">함께 풀어갈 문제를<br/>기다리고 있습니다.</p><p className="muted">프로젝트에 대한 이야기부터 새로운 기회까지,<br/>편하게 연락해 주세요.</p></div><div className="contact-links">{profile.email&&<><a href={`mailto:${profile.email}`} className="contact-link"><Mail size={19}/><div><span>Email</span><strong>{profile.email}</strong></div><ArrowUpRight size={18}/></a><button className="copy-email" onClick={copy}>{status.startsWith('이메일')?<Check size={14}/>:<Copy size={14}/>}이메일 주소 복사</button></>}<a href={`tel:${profile.phoneHref}`} className="contact-link"><Phone size={19}/><div><span>Phone</span><strong>{profile.phone}</strong></div><ArrowUpRight size={18}/></a><a href={profile.github} target="_blank" rel="noreferrer" className="contact-link"><Github size={19}/><div><span>GitHub</span><strong>github.com/coldgeon</strong></div><ArrowUpRight size={18}/></a><p className="copy-status" role="status">{status}</p></div></div>;
}
