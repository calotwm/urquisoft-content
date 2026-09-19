// v2css.js — CSS de los formatos "poster", "versus" y "bignum" (usado por build-all.js).
module.exports = `
.poster{align-items:flex-start;justify-content:center;gap:0;position:relative}
.poster .huge{font-weight:800;letter-spacing:-0.045em;line-height:1;font-size:150px;color:var(--w100);text-transform:uppercase}
.poster .huge .mag{color:var(--mag-soft)}
.poster .huge .teal{color:var(--teal)}
.poster .psub,.bignum .psub{margin-top:40px;font-size:36px;font-weight:600;color:var(--w60);line-height:1.3;max-width:800px}
.poster .cta{margin-top:56px}
.poster .sticker{position:absolute;right:0;top:-10px;transform:rotate(9deg);padding:16px 30px;border-radius:999px;background:var(--mag);color:#fff;font-weight:800;font-size:32px;letter-spacing:.06em;box-shadow:0 10px 30px var(--shadow)}
body.magenta .poster .sticker{background:#161219;color:#fff}
.versus{gap:18px;justify-content:center}
.vcard{border-radius:40px;padding:46px 54px;border:2px solid var(--w16);background:var(--g1);box-shadow:0 14px 40px var(--shadow)}
.vcard h3{font-size:110px;font-weight:800;letter-spacing:-0.04em;line-height:1;text-transform:uppercase}
.vcard p{margin-top:14px;font-size:36px;font-weight:600;color:var(--w60)}
.vcard.a h3{color:var(--w50);text-decoration:line-through;text-decoration-thickness:10px;text-decoration-color:var(--mag-soft)}
.vcard.b{border-color:var(--teal)}
.vcard.b h3{color:var(--teal)}
.vs{align-self:center;font-weight:800;font-size:30px;letter-spacing:.3em;color:var(--w50)}
.vnote{margin-top:22px;text-align:center;font-size:38px;font-weight:800;color:var(--w100)}
.bignum{justify-content:center;align-items:flex-start}
.bignum .n{font-weight:800;font-size:330px;line-height:.86;letter-spacing:-0.06em;color:var(--mag-soft)}
.bignum .l{font-weight:800;font-size:74px;line-height:1.05;letter-spacing:-0.03em;color:var(--w100);text-transform:uppercase;margin-top:10px}
`;
