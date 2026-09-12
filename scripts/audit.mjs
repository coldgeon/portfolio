import lighthouse from 'lighthouse';
import {createRequire} from 'node:module';
import {mkdir,writeFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {pathToFileURL} from 'node:url';

const require=createRequire(import.meta.resolve('lighthouse'));
const {launch}=await import(pathToFileURL(require.resolve('chrome-launcher')).href);
await mkdir('.local/lighthouse-profile',{recursive:true});
const chrome=await launch({
  chromeFlags:['--headless','--no-sandbox'],
  userDataDir:resolve('.local/lighthouse-profile'),
});
try{
  const result=await lighthouse(process.argv[2]||'http://127.0.0.1:3000',{
    port:chrome.port,output:['json','html'],logLevel:'error',
    onlyCategories:['performance','accessibility','best-practices','seo'],
  });
  await writeFile('.local/lighthouse-mobile.json',result.report[0]);
  await writeFile('.local/lighthouse-mobile.html',result.report[1]);
  console.log(JSON.stringify({
    url:result.lhr.finalDisplayedUrl,
    scores:Object.fromEntries(Object.entries(result.lhr.categories).map(([k,v])=>[k,Math.round(v.score*100)])),
    metrics:Object.fromEntries(['first-contentful-paint','largest-contentful-paint','total-blocking-time','cumulative-layout-shift'].map(k=>[k,result.lhr.audits[k].displayValue])),
  },null,2));
}finally{await chrome.kill();}
