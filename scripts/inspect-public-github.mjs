const headers = { 'User-Agent': 'coldgeon-portfolio', Accept: 'application/vnd.github+json' };
for (const path of ['/users/coldgeon', '/users/coldgeon/repos?per_page=100', '/repos/coldgeon/replendar_release/readme']) {
  const response = await fetch(`https://api.github.com${path}`, { headers });
  if (!response.ok) { console.log(path, response.status); continue; }
  const data = await response.json();
  if (Array.isArray(data)) console.log(JSON.stringify(data.map(({name,html_url,description})=>({name,html_url,description}))));
  else if (data.content) console.log(Buffer.from(data.content,'base64').toString('utf8'));
  else console.log(JSON.stringify({name:data.name,email:data.email,bio:data.bio,blog:data.blog}));
}
