//	HYPE.documents["Industry and Platform Solutions"]
(function () {
  (function k() {
    function l(a, b, d) {
      var c = !1;
      null == window[a] && (null == window[b] ? (window[b] = [], window[b].push(k), a = document.getElementsByTagName("head")[0], b = document.createElement("script"), c = h, false == !0 && (c = ""), b.type = "text/javascript", b.src = c + "/" + d, a.appendChild(b)) : window[b].push(k), c = !0);
      return c;
    }

    var h = "Industry%20and%20Platform%20Solutions.hyperesources",
        c = "Industry and Platform Solutions",
        e = "industryandplatformsolutions_hype_container";
    if (false == !1) try {
      for (var f = document.getElementsByTagName("script"), a = 0; a < f.length; a++) {
        var b = f[a].src,
            d = null != b ? b.indexOf("/industryandplatformsolutions_hype_generated_script.js") : -1;

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
        n: "with.svg",
        g: "5",
        t: "image/svg+xml"
      },
      "-2": {
        n: "blank.gif"
      },
      "4": {
        p: 1,
        n: "Powered%20by%20Data%2C%20Aut.svg",
        g: "11",
        t: "image/svg+xml"
      },
      "0": {
        p: 1,
        n: "logo-industry-platform-solutions.svg",
        g: "13",
        t: "image/svg+xml"
      },
      "5": {
        p: 1,
        n: "industry-and-platform.jpg",
        g: "15",
        t: "@1x"
      },
      "1": {
        p: 1,
        n: "Solutions.svg",
        g: "7",
        t: "image/svg+xml"
      },
      "6": {
        p: 1,
        n: "Industry%20%26%20Platform.svg",
        g: "17",
        t: "image/svg+xml"
      },
      "2": {
        p: 1,
        n: "Reinvent%20Business%20Op.svg",
        g: "9",
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
            e: 574,
            s: 534,
            o: "27"
          }, {
            y: 0.15,
            i: "a",
            s: 574,
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
            y: 1,
            z: 0.15,
            i: "a",
            e: -53,
            s: -13,
            o: "23"
          }, {
            f: "c",
            y: 1,
            z: 0.15,
            i: "e",
            e: 1,
            s: 0,
            o: "23"
          }, {
            f: "c",
            y: 1,
            z: 0.15,
            i: "a",
            e: 25,
            s: -15,
            o: "24"
          }, {
            f: "c",
            y: 1,
            z: 0.15,
            i: "e",
            e: 1,
            s: 0,
            o: "24"
          }, {
            y: 1.15,
            i: "a",
            s: -53,
            z: 0,
            o: "23",
            f: "c"
          }, {
            y: 1.15,
            i: "e",
            s: 1,
            z: 0,
            o: "23",
            f: "c"
          }, {
            y: 1.15,
            i: "a",
            s: 25,
            z: 0,
            o: "24",
            f: "c"
          }, {
            y: 1.15,
            i: "e",
            s: 1,
            z: 0,
            o: "24",
            f: "c"
          }, {
            f: "c",
            y: 1.18,
            z: 0.15,
            i: "e",
            e: 1,
            s: 0,
            o: "21"
          }, {
            f: "c",
            y: 1.18,
            z: 0.15,
            i: "a",
            e: 621,
            s: 621,
            o: "21"
          }, {
            y: 2.03,
            i: "e",
            s: 1,
            z: 0,
            o: "21",
            f: "c"
          }, {
            y: 2.03,
            i: "a",
            s: 621,
            z: 0,
            o: "21",
            f: "c"
          }, {
            f: "c",
            y: 3,
            z: 0.15,
            i: "a",
            e: 563,
            s: 563,
            o: "26"
          }, {
            f: "c",
            y: 3,
            z: 0.15,
            i: "e",
            e: 1,
            s: 0,
            o: "26"
          }, {
            y: 3.15,
            i: "a",
            s: 563,
            z: 0,
            o: "26",
            f: "c"
          }, {
            y: 3.15,
            i: "e",
            s: 1,
            z: 0,
            o: "26",
            f: "c"
          }, {
            y: 4,
            i: "e",
            s: 1,
            z: 0,
            o: "25",
            f: "c"
          }],
          f: 30
        }
      },
      bZ: 180,
      O: ["20", "25", "27", "22", "24", "23", "21", "26"],
      n: "Untitled Layout",
      "_": 0,
      v: {
        "26": {
          h: "11",
          p: "no-repeat",
          x: "visible",
          a: 563,
          q: "100% 100%",
          b: 321,
          j: "absolute",
          dB: "img",
          z: 2,
          k: "div",
          bS: 37,
          d: 29,
          c: 499,
          cQ: 1,
          e: 0,
          r: "inline",
          cR: 1
        },
        "21": {
          h: "7",
          p: "no-repeat",
          x: "visible",
          a: 621,
          q: "100% 100%",
          b: 245,
          j: "absolute",
          dB: "img",
          z: 3,
          k: "div",
          bS: 37,
          d: 64,
          c: 377,
          cQ: 1,
          e: 0,
          r: "inline",
          cR: 1
        },
        "24": {
          h: "17",
          p: "no-repeat",
          x: "visible",
          a: -15,
          q: "100% 100%",
          b: 5,
          j: "absolute",
          dB: "img",
          z: 1,
          k: "div",
          bS: 36,
          d: 53,
          bF: "22",
          cQ: 1,
          e: 0,
          c: 517,
          r: "inline",
          cR: 1
        },
        "27": {
          h: "9",
          p: "no-repeat",
          x: "visible",
          a: 534,
          q: "100% 100%",
          b: 147,
          j: "absolute",
          dB: "img",
          z: 7,
          k: "div",
          bS: 37,
          d: 33,
          c: 489,
          cQ: 1,
          e: 0,
          r: "inline",
          cR: 1
        },
        "22": {
          k: "div",
          x: "visible",
          c: 604,
          d: 54,
          z: 4,
          a: 569,
          j: "absolute",
          bS: 37,
          b: 184
        },
        "25": {
          h: "13",
          p: "no-repeat",
          x: "visible",
          a: 701,
          q: "100% 100%",
          b: 54,
          j: "absolute",
          bS: 37,
          z: 8,
          k: "div",
          dB: "img",
          d: 60,
          c: 198,
          r: "inline",
          e: 1
        },
        "20": {
          h: "15",
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
        "23": {
          h: "5",
          p: "no-repeat",
          x: "visible",
          a: -13,
          q: "100% 100%",
          b: 22,
          j: "absolute",
          dB: "img",
          z: 2,
          k: "div",
          bS: 36,
          d: 26,
          bF: "22",
          cQ: 1,
          e: 0,
          c: 61,
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

//# sourceMappingURL=industryandplatformsolutions_hype_generated_script-min.js.map
