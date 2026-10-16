import {test, expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('AI Org presentation is requested explicitly and its six screenshots work in modal and standalone views',async({page})=>{
  await page.emulateMedia({reducedMotion:'reduce'});
  // Keep the UI check independent of the external Figma service.
  await page.route('https://embed.figma.com/**',route=>route.fulfill({contentType:'text/html',body:'<!doctype html><html lang="ko"><title>Presentation</title><body>Presentation preview</body></html>'}));
  await page.goto('/');
  const trigger=page.getByRole('link',{name:'AI Org Simulation 상세 보기',exact:true});
  await trigger.click();
  const project=page.getByRole('dialog',{name:'AI Org Simulation',exact:true});
  await expect(project).toBeVisible();
  await expect(page).toHaveURL(/\/projects\/ai-org-simulation$/);
  await expect(project.locator('.figma-frame')).toHaveCount(0);
  expect(await project.locator('.figma-presentation').evaluate(element=>!!(element.compareDocumentPosition(element.closest('.project-document')!.querySelector('.mdx-content')!)&Node.DOCUMENT_POSITION_PRECEDING))).toBe(true);
  await project.getByRole('button',{name:'발표 자료 미리보기',exact:true}).click();
  await expect(project.locator('.figma-frame')).toHaveAttribute('src',/^https:\/\/embed\.figma\.com\/design\/XBCaez1b86vBYquhEl56gB.*node-id=251-1896/);
  await expect(project.getByRole('button',{name:'이전 발표 슬라이드',exact:true})).toBeDisabled();
  await project.getByRole('button',{name:'다음 발표 슬라이드',exact:true}).click();
  await expect(project.locator('.figma-frame')).toHaveAttribute('src',/node-id=251-1902/);
  await project.getByRole('combobox',{name:'발표 슬라이드 선택',exact:true}).selectOption('15');
  await expect(project.locator('.figma-frame')).toHaveAttribute('src',/node-id=251-2098/);
  await expect(project.getByRole('button',{name:'다음 발표 슬라이드',exact:true})).toBeDisabled();
  await page.keyboard.press('Escape');
  await expect(project).toHaveCount(0);
  await expect(trigger).toBeFocused();
  await page.goForward();
  await expect(project).toBeVisible();
  await page.reload();
  await expect(project).toHaveCount(0);
  const gallery=page.getByRole('region',{name:'AI Org Simulation 프로젝트 이미지'});
  for(const width of [1440,390]){
    await page.setViewportSize({width,height:1000});
    await page.goto('/projects/ai-org-simulation');
    await gallery.scrollIntoViewIfNeeded();
    for(let index=1;index<=6;index++){
      await expect(gallery.getByRole('status')).toContainText(`${index} / 6`);
      await expect.poll(()=>gallery.locator('img').evaluate((img:HTMLImageElement)=>img.complete&&img.naturalWidth>0)).toBe(true);
      await gallery.getByRole('button',{name:'다음 이미지',exact:true}).click();
    }
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
    await page.screenshot({path:`test-results/ai-org-${width}.png`,fullPage:true});
  }
  await gallery.getByRole('button',{name:'랜딩 페이지 확대 보기',exact:true}).click();
  await expect(page.getByRole('dialog',{name:'AI Org Simulation 프로젝트 이미지',exact:true})).toBeVisible();
  await page.keyboard.press('Escape');
  expect((await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze()).violations).toEqual([]);
});

test('project galleries preserve source order and support keyboard, zoom and nested modal dismissal', async ({page}) => {
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.goto('/');
  await page.getByRole('link',{name:'알림 it 상세 보기',exact:true}).click();
  const project = page.getByRole('dialog',{name:'알림 it',exact:true});
  const gallery = project.getByRole('region',{name:'알림 it 프로젝트 이미지'});
  await expect(gallery.getByRole('status')).toContainText('1 / 5');
  await gallery.getByRole('button',{name:'다음 이미지',exact:true}).click();
  await expect(gallery.getByRole('status')).toContainText('2 / 5');
  await page.keyboard.press('End');
  await expect(gallery.getByRole('status')).toContainText('5 / 5');
  await page.keyboard.press('ArrowRight');
  await expect(gallery.getByRole('status')).toContainText('1 / 5');
  const trigger = gallery.getByRole('button',{name:'알림 it · 서비스 소개 확대 보기'});
  await trigger.click();
  const zoom = page.getByRole('dialog',{name:'알림 it 프로젝트 이미지',exact:true});
  await expect(zoom).toBeVisible();
  await zoom.getByRole('button',{name:'다음 이미지',exact:true}).click();
  await expect(zoom.getByRole('status')).toContainText('2 / 5');
  await expect.poll(()=>zoom.locator('img').evaluate((img:HTMLImageElement)=>img.complete&&img.naturalWidth>0)).toBe(true);
  expect((await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze()).violations).toEqual([]);
  await page.keyboard.press('Escape');
  await expect(zoom).toHaveCount(0);
  await expect(project).toBeVisible();
  await expect(gallery.getByRole('button',{name:'중요한 공지 알림 확대 보기'})).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(project).toHaveCount(0);
  await expect(page.getByRole('link',{name:'알림 it 상세 보기',exact:true})).toBeFocused();

  await page.goto('/projects/replendar');
  const replendar = page.getByRole('region',{name:'Replendar 프로젝트 이미지'});
  await replendar.scrollIntoViewIfNeeded();
  for (let i=1;i<=7;i++) {
    await expect(replendar.getByRole('status')).toContainText(`${i} / 7`);
    await expect.poll(()=>replendar.locator('img').evaluate((img:HTMLImageElement)=>img.complete&&img.naturalWidth>0)).toBe(true);
    await replendar.getByRole('button',{name:'다음 이미지',exact:true}).click();
  }
  await page.reload();
  await expect(replendar.getByRole('status')).toContainText('1 / 7');
  await page.goto('/projects/nextify');
  await expect(page.locator('.image-carousel')).toHaveCount(0);
  await expect(page.locator('.presentation-viewer')).toBeVisible();
});

test('ONE ACTION demo sequence loads on mobile and desktop with original images in zoom',async({page})=>{
  await page.emulateMedia({reducedMotion:'reduce'});
  const titles=['검토 목록','검토 결과·배포 진행','가드 차단','사람의 결정','세 환경 배포','헬스체크 자동 중단','팀 아키텍처 · 설계 자료','ONE ACTION · 서비스 흐름','내 담당 · 인프라와 환경 연동'];
  for(const width of [390,1440]){
    await page.setViewportSize({width,height:900});
    await page.goto('/projects/one-action');
    await page.reload();
    const gallery=page.getByRole('region',{name:'ONE ACTION 프로젝트 이미지'});
    for(const [index,title] of titles.entries()){
      await expect(gallery.getByRole('status')).toContainText(`${index+1} / 9`);
      await expect(gallery.locator('.carousel-caption strong')).toHaveText(title);
      await expect.poll(()=>gallery.locator('img').evaluate((img:HTMLImageElement)=>img.complete&&img.naturalWidth>0)).toBe(true);
      expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
      if(index===1||index===6){
        if(index===1) await expect(gallery.locator('img')).toHaveCSS('object-fit','cover');
        await gallery.getByRole('button',{name:`${title} 확대 보기`,exact:true}).click();
        const zoom=page.getByRole('dialog',{name:'ONE ACTION 프로젝트 이미지',exact:true});
        await expect(zoom.locator('img')).toHaveCSS('object-fit','contain');
        await expect.poll(()=>zoom.locator('img').evaluate((img:HTMLImageElement)=>img.complete&&img.naturalWidth>0)).toBe(true);
        if(index===1) expect(await zoom.locator('img').evaluate((img:HTMLImageElement)=>img.naturalHeight/img.naturalWidth)).toBeCloseTo(1.6,1);
        await page.keyboard.press('Escape');
        await expect(zoom).toHaveCount(0);
      }
      if(index===4) await expect(gallery).toContainText('서울·부산은 아직 v1');
      if(index===5) await expect(gallery).toContainText('대회 이후 재현');
      if(index===6) await expect(gallery).toContainText('GitHub Actions·GHCR');
      if(index===0||index===6) await page.screenshot({path:`test-results/one-action-gallery-${width}-${index+1}.png`});
      await gallery.getByRole('button',{name:'다음 이미지',exact:true}).click();
    }
  }
});

test('study records and mobile galleries are readable, swipeable and accessible in dark mode',async({page})=>{
  await page.emulateMedia({reducedMotion:'reduce'});
  for (const width of [390,768,1440]) {
    await page.setViewportSize({width,height:900});
    await page.goto('/#experience');
    await page.reload(); // Same-fragment navigation preserves native details; start each viewport with a fresh document.
    for(const id of ['doran','19munpa']) {
      const entry=page.locator(`[data-experience="${id}"]`);
      await expect(entry.getByRole('region')).toBeHidden();
      await entry.locator('summary').click();
    }
    for (const [name,count] of [['도란도란 알고리즘 스터디 활동 기록',6],['19문파 · 공동 학습 공간 활동 기록',4]] as const) {
      const gallery = page.getByRole('region',{name});
      await gallery.scrollIntoViewIfNeeded();
      await expect(gallery.getByRole('status')).toContainText(`1 / ${count}`);
      for(let i=1;i<=count;i++){
        await expect.poll(()=>gallery.locator('img').evaluate((img:HTMLImageElement)=>img.complete&&img.naturalWidth>0)).toBe(true);
        await gallery.getByRole('button',{name:'다음 이미지',exact:true}).click();
      }
    }
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  }
  await page.getByRole('button',{name:'다크 모드로 변경',exact:true}).click();
  await page.setViewportSize({width:390,height:844});
  const gallery=page.getByRole('region',{name:'도란도란 알고리즘 스터디 활동 기록'});
  await gallery.scrollIntoViewIfNeeded();
  const stage=gallery.locator('.carousel-stage');
  await stage.dispatchEvent('pointerdown',{pointerType:'touch',clientX:250,clientY:100});
  await stage.dispatchEvent('pointerup',{pointerType:'touch',clientX:100,clientY:105});
  await expect(gallery.getByRole('status')).toContainText('2 / 6');
  await stage.dispatchEvent('click'); // A swipe must not open the zoom dialog.
  await expect(page.locator('.carousel-dialog')).toHaveCount(0);
  await gallery.getByRole('button',{name:'주차별 알고리즘 커리큘럼 확대 보기'}).click();
  const zoom=page.getByRole('dialog',{name:'도란도란 알고리즘 스터디 활동 기록'});
  await expect(zoom).toBeVisible();
  expect((await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze()).violations).toEqual([]);
  await page.screenshot({path:'test-results/study-gallery-mobile-dark.png'});
  await page.keyboard.press('Escape');
  await page.goto('/projects/alarm-u');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await page.locator('.image-carousel').scrollIntoViewIfNeeded();
  await expect.poll(()=>page.locator('.image-carousel img').evaluate((img:HTMLImageElement)=>img.complete&&img.naturalWidth>0)).toBe(true);
  await page.screenshot({path:'test-results/project-gallery-mobile.png',fullPage:true});
});
