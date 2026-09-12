'use client';
import * as Accordion from '@radix-ui/react-accordion';
import {ChevronDown} from 'lucide-react';
export function CaseStudy({title,number,children}:{title:string;number:string;children:React.ReactNode}) {return <Accordion.Root type="multiple" defaultValue={number==='01'?['case']:[]} className="case-study"><Accordion.Item value="case"><Accordion.Header><Accordion.Trigger className="case-trigger"><span className="case-number">CASE {number}</span><span>{title}</span><ChevronDown size={18}/></Accordion.Trigger></Accordion.Header><Accordion.Content className="case-content"><div>{children}</div></Accordion.Content></Accordion.Item></Accordion.Root>;}
