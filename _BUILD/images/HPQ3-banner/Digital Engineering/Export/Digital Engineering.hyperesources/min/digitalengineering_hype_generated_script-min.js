//	HYPE.documents["Digital Engineering"]
(function () {
  (function k() {
    function l(a, b, d) {
      var c = !1;
      null == window[a] && (null == window[b] ? (window[b] = [], window[b].push(k), a = document.getElementsByTagName("head")[0], b = document.createElement("script"), c = h, false == !0 && (c = ""), b.type = "text/javascript", b.src = c + "/" + d, a.appendChild(b)) : window[b].push(k), c = !0);
      return c;
    }

    var h = "Digital%20Engineering.hyperesources",
        c = "Digital Engineering",
        e = "digitalengineering_hype_container";
    if (false == !1) try {
      for (var f = document.getElementsByTagName("script"), a = 0; a < f.length; a++) {
        var b = f[a].src,
            d = null != b ? b.indexOf("/digitalengineering_hype_generated_script.js") : -1;

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
        n: "digital-engineering.jpg",
        g: "21",
        t: "@1x"
      },
      "-2": {
        n: "blank.gif"
      },
      "4": {
        p: 1,
        n: "Applying%20Human%20Insig.svg",
        g: "23",
        t: "image/svg+xml"
      },
      "0": {
        p: 1,
        n: "logo-digital-engineering.svg",
        g: "17",
        t: "image/svg+xml"
      },
      "1": {
        p: 1,
        n: "For%20the%20App%20Economy.svg",
        g: "19",
        t: "image/svg+xml"
      },
      "2": {
        p: 1,
        n: "Reinventing%20Engineer.svg",
        g: "15",
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
            z: 0.15,
            i: "e",
            e: 1,
            s: 0,
            o: "27"
          }, {
            f: "c",
            y: 0,
            z: 0.15,
            i: "a",
            e: 501,
            s: 541,
            o: "27"
          }, {
            y: 0.15,
            i: "a",
            s: 501,
            z: 0,
            o: "27",
            f: "c"
          }, {
            y: 0.15,
            i: "e",
            s: 1,
            z: 0,
            o: "27",
            f: "c"
          }, {
            f: "c",
            y: 0.25,
            z: 0.15,
            i: "e",
            e: 1,
            s: 0,
            o: "26"
          }, {
            f: "c",
            y: 0.25,
            z: 0.15,
            i: "a",
            e: 431,
            s: 431,
            o: "26"
          }, {
            y: 1.1,
            i: "e",
            s: 1,
            z: 0,
            o: "26",
            f: "c"
          }, {
            y: 1.1,
            i: "a",
            s: 431,
            z: 0,
            o: "26",
            f: "c"
          }, {
            f: "c",
            y: 1.17,
            z: 0.15,
            i: "e",
            e: 1,
            s: 0,
            o: "28"
          }, {
            f: "c",
            y: 1.17,
            z: 0.15,
            i: "a",
            e: 725,
            s: 685,
            o: "28"
          }, {
            y: 2.02,
            i: "e",
            s: 1,
            z: 0,
            o: "28",
            f: "c"
          }, {
            y: 2.02,
            i: "a",
            s: 725,
            z: 0,
            o: "28",
            f: "c"
          }, {
            y: 4,
            i: "e",
            s: 1,
            z: 0,
            o: "29",
            f: "c"
          }],
          f: 30
        }
      },
      bZ: 180,
      O: ["25", "29", "27", "26", "28"],
      n: "Untitled Layout",
      "_": 0,
      v: {
        "29": {
          h: "17",
          p: "no-repeat",
          x: "visible",
          a: 739,
          q: "100% 100%",
          b: 54,
          j: "absolute",
          bS: 37,
          z: 5,
          k: "div",
          dB: "img",
          d: 60,
          c: 122,
          r: "inline",
          e: 1
        },
        "25": {
          h: "21",
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
        "28": {
          h: "19",
          p: "no-repeat",
          x: "visible",
          a: 685,
          q: "100% 100%",
          b: 305,
          j: "absolute",
          dB: "img",
          z: 2,
          k: "div",
          bS: 37,
          d: 33,
          c: 353,
          cQ: 1,
          e: 0,
          r: "inline",
          cR: 1
        },
        "27": {
          h: "23",
          p: "no-repeat",
          x: "visible",
          a: 541,
          q: "100% 100%",
          b: 189,
          j: "absolute",
          bS: 37,
          z: 4,
          k: "div",
          dB: "img",
          d: 34,
          c: 542,
          r: "inline",
          e: 0
        },
        "26": {
          h: "15",
          p: "no-repeat",
          x: "visible",
          a: 431,
          q: "100% 100%",
          b: 234,
          j: "absolute",
          dB: "img",
          z: 3,
          k: "div",
          bS: 37,
          d: 61,
          c: 747,
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

//# sourceMappingURL=digitalengineering_hype_generated_script-min.js.map
