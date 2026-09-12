import {notFound} from 'next/navigation';
import {getProject} from '@/lib/content';
import {renderOg} from '@/lib/og-image';
export const alt='Project case study · Park Changeon';
export const size={width:1200,height:630};
export const contentType='image/png';
export default async function Image({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=getProject(slug);if(!p||p.availability==='draft')notFound();return renderOg(p.name,p.eyebrow);}
