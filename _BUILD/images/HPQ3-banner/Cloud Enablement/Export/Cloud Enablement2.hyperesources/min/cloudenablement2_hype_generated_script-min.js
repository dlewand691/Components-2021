//	HYPE.documents["Cloud Enablement2"]
(function () {
  (function k() {
    function l(a, b, d) {
      var c = !1;
      null == window[a] && (null == window[b] ? (window[b] = [], window[b].push(k), a = document.getElementsByTagName("head")[0], b = document.createElement("script"), c = h, false == !0 && (c = ""), b.type = "text/javascript", b.src = c + "/" + d, a.appendChild(b)) : window[b].push(k), c = !0);
      return c;
    }

    var h = "Cloud%20Enablement2.hyperesources",
        c = "Cloud Enablement2",
        e = "cloudenablement2_hype_container";
    if (false == !1) try {
      for (var f = document.getElementsByTagName("script"), a = 0; a < f.length; a++) {
        var b = f[a].src,
            d = null != b ? b.indexOf("/cloudenablement2_hype_generated_script.js") : -1;

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
        n: "Intelligent%20Automati.svg",
        g: "25",
        t: "image/svg+xml"
      },
      "-2": {
        n: "blank.gif"
      },
      "4": {
        p: 1,
        n: "Application%20Moderniz.svg",
        g: "27",
        t: "image/svg+xml"
      },
      "0": {
        p: 1,
        n: "cloud-enablement.jpg",
        g: "17",
        t: "@1x"
      },
      "5": {
        p: 1,
        n: "Accelerate%20Digital%20T.svg",
        g: "23",
        t: "image/svg+xml"
      },
      "1": {
        p: 1,
        n: "logo%20Cloud%20Enablement.svg",
        g: "19",
        t: "image/svg+xml"
      },
      "-1": {
        n: "PIE.htc"
      },
      "2": {
        p: 1,
        n: "Cloud%20Enablement.svg",
        g: "21",
        t: "image/svg+xml"
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
          f: 30,
          z: 4,
          i: "kTimelineDefaultIdentifier",
          n: "Main Timeline",
          j: {
            "0": [[729, 171, 729, 171, 723, 171, 740, 171], [740, 171, 763, 171, 790, 171, 790, 171]]
          },
          a: [{
            o: "30",
            y: 0,
            z: 0.15,
            i: "a",
            e: 614.5,
            a: "0",
            f: "c",
            s: 553.5
          }, {
            f: "c",
            y: 0,
            z: 0.15,
            i: "bL",
            e: 0,
            s: 5,
            o: "30"
          }, {
            o: "30",
            y: 0,
            z: 0.15,
            i: "b",
            e: 157.5,
            a: "0",
            f: "c",
            s: 157.5
          }, {
            f: "c",
            y: 0,
            z: 0.15,
            i: "e",
            e: 1,
            s: 0,
            o: "30"
          }, {
            f: "c",
            y: 0.12,
            z: 0.15,
            i: "a",
            e: 669,
            s: 729,
            o: "34"
          }, {
            f: "c",
            y: 0.12,
            z: 0.15,
            i: "bL",
            e: 0,
            s: 5,
            o: "34"
          }, {
            f: "c",
            y: 0.12,
            z: 0.15,
            i: "e",
            e: 1,
            s: 0,
            o: "34"
          }, {
            y: 0.15,
            i: "b",
            s: 157.5,
            z: 0,
            o: "30",
            f: "c"
          }, {
            y: 0.15,
            i: "a",
            s: 614.5,
            z: 0,
            o: "30",
            f: "c"
          }, {
            y: 0.15,
            i: "e",
            s: 1,
            z: 0,
            o: "30",
            f: "c"
          }, {
            y: 0.15,
            i: "bL",
            s: 0,
            z: 0,
            o: "30",
            f: "c"
          }, {
            y: 0.27,
            i: "bL",
            s: 0,
            z: 0,
            o: "34",
            f: "c"
          }, {
            y: 0.27,
            i: "a",
            s: 669,
            z: 0,
            o: "34",
            f: "c"
          }, {
            y: 0.27,
            i: "e",
            s: 1,
            z: 0,
            o: "34",
            f: "c"
          }, {
            f: "c",
            y: 1.24,
            z: 0.15,
            i: "e",
            e: 1,
            s: 0,
            o: "31"
          }, {
            f: "c",
            y: 1.24,
            z: 0.15,
            i: "bL",
            e: 0,
            s: 5,
            o: "31"
          }, {
            f: "c",
            y: 2.06,
            z: 0.15,
            i: "bL",
            e: 0,
            s: 5,
            o: "29"
          }, {
            f: "c",
            y: 2.06,
            z: 0.15,
            i: "e",
            e: 1,
            s: 0,
            o: "29"
          }, {
            y: 2.09,
            i: "bL",
            s: 0,
            z: 0,
            o: "31",
            f: "c"
          }, {
            y: 2.09,
            i: "e",
            s: 1,
            z: 0,
            o: "31",
            f: "c"
          }, {
            y: 2.21,
            i: "e",
            s: 1,
            z: 0,
            o: "29",
            f: "c"
          }, {
            y: 2.21,
            i: "bL",
            s: 0,
            z: 0,
            o: "29",
            f: "c"
          }, {
            y: 4,
            i: "e",
            s: 1,
            z: 0,
            o: "32",
            f: "c"
          }],
          b: []
        }
      },
      bZ: 180,
      O: ["33", "32", "30", "34", "31", "29"],
      n: "Untitled Layout",
      "_": 0,
      v: {
        "29": {
          h: "21",
          p: "no-repeat",
          x: "visible",
          a: 510,
          q: "100% 100%",
          b: 293,
          dB: "img",
          j: "absolute",
          z: 3,
          k: "div",
          bS: 37,
          d: 56,
          c: 633,
          cQ: 1,
          bL: 5,
          e: 0,
          r: "inline",
          cR: 1
        },
        "30": {
          b: 157.5,
          z: 6,
          c: 351,
          BDbK: 1,
          d: 27,
          BDbG: 0,
          e: 0,
          cQ: 1,
          bS: 37,
          dB: "img",
          cR: 1,
          h: "27",
          BDbL: 0,
          Q: 0,
          tX: 0.5,
          BDbH: 0,
          j: "absolute",
          bG: 0,
          R: "#FFFFFF",
          k: "div",
          S: 0,
          T: 0,
          bH: 0,
          tY: 0.5,
          bI: 1,
          bJ: 1,
          BDbI: 1,
          p: "no-repeat",
          bK: 1,
          q: "100% 100%",
          r: "inline",
          bL: 5,
          BDbJ: 1,
          x: "visible",
          a: 553.5
        },
        "33": {
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
          h: "25",
          p: "no-repeat",
          x: "visible",
          a: 729,
          q: "100% 100%",
          b: 192,
          dB: "img",
          j: "absolute",
          z: 5,
          k: "div",
          bS: 37,
          d: 27,
          c: 416,
          cQ: 1,
          bL: 5,
          e: 0,
          r: "inline",
          cR: 1
        },
        "32": {
          h: "19",
          p: "no-repeat",
          x: "visible",
          a: 731,
          q: "100% 100%",
          b: 54,
          j: "absolute",
          bS: 37,
          z: 2,
          k: "div",
          dB: "img",
          d: 60,
          c: 138,
          r: "inline",
          e: 1
        },
        "31": {
          h: "23",
          p: "no-repeat",
          x: "visible",
          a: 421,
          q: "100% 100%",
          b: 234,
          dB: "img",
          j: "absolute",
          z: 4,
          k: "div",
          bS: 37,
          d: 45,
          c: 845,
          cQ: 1,
          bL: 5,
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

//# sourceMappingURL=cloudenablement2_hype_generated_script-min.js.map
