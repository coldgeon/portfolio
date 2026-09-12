import type {Metadata} from 'next';
import {Noto_Sans_KR,Outfit} from 'next/font/google';
import {Shell} from '@/components/shell';
import {profile,siteUrl} from '@/lib/content';
import './globals.css';

const noto=Noto_Sans_KR({subsets:['latin'],display:'swap',variable:'--font-noto'});
const outfit=Outfit({subsets:['latin'],display:'swap',variable:'--font-outfit'});
export const metadata:Metadata={
  metadataBase:siteUrl(),title:{default:'박찬건 | Web Developer',template:'%s | 박찬건'},description:profile.description,
  openGraph:{title:'박찬건 · Web Developer',description:profile.description,locale:'ko_KR',type:'website',siteName:'coldgeon'},
  twitter:{card:'summary_large_image',title:'박찬건 · Web Developer',description:profile.description},
  robots:{index:true,follow:true},
};
const themeScript="try{var t=localStorage.getItem('portfolio-theme');if(t==='dark'){document.documentElement.dataset.theme='dark';document.documentElement.style.colorScheme='dark'}}catch(e){}";
export default function RootLayout({children,modal}:{children:React.ReactNode;modal:React.ReactNode}){
 return <html lang="ko" data-theme="light" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:themeScript}}/></head><body className={`${noto.variable} ${outfit.variable}`}><Shell modal={modal}>{children}</Shell></body></html>;
}
