const t = [.2, 3 / 8, 5 / 9, 2 / 3],
  e = (e, o) => (s) => {
    const r = 4 * e + s - 4,
      n =
        "*-04-39?2$%%$%%'$%''%'''%')(%'))%(++'(++'(+.'+-.',/3',33)-/5)-43).36)058*18<+37<+4:<,4:E,5<A-7>C/8@F/:EH/<EK0=FM1?IP2@KS3BNV4DPY5FS\\6HV_6IXb7K[e8N^i9Pam;Rdp<Tgt"
          .charCodeAt(r) - 35,
      i = r > 8 ? n : 1,
      c = o / i | 0,
      a = o % i,
      f = i - a,
      l = r > 8 ? c * t[s] + (e > 5) & -2 : n,
      h = c - l;
    return { t: f * h + a * h + a, o: [[f, h], [a, h + 1]], i: l };
  },
  o = (t) => new Uint8Array(t),
  s = (t) => {
    const e = new Error(`lean-qr error ${t}`);
    throw e.code = t, e;
  },
  r = (t) => "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:".indexOf(t),
  n = (t) => t.charCodeAt(0),
  i = (t) => (e, o) => {
    e.push(4, 4),
      e.push(t.length, 8 + 8 * (o > 9)),
      t.forEach((t) => e.push(t, 8));
  },
  c = (
    t,
    e,
    o,
    s,
    r = (t, e) => o(t.length, e),
    n = (s
      ? (e) => {
        return ((...t) => (e, o) => t.forEach((t) => t(e, o)))(
          (o = s, (t) => {
            t.eci !== o && (t.push(7, 4), t.push(o, 8), t.eci = o);
          }),
          t(e),
        );
        var o;
      }
      : t),
  ) => (n.test = e, n.l = o, n.est = r, n.eci = s && [s], n),
  a = c(
    (t) => (e, o) => {
      e.push(1, 4), e.push(t.length, 10 + 2 * (o > 26) + 2 * (o > 9));
      let s = 0;
      for (; s < t.length - 2; s += 3) e.push(+t.slice(s, s + 3), 10);
      s < t.length - 1
        ? e.push(+t.slice(s), 7)
        : s < t.length && e.push(+t[s], 4);
    },
    (t) => /[0-9]/.test(t),
    (t, e) => 14 + 2 * (e > 26) + 2 * (e > 9) + 10 * t / 3,
  ),
  f = c(
    (t) => (e, o) => {
      e.push(2, 4), e.push(t.length, 9 + 2 * (o > 26) + 2 * (o > 9));
      let s = 0;
      for (; s < t.length - 1; s += 2) e.push(45 * r(t[s]) + r(t[s + 1]), 11);
      s < t.length && e.push(r(t[s]), 6);
    },
    (t) => r(t) >= 0,
    (t, e) => 13 + 2 * (e > 26) + 2 * (e > 9) + 5.5 * t,
  ),
  l = c(
    (t) => i([...t].map(n)),
    (t) => n(t) < 128,
    (t, e) => 12 + 8 * (e > 9) + 8 * t,
  );
l.h = !0, l.u = !0;
const h = c(l, (t) => n(t) < 256, l.l, 3);
h.h = !0;
const d = new TextEncoder(),
  u = c(
    (t) => i(d.encode(t)),
    () => 1,
    0,
    26,
    (t, e) => 12 + 8 * (e > 9) + 8 * d.encode(t).length,
  );
u.h = !0;
let _ = () => {
  const t = new Map(), e = new TextDecoder("sjis"), s = o(2);
  for (let o = 0; o < 7973; ++o) {
    s[0] = o / 192 + 129 + 64 * (o > 5951),
      s[1] = o % 192 + 64,
      t.set(e.decode(s), o);
  }
  return t.delete("\ufffd"), _ = () => t, t;
};
const m = c(
  (t) => (e, o) => {
    e.push(8, 4), e.push(t.length, 8 + 2 * (o > 26) + 2 * (o > 9));
    for (const o of t) e.push(_().get(o), 13);
  },
  (t) => _().has(t),
  (t, e) => 12 + 2 * (e > 26) + 2 * (e > 9) + 13 * t,
);
m.h = !0;
const p = [a, f, l, h, m, u],
  v = {
    _: (t, { m: e = p } = {}) => (o, r) => {
      const n = e.map((e, o) => {
        const s = new Map(),
          n = (t, e) => (s.has(t) || s.set(t, e(t, r)), s.get(t));
        return {
          v: e,
          C: 1 << o,
          M: e.est("", r),
          L: e.l ? (t, o) => n(o - t, e.l) : (o, s) => n(t.slice(o, s), e.est),
        };
      });
      let i = [{ $: 0 }], c = 0, a = 0, f = -1;
      for (const e of [...t, ""]) {
        let t = 0;
        if (e) { for (const o of n) o.v.test(e) && (t |= o.C); }
        if (!e || t !== f) {
          if (-1 !== f) {
            const t = new Set(i.map((t) => t.k)), e = [];
            for (const { v: o, M: s, L: r, C: l } of n) {
              if (f & l) {
                const n = r(c, a);
                for (const f of o.eci ?? t) {
                  if (!o.u || !f) {
                    let t;
                    for (const e of i) {
                      if (e.k === f || o.eci) {
                        const i = e.v === o && e.k === f,
                          l = i ? e.V : e,
                          h = o.h && i ? e.$ + n - s : l.$ + 12 * (l.k !== f) +
                            (i ? r(i ? e.A : c, a) : n);
                        (!t || h < t.$) &&
                          (t = {
                            A: i ? e.A : c,
                            V: l,
                            v: o,
                            k: f,
                            j: a,
                            $: h,
                          });
                      }
                    }
                    t && e.push(t);
                  }
                }
              }
            }
            i = e;
          }
          f = t, c = a;
        }
        a += e.length;
      }
      i.length || s(5);
      const l = [];
      for (let e = i.reduce((t, e) => e.$ < t.$ ? e : t); e.v; e = e.V) {
        l.push(e.v(t.slice(e.A, e.j)));
      }
      l.reverse().forEach((t) => t(o, r));
    },
    D: a,
    F: f,
    H: l,
    N: h,
    R: m,
    S: u,
  },
  b = () => ({
    T: o(2956),
    I: 0,
    push(t, e) {
      for (
        let o = e, s = 8 - (7 & this.I);
        o > 0;
        o -= s, s = 8
      ) this.T[this.I >> 3] |= t << s >> o, this.I += o < s ? o : s;
    },
  }),
  w = (t, e = t * t, s = o(e)) => ({
    size: t,
    K: s,
    get: (e, o) => e >= 0 && e < t && !!(1 & s[o * t + e]),
    O(
      e,
      { on: o = [0, 0, 0], off: s = [0, 0, 0, 0], P: r = 4, X: n = 4 } = {},
    ) {
      const i = t + 2 * r,
        c = t + 2 * n,
        a = e.createImageData(i, c),
        f = new Uint32Array(a.data.buffer);
      a.data.set([...o, 255]);
      const l = f[0];
      a.data.set([...s, 255]);
      const h = f[0];
      for (let t = 0; t < c; ++t) {
        for (let e = 0; e < i; ++e) {
          f[t * i + e] = this.get(e - r, t - n) ? l : h;
        }
      }
      return a;
    },
    Y(t, e) {
      const o = t.getContext("2d"), s = this.O(o, e);
      t.width = s.width, t.height = s.height, o.putImageData(s, 0, 0);
    },
  }),
  g = [
    (t, e) => !(1 & (t ^ e)),
    (t, e) => !(1 & e),
    (t) => !(t % 3),
    (t, e) => !((t + e) % 3),
    (t, e) => !(1 & (t / 3 ^ e >> 1)),
    (t, e) => !((t & e & 1) + t * e % 3),
    (t, e) => !((t & e & 1) + t * e % 3 & 1),
    (t, e) => !((1 & (t ^ e)) + t * e % 3 & 1),
  ],
  x = o(511);
for (let t = 0, e = 1; t < 255; e = 2 * e ^ 285 * (e > 127)) {
  x[x[e + 255] = t++] = e;
}
const C = (t) => x[t % 255],
  M = (t) => x[t + 255],
  y = (t, e) => {
    const s = o(t.length + e.length - 1);
    for (let o = 0; o < t.length; ++o) {
      for (let r = 0; r < e.length; ++r) s[o + r] ^= C(t[o] + e[r]);
    }
    return s.map(M);
  },
  E = (t, e) => {
    const s = o(t.length + e.length - 1);
    s.set(t, 0);
    for (let o = 0; o < t.length; ++o) {
      if (s[o]) {
        const t = M(s[o]);
        for (let r = 0; r < e.length; ++r) s[o + r] ^= C(e[r] + t);
      }
    }
    return s.slice(t.length);
  },
  L = [[0], [0, 0]];
