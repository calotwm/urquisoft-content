// build-stories.js — genera 15 historias 1080×1920 con frases de la línea.
// Uso: node build-stories.js → stories/story-XX/{story.html, story.png}
const path = require('path');
const fs = require('fs');
const { html, ensureDir, root } = require('./brand');
const STORIES = require('./stories');

const STORY_EXTRA = `
.cover h1{font-size:120px;margin-top:40px}
.cover .sub{margin-top:48px;font-size:36px;max-width:860px}
.cover .cta{margin-top:88px}
`;

for (const st of STORIES) {
  const id = String(st.id).padStart(2, '0');
  const lines = st.lines.map((ln, i) => `<span>${ln}</span>${i < st.lines.length - 1 ? '<br>' : ''}`).join('');
  const main = {
    cls: 'cover',
    body: `    <h1>
      ${lines}
    </h1>
    <div class="sub">${st.sub}</div>
    <div class="cta">${st.cta}</div>`
  };
  const out = html(st.title, st.tag, main, 1, '', STORY_EXTRA, { theme: st.theme, pips: 0, noFooter: true, w: 1080, h: 1920 });
  const dir = path.join(root, 'stories', `story-${id}`);
  ensureDir(path.join(dir, 'img'));
  fs.writeFileSync(path.join(dir, 'story.html'), out, 'utf8');
  console.log(`OK story-${id} (${st.theme}) — ${st.title}`);
}