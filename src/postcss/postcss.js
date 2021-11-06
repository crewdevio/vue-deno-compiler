import { Buffer } from "https://esm.sh/v21/node_buffer.js";
import __fs$ from "https://deno.land/std@0.98.0/node/fs.ts";
import __path_browserify$ from "https://esm.sh/v21/path-browserify@1.0.1/esnext/path-browserify.js";
import __url$ from "https://esm.sh/v21/url@0.11.0/esnext/url.js";

var hn = Object.create,
  Ue = Object.defineProperty,
  pn = Object.getPrototypeOf,
  dn = Object.prototype.hasOwnProperty,
  gn = Object.getOwnPropertyNames,
  mn = Object.getOwnPropertyDescriptor;
var yn = (i) => Ue(i, "__esModule", { value: !0 });
var g = (i, e) => () => (
  e || ((e = { exports: {} }), i(e.exports, e)), e.exports
);
var wn = (i, e, t) => {
    if ((yn(i), (e && typeof e == "object") || typeof e == "function"))
      for (let r of gn(e))
        !dn.call(i, r) &&
          r !== "default" &&
          Ue(i, r, {
            get: () => e[r],
            enumerable: !(t = mn(e, r)) || t.enumerable,
          });
    return i;
  },
  vn = (i) =>
    i && i.__esModule
      ? i
      : wn(
          Ue(i != null ? hn(pn(i)) : {}, "default", {
            value: i,
            enumerable: !0,
          }),
          i
        );
