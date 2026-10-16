import Image from 'next/image';
import {ArrowRight,ChevronDown} from 'lucide-react';
import {projects} from '@/lib/content';
import {ProjectLink} from './project-link';
import {ProjectContext,ProjectChecks} from './project-scope';
import AiOrg from '@/content/ai-org-simulation.mdx';

export function SupportingProjects() {
  return <section className="supporting-projects" aria-labelledby="supporting-heading">
    <div className="supporting-heading"><h3 id="supporting-heading">More experience</h3><p>프론트엔드 협업과 AI 서비스 프로토타입.</p></div>
    {projects.filter(project=>project.placement==='supporting').map(project=><article key={project.slug} data-project={project.slug} className="supporting-project">
      <div className="supporting-summary">
        <Image src={project.cover} alt={`${project.name} 서비스 개요`} width={180} height={120} sizes="(max-width: 640px) 100px, 140px"/>
        <div><p className="eyebrow">{project.eyebrow}</p><h4>{project.name}{project.availability==='draft'&&<span className="record-status">정리 중 · 프로토타입</span>}</h4><p>{project.summary}</p><small>{project.period} · {project.role}</small></div>
      </div>
      {project.availability==='draft'?<details id="ai-org-simulation-record" className="prototype-record">
        <summary>프로토타입 기록 보기<ChevronDown size={16}/></summary>
        <div className="prototype-content"><p className="record-note">개인 작업 문서에서 확인한 담당 범위입니다. 실행 증빙 보완 전까지 독립 상세 페이지는 공개하지 않습니다.</p>
          <ProjectContext project={project}/>
          <div className="flow-diagram" aria-label="PDF 입력에서 보고서까지의 흐름">{project.flow.map(step=><div className="flow-step" key={step.title}><strong>{step.title}</strong><span>{step.detail}</span></div>)}</div>
          <h4>직접 맡은 부분</h4><ul>{project.contributions.map(item=><li key={item}>{item}</li>)}</ul>
          <div className="mdx-content"><AiOrg components={{Outcome:()=>null}}/></div>
          <ProjectChecks project={project}/>
        </div>
      </details>:<ProjectLink href={`/projects/${project.slug}`} className="detail-link">{project.name} 상세 보기<ArrowRight size={16}/></ProjectLink>}
    </article>)}
  </section>;
}
