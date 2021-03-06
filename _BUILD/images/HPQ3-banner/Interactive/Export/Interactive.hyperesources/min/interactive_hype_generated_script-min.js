//	HYPE.documents["Interactive"]
(function () {
  (function k() {
    function l(a, b, d) {
      var c = !1;
      null == window[a] && (null == window[b] ? (window[b] = [], window[b].push(k), a = document.getElementsByTagName("head")[0], b = document.createElement("script"), c = h, false == !0 && (c = ""), b.type = "text/javascript", b.src = c + "/" + d, a.appendChild(b)) : window[b].push(k), c = !0);
      return c;
    }

    var h = "Interactive.hyperesources",
        c = "Interactive",
        e = "interactive_hype_container";
    if (false == !1) try {
      for (var f = document.getElementsByTagName("script"), a = 0; a < f.length; a++) {
        var b = f[a].src,
            d = null != b ? b.indexOf("/interactive_hype_generated_script.js") : -1;

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
        n: "Experience.svg",
        g: "15",
        t: "image/svg+xml"
      },
      "-2": {
        n: "blank.gif"
      },
      "4": {
        p: 1,
        n: "Tomorrow%E2%80%99s%20Products.svg",
        g: "9",
        t: "image/svg+xml"
      },
      "0": {
        p: 1,
        n: "logo-interactive.svg",
        g: "11",
        t: "image/svg+xml"
      },
      "5": {
        p: 1,
        n: "Using%20Human%20Insight.svg",
        g: "5",
        t: "image/svg+xml"
      },
      "1": {
        p: 1,
        n: "Transformation.svg",
        g: "7",
        t: "image/svg+xml"
      },
      "-1": {
        n: "PIE.htc"
      },
      "2": {
        p: 1,
        n: "interactive.jpg",
        g: "13",
        t: "@1x"
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
            z: 0.15,
            i: "e",
            e: 1,
            s: 0,
            o: "19"
          }, {
            f: "c",
            y: 0,
            z: 0.15,
            i: "a",
            e: 612,
            s: 572,
            o: "19"
          }, {
            f: "c",
            y: 0.11,
            z: 0.15,
            i: "a",
            e: 513,
            s: 553,
            o: "18"
          }, {
            f: "c",
            y: 0.11,
            z: 0.15,
            i: "e",
            e: 1,
            s: 0,
            o: "18"
          }, {
            y: 0.15,
            i: "e",
            s: 1,
            z: 0,
            o: "19",
            f: "c"
          }, {
            y: 0.15,
            i: "a",
            s: 612,
            z: 0,
            o: "19",
            f: "c"
          }, {
            y: 0.26,
            i: "a",
            s: 513,
            z: 0,
            o: "18",
            f: "c"
          }, {
            y: 0.26,
            i: "e",
            s: 1,
            z: 0,
            o: "18",
            f: "c"
          }, {
            f: "c",
            y: 1.12,
            z: 0.15,
            i: "e",
            e: 1,
            s: 0,
            o: "21"
          }, {
            f: "c",
            y: 1.12,
            z: 0.15,
            i: "a",
            e: 480,
            s: 440,
            o: "21"
          }, {
            y: 1.27,
            i: "e",
            s: 1,
            z: 0,
            o: "21",
            f: "c"
          }, {
            y: 1.27,
            i: "a",
            s: 480,
            z: 0,
            o: "21",
            f: "c"
          }, {
            f: "c",
            y: 2.16,
            z: 0.15,
            i: "e",
            e: 1,
            s: 0,
            o: "17"
          }, {
            f: "c",
            y: 2.16,
            z: 0.15,
            i: "a",
            e: 565,
            s: 605,
            o: "17"
          }, {
            y: 3.01,
            i: "e",
            s: 1,
            z: 0,
            o: "17",
            f: "c"
          }, {
            y: 3.01,
            i: "a",
            s: 565,
            z: 0,
            o: "17",
            f: "c"
          }, {
            y: 4,
            i: "e",
            s: 1,
            z: 0,
            o: "20",
            f: "c"
          }],
          f: 30
        }
      },
      bZ: 180,
      O: ["22", "20", "19", "18", "21", "17"],
      n: "Untitled Layout",
      "_": 0,
      v: {
        "17": {
          h: "9",
          p: "no-repeat",
          x: "visible",
          a: 605,
          q: "100% 100%",
          b: 328,
          j: "absolute",
          dB: "img",
          z: 2,
          k: "div",
          bS: 37,
          d: 27,
          c: 513,
          cQ: 1,
          e: 0,
          r: "inline",
          cR: 1
        },
        "22": {
          h: "13",
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
        "21": {
          h: "5",
          p: "no-repeat",
          x: "visible",
          a: 440,
          q: "100% 100%",
          b: 291,
          j: "absolute",
          dB: "img",
          z: 3,
          k: "div",
          bS: 37,
          d: 27,
          c: 642,
          cQ: 1,
          e: 0,
          r: "inline",
          cR: 1
        },
        "19": {
          h: "15",
          p: "no-repeat",
          x: "visible",
          a: 572,
          q: "100% 100%",
          b: 162,
          j: "absolute",
          dB: "img",
          z: 5,
          k: "div",
          bS: 37,
          d: 54,
          c: 296,
          cQ: 1,
          e: 0,
          r: "inline",
          cR: 1
        },
        "20": {
          h: "11",
          p: "no-repeat",
          x: "visible",
          a: 726,
          q: "100% 100%",
          b: 54,
          j: "absolute",
          bS: 37,
          z: 6,
          k: "div",
          dB: "img",
          d: 45,
          c: 147,
          r: "inline",
          e: 1
        },
        "18": {
          h: "7",
          p: "no-repeat",
          x: "visible",
          a: 553,
          q: "100% 100%",
          b: 214,
          j: "absolute",
          dB: "img",
          z: 4,
          k: "div",
          bS: 37,
          d: 56,
          c: 544,
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

//# sourceMappingURL=interactive_hype_generated_script-min.js.map