for (let t = 1; t < 30; ++t) L.push(y(L[t], [0, t]));
const $ = (t, e) => {
    const s = [[], []];
    let r = 0, n = 0;
    for (const [o, i] of e.o) {
      for (let c = 0; c < o; ++c, r += i) {
        const o = t.slice(r, r + i);
        s[0].push(o), s[1].push(E(o, L[e.i])), n += i + e.i;
      }
    }
    const i = o(n);
    n = 0;
    for (const t of s) {
      for (let e, o = 0; n !== e; ++o) {
        e = n;
        for (const e of t) o < e.length && (i[n++] = e[o]);
      }
    }
    return i;
  },
  k = (t, e, o) => {
    let s = t <<= o;
    for (let t = 134217728; t >>= 1;) s & t && (s ^= e * (t >> o));
    return s | t;
  },
  V = ({ size: t, K: e }, o) => {
    const s = (o, s, r, n) => {
        for (; r-- > 0; o += t) e.fill(n, o, o + s);
      },
      r = (e, o, r) => {
        for (let n = 0; n++ < 3; r -= 2) {
          s(
            o * t + e - (r >> 1) * (t + 1),
            r,
            r,
            2 | n,
          );
        }
      },
      n = 2 * ((t - 13) / (1 + (o / 7 | 0)) / 2 + .75 | 0);
    if (o > 1) {
      for (let e = t - 7; e > 8; e -= n) {
        for (let t = e; t > 8; t -= n) r(e, t, 5);
        e < t - 7 && r(e, 6, 5);
      }
    }
    if (o > 6) {
      for (let s = k(o, 7973, 12), r = 1; r < 7; ++r) {
        for (let o = 12; o-- > 9; s >>= 1) e[r * t - o] = 2 | 1 & s;
      }
    }
    s(7, 2, 9, 2), s(t - 8, 8, 9, 2);
    for (let o = 0; o < t; ++o) e[6 * t + o] = 3 ^ 1 & o;
    r(3, 3, 7), r(t - 4, 3, 7);
    for (let o = 0; o < t; ++o) {
      for (let s = o; s < t; ++s) e[s * t + o] = e[o * t + s];
    }
    e[(t - 8) * t + 8] = 3;
  },
  z = ({ size: t, K: e }) => {
    const o = [];
    for (let s = t - 2, r = t, n = -1; s >= 0; s -= 2) {
      for (5 === s && (s = 4); r += n, -1 !== r && r !== t;) {
        const n = r * t + s;
        e[n + 1] || o.push(n + 1), e[n] || o.push(n);
      }
      n *= -1;
    }
    return o;
  },
  A = ({ K: t }, e, o) => e.forEach((e, s) => t[e] = o[s >> 3] >> (7 & ~s) & 1),
  j = ({ size: t, K: e }, o, s, r) => {
    for (let s = 0; s < t; ++s) {
      for (let r = 0; r < t; ++r) {
        const n = s * t + r;
        e[n] ^= o(r, s) & (e[n] >> 1 ^ 1);
      }
    }
    let n = 21522 ^ k((1 ^ r) << 3 | s, 1335, 10);
    for (let o = 0; o++ < 8; n >>= 1) {
      e[(o - (o < 7)) * t + 8] = 1 & n, e[9 * t - o] = 1 & n;
    }
    for (let o = 8; --o, n; n >>= 1) {
      e[8 * t + o - (o < 7)] = 1 & n, e[(t - o) * t + 8] = 1 & n;
    }
  },
  D = ({ size: t, K: e }, o = 0, s = 0) => {
    for (let r = 0; r < t; ++r) {
      for (let n = 0; n < 2; ++n) {
        for (let i, c = 0, a = 0, f = 0; c < t; ++c) {
          const l = 1 & e[n ? r * t + c : c * t + r];
          s += l,
            a = (a >> 1 | 2098176) & (3047517 ^ l - 1),
            2049 & a && (o += 40),
            l !== i && (f = 0),
            i = l,
            o += 5 === ++f ? 3 : f > 5;
        }
      }
      if (r) {
        for (let s = t + r, n = 5 * e[r - 1] ^ e[r]; s < t * t; s += t) {
          const t = 5 * e[s - 1] ^ e[s];
          o += 3 * !(1 & (n | t) | 4 & (n ^ t)), n = t;
        }
      }
    }
    return o + 10 * (10 * Math.abs(s / (t * t) - 1) | 0);
  },
  F = [],
  H = document.createElement("canvas");
