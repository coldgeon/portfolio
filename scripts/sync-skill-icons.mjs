import {mkdir,writeFile} from 'node:fs/promises';

const headers={'User-Agent':'coldgeon-portfolio'};
async function get(url){const r=await fetch(url,{headers});if(!r.ok)throw new Error(`${r.status}: ${url}`);return r.text();}
const commit=JSON.parse(await get('https://api.github.com/repos/devicons/devicon/commits/master')).sha;
const base=`https://raw.githubusercontent.com/devicons/devicon/${commit}`;
const icons=['react','typescript','nextjs','vitejs','styledcomponents','java','spring','mysql','python','fastapi','postgresql','docker','cloudrun','nginx','git','github','notion'];
const lighthouseCommit='7d21d0b9037b0e940931587ffe691087b1e15d70';
const sources=[...icons.map(name=>({name,url:`${base}/icons/${name}/${name}-original.svg`})),{name:'lighthouse',url:`https://raw.githubusercontent.com/GoogleChrome/lighthouse/${lighthouseCommit}/assets/lighthouse-logo.svg`}];
const results=await Promise.allSettled(sources.map(async source=>{
 const svg=await get(source.url);
 if(!svg.includes('<svg')||/<script\b|\son\w+\s*=|javascript:/i.test(svg))throw new Error(`Unexpected SVG: ${source.name}`);
 return {...source,svg};
}));
const errors=results.filter(r=>r.status==='rejected');
if(errors.length)throw new AggregateError(errors.map(r=>r.reason),'Icon downloads failed');
await mkdir('public/icons',{recursive:true});
for(const result of results)await writeFile(`public/icons/${result.value.name}.svg`,result.value.svg);
await writeFile('public/icons/devicon-LICENSE.txt',await get(`${base}/LICENSE`));
await writeFile('public/icons/lighthouse-LICENSE.txt',await get(`https://raw.githubusercontent.com/GoogleChrome/lighthouse/${lighthouseCommit}/LICENSE`));
await writeFile('public/icons/sources.json',JSON.stringify({deviconCommit:commit,lighthouseCommit,assets:sources},null,2)+'\n');
console.log(`Saved ${sources.length} SVG icons and source licenses.`);
