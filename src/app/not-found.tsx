import Link from 'next/link';
import {ArrowLeft,FileQuestion} from 'lucide-react';
export default function NotFound(){return <div className="not-found"><FileQuestion size={35}/><p className="eyebrow">404 · PAGE NOT FOUND</p><h1>페이지를 찾을 수 없습니다.</h1><p>주소가 변경되었거나 존재하지 않는 페이지입니다.</p><Link href="/" className="button-primary"><ArrowLeft size={16}/>포트폴리오로 돌아가기</Link></div>;}
