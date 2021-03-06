//	HYPE.documents["Core Modernization"]
(function () {
  (function k() {
    function l(a, b, d) {
      var c = !1;
      null == window[a] && (null == window[b] ? (window[b] = [], window[b].push(k), a = document.getElementsByTagName("head")[0], b = document.createElement("script"), c = h, false == !0 && (c = ""), b.type = "text/javascript", b.src = c + "/" + d, a.appendChild(b)) : window[b].push(k), c = !0);
      return c;
    }

    var h = "Core%20Modernization.hyperesources",
        c = "Core Modernization",
        e = "coremodernization_hype_container";
    if (false == !1) try {
      for (var f = document.getElementsByTagName("script"), a = 0; a < f.length; a++) {
        var b = f[a].src,
            d = null != b ? b.indexOf("/coremodernization_hype_generated_script.js") : -1;

        if (-1 != d) {
          h = b.substr(0, d);
          break;
        }
      }
    } catch (n) {}
    if (false == !1 && (a = navigator.userAgent.match(/MSIE (\d+\.\d+)/), a = parseFloat(a && a[1]) || null, a = l("HYPE_596", "HYPE_dtl_596", !0 == (null != a && 10 > a || false == !0) ? "HYPE-596.full.min.js" : "HYPE-596.thin.min.js"), false == !0 && (a = a || l("HYPE_w_596", "HYPE_wdtl_596", "HYPE-596.waypoints.min.js")), a)) return;
    f = window.HYPE.documents;

    if (null != f[c]) {
      b = 1;
      a = c;

      do c = "" + a + "-" + b++; while (null != f[c]);

      d = document.getElementsByTagName("div");
      b = !1;

      for (a = 0; a < d.length; a++) if (d[a].id == e && null == d[a].getAttribute("HYP_dn")) {
        var b = 1,
            g = e;

        do e = "" + g + "-" + b++; while (null != document.getElementById(e));

        d[a].id = e;
        b = !0;
        break;
      }

      if (!1 == b) return;
    }

    b = [];
    b = [];
    d = {};
    g = {};

    for (a = 0; a < b.length; a++) try {
      g[b[a].identifier] = b[a].name, d[b[a].name] = eval("(function(){return " + b[a].source + "})();");
    } catch (m) {
      window.console && window.console.log(m), d[b[a].name] = function () {};
    }

    a = new HYPE_596(c, e, {
      "3": {
        p: 1,
        n: "%26%20Infrastructure.svg",
        g: "15",
        t: "image/svg+xml"
      },
      "-2": {
        n: "blank.gif"
      },
      "4": {
        p: 1,
        n: "core-modernization.jpg",
        g: "17",
        t: "@1x"
      },
      "0": {
        p: 1,
        n: "logo-core-modernization.svg",
        g: "9",
        t: "image/svg+xml"
      },
      "5": {
        p: 1,
        n: "Simplify%2C%20Modernize.svg",
        g: "7",
        t: "image/svg+xml"
      },
      "1": {
        p: 1,
        n: "your.svg",
        g: "5",
        t: "image/svg+xml"
      },
      "6": {
        p: 1,
        n: "for%20the%20Digital%20Era.svg",
        g: "11",
        t: "image/svg+xml"
      },
      "2": {
        p: 1,
        n: "Applications.svg",
        g: "13",
        t: "image/svg+xml"
      },
      "-1": {
        n: "PIE.htc"
      }
    }, h, [], d, [{
      n: "Untitled Scene",
      o: "1",
      X: [0]
    }], [{
      o: "3",
      p: "600px",
      a: 100,
      Y: 1600,
      Z: 500,
      b: 100,
      cA: false,
      c: "#000000",
      L: [],
      bY: 1,
      d: 1600,
      U: {},
      T: {
        kTimelineDefaultIdentifier: {
          i: "kTimelineDefaultIdentifier",
          n: "Main Timeline",
          z: 4,
          b: [],
          a: [{
            f: "c",
            y: 0,
            z: 4,
            i: "a",
            e: 719,
            s: 719,
            o: "38"
          }, {
            y: 0,
            i: "e",
            s: 1,
            z: 0,
            o: "38",
            f: "c"
          }, {
            f: "c",
            y: 0.11,
            z: 0.15,
            i: "e",
            e: 1,
            s: 0,
            o: "36"
          }, {
            y: 0.26,
            i: "a",
            s: 552,
            z: 0,
            o: "36",
            f: "c"
          }, {
            y: 0.26,
            i: "e",
            s: 1,
            z: 0,
            o: "36",
            f: "c"
          }, {
            f: "c",
            y: 1.09,
            z: 0.15,
            i: "a",
            e: 23,
            s: 63,
            o: "34"
          }, {
            f: "c",
            y: 1.09,
            z: 0.15,
            i: "e",
            e: 1,
            s: 0,
            o: "34"
          }, {
            f: "c",
            y: 1.09,
            z: 0.15,
            i: "a",
            e: 100,
            s: 60,
            o: "33"
          }, {
            f: "c",
            y: 1.09,
            z: 0.15,
            i: "e",
            e: 1,
            s: 0,
            o: "33"
          }, {
            f: "c",
            y: 1.2,
            z: 0.15,
            i: "a",
            e: 484,
            s: 444,
            o: "35"
          }, {
            f: "c",
            y: 1.2,
            z: 0.15,
            i: "e",
            e: 1,
            s: 0,
            o: "35"
          }, {
            y: 1.24,
            i: "a",
            s: 23,
            z: 0,
            o: "34",
            f: "c"
          }, {
            y: 1.24,
            i: "e",
            s: 1,
            z: 0,
            o: "34",
            f: "c"
          }, {
            y: 1.24,
            i: "a",
            s: 100,
            z: 0,
            o: "33",
            f: "c"
          }, {
            y: 1.24,
            i: "e",
            s: 1,
            z: 0,
            o: "33",
            f: "c"
          }, {
            y: 2.05,
            i: "a",
            s: 484,
            z: 0,
            o: "35",
            f: "c"
          }, {
            y: 2.05,
            i: "e",
            s: 1,
            z: 0,
            o: "35",
            f: "c"
          }, {
            f: "c",
            y: 2.15,
            z: 0.15,
            i: "a",
            e: 735,
            s: 775,
            o: "37"
          }, {
            f: "c",
            y: 2.15,
            z: 0.15,
            i: "e",
            e: 1,
            s: 0,
            o: "37"
          }, {
            y: 3,
            i: "a",
            s: 735,
            z: 0,
            o: "37",
            f: "c"
          }, {
            y: 3,
            i: "e",
            s: 1,
            z: 0,
            o: "37",
            f: "c"
          }, {
            y: 4,
            i: "a",
            s: 719,
            z: 0,
            o: "38",
            f: "c"
          }],
          f: 30
        }
      },
      bZ: 180,
      O: ["39", "38", "36", "32", "33", "34", "35", "37"],
      n: "Untitled Layout",
      "_": 0,
      v: {
        "39": {
          h: "17",
          p: "no-repeat",
          x: "visible",
          a: 0,
          q: "100% 100%",
          b: 0,
          j: "absolute",
          dB: "img",
          z: 1,
          k: "div",
          c: 1600,
          d: 500,
          r: "none"
        },
        "34": {
          h: "5",
          p: "no-repeat",
          x: "visible",
          a: 63,
          q: "100% 100%",
          b: 28,
          j: "absolute",
          dB: "img",
          z: 2,
          k: "div",
          bS: 36,
          d: 27,
          bF: "32",
          cQ: 1,
          e: 0,
          c: 69,
          r: "inline",
          cR: 1
        },
        "37": {
          h: "11",
          p: "no-repeat",
          x: "visible",
          a: 775,
          q: "100% 100%",
          b: 330,
          j: "absolute",
          dB: "img",
          z: 3,
          k: "div",
          bS: 37,
          d: 45,
          c: 378,
          cQ: 1,
          e: 0,
          r: "inline",
          cR: 1
        },
        "32": {
          k: "div",
          x: "visible",
          c: 509,
          d: 65,
          z: 5,
          a: 530,
          j: "absolute",
          bS: 37,
          b: 191
        },
        "35": {
          h: "15",
          p: "no-repeat",
          x: "visible",
          a: 444,
          q: "100% 100%",
          b: 253,
          j: "absolute",
          dB: "img",
          z: 4,
          k: "div",
          bS: 37,
          d: 63,
          c: 632,
          cQ: 1,
          e: 0,
          r: "inline",
          cR: 1
        },
        "38": {
          h: "9",
          p: "no-repeat",
          x: "visible",
          a: 719,
          q: "100% 100%",
          b: 54,
          j: "absolute",
          bS: 37,
          z: 9,
          k: "div",
          dB: "img",
          d: 60,
          c: 161,
          r: "inline",
          e: 1
        },
        "33": {
          h: "13",
          p: "no-repeat",
          x: "visible",
          a: 60,
          q: "100% 100%",
          b: 0,
          j: "absolute",
          dB: "img",
          z: 1,
          k: "div",
          bS: 36,
          d: 61,
          bF: "32",
          cQ: 1,
          e: 0,
          c: 392,
          r: "inline",
          cR: 1
        },
        "36": {
          h: "7",
          p: "no-repeat",
          x: "visible",
          a: 552,
          q: "100% 100%",
          b: 150,
          j: "absolute",
          dB: "img",
          z: 8,
          k: "div",
          bS: 37,
          d: 34,
          c: 486,
          cQ: 1,
          e: 0,
          r: "inline",
          cR: 1
        }
      }
    }], {}, g, {}, null, false, false, -1, true, true, false, true);
    f[c] = a.API;
    document.getElementById(e).setAttribute("HYP_dn", c);
    a.z_o(this.body);
  })();
})();

//# sourceMappingURL=coremodernization_hype_generated_script-min.js.map
