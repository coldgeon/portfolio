import {notFound} from 'next/navigation';
import {getProject} from '@/lib/content';
import {ProjectDocument} from '@/components/project-document';
import {ProjectModal} from '@/components/project-modal';
export {generateMetadata} from '@/app/projects/[slug]/page';
export default async function ProjectModalPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const project=getProject(slug);if(!project||project.availability==='draft')notFound();return <ProjectModal title={project.name} slug={project.slug}><ProjectDocument project={project}/></ProjectModal>;}
