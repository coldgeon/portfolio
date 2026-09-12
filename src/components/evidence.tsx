'use client';
import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';
import {Expand,ExternalLink,X} from 'lucide-react';
import type {Evidence as EvidenceType} from '@/lib/content';
export function Evidence({item}:{item:EvidenceType}) {
  if(item.kind==='pdf')return <a className="text-link" href={item.src} target="_blank" rel="noreferrer">{item.title}<ExternalLink size={14}/></a>;
  return <Dialog.Root><Dialog.Trigger asChild><button className="text-link">{item.title}<Expand size={14}/></button></Dialog.Trigger><Dialog.Portal><Dialog.Overlay className="dialog-overlay evidence-overlay"/><Dialog.Content className="evidence-dialog" aria-describedby={undefined}><div className="dialog-toolbar"><Dialog.Title>{item.title}</Dialog.Title><Dialog.Close className="icon-button" aria-label="증빙 닫기"><X size={18}/></Dialog.Close></div><div className="evidence-image"><Image src={item.src} alt={item.alt||item.title} width={1200} height={1600} sizes="90vw" style={{objectFit:'contain',height:'auto'}}/></div></Dialog.Content></Dialog.Portal></Dialog.Root>;
}
