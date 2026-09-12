import type {MDXComponents} from 'mdx/types';
import {CaseStudy} from '@/components/case-study';
export function useMDXComponents(components:MDXComponents):MDXComponents {return {CaseStudy,...components};}
