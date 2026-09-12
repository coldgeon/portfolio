'use client';
import * as Dialog from '@radix-ui/react-dialog';
import {useRouter} from 'next/navigation';
import {useRef} from 'react';
import {ExternalLink,X} from 'lucide-react';
import {projectReturn} from './project-link';
export function ProjectModal({title,slug,children}:{title:string;slug:string;children:React.ReactNode}) {
 const router=useRouter();
 const closing=useRef(false);
 const close=()=>{if(!closing.current){closing.current=true;router.back();}};
 return <Dialog.Root open onOpenChange={open=>{if(!open)close();}}><Dialog.Portal><Dialog.Overlay className="dialog-overlay"/><Dialog.Content className="project-dialog" aria-describedby={undefined} onCloseAutoFocus={event=>{
   event.preventDefault();
   const trigger=projectReturn.trigger;
   requestAnimationFrame(()=>{
     if(trigger?.isConnected){trigger.focus({preventScroll:true});return;}
     // A project opened in the mobile drawer outlives its unmounted link.
     const menu=document.querySelector<HTMLButtonElement>('.mobile-menu-button');
     const fallback=menu?.offsetParent ? menu : document.getElementById('main-content');
     fallback?.focus({preventScroll:true});
   });
 }}>
 <div className="dialog-toolbar"><Dialog.Title>{title}</Dialog.Title><div><a href={`/projects/${slug}`} target="_blank" rel="noreferrer" className="icon-button" aria-label="새 탭에서 프로젝트 열기"><ExternalLink size={17}/></a><Dialog.Close className="icon-button" aria-label="프로젝트 닫기"><X size={19}/></Dialog.Close></div></div><div className="dialog-scroll">{children}</div>
 </Dialog.Content></Dialog.Portal></Dialog.Root>;
}
