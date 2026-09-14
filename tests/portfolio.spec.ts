import {test,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('project filtering, modal history, scroll and focus restoration',async({page})=>{
 await page.setViewportSize({width:1440,height:1000});
 await page.goto('/');
 await expect(page.locator('[data-project="ai-org-simulation"] .project-draft-mask')).toContainText('정리 중');
 await expect(page.locator('[data-project="ai-org-simulation"]').getByRole('link')).toHaveCount(0);
 await page.getByRole('button',{name:'협업·주도',exact:true}).click();
 await expect(page.locator('.project-card')).toHaveCount(2);
 const trigger=page.getByRole('link',{name:'Nextify 상세 보기',exact:true});
 await trigger.focus();
 const scroll=await page.evaluate(()=>window.scrollY);
 await trigger.click();
 await expect(page).toHaveURL(/\/projects\/nextify$/);
 const dialog=page.getByRole('dialog',{name:'Nextify',exact:true});
 await expect(dialog).toBeVisible();
 await expect(dialog.getByRole('heading',{name:'Nextify',exact:true,level:1})).toBeVisible();
 await page.keyboard.press('Escape');
 await expect(dialog).toHaveCount(0);
 await expect(trigger).toBeFocused();
 await expect(page.getByRole('button',{name:'협업·주도',exact:true})).toHaveAttribute('aria-pressed','true');
 expect(Math.abs((await page.evaluate(()=>window.scrollY))-scroll)).toBeLessThan(8);
 await page.goForward();
 await expect(dialog).toBeVisible();
 await page.goBack();
 await expect(dialog).toHaveCount(0);
 await trigger.click();
 await expect(dialog).toBeVisible();
 await expect(page).toHaveURL(/\/projects\/nextify$/);
 await page.reload();
 await expect(page.getByRole('dialog')).toHaveCount(0);
 await expect(page.getByRole('heading',{name:'Nextify',exact:true,level:1})).toBeVisible();
 await page.getByRole('link',{name:'프로젝트 목록',exact:true}).click();
 await expect(page.getByRole('heading',{name:'Selected projects',exact:true})).toBeVisible();
 await expect(page.getByRole('dialog')).toHaveCount(0);
});

test('theme, credentials and email copy',async({page,context})=>{
 await context.grantPermissions(['clipboard-read','clipboard-write']);
 await page.goto('/');
 await page.getByRole('button',{name:'다크 모드로 변경',exact:true}).click();
 await expect(page.locator('html')).toHaveAttribute('data-theme','dark');
 await page.reload();
 await expect(page.locator('html')).toHaveAttribute('data-theme','dark');
 await page.getByRole('tab',{name:'교육·수료',exact:true}).click();
 await expect(page.getByText('공개된 교육·수료 이력이 없습니다.')).toHaveCount(0);
 await expect(page.getByRole('heading',{name:'SAP 클래식 ABAP 기초 개발자 과정',exact:true})).toBeVisible();
 await expect(page.getByRole('heading',{name:'SAP 클래식 ABAP 중급 개발자 과정',exact:true})).toBeVisible();
 const certificateButton=page.getByRole('button',{name:'기초 과정 수료증 보기',exact:true});
 await certificateButton.click();
 const certificate=page.getByRole('dialog',{name:'기초 과정 수료증 보기',exact:true});
 await expect(certificate).toBeVisible();
 await expect.poll(()=>certificate.locator('img').evaluate((img:HTMLImageElement)=>img.complete&&img.naturalWidth>0)).toBe(true);
 await page.keyboard.press('Escape');
 await expect(certificate).toHaveCount(0);
 await expect(certificateButton).toBeFocused();
 await page.getByRole('tab',{name:'자격증',exact:true}).click();
 await expect(page.getByRole('heading',{name:'SQLD · SQL 개발자'})).toBeVisible();
 await expect(page.getByRole('heading',{name:'SAP 클래식 ABAP 기초 개발자 과정',exact:true})).toHaveCount(0);
 await page.getByRole('button',{name:'이메일 주소 복사',exact:true}).click();
 await expect(page.locator('#contact').getByRole('status')).toHaveText('이메일 주소를 복사했습니다.');
 expect(await page.evaluate(()=>navigator.clipboard.readText())).toBe('cksrjs4726@gmail.com');
});

test('mobile drawer, fullscreen modal and sidebar collapse',async({page})=>{
 await page.setViewportSize({width:390,height:844});
 await page.goto('/');
 await page.getByRole('button',{name:'메뉴 열기',exact:true}).click();
 const menu=page.getByRole('dialog',{name:'사이트 내비게이션'});
 await expect(menu).toBeVisible();
 await menu.getByRole('link',{name:'Projects',exact:true}).click();
 await expect(menu).toHaveCount(0);
 await page.getByRole('link',{name:'Nextify 상세 보기',exact:true}).click();
 const dialog=page.getByRole('dialog',{name:'Nextify',exact:true});
 await expect(dialog).toBeVisible();
 const rect=await dialog.boundingBox();
 expect(rect?.width).toBe(390);
 await page.getByRole('button',{name:'프로젝트 닫기',exact:true}).click();
 await expect(dialog).toHaveCount(0);
 await page.setViewportSize({width:1440,height:1000});
 await page.getByRole('button',{name:'사이드바 접기',exact:true}).click();
 await expect(page.locator('.workspace')).toHaveCSS('margin-left','0px');
 await page.getByRole('button',{name:'사이드바 펼치기',exact:true}).click();
 await expect(page.locator('.workspace')).toHaveCSS('margin-left','244px');
});

test('all detail pages, metadata, assets and 404',async({page,request})=>{
 for(const [slug,name] of [['nextify','Nextify'],['alarm-u','AlarmIT'],['replendar','Replendar']]){
   const response=await page.goto(`/projects/${slug}`);
   expect(response?.status()).toBe(200);
   await expect(page).toHaveTitle(`${name} | 박찬건`);
   await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href',new RegExp(`/projects/${slug}$`));
   await expect(page.getByRole('heading',{name,exact:true})).toBeVisible();
   const og=await page.locator('meta[property="og:image"]').getAttribute('content');
   expect(og).toContain(`/projects/${slug}/opengraph-image`);
   expect((await request.get(new URL(og!).pathname)).status()).toBe(200);
   await expect.poll(()=>page.locator('img').evaluateAll(imgs=>imgs.every(img=>(img as HTMLImageElement).complete&&(img as HTMLImageElement).naturalWidth>0))).toBe(true);
 }
 const draftResponse=await page.goto('/projects/ai-org-simulation');
 expect(draftResponse?.status()).toBe(404);
 await expect(page.getByRole('heading',{name:'페이지를 찾을 수 없습니다.'})).toBeVisible();
 const response=await page.goto('/projects/not-real');
 expect(response?.status()).toBe(404);
 await expect(page.getByRole('heading',{name:'페이지를 찾을 수 없습니다.'})).toBeVisible();
});

test('responsive layouts and reduced motion',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});
 for(const width of [390,768,1440]){
  await page.setViewportSize({width,height:1000});
  await page.goto('/');
  await expect(page.locator('html')).toHaveCSS('scroll-behavior','auto');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);
  for(const card of await page.locator('.project-card').all()) await card.scrollIntoViewIfNeeded();
  await expect.poll(()=>page.locator('.project-art img').evaluateAll(imgs=>imgs.every(img=>(img as HTMLImageElement).complete&&(img as HTMLImageElement).naturalWidth>0))).toBe(true);
  await page.getByRole('link',{name:'맨 위로 이동',exact:true}).click();
  await page.screenshot({path:`test-results/home-${width}.png`,fullPage:true});
  await page.screenshot({path:`test-results/hero-${width}.png`});
  await page.goto('/projects/alarm-u');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);
 }
});

