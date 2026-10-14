import {ArrowUpRight, ChevronDown} from 'lucide-react';
import {experiences} from '@/lib/content';
import {ImageCarousel} from './image-carousel';
import {ProjectLink} from './project-link';

export function ExperienceList() {
  return <div className="timeline">{experiences.map(experience => (
    <article className="timeline-row" key={experience.id} data-experience={experience.id}>
      <div className="timeline-year">
        {experience.year ? <time>{experience.year}</time> : <span>Work</span>}
        <span className="timeline-dot"/>
      </div>
      <div className="timeline-content">
        <p className="eyebrow">{experience.type}</p>
        <h3>{experience.name}</h3>
        <dl className="experience-facts">
          <div><dt>만든 것</dt><dd>{experience.summary}</dd></div>
          <div><dt>내 역할</dt><dd>{experience.role}</dd></div>
          <div><dt>수행 방식</dt><dd><ul>{experience.actions.map(action => <li key={action}>{action}</li>)}</ul></dd></div>
          <div className="experience-result"><dt>결과</dt><dd>{experience.outcome}</dd></div>
        </dl>
        {experience.projectSlug && <ProjectLink className="text-link" href={`/projects/${experience.projectSlug}`}>업무 개선 사례 보기 <ArrowUpRight size={14}/></ProjectLink>}
        <details className="experience-details">
          <summary>{experience.gallery ? '운영 화면·배운 점 보기' : '배운 점·기록 범위 보기'}<ChevronDown size={16}/></summary>
          {experience.takeaway && <p className="experience-takeaway">{experience.takeaway}</p>}
          {experience.note && <p className="section-footnote">{experience.note}</p>}
          {experience.gallery && <ImageCarousel images={experience.gallery} title={`${experience.name} 활동 기록`} compact/>}
        </details>
      </div>
    </article>
  ))}</div>;
}
