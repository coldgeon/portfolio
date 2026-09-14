import {test,expect} from '@playwright/test';

test('sections and cards animate again on re-entry and respect reduced motion',async({page})=>{
  await page.setViewportSize({width:1440,height:900});
  await page.emulateMedia({reducedMotion:'no-preference'});
  await page.goto('/');
  // Disable smooth scrolling here to measure the reveal itself, not travel time.
  await page.addStyleTag({content:'html { scroll-behavior:auto!important; }'});
  await expect(page.locator('#skills .scroll-reveal')).toHaveCount(1);
  await page.getByRole('button',{name:'다크 모드로 변경',exact:true}).click();

  for(const selector of ['#skills .scroll-reveal','[data-project="alarm-u"]']){
    for(let entry=0;entry<2;entry++){
      await page.evaluate(()=>window.scrollTo(0,0));
      await expect.poll(()=>page.locator(selector).evaluate(el=>el.getBoundingClientRect().top>window.innerHeight)).toBe(true);
      const opacitySamples=await page.locator(selector).evaluate(async el=>{
        // Allow IntersectionObserver to register leaving before entering again.
        await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
        window.scrollTo(0,el.getBoundingClientRect().top+window.scrollY-120);
        const samples:number[]=[];
        const start=performance.now();
        while(performance.now()-start<900){
          samples.push(Number(getComputedStyle(el).opacity));
          await new Promise(resolve=>requestAnimationFrame(resolve));
        }
        return samples;
      });
      expect(Math.min(...opacitySamples)).toBeLessThan(.8);
      await expect(page.locator(selector)).toHaveCSS('opacity','1');
    }
  }

  await page.emulateMedia({reducedMotion:'reduce'});
  for(const selector of ['#skills .scroll-reveal','[data-project="alarm-u"]']){
    await page.locator(selector).scrollIntoViewIfNeeded();
    await expect(page.locator(selector)).toHaveCSS('opacity','1');
    await expect(page.locator(selector)).toHaveCSS('transform','none');
  }
});
