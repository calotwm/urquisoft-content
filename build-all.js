// build-all.js — genera los 20 posts del plan v5 desde posts.js (DSL de slides).
// Uso: node build-all.js  → genera posts/post-XX/src/*.html + posts/post-XX/caption.txt
const path = require('path');
const fs = require('fs');
const { writeSlides, ensureDir, root } = require('./brand');
const POSTS = require(process.argv[2] || './posts');

// Copia la captura real de bibliotheca al assets raíz si todavía no está (usada por el POST 2).
const shotSrc = path.join(root, 'post4', 'assets', 'bibliotheca.png');
const shotDst = path.join(root, 'assets', 'bibliotheca.png');
if (fs.existsSync(shotSrc) && !fs.existsSync(shotDst)) {
  fs.copyFileSync(shotSrc, shotDst);
}

function linesHtml(lines) {
  return lines.map((ln, i) => `<span>${ln}</span>${i < lines.length - 1 ? '<br>' : ''}`).join('');
}

function chipsHtml(items, mark) {
  const icon = mark === 'x' ? '✕' : '✓';
  const cls = mark === 'x' ? 'x' : 'check';
  return `<div class="chips">${items.map(t => `<div class="chip"><span class="${cls}">${icon}</span><span class="t">${t}</span></div>`).join('')}</div>`;
}

function rowsHtml(items) {
  return `<div class="rows">${items.map(it => {
    const badge = it.k === 'n'
      ? `<span class="n">${it.v}</span>`
      : `<span class="l">${it.v}</span>`;
    return `<div class="rowline">${badge}<div class="t">${it.t}${it.small ? `<small>${it.small}</small>` : ''}</div></div>`;
  }).join('')}</div>`;
}