var Fe = g(() => {});
var ze = g((ys, Ct) => {
  "use strict";
  var Ge = "'".charCodeAt(0),
    bt = '"'.charCodeAt(0),
    ue = "\\".charCodeAt(0),
    xt = "/".charCodeAt(0),
    ae = `
`.charCodeAt(0),
    $ = " ".charCodeAt(0),
    fe = "\f".charCodeAt(0),
    ce = "	".charCodeAt(0),
    he = "\r".charCodeAt(0),
    _n = "[".charCodeAt(0),
    Sn = "]".charCodeAt(0),
    Cn = "(".charCodeAt(0),
    bn = ")".charCodeAt(0),
    xn = "{".charCodeAt(0),
    On = "}".charCodeAt(0),
    An = ";".charCodeAt(0),
    En = "*".charCodeAt(0),
    Mn = ":".charCodeAt(0),
    Ln = "@".charCodeAt(0),
    pe = /[\t\n\f\r "#'()/;[\\\]{}]/g,
    de = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
    Rn = /.[\n"'(/\\]/,
    Ot = /[\da-f]/i;
  Ct.exports = function (e, t = {}) {
    let r = e.css.valueOf(),
      n = t.ignoreErrors,
      s,
      o,
      u,
      l,
      a,
      f,
      d,
      c,
      m,
      y,
      C = r.length,
      p = 0,
      _ = [],
      E = [];
    function le() {
      return p;
    }
    function Te(T) {
      throw e.error("Unclosed " + T, p);
    }
    function an() {
      return E.length === 0 && p >= C;
    }
    function fn(T) {
      if (E.length) return E.pop();
      if (p >= C) return;
      let De = T ? T.ignoreUnclosed : !1;
      switch (((s = r.charCodeAt(p)), s)) {
        case ae:
        case $:
        case ce:
        case he:
        case fe: {
          o = p;
          do (o += 1), (s = r.charCodeAt(o));
          while (s === $ || s === ae || s === ce || s === he || s === fe);
          (y = ["space", r.slice(p, o)]), (p = o - 1);
          break;
        }
        case _n:
        case Sn:
        case xn:
        case On:
        case Mn:
        case An:
        case bn: {
          let St = String.fromCharCode(s);
          y = [St, St, p];
          break;
        }
        case Cn: {
          if (
            ((c = _.length ? _.pop()[1] : ""),
            (m = r.charCodeAt(p + 1)),
            c === "url" &&
              m !== Ge &&
              m !== bt &&
              m !== $ &&
              m !== ae &&
              m !== ce &&
              m !== fe &&
              m !== he)
          ) {
            o = p;
            do {
              if (((f = !1), (o = r.indexOf(")", o + 1)), o === -1))
                if (n || De) {
                  o = p;
                  break;
                } else Te("bracket");
              for (d = o; r.charCodeAt(d - 1) === ue; ) (d -= 1), (f = !f);
            } while (f);
            (y = ["brackets", r.slice(p, o + 1), p, o]), (p = o);
          } else
            (o = r.indexOf(")", p + 1)),
              (l = r.slice(p, o + 1)),
              o === -1 || Rn.test(l)
                ? (y = ["(", "(", p])
                : ((y = ["brackets", l, p, o]), (p = o));
          break;
        }
        case Ge:
        case bt: {
          (u = s === Ge ? "'" : '"'), (o = p);
          do {
            if (((f = !1), (o = r.indexOf(u, o + 1)), o === -1))
              if (n || De) {
                o = p + 1;
                break;
              } else Te("string");
            for (d = o; r.charCodeAt(d - 1) === ue; ) (d -= 1), (f = !f);
          } while (f);
          (y = ["string", r.slice(p, o + 1), p, o]), (p = o);
          break;
        }
        case Ln: {
          (pe.lastIndex = p + 1),
            pe.test(r),
            pe.lastIndex === 0 ? (o = r.length - 1) : (o = pe.lastIndex - 2),
            (y = ["at-word", r.slice(p, o + 1), p, o]),
            (p = o);
          break;
        }
        case ue: {
          for (o = p, a = !0; r.charCodeAt(o + 1) === ue; ) (o += 1), (a = !a);
          if (
            ((s = r.charCodeAt(o + 1)),
            a &&
              s !== xt &&
              s !== $ &&
              s !== ae &&
              s !== ce &&
              s !== he &&
              s !== fe &&
              ((o += 1), Ot.test(r.charAt(o))))
          ) {
            for (; Ot.test(r.charAt(o + 1)); ) o += 1;
            r.charCodeAt(o + 1) === $ && (o += 1);
          }
          (y = ["word", r.slice(p, o + 1), p, o]), (p = o);
          break;
        }
        default: {
          s === xt && r.charCodeAt(p + 1) === En
            ? ((o = r.indexOf("*/", p + 2) + 1),
              o === 0 && (n || De ? (o = r.length) : Te("comment")),
              (y = ["comment", r.slice(p, o + 1), p, o]),
              (p = o))
            : ((de.lastIndex = p + 1),
              de.test(r),
              de.lastIndex === 0 ? (o = r.length - 1) : (o = de.lastIndex - 2),
              (y = ["word", r.slice(p, o + 1), p, o]),
              _.push(y),
              (p = o));
          break;
        }
      }
      return p++, y;
    }
    function cn(T) {
      E.push(T);
    }
    return { back: cn, nextToken: fn, endOfFile: an, position: le };
  };
});
var Be = g((ws, At) => {
  "use strict";
  var { cyan: J, gray: Pn, green: In, yellow: I, magenta: qn } = Fe(),
    Nn = ze(),
    Et;
  function kn(i) {
    Et = i;
  }
  var Tn = {
    brackets: J,
    "at-word": J,
    comment: Pn,
    string: In,
    class: I,
    hash: qn,
    call: J,
    "(": J,
    ")": J,
    "{": I,
    "}": I,
    "[": I,
    "]": I,
    ":": I,
    ";": I,
  };
  function Dn([i, e], t) {
    if (i === "word") {
      if (e[0] === ".") return "class";
      if (e[0] === "#") return "hash";
    }
    if (!t.endOfFile()) {
      let r = t.nextToken();
      if ((t.back(r), r[0] === "brackets" || r[0] === "(")) return "call";
    }
    return i;
  }
  function Mt(i) {
    let e = Nn(new Et(i), { ignoreErrors: !0 }),
      t = "";
    for (; !e.endOfFile(); ) {
      let r = e.nextToken(),
        n = Tn[Dn(r, e)];
      n
        ? (t += r[1].split(/\r?\n/).map((s) => n(s)).join(`
`))
        : (t += r[1]);
    }
    return t;
  }
  Mt.registerInput = kn;
  At.exports = Mt;
});
var ge = g((vs, Lt) => {
  "use strict";
  var { red: Un, bold: Fn, gray: Gn, options: zn } = Fe(),
    Rt = Be(),
    D = class extends Error {
      constructor(e, t, r, n, s, o) {
        super(e);
        (this.name = "CssSyntaxError"),
          (this.reason = e),
          s && (this.file = s),
          n && (this.source = n),
          o && (this.plugin = o),
          typeof t != "undefined" &&
            typeof r != "undefined" &&
            ((this.line = t), (this.column = r)),
          this.setMessage(),
          Error.captureStackTrace && Error.captureStackTrace(this, D);
      }
      setMessage() {
        (this.message = this.plugin ? this.plugin + ": " : ""),
          (this.message += this.file ? this.file : "<css input>"),
          typeof this.line != "undefined" &&
            (this.message += ":" + this.line + ":" + this.column),
          (this.message += ": " + this.reason);
      }
      showSourceCode(e) {
        if (!this.source) return "";
        let t = this.source;
        e == null && (e = zn.enabled), Rt && e && (t = Rt(t));
        let r = t.split(/\r?\n/),
          n = Math.max(this.line - 3, 0),
          s = Math.min(this.line + 2, r.length),
          o = String(s).length,
          u,
          l;
        return (
          e ? ((u = (a) => Fn(Un(a))), (l = (a) => Gn(a))) : (u = l = (a) => a),
          r.slice(n, s).map((a, f) => {
            let d = n + 1 + f,
              c = " " + (" " + d).slice(-o) + " | ";
            if (d === this.line) {
              let m =
                l(c.replace(/\d/g, " ")) +
                a.slice(0, this.column - 1).replace(/[^\t]/g, " ");
              return (
                u(">") +
                l(c) +
                a +
                `
 ` +
                m +
                u("^")
              );
            }
            return " " + l(c) + a;
          }).join(`
`)
        );
      }
      toString() {
        let e = this.showSourceCode();
        return (
          e &&
            (e =
              `

` +
              e +
              `
`),
          this.name + ": " + this.message + e
        );
      }
    };
  Lt.exports = D;
  D.default = D;
});
var je = g((_s, Pt) => {
  "use strict";
  var It = {
    colon: ": ",
    indent: "    ",
    beforeDecl: `
`,
    beforeRule: `
`,
    beforeOpen: " ",
    beforeClose: `
`,
    beforeComment: `
`,
    after: `
`,
    emptyBody: "",
    commentLeft: " ",
    commentRight: " ",
    semicolon: !1,
  };
  function Bn(i) {
    return i[0].toUpperCase() + i.slice(1);
  }
  var qt = class {
    constructor(e) {
      this.builder = e;
    }
    stringify(e, t) {
      if (!this[e.type])
        throw new Error(
          "Unknown AST node type " +
            e.type +
            ". Maybe you need to change PostCSS stringifier."
        );
      this[e.type](e, t);
    }
    root(e) {
      this.body(e), e.raws.after && this.builder(e.raws.after);
    }
    comment(e) {
      let t = this.raw(e, "left", "commentLeft"),
        r = this.raw(e, "right", "commentRight");
      this.builder("/*" + t + e.text + r + "*/", e);
    }
    decl(e, t) {
      let r = this.raw(e, "between", "colon"),
        n = e.prop + r + this.rawValue(e, "value");
      e.important && (n += e.raws.important || " !important"),
        t && (n += ";"),
        this.builder(n, e);
    }
    rule(e) {
      this.block(e, this.rawValue(e, "selector")),
        e.raws.ownSemicolon && this.builder(e.raws.ownSemicolon, e, "end");
    }
    atrule(e, t) {
      let r = "@" + e.name,
        n = e.params ? this.rawValue(e, "params") : "";
      if (
        (typeof e.raws.afterName != "undefined"
          ? (r += e.raws.afterName)
          : n && (r += " "),
        e.nodes)
      )
        this.block(e, r + n);
      else {
        let s = (e.raws.between || "") + (t ? ";" : "");
        this.builder(r + n + s, e);
      }
    }
    body(e) {
      let t = e.nodes.length - 1;
      for (; t > 0 && e.nodes[t].type === "comment"; ) t -= 1;
      let r = this.raw(e, "semicolon");
      for (let n = 0; n < e.nodes.length; n++) {
        let s = e.nodes[n],
          o = this.raw(s, "before");
        o && this.builder(o), this.stringify(s, t !== n || r);
      }
    }
    block(e, t) {
      let r = this.raw(e, "between", "beforeOpen");
      this.builder(t + r + "{", e, "start");
      let n;
      e.nodes && e.nodes.length
        ? (this.body(e), (n = this.raw(e, "after")))
        : (n = this.raw(e, "after", "emptyBody")),
        n && this.builder(n),
        this.builder("}", e, "end");
    }
    raw(e, t, r) {
      let n;
      if ((r || (r = t), t && ((n = e.raws[t]), typeof n != "undefined")))
        return n;
      let s = e.parent;
      if (r === "before" && (!s || (s.type === "root" && s.first === e)))
        return "";
      if (!s) return It[r];
      let o = e.root();
      if (
        (o.rawCache || (o.rawCache = {}), typeof o.rawCache[r] != "undefined")
      )
        return o.rawCache[r];
      if (r === "before" || r === "after") return this.beforeAfter(e, r);
      {
        let u = "raw" + Bn(r);
        this[u]
          ? (n = this[u](o, e))
          : o.walk((l) => {
              if (((n = l.raws[t]), typeof n != "undefined")) return !1;
            });
      }
      return typeof n == "undefined" && (n = It[r]), (o.rawCache[r] = n), n;
    }
    rawSemicolon(e) {
      let t;
      return (
        e.walk((r) => {
          if (
            r.nodes &&
            r.nodes.length &&
            r.last.type === "decl" &&
            ((t = r.raws.semicolon), typeof t != "undefined")
          )
            return !1;
        }),
        t
      );
    }
    rawEmptyBody(e) {
      let t;
      return (
        e.walk((r) => {
          if (
            r.nodes &&
            r.nodes.length === 0 &&
            ((t = r.raws.after), typeof t != "undefined")
          )
            return !1;
        }),
        t
      );
    }
    rawIndent(e) {
      if (e.raws.indent) return e.raws.indent;
      let t;
      return (
        e.walk((r) => {
          let n = r.parent;
          if (
            n &&
            n !== e &&
            n.parent &&
            n.parent === e &&
            typeof r.raws.before != "undefined"
          ) {
            let s = r.raws.before.split(`
`);
            return (t = s[s.length - 1]), (t = t.replace(/\S/g, "")), !1;
          }
        }),
        t
      );
    }
    rawBeforeComment(e, t) {
      let r;
      return (
        e.walkComments((n) => {
          if (typeof n.raws.before != "undefined")
            return (
              (r = n.raws.before),
              r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")),
              !1
            );
        }),
        typeof r == "undefined"
          ? (r = this.raw(t, null, "beforeDecl"))
          : r && (r = r.replace(/\S/g, "")),
        r
      );
    }
    rawBeforeDecl(e, t) {
      let r;
      return (
        e.walkDecls((n) => {
          if (typeof n.raws.before != "undefined")
            return (
              (r = n.raws.before),
              r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")),
              !1
            );
        }),
        typeof r == "undefined"
          ? (r = this.raw(t, null, "beforeRule"))
          : r && (r = r.replace(/\S/g, "")),
        r
      );
    }
    rawBeforeRule(e) {
      let t;
      return (
        e.walk((r) => {
          if (
            r.nodes &&
            (r.parent !== e || e.first !== r) &&
            typeof r.raws.before != "undefined"
          )
            return (
              (t = r.raws.before),
              t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")),
              !1
            );
        }),
        t && (t = t.replace(/\S/g, "")),
        t
      );
    }
    rawBeforeClose(e) {
      let t;
      return (
        e.walk((r) => {
          if (
            r.nodes &&
            r.nodes.length > 0 &&
            typeof r.raws.after != "undefined"
          )
            return (
              (t = r.raws.after),
              t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")),
              !1
            );
        }),
        t && (t = t.replace(/\S/g, "")),
        t
      );
    }
    rawBeforeOpen(e) {
      let t;
      return (
        e.walk((r) => {
          if (
            r.type !== "decl" &&
            ((t = r.raws.between), typeof t != "undefined")
          )
            return !1;
        }),
        t
      );
    }
    rawColon(e) {
      let t;
      return (
        e.walkDecls((r) => {
          if (typeof r.raws.between != "undefined")
            return (t = r.raws.between.replace(/[^\s:]/g, "")), !1;
        }),
        t
      );
    }
    beforeAfter(e, t) {
      let r;
      e.type === "decl"
        ? (r = this.raw(e, null, "beforeDecl"))
        : e.type === "comment"
        ? (r = this.raw(e, null, "beforeComment"))
        : t === "before"
        ? (r = this.raw(e, null, "beforeRule"))
        : (r = this.raw(e, null, "beforeClose"));
      let n = e.parent,
        s = 0;
      for (; n && n.type !== "root"; ) (s += 1), (n = n.parent);
      if (
        r.includes(`
`)
      ) {
        let o = this.raw(e, null, "indent");
        if (o.length) for (let u = 0; u < s; u++) r += o;
      }
      return r;
    }
    rawValue(e, t) {
      let r = e[t],
        n = e.raws[t];
      return n && n.value === r ? n.raw : r;
    }
  };
  Pt.exports = qt;
});
var me = g((Ss, Nt) => {
  "use strict";
  Nt.exports.isClean = Symbol("isClean");
});
var ye = g((Cs, kt) => {
  "use strict";
  var jn = je();
  function Ve(i, e) {
    new jn(e).stringify(i);
  }
  kt.exports = Ve;
  Ve.default = Ve;
});
var Q = g((bs, Tt) => {
  "use strict";
  var Vn = ge(),
    Wn = je(),
    { isClean: we } = me(),
    $n = ye();
  function We(i, e) {
    let t = new i.constructor();
    for (let r in i) {
      if (!Object.prototype.hasOwnProperty.call(i, r) || r === "proxyCache")
        continue;
      let n = i[r],
        s = typeof n;
      r === "parent" && s === "object"
        ? e && (t[r] = e)
        : r === "source"
        ? (t[r] = n)
        : Array.isArray(n)
        ? (t[r] = n.map((o) => We(o, t)))
        : (s === "object" && n !== null && (n = We(n)), (t[r] = n));
    }
    return t;
  }
  var ve = class {
    constructor(e = {}) {
      (this.raws = {}), (this[we] = !1);
      for (let t in e)
        if (t === "nodes") {
          this.nodes = [];
          for (let r of e[t])
            typeof r.clone == "function"
              ? this.append(r.clone())
              : this.append(r);
        } else this[t] = e[t];
    }
    error(e, t = {}) {
      if (this.source) {
        let r = this.positionBy(t);
        return this.source.input.error(e, r.line, r.column, t);
      }
      return new Vn(e);
    }
    warn(e, t, r) {
      let n = { node: this };
      for (let s in r) n[s] = r[s];
      return e.warn(t, n);
    }
    remove() {
      return (
        this.parent && this.parent.removeChild(this),
        (this.parent = void 0),
        this
      );
    }
    toString(e = $n) {
      e.stringify && (e = e.stringify);
      let t = "";
      return (
        e(this, (r) => {
          t += r;
        }),
        t
      );
    }
    clone(e = {}) {
      let t = We(this);
      for (let r in e) t[r] = e[r];
      return t;
    }
    cloneBefore(e = {}) {
      let t = this.clone(e);
      return this.parent.insertBefore(this, t), t;
    }
    cloneAfter(e = {}) {
      let t = this.clone(e);
      return this.parent.insertAfter(this, t), t;
    }
    replaceWith(...e) {
      if (this.parent) {
        let t = this,
          r = !1;
        for (let n of e)
          n === this
            ? (r = !0)
            : r
            ? (this.parent.insertAfter(t, n), (t = n))
            : this.parent.insertBefore(t, n);
        r || this.remove();
      }
      return this;
    }
    next() {
      if (!this.parent) return;
      let e = this.parent.index(this);
      return this.parent.nodes[e + 1];
    }
    prev() {
      if (!this.parent) return;
      let e = this.parent.index(this);
      return this.parent.nodes[e - 1];
    }
    before(e) {
      return this.parent.insertBefore(this, e), this;
    }
    after(e) {
      return this.parent.insertAfter(this, e), this;
    }
    root() {
      let e = this;
      for (; e.parent; ) e = e.parent;
      return e;
    }
    raw(e, t) {
      return new Wn().raw(this, e, t);
    }
    cleanRaws(e) {
      delete this.raws.before,
        delete this.raws.after,
        e || delete this.raws.between;
    }
    toJSON(e, t) {
      let r = {},
        n = t == null;
      t = t || new Map();
      let s = 0;
      for (let o in this) {
        if (!Object.prototype.hasOwnProperty.call(this, o) || o === "parent")
          continue;
        let u = this[o];
        if (Array.isArray(u))
          r[o] = u.map((l) =>
            typeof l == "object" && l.toJSON ? l.toJSON(null, t) : l
          );
        else if (typeof u == "object" && u.toJSON) r[o] = u.toJSON(null, t);
        else if (o === "source") {
          let l = t.get(u.input);
          l == null && ((l = s), t.set(u.input, s), s++),
            (r[o] = { inputId: l, start: u.start, end: u.end });
        } else r[o] = u;
      }
      return n && (r.inputs = [...t.keys()].map((o) => o.toJSON())), r;
    }
    positionInside(e) {
      let t = this.toString(),
        r = this.source.start.column,
        n = this.source.start.line;
      for (let s = 0; s < e; s++)
        t[s] ===
        `
`
          ? ((r = 1), (n += 1))
          : (r += 1);
      return { line: n, column: r };
    }
    positionBy(e) {
      let t = this.source.start;
      if (e.index) t = this.positionInside(e.index);
      else if (e.word) {
        let r = this.toString().indexOf(e.word);
        r !== -1 && (t = this.positionInside(r));
      }
      return t;
    }
    getProxyProcessor() {
      return {
        set(e, t, r) {
          return (
            e[t] === r ||
              ((e[t] = r),
              (t === "prop" ||
                t === "value" ||
                t === "name" ||
                t === "params" ||
                t === "important" ||
                t === "text") &&
                e.markDirty()),
            !0
          );
        },
        get(e, t) {
          return t === "proxyOf"
            ? e
            : t === "root"
            ? () => e.root().toProxy()
            : e[t];
        },
      };
    }
    toProxy() {
      return (
        this.proxyCache ||
          (this.proxyCache = new Proxy(this, this.getProxyProcessor())),
        this.proxyCache
      );
    }
    addToError(e) {
      if (
        ((e.postcssNode = this),
        e.stack && this.source && /\n\s{4}at /.test(e.stack))
      ) {
        let t = this.source;
        e.stack = e.stack.replace(
          /\n\s{4}at /,
          `$&${t.input.from}:${t.start.line}:${t.start.column}$&`
        );
      }
      return e;
    }
    markDirty() {
      if (this[we]) {
        this[we] = !1;
        let e = this;
        for (; (e = e.parent); ) e[we] = !1;
      }
    }
    get proxyOf() {
      return this;
    }
  };
  Tt.exports = ve;
  ve.default = ve;
});
var Y = g((xs, Dt) => {
  "use strict";
  var Jn = Q(),
    _e = class extends Jn {
      constructor(e) {
        e &&
          typeof e.value != "undefined" &&
          typeof e.value != "string" &&
          (e = { ...e, value: String(e.value) }),
          super(e),
          (this.type = "decl");
      }
      get variable() {
        return this.prop.startsWith("--") || this.prop[0] === "$";
      }
    };
  Dt.exports = _e;
  _e.default = _e;
});
var Ft = g(($e) => {
  var Ut = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
    ""
  );
  $e.encode = function (i) {
    if (0 <= i && i < Ut.length) return Ut[i];
    throw new TypeError("Must be between 0 and 63: " + i);
  };
  $e.decode = function (i) {
    var e = 65,
      t = 90,
      r = 97,
      n = 122,
      s = 48,
      o = 57,
      u = 43,
      l = 47,
      a = 26,
      f = 52;
    return e <= i && i <= t
      ? i - e
      : r <= i && i <= n
      ? i - r + a
      : s <= i && i <= o
      ? i - s + f
      : i == u
      ? 62
      : i == l
      ? 63
      : -1;
  };
});
var Ye = g((Je) => {
  var Gt = Ft(),
    Qe = 5,
    zt = 1 << Qe,
    Bt = zt - 1,
    jt = zt;
  function Qn(i) {
    return i < 0 ? (-i << 1) + 1 : (i << 1) + 0;
  }
  function Yn(i) {
    var e = (i & 1) == 1,
      t = i >> 1;
    return e ? -t : t;
  }
  Je.encode = function (e) {
    var t = "",
      r,
      n = Qn(e);
    do (r = n & Bt), (n >>>= Qe), n > 0 && (r |= jt), (t += Gt.encode(r));
    while (n > 0);
    return t;
  };
  Je.decode = function (e, t, r) {
    var n = e.length,
      s = 0,
      o = 0,
      u,
      l;
    do {
      if (t >= n) throw new Error("Expected more digits in base 64 VLQ value.");
      if (((l = Gt.decode(e.charCodeAt(t++))), l === -1))
        throw new Error("Invalid base64 digit: " + e.charAt(t - 1));
      (u = !!(l & jt)), (l &= Bt), (s = s + (l << o)), (o += Qe);
    } while (u);
    (r.value = Yn(s)), (r.rest = t);
  };
});
var G = g((x) => {
  function Hn(i, e, t) {
    if (e in i) return i[e];
    if (arguments.length === 3) return t;
    throw new Error('"' + e + '" is a required argument.');
  }
  x.getArg = Hn;
  var Vt = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,
    Kn = /^data:.+\,.+$/;
  function H(i) {
    var e = i.match(Vt);
    return e
      ? { scheme: e[1], auth: e[2], host: e[3], port: e[4], path: e[5] }
      : null;
  }
  x.urlParse = H;
  function U(i) {
    var e = "";
    return (
      i.scheme && (e += i.scheme + ":"),
      (e += "//"),
      i.auth && (e += i.auth + "@"),
      i.host && (e += i.host),
      i.port && (e += ":" + i.port),
      i.path && (e += i.path),
      e
    );
  }
  x.urlGenerate = U;
  function He(i) {
    var e = i,
      t = H(i);
    if (t) {
      if (!t.path) return i;
      e = t.path;
    }
    for (
      var r = x.isAbsolute(e), n = e.split(/\/+/), s, o = 0, u = n.length - 1;
      u >= 0;
      u--
    )
      (s = n[u]),
        s === "."
          ? n.splice(u, 1)
          : s === ".."
          ? o++
          : o > 0 &&
            (s === "" ? (n.splice(u + 1, o), (o = 0)) : (n.splice(u, 2), o--));
    return (
      (e = n.join("/")),
      e === "" && (e = r ? "/" : "."),
      t ? ((t.path = e), U(t)) : e
    );
  }
  x.normalize = He;
  function Wt(i, e) {
    i === "" && (i = "."), e === "" && (e = ".");
    var t = H(e),
      r = H(i);
    if ((r && (i = r.path || "/"), t && !t.scheme))
      return r && (t.scheme = r.scheme), U(t);
    if (t || e.match(Kn)) return e;
    if (r && !r.host && !r.path) return (r.host = e), U(r);
    var n = e.charAt(0) === "/" ? e : He(i.replace(/\/+$/, "") + "/" + e);
    return r ? ((r.path = n), U(r)) : n;
  }
  x.join = Wt;
  x.isAbsolute = function (i) {
    return i.charAt(0) === "/" || Vt.test(i);
  };
  function Zn(i, e) {
    i === "" && (i = "."), (i = i.replace(/\/$/, ""));
    for (var t = 0; e.indexOf(i + "/") !== 0; ) {
      var r = i.lastIndexOf("/");
      if (r < 0 || ((i = i.slice(0, r)), i.match(/^([^\/]+:\/)?\/*$/)))
        return e;
      ++t;
    }
    return Array(t + 1).join("../") + e.substr(i.length + 1);
  }
  x.relative = Zn;
  var $t = (function () {
    var i = Object.create(null);
    return !("__proto__" in i);
  })();
  function Jt(i) {
    return i;
  }
  function Xn(i) {
    return Qt(i) ? "$" + i : i;
  }
  x.toSetString = $t ? Jt : Xn;
  function ei(i) {
    return Qt(i) ? i.slice(1) : i;
  }
  x.fromSetString = $t ? Jt : ei;
  function Qt(i) {
    if (!i) return !1;
    var e = i.length;
    if (
      e < 9 ||
      i.charCodeAt(e - 1) !== 95 ||
      i.charCodeAt(e - 2) !== 95 ||
      i.charCodeAt(e - 3) !== 111 ||
      i.charCodeAt(e - 4) !== 116 ||
      i.charCodeAt(e - 5) !== 111 ||
      i.charCodeAt(e - 6) !== 114 ||
      i.charCodeAt(e - 7) !== 112 ||
      i.charCodeAt(e - 8) !== 95 ||
      i.charCodeAt(e - 9) !== 95
    )
      return !1;
    for (var t = e - 10; t >= 0; t--) if (i.charCodeAt(t) !== 36) return !1;
    return !0;
  }
  function ti(i, e, t) {
    var r = F(i.source, e.source);
    return r !== 0 ||
      ((r = i.originalLine - e.originalLine), r !== 0) ||
      ((r = i.originalColumn - e.originalColumn), r !== 0 || t) ||
      ((r = i.generatedColumn - e.generatedColumn), r !== 0) ||
      ((r = i.generatedLine - e.generatedLine), r !== 0)
      ? r
      : F(i.name, e.name);
  }
  x.compareByOriginalPositions = ti;
  function ri(i, e, t) {
    var r = i.generatedLine - e.generatedLine;
    return r !== 0 ||
      ((r = i.generatedColumn - e.generatedColumn), r !== 0 || t) ||
      ((r = F(i.source, e.source)), r !== 0) ||
      ((r = i.originalLine - e.originalLine), r !== 0) ||
      ((r = i.originalColumn - e.originalColumn), r !== 0)
      ? r
      : F(i.name, e.name);
  }
  x.compareByGeneratedPositionsDeflated = ri;
  function F(i, e) {
    return i === e ? 0 : i === null ? 1 : e === null ? -1 : i > e ? 1 : -1;
  }
  function ni(i, e) {
    var t = i.generatedLine - e.generatedLine;
    return t !== 0 ||
      ((t = i.generatedColumn - e.generatedColumn), t !== 0) ||
      ((t = F(i.source, e.source)), t !== 0) ||
      ((t = i.originalLine - e.originalLine), t !== 0) ||
      ((t = i.originalColumn - e.originalColumn), t !== 0)
      ? t
      : F(i.name, e.name);
  }
  x.compareByGeneratedPositionsInflated = ni;
  function ii(i) {
    return JSON.parse(i.replace(/^\)]}'[^\n]*\n/, ""));
  }
  x.parseSourceMapInput = ii;
  function si(i, e, t) {
    if (
      ((e = e || ""),
      i && (i[i.length - 1] !== "/" && e[0] !== "/" && (i += "/"), (e = i + e)),
      t)
    ) {
      var r = H(t);
      if (!r) throw new Error("sourceMapURL could not be parsed");
      if (r.path) {
        var n = r.path.lastIndexOf("/");
        n >= 0 && (r.path = r.path.substring(0, n + 1));
      }
      e = Wt(U(r), e);
    }
    return He(e);
  }
  x.computeSourceURL = si;
});
var Xe = g((Yt) => {
  var Ke = G(),
    Ze = Object.prototype.hasOwnProperty,
    q = typeof Map != "undefined";
  function R() {
    (this._array = []), (this._set = q ? new Map() : Object.create(null));
  }
  R.fromArray = function (e, t) {
    for (var r = new R(), n = 0, s = e.length; n < s; n++) r.add(e[n], t);
    return r;
  };
  R.prototype.size = function () {
    return q ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  };
  R.prototype.add = function (e, t) {
    var r = q ? e : Ke.toSetString(e),
      n = q ? this.has(e) : Ze.call(this._set, r),
      s = this._array.length;
    (!n || t) && this._array.push(e),
      n || (q ? this._set.set(e, s) : (this._set[r] = s));
  };
  R.prototype.has = function (e) {
    if (q) return this._set.has(e);
    var t = Ke.toSetString(e);
    return Ze.call(this._set, t);
  };
  R.prototype.indexOf = function (e) {
    if (q) {
      var t = this._set.get(e);
      if (t >= 0) return t;
    } else {
      var r = Ke.toSetString(e);
      if (Ze.call(this._set, r)) return this._set[r];
    }
    throw new Error('"' + e + '" is not in the set.');
  };
  R.prototype.at = function (e) {
    if (e >= 0 && e < this._array.length) return this._array[e];
    throw new Error("No element indexed by " + e);
  };
  R.prototype.toArray = function () {
    return this._array.slice();
  };
  Yt.ArraySet = R;
});
var Zt = g((Ht) => {
  var Kt = G();
  function oi(i, e) {
    var t = i.generatedLine,
      r = e.generatedLine,
      n = i.generatedColumn,
      s = e.generatedColumn;
    return (
      r > t ||
      (r == t && s >= n) ||
      Kt.compareByGeneratedPositionsInflated(i, e) <= 0
    );
  }
  function Se() {
    (this._array = []),
      (this._sorted = !0),
      (this._last = { generatedLine: -1, generatedColumn: 0 });
  }
  Se.prototype.unsortedForEach = function (e, t) {
    this._array.forEach(e, t);
  };
  Se.prototype.add = function (e) {
    oi(this._last, e)
      ? ((this._last = e), this._array.push(e))
      : ((this._sorted = !1), this._array.push(e));
  };
  Se.prototype.toArray = function () {
    return (
      this._sorted ||
        (this._array.sort(Kt.compareByGeneratedPositionsInflated),
        (this._sorted = !0)),
      this._array
    );
  };
  Ht.MappingList = Se;
});
var et = g((Xt) => {
  var K = Ye(),
    S = G(),
    Ce = Xe().ArraySet,
    li = Zt().MappingList;
  function A(i) {
    i || (i = {}),
      (this._file = S.getArg(i, "file", null)),
      (this._sourceRoot = S.getArg(i, "sourceRoot", null)),
      (this._skipValidation = S.getArg(i, "skipValidation", !1)),
      (this._sources = new Ce()),
      (this._names = new Ce()),
      (this._mappings = new li()),
      (this._sourcesContents = null);
  }
  A.prototype._version = 3;
  A.fromSourceMap = function (e) {
    var t = e.sourceRoot,
      r = new A({ file: e.file, sourceRoot: t });
    return (
      e.eachMapping(function (n) {
        var s = {
          generated: { line: n.generatedLine, column: n.generatedColumn },
        };
        n.source != null &&
          ((s.source = n.source),
          t != null && (s.source = S.relative(t, s.source)),
          (s.original = { line: n.originalLine, column: n.originalColumn }),
          n.name != null && (s.name = n.name)),
          r.addMapping(s);
      }),
      e.sources.forEach(function (n) {
        var s = n;
        t !== null && (s = S.relative(t, n)),
          r._sources.has(s) || r._sources.add(s);
        var o = e.sourceContentFor(n);
        o != null && r.setSourceContent(n, o);
      }),
      r
    );
  };
  A.prototype.addMapping = function (e) {
    var t = S.getArg(e, "generated"),
      r = S.getArg(e, "original", null),
      n = S.getArg(e, "source", null),
      s = S.getArg(e, "name", null);
    this._skipValidation || this._validateMapping(t, r, n, s),
      n != null &&
        ((n = String(n)), this._sources.has(n) || this._sources.add(n)),
      s != null && ((s = String(s)), this._names.has(s) || this._names.add(s)),
      this._mappings.add({
        generatedLine: t.line,
        generatedColumn: t.column,
        originalLine: r != null && r.line,
        originalColumn: r != null && r.column,
        source: n,
        name: s,
      });
  };
  A.prototype.setSourceContent = function (e, t) {
    var r = e;
    this._sourceRoot != null && (r = S.relative(this._sourceRoot, r)),
      t != null
        ? (this._sourcesContents ||
            (this._sourcesContents = Object.create(null)),
          (this._sourcesContents[S.toSetString(r)] = t))
        : this._sourcesContents &&
          (delete this._sourcesContents[S.toSetString(r)],
          Object.keys(this._sourcesContents).length === 0 &&
            (this._sourcesContents = null));
  };
  A.prototype.applySourceMap = function (e, t, r) {
    var n = t;
    if (t == null) {
      if (e.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      n = e.file;
    }
    var s = this._sourceRoot;
    s != null && (n = S.relative(s, n));
    var o = new Ce(),
      u = new Ce();
    this._mappings.unsortedForEach(function (l) {
      if (l.source === n && l.originalLine != null) {
        var a = e.originalPositionFor({
          line: l.originalLine,
          column: l.originalColumn,
        });
        a.source != null &&
          ((l.source = a.source),
          r != null && (l.source = S.join(r, l.source)),
          s != null && (l.source = S.relative(s, l.source)),
          (l.originalLine = a.line),
          (l.originalColumn = a.column),
          a.name != null && (l.name = a.name));
      }
      var f = l.source;
      f != null && !o.has(f) && o.add(f);
      var d = l.name;
      d != null && !u.has(d) && u.add(d);
    }, this),
      (this._sources = o),
      (this._names = u),
      e.sources.forEach(function (l) {
        var a = e.sourceContentFor(l);
        a != null &&
          (r != null && (l = S.join(r, l)),
          s != null && (l = S.relative(s, l)),
          this.setSourceContent(l, a));
      }, this);
  };
  A.prototype._validateMapping = function (e, t, r, n) {
    if (t && typeof t.line != "number" && typeof t.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (
      !(
        e &&
        "line" in e &&
        "column" in e &&
        e.line > 0 &&
        e.column >= 0 &&
        !t &&
        !r &&
        !n
      )
    ) {
      if (
        e &&
        "line" in e &&
        "column" in e &&
        t &&
        "line" in t &&
        "column" in t &&
        e.line > 0 &&
        e.column >= 0 &&
        t.line > 0 &&
        t.column >= 0 &&
        r
      )
        return;
      throw new Error(
        "Invalid mapping: " +
          JSON.stringify({ generated: e, source: r, original: t, name: n })
      );
    }
  };
  A.prototype._serializeMappings = function () {
    for (
      var e = 0,
        t = 1,
        r = 0,
        n = 0,
        s = 0,
        o = 0,
        u = "",
        l,
        a,
        f,
        d,
        c = this._mappings.toArray(),
        m = 0,
        y = c.length;
      m < y;
      m++
    ) {
      if (((a = c[m]), (l = ""), a.generatedLine !== t))
        for (e = 0; a.generatedLine !== t; ) (l += ";"), t++;
      else if (m > 0) {
        if (!S.compareByGeneratedPositionsInflated(a, c[m - 1])) continue;
        l += ",";
      }
      (l += K.encode(a.generatedColumn - e)),
        (e = a.generatedColumn),
        a.source != null &&
          ((d = this._sources.indexOf(a.source)),
          (l += K.encode(d - o)),
          (o = d),
          (l += K.encode(a.originalLine - 1 - n)),
          (n = a.originalLine - 1),
          (l += K.encode(a.originalColumn - r)),
          (r = a.originalColumn),
          a.name != null &&
            ((f = this._names.indexOf(a.name)),
            (l += K.encode(f - s)),
            (s = f))),
        (u += l);
    }
    return u;
  };
  A.prototype._generateSourcesContent = function (e, t) {
    return e.map(function (r) {
      if (!this._sourcesContents) return null;
      t != null && (r = S.relative(t, r));
      var n = S.toSetString(r);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, n)
        ? this._sourcesContents[n]
        : null;
    }, this);
  };
  A.prototype.toJSON = function () {
    var e = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings(),
    };
    return (
      this._file != null && (e.file = this._file),
      this._sourceRoot != null && (e.sourceRoot = this._sourceRoot),
      this._sourcesContents &&
        (e.sourcesContent = this._generateSourcesContent(
          e.sources,
          e.sourceRoot
        )),
      e
    );
  };
  A.prototype.toString = function () {
    return JSON.stringify(this.toJSON());
  };
  Xt.SourceMapGenerator = A;
});
var er = g((N) => {
  N.GREATEST_LOWER_BOUND = 1;
  N.LEAST_UPPER_BOUND = 2;
  function tt(i, e, t, r, n, s) {
    var o = Math.floor((e - i) / 2) + i,
      u = n(t, r[o], !0);
    return u === 0
      ? o
      : u > 0
      ? e - o > 1
        ? tt(o, e, t, r, n, s)
        : s == N.LEAST_UPPER_BOUND
        ? e < r.length
          ? e
          : -1
        : o
      : o - i > 1
      ? tt(i, o, t, r, n, s)
      : s == N.LEAST_UPPER_BOUND
      ? o
      : i < 0
      ? -1
      : i;
  }
  N.search = function (e, t, r, n) {
    if (t.length === 0) return -1;
    var s = tt(-1, t.length, e, t, r, n || N.GREATEST_LOWER_BOUND);
    if (s < 0) return -1;
    for (; s - 1 >= 0 && r(t[s], t[s - 1], !0) === 0; ) --s;
    return s;
  };
});
var rr = g((tr) => {
  function rt(i, e, t) {
    var r = i[e];
    (i[e] = i[t]), (i[t] = r);
  }
  function ui(i, e) {
    return Math.round(i + Math.random() * (e - i));
  }
  function nt(i, e, t, r) {
    if (t < r) {
      var n = ui(t, r),
        s = t - 1;
      rt(i, n, r);
      for (var o = i[r], u = t; u < r; u++)
        e(i[u], o) <= 0 && ((s += 1), rt(i, s, u));
      rt(i, s + 1, u);
      var l = s + 1;
      nt(i, e, t, l - 1), nt(i, e, l + 1, r);
    }
  }
  tr.quickSort = function (i, e) {
    nt(i, e, 0, i.length - 1);
  };
});
var ir = g((be) => {
  var h = G(),
    it = er(),
    z = Xe().ArraySet,
    ai = Ye(),
    Z = rr().quickSort;
  function v(i, e) {
    var t = i;
    return (
      typeof i == "string" && (t = h.parseSourceMapInput(i)),
      t.sections != null ? new M(t, e) : new b(t, e)
    );
  }
  v.fromSourceMap = function (i, e) {
    return b.fromSourceMap(i, e);
  };
  v.prototype._version = 3;
  v.prototype.__generatedMappings = null;
  Object.defineProperty(v.prototype, "_generatedMappings", {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return (
        this.__generatedMappings ||
          this._parseMappings(this._mappings, this.sourceRoot),
        this.__generatedMappings
      );
    },
  });
  v.prototype.__originalMappings = null;
  Object.defineProperty(v.prototype, "_originalMappings", {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return (
        this.__originalMappings ||
          this._parseMappings(this._mappings, this.sourceRoot),
        this.__originalMappings
      );
    },
  });
  v.prototype._charIsMappingSeparator = function (e, t) {
    var r = e.charAt(t);
    return r === ";" || r === ",";
  };
  v.prototype._parseMappings = function (e, t) {
    throw new Error("Subclasses must implement _parseMappings");
  };
  v.GENERATED_ORDER = 1;
  v.ORIGINAL_ORDER = 2;
  v.GREATEST_LOWER_BOUND = 1;
  v.LEAST_UPPER_BOUND = 2;
  v.prototype.eachMapping = function (e, t, r) {
    var n = t || null,
      s = r || v.GENERATED_ORDER,
      o;
    switch (s) {
      case v.GENERATED_ORDER:
        o = this._generatedMappings;
        break;
      case v.ORIGINAL_ORDER:
        o = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var u = this.sourceRoot;
    o.map(function (l) {
      var a = l.source === null ? null : this._sources.at(l.source);
      return (
        (a = h.computeSourceURL(u, a, this._sourceMapURL)),
        {
          source: a,
          generatedLine: l.generatedLine,
          generatedColumn: l.generatedColumn,
          originalLine: l.originalLine,
          originalColumn: l.originalColumn,
          name: l.name === null ? null : this._names.at(l.name),
        }
      );
    }, this).forEach(e, n);
  };
  v.prototype.allGeneratedPositionsFor = function (e) {
    var t = h.getArg(e, "line"),
      r = {
        source: h.getArg(e, "source"),
        originalLine: t,
        originalColumn: h.getArg(e, "column", 0),
      };
    if (((r.source = this._findSourceIndex(r.source)), r.source < 0)) return [];
    var n = [],
      s = this._findMapping(
        r,
        this._originalMappings,
        "originalLine",
        "originalColumn",
        h.compareByOriginalPositions,
        it.LEAST_UPPER_BOUND
      );
    if (s >= 0) {
      var o = this._originalMappings[s];
      if (e.column === void 0)
        for (var u = o.originalLine; o && o.originalLine === u; )
          n.push({
            line: h.getArg(o, "generatedLine", null),
            column: h.getArg(o, "generatedColumn", null),
            lastColumn: h.getArg(o, "lastGeneratedColumn", null),
          }),
            (o = this._originalMappings[++s]);
      else
        for (
          var l = o.originalColumn;
          o && o.originalLine === t && o.originalColumn == l;

        )
          n.push({
            line: h.getArg(o, "generatedLine", null),
            column: h.getArg(o, "generatedColumn", null),
            lastColumn: h.getArg(o, "lastGeneratedColumn", null),
          }),
            (o = this._originalMappings[++s]);
    }
    return n;
  };
  be.SourceMapConsumer = v;
  function b(i, e) {
    var t = i;
    typeof i == "string" && (t = h.parseSourceMapInput(i));
    var r = h.getArg(t, "version"),
      n = h.getArg(t, "sources"),
      s = h.getArg(t, "names", []),
      o = h.getArg(t, "sourceRoot", null),
      u = h.getArg(t, "sourcesContent", null),
      l = h.getArg(t, "mappings"),
      a = h.getArg(t, "file", null);
    if (r != this._version) throw new Error("Unsupported version: " + r);
    o && (o = h.normalize(o)),
      (n = n
        .map(String)
        .map(h.normalize)
        .map(function (f) {
          return o && h.isAbsolute(o) && h.isAbsolute(f) ? h.relative(o, f) : f;
        })),
      (this._names = z.fromArray(s.map(String), !0)),
      (this._sources = z.fromArray(n, !0)),
      (this._absoluteSources = this._sources.toArray().map(function (f) {
        return h.computeSourceURL(o, f, e);
      })),
      (this.sourceRoot = o),
      (this.sourcesContent = u),
      (this._mappings = l),
      (this._sourceMapURL = e),
      (this.file = a);
  }
  b.prototype = Object.create(v.prototype);
  b.prototype.consumer = v;
  b.prototype._findSourceIndex = function (i) {
    var e = i;
    if (
      (this.sourceRoot != null && (e = h.relative(this.sourceRoot, e)),
      this._sources.has(e))
    )
      return this._sources.indexOf(e);
    var t;
    for (t = 0; t < this._absoluteSources.length; ++t)
      if (this._absoluteSources[t] == i) return t;
    return -1;
  };
  b.fromSourceMap = function (e, t) {
    var r = Object.create(b.prototype),
      n = (r._names = z.fromArray(e._names.toArray(), !0)),
      s = (r._sources = z.fromArray(e._sources.toArray(), !0));
    (r.sourceRoot = e._sourceRoot),
      (r.sourcesContent = e._generateSourcesContent(
        r._sources.toArray(),
        r.sourceRoot
      )),
      (r.file = e._file),
      (r._sourceMapURL = t),
      (r._absoluteSources = r._sources.toArray().map(function (m) {
        return h.computeSourceURL(r.sourceRoot, m, t);
      }));
    for (
      var o = e._mappings.toArray().slice(),
        u = (r.__generatedMappings = []),
        l = (r.__originalMappings = []),
        a = 0,
        f = o.length;
      a < f;
      a++
    ) {
      var d = o[a],
        c = new nr();
      (c.generatedLine = d.generatedLine),
        (c.generatedColumn = d.generatedColumn),
        d.source &&
          ((c.source = s.indexOf(d.source)),
          (c.originalLine = d.originalLine),
          (c.originalColumn = d.originalColumn),
          d.name && (c.name = n.indexOf(d.name)),
          l.push(c)),
        u.push(c);
    }
    return Z(r.__originalMappings, h.compareByOriginalPositions), r;
  };
  b.prototype._version = 3;
  Object.defineProperty(b.prototype, "sources", {
    get: function () {
      return this._absoluteSources.slice();
    },
  });
  function nr() {
    (this.generatedLine = 0),
      (this.generatedColumn = 0),
      (this.source = null),
      (this.originalLine = null),
      (this.originalColumn = null),
      (this.name = null);
  }
  b.prototype._parseMappings = function (e, t) {
    for (
      var r = 1,
        n = 0,
        s = 0,
        o = 0,
        u = 0,
        l = 0,
        a = e.length,
        f = 0,
        d = {},
        c = {},
        m = [],
        y = [],
        C,
        p,
        _,
        E,
        le;
      f < a;

    )
      if (e.charAt(f) === ";") r++, f++, (n = 0);
      else if (e.charAt(f) === ",") f++;
      else {
        for (
          C = new nr(), C.generatedLine = r, E = f;
          E < a && !this._charIsMappingSeparator(e, E);
          E++
        );
        if (((p = e.slice(f, E)), (_ = d[p]), _)) f += p.length;
        else {
          for (_ = []; f < E; )
            ai.decode(e, f, c), (le = c.value), (f = c.rest), _.push(le);
          if (_.length === 2)
            throw new Error("Found a source, but no line and column");
          if (_.length === 3)
            throw new Error("Found a source and line, but no column");
          d[p] = _;
        }
        (C.generatedColumn = n + _[0]),
          (n = C.generatedColumn),
          _.length > 1 &&
            ((C.source = u + _[1]),
            (u += _[1]),
            (C.originalLine = s + _[2]),
            (s = C.originalLine),
            (C.originalLine += 1),
            (C.originalColumn = o + _[3]),
            (o = C.originalColumn),
            _.length > 4 && ((C.name = l + _[4]), (l += _[4]))),
          y.push(C),
          typeof C.originalLine == "number" && m.push(C);
      }
    Z(y, h.compareByGeneratedPositionsDeflated),
      (this.__generatedMappings = y),
      Z(m, h.compareByOriginalPositions),
      (this.__originalMappings = m);
  };
  b.prototype._findMapping = function (e, t, r, n, s, o) {
    if (e[r] <= 0)
      throw new TypeError(
        "Line must be greater than or equal to 1, got " + e[r]
      );
    if (e[n] < 0)
      throw new TypeError(
        "Column must be greater than or equal to 0, got " + e[n]
      );
    return it.search(e, t, s, o);
  };
  b.prototype.computeColumnSpans = function () {
    for (var e = 0; e < this._generatedMappings.length; ++e) {
      var t = this._generatedMappings[e];
      if (e + 1 < this._generatedMappings.length) {
        var r = this._generatedMappings[e + 1];
        if (t.generatedLine === r.generatedLine) {
          t.lastGeneratedColumn = r.generatedColumn - 1;
          continue;
        }
      }
      t.lastGeneratedColumn = Infinity;
    }
  };
  b.prototype.originalPositionFor = function (e) {
    var t = {
        generatedLine: h.getArg(e, "line"),
        generatedColumn: h.getArg(e, "column"),
      },
      r = this._findMapping(
        t,
        this._generatedMappings,
        "generatedLine",
        "generatedColumn",
        h.compareByGeneratedPositionsDeflated,
        h.getArg(e, "bias", v.GREATEST_LOWER_BOUND)
      );
    if (r >= 0) {
      var n = this._generatedMappings[r];
      if (n.generatedLine === t.generatedLine) {
        var s = h.getArg(n, "source", null);
        s !== null &&
          ((s = this._sources.at(s)),
          (s = h.computeSourceURL(this.sourceRoot, s, this._sourceMapURL)));
        var o = h.getArg(n, "name", null);
        return (
          o !== null && (o = this._names.at(o)),
          {
            source: s,
            line: h.getArg(n, "originalLine", null),
            column: h.getArg(n, "originalColumn", null),
            name: o,
          }
        );
      }
    }
    return { source: null, line: null, column: null, name: null };
  };
  b.prototype.hasContentsOfAllSources = function () {
    return this.sourcesContent
      ? this.sourcesContent.length >= this._sources.size() &&
          !this.sourcesContent.some(function (e) {
            return e == null;
          })
      : !1;
  };
  b.prototype.sourceContentFor = function (e, t) {
    if (!this.sourcesContent) return null;
    var r = this._findSourceIndex(e);
    if (r >= 0) return this.sourcesContent[r];
    var n = e;
    this.sourceRoot != null && (n = h.relative(this.sourceRoot, n));
    var s;
    if (this.sourceRoot != null && (s = h.urlParse(this.sourceRoot))) {
      var o = n.replace(/^file:\/\//, "");
      if (s.scheme == "file" && this._sources.has(o))
        return this.sourcesContent[this._sources.indexOf(o)];
      if ((!s.path || s.path == "/") && this._sources.has("/" + n))
        return this.sourcesContent[this._sources.indexOf("/" + n)];
    }
    if (t) return null;
    throw new Error('"' + n + '" is not in the SourceMap.');
  };
  b.prototype.generatedPositionFor = function (e) {
    var t = h.getArg(e, "source");
    if (((t = this._findSourceIndex(t)), t < 0))
      return { line: null, column: null, lastColumn: null };
    var r = {
        source: t,
        originalLine: h.getArg(e, "line"),
        originalColumn: h.getArg(e, "column"),
      },
      n = this._findMapping(
        r,
        this._originalMappings,
        "originalLine",
        "originalColumn",
        h.compareByOriginalPositions,
        h.getArg(e, "bias", v.GREATEST_LOWER_BOUND)
      );
    if (n >= 0) {
      var s = this._originalMappings[n];
      if (s.source === r.source)
        return {
          line: h.getArg(s, "generatedLine", null),
          column: h.getArg(s, "generatedColumn", null),
          lastColumn: h.getArg(s, "lastGeneratedColumn", null),
        };
    }
    return { line: null, column: null, lastColumn: null };
  };
  be.BasicSourceMapConsumer = b;
  function M(i, e) {
    var t = i;
    typeof i == "string" && (t = h.parseSourceMapInput(i));
    var r = h.getArg(t, "version"),
      n = h.getArg(t, "sections");
    if (r != this._version) throw new Error("Unsupported version: " + r);
    (this._sources = new z()), (this._names = new z());
    var s = { line: -1, column: 0 };
    this._sections = n.map(function (o) {
      if (o.url)
        throw new Error("Support for url field in sections not implemented.");
      var u = h.getArg(o, "offset"),
        l = h.getArg(u, "line"),
        a = h.getArg(u, "column");
      if (l < s.line || (l === s.line && a < s.column))
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return (
        (s = u),
        {
          generatedOffset: { generatedLine: l + 1, generatedColumn: a + 1 },
          consumer: new v(h.getArg(o, "map"), e),
        }
      );
    });
  }
  M.prototype = Object.create(v.prototype);
  M.prototype.constructor = v;
  M.prototype._version = 3;
  Object.defineProperty(M.prototype, "sources", {
    get: function () {
      for (var i = [], e = 0; e < this._sections.length; e++)
        for (var t = 0; t < this._sections[e].consumer.sources.length; t++)
          i.push(this._sections[e].consumer.sources[t]);
      return i;
    },
  });
  M.prototype.originalPositionFor = function (e) {
    var t = {
        generatedLine: h.getArg(e, "line"),
        generatedColumn: h.getArg(e, "column"),
      },
      r = it.search(t, this._sections, function (s, o) {
        var u = s.generatedLine - o.generatedOffset.generatedLine;
        return u || s.generatedColumn - o.generatedOffset.generatedColumn;
      }),
      n = this._sections[r];
    return n
      ? n.consumer.originalPositionFor({
          line: t.generatedLine - (n.generatedOffset.generatedLine - 1),
          column:
            t.generatedColumn -
            (n.generatedOffset.generatedLine === t.generatedLine
              ? n.generatedOffset.generatedColumn - 1
              : 0),
          bias: e.bias,
        })
      : { source: null, line: null, column: null, name: null };
  };
  M.prototype.hasContentsOfAllSources = function () {
    return this._sections.every(function (e) {
      return e.consumer.hasContentsOfAllSources();
    });
  };
  M.prototype.sourceContentFor = function (e, t) {
    for (var r = 0; r < this._sections.length; r++) {
      var n = this._sections[r],
        s = n.consumer.sourceContentFor(e, !0);
      if (s) return s;
    }
    if (t) return null;
    throw new Error('"' + e + '" is not in the SourceMap.');
  };
  M.prototype.generatedPositionFor = function (e) {
    for (var t = 0; t < this._sections.length; t++) {
      var r = this._sections[t];
      if (r.consumer._findSourceIndex(h.getArg(e, "source")) !== -1) {
        var n = r.consumer.generatedPositionFor(e);
        if (n) {
          var s = {
            line: n.line + (r.generatedOffset.generatedLine - 1),
            column:
              n.column +
              (r.generatedOffset.generatedLine === n.line
                ? r.generatedOffset.generatedColumn - 1
                : 0),
          };
          return s;
        }
      }
    }
    return { line: null, column: null };
  };
  M.prototype._parseMappings = function (e, t) {
    (this.__generatedMappings = []), (this.__originalMappings = []);
    for (var r = 0; r < this._sections.length; r++)
      for (
        var n = this._sections[r], s = n.consumer._generatedMappings, o = 0;
        o < s.length;
        o++
      ) {
        var u = s[o],
          l = n.consumer._sources.at(u.source);
        (l = h.computeSourceURL(n.consumer.sourceRoot, l, this._sourceMapURL)),
          this._sources.add(l),
          (l = this._sources.indexOf(l));
        var a = null;
        u.name &&
          ((a = n.consumer._names.at(u.name)),
          this._names.add(a),
          (a = this._names.indexOf(a)));
        var f = {
          source: l,
          generatedLine:
            u.generatedLine + (n.generatedOffset.generatedLine - 1),
          generatedColumn:
            u.generatedColumn +
            (n.generatedOffset.generatedLine === u.generatedLine
              ? n.generatedOffset.generatedColumn - 1
              : 0),
          originalLine: u.originalLine,
          originalColumn: u.originalColumn,
          name: a,
        };
        this.__generatedMappings.push(f),
          typeof f.originalLine == "number" && this.__originalMappings.push(f);
      }
    Z(this.__generatedMappings, h.compareByGeneratedPositionsDeflated),
      Z(this.__originalMappings, h.compareByOriginalPositions);
  };
  be.IndexedSourceMapConsumer = M;
});
var or = g((sr) => {
  var fi = et().SourceMapGenerator,
    xe = G(),
    ci = /(\r?\n)/,
    hi = 10,
    B = "$$$isSourceNode$$$";
  function O(i, e, t, r, n) {
    (this.children = []),
      (this.sourceContents = {}),
      (this.line = i ?? null),
      (this.column = e ?? null),
      (this.source = t ?? null),
      (this.name = n ?? null),
      (this[B] = !0),
      r != null && this.add(r);
  }
  O.fromStringWithSourceMap = function (e, t, r) {
    var n = new O(),
      s = e.split(ci),
      o = 0,
      u = function () {
        var c = y(),
          m = y() || "";
        return c + m;
        function y() {
          return o < s.length ? s[o++] : void 0;
        }
      },
      l = 1,
      a = 0,
      f = null;
    return (
      t.eachMapping(function (c) {
        if (f !== null)
          if (l < c.generatedLine) d(f, u()), l++, (a = 0);
          else {
            var m = s[o] || "",
              y = m.substr(0, c.generatedColumn - a);
            (s[o] = m.substr(c.generatedColumn - a)),
              (a = c.generatedColumn),
              d(f, y),
              (f = c);
            return;
          }
        for (; l < c.generatedLine; ) n.add(u()), l++;
        if (a < c.generatedColumn) {
          var m = s[o] || "";
          n.add(m.substr(0, c.generatedColumn)),
            (s[o] = m.substr(c.generatedColumn)),
            (a = c.generatedColumn);
        }
        f = c;
      }, this),
      o < s.length && (f && d(f, u()), n.add(s.splice(o).join(""))),
      t.sources.forEach(function (c) {
        var m = t.sourceContentFor(c);
        m != null &&
          (r != null && (c = xe.join(r, c)), n.setSourceContent(c, m));
      }),
      n
    );
    function d(c, m) {
      if (c === null || c.source === void 0) n.add(m);
      else {
        var y = r ? xe.join(r, c.source) : c.source;
        n.add(new O(c.originalLine, c.originalColumn, y, m, c.name));
      }
    }
  };
  O.prototype.add = function (e) {
    if (Array.isArray(e))
      e.forEach(function (t) {
        this.add(t);
      }, this);
    else if (e[B] || typeof e == "string") e && this.children.push(e);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " +
          e
      );
    return this;
  };
  O.prototype.prepend = function (e) {
    if (Array.isArray(e))
      for (var t = e.length - 1; t >= 0; t--) this.prepend(e[t]);
    else if (e[B] || typeof e == "string") this.children.unshift(e);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " +
          e
      );
    return this;
  };
  O.prototype.walk = function (e) {
    for (var t, r = 0, n = this.children.length; r < n; r++)
      (t = this.children[r]),
        t[B]
          ? t.walk(e)
          : t !== "" &&
            e(t, {
              source: this.source,
              line: this.line,
              column: this.column,
              name: this.name,
            });
  };
  O.prototype.join = function (e) {
    var t,
      r,
      n = this.children.length;
    if (n > 0) {
      for (t = [], r = 0; r < n - 1; r++) t.push(this.children[r]), t.push(e);
      t.push(this.children[r]), (this.children = t);
    }
    return this;
  };
  O.prototype.replaceRight = function (e, t) {
    var r = this.children[this.children.length - 1];
    return (
      r[B]
        ? r.replaceRight(e, t)
        : typeof r == "string"
        ? (this.children[this.children.length - 1] = r.replace(e, t))
        : this.children.push("".replace(e, t)),
      this
    );
  };
  O.prototype.setSourceContent = function (e, t) {
    this.sourceContents[xe.toSetString(e)] = t;
  };
  O.prototype.walkSourceContents = function (e) {
    for (var t = 0, r = this.children.length; t < r; t++)
      this.children[t][B] && this.children[t].walkSourceContents(e);
    for (
      var n = Object.keys(this.sourceContents), t = 0, r = n.length;
      t < r;
      t++
    )
      e(xe.fromSetString(n[t]), this.sourceContents[n[t]]);
  };
  O.prototype.toString = function () {
    var e = "";
    return (
      this.walk(function (t) {
        e += t;
      }),
      e
    );
  };
  O.prototype.toStringWithSourceMap = function (e) {
    var t = { code: "", line: 1, column: 0 },
      r = new fi(e),
      n = !1,
      s = null,
      o = null,
      u = null,
      l = null;
    return (
      this.walk(function (a, f) {
        (t.code += a),
          f.source !== null && f.line !== null && f.column !== null
            ? ((s !== f.source ||
                o !== f.line ||
                u !== f.column ||
                l !== f.name) &&
                r.addMapping({
                  source: f.source,
                  original: { line: f.line, column: f.column },
                  generated: { line: t.line, column: t.column },
                  name: f.name,
                }),
              (s = f.source),
              (o = f.line),
              (u = f.column),
              (l = f.name),
              (n = !0))
            : n &&
              (r.addMapping({ generated: { line: t.line, column: t.column } }),
              (s = null),
              (n = !1));
        for (var d = 0, c = a.length; d < c; d++)
          a.charCodeAt(d) === hi
            ? (t.line++,
              (t.column = 0),
              d + 1 === c
                ? ((s = null), (n = !1))
                : n &&
                  r.addMapping({
                    source: f.source,
                    original: { line: f.line, column: f.column },
                    generated: { line: t.line, column: t.column },
                    name: f.name,
                  }))
            : t.column++;
      }),
      this.walkSourceContents(function (a, f) {
        r.setSourceContent(a, f);
      }),
      { code: t.code, map: r }
    );
  };
  sr.SourceNode = O;
});
var st = g((Oe) => {
  Oe.SourceMapGenerator = et().SourceMapGenerator;
  Oe.SourceMapConsumer = ir().SourceMapConsumer;
  Oe.SourceNode = or().SourceNode;
});
var fr = g((Ts, lr) => {
  "use strict";
  var { dirname: ot, resolve: pi, relative: di, sep: gi } = __path_browserify$,
    { pathToFileURL: mi } = __url$,
    ur = st(),
    ar = class {
      constructor(e, t, r) {
        (this.stringify = e),
          (this.mapOpts = r.map || {}),
          (this.root = t),
          (this.opts = r);
      }
      isMap() {
        return typeof this.opts.map != "undefined"
          ? !!this.opts.map
          : this.previous().length > 0;
      }
      previous() {
        return (
          this.previousMaps ||
            ((this.previousMaps = []),
            this.root.walk((e) => {
              if (e.source && e.source.input.map) {
                let t = e.source.input.map;
                this.previousMaps.includes(t) || this.previousMaps.push(t);
              }
            })),
          this.previousMaps
        );
      }
      isInline() {
        if (typeof this.mapOpts.inline != "undefined")
          return this.mapOpts.inline;
        let e = this.mapOpts.annotation;
        return typeof e != "undefined" && e !== !0
          ? !1
          : this.previous().length
          ? this.previous().some((t) => t.inline)
          : !0;
      }
      isSourcesContent() {
        return typeof this.mapOpts.sourcesContent != "undefined"
          ? this.mapOpts.sourcesContent
          : this.previous().length
          ? this.previous().some((e) => e.withContent())
          : !0;
      }
      clearAnnotation() {
        if (this.mapOpts.annotation === !1) return;
        let e;
        for (let t = this.root.nodes.length - 1; t >= 0; t--)
          (e = this.root.nodes[t]),
            e.type === "comment" &&
              e.text.indexOf("# sourceMappingURL=") === 0 &&
              this.root.removeChild(t);
      }
      setSourcesContent() {
        let e = {};
        this.root.walk((t) => {
          if (t.source) {
            let r = t.source.input.from;
            r &&
              !e[r] &&
              ((e[r] = !0),
              this.map.setSourceContent(
                this.toUrl(this.path(r)),
                t.source.input.css
              ));
          }
        });
      }
      applyPrevMaps() {
        for (let e of this.previous()) {
          let t = this.toUrl(this.path(e.file)),
            r = e.root || ot(e.file),
            n;
          this.mapOpts.sourcesContent === !1
            ? ((n = new ur.SourceMapConsumer(e.text)),
              n.sourcesContent &&
                (n.sourcesContent = n.sourcesContent.map(() => null)))
            : (n = e.consumer()),
            this.map.applySourceMap(n, t, this.toUrl(this.path(r)));
        }
      }
      isAnnotation() {
        return this.isInline()
          ? !0
          : typeof this.mapOpts.annotation != "undefined"
          ? this.mapOpts.annotation
          : this.previous().length
          ? this.previous().some((e) => e.annotation)
          : !0;
      }
      toBase64(e) {
        return Buffer
          ? Buffer.from(e).toString("base64")
          : window.btoa(unescape(encodeURIComponent(e)));
      }
      addAnnotation() {
        let e;
        this.isInline()
          ? (e =
              "data:application/json;base64," +
              this.toBase64(this.map.toString()))
          : typeof this.mapOpts.annotation == "string"
          ? (e = this.mapOpts.annotation)
          : typeof this.mapOpts.annotation == "function"
          ? (e = this.mapOpts.annotation(this.opts.to, this.root))
          : (e = this.outputFile() + ".map");
        let t = `
`;
        this.css.includes(`\r
`) &&
          (t = `\r
`),
          (this.css += t + "/*# sourceMappingURL=" + e + " */");
      }
      outputFile() {
        return this.opts.to
          ? this.path(this.opts.to)
          : this.opts.from
          ? this.path(this.opts.from)
          : "to.css";
      }
      generateMap() {
        return (
          this.generateString(),
          this.isSourcesContent() && this.setSourcesContent(),
          this.previous().length > 0 && this.applyPrevMaps(),
          this.isAnnotation() && this.addAnnotation(),
          this.isInline() ? [this.css] : [this.css, this.map]
        );
      }
      path(e) {
        if (
          e.indexOf("<") === 0 ||
          /^\w+:\/\//.test(e) ||
          this.mapOpts.absolute
        )
          return e;
        let t = this.opts.to ? ot(this.opts.to) : ".";
        return (
          typeof this.mapOpts.annotation == "string" &&
            (t = ot(pi(t, this.mapOpts.annotation))),
          (e = di(t, e)),
          e
        );
      }
      toUrl(e) {
        return (
          gi === "\\" && (e = e.replace(/\\/g, "/")),
          encodeURI(e).replace(/[#?]/g, encodeURIComponent)
        );
      }
      sourcePath(e) {
        return this.mapOpts.from
          ? this.toUrl(this.mapOpts.from)
          : this.mapOpts.absolute
          ? mi(e.source.input.from).toString()
          : this.toUrl(this.path(e.source.input.from));
      }
      generateString() {
        (this.css = ""),
          (this.map = new ur.SourceMapGenerator({ file: this.outputFile() }));
        let e = 1,
          t = 1,
          r,
          n;
        this.stringify(this.root, (s, o, u) => {
          if (
            ((this.css += s),
            o &&
              u !== "end" &&
              (o.source && o.source.start
                ? this.map.addMapping({
                    source: this.sourcePath(o),
                    generated: { line: e, column: t - 1 },
                    original: {
                      line: o.source.start.line,
                      column: o.source.start.column - 1,
                    },
                  })
                : this.map.addMapping({
                    source: "<no source>",
                    original: { line: 1, column: 0 },
                    generated: { line: e, column: t - 1 },
                  })),
            (r = s.match(/\n/g)),
            r
              ? ((e += r.length),
                (n = s.lastIndexOf(`
`)),
                (t = s.length - n))
              : (t += s.length),
            o && u !== "start")
          ) {
            let l = o.parent || { raws: {} };
            (o.type !== "decl" || o !== l.last || l.raws.semicolon) &&
              (o.source && o.source.end
                ? this.map.addMapping({
                    source: this.sourcePath(o),
                    generated: { line: e, column: t - 2 },
                    original: {
                      line: o.source.end.line,
                      column: o.source.end.column - 1,
                    },
                  })
                : this.map.addMapping({
                    source: "<no source>",
                    original: { line: 1, column: 0 },
                    generated: { line: e, column: t - 1 },
                  }));
          }
        });
      }
      generate() {
        if ((this.clearAnnotation(), this.isMap())) return this.generateMap();
        let e = "";
        return (
          this.stringify(this.root, (t) => {
            e += t;
          }),
          [e]
        );
      }
    };
  lr.exports = ar;
});
var pr = g((Ds, cr) => {
  "use strict";
  var hr = {};
  cr.exports = function (e) {
    hr[e] ||
      ((hr[e] = !0),
      typeof console != "undefined" && console.warn && console.warn(e));
  };
});
var lt = g((Us, dr) => {
  "use strict";
  var Ae = class {
    constructor(e, t = {}) {
      if (((this.type = "warning"), (this.text = e), t.node && t.node.source)) {
        let r = t.node.positionBy(t);
        (this.line = r.line), (this.column = r.column);
      }
      for (let r in t) this[r] = t[r];
    }
    toString() {
      return this.node
        ? this.node.error(this.text, {
            plugin: this.plugin,
            index: this.index,
            word: this.word,
          }).message
        : this.plugin
        ? this.plugin + ": " + this.text
        : this.text;
    }
  };
  dr.exports = Ae;
  Ae.default = Ae;
});
var ut = g((Fs, gr) => {
  "use strict";
  var yi = lt(),
    Ee = class {
      constructor(e, t, r) {
        (this.processor = e),
          (this.messages = []),
          (this.root = t),
          (this.opts = r),
          (this.css = void 0),
          (this.map = void 0);
      }
      toString() {
        return this.css;
      }
      warn(e, t = {}) {
        t.plugin ||
          (this.lastPlugin &&
            this.lastPlugin.postcssPlugin &&
            (t.plugin = this.lastPlugin.postcssPlugin));
        let r = new yi(e, t);
        return this.messages.push(r), r;
      }
      warnings() {
        return this.messages.filter((e) => e.type === "warning");
      }
      get content() {
        return this.css;
      }
    };
  gr.exports = Ee;
  Ee.default = Ee;
});
var X = g((Gs, mr) => {
  "use strict";
  var wi = Q(),
    Me = class extends wi {
      constructor(e) {
        super(e);
        this.type = "comment";
      }
    };
  mr.exports = Me;
  Me.default = Me;
});
var j = g((zs, yr) => {
  "use strict";
  var wr = Y(),
    { isClean: vr } = me(),
    _r = X(),
    vi = Q(),
    Sr,
    at,
    ft;
  function Cr(i) {
    return i.map(
      (e) => (e.nodes && (e.nodes = Cr(e.nodes)), delete e.source, e)
    );
  }
  function br(i) {
    if (((i[vr] = !1), i.proxyOf.nodes)) for (let e of i.proxyOf.nodes) br(e);
  }
  function xr(i) {
    i.type === "atrule"
      ? Object.setPrototypeOf(i, ft.prototype)
      : i.type === "rule"
      ? Object.setPrototypeOf(i, at.prototype)
      : i.type === "decl"
      ? Object.setPrototypeOf(i, wr.prototype)
      : i.type === "comment" && Object.setPrototypeOf(i, _r.prototype),
      i.nodes &&
        i.nodes.forEach((e) => {
          xr(e);
        });
  }
  var k = class extends vi {
    push(e) {
      return (e.parent = this), this.proxyOf.nodes.push(e), this;
    }
    each(e) {
      if (!this.proxyOf.nodes) return;
      let t = this.getIterator(),
        r,
        n;
      for (
        ;
        this.indexes[t] < this.proxyOf.nodes.length &&
        ((r = this.indexes[t]), (n = e(this.proxyOf.nodes[r], r)), n !== !1);

      )
        this.indexes[t] += 1;
      return delete this.indexes[t], n;
    }
    walk(e) {
      return this.each((t, r) => {
        let n;
        try {
          n = e(t, r);
        } catch (s) {
          throw t.addToError(s);
        }
        return n !== !1 && t.walk && (n = t.walk(e)), n;
      });
    }
    walkDecls(e, t) {
      return t
        ? e instanceof RegExp
          ? this.walk((r, n) => {
              if (r.type === "decl" && e.test(r.prop)) return t(r, n);
            })
          : this.walk((r, n) => {
              if (r.type === "decl" && r.prop === e) return t(r, n);
            })
        : ((t = e),
          this.walk((r, n) => {
            if (r.type === "decl") return t(r, n);
          }));
    }
    walkRules(e, t) {
      return t
        ? e instanceof RegExp
          ? this.walk((r, n) => {
              if (r.type === "rule" && e.test(r.selector)) return t(r, n);
            })
          : this.walk((r, n) => {
              if (r.type === "rule" && r.selector === e) return t(r, n);
            })
        : ((t = e),
          this.walk((r, n) => {
            if (r.type === "rule") return t(r, n);
          }));
    }
    walkAtRules(e, t) {
      return t
        ? e instanceof RegExp
          ? this.walk((r, n) => {
              if (r.type === "atrule" && e.test(r.name)) return t(r, n);
            })
          : this.walk((r, n) => {
              if (r.type === "atrule" && r.name === e) return t(r, n);
            })
        : ((t = e),
          this.walk((r, n) => {
            if (r.type === "atrule") return t(r, n);
          }));
    }
    walkComments(e) {
      return this.walk((t, r) => {
        if (t.type === "comment") return e(t, r);
      });
    }
    append(...e) {
      for (let t of e) {
        let r = this.normalize(t, this.last);
        for (let n of r) this.proxyOf.nodes.push(n);
      }
      return this.markDirty(), this;
    }
    prepend(...e) {
      e = e.reverse();
      for (let t of e) {
        let r = this.normalize(t, this.first, "prepend").reverse();
        for (let n of r) this.proxyOf.nodes.unshift(n);
        for (let n in this.indexes)
          this.indexes[n] = this.indexes[n] + r.length;
      }
      return this.markDirty(), this;
    }
    cleanRaws(e) {
      if ((super.cleanRaws(e), this.nodes))
        for (let t of this.nodes) t.cleanRaws(e);
    }
    insertBefore(e, t) {
      e = this.index(e);
      let r = e === 0 ? "prepend" : !1,
        n = this.normalize(t, this.proxyOf.nodes[e], r).reverse();
      for (let o of n) this.proxyOf.nodes.splice(e, 0, o);
      let s;
      for (let o in this.indexes)
        (s = this.indexes[o]), e <= s && (this.indexes[o] = s + n.length);
      return this.markDirty(), this;
    }
    insertAfter(e, t) {
      e = this.index(e);
      let r = this.normalize(t, this.proxyOf.nodes[e]).reverse();
      for (let s of r) this.proxyOf.nodes.splice(e + 1, 0, s);
      let n;
      for (let s in this.indexes)
        (n = this.indexes[s]), e < n && (this.indexes[s] = n + r.length);
      return this.markDirty(), this;
    }
    removeChild(e) {
      (e = this.index(e)),
        (this.proxyOf.nodes[e].parent = void 0),
        this.proxyOf.nodes.splice(e, 1);
      let t;
      for (let r in this.indexes)
        (t = this.indexes[r]), t >= e && (this.indexes[r] = t - 1);
      return this.markDirty(), this;
    }
    removeAll() {
      for (let e of this.proxyOf.nodes) e.parent = void 0;
      return (this.proxyOf.nodes = []), this.markDirty(), this;
    }
    replaceValues(e, t, r) {
      return (
        r || ((r = t), (t = {})),
        this.walkDecls((n) => {
          (t.props && !t.props.includes(n.prop)) ||
            (t.fast && !n.value.includes(t.fast)) ||
            (n.value = n.value.replace(e, r));
        }),
        this.markDirty(),
        this
      );
    }
    every(e) {
      return this.nodes.every(e);
    }
    some(e) {
      return this.nodes.some(e);
    }
    index(e) {
      return typeof e == "number"
        ? e
        : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e));
    }
    get first() {
      if (!!this.proxyOf.nodes) return this.proxyOf.nodes[0];
    }
    get last() {
      if (!!this.proxyOf.nodes)
        return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
    }
    normalize(e, t) {
      if (typeof e == "string") e = Cr(Sr(e).nodes);
      else if (Array.isArray(e)) {
        e = e.slice(0);
        for (let n of e) n.parent && n.parent.removeChild(n, "ignore");
      } else if (e.type === "root") {
        e = e.nodes.slice(0);
        for (let n of e) n.parent && n.parent.removeChild(n, "ignore");
      } else if (e.type) e = [e];
      else if (e.prop) {
        if (typeof e.value == "undefined")
          throw new Error("Value field is missed in node creation");
        typeof e.value != "string" && (e.value = String(e.value)),
          (e = [new wr(e)]);
      } else if (e.selector) e = [new at(e)];
      else if (e.name) e = [new ft(e)];
      else if (e.text) e = [new _r(e)];
      else throw new Error("Unknown node type in node creation");
      return e.map(
        (n) => (
          typeof n.markDirty != "function" && xr(n),
          (n = n.proxyOf),
          n.parent && n.parent.removeChild(n),
          n[vr] && br(n),
          typeof n.raws.before == "undefined" &&
            t &&
            typeof t.raws.before != "undefined" &&
            (n.raws.before = t.raws.before.replace(/\S/g, "")),
          (n.parent = this),
          n
        )
      );
    }
    getProxyProcessor() {
      return {
        set(e, t, r) {
          return (
            e[t] === r ||
              ((e[t] = r),
              (t === "name" || t === "params" || t === "selector") &&
                e.markDirty()),
            !0
          );
        },
        get(e, t) {
          return t === "proxyOf"
            ? e
            : e[t]
            ? t === "each" || (typeof t == "string" && t.startsWith("walk"))
              ? (...r) =>
                  e[t](
                    ...r.map((n) =>
                      typeof n == "function" ? (s, o) => n(s.toProxy(), o) : n
                    )
                  )
              : t === "every" || t === "some"
              ? (r) => e[t]((n, ...s) => r(n.toProxy(), ...s))
              : t === "root"
              ? () => e.root().toProxy()
              : t === "nodes"
              ? e.nodes.map((r) => r.toProxy())
              : t === "first" || t === "last"
              ? e[t].toProxy()
              : e[t]
            : e[t];
        },
      };
    }
    getIterator() {
      this.lastEach || (this.lastEach = 0),
        this.indexes || (this.indexes = {}),
        (this.lastEach += 1);
      let e = this.lastEach;
      return (this.indexes[e] = 0), e;
    }
  };
  k.registerParse = (i) => {
    Sr = i;
  };
  k.registerRule = (i) => {
    at = i;
  };
  k.registerAtRule = (i) => {
    ft = i;
  };
  yr.exports = k;
  k.default = k;
});
var Le = g((Bs, Or) => {
  "use strict";
  var Ar = j(),
    ee = class extends Ar {
      constructor(e) {
        super(e);
        this.type = "atrule";
      }
      append(...e) {
        return this.proxyOf.nodes || (this.nodes = []), super.append(...e);
      }
      prepend(...e) {
        return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e);
      }
    };
  Or.exports = ee;
  ee.default = ee;
  Ar.registerAtRule(ee);
});
var W = g((js, Er) => {
  "use strict";
  var _i = j(),
    Mr,
    Lr,
    V = class extends _i {
      constructor(e) {
        super(e);
        (this.type = "root"), this.nodes || (this.nodes = []);
      }
      removeChild(e, t) {
        let r = this.index(e);
        return (
          !t &&
            r === 0 &&
            this.nodes.length > 1 &&
            (this.nodes[1].raws.before = this.nodes[r].raws.before),
          super.removeChild(e)
        );
      }
      normalize(e, t, r) {
        let n = super.normalize(e);
        if (t) {
          if (r === "prepend")
            this.nodes.length > 1
              ? (t.raws.before = this.nodes[1].raws.before)
              : delete t.raws.before;
          else if (this.first !== t)
            for (let s of n) s.raws.before = t.raws.before;
        }
        return n;
      }
      toResult(e = {}) {
        return new Mr(new Lr(), this, e).stringify();
      }
    };
  V.registerLazyResult = (i) => {
    Mr = i;
  };
  V.registerProcessor = (i) => {
    Lr = i;
  };
  Er.exports = V;
  V.default = V;
});
var ct = g((Vs, Rr) => {
  "use strict";
  var te = {
    split(i, e, t) {
      let r = [],
        n = "",
        s = !1,
        o = 0,
        u = !1,
        l = !1;
      for (let a of i)
        u
          ? l
            ? (l = !1)
            : a === "\\"
            ? (l = !0)
            : a === u && (u = !1)
          : a === '"' || a === "'"
          ? (u = a)
          : a === "("
          ? (o += 1)
          : a === ")"
          ? o > 0 && (o -= 1)
          : o === 0 && e.includes(a) && (s = !0),
          s ? (n !== "" && r.push(n.trim()), (n = ""), (s = !1)) : (n += a);
      return (t || n !== "") && r.push(n.trim()), r;
    },
    space(i) {
      let e = [
        " ",
        `
`,
        "	",
      ];
      return te.split(i, e);
    },
    comma(i) {
      return te.split(i, [","], !0);
    },
  };
  Rr.exports = te;
  te.default = te;
});
var Re = g((Ws, Pr) => {
  "use strict";
  var Ir = j(),
    Si = ct(),
    re = class extends Ir {
      constructor(e) {
        super(e);
        (this.type = "rule"), this.nodes || (this.nodes = []);
      }
      get selectors() {
        return Si.comma(this.selector);
      }
      set selectors(e) {
        let t = this.selector ? this.selector.match(/,\s*/) : null,
          r = t ? t[0] : "," + this.raw("between", "beforeOpen");
        this.selector = e.join(r);
      }
    };
  Pr.exports = re;
  re.default = re;
  Ir.registerRule(re);
});
var Tr = g(($s, qr) => {
  "use strict";
  var Ci = Y(),
    bi = ze(),
    xi = X(),
    Oi = Le(),
    Ai = W(),
    Nr = Re(),
    kr = class {
      constructor(e) {
        (this.input = e),
          (this.root = new Ai()),
          (this.current = this.root),
          (this.spaces = ""),
          (this.semicolon = !1),
          (this.customProperty = !1),
          this.createTokenizer(),
          (this.root.source = {
            input: e,
            start: { offset: 0, line: 1, column: 1 },
          });
      }
      createTokenizer() {
        this.tokenizer = bi(this.input);
      }
      parse() {
        let e;
        for (; !this.tokenizer.endOfFile(); )
          switch (((e = this.tokenizer.nextToken()), e[0])) {
            case "space":
              this.spaces += e[1];
              break;
            case ";":
              this.freeSemicolon(e);
              break;
            case "}":
              this.end(e);
              break;
            case "comment":
              this.comment(e);
              break;
            case "at-word":
              this.atrule(e);
              break;
            case "{":
              this.emptyRule(e);
              break;
            default:
              this.other(e);
              break;
          }
        this.endFile();
      }
      comment(e) {
        let t = new xi();
        this.init(t, e[2]), (t.source.end = this.getPosition(e[3] || e[2]));
        let r = e[1].slice(2, -2);
        if (/^\s*$/.test(r))
          (t.text = ""), (t.raws.left = r), (t.raws.right = "");
        else {
          let n = r.match(/^(\s*)([^]*\S)(\s*)$/);
          (t.text = n[2]), (t.raws.left = n[1]), (t.raws.right = n[3]);
        }
      }
      emptyRule(e) {
        let t = new Nr();
        this.init(t, e[2]),
          (t.selector = ""),
          (t.raws.between = ""),
          (this.current = t);
      }
      other(e) {
        let t = !1,
          r = null,
          n = !1,
          s = null,
          o = [],
          u = e[1].startsWith("--"),
          l = [],
          a = e;
        for (; a; ) {
          if (((r = a[0]), l.push(a), r === "(" || r === "["))
            s || (s = a), o.push(r === "(" ? ")" : "]");
          else if (u && n && r === "{") s || (s = a), o.push("}");
          else if (o.length === 0)
            if (r === ";")
              if (n) {
                this.decl(l, u);
                return;
              } else break;
            else if (r === "{") {
              this.rule(l);
              return;
            } else if (r === "}") {
              this.tokenizer.back(l.pop()), (t = !0);
              break;
            } else r === ":" && (n = !0);
          else r === o[o.length - 1] && (o.pop(), o.length === 0 && (s = null));
          a = this.tokenizer.nextToken();
        }
        if (
          (this.tokenizer.endOfFile() && (t = !0),
          o.length > 0 && this.unclosedBracket(s),
          t && n)
        ) {
          for (
            ;
            l.length &&
            ((a = l[l.length - 1][0]), !(a !== "space" && a !== "comment"));

          )
            this.tokenizer.back(l.pop());
          this.decl(l, u);
        } else this.unknownWord(l);
      }
      rule(e) {
        e.pop();
        let t = new Nr();
        this.init(t, e[0][2]),
          (t.raws.between = this.spacesAndCommentsFromEnd(e)),
          this.raw(t, "selector", e),
          (this.current = t);
      }
      decl(e, t) {
        let r = new Ci();
        this.init(r, e[0][2]);
        let n = e[e.length - 1];
        for (
          n[0] === ";" && ((this.semicolon = !0), e.pop()),
            r.source.end = this.getPosition(n[3] || n[2]);
          e[0][0] !== "word";

        )
          e.length === 1 && this.unknownWord(e),
            (r.raws.before += e.shift()[1]);
        for (
          r.source.start = this.getPosition(e[0][2]), r.prop = "";
          e.length;

        ) {
          let l = e[0][0];
          if (l === ":" || l === "space" || l === "comment") break;
          r.prop += e.shift()[1];
        }
        r.raws.between = "";
        let s;
        for (; e.length; )
          if (((s = e.shift()), s[0] === ":")) {
            r.raws.between += s[1];
            break;
          } else
            s[0] === "word" && /\w/.test(s[1]) && this.unknownWord([s]),
              (r.raws.between += s[1]);
        (r.prop[0] === "_" || r.prop[0] === "*") &&
          ((r.raws.before += r.prop[0]), (r.prop = r.prop.slice(1)));
        let o = this.spacesAndCommentsFromStart(e);
        this.precheckMissedSemicolon(e);
        for (let l = e.length - 1; l >= 0; l--) {
          if (((s = e[l]), s[1].toLowerCase() === "!important")) {
            r.important = !0;
            let a = this.stringFrom(e, l);
            (a = this.spacesFromEnd(e) + a),
              a !== " !important" && (r.raws.important = a);
            break;
          } else if (s[1].toLowerCase() === "important") {
            let a = e.slice(0),
              f = "";
            for (let d = l; d > 0; d--) {
              let c = a[d][0];
              if (f.trim().indexOf("!") === 0 && c !== "space") break;
              f = a.pop()[1] + f;
            }
            f.trim().indexOf("!") === 0 &&
              ((r.important = !0), (r.raws.important = f), (e = a));
          }
          if (s[0] !== "space" && s[0] !== "comment") break;
        }
        let u = e.some((l) => l[0] !== "space" && l[0] !== "comment");
        this.raw(r, "value", e),
          u ? (r.raws.between += o) : (r.value = o + r.value),
          r.value.includes(":") && !t && this.checkMissedSemicolon(e);
      }
      atrule(e) {
        let t = new Oi();
        (t.name = e[1].slice(1)),
          t.name === "" && this.unnamedAtrule(t, e),
          this.init(t, e[2]);
        let r,
          n,
          s,
          o = !1,
          u = !1,
          l = [],
          a = [];
        for (; !this.tokenizer.endOfFile(); ) {
          if (
            ((e = this.tokenizer.nextToken()),
            (r = e[0]),
            r === "(" || r === "["
              ? a.push(r === "(" ? ")" : "]")
              : r === "{" && a.length > 0
              ? a.push("}")
              : r === a[a.length - 1] && a.pop(),
            a.length === 0)
          )
            if (r === ";") {
              (t.source.end = this.getPosition(e[2])), (this.semicolon = !0);
              break;
            } else if (r === "{") {
              u = !0;
              break;
            } else if (r === "}") {
              if (l.length > 0) {
                for (s = l.length - 1, n = l[s]; n && n[0] === "space"; )
                  n = l[--s];
                n && (t.source.end = this.getPosition(n[3] || n[2]));
              }
              this.end(e);
              break;
            } else l.push(e);
          else l.push(e);
          if (this.tokenizer.endOfFile()) {
            o = !0;
            break;
          }
        }
        (t.raws.between = this.spacesAndCommentsFromEnd(l)),
          l.length
            ? ((t.raws.afterName = this.spacesAndCommentsFromStart(l)),
              this.raw(t, "params", l),
              o &&
                ((e = l[l.length - 1]),
                (t.source.end = this.getPosition(e[3] || e[2])),
                (this.spaces = t.raws.between),
                (t.raws.between = "")))
            : ((t.raws.afterName = ""), (t.params = "")),
          u && ((t.nodes = []), (this.current = t));
      }
      end(e) {
        this.current.nodes &&
          this.current.nodes.length &&
          (this.current.raws.semicolon = this.semicolon),
          (this.semicolon = !1),
          (this.current.raws.after =
            (this.current.raws.after || "") + this.spaces),
          (this.spaces = ""),
          this.current.parent
            ? ((this.current.source.end = this.getPosition(e[2])),
              (this.current = this.current.parent))
            : this.unexpectedClose(e);
      }
      endFile() {
        this.current.parent && this.unclosedBlock(),
          this.current.nodes &&
            this.current.nodes.length &&
            (this.current.raws.semicolon = this.semicolon),
          (this.current.raws.after =
            (this.current.raws.after || "") + this.spaces);
      }
      freeSemicolon(e) {
        if (((this.spaces += e[1]), this.current.nodes)) {
          let t = this.current.nodes[this.current.nodes.length - 1];
          t &&
            t.type === "rule" &&
            !t.raws.ownSemicolon &&
            ((t.raws.ownSemicolon = this.spaces), (this.spaces = ""));
        }
      }
      getPosition(e) {
        let t = this.input.fromOffset(e);
        return { offset: e, line: t.line, column: t.col };
      }
      init(e, t) {
        this.current.push(e),
          (e.source = { start: this.getPosition(t), input: this.input }),
          (e.raws.before = this.spaces),
          (this.spaces = ""),
          e.type !== "comment" && (this.semicolon = !1);
      }
      raw(e, t, r) {
        let n,
          s,
          o = r.length,
          u = "",
          l = !0,
          a,
          f,
          d = /^([#.|])?(\w)+/i;
        for (let c = 0; c < o; c += 1) {
          if (((n = r[c]), (s = n[0]), s === "comment" && e.type === "rule")) {
            (f = r[c - 1]),
              (a = r[c + 1]),
              f[0] !== "space" &&
              a[0] !== "space" &&
              d.test(f[1]) &&
              d.test(a[1])
                ? (u += n[1])
                : (l = !1);
            continue;
          }
          s === "comment" || (s === "space" && c === o - 1)
            ? (l = !1)
            : (u += n[1]);
        }
        if (!l) {
          let c = r.reduce((m, y) => m + y[1], "");
          e.raws[t] = { value: u, raw: c };
        }
        e[t] = u;
      }
      spacesAndCommentsFromEnd(e) {
        let t,
          r = "";
        for (
          ;
          e.length &&
          ((t = e[e.length - 1][0]), !(t !== "space" && t !== "comment"));

        )
          r = e.pop()[1] + r;
        return r;
      }
      spacesAndCommentsFromStart(e) {
        let t,
          r = "";
        for (
          ;
          e.length && ((t = e[0][0]), !(t !== "space" && t !== "comment"));

        )
          r += e.shift()[1];
        return r;
      }
      spacesFromEnd(e) {
        let t,
          r = "";
        for (; e.length && ((t = e[e.length - 1][0]), t === "space"); )
          r = e.pop()[1] + r;
        return r;
      }
      stringFrom(e, t) {
        let r = "";
        for (let n = t; n < e.length; n++) r += e[n][1];
        return e.splice(t, e.length - t), r;
      }
      colon(e) {
        let t = 0,
          r,
          n,
          s;
        for (let [o, u] of e.entries()) {
          if (
            ((r = u),
            (n = r[0]),
            n === "(" && (t += 1),
            n === ")" && (t -= 1),
            t === 0 && n === ":")
          )
            if (!s) this.doubleColon(r);
            else {
              if (s[0] === "word" && s[1] === "progid") continue;
              return o;
            }
          s = r;
        }
        return !1;
      }
      unclosedBracket(e) {
        throw this.input.error("Unclosed bracket", e[2]);
      }
      unknownWord(e) {
        throw this.input.error("Unknown word", e[0][2]);
      }
      unexpectedClose(e) {
        throw this.input.error("Unexpected }", e[2]);
      }
      unclosedBlock() {
        let e = this.current.source.start;
        throw this.input.error("Unclosed block", e.line, e.column);
      }
      doubleColon(e) {
        throw this.input.error("Double colon", e[2]);
      }
      unnamedAtrule(e, t) {
        throw this.input.error("At-rule without name", t[2]);
      }
      precheckMissedSemicolon() {}
      checkMissedSemicolon(e) {
        let t = this.colon(e);
        if (t === !1) return;
        let r = 0,
          n;
        for (
          let s = t - 1;
          s >= 0 && ((n = e[s]), !(n[0] !== "space" && ((r += 1), r === 2)));
          s--
        );
        throw this.input.error("Missed semicolon", n[2]);
      }
    };
  qr.exports = kr;
});
var Ur = g((Js, Dr) => {
  var Ei = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
    Mi = (i, e) => () => {
      let t = "",
        r = e;
      for (; r--; ) t += i[(Math.random() * i.length) | 0];
      return t;
    },
    Li = (i = 21) => {
      let e = "",
        t = i;
      for (; t--; ) e += Ei[(Math.random() * 64) | 0];
      return e;
    };
  Dr.exports = { nanoid: Li, customAlphabet: Mi };
});
var pt = g((Qs, Fr) => {
  "use strict";
  var { existsSync: Ri, readFileSync: Pi } = __fs$,
    { dirname: ht, join: Ii } = __path_browserify$,
    Pe = st();
  function qi(i) {
    return Buffer ? Buffer.from(i, "base64").toString() : window.atob(i);
  }
  var Ie = class {
    constructor(e, t) {
      if (t.map === !1) return;
      this.loadAnnotation(e),
        (this.inline = this.startWith(this.annotation, "data:"));
      let r = t.map ? t.map.prev : void 0,
        n = this.loadMap(t.from, r);
      !this.mapFile && t.from && (this.mapFile = t.from),
        this.mapFile && (this.root = ht(this.mapFile)),
        n && (this.text = n);
    }
    consumer() {
      return (
        this.consumerCache ||
          (this.consumerCache = new Pe.SourceMapConsumer(this.text)),
        this.consumerCache
      );
    }
    withContent() {
      return !!(
        this.consumer().sourcesContent &&
        this.consumer().sourcesContent.length > 0
      );
    }
    startWith(e, t) {
      return e ? e.substr(0, t.length) === t : !1;
    }
    getAnnotationURL(e) {
      return e.match(/\/\*\s*# sourceMappingURL=(.*)\s*\*\//)[1].trim();
    }
    loadAnnotation(e) {
      let t = e.match(/\/\*\s*# sourceMappingURL=.*\s*\*\//gm);
      if (t && t.length > 0) {
        let r = t[t.length - 1];
        r && (this.annotation = this.getAnnotationURL(r));
      }
    }
    decodeInline(e) {
      let t = /^data:application\/json;charset=utf-?8;base64,/,
        r = /^data:application\/json;base64,/,
        n = /^data:application\/json;charset=utf-?8,/,
        s = /^data:application\/json,/;
      if (n.test(e) || s.test(e))
        return decodeURIComponent(e.substr(RegExp.lastMatch.length));
      if (t.test(e) || r.test(e)) return qi(e.substr(RegExp.lastMatch.length));
      let o = e.match(/data:application\/json;([^,]+),/)[1];
      throw new Error("Unsupported source map encoding " + o);
    }
    loadFile(e) {
      if (((this.root = ht(e)), Ri(e)))
        return (this.mapFile = e), Pi(e, "utf-8").toString().trim();
    }
    loadMap(e, t) {
      if (t === !1) return !1;
      if (t) {
        if (typeof t == "string") return t;
        if (typeof t == "function") {
          let r = t(e);
          if (r) {
            let n = this.loadFile(r);
            if (!n)
              throw new Error(
                "Unable to load previous source map: " + r.toString()
              );
            return n;
          }
        } else {
          if (t instanceof Pe.SourceMapConsumer)
            return Pe.SourceMapGenerator.fromSourceMap(t).toString();
          if (t instanceof Pe.SourceMapGenerator) return t.toString();
          if (this.isMap(t)) return JSON.stringify(t);
          throw new Error(
            "Unsupported previous source map format: " + t.toString()
          );
        }
      } else {
        if (this.inline) return this.decodeInline(this.annotation);
        if (this.annotation) {
          let r = this.annotation;
          return e && (r = Ii(ht(e), r)), this.loadFile(r);
        }
      }
    }
    isMap(e) {
      return typeof e != "object"
        ? !1
        : typeof e.mappings == "string" ||
            typeof e._mappings == "string" ||
            Array.isArray(e.sections);
    }
  };
  Fr.exports = Ie;
  Ie.default = Ie;
});
var qe = g((Ys, Gr) => {
  "use strict";
  var { fileURLToPath: Ni, pathToFileURL: dt } = __url$,
    { resolve: zr, isAbsolute: Br } = __path_browserify$,
    { nanoid: ki } = Ur(),
    gt = Be(),
    jr = ge(),
    Ti = pt(),
    mt = Symbol("fromOffset cache"),
    ne = class {
      constructor(e, t = {}) {
        if (
          e === null ||
          typeof e == "undefined" ||
          (typeof e == "object" && !e.toString)
        )
          throw new Error(`PostCSS received ${e} instead of CSS string`);
        (this.css = e.toString()),
          this.css[0] === "\uFEFF" || this.css[0] === "\uFFFE"
            ? ((this.hasBOM = !0), (this.css = this.css.slice(1)))
            : (this.hasBOM = !1),
          t.from &&
            (/^\w+:\/\//.test(t.from) || Br(t.from)
              ? (this.file = t.from)
              : (this.file = zr(t.from)));
        let r = new Ti(this.css, t);
        if (r.text) {
          this.map = r;
          let n = r.consumer().file;
          !this.file && n && (this.file = this.mapResolve(n));
        }
        this.file || (this.id = "<input css " + ki(6) + ">"),
          this.map && (this.map.file = this.from);
      }
      fromOffset(e) {
        let t, r;
        if (this[mt]) r = this[mt];
        else {
          let s = this.css.split(`
`);
          r = new Array(s.length);
          let o = 0;
          for (let u = 0, l = s.length; u < l; u++)
            (r[u] = o), (o += s[u].length + 1);
          this[mt] = r;
        }
        t = r[r.length - 1];
        let n = 0;
        if (e >= t) n = r.length - 1;
        else {
          let s = r.length - 2,
            o;
          for (; n < s; )
            if (((o = n + ((s - n) >> 1)), e < r[o])) s = o - 1;
            else if (e >= r[o + 1]) n = o + 1;
            else {
              n = o;
              break;
            }
        }
        return { line: n + 1, col: e - r[n] + 1 };
      }
      error(e, t, r, n = {}) {
        let s;
        if (!r) {
          let u = this.fromOffset(t);
          (t = u.line), (r = u.col);
        }
        let o = this.origin(t, r);
        return (
          o
            ? (s = new jr(e, o.line, o.column, o.source, o.file, n.plugin))
            : (s = new jr(e, t, r, this.css, this.file, n.plugin)),
          (s.input = { line: t, column: r, source: this.css }),
          this.file &&
            ((s.input.url = dt(this.file).toString()),
            (s.input.file = this.file)),
          s
        );
      }
      origin(e, t) {
        if (!this.map) return !1;
        let r = this.map.consumer(),
          n = r.originalPositionFor({ line: e, column: t });
        if (!n.source) return !1;
        let s;
        Br(n.source)
          ? (s = dt(n.source))
          : (s = new URL(
              n.source,
              this.map.consumer().sourceRoot || dt(this.map.mapFile)
            ));
        let o = { url: s.toString(), line: n.line, column: n.column };
        s.protocol === "file:" && (o.file = Ni(s));
        let u = r.sourceContentFor(n.source);
        return u && (o.source = u), o;
      }
      mapResolve(e) {
        return /^\w+:\/\//.test(e)
          ? e
          : zr(this.map.consumer().sourceRoot || this.map.root || ".", e);
      }
      get from() {
        return this.file || this.id;
      }
      toJSON() {
        let e = {};
        for (let t of ["hasBOM", "css", "file", "id"])
          this[t] != null && (e[t] = this[t]);
        return (
          this.map &&
            ((e.map = { ...this.map }),
            e.map.consumerCache && (e.map.consumerCache = void 0)),
          e
        );
      }
    };
  Gr.exports = ne;
  ne.default = ne;
  gt && gt.registerInput && gt.registerInput(ne);
});
var yt = g((Hs, Vr) => {
  "use strict";
  var Di = j(),
    Ui = Tr(),
    Fi = qe();
  function Ne(i, e) {
    let t = new Fi(i, e),
      r = new Ui(t);
    try {
      r.parse();
    } catch (n) {
      throw n;
    }
    return r.root;
  }
  Vr.exports = Ne;
  Ne.default = Ne;
  Di.registerParse(Ne);
});
var _t = g((Zs, Wr) => {
  "use strict";
  var Gi = fr(),
    { isClean: L } = me(),
    zi = ye(),
    Ks = pr(),
    $r = ut(),
    Bi = yt(),
    ji = W(),
    Vi = {
      root: "Root",
      atrule: "AtRule",
      rule: "Rule",
      decl: "Declaration",
      comment: "Comment",
    },
    Wi = {
      postcssPlugin: !0,
      prepare: !0,
      Once: !0,
      Root: !0,
      Declaration: !0,
      Rule: !0,
      AtRule: !0,
      Comment: !0,
      DeclarationExit: !0,
      RuleExit: !0,
      AtRuleExit: !0,
      CommentExit: !0,
      RootExit: !0,
      OnceExit: !0,
    },
    $i = { postcssPlugin: !0, prepare: !0, Once: !0 },
    ie = 0;
  function ke(i) {
    return typeof i == "object" && typeof i.then == "function";
  }
  function Jr(i) {
    let e = !1,
      t = Vi[i.type];
    return (
      i.type === "decl"
        ? (e = i.prop.toLowerCase())
        : i.type === "atrule" && (e = i.name.toLowerCase()),
      e && i.append
        ? [t, t + "-" + e, ie, t + "Exit", t + "Exit-" + e]
        : e
        ? [t, t + "-" + e, t + "Exit", t + "Exit-" + e]
        : i.append
        ? [t, ie, t + "Exit"]
        : [t, t + "Exit"]
    );
  }
  function Qr(i) {
    let e;
    return (
      i.type === "root" ? (e = ["Root", ie, "RootExit"]) : (e = Jr(i)),
      {
        node: i,
        events: e,
        eventIndex: 0,
        visitors: [],
        visitorIndex: 0,
        iterator: 0,
      }
    );
  }
  function wt(i) {
    return (i[L] = !1), i.nodes && i.nodes.forEach((e) => wt(e)), i;
  }
  var vt = {},
    P = class {
      constructor(e, t, r) {
        (this.stringified = !1), (this.processed = !1);
        let n;
        if (typeof t == "object" && t !== null && t.type === "root") n = wt(t);
        else if (t instanceof P || t instanceof $r)
          (n = wt(t.root)),
            t.map &&
              (typeof r.map == "undefined" && (r.map = {}),
              r.map.inline || (r.map.inline = !1),
              (r.map.prev = t.map));
        else {
          let s = Bi;
          r.syntax && (s = r.syntax.parse),
            r.parser && (s = r.parser),
            s.parse && (s = s.parse);
          try {
            n = s(t, r);
          } catch (o) {
            (this.processed = !0), (this.error = o);
          }
        }
        (this.result = new $r(e, n, r)),
          (this.helpers = { ...vt, result: this.result, postcss: vt }),
          (this.plugins = this.processor.plugins.map((s) =>
            typeof s == "object" && s.prepare
              ? { ...s, ...s.prepare(this.result) }
              : s
          ));
      }
      get [Symbol.toStringTag]() {
        return "LazyResult";
      }
      get processor() {
        return this.result.processor;
      }
      get opts() {
        return this.result.opts;
      }
      get css() {
        return this.stringify().css;
      }
      get content() {
        return this.stringify().content;
      }
      get map() {
        return this.stringify().map;
      }
      get root() {
        return this.sync().root;
      }
      get messages() {
        return this.sync().messages;
      }
      warnings() {
        return this.sync().warnings();
      }
      toString() {
        return this.css;
      }
      then(e, t) {
        return this.async().then(e, t);
      }
      catch(e) {
        return this.async().catch(e);
      }
      finally(e) {
        return this.async().then(e, e);
      }
      async() {
        return this.error
          ? Promise.reject(this.error)
          : this.processed
          ? Promise.resolve(this.result)
          : (this.processing || (this.processing = this.runAsync()),
            this.processing);
      }
      sync() {
        if (this.error) throw this.error;
        if (this.processed) return this.result;
        if (((this.processed = !0), this.processing))
          throw this.getAsyncError();
        for (let e of this.plugins) {
          let t = this.runOnRoot(e);
          if (ke(t)) throw this.getAsyncError();
        }
        if ((this.prepareVisitors(), this.hasListener)) {
          let e = this.result.root;
          for (; !e[L]; ) (e[L] = !0), this.walkSync(e);
          this.listeners.OnceExit && this.visitSync(this.listeners.OnceExit, e);
        }
        return this.result;
      }
      stringify() {
        if (this.error) throw this.error;
        if (this.stringified) return this.result;
        (this.stringified = !0), this.sync();
        let e = this.result.opts,
          t = zi;
        e.syntax && (t = e.syntax.stringify),
          e.stringifier && (t = e.stringifier),
          t.stringify && (t = t.stringify);
        let n = new Gi(t, this.result.root, this.result.opts).generate();
        return (this.result.css = n[0]), (this.result.map = n[1]), this.result;
      }
      walkSync(e) {
        e[L] = !0;
        let t = Jr(e);
        for (let r of t)
          if (r === ie)
            e.nodes &&
              e.each((n) => {
                n[L] || this.walkSync(n);
              });
          else {
            let n = this.listeners[r];
            if (n && this.visitSync(n, e.toProxy())) return;
          }
      }
      visitSync(e, t) {
        for (let [r, n] of e) {
          this.result.lastPlugin = r;
          let s;
          try {
            s = n(t, this.helpers);
          } catch (o) {
            throw this.handleError(o, t.proxyOf);
          }
          if (t.type !== "root" && !t.parent) return !0;
          if (ke(s)) throw this.getAsyncError();
        }
      }
      runOnRoot(e) {
        this.result.lastPlugin = e;
        try {
          if (typeof e == "object" && e.Once)
            return e.Once(this.result.root, this.helpers);
          if (typeof e == "function") return e(this.result.root, this.result);
        } catch (t) {
          throw this.handleError(t);
        }
      }
      getAsyncError() {
        throw new Error("Use process(css).then(cb) to work with async plugins");
      }
      handleError(e, t) {
        let r = this.result.lastPlugin;
        try {
          t && t.addToError(e),
            (this.error = e),
            e.name === "CssSyntaxError" && !e.plugin
              ? ((e.plugin = r.postcssPlugin), e.setMessage())
              : r.postcssVersion;
        } catch (n) {
          console && console.error && console.error(n);
        }
        return e;
      }
      async runAsync() {
        this.plugin = 0;
        for (let e = 0; e < this.plugins.length; e++) {
          let t = this.plugins[e],
            r = this.runOnRoot(t);
          if (ke(r))
            try {
              await r;
            } catch (n) {
              throw this.handleError(n);
            }
        }
        if ((this.prepareVisitors(), this.hasListener)) {
          let e = this.result.root;
          for (; !e[L]; ) {
            e[L] = !0;
            let t = [Qr(e)];
            for (; t.length > 0; ) {
              let r = this.visitTick(t);
              if (ke(r))
                try {
                  await r;
                } catch (n) {
                  let s = t[t.length - 1].node;
                  throw this.handleError(n, s);
                }
            }
          }
          if (this.listeners.OnceExit)
            for (let [t, r] of this.listeners.OnceExit) {
              this.result.lastPlugin = t;
              try {
                await r(e, this.helpers);
              } catch (n) {
                throw this.handleError(n);
              }
            }
        }
        return (this.processed = !0), this.stringify();
      }
      prepareVisitors() {
        this.listeners = {};
        let e = (t, r, n) => {
          this.listeners[r] || (this.listeners[r] = []),
            this.listeners[r].push([t, n]);
        };
        for (let t of this.plugins)
          if (typeof t == "object")
            for (let r in t) {
              if (!Wi[r] && /^[A-Z]/.test(r))
                throw new Error(
                  `Unknown event ${r} in ${t.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
                );
              if (!$i[r])
                if (typeof t[r] == "object")
                  for (let n in t[r])
                    n === "*"
                      ? e(t, r, t[r][n])
                      : e(t, r + "-" + n.toLowerCase(), t[r][n]);
                else typeof t[r] == "function" && e(t, r, t[r]);
            }
        this.hasListener = Object.keys(this.listeners).length > 0;
      }
      visitTick(e) {
        let t = e[e.length - 1],
          { node: r, visitors: n } = t;
        if (r.type !== "root" && !r.parent) {
          e.pop();
          return;
        }
        if (n.length > 0 && t.visitorIndex < n.length) {
          let [o, u] = n[t.visitorIndex];
          (t.visitorIndex += 1),
            t.visitorIndex === n.length &&
              ((t.visitors = []), (t.visitorIndex = 0)),
            (this.result.lastPlugin = o);
          try {
            return u(r.toProxy(), this.helpers);
          } catch (l) {
            throw this.handleError(l, r);
          }
        }
        if (t.iterator !== 0) {
          let o = t.iterator,
            u;
          for (; (u = r.nodes[r.indexes[o]]); )
            if (((r.indexes[o] += 1), !u[L])) {
              (u[L] = !0), e.push(Qr(u));
              return;
            }
          (t.iterator = 0), delete r.indexes[o];
        }
        let s = t.events;
        for (; t.eventIndex < s.length; ) {
          let o = s[t.eventIndex];
          if (((t.eventIndex += 1), o === ie)) {
            r.nodes &&
              r.nodes.length &&
              ((r[L] = !0), (t.iterator = r.getIterator()));
            return;
          } else if (this.listeners[o]) {
            t.visitors = this.listeners[o];
            return;
          }
        }
        e.pop();
      }
    };
  P.registerPostcss = (i) => {
    vt = i;
  };
  Wr.exports = P;
  P.default = P;
  ji.registerLazyResult(P);
});
var Hr = g((Xs, Yr) => {
  "use strict";
  var Ji = _t(),
    Qi = W(),
    se = class {
      constructor(e = []) {
        (this.version = "8.2.4"), (this.plugins = this.normalize(e));
      }
      use(e) {
        return (this.plugins = this.plugins.concat(this.normalize([e]))), this;
      }
      process(e, t = {}) {
        return (
          this.plugins.length === 0 &&
            t.parser === t.stringifier &&
            !t.hideNothingWarning,
          new Ji(this, e, t)
        );
      }
      normalize(e) {
        let t = [];
        for (let r of e)
          if (
            (r.postcss === !0 ? (r = r()) : r.postcss && (r = r.postcss),
            typeof r == "object" && Array.isArray(r.plugins))
          )
            t = t.concat(r.plugins);
          else if (typeof r == "object" && r.postcssPlugin) t.push(r);
          else if (typeof r == "function") t.push(r);
          else if (!(typeof r == "object" && (r.parse || r.stringify)))
            throw new Error(r + " is not a PostCSS plugin");
        return t;
      }
    };
  Yr.exports = se;
  se.default = se;
  Qi.registerProcessor(se);
});
var Zr = g((eo, Kr) => {
  "use strict";
  var Yi = Y(),
    Hi = pt(),
    Ki = X(),
    Zi = Le(),
    Xi = qe(),
    es = W(),
    ts = Re();
  function oe(i, e) {
    if (Array.isArray(i)) return i.map((n) => oe(n));
    let { inputs: t, ...r } = i;
    if (t) {
      e = [];
      for (let n of t) {
        let s = { ...n, __proto__: Xi.prototype };
        s.map && (s.map = { ...s.map, __proto__: Hi.prototype }), e.push(s);
      }
    }
    if ((r.nodes && (r.nodes = i.nodes.map((n) => oe(n, e))), r.source)) {
      let { inputId: n, ...s } = r.source;
      (r.source = s), n != null && (r.source.input = e[n]);
    }
    if (r.type === "root") return new es(r);
    if (r.type === "decl") return new Yi(r);
    if (r.type === "rule") return new ts(r);
    if (r.type === "comment") return new Ki(r);
    if (r.type === "atrule") return new Zi(r);
    throw new Error("Unknown node type: " + i.type);
  }
  Kr.exports = oe;
  oe.default = oe;
});
var ln = g((to, Xr) => {
  "use strict";
  var rs = ge(),
    en = Y(),
    ns = _t(),
    is = j(),
    tn = Hr(),
    ss = ye(),
    os = Zr(),
    ls = lt(),
    rn = X(),
    nn = Le(),
    us = ut(),
    as = qe(),
    fs = yt(),
    cs = ct(),
    sn = Re(),
    on = W(),
    hs = Q();
  function w(...i) {
    return i.length === 1 && Array.isArray(i[0]) && (i = i[0]), new tn(i);
  }
  w.plugin = function (e, t) {
    function r(...s) {
      let o = t(...s);
      return (o.postcssPlugin = e), (o.postcssVersion = new tn().version), o;
    }
    let n;
    return (
      Object.defineProperty(r, "postcss", {
        get() {
          return n || (n = r()), n;
        },
      }),
      (r.process = function (s, o, u) {
        return w([r(u)]).process(s, o);
      }),
      r
    );
  };
  w.stringify = ss;
  w.parse = fs;
  w.fromJSON = os;
  w.list = cs;
  w.comment = (i) => new rn(i);
  w.atRule = (i) => new nn(i);
  w.decl = (i) => new en(i);
  w.rule = (i) => new sn(i);
  w.root = (i) => new on(i);
  w.CssSyntaxError = rs;
  w.Declaration = en;
  w.Container = is;
  w.Comment = rn;
  w.Warning = ls;
  w.AtRule = nn;
  w.Result = us;
  w.Input = as;
  w.Rule = sn;
  w.Root = on;
  w.Node = hs;
  ns.registerPostcss(w);
  Xr.exports = w;
  w.default = w;
});
var un = vn(ln());
var ps = un.default;
export { ps as default };
