import {test, expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('project galleries preserve source order and support keyboard, zoom and nested modal dismissal', async ({page}) => {
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.goto('/');
  await page.getByRole('link',{name:'AlarmIT 상세 보기',exact:true}).click();
  const project = page.getByRole('dialog',{name:'AlarmIT',exact:true});
  const gallery = project.getByRole('region',{name:'AlarmIT 프로젝트 이미지'});
  await expect(gallery.getByRole('status')).toContainText('1 / 5');
  await gallery.getByRole('button',{name:'다음 이미지',exact:true}).click();
  await expect(gallery.getByRole('status')).toContainText('2 / 5');
  await page.keyboard.press('End');
  await expect(gallery.getByRole('status')).toContainText('5 / 5');
  await page.keyboard.press('ArrowRight');
  await expect(gallery.getByRole('status')).toContainText('1 / 5');
  const trigger = gallery.getByRole('button',{name:'알림it · 서비스 소개 확대 보기'});
  await trigger.click();
  const zoom = page.getByRole('dialog',{name:'AlarmIT 프로젝트 이미지',exact:true});
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
  await expect(page.getByRole('link',{name:'AlarmIT 상세 보기',exact:true})).toBeFocused();

  await page.goto('/projects/replendar');
  const replendar = page.getByRole('region',{name:'Replendar 프로젝트 이미지'});
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

test('study records and mobile galleries are readable, swipeable and accessible in dark mode',async({page})=>{
  await page.emulateMedia({reducedMotion:'reduce'});
  for (const width of [390,768,1440]) {
    await page.setViewportSize({width,height:900});
    await page.goto('/#experience');
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
  await expect.poll(()=>page.locator('.image-carousel img').evaluate((img:HTMLImageElement)=>img.complete&&img.naturalWidth>0)).toBe(true);
  await page.screenshot({path:'test-results/project-gallery-mobile.png',fullPage:true});
});
