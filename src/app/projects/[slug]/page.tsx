import {notFound} from 'next/navigation';
import Link from 'next/link';
import {ArrowLeft} from 'lucide-react';
import {projects,getProject} from '@/lib/content';
import {ProjectDocument} from '@/components/project-document';
import type {Metadata} from 'next';
export function generateStaticParams(){return projects.filter(p=>p.availability!=='draft').map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=getProject(slug);if(!p||p.availability==='draft')return {title:'프로젝트를 찾을 수 없습니다'};return {title:p.name,description:p.summary,alternates:{canonical:`/projects/${p.slug}`},openGraph:{title:`${p.name} · 박찬건`,description:p.summary,url:`/projects/${p.slug}`,type:'article'},twitter:{card:'summary_large_image',title:`${p.name} · 박찬건`,description:p.summary}};}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}) {const {slug}=await params;const project=getProject(slug);if(!project||project.availability==='draft')notFound();return <div className="standalone-project"><Link href="/#projects" className="back-to-projects"><ArrowLeft size={15}/>프로젝트 목록</Link><ProjectDocument project={project}/></div>;}
