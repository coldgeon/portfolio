import type {MetadataRoute} from 'next';
import {projects,siteUrl} from '@/lib/content';
export default function sitemap():MetadataRoute.Sitemap {return [{url:new URL('/',siteUrl()).href},...projects.filter(p=>p.availability!=='draft').map(p=>({url:new URL(`/projects/${p.slug}`,siteUrl()).href}))];}
