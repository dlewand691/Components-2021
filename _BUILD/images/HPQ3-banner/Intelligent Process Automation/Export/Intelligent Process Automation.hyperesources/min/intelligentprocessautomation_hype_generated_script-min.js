//	HYPE.documents["Intelligent Process Automation"]
(function () {
  (function k() {
    function l(a, b, d) {
      var c = !1;
      null == window[a] && (null == window[b] ? (window[b] = [], window[b].push(k), a = document.getElementsByTagName("head")[0], b = document.createElement("script"), c = h, false == !0 && (c = ""), b.type = "text/javascript", b.src = c + "/" + d, a.appendChild(b)) : window[b].push(k), c = !0);
      return c;
    }

    var h = "Intelligent%20Process%20Automation.hyperesources",
        c = "Intelligent Process Automation",
        e = "intelligentprocessautomation_hype_container";
    if (false == !1) try {
      for (var f = document.getElementsByTagName("script"), a = 0; a < f.length; a++) {
        var b = f[a].src,
            d = null != b ? b.indexOf("/intelligentprocessautomation_hype_generated_script.js") : -1;

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
        n: "intelligent-process-automation.jpg",
        g: "11",
        t: "@1x"
      },
      "-2": {
        n: "blank.gif"
      },
      "4": {
        p: 1,
        n: "at%20the%20Intersection.svg",
        g: "13",
        t: "image/svg+xml"
      },
      "0": {
        p: 1,
        n: "logo-intelligent-process-automation.svg",
        g: "7",
        t: "image/svg+xml"
      },
      "1": {
        p: 1,
        n: "Process%20Automation.svg",
        g: "5",
        t: "image/svg+xml"
      },
      "2": {
        p: 1,
        n: "Intelligent.svg",
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
            o: "15"
          }, {
            f: "c",
            y: 0,
            z: 0.15,
            i: "a",
            e: 529,
            s: 569,
            o: "15"
          }, {
            f: "c",
            y: 0.11,
            z: 0.15,
            i: "a",
            e: 431,
            s: 391,
            o: "17"
          }, {
            f: "c",
            y: 0.11,
            z: 0.15,
            i: "e",
            e: 1,
            s: 0,
            o: "17"
          }, {
            y: 0.15,
            i: "a",
            s: 529,
            z: 0,
            o: "15",
            f: "c"
          }, {
            y: 0.15,
            i: "e",
            s: 1,
            z: 0,
            o: "15",
            f: "c"
          }, {
            y: 0.26,
            i: "a",
            s: 431,
            z: 0,
            o: "17",
            f: "c"
          }, {
            y: 0.26,
            i: "e",
            s: 1,
            z: 0,
            o: "17",
            f: "c"
          }, {
            f: "c",
            y: 1.16,
            z: 0.15,
            i: "a",
            e: 459,
            s: 459,
            o: "19"
          }, {
            f: "c",
            y: 1.16,
            z: 0.15,
            i: "e",
            e: 1,
            s: 0,
            o: "19"
          }, {
            y: 2.01,
            i: "a",
            s: 459,
            z: 0,
            o: "19",
            f: "c"
          }, {
            y: 2.01,
            i: "e",
            s: 1,
            z: 0,
            o: "19",
            f: "c"
          }, {
            y: 4,
            i: "e",
            s: 1,
            z: 0,
            o: "16",
            f: "c"
          }],
          f: 30
        }
      },
      bZ: 180,
      O: ["18", "16", "15", "17", "19"],
      n: "Untitled Layout",
      "_": 0,
      v: {
        "17": {
          h: "5",
          p: "no-repeat",
          x: "visible",
          a: 391,
          q: "100% 100%",
          b: 216,
          j: "absolute",
          dB: "img",
          z: 3,
          k: "div",
          bS: 37,
          d: 56,
          c: 719,
          cQ: 1,
          e: 0,
          r: "inline",
          cR: 1
        },
        "16": {
          h: "7",
          p: "no-repeat",
          x: "visible",
          a: 701,
          q: "100% 100%",
          b: 54,
          j: "absolute",
          bS: 37,
          z: 5,
          k: "div",
          dB: "img",
          d: 60,
          c: 198,
          r: "inline",
          e: 1
        },
        "19": {
          h: "13",
          p: "no-repeat",
          x: "visible",
          a: 459,
          q: "100% 100%",
          b: 289,
          j: "absolute",
          bS: 37,
          z: 2,
          k: "div",
          dB: "img",
          d: 36,
          c: 711,
          r: "inline",
          e: 0
        },
        "15": {
          h: "9",
          p: "no-repeat",
          x: "visible",
          a: 569,
          q: "100% 100%",
          b: 166,
          j: "absolute",
          dB: "img",
          z: 4,
          k: "div",
          bS: 37,
          d: 54,
          c: 270,
          cQ: 1,
          e: 0,
          r: "inline",
          cR: 1
        },
        "18": {
          h: "11",
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
        }
      }
    }], {}, g, {}, null, false, false, -1, true, true, false, true);
    f[c] = a.API;
    document.getElementById(e).setAttribute("HYP_dn", c);
    a.z_o(this.body);
  })();
})();

//# sourceMappingURL=intelligentprocessautomation_hype_generated_script-min.js.map
