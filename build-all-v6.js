// build-all-v6.js — genera los posts del plan v6 desde posts-v6.js (DSL de slides).
// Uso: node build-all-v6.js → genera posts/post-XX/src/*.html + caption.txt
// Extras v6: caption-linkedin.txt (liCaption), li/src/*.html (liSlides), pdf-keyword.txt (pdf:true).
// Reutiliza render.js (renderSlide) y brand.js (writeSlides/ensureDir/root). Sin tercera copia inline.
const path = require('path');
const fs = require('fs');
const { writeSlides, ensureDir, root } = require('./brand');
const { renderSlide } = require('./render');
const POSTS = require('./posts-v6');

function buildSlides(post, slides) {
  const n = slides.length;
  return slides.map((s, i) => {
    const main = renderSlide(s);
    return {
      file: `slide-${String(i + 1).padStart(2, '0')}.html`,
      title: `${post.title} — ${i + 1}/${n}`,
      tag: post.tag,
      main,
      pipOn: i + 1,
      swipe: i === n - 1 ? 'Última' : 'Seguí',
      opts: { theme: post.theme || 'dark', pips: n },
      extraCss: post.extraCss
    };
  });
}

for (const post of POSTS) {
  const dir = path.join(root, 'posts', `post-${String(post.id).padStart(2, '0')}`);
  writeSlides(buildSlides(post, post.slides), path.join(dir, 'src'));
  ensureDir(path.join(dir, 'img'));
  fs.writeFileSync(
    path.join(dir, 'caption.txt'),
    `${post.title}\n\n${post.caption}\n\n${post.hashtags.join(' ')}\n`,
    'utf8'
  );
  if (post.liCaption) {
    fs.writeFileSync(path.join(dir, 'caption-linkedin.txt'), `${post.liCaption}\n`, 'utf8');
  }
  if (post.liSlides) {
    writeSlides(buildSlides(post, post.liSlides), path.join(dir, 'li', 'src'));
  }
  if (post.pdf) {
    fs.writeFileSync(path.join(dir, 'pdf-keyword.txt'), post.dmKeyword, 'utf8');
  }
  console.log(`OK post-${String(post.id).padStart(2, '0')} (${post.slides.length} slides, theme ${post.theme})`);
}
