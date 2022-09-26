(() => {
  var e = {
      28: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => c });
        var r = n(81),
          o = n.n(r),
          i = n(645),
          a = n.n(i)()(o());
        a.push([
          e.id,
          "*{\n    margin: 0;\n}\n\nbody {\n  background-color: rgba(250, 188, 177, 0.411);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nsection {\n    margin: 10px;\n}\n\ncanvas {\n  width: 800px;\n  height: 800px;\n  border: 5px solid black;\n  background-color: white;\n}\n\n.colorArea{\n    display: flex;\n}\n\n.color-option{\n    width: 50px;\n    height: 50px;\n    cursor: pointer;\n}",
          "",
        ]);
        const c = a;
      },
      645: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, o, i) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var a = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (a[s] = !0);
                }
              for (var l = 0; l < e.length; l++) {
                var u = [].concat(e[l]);
                (r && a[u[0]]) ||
                  (void 0 !== i &&
                    (void 0 === u[5] ||
                      (u[1] = "@layer"
                        .concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
                        .concat(u[1], "}")),
                    (u[5] = i)),
                  n &&
                    (u[2]
                      ? ((u[1] = "@media "
                          .concat(u[2], " {")
                          .concat(u[1], "}")),
                        (u[2] = n))
                      : (u[2] = n)),
                  o &&
                    (u[4]
                      ? ((u[1] = "@supports ("
                          .concat(u[4], ") {")
                          .concat(u[1], "}")),
                        (u[4] = o))
                      : (u[4] = "".concat(o))),
                  t.push(u));
              }
            }),
            t
          );
        };
      },
      81: (e) => {
        "use strict";
        e.exports = function (e) {
          return e[1];
        };
      },
      89: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { default: () => y });
        var r = n(379),
          o = n.n(r),
          i = n(795),
          a = n.n(i),
          c = n(569),
          s = n.n(c),
          l = n(565),
          u = n.n(l),
          d = n(216),
          f = n.n(d),
          p = n(589),
          v = n.n(p),
          m = n(28),
          h = {};
        (h.styleTagTransform = v()),
          (h.setAttributes = u()),
          (h.insert = s().bind(null, "head")),
          (h.domAPI = a()),
          (h.insertStyleElement = f()),
          o()(m.Z, h);
        const y = m.Z && m.Z.locals ? m.Z.locals : void 0;
      },
      379: (e) => {
        "use strict";
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var i = {}, a = [], c = 0; c < e.length; c++) {
            var s = e[c],
              l = r.base ? s[0] + r.base : s[0],
              u = i[l] || 0,
              d = "".concat(l, " ").concat(u);
            i[l] = u + 1;
            var f = n(d),
              p = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== f) t[f].references++, t[f].updater(p);
            else {
              var v = o(p, r);
              (r.byIndex = c),
                t.splice(c, 0, { identifier: d, updater: v, references: 1 });
            }
            a.push(d);
          }
          return a;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var i = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var a = 0; a < i.length; a++) {
              var c = n(i[a]);
              t[c].references--;
            }
            for (var s = r(e, o), l = 0; l < i.length; l++) {
              var u = n(i[l]);
              0 === t[u].references && (t[u].updater(), t.splice(u, 1));
            }
            i = s;
          };
        };
      },
      569: (e) => {
        "use strict";
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      216: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        "use strict";
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var i = n.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        "use strict";
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { id: r, exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.nc = void 0),
    (() => {
      n(89);
      const e = document.getElementById("mode-btn"),
        t = document.getElementById("return-btn"),
        r = document.getElementById("erase-btn"),
        o = document.getElementById("line-width"),
        i = document.getElementById("color"),
        a = Array.from(document.getElementsByClassName("color-option")),
        c = document.querySelector("#canvas1"),
        s = c.getContext("2d");
      (c.width = 800), (c.height = 800), (s.lineWidth = o.value);
      let l = !1,
        u = !1,
        d = "white";
      function f() {
        (l = !1), s.beginPath();
      }
      function p(e) {
        const t = e.target.dataset.color;
        (s.strokeStyle = t), (s.fillStyle = t), (i.value = t);
      }
      c.addEventListener("mousemove", function (e) {
        if (l) return s.lineTo(e.offsetX, e.offsetY), void s.stroke();
        s.moveTo(e.offsetX, e.offsetY);
      }),
        c.addEventListener("mousedown", function () {
          l = !0;
        }),
        c.addEventListener("mouseup", f),
        c.addEventListener("mouseleave", f),
        c.addEventListener("click", function () {
          u && (s.fillRect(0, 0, 800, 800), (d = s.fillStyle));
        }),
        o.addEventListener("change", function (e) {
          s.lineWidth = e.target.value;
        }),
        i.addEventListener("change", function (e) {
          (s.strokeStyle = e.target.value), (s.fillStyle = e.target.value);
        }),
        a.forEach((e) => e.addEventListener("click", p)),
        e.addEventListener("click", function () {
          u
            ? ((u = !1), (e.innerText = "Fill"))
            : ((u = !0), (e.innerText = "Draw"));
        }),
        t.addEventListener("click", function () {
          (s.fillStyle = "white"), s.clearRect(0, 0, 800, 800);
        }),
        r.addEventListener("click", function () {
          (s.strokeStyle = d), (u = !1), (e.innerText = "Fill");
        });
      const v = document.querySelector("#canvas2");
      v.getContext("2d"), (v.width = 800), (v.height = 800);
    })();
})();