H.width = H.height = 1;
const N = H.getContext("2d"),
  R = new Map(),
  S = (t) => {
    let e = R.get(t);
    return e ||
      (N.fillStyle = t,
        N.clearRect(0, 0, 1, 1),
        N.fillRect(0, 0, 1, 1),
        R.set(t, e = [...N.getImageData(0, 0, 1, 1).data])),
      e;
  },
  T = new Map([
    ["numeric", v.D],
    ["alphanumeric", v.F],
    ["ascii", v.H],
    ["iso8859_1", v.N],
    ["shift_jis", v.R],
    ["utf8", v.S],
  ]),
  I = (t) => "LMQH".indexOf(t),
  K = Number.parseInt,
  O = Object.entries({
    B: ["min-correction-level", I],
    U: ["max-correction-level", I],
    W: ["min-version", K],
    q: ["max-version", K],
    mask: ["mask", K],
    m: ["modes", (t) => t.matchAll(/\w+/g).map(([t]) => T.get(t))],
    on: ["on", S],
    off: ["off", S],
    P: ["pad-x", K],
    X: ["pad-y", K],
  });
class P extends HTMLElement {
  static observedAttributes = ["for", "value", ...O.map((t) => t[1][0])];
  constructor() {
    super(), this.G = [], this.J = new MutationObserver(this.Z);
    const t = this.tt = this.ownerDocument.createElement("canvas");
    t.style.display = "block",
      t.style.width = "100%",
      t.style.imageRendering = "pixelated",
      this.setAttribute("role", "img"),
      this.attachShadow({ mode: "closed" }).append(t);
  }
  connectedCallback() {
    this.tt.addEventListener("contextrestored", this.et), this.ot();
  }
  disconnectedCallback() {
    this.tt.removeEventListener("contextrestored", this.et), this.st();
  }
  attributeChangedCallback() {
    this.Z();
  }
  et = () => {
    this.G = [], this.ot();
  };
  Z = async () => {
    this.rt = !0, await 1, this.rt && this.ot();
  };
  ot() {
    this.rt = !1;
    const t = this.ownerDocument;
    if (!t.defaultView) return;
    const o = this.getAttribute("for"),
      r = o ? t.getElementById(o) : null,
      n = this.nt(r) ?? this.getAttribute("value") ?? "",
      i = { msg: n };
    for (const [t, [e, o]] of O) {
      const s = this.getAttribute(e);
      s && (i[t] = o(s));
    }
    const c = Object.entries(i).flat(2);
    if (c.length !== this.G.length || this.G.some((t, e) => c[t] !== e)) {
      const t = this.tt;
      try {
        ((
          t = s(1),
          {
            B: o = 0,
            U: r = 3,
            W: n = 1,
            q: i = 40,
            mask: c,
            trailer: a = 60433,
            ...f
          } = {},
        ) => {
          r < o && s(3), i < n && s(2), "string" == typeof t && (t = v._(t, f));
          for (let s = n, f = 0; s <= i; ++s) {
            let n = F[s];
            n || (F[s] = n = w(4 * s + 17), V(n, s), n.p = z(n));
            const i = e(s, n.p.length >> 3);
            if (8 * i(o).t < f) continue;
            const l = b();
            t(l, s), f = l.I;
            for (let t = r; t >= o; --t) {
              const e = i(t);
              if (8 * e.t < f) continue;
              for (l.I = f + 11 & -8; l.I < 8 * e.t;) l.push(a, 16);
              const o = w(n.size, n.K);
              return A(o, n.p, $(l.T, e)),
                (g[c ?? -1] ? [g[c]] : g).map((e, s) => {
                  const r = w(o.size, o.K);
                  return j(r, e, c ?? s, t), r.s = D(r), r;
                }).reduce((t, e) => e.s < t.s ? e : t);
            }
          }
          s(4);
        })(n, i).Y(t, i), this.style.aspectRatio = `${t.width} / ${t.height}`;
      } catch (e) {
        console.error("QR code rendering failed", e),
          t.getContext("2d").clearRect(0, 0, 200, 200);
      }
      this.setAttribute("aria-label", `QR code`),
        this.setAttribute("title", "QR code"),
        this.G = c;
    }
  }
  nt(t) {
    if (!t) return this.st(), null;
    const e = t.value, o = e ?? (t.href || void 0), s = void 0 === o;
    return t === this.it && s === this.ct || (this.st(),
      this.J.observe(t, {
        attributes: !0,
        attributeFilter: ["id", "value", "href"],
      }),
      s && this.J.observe(t, { subtree: !0, childList: !0, characterData: !0 }),
      void 0 !== e &&
      (t.addEventListener("input", this.Z, { passive: !0 }),
        t.addEventListener("change", this.Z, { passive: !0 })),
      this.it = t,
      this.ct = s),
      o ?? t.textContent;
  }
  st() {
    this.it &&
      (this.it.removeEventListener("input", this.Z),
        this.it.removeEventListener("change", this.Z),
        this.J.disconnect(),
        this.it = null);
  }
}
customElements?.define("lean-qr", P);
export { P as LeanQRElement };