test('accessibility: light, dark, mobile menu and project dialog',async({page})=>{
 await page.goto('/');
 let results=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
 expect(results.violations).toEqual([]);
 await page.getByRole('button',{name:'다크 모드로 변경',exact:true}).click();
 results=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
 expect(results.violations).toEqual([]);
 await page.getByRole('link',{name:'Nextify 상세 보기',exact:true}).click();
 await expect(page.getByRole('dialog',{name:'Nextify',exact:true})).toBeVisible();
 results=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
 expect(results.violations).toEqual([]);
 await page.keyboard.press('Escape');
 await page.setViewportSize({width:390,height:844});
 await page.getByRole('button',{name:'메뉴 열기',exact:true}).click();
 results=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
 expect(results.violations).toEqual([]);
});

test('keyboard navigation through drawer, project, accordion and back',async({page})=>{
 await page.setViewportSize({width:390,height:844});
 await page.emulateMedia({reducedMotion:'reduce'});
 await page.goto('/');
 await page.keyboard.press('Tab');
 await expect(page.getByRole('link',{name:'본문으로 바로가기'})).toBeFocused();
 await page.keyboard.press('Tab');
 const menuButton=page.getByRole('button',{name:'메뉴 열기',exact:true});
 await expect(menuButton).toBeFocused();
 await page.keyboard.press('Enter');
 const menu=page.getByRole('dialog',{name:'사이트 내비게이션'});
 const expand=menu.getByRole('button',{name:'프로젝트 목록 펼치기'});
 for(let i=0;i<12&&!await expand.evaluate(el=>el===document.activeElement);i++)await page.keyboard.press('Tab');
 await expect(expand).toBeFocused();
 await page.keyboard.press('Space');
 await expect(expand).toHaveAttribute('aria-expanded','true');
 await page.keyboard.press('Tab');
 await expect(menu.getByRole('link',{name:'Nextify',exact:true})).toBeFocused();
 await page.keyboard.press('Enter');
 const dialog=page.getByRole('dialog',{name:'Nextify',exact:true});
 await expect(dialog).toBeVisible();
 const firstCase=dialog.locator('.case-trigger').first();
 for(let i=0;i<8&&!await firstCase.evaluate(el=>el===document.activeElement);i++)await page.keyboard.press('Tab');
 await expect(firstCase).toBeFocused();
 await expect(firstCase).toHaveAttribute('aria-expanded','true');
 await page.keyboard.press('Space');
 await expect(firstCase).toHaveAttribute('aria-expanded','false');
 await page.keyboard.press('Escape');
 await expect(dialog).toHaveCount(0);
 await expect(menuButton).toBeFocused();
});

test('email copy failure is announced without hiding the address',async({page})=>{
 await page.addInitScript(()=>Object.defineProperty(navigator,'clipboard',{value:{writeText:()=>Promise.reject(new Error('Clipboard unavailable'))}}));
 await page.goto('/');
 await page.getByRole('button',{name:'이메일 주소 복사',exact:true}).click();
 await expect(page.locator('#contact').getByRole('status')).toContainText('복사하지 못했습니다.');
 await expect(page.getByRole('link',{name:'Email cksrjs4726@gmail.com'})).toHaveAttribute('href','mailto:cksrjs4726@gmail.com');
});
