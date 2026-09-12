'use client';
import Link from 'next/link';
import {useEffect,useState} from 'react';
import {usePathname} from 'next/navigation';
import * as Dialog from '@radix-ui/react-dialog';
import {PanelLeftClose,PanelLeftOpen,ChevronDown,ChevronRight,Home,UserRound,Folder,SlidersHorizontal,BriefcaseBusiness,GraduationCap,Award,Send,Moon,Sun,Menu,X,ArrowUp,CodeXml} from 'lucide-react';
import {navigation,profile,projects} from '@/lib/content';
import {ProjectLink} from './project-link';

const icons = [Home,UserRound,Folder,SlidersHorizontal,BriefcaseBusiness,GraduationCap,Award,Send];
export function Shell({children,modal}:{children:React.ReactNode;modal:React.ReactNode}) {
  const pathname = usePathname();
  const [collapsed,setCollapsed] = useState(false);
  const [mobileOpen,setMobileOpen] = useState(false);
  const [expanded,setExpanded] = useState(false);
  const [active,setActive] = useState('hero');
  const [theme,setTheme] = useState('light');
  useEffect(()=>{
    const sync = () => setTheme(document.documentElement.dataset.theme || 'light');
    sync();
    const update = () => {
      if(pathname !== '/') return;
      const elements = navigation.map(item => document.getElementById(item.id)).filter((el):el is HTMLElement=>Boolean(el));
      const threshold = Math.min(window.innerHeight * .3, 220);
      const current = elements.filter(el=>el.getBoundingClientRect().top<=threshold).at(-1);
      if(current) setActive(current.id);
    };
    let frame = 0;
    const onScroll = () => {cancelAnimationFrame(frame);frame=requestAnimationFrame(update);};
    window.addEventListener('scroll',onScroll,{passive:true});
    window.addEventListener('resize',onScroll);
    update();
    return()=>{cancelAnimationFrame(frame);window.removeEventListener('scroll',onScroll);window.removeEventListener('resize',onScroll);};
  },[pathname]);
  useEffect(()=>{
    const media=window.matchMedia('(min-width: 1024px)');
    const close=()=>{if(media.matches)setMobileOpen(false);};
    media.addEventListener('change',close);return()=>media.removeEventListener('change',close);
  },[]);
  const currentProject = projects.find(p=>pathname===`/projects/${p.slug}`);
  const toggleTheme=()=>{
    const next=theme==='light'?'dark':'light';
    document.documentElement.dataset.theme=next;
    document.documentElement.style.colorScheme=next;
    setTheme(next);
    try{localStorage.setItem('portfolio-theme',next);}catch{}
  };
  const navContent=(mobile=false)=><>
    <div className="sidebar-brand"><Link href="/#hero" onClick={()=>setMobileOpen(false)} className="brand"><CodeXml size={19}/><span>coldgeon</span><ChevronDown size={13}/></Link>{!mobile && <button className="icon-button" aria-label="사이드바 접기" onClick={()=>setCollapsed(true)}><PanelLeftClose size={17}/></button>}</div>
    <nav aria-label={mobile?'모바일 내비게이션':'주요 내비게이션'}>
      <div className="nav-label">Workspace</div>
      {navigation.map((item,index)=>{const Icon=icons[index];const selected=currentProject ? item.id==='projects' : active===item.id;return <div key={item.id}>
        {(index===2||index===5||index===7)&&<div className="nav-spacer"/>}
        <div className={`nav-row ${selected?'selected':''}`}>
          <Link href={`/#${item.id}`} aria-current={selected?'location':undefined} onClick={()=>{setActive(item.id);setMobileOpen(false);}}><Icon size={17}/><span>{item.label}</span></Link>
          {item.id==='projects'&&<button className="nav-expand" aria-label="프로젝트 목록 펼치기" aria-expanded={expanded} onClick={()=>setExpanded(!expanded)}>{expanded?<ChevronDown size={15}/>:<ChevronRight size={15}/>}</button>}
        </div>
        {item.id==='projects'&&expanded&&<div className="project-nav">{projects.map(p=>p.availability==='draft'?<span className="project-nav-draft" key={p.slug}><span className="small-square"/>{p.name}<em>정리 중</em></span>:<ProjectLink key={p.slug} href={`/projects/${p.slug}`} aria-current={currentProject?.slug===p.slug?'page':undefined} onClick={()=>setMobileOpen(false)}><span className="small-square"/>{p.name}</ProjectLink>)}</div>}
      </div>;})}
    </nav>
    <div className="sidebar-bottom"><button className="theme-control" onClick={toggleTheme} aria-label={theme==='light'?'다크 모드로 변경':'라이트 모드로 변경'}>{theme==='light'?<Moon size={17}/>:<Sun size={17}/>}<span>{theme==='light'?'Dark mode':'Light mode'}</span></button><div className="profile"><div className="avatar">CG</div><div><strong>{profile.name}</strong><span>{profile.role}</span></div></div></div>
  </>;
  return <div className={`app-shell ${collapsed?'sidebar-collapsed':''}`}>
    <a className="skip-link" href="#main-content">본문으로 바로가기</a>
    <aside className="desktop-sidebar" aria-label="사이드바" inert={collapsed||undefined}>{navContent()}</aside>
    <div className="workspace">
      <header className="topbar">
        <div className="breadcrumb">
          <button className={`icon-button desktop-expand ${collapsed?'visible':''}`} aria-label="사이드바 펼치기" onClick={()=>setCollapsed(false)}><PanelLeftOpen size={18}/></button>
          <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}><Dialog.Trigger asChild><button className="icon-button mobile-menu-button" aria-label="메뉴 열기"><Menu size={20}/></button></Dialog.Trigger><Dialog.Portal><Dialog.Overlay className="mobile-overlay"/><Dialog.Content className="mobile-sidebar" aria-describedby={undefined}><Dialog.Title className="sr-only">사이트 내비게이션</Dialog.Title><Dialog.Close className="icon-button mobile-close" aria-label="메뉴 닫기"><X size={18}/></Dialog.Close>{navContent(true)}</Dialog.Content></Dialog.Portal></Dialog.Root>
          <Folder size={15}/><Link href="/#hero">Portfolio</Link><ChevronRight size={12}/><span className="breadcrumb-current">{currentProject?.name||navigation.find(n=>n.id===active)?.label||'Home'}</span>
        </div>
        <span className="topbar-identity">박찬건 <span> / </span> Web Developer</span>
      </header>
      <main id="main-content" tabIndex={-1}>{children}</main>
      <footer className="site-footer"><span>© {new Date().getFullYear()} Park Changeon</span><span>Thoughtfully built, continuously learning.</span></footer>
    </div>
    {modal}
    {active!=='hero'&&pathname==='/'&&<a className="back-top icon-button" href="#hero" aria-label="맨 위로 이동"><ArrowUp size={19}/></a>}
  </div>;
}
