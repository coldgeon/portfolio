type AwardGradeStyle = { icon: string; tone: 'grand' | 'excellent' | 'bronze' | 'member' | 'default' };

const styles: Record<string, AwardGradeStyle> = {
  대상: { icon: '🏆', tone: 'grand' },
  최우수상: { icon: '🥇', tone: 'excellent' },
  우수상: { icon: '🥈', tone: 'excellent' },
  동상: { icon: '🥉', tone: 'bronze' },
  '베스트 파트원': { icon: '🌟', tone: 'member' },
};

export function getAwardGradeStyle(grade: string): AwardGradeStyle {
  return styles[grade] ?? { icon: '🏅', tone: 'default' };
}

export function AwardMedal({ grade }: { grade: string }) {
  const { icon, tone } = getAwardGradeStyle(grade);
  return <span className={`award-medal award-medal--${tone}`} aria-hidden="true">{icon}</span>;
}

export function AwardGradeBadge({ grade }: { grade: string }) {
  const { icon, tone } = getAwardGradeStyle(grade);
  return <span className={`award-grade award-grade--${tone}`}><span aria-hidden="true">{icon}</span>{grade}</span>;
}
