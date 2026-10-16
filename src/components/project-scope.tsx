import type {Project} from '@/lib/content';

export function ProjectContext({project}:{project:Project}) {
  return <dl className="project-context">
    <div><dt>사용 맥락</dt><dd>{project.context}</dd></div>
    <div><dt>팀과 내 범위</dt><dd>{project.teamScope}</dd></div>
  </dl>;
}

export function ProjectChecks({project}:{project:Project}) {
  return <section className="project-checks" aria-label="검증 방법과 남은 한계">
    <div><h3>확인한 방법</h3><p>{project.verification}</p></div>
    <div><h3>남은 한계</h3><p>{project.limitations}</p></div>
  </section>;
}