function renderSlide(s) {
  switch (s.type) {
    case 'cover': {
      const styleCls = s.coverStyle === 'left' ? ' cover-left' : (s.coverStyle === 'quote' ? ' cover-quote' : '');
      const ghost = s.ghost ? `\n    <div class="ghost-char">${s.ghost}</div>` : '';
      const cls = s.coverStyle === 'left' ? 'cover left' : (s.coverStyle === 'quote' ? 'cover quote' : 'cover');
      return { cls, body: `    <div class="kicker">${s.kicker}</div>${ghost}
    <h1>
      ${linesHtml(s.lines)}
    </h1>
    <div class="sub">${s.sub}</div>
    <div class="cta">${s.cta} <span>→</span></div>` };
    }
    case 'dato':
      return { cls: 'myth', body: `    <div class="statrow"><div class="num">${s.num}</div><div class="lab">${s.label}<small>${s.small || ''}</small></div></div>` };
    case 'problem':
      return { cls: 'myth', body: `    <div class="pill pill-problem">${s.pill}</div>
    ${s.chips ? chipsHtml(s.chips, 'x') : ''}
    <div class="statement">${s.statement}</div>
    ${s.lead ? `<div class="lead-line">${s.lead}</div>` : ''}` };
    case 'solution':
      return { cls: 'myth', body: `    <div class="pill pill-reality">${s.pill}</div>
    ${s.chips ? chipsHtml(s.chips, 'ok') : ''}
    <div class="statement">${s.statement}</div>` };
    case 'rows':
      return { cls: 'myth', body: `    ${rowsHtml(s.items)}` };
    case 'scene': {
      const author = s.author ? `<div class="author"><span class="avatar">${s.author[0]}</span><div class="who">${s.author}<small>${s.role || 'POV'}</small></div></div>` : '';
      return { cls: 'myth', body: `    <div class="scene"><div class="q">${s.q}${s.small ? `<small>${s.small}</small>` : ''}</div>${author}</div>` };
    }
    case 'quoteauth':
      return { cls: 'myth', body: `    <div class="quoteauth">
      <div class="marks">«</div>
      <div class="q">${s.lines.join('<br>')}</div>
      <div class="author"><span class="avatar">${s.initials}</span><div class="who">${s.author}<small>${s.role}</small></div></div>
    </div>` };
    case 'quote':
      return { cls: 'myth', body: `    <div class="bigq">${s.lines.join('<br>')}</div>` };
    case 'shot': {
      const shotInner = s.src
        ? (s.chrome
          ? `<div class="browser"><div class="bar"><span class="dots"><i></i><i></i><i></i></span><div class="url">${s.url || 'app.urquisoft.com'}</div></div><img src="${s.src}" alt="Pantalla real del sistema"></div>`
          : `<img src="${s.src}" alt="Pantalla real del sistema">`)
        : `<div class="ph">Pantalla real</div><div class="ph2">Captura del sistema — pendiente</div>`;
      return { cls: 'myth', body: `    <div class="pill pill-reality">${s.pill}</div>
    <div class="shot">
      ${shotInner}
    </div>
    <div class="screen-sub">${s.sub}</div>` };
    }
    case 'close': {
      const h2 = s.lines.map(ln => typeof ln === 'object' ? `<span class="grad">${ln.grad}</span>` : ln).join('<br>');
      return { cls: 'close', body: `    <div class="pill pill-reality">${s.pill}</div>
    <h2>${h2}</h2>
    <div class="cta">${s.cta}</div>
    <div class="sub">${s.sub}</div>` };
    }
    case 'options':
      return { cls: 'myth', body: `    <div class="rows">${s.items.map(it => `<div class="optrow"><span class="letter">${it.v}</span><div class="t">${it.t}</div></div>`).join('')}</div>` };
    case 'photocard': {
      const photo = s.photo
        ? `<img src="${s.photo}" alt="${s.label}">`
        : `<div class="ph-label">Foto del rubro</div>`;
      const tags = s.tags
        ? s.tags.map((t, i) => `<span class="tag t${i + 1}">${t}</span>`).join('')
        : '';
      const chips = s.chips
        ? `<div class="chips small">${s.chips.map(t => `<div class="chip"><span class="check">✓</span><span class="t">${t}</span></div>`).join('')}</div>`
        : '';
      return { cls: 'myth', body: `    <div class="photo-card">
      <div class="photo${tags ? ' tagged' : ''}">${photo}${tags}</div>
      <div class="meta"><div class="pill pill-reality">${s.label}</div></div>
${chips}
    </div>` };
    }
    case 'flow': {
      const steps = s.steps.map((st, i) => `<div class="fstep"><span class="fnum">${i + 1}</span><div class="ft">${st.t}${st.small ? `<small>${st.small}</small>` : ''}</div></div>`);
      const arrows = steps.slice(0, -1).map((_, i) => `<div class="farr">→</div>`);
      const flow = [];
      steps.forEach((st, i) => { flow.push(st); if (i < steps.length - 1) flow.push(arrows[i]); });
      return { cls: 'myth', body: `    <div class="flow">${flow.join('')}</div>` };
    }
    case 'metrics': {
      const points = s.series || [0, 14, 10, 26, 22, 40, 34, 58, 52, 74, 66, 88];
      const max = Math.max(...points);
      const pts = points.map((v, i) => `${(i * (600 / (points.length - 1))).toFixed(0)},${(140 - (v / max) * 120).toFixed(0)}`).join(' ');
      return { cls: 'myth', body: `    <div class="metrics">
      <div class="ctx">${s.ctx}</div>
      <div class="num">${s.num}${s.suffix ? `<small>${s.suffix}</small>` : ''}</div>
      <div class="chart"><svg viewBox="0 0 600 160" preserveAspectRatio="none"><polygon points="0,160 ${pts} 600,160" fill="rgba(76,194,163,0.18)"/><polyline points="${pts}" fill="none" stroke="#4CC2A3" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="${(600).toFixed(0)}" cy="${(140 - (points[points.length - 1] / max) * 120).toFixed(0)}" r="8" fill="#CC007E"/></svg></div>
      <div class="cap">${s.cap}</div>
    </div>` };
    }
    case 'search': {
      return { cls: 'myth', body: `    <div class="search">
      <div class="bar"><span class="mag"></span><div class="q">${s.query}</div><span class="cursor"></span></div>
      <div class="results">${s.results.map(r => `<div class="res"><span class="ri">${r.ic || '→'}</span><div class="rt">${r.t}${r.small ? `<small>${r.small}</small>` : ''}</div></div>`).join('')}</div>
    </div>` };
    }
    case 'poster':
      return { cls: 'poster', body: `    ${s.sticker ? `<div class="sticker">${s.sticker}</div>` : ''}
    <div class="huge">${s.lines.join('<br>')}</div>
    ${s.sub ? `<div class="psub">${s.sub}</div>` : ''}
    ${s.cta ? `<div class="cta">${s.cta}</div>` : ''}` };
    case 'versus':
      return { cls: 'versus', body: `    <div class="vcard a"><h3>${s.a.h}</h3><p>${s.a.t}</p></div>
    <div class="vs">VS</div>
    <div class="vcard b"><h3>${s.b.h}</h3><p>${s.b.t}</p></div>
    ${s.note ? `<div class="vnote">${s.note}</div>` : ''}` };
    case 'bignum':
      return { cls: 'bignum', body: `    <div class="n">${s.num}</div>
    <div class="l">${s.label}</div>
    ${s.small ? `<div class="psub">${s.small}</div>` : ''}` };
    default:
      throw new Error('tipo de slide desconocido: ' + s.type);
  }
}

for (const post of POSTS) {
  const n = post.slides.length;
  const slides = post.slides.map((s, i) => {
    const main = renderSlide(s);
    return {
      file: `slide-${String(i + 1).padStart(2, '0')}.html`,
      title: `${post.title} — ${i + 1}/${n}`,
      tag: post.tag,
      main,
      pipOn: i + 1,
      swipe: i === n - 1 ? 'Última' : 'Seguí',
      opts: { theme: post.theme || 'dark', pips: n },
      extraCss: require('./v2css') + (post.extraCss || '')
    };
  });
  const dir = path.join(root, 'posts', `post-${String(post.id).padStart(2, '0')}`);
  writeSlides(slides, path.join(dir, 'src'));
  ensureDir(path.join(dir, 'img'));
  fs.writeFileSync(
    path.join(dir, 'caption.txt'),
    `${post.title}\n\n${post.caption}\n\n${post.hashtags.join(' ')}\n`,
    'utf8'
  );
  console.log(`OK post-${String(post.id).padStart(2, '0')} (${n} slides, theme ${post.theme})`);
}