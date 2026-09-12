'use client';
import * as Tabs from '@radix-ui/react-tabs';
import {BadgeCheck,GraduationCap,ArrowUpRight} from 'lucide-react';
import {credentials} from '@/lib/content';
import {Evidence} from './evidence';
export function Credentials(){return <Tabs.Root defaultValue="certificate"><Tabs.List className="filter-group credential-tabs" aria-label="자격과 교육 구분"><Tabs.Trigger value="certificate">자격증</Tabs.Trigger><Tabs.Trigger value="education">교육·수료</Tabs.Trigger></Tabs.List>{(['certificate','education'] as const).map(kind=><Tabs.Content key={kind} value={kind} className="credential-panel">{credentials.filter(c=>c.published&&c.kind===kind).map(c=><article className="credential-row" key={c.id}><div className="record-icon"><BadgeCheck size={21}/></div><div className="record-info"><h3>{c.name}</h3><p>{c.issuer} <span>·</span> {c.detail}</p>{c.evidence&&<Evidence item={c.evidence}/>}</div><time>{c.date}</time><ArrowUpRight className="record-decoration" size={16} aria-hidden="true"/></article>)}{!credentials.some(c=>c.published&&c.kind===kind)&&<div className="empty-record"><GraduationCap size={25}/><p>공개된 교육·수료 이력이 없습니다.</p></div>}</Tabs.Content>)}</Tabs.Root>;}
