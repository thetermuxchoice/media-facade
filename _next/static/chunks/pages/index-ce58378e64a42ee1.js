let counter=0;
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(5705);
        },
      ]);
    },
    5705: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          UIContext: function () {
            return He;
          },
          default: function () {
            return We;
          },
        });
      var r = t(4051),
        o = t.n(r),
        i = t(5893),
        s = t(7294),
        a = t(9008),
        u = t.n(a),
        c = t(6135),
        l = t(9613),
        d = t(5501),
        p = t(3432),
        f = t(9709),
        m = t(254),
        x = t(6599),
        h = t(7854),
        g = t(4977),
        j = t(2001),
        v = t(9477),
        y = t(9920),
        _ = t(5449),
        b = t(1472),
        w = t(3529),
        S = t.n(w);
      function C(e) {
        var n = (0, s.useRef)(null),
          t = (0, s.useContext)(e.context),
          r = (0, b.useSpring)({ opacity: t.pointIcon.display ? "1" : "0" });
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)(b.animated.div, {
            className: S().container,
            ref: n,
            style: r,
            onPointerEnter: function () {},
            onPointerLeave: function () {},
            children: [
              (0, i.jsx)("div", {
                className: S().wrapper,
                children: (0, i.jsx)("div", { className: S().dot }),
              }),
              (0, i.jsx)("div", {
                className: "".concat(S().circle, " ").concat(S().c1),
              }),
              (0, i.jsx)("div", {
                className: "".concat(S().circle, " ").concat(S().c2),
              }),
              (0, i.jsx)("div", {
                className: "".concat(S().circle, " ").concat(S().c3),
              }),
            ],
          }),
        });
      }
      var N = t(3162);
      function E(e, n, t, r, o, i, s) {
        try {
          var a = e[i](s),
            u = a.value;
        } catch (c) {
          return void t(c);
        }
        a.done ? n(u) : Promise.resolve(u).then(r, o);
      }
      function O(e) {
        return function () {
          var n = this,
            t = arguments;
          return new Promise(function (r, o) {
            var i = e.apply(n, t);
            function s(e) {
              E(i, r, o, s, a, "next", e);
            }
            function a(e) {
              E(i, r, o, s, a, "throw", e);
            }
            s(void 0);
          });
        };
      }
      function M(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function D() {
        return (
          (D =
            Object.assign ||
            function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              }
              return e;
            }),
          D.apply(this, arguments)
        );
      }
      function q(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            r.forEach(function (n) {
              M(e, n, t[n]);
            });
        }
        return e;
      }
      var P = !1,
        I = !1,
        A = !1,
        R = 0,
        K = 0,
        T = new v.Vector3(),
        k = new v.Quaternion();
      function L(e) {
        var n = function () {
            Ke.transition.isVideoLoaded ||
              (console.log(Ee),
              Ee.setAttribute("src", "/video.mp4"),
              Ee.play(),
              (Ke.transition.isVideoLoaded = !0));
          },
          t = function () {
            T.set(Te.position.x, Te.position.y, Te.position.z),
              k.set(
                Te.quaternion.x,
                Te.quaternion.y,
                Te.quaternion.z,
                Te.quaternion.w
              );
          },
          r = function (e) {
            0 == e
              ? I &&
                (A ||
                  ((A = !0),
                  M.isAnimating && M.stop(),
                  ue
                    ? (ce(!1), (Ke.transition.isZoom = !1))
                    : (ce(!0), (Ke.transition.isZoom = !0)),
                  M.start({
                    from: 0,
                    to: 1,
                    config: { duration: Pe, easing: Ie },      
                    onStart: function () {
                      t();
                    },
                    onChange: function (e) {
                      u(0, e);
                    },
                    onRest: function () {
                      ue || (ce(!1), (Ke.transition.isZoom = !1)), (A = !1);
                    },
                  })))
              : (M.isAnimating && M.stop(),
                I &&
                  !M.isAnimating &&
                  (ce(!0),
                  a(e),
                  (Ke.transition.isZoom = !0),
                  M.start({
                    from: 0,
                    to: 1,
                    config: { duration: Pe, easing: Ie },
                    onStart: function () {
                      
                      t();
                    },
                    onChange: function (n) {
                      u(e, n);
                    },
                    onRest: function () {
                      Ke.transition.isZoom && (Ke.transition.isZoomEnd = !0);
                    },
                  })));
          },
          a = function (e) {
            0 == e
              ? (me(V), he(ye))
              : 1 == e
              ? (me(F), he($))
              : 2 == e
              ? (me(H), he(ee))
              : 3 == e
              ? (me(W), he(ne))
              : 4 == e
              ? (me(Z), he(te))
              : 5 == e && (me(z), he(re));
          },
          u = function (e, n) {
            0 == e
              ? (Te.position.lerpVectors(T, V, n),
                Te.quaternion.slerpQuaternions(k, ye, n))
              : 1 == e
              ? (Te.position.lerpVectors(T, F, n),
                Te.quaternion.slerpQuaternions(k, $, n),
                ve(4))
              : 2 == e
              ? (Te.position.lerpVectors(T, H, n),
                Te.quaternion.slerpQuaternions(k, ee, n),
                ve(0.5))
              : 3 == e
              ? (Te.position.lerpVectors(T, W, n),
                Te.quaternion.slerpQuaternions(k, ne, n),
                ve(0.5))
              : 4 == e
              ? (Te.position.lerpVectors(T, Z, n),
                Te.quaternion.slerpQuaternions(k, te, n),
                ve(15))
              : 5 == e &&
                (Te.position.lerpVectors(T, z, n),
                Te.quaternion.slerpQuaternions(k, re, n),
                ve(6));
          },
          c = function (e) {
            0 == e || 1 == e
              ? qe(e)
              : 2 == e && (qe(e), Ke.transition.isVideoLoaded && Ee.play());
          },
          d = function () {
            P ||
              ((P = !0),
              M.start({
                from: 80,
                to: 43.78,
                config: { duration: 800, easing: y.easings.easeInOutQuart },
                onChange: function (e) {
                  (Te.fov = e), Te.updateProjectionMatrix();
                },
                onRest: function () {
                  (I = !0), Ze(!0);
                },
              }));
          },
          b = function () {
            I &&
              (A ||
                ((A = !0),
                M.isAnimating && M.stop(),
                (Ke.transition.isZoomEnd = !1),
                ue
                  ? (ce(!1), (Ke.transition.isZoom = !1))
                  : (ce(!0), (Ke.transition.isZoom = !0)),
                M.start({
                  from: 0,
                  to: 1,
                  config: { duration: Pe, easing: Ie },
                  onStart: function () {
                  
                    t();
                  },
                  onChange: function (e) {
                    u(0, e);
                  },
                  onRest: function () {
                    ue || (ce(!1), (Ke.transition.isZoom = !1)), (A = !1);
                  },
                }),
                Ke.pointIcon.display || (Ke.pointIcon.display = !0)));
          },
          w = function () {
            ze.current.isPlaying ? ze.current.stop() : ze.current.play();
          },
          S = function (e) {
            return new Promise(function (n) {
              return setTimeout(n, e);
            });
          },
          E = D({}, e),
          M = (0, s.useMemo)(function () {
            return new y.SpringValue();
          }, []),
          L = (0, s.useRef)(null),
          B = (0, s.useRef)(),
          V = (0, s.useMemo)(function () {
            return new v.Vector3(
              24.682166724477618,
              151.08654013835573,
              159.87200417587854
            );
          }, []),
          F =
            ((0, s.useMemo)(function () {
              return new v.Vector3(26.02, 151.16, 209.35);
            }, []),
            (0, s.useMemo)(function () {
              return new v.Vector3(12.23, 21.71, 100.37);
            }, [])),
          H = (0, s.useMemo)(function () {
            return new v.Vector3(14.19, 19.8, 42.97);
          }, []),
          W = (0, s.useMemo)(function () {
            return new v.Vector3(14.3, 19.75, 61.15);
          }, []),
          Z = (0, s.useMemo)(function () {
            return new v.Vector3(-66.89, 127.05, 83.93);
          }, []),
          z = (0, s.useMemo)(function () {
            return new v.Vector3(47.9, 71.34, 112.43);
          }, []),
          U = (0, s.useMemo)(function () {
            return new v.Euler(-0.46, 0.14, 0.07);
          }, []),
          Q = (0, s.useMemo)(function () {
            return new v.Euler(0.26, 0.09, -0.03);
          }, []),
          G = (0, s.useMemo)(function () {
            return new v.Euler(0.28, 0.55, -0.15);
          }, []),
          Y = (0, s.useMemo)(function () {
            return new v.Euler(0.25, -0.76, 0.18);
          }, []),
          X = (0, s.useMemo)(function () {
            return new v.Euler(-0.81, -0.44, -0.42);
          }, []),
          J = (0, s.useMemo)(function () {
            return new v.Euler(-0.25, 0.41, 0.1);
          }, []),
          $ =
            ((0, s.useMemo)(function () {
              return new v.Quaternion().setFromEuler(U);
            }, []),
            (0, s.useMemo)(function () {
              return new v.Quaternion().setFromEuler(Q);
            }, [])),
          ee = (0, s.useMemo)(function () {
            return new v.Quaternion().setFromEuler(G);
          }, []),
          ne = (0, s.useMemo)(function () {
            return new v.Quaternion().setFromEuler(Y);
          }, []),
          te = (0, s.useMemo)(function () {
            return new v.Quaternion().setFromEuler(X);
          }, []),
          re = (0, s.useMemo)(function () {
            return new v.Quaternion().setFromEuler(J);
          }, []),
          oe = (0, f.L)("/models.glb"),
          ie = oe.nodes,
          se = (oe.materials, (0, l.z)(j.d, "/norm_asphalt.webp"));
        (se.wrapS = v.RepeatWrapping), (se.wrapT = v.RepeatWrapping);
        var ae = (0, s.useState)(!1),
          ue = ae[0],
          ce = ae[1],
          le = (0, s.useState)({ x: 1, y: 1 }),
          de = le[0],
          pe = (le[1], (0, s.useState)(V)),
          fe = pe[0],
          me = pe[1],
          xe = (0, s.useState)(ye),
          he = (xe[0], xe[1]),
          ge = (0, s.useState)(1),
          je = ge[0],
          ve = ge[1],
          ye = (0, s.useMemo)(function () {
            return new v.Quaternion(
              -0.3052573070623509,
              0.05882724215032874,
              0.018897337906766037,
              0.9502632386271005
            );
          }, []),
          _e = (0, s.useMemo)(function () {
            return new v.Vector3(F.x - 20, F.y + 50, F.z - 90);
          }, []),
          be = (0, s.useMemo)(function () {
            return new v.Vector3(H.x - 30, H.y + 35, H.z - 10);
          }, []),
          we = (0, s.useMemo)(function () {
            return new v.Vector3(W.x + 10, W.y + 25, W.z - 40);
          }, []),
          Se = (0, s.useMemo)(function () {
            return new v.Vector3(Z.x, Z.y - 50, Z.z - 30);
          }, []),
          Ce = (0, s.useMemo)(function () {
            return new v.Vector3(z.x - 10, z.y, z.z - 30);
          }, []),
          Ne = (0, s.useState)(function () {
            return Object.assign(document.createElement("video"), {
              id: "video",
              crossOrigin: "anonymous",
              display: "none",
              playsInline: !0,
              loop: !0,
            });
          }),
          Ee = Ne[0],
          Oe =
            (Ne[1],
            (0, s.useMemo)(
              function () {
                return new v.VideoTexture(Ee);
              },
              [Ee]
            ));
        (Oe.wrapS = v.RepeatWrapping),
          (Oe.wrapT = v.RepeatWrapping),
          (Oe.encoding = v.sRGBEncoding);
        var Me = (0, s.useState)(0),
          De = Me[0],
          qe = Me[1],
          Pe = 1200,
          Ie = y.easings.easeOutQuint,
          Ae =
            ((0, s.useMemo)(
              function () {
                return {
                  Crowd1: ie.crowd1,
                  Crowd2: ie.crowd2,
                  Crowd3: ie.crowd3,
                  Crowd4: ie.crowd4,
                  Crowd5: ie.crowd5,
                };
              },
              [ie]
            ),
            (0, s.useMemo)(function () {
              return new v.MeshBasicMaterial();
            }, [])),
          Re = (0, s.useMemo)(function () {
            return (
              (Ae.userData.uTime = { value: 0 }),
              (Ae.userData.uTime2 = { value: 0 }),
              (Ae.userData.patternIdx = { value: De }),
              (Ae.userData.pattern1hue = { value: 1 }),
              (Ae.userData.pattern1speed = { value: 1 }),
              (Ae.userData.pattern1brightness = { value: 1 }),
              (Ae.userData.pattern2length = { value: 0 }),
              (Ae.userData.pattern2brightness = { value: 1 }),
              (Ae.userData.pattern3hue = { value: 0 }),
              (Ae.userData.pattern3brightness = { value: 2.2 }),
              (Ae.userData.pattern3gamma = { value: 1 }),
              (Ae.onBeforeCompile = function (e) {
                (e.uniforms.uTime = Ae.userData.uTime),
                  (e.uniforms.uTime2 = Ae.userData.uTime2),
                  (e.uniforms.patternIdx = Ae.userData.patternIdx),
                  (e.uniforms.resX = { value: de.x }),
                  (e.uniforms.resY = { value: de.y }),
                  (e.uniforms.texVideo = { value: Oe }),
                  (e.uniforms.pattern1hue = Ae.userData.pattern1hue),
                  (e.uniforms.pattern1speed = Ae.userData.pattern1speed),
                  (e.uniforms.pattern1brightness =
                    Ae.userData.pattern1brightness),
                  (e.uniforms.pattern2length = Ae.userData.pattern2length),
                  (e.uniforms.pattern2brightness =
                    Ae.userData.pattern2brightness),
                  (e.uniforms.pattern3hue = Ae.userData.pattern3hue),
                  (e.uniforms.pattern3gamma = Ae.userData.pattern3gamma),
                  (e.uniforms.pattern3brightness =
                    Ae.userData.pattern3brightness),
                  (e.vertexShader =
                    ["\n          #define USE_UV;\n        "].join("\n") +
                    e.vertexShader),
                  (e.fragmentShader =
                    [
                      '\n              varying vec2 vUv;\n              uniform float uTime;\n              uniform float uTime2;\n\n              uniform float resX;\n              uniform float resY;\n            \n              uniform sampler2D texVideo;\n              uniform float patternIdx;\n\n              uniform float pattern1hue;\n              uniform float pattern1speed;\n              uniform float pattern1brightness;\n\n              uniform float pattern2length;\n              uniform float pattern2brightness;\n\n              uniform float pattern3hue;\n              uniform float pattern3gamma;\n              uniform float pattern3brightness;\n\n              //////////////////////////////////////////////////////////////\n\n              // https://www.shadertoy.com/view/ll2GD3\n              // The MIT License\n              // https://www.youtube.com/c/InigoQuilez\n              // https://iquilezles.org/\n              // Copyright \xa9 2015 Inigo Quilez\n              // Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n              vec3 pal( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d )\n              {\n                  return a + b*cos( 6.28318*(c*t+d) );\n              }\n\n              //////////////////////////////////////////////////////////////\n              // https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3180018#gistcomment-3180018\n              // viruseg\n\n              vec3 Hue(vec3 color, float hue) {\n                const vec3 k = vec3(0.57735, 0.57735, 0.57735);\n                float cosAngle = cos(hue);\n                return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));\n              }\n\n              //////////////////////////////////////////////////////////////\n                            \n              vec3 brightnessContrast(vec3 value, float brightness, float contrast)\n              {\n                  return (value - 0.5) * contrast + 0.5 + brightness;\n              }\n\n              vec3 Gamma(vec3 value, float param)\n              {\n                  return vec3(pow(abs(value.r), param),pow(abs(value.g), param),pow(abs(value.b), param));\n              }\n            \n              float random (in float x) {\n                return fract(sin(x)*1e4);\n              }\n            \n              float random (in vec2 st) {\n                  return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123);\n              }\n            \n              float pattern(vec2 st, vec2 v, float t) {\n                  vec2 p = floor(st+v);\n                  return step(t, random(100.+p*.000001));\n\n              }\n\n              mat2 rotate2d(float _angle){\n                return mat2(cos(_angle),-sin(_angle),\n                            sin(_angle),cos(_angle));\n              }\n\n              mat2 rotate(vec2 p, float theta){\n                return mat2(cos(theta), -sin(theta), sin(theta), cos(theta));\n              }\n\n            ',
                    ].join("\n") + e.fragmentShader),
                  (e.fragmentShader = e.fragmentShader.replace(
                    "#include <output_fragment>",
                    [
                      "                \n          //////////////////////////////////////////////////////////////\n          // https://github.com/redshift3d/RedshiftOSLShaders/blob/main/NoiseColor.osl\n          // RedshiftOSLShaders/NoiseColor.osl\n          // OSL Shader by Tom\xe1s Atria based on http://glslsandbox.com/ examples\n          // Modified by Saul Espinosa 7/15/2021 for Redshift 3d\n          //\n          // Modified from OSL to GLSL\n\n          vec2 st = vec2(vUv.x*resX * 0.4, vUv.y*resY*0.4);\n\n          float Pi=10.;\n          int complexity=30;\n          float fluid_speed=600.;\n          float color_intensity = 0.5;\n          vec3 p=vec3(st.x,st.y,0.);\n          p*=2.;\n          \n          for(int i=1;i<13;i++){\n              vec3 newp=p+uTime* pattern1speed * .02;\n              \n              newp.x+=.6/float(i)*sin(float(i)*p.y+uTime/fluid_speed+20.3*float(i))+.5;\n              newp.y+=.6/float(i)*sin(float(i)*p.x+uTime/fluid_speed+.3*float(i+10))-.5;\n\n              p=newp;\n          }\n          vec3 noiseColor = vec3(color_intensity*sin(5.*p.x)+color_intensity,color_intensity*sin(3.*p.y)+color_intensity,color_intensity*sin(p.x+p.y)+color_intensity);\n          \n          noiseColor = Hue(noiseColor, pattern1hue);\n\n          noiseColor = brightnessContrast(noiseColor, 0.1,.3);\n          noiseColor= Gamma(noiseColor, 4.);\n          noiseColor *= pattern1brightness;\n\n          ////////////////////////////////////////////////////////////////////////\n\n          vec2 _st = vUv;   \n          _st -= vec2(0.5);\n          _st = rotate2d(-0.5) * _st;\n          _st += vec2(0.5);\n          float nums = 56.0;\n          vec2 grid = vec2(100.0, nums);\n          _st *= grid;\n      \n          vec2 ipos = floor(_st);  // integer\n          vec2 fpos = fract(_st);  // fraction\n          float speed = 1.0;\n          vec2 vel = vec2((uTime2 + 100.)  * speed * max(grid.x,grid.y)); // time\n          float dir = -1.;          \n          float a = random(1.0+ipos.y);\n          vel *= vec2(dir, 0.) * random(1.0+ipos.y); // direction        \n          vec3 col = vec3(0.);\n          float line_length = 1.0-0.6;\n          vec2 _p = floor(_st+vel);\n          float lines = step(line_length, random(100.+_p.x*.000001));\n          float width_threshold = 0.9;\n          float width = 0.05 + random(ipos.y) * width_threshold;\n          lines *= step(width, fpos.y);\n          \n          vec3 l = vec3(lines) * pal(_st.y*0.3 + uTime2 * 0.05, vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5), vec3(1.0, 1.0,\t1.0), vec3(\t0.00, 0.10, 0.20));\n\n          l = Hue(l, pattern2length);\n          vec3 final = l * pattern2brightness; \n\n          ////////////////////////////////////////////////////////////////////////\n\n          vec3 vid = texture2D(texVideo,vec2(vUv.x, 1.-vUv.y)).rgb;\n          vid = Gamma(vid, pattern3gamma);\n          vid = Hue(vid, pattern3hue);\n          vid = vid * pattern3brightness;\n\n          if(patternIdx == 0.){\n            outgoingLight = noiseColor;\n          }else if(patternIdx == 1.0){\n            outgoingLight = final;\n          }else{\n            outgoingLight = vid;\n          }\n\n          #ifdef OPAQUE\n          diffuseColor.a = 1.0;\n          #endif\n          // https://github.com/mrdoob/three.js/pull/22425\n          #ifdef USE_TRANSMISSION\n          diffuseColor.a *= transmissionAlpha + 0.1;\n          #endif\n          gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n          ",
                    ].join("\n")
                  )),
                  (Ae.userData.shader = e);
              }),
              Ae
            );
          }, []),
          Ke = (0, s.useContext)(He);
        (0, l.x)(function (e, n) {
          (Re.userData.uTime.value = R),
            (Re.userData.uTime2.value = K),
            (Re.userData.patternIdx.value = De),
            (Re.userData.texVideo = Oe),
            (Re.userData.pattern1hue.value =
              3.14159265359 * Ke.sliderA.val0 * 2),
            (Re.userData.pattern1speed.value = 1),
            (Re.userData.pattern1brightness.value = 1.5 * Ke.sliderA.val2),
            (Re.userData.pattern2length.value = Ke.sliderB.val0),
            (Re.userData.pattern2brightness.value = Ke.sliderB.val2),
            (Re.userData.pattern3hue.value =
              3.14159265359 * Ke.sliderC.val0 * 2),
            (Re.userData.pattern3gamma.value = Ke.sliderC.val1),
            (Re.userData.pattern3brightness.value = Ke.sliderC.val2),
            (R += 0.02 * Ke.sliderA.val1),
            (K += 0.03 * Ke.sliderB.val1),
            Ke.transition.isZoomEnd &&
              !A &&
              ((e.camera.position.x = v.MathUtils.lerp(
                e.camera.position.x,
                fe.x - e.mouse.x * je,
                0.02
              )),
              (e.camera.position.y = v.MathUtils.lerp(
                e.camera.position.y,
                fe.y + (e.mouse.y * je) / 2,
                0.02
              )));
        });
        var Te = (0, l.w)(function (e) {
            return e.camera;
          }),
          ke = 80,
          Le = new v.Vector3(-80, -80, -80),
          Be = new v.Vector3(ke, ke, ke),
          Ve = new v.Vector3(),
          Fe = (0, s.useState)(!1),
          We = Fe[0],
          Ze = Fe[1],
          ze = (0, s.useRef)(),
          Ue = (0, s.useState)(function () {
            return new v.AudioListener();
          })[0],
          Qe = (0, l.z)(v.AudioLoader, "/din.webm"),
          Ge = (0, s.useMemo)(function () {
            return (0,
            i.jsx)(m.Q, { blur: [300, 100], resolution: 1024, mixBlur: 0.8, mixStrength: 10, roughness: 1, depthScale: 1.2, minDepthThreshold: 0.4, maxDepthThreshold: 1.4, color: "#111111", mirror: 1, reflectorOffset: 0, distortionMap: se, distortion: 0.05, metalness: 0, normalMap: se, normalScale: new v.Vector2(5, 5), depthToBlurRatioBias: 1 });
          }, []);
        (0, s.useEffect)(function () {
          return (
            ze.current.setBuffer(Qe),
            ze.current.setRefDistance(10),
            ze.current.setLoop(!0),
            Te.add(Ue),
            function () {
              Te.remove(Ue);
            }
          );
        }, []),
          (0, s.useEffect)(function () {
            (E.changePattern.current = c),
              (E.cameraDefaultAngle.current = b),
              (E.cameraStart.current = d),
              (E.toggleAudio.current = w),
              (E.captureImage.current = $e),
              (E.toggleVideo.current = n),
              (E.zoomRef.current = ue);
          }, []);
        (0, _.useSpring)({
          colBuildings: E.isNight
            ? [0, 0, 0]
            : [0.024157632443547246, 0.030713443727452196, 0.04518620437910499],
        }).colBuildings;
        var Ye = (0, _.useSpring)({
            colCrowd: E.isNight
              ? [0, 0, 0]
              : [
                  0.024157632443547246, 0.030713443727452196,
                  0.04518620437910499,
                ],
          }).colCrowd,
          Xe = (0, _.useSpring)({
            colBg: E.isNight
              ? [0, 0, 0]
              : [0.6038273388475408, 0.6038273388475408, 0.6038273388475408],
          }).colBg,
          Je = (0, l.w)().gl;
        function $e() {
          return en.apply(this, arguments);
        }
        function en() {
          return (en = O(
            o().mark(function e() {
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), S(1e3);
                    case 2:
                      (0, N.saveAs)(
                        Je.domElement.toDataURL("image/png"),
                        "media_facade_simulator.png"
                      );
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        (0, s.useMemo)(
          function () {
            var e = new v.MeshStandardMaterial();
            return (
              (e.color = Ye),
              (e.flatShading = !0),
              (e.roughness = 0.6),
              (e.metalness = 0.4),
              (e.instances = !0),
              e
            );
          },
          [Ye]
        );
        var nn = (0, s.useMemo)(function () {
          return {
            Crowd1: ie.Crowd1,
            Crowd2: ie.Crowd2,
            Crowd3: ie.Crowd3,
            Crowd4: ie.Crowd4,
            Crowd5: ie.Crowd5,
          };
        }, []);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(
              "group",
              q({ ref: B }, E, {
                dispose: null,
                children: [
                  (0, i.jsxs)(_.animated.mesh, {
                    geometry: ie.buildings.geometry,
                    children: [
                      (0, i.jsx)(_.animated.meshStandardMaterial, {
                        color: Ye,
                        roughness: 0.8,
                        metalness: 0.04,
                      }),
                      (0, i.jsx)(x.w, { color: E.isNight ? 5592405 : 8947848 }),
                    ],
                  }),
                  (0, i.jsx)("mesh", {
                    rotation: [-Math.PI / 2, 0, 0],
                    children: (0, i.jsx)("mesh", {
                      geometry: new v.PlaneBufferGeometry(400, 400, 1, 1),
                      position: [0, 0, 19],
                      children: Ge,
                    }),
                  }),
                  (0, i.jsxs)("group", {
                    position: [0, -0.05, 0],
                    children: [
                      (0, i.jsxs)(p.EJ, {
                        geometry: nn.Crowd1.geometry,
                        children: [
                          (0, i.jsx)(_.animated.meshStandardMaterial, {
                            color: Ye,
                            flatShading: !0,
                            roughness: 0.6,
                            metalness: 0.4,
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [-4.75434, 19, 29.984],
                            quaternion: [-0, -0.104405, -0, -0.994535],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [10.127, 19, 34.1011],
                            quaternion: [-0, -0.597376, -0, 0.801961],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [21.5267, 19, 60.5725],
                            quaternion: [0, 0.957208, 0, 0.2894],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [3.89804, 19, 58.4504],
                            quaternion: [-0, -0.935537, -0, -0.353228],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [-0.831899, 19, 50.723],
                            quaternion: [-0, -0.913484, -0, 0.406875],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [5.52026, 19, 87.7874],
                            quaternion: [-0, -0.876623, -0, 0.481177],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [35.5449, 19, 62.6199],
                            quaternion: [0, 0.898185, 0, -0.439617],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [8.14285, 19, 45.7369],
                            quaternion: [-0, -0.978779, -0, -0.204916],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [3.03313, 19, 66.7614],
                            quaternion: [0, 0.981939, 0, 0.189196],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [2.33441, 19, 76.8021],
                            quaternion: [-0, -0.824651, -0, -0.565642],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [3.50594, 19, 51.5016],
                            quaternion: [-0, -0.707487, -0, -0.706726],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [17.6071, 19, 62.3864],
                            quaternion: [0, 0.9781, 0, -0.208136],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [19.6696, 19, 36.0387],
                            quaternion: [0, 0.670595, 0, 0.741823],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [25.5291, 19, 59.6877],
                            quaternion: [-0, -0.359656, -0, 0.933085],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [27.258, 19, 56.9492],
                            quaternion: [0, 0.0863978, 0, -0.996261],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [29.9968, 19, 49.655],
                            quaternion: [0, 0.116816, 0, 0.993154],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [5.10585, 19, 64.138],
                            quaternion: [-0, -0.294776, -0, -0.955566],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [11.6389, 19, 78.9759],
                            quaternion: [0, 0.0698523, 0, -0.997557],
                          }),
                        ],
                      }),
                      (0, i.jsxs)(p.EJ, {
                        geometry: nn.Crowd2.geometry,
                        children: [
                          (0, i.jsx)(_.animated.meshStandardMaterial, {
                            color: Ye,
                            flatShading: !0,
                            roughness: 0.6,
                            metalness: 0.4,
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [37.0052, 19, 67.6078],
                            quaternion: [0, 0.393735, 0, 0.919224],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [16.5125, 19, 40.6771],
                            quaternion: [-0, -0.914699, -0, -0.404135],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [9.7043, 19, 41.1198],
                            quaternion: [0, 0.603275, 0, 0.797533],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [5.08684, 19, 36.2031],
                            quaternion: [0, 0.903858, 0, 0.427833],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [14.5406, 19, 49.3291],
                            quaternion: [-0, -0.0357514, -0, -0.999361],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [40.6174, 19, 62.7386],
                            quaternion: [0, 0.339457, 0, -0.940621],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [29.1501, 19, 41.572],
                            quaternion: [0, 0.990027, 0, 0.140879],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [41.8765, 19, 55.8248],
                            quaternion: [-0, -0.900852, -0, -0.434126],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [18.6096, 19, 72.7575],
                            quaternion: [0, 0.00597714, 0, -0.999982],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [7.47506, 19, 53.7551],
                            quaternion: [0, 0.33962, 0, 0.940563],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [8.70909, 19, 36.8506],
                            quaternion: [0, 0.575906, 0, 0.817516],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [1.9689, 19, 55.5086],
                            quaternion: [-0, -0.610012, -0, -0.792392],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [14.9739, 19, 53.9771],
                            quaternion: [0, 0.978977, 0, -0.203972],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [10.7786, 19, 70.2228],
                            quaternion: [0, 0.727132, 0, 0.686497],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [12.8731, 19, 61.4616],
                            quaternion: [0, 0.544689, 0, 0.838638],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [18.8156, 19, 42.8182],
                            quaternion: [-0, -0.993084, -0, -0.117408],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [40.6279, 19, 59.2512],
                            quaternion: [0, 0.995848, 0, 0.0910352],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [22.0483, 19, 70.0468],
                            quaternion: [0, 0.998907, 0, -0.0467483],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [38.594, 19, 54.8354],
                            quaternion: [-0, -0.926358, -0, -0.376644],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [5.54789, 19, 28.8868],
                            quaternion: [0, 0.39977, 0, -0.916615],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [23.2799, 19, 33.0751],
                            quaternion: [-0, -0.411032, -0, -0.911621],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [7.38177, 19, 58.2902],
                            quaternion: [0, 0.988828, 0, 0.149061],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [-0.596424, 19, 82.8181],
                            quaternion: [-0, -0.69011, -0, -0.723704],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [11.6084, 19, 38.4775],
                            quaternion: [-0, -0.999227, -0, -0.039321],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [14.9577, 19, 79.677],
                            quaternion: [0, 0.96263, 0, 0.270819],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [16.7419, 19, 34.2564],
                            quaternion: [-0, -0.695303, -0, 0.718716],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [-3.14729, 19, 33.7328],
                            quaternion: [0, 0.659462, 0, 0.751738],
                          }),
                        ],
                      }),
                      (0, i.jsxs)(p.EJ, {
                        geometry: nn.Crowd3.geometry,
                        children: [
                          (0, i.jsx)(_.animated.meshStandardMaterial, {
                            color: Ye,
                            flatShading: !0,
                            roughness: 0.6,
                            metalness: 0.4,
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [23.162, 19, 65.0741],
                            quaternion: [-0, -0.292176, -0, 0.956365],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [26.1501, 19, 49.5982],
                            quaternion: [0, 0.502535, 0, 0.864557],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [10.8879, 19, 58.819],
                            quaternion: [-0, -0.947049, -0, -0.321088],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [29.5803, 19, 54.566],
                            quaternion: [0, 0.409864, 0, -0.912147],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [-4.45544, 19, 76.1296],
                            quaternion: [0, 0.990787, 0, -0.135431],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [12.8175, 19, 44.8402],
                            quaternion: [0, 0.997429, 0, -0.0716545],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [35.0144, 19, 44.5253],
                            quaternion: [0, 0.00508921, 0, 0.999987],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [5.04753, 19, 52.6488],
                            quaternion: [0, 0.02576, 0, -0.999668],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [2.87938, 19, 60.4537],
                            quaternion: [-0, -0.806793, -0, -0.590834],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [13.5282, 19, 41.0187],
                            quaternion: [0, 0.638276, 0, -0.769808],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [2.92769, 19, 80.2981],
                            quaternion: [-0, -0.696888, -0, 0.71718],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [-8.74806, 19, 51.056],
                            quaternion: [-0, -0.923283, -0, -0.384121],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [18.1947, 19, 53.6622],
                            quaternion: [-0, -0.895314, -0, 0.445435],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [30.8602, 19, 59.4509],
                            quaternion: [0, 0.99769, 0, -0.0679377],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [6.41401, 19, 33.1875],
                            quaternion: [-0, -0.922849, -0, -0.385162],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [13.9679, 19, 76.3274],
                            quaternion: [-0, -0.934055, -0, -0.35713],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [-0.759772, 19, 57.1371],
                            quaternion: [-0, -0.611694, -0, 0.791094],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [32.5161, 19, 52.8024],
                            quaternion: [-0, -0.968348, -0, -0.249603],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [18.4501, 19, 79.9491],
                            quaternion: [0, 0.919213, 0, 0.393761],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [18.0465, 19, 67.1537],
                            quaternion: [0, 0.178489, 0, 0.983942],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [-7.79891, 19, 47.3747],
                            quaternion: [0, 0.923951, 0, -0.38251],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [46.8015, 19, 54.6086],
                            quaternion: [0, 0.281382, 0, -0.959596],
                          }),
                        ],
                      }),
                      (0, i.jsxs)(p.EJ, {
                        geometry: nn.Crowd4.geometry,
                        children: [
                          (0, i.jsx)(_.animated.meshStandardMaterial, {
                            color: Ye,
                            flatShading: !0,
                            roughness: 0.6,
                            metalness: 0.4,
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [21.4568, 19, 45.9242],
                            quaternion: [0, 0.879959, 0, -0.47505],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [0.0570613, 19, 43.4605],
                            quaternion: [0, 0.185413, 0, -0.982661],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [15.9748, 19, 58.5133],
                            quaternion: [0, 0.335524, 0, 0.942032],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [1.40381, 19, 70.2086],
                            quaternion: [-0, -0.975646, -0, -0.21935],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [35.2564, 19, 51.4906],
                            quaternion: [0, 0.409971, 0, -0.912098],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [0.365753, 19, 62.3572],
                            quaternion: [-0, -0.992446, -0, -0.122683],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [8.89854, 19, 31.0042],
                            quaternion: [-0, -0.777467, -0, 0.628924],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [3.017, 19, 44.6557],
                            quaternion: [-0, -0.245809, -0, 0.969318],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [13.5699, 19, 57.6211],
                            quaternion: [0, 0.27857, 0, 0.960416],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [7.65337, 19, 74.669],
                            quaternion: [0, 0.89043, 0, 0.45512],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [-7.34417, 19, 33.5724],
                            quaternion: [0, 0.834791, 0, -0.550567],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [23.1718, 19, 57.5747],
                            quaternion: [-0, -0.990007, -0, 0.141021],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [34.9948, 19, 55.0198],
                            quaternion: [0, 0.816346, 0, -0.577563],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [2.86222, 19, 32.8326],
                            quaternion: [0, 0.318321, 0, -0.947983],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [11.2528, 19, 47.7201],
                            quaternion: [0, 0.965097, 0, -0.261891],
                          }),
                        ],
                      }),
                      (0, i.jsxs)(p.EJ, {
                        geometry: nn.Crowd5.geometry,
                        children: [
                          (0, i.jsx)(_.animated.meshStandardMaterial, {
                            color: Ye,
                            flatShading: !0,
                            roughness: 0.6,
                            metalness: 0.4,
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [-4.75434, 19, 29.984],
                            quaternion: [-0, -0.104405, -0, -0.994535],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [10.127, 19, 34.1011],
                            quaternion: [-0, -0.597376, -0, 0.801961],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [21.5267, 19, 60.5725],
                            quaternion: [0, 0.957208, 0, 0.2894],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [3.89804, 19, 58.4504],
                            quaternion: [-0, -0.935537, -0, -0.353228],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [-0.831899, 19, 50.723],
                            quaternion: [-0, -0.913484, -0, 0.406875],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [5.52026, 19, 87.7874],
                            quaternion: [-0, -0.876623, -0, 0.481177],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [35.5449, 19, 62.6199],
                            quaternion: [0, 0.898185, 0, -0.439617],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [8.14285, 19, 45.7369],
                            quaternion: [-0, -0.978779, -0, -0.204916],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [3.03313, 19, 66.7614],
                            quaternion: [0, 0.981939, 0, 0.189196],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [2.33441, 19, 76.8021],
                            quaternion: [-0, -0.824651, -0, -0.565642],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [3.50594, 19, 51.5016],
                            quaternion: [-0, -0.707487, -0, -0.706726],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [17.6071, 19, 62.3864],
                            quaternion: [0, 0.9781, 0, -0.208136],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [19.6696, 19, 36.0387],
                            quaternion: [0, 0.670595, 0, 0.741823],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [25.5291, 19, 59.6877],
                            quaternion: [-0, -0.359656, -0, 0.933085],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [27.258, 19, 56.9492],
                            quaternion: [0, 0.0863978, 0, -0.996261],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [29.9968, 19, 49.655],
                            quaternion: [0, 0.116816, 0, 0.993154],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [5.10585, 19, 64.138],
                            quaternion: [-0, -0.294776, -0, -0.955566],
                          }),
                          (0, i.jsx)(p.K4, {
                            position: [11.6389, 19, 78.9759],
                            quaternion: [0, 0.0698523, 0, -0.997557],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)(h.V, {
                    position: _e,
                    children: (0, i.jsx)("div", {
                      style: Ke.pointIcon.display
                        ? {}
                        : { pointerEvents: "none" },
                      onPointerOver: function () {
                        (document.getElementById("container").style.cursor =
                          "pointer"),
                          A || ue || E.cursor.current.dispSmall();
                      },
                      onPointerLeave: function () {
                        (document.getElementById("container").style.cursor =
                          "initial"),
                          !I || A || ue || E.cursor.current.dispDrag();
                      },
                      onClick: function (e) {
                        e.stopPropagation(),
                          E.cursor.current.dispMedium(),
                          r(1),
                          (Ke.pointIcon.display = !1),
                          E.toggleDefaultAngle.current(),
                          E.toggleCapture.current(!0);
                      },
                      children: (0, i.jsx)(C, {
                        context: He,
                        cursor: E.cursor,
                      }),
                    }),
                  }),
                  (0, i.jsx)(h.V, {
                    position: be,
                    children: (0, i.jsx)("div", {
                      style: Ke.pointIcon.display
                        ? {}
                        : { pointerEvents: "none" },
                      onPointerOver: function () {
                        (document.getElementById("container").style.cursor =
                          "pointer"),
                          A || ue || E.cursor.current.dispSmall();
                      },
                      onPointerLeave: function () {
                        (document.getElementById("container").style.cursor =
                          "initial"),
                          !I || A || ue || E.cursor.current.dispDrag();
                      },
                      onClick: function (e) {
                        e.stopPropagation(),
                          E.cursor.current.dispMedium(),
                          r(2),
                          (Ke.pointIcon.display = !1),
                          E.toggleDefaultAngle.current(),
                          E.toggleCapture.current(!0);
                      },
                      children: (0, i.jsx)(C, {
                        context: He,
                        cursor: E.cursor,
                      }),
                    }),
                  }),
                  (0, i.jsx)(h.V, {
                    position: we,
                    children: (0, i.jsx)("div", {
                      style: Ke.pointIcon.display
                        ? {}
                        : { pointerEvents: "none" },
                      onPointerOver: function () {
                        (document.getElementById("container").style.cursor =
                          "pointer"),
                          A || ue || E.cursor.current.dispSmall();
                      },
                      onPointerLeave: function () {
                        (document.getElementById("container").style.cursor =
                          "initial"),
                          !I || A || ue || E.cursor.current.dispDrag();
                      },
                      onClick: function (e) {
                        e.stopPropagation(),
                          E.cursor.current.dispMedium(),
                          r(3),
                          (Ke.pointIcon.display = !1),
                          E.toggleDefaultAngle.current(),
                          E.toggleCapture.current(!0);
                      },
                      children: (0, i.jsx)(C, {
                        context: He,
                        cursor: E.cursor,
                      }),
                    }),
                  }),
                  (0, i.jsx)(h.V, {
                    position: Se,
                    children: (0, i.jsx)("div", {
                      style: Ke.pointIcon.display
                        ? {}
                        : { pointerEvents: "none" },
                      onPointerOver: function () {
                        (document.getElementById("container").style.cursor =
                          "pointer"),
                          A || ue || E.cursor.current.dispSmall();
                      },
                      onPointerLeave: function () {
                        (document.getElementById("container").style.cursor =
                          "initial"),
                          !I || A || ue || E.cursor.current.dispDrag();
                      },
                      onClick: function (e) {
                        e.stopPropagation(),
                          E.cursor.current.dispMedium(),
                          r(4),
                          (Ke.pointIcon.display = !1),
                          E.toggleDefaultAngle.current(),
                          E.toggleCapture.current(!0);
                      },
                      children: (0, i.jsx)(C, {
                        context: He,
                        cursor: E.cursor,
                      }),
                    }),
                  }),
                  (0, i.jsx)(h.V, {
                    position: Ce,
                    children: (0, i.jsx)("div", {
                      style: Ke.pointIcon.display
                        ? {}
                        : { pointerEvents: "none" },
                      onPointerOver: function () {
                        (document.getElementById("container").style.cursor =
                          "pointer"),
                          A || ue || E.cursor.current.dispSmall();
                      },
                      onPointerLeave: function () {
                        (document.getElementById("container").style.cursor =
                          "initial"),
                          !I || A || ue || E.cursor.current.dispDrag();
                      },
                      onClick: function (e) {
                        e.stopPropagation(),
                          E.cursor.current.dispMedium(),
                          r(5),
                          (Ke.pointIcon.display = !1),
                          E.toggleDefaultAngle.current(),
                          E.toggleCapture.current(!0);
                      },
                      children: (0, i.jsx)(C, {
                        context: He,
                        cursor: E.cursor,
                      }),
                    }),
                  }),
                  (0, i.jsxs)("mesh", {
                    position: new v.Vector3(0, 25, 20),
                    scale: 1,
                    children: [
                      (0, i.jsx)("positionalAudio", {
                        ref: ze,
                        args: [Ue],
                        setVolume: 0,
                      }),
                      ";",
                    ],
                  }),
                  (0, i.jsx)("mesh", {
                    geometry: ie.null_screen.geometry,
                    material: Re,
                  }),
                  (0, i.jsx)("mesh", {
                    geometry: ie.null_screen_1.geometry,
                    material: Re,
                  }),
                  (0, i.jsx)("mesh", {
                    geometry: ie.null_screen_2.geometry,
                    material: Re,
                  }),
                  (0, i.jsx)("mesh", {
                    geometry: ie.null_screen_3.geometry,
                    material: Re,
                  }),
                  (0, i.jsx)("mesh", {
                    geometry: ie.null_screen_4.geometry,
                    material: Re,
                  }),
                  (0, i.jsx)("mesh", {
                    geometry: ie.null_screen_5.geometry,
                    material: Re,
                  }),
                  (0, i.jsx)("mesh", {
                    geometry: ie.null_screen_6.geometry,
                    material: Re,
                  }),
                  (0, i.jsx)("mesh", {
                    geometry: ie.null_screen_7.geometry,
                    material: Re,
                  }),
                  (0, i.jsx)("mesh", {
                    geometry: ie.null_screen_8.geometry,
                    material: Re,
                  }),
                  (0, i.jsx)("mesh", {
                    geometry: ie.null_screen_9.geometry,
                    material: Re,
                  }),
                  (0, i.jsx)("mesh", {
                    geometry: ie.null_screen_10.geometry,
                    material: Re,
                  }),
                  (0, i.jsx)("mesh", {
                    geometry: ie.null_screen_11.geometry,
                    material: Re,
                  }),
                  (0, i.jsx)("mesh", {
                    geometry: ie.null_screen_12.geometry,
                    material: Re,
                  }),
                  (0, i.jsx)("mesh", {
                    geometry: ie.null_screen_13.geometry,
                    material: Re,
                  }),
                  (0, i.jsx)("mesh", {
                    geometry: ie.null_screen_14.geometry,
                    material: Re,
                  }),
                  (0, i.jsx)("mesh", {
                    geometry: ie.null_screen_15.geometry,
                    material: Re,
                  }),
                ],
              })
            ),
            !ue &&
              (0, i.jsx)(g.o, {
                enabled: We,
                enableZoom: !1,
                enableRotate: !1,
                ref: L,
                target: [-1.3302535316570783, 0, -49.41671018138349],
                onChange: function (e) {
                  Ve.copy(e.target.target),
                    e.target.target.clamp(Le, Be),
                    Ve.sub(e.target.target),
                    Te.position.sub(Ve);
                },
              }),
            (0, i.jsx)(_.animated.mesh, {
              geometry: new v.BoxBufferGeometry(3e3, 3e3, 3e3, 1, 1, 1),
              position: [0, 0, -500],
              children: (0, i.jsx)(_.animated.meshBasicMaterial, {
                color: Xe,
                fog: !1,
                side: v.DoubleSide,
              }),
            }),
          ],
        });
      }
      f.L.preload("/models.glb");
      var B = t(5960),
        V = t(2248),
        F = t(5152),
        H = t.n(F),
        W = t(5518),
        Z = t(2975),
        z = t(4382),
        U = t.n(z);
      function Q(e, n) {
        if (null == e) return {};
        var t,
          r,
          o = (function (e, n) {
            if (null == e) return {};
            var t,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (t = i[r]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (o[t] = e[t]));
        }
        return o;
      }
      var G = H()(
        function () {
          return t.e(852).then(t.t.bind(t, 1852, 23));
        },
        {
          loadableGenerated: {
            webpack: function () {
              return [1852];
            },
          },
          ssr: !1,
        }
      );
      function Y(e) {
        var n = function () {
            null != o.current && c(!0);
          },
          t = function (e) {
            var n = e.children,
              t = s.Children.toArray(n),
              r = (0, b.useTrail)(t.length, {
                config: { mass: 5, tension: 2e3, friction: 200 },
                opacity: u ? 1 : 0,
                y: u ? "0px" : "100px",
                from: { opacity: 0, y: "1.2em" },
                delay: f,
              });
            return (0, i.jsx)(i.Fragment, {
              children: r.map(function (e, n) {
                var r = e.y,
                  o = Q(e, ["y"]);
                return (0,
                i.jsx)(b.animated.div, { className: U().trailsText, style: o, children: (0, i.jsx)(b.animated.div, { style: { y: r }, children: t[n] }) }, n);
              }),
            });
          },
          r = (0, s.useContext)(e.context),
          o = (0, s.useRef)(null),
          a = (0, s.useState)(!1),
          u = a[0],
          c = a[1],
          l = (0, s.useState)(!1),
          d = l[0],
          p = l[1],
          f = 1e3,
          m = (0, s.useState)(!1),
          x = (m[0], m[1]),
          h = (0, b.useSpring)({
            opacity: d ? "0" : "1",
            onStart: function () {
              document.querySelector(".splash").classList.add("close-splash")
              e.cameraStart.current(),
                e.showHUD(),
                (r.pointIcon.display = !0),
                e.cursor.current.dispDrag();
            },
            onRest: function () {
              null != o.current && ((o.current.style.display = "none"), x(!0));
            },
          }),
          g = (0, b.useSpring)({
            background: "rgba(0,0,0,0.5)",
            from: "rgba(0,0,0,1)",
            delay: f,
          }),
          j = (0, b.useSpring)({
            width: u ? "100%" : "0%",
            from: "0%",
            delay: f,
          }),
          v = (0, b.useSpring)({
            config: { duration: 1e3, easing: b.easings.easeOutExpo },
            opacity: u ? 1 : 0,
            y: u ? "0px" : "100px",
            from: { opacity: 0, y: "1.2em" },
            delay: f + 150,
          });
        return (
          (0, s.useEffect)(function () {
            (e.splashRef.current = n), n();
          }, []),
          (0, i.jsx)(i.Fragment, {
            children:
              !d &&
              (0, i.jsx)(b.animated.div, {
                ref: o,
                style: h,
                onClick: function () {
                  u &&
                    null != e.cameraStart.current &&
                    (p(!0), e.toggleAudio.current());
                },
                children: (0, i.jsxs)(b.animated.div, {
                  className: U().container,
                  style: g,
                  children: [
                    
                    (0, i.jsxs)("div", {
                      onClick: function () {},
                      children: [
                        (0, i.jsxs)("h1", {
                          className: U().title,
                          children: [
                            (0, i.jsx)(G, {
                              minWidth: 1361,
                              children: (0, i.jsxs)(t, {
                                children: [
                                  (0, i.jsx)("span", {children: "welcome to JDOG MEDIA ",}),    
                                ],
                              }),
                            }),
                            (0, i.jsx)("p", {
                              className: U().text,
                              children: (0, i.jsx)(b.animated.span, {
                                style: v,
                                children: [
                                  (0, i.jsx)("span", {children: "The largest advertising organization"}),
                                  (0, i.jsx)("span", {children: " in the cryptocurrency space",}),
                                ],
                              }),
                            }),
                            (0, i.jsx)(G, {
                              maxWidth: 1360,
                              children: (0, i.jsxs)(t, {
                                children: [
                                  (0, i.jsx)("span", { children: "" }),
                                  (0, i.jsx)("span", { children: "JDOG " }),
                                  (0, i.jsx)("span", { children: "MEDIA" }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: U().wrapper,
                          children: [
                            (0, i.jsx)(b.animated.div, {
                              className: U().line,
                              style: j,
                            }),
                            (0, i.jsx)("div", {
                              className: U().start,
                              children: (0, i.jsx)(b.animated.div, {
                                style: v,
                                children: "Enter",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          })
        );
      }
      var X = t(1163),
        J = t.n(X),
        $ = t(3695),
        ee = t.n($);
      function ne(e) {
        var n = (0, s.useContext)(e.context);
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("header", {
            className: ee().container,
            children: [
              (0, i.jsx)("h1", {
                onClick: function () {
                  window.location.assign("/");
                },
                onPointerEnter: function () {
                  e.cursor.current.dispSmall();
                },
                onPointerLeave: function () {
                  n.transition.isZoom
                    ? e.cursor.current.dispMedium()
                    : e.cursor.current.dispDrag();
                },
                children: "JDOG MEDIA",
              }),
              (0, i.jsx)("span", {
                className: ee().about,
                onClick: function () {
                  window.location.assign("about.html");
                },
                onPointerEnter: function () {
                  e.cursor.current.dispSmall();
                },
                onPointerLeave: function () {
                  n.transition.isZoom || n.transition.isAbout
                    ? e.cursor.current.dispMedium()
                    : e.cursor.current.dispDrag();
                },
                children: "About",
              }),
              (0, i.jsx)("span", {
                className: ee().about,
                onClick: function () {
                  window.location.assign("team.html");
                },
                onPointerEnter: function () {
                  e.cursor.current.dispSmall();
                },
                onPointerLeave: function () {
                  n.transition.isZoom || n.transition.isAbout
                    ? e.cursor.current.dispMedium()
                    : e.cursor.current.dispDrag();
                },
                children: "Team",
              }),
              (0, i.jsx)("span", {
                className: ee().about,
                onClick: function () {
                  window.location.assign("services.html");
                },
                onPointerEnter: function () {
                  e.cursor.current.dispSmall();
                },
                onPointerLeave: function () {
                  n.transition.isZoom || n.transition.isAbout
                    ? e.cursor.current.dispMedium()
                    : e.cursor.current.dispDrag();
                },
                children: "Services",
              }),
              (0, i.jsx)("span", {
                className: ee().about,
                onClick: function () {
                  window.location.assign("billboards.html");
                },
                onPointerEnter: function () {
                  e.cursor.current.dispSmall();
                },
                onPointerLeave: function () {
                  n.transition.isZoom || n.transition.isAbout
                    ? e.cursor.current.dispMedium()
                    : e.cursor.current.dispDrag();
                },
                children: "Billboards",
              }),
              (0, i.jsx)("span", {
                className: ee().about,
                onClick: function () {
                  window.location.assign("contact.html");
                },
                onPointerEnter: function () {
                  e.cursor.current.dispSmall();
                },
                onPointerLeave: function () {
                  n.transition.isZoom || n.transition.isAbout
                    ? e.cursor.current.dispMedium()
                    : e.cursor.current.dispDrag();
                },
                children: "Contact",
              }),
            ],
          }),
        });
      }
      var te = t(1664),
        re = t.n(te),
        oe = t(6038),
        ie = t(3253),
        se = t.n(ie),
        ae = t(9825),
        ue = t.n(ae);
      function ce(e) {
        var n = function () {
            o
              ? (l(!1),
                f(!1),
                (t.pointIcon.display = !0),
                (t.transition.isAbout = !1),
                oe.p8.set("html", {
                  "--scroll": "rgba(255,255,255,0)",
                  id: "off",
                  overwrite: !0,
                }),
                oe.p8.set(".ReactModal__Content--after-open", {
                  pointerEvents: "none",
                }))
              : (a(!0), f(!0), l(!0), (t.pointIcon.display = !1));
          },
          t = (0, s.useContext)(e.context),
          r = (0, s.useState)(!1),
          o = r[0],
          a = r[1],
          u = (0, s.useState)(!1),
          c = u[0],
          l = u[1],
          d = (0, s.useState)(!1),
          p = d[0],
          f = d[1],
          m = (0, s.useState)(!0),
          x = m[0],
          h = m[1];
        (0, s.useEffect)(function () {
          e.aboutRef.current = n;
        }, []);
        var g = (0, b.useSpring)({
            top: p ? "0" : "100vh",
            from: { top: "100vh" },
            config: { tension: p ? 170 : 340 },
            delay: p ? 50 : 0,
            onRest: function () {},
          }),
          j = (0, b.useSpring)({
            opacity: p ? 1 : 0,
            config: { duration: p ? 200 : 50 },
            from: { opacity: 0 },
          }),
          v = (0, b.useSpring)({
            d:
              c && o
                ? "M 0, 100 L 100, 100 L 100, 0 Q 50 0, 0 0z"
                : !c && o
                ? "M 0, 100 L 100, 100 L 100,  100 Q 50 110, 0  100z"
                : "M 0, 100 L 100, 100 L 100, 150 Q 50 100, 0 150z",
            onRest: function () {
              o && !c && a(!1);
            },
          });
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)(se(), {
            isOpen: o,
            className: "Modal",
            ariaHideApp: !1,
            onAfterOpen: function () {
              oe.p8.to("html", {
                "--scroll": "rgba(255,255,255,0.2)",
                duration: 0.5,
                delay: 1,
                id: "on",
                overwrite: !0,
              });
            },
            onAfterClose: function () {},
            style: {
              overlay: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(255, 255, 255, 0)",
                zIndex: 2e7,
              },
              content: {
                position: "absolute",
                top: "0px",
                left: "0px",
                right: "0px",
                bottom: "0px",
                overflow: "hidden",
                WebkitOverflowScrolling: "touch",
                borderRadius: "4px",
                outline: "none",
                height: "100%",
              },
            },
            children: [
              (0, i.jsx)("div", {
                className: ue().path,
                children: (0, i.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 100 100",
                  className: ue().path,
                  preserveAspectRatio: "none",
                  children: (0, i.jsx)(b.animated.path, {
                    fill: "#000",
                    d: v.d,
                  }),
                }),
              }),
              (0, i.jsxs)(b.animated.div, {
                className: ue().container,
                style: g,
                children: [
                  (0, i.jsx)("div", {
                    className: ue().title,
                    children: "JDOG MEDIA",
                  }),
                  (0, i.jsx)("div", {
                    className: ue().close,
                    onClick: function () {
                      n();
                    },
                    onPointerEnter: function () {
                      e.cursor.current.dispSmall();
                    },
                    onPointerLeave: function () {
                      e.cursor.current.dispMedium();
                    },
                    children: "CLOSE",
                  }),
                  (0, i.jsx)(b.animated.div, {
                    className: ue().button,
                    style: j,
                    onClick: function () {
                      h(!x);
                    },
                    onPointerEnter: function () {
                      e.cursor.current.dispSmall();
                    },
                    onPointerLeave: function () {
                      e.cursor.current.dispMedium();
                    },
                    children: (0, i.jsxs)("div", {
                      children: [
                        x && (0, i.jsx)(i.Fragment, { children: "JP" }),
                        !x && (0, i.jsx)(i.Fragment, { children: "EN" }),
                      ],
                    }),
                  }),
                  (0, i.jsxs)("h1", {
                    children: [
                      "JDOG MEDIA ",
                      (0, i.jsx)("br", {}),
                      "Simulator",
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: ue().innerContainer,
                    children: [
                      (0, i.jsxs)("p", {
                        className: ue().col1,
                        children: [
                          x &&
                            (0, i.jsx)(i.Fragment, {
                              children: "Welcome to JDOG MEDIA",
                            }),
                          !x &&
                            (0, i.jsx)(i.Fragment, {
                              children:
                                "JDOG MEDIA\u306f\u3001\u30c7\u30b8\u30bf\u30eb\u30b5\u30a4\u30cd\u30fc\u30b8\u306e\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u3059\u308b\u70ba\u306e\u30b7\u30b9\u30c6\u30e0\u3067\u69cb\u7bc9\u3057\u305f\u30c7\u30e2\u30b5\u30a4\u30c8\u3067\u3059\u3002\u30d0\u30fc\u30c1\u30e3\u30eb\u4e0a\u306e\u6e0b\u8c37\u306e\u5efa\u7269\u306b\u4eee\u60f3\u306e\u6620\u50cf\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8868\u793a\u3057\u3001\u30e6\u30fc\u30b6\u30fc\u306f\u4efb\u610f\u306e\u8996\u70b9\u3067\u6620\u50cf\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u5909\u66f4\u3057\u305f\u308a\u3001\u6e0b\u8c37\u3067\u9332\u97f3\u3057\u305f\u97f3\u3092\u4f53\u9a13\u3059\u308b\u4e8b\u304c\u51fa\u6765\u307e\u3059\u3002\u5c06\u6765\u7684\u306b\u306f\u3053\u306e\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u3068\u30ea\u30a2\u30eb\u304c\u7e4b\u304c\u308b\u3088\u3046\u306a\u30b7\u30b9\u30c6\u30e0\u3092\u69cb\u7bc9\u3057\u3066\u3044\u304d\u307e\u3059\u3002",
                            }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: ue().columnsContainer,
                        children: (0, i.jsxs)("div", {
                          className: ue().columnsWrapper,
                          children: [
                            (0, i.jsxs)("div", {
                              className: ue().col2,
                              children: [
                                (0, i.jsx)("h2", { children: "JDOG MEDIA" }),
                                (0, i.jsxs)("p", {
                                  children: [
                                    (0, i.jsx)(re(), {
                                      href: "",
                                      passHref: !0,
                                      children: (0, i.jsx)("a", {
                                        className: ue().anchor,
                                        style: { display: "inline-block" },
                                        target: "_blank",
                                        children: "",
                                      }),
                                    }),
                                    "\xa0 Breve descripcion",
                                  ],
                                }),
                                (0, i.jsx)("h2", { children: "FOLLOW US" }),
                                (0, i.jsxs)("ul", {
                                  className: ue().social,
                                  children: [
                                    (0, i.jsx)("li", {
                                      children: (0, i.jsx)(re(), {
                                        href: "",
                                        passHref: !0,
                                        children: (0, i.jsx)("a", {
                                          className: ue().anchor,
                                          target: "_blank",
                                          children: "ig",
                                        }),
                                      }),
                                    }),
                                    (0, i.jsx)("li", {
                                      children: (0, i.jsx)(re(), {
                                        href: "",
                                        passHref: !0,
                                        children: (0, i.jsx)("a", {
                                          className: ue().anchor,
                                          target: "_blank",
                                          children: "tw",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: ue().col3,
                              children: [
                                (0, i.jsx)("h2", { children: "CREDITS" }),
                                (0, i.jsxs)("ul", {
                                  children: [
                                    (0, i.jsxs)("li", {
                                      children: [
                                        "",
                                        (0, i.jsx)(re(), {
                                          href: "",
                                          passHref: !0,
                                          children: (0, i.jsx)("a", {
                                            className: ue().anchor,
                                            target: "_blank",
                                            children: "",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, i.jsxs)("li", {
                                      children: [
                                        "",
                                        (0, i.jsx)(re(), {
                                          href: "",
                                          passHref: !0,
                                          children: (0, i.jsx)("a", {
                                            className: ue().anchor,
                                            target: "_blank",
                                            children: "",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, i.jsxs)("li", {
                                      children: [
                                        "",
                                        (0, i.jsx)(re(), {
                                          href: "",
                                          passHref: !0,
                                          children: (0, i.jsx)("a", {
                                            className: ue().anchor,
                                            target: "_blank",
                                            children: "",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var le = t(1957),
        de = t.n(le);
      function pe(e) {
        var n = (0, s.useContext)(e.context),
          t = (0, s.useState)(!1),
          r = t[0],
          o = t[1],
          a = (0, b.useSpring)({
            opacity: r ? "1" : "0",
            x: r ? "0%" : "-100%",
          });
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("div", {
            className: de().container,
            children: (0, i.jsxs)("div", {
              className: de().wrapper,
              children: [
                (0, i.jsx)("div", {
                  onClick: function () {
                    W.tq && o(!r);
                  },
                  onPointerEnter: function () {
                    W.tq || (o(!0), e.cursor.current.dispSmall());
                  },
                  onPointerLeave: function () {
                    W.tq ||
                      (o(!1),
                      n.transition.isZoom
                        ? e.cursor.current.dispMedium()
                        : e.cursor.current.dispDrag());
                  },
                  children: (0, i.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 19.49 28.93",
                    children: [
                      (0, i.jsx)("path", {
                        stroke: "#fff",
                        d: "M2.24239 11.3447L7.51603 20C8.57076 18.1535 11.3833 13.8374 12.7896 11.3447C14.3522 8.57496 14.4539 6.06926 12.7896 3.72799C10.3286 0.265839 5.05498 -0.0803679 2.24238 3.72798C-0.00769854 6.77466 1.30486 10.0752 2.24239 11.3447Z",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "7.5",
                        cy: "7.5",
                        r: "4",
                        stroke: "white",
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)("p", {
                  className: de().text,
                  children: (0, i.jsxs)(b.animated.span, {
                    style: a,
                    children: ["Shibuya, ", (0, i.jsx)("br", {}), "Tokyo"],
                  }),
                }),
              ],
            }),
          }),
        });
      }
      var fe = t(9909),
        me = t.n(fe);
      function xe(e) {
        var n = function (e) {
            var n = e.children,
              t = s.Children.toArray(n),
              o = (0, b.useTrail)(t.length, {
                from: { height: "3px" },
                to: { height: r ? "12px" : "3px" },
                loop: { reverse: !0 },
              });
            return (0, i.jsx)(i.Fragment, {
              children: o.map(function (e, n) {
                var r = e.height;
                return (0,
                i.jsx)(b.animated.div, { style: { height: r }, children: t[n] }, n);
              }),
            });
          },
          t = (0, s.useState)(!0),
          r = t[0],
          o = t[1],
          a = (0, s.useContext)(e.context),
          u = (0, s.useMemo)(
            function () {
              return (0, i.jsxs)(n, {
                children: [
                  (0, i.jsx)("div", { className: me().bar1 }),
                  (0, i.jsx)("div", { className: me().bar2 }),
                  (0, i.jsx)("div", { className: me().bar3 }),
                  (0, i.jsx)("div", { className: me().bar4 }),
                  (0, i.jsx)("div", { className: me().bar5 }),
                ],
              });
            },
            [r]
          );
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("div", {
            className: me().container,
            children: (0, i.jsx)("div", {
              className: me().button,
              onClick: function () {
                e.toggleAudio.current(), o(!r);
              },
              onPointerEnter: function () {
                e.cursor.current.dispSmall();
              },
              onPointerLeave: function () {
                a.transition.isZoom
                  ? e.cursor.current.dispMedium()
                  : e.cursor.current.dispDrag();
              },
              children: (0, i.jsx)("div", {
                className: me().wrapper,
                children: u,
              }),
            }),
          }),
        });
      }
      var he = t(3217),
        ge = t.n(he);
      function je(e) {
        var n = (0, s.useState)(!0),
          t = n[0],
          r = n[1],
          o = (0, s.useContext)(e.context),
          a = (0, b.useSpring)({
            fill: t ? "rgba(0,0,0,1)" : "rgba(0,0,0,0)",
            strokeWidth: t ? "0" : "1",
            stroke: t ? "#000" : "#fff",
            config: { easing: b.easings.easeOutCirc, duration: 500 },
          }),
          u = (0, b.useSpring)({
            fill: t ? "#fff" : "#000",
            config: { easing: b.easings.easeOutCirc, duration: 500 },
          }),
          c = (0, b.useSpring)({
            stroke: t ? "#fff" : "#000",
            config: { easing: b.easings.easeOutCirc, duration: 500 },
          }),
          l = (0, b.useSpring)({
            y: t ? "0%" : "100%",
            config: { easing: b.easings.easeOutCirc, duration: 500 },
          }),
          d = (0, b.useSpring)({
            y: t ? "100%" : "0%",
            config: { easing: b.easings.easeOutCirc, duration: 500 },
          });
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("div", {
            className: ge().container,
            children: (0, i.jsxs)("div", {
              className: ge().wrapper,
              children: [
                (0, i.jsxs)("div", {
                  className: ge().button,
                  onClick: function () {
                    r(!1), e.setNight(!1);
                  },
                  onPointerEnter: function () {
                    e.cursor.current.dispSmall();
                  },
                  onPointerLeave: function () {
                    o.transition.isZoom
                      ? e.cursor.current.dispMedium()
                      : e.cursor.current.dispDrag();
                  },
                  children: [
                    (0, i.jsx)("div", { className: ge().border }),
                    (0, i.jsx)(b.animated.div, {
                      className: ge().bg,
                      style: d,
                    }),
                    (0, i.jsx)("div", {
                      className: ge().sun,
                      children: (0, i.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 21.38 21",
                        children: [
                          (0, i.jsx)(b.animated.circle, {
                            fill: "#fff",
                            cx: "10.5",
                            cy: "10.5",
                            r: "3.75",
                            style: u,
                          }),
                          (0, i.jsx)(b.animated.line, {
                            style: c,
                            x1: "11",
                            x2: "11",
                            y2: "5.25",
                          }),
                          (0, i.jsx)(b.animated.line, {
                            style: c,
                            stroke: "#fff",
                            x1: "18.28",
                            y1: "3.43",
                            x2: "14.57",
                            y2: "7.14",
                          }),
                          (0, i.jsx)(b.animated.line, {
                            style: c,
                            stroke: "#fff",
                            x1: "17.5",
                            y1: "18.2",
                            x2: "13.78",
                            y2: "14.49",
                          }),
                          (0, i.jsx)(b.animated.line, {
                            style: c,
                            stroke: "#fff",
                            x1: "21.38",
                            y1: "11",
                            x2: "16.13",
                            y2: "11",
                          }),
                          (0, i.jsx)(b.animated.line, {
                            style: c,
                            stroke: "#fff",
                            x1: "5.25",
                            y1: "11",
                            y2: "11",
                          }),
                          (0, i.jsx)(b.animated.line, {
                            style: c,
                            stroke: "#fff",
                            x1: "11",
                            y1: "15.75",
                            x2: "11",
                            y2: "21",
                          }),
                          (0, i.jsx)(b.animated.line, {
                            style: c,
                            stroke: "#fff",
                            x1: "7.14",
                            y1: "14.57",
                            x2: "3.43",
                            y2: "18.28",
                          }),
                          (0, i.jsx)(b.animated.line, {
                            style: c,
                            stroke: "#fff",
                            x1: "6.36",
                            y1: "7.07",
                            x2: "2.65",
                            y2: "3.35",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: ge().button,
                  onClick: function () {
                    r(!0), e.setNight(!0);
                  },
                  onPointerEnter: function () {
                    e.cursor.current.dispSmall();
                  },
                  onPointerLeave: function () {
                    o.transition.isZoom
                      ? e.cursor.current.dispMedium()
                      : e.cursor.current.dispDrag();
                  },
                  children: [
                    (0, i.jsx)("div", { className: ge().border }),
                    (0, i.jsx)(b.animated.div, {
                      className: ge().bg,
                      style: l,
                    }),
                    (0, i.jsx)("div", {
                      className: ge().moon,
                      children: (0, i.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 18.98 19.32",
                        children: (0, i.jsx)(b.animated.path, {
                          d: "M8.28,.82C-7.72,5.24,3.77,27.32,17.5,15.26,8.28,16.08,2.85,9.65,8.28,.82Z",
                          style: a,
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      var ve = t(1766),
        ye = t(2512),
        _e = t.n(ye);
      function be(e) {
        var n,
          t = function (e) {
            c(e);
          },
          r = (0, s.useContext)(He),
          o = (0, s.useMemo)(function () {
            return new ve.Howl({
              src: ["/shutter.mp3"],
              html5: !0,
              volume: 0.1,
            });
          }, []),
          a = (0, s.useState)(!1),
          u = a[0],
          c = a[1];
        (0, s.useEffect)(function () {
          e.toggleCapture.current = t;
        }, []);
        var l = (0, s.useState)(!1),
          d = l[0],
          p = l[1],
          f = (0, s.useRef)(null),
          m = (0, s.useRef)(null);
        null === (n = m.current) || void 0 === n || n.style.display;
        var x = (0, b.useSpring)({
            opacity: d ? 0 : 1,
            display: d ? "initial" : "none",
            config: { duration: 900 },
            delay: 50,
            onRest: function () {
              p(!1);
            },
          }),
          h = (0, b.useSpring)({
            opacity: u ? 1 : 0,
            onStart: function () {
              null != f.current &&
                (u || (f.current.style.pointerEvents = "none"));
            },
            onRest: function () {
              null != f.current && u && (f.current.style.pointerEvents = "all");
            },
          }),
          g = (0, b.useSpring)({ top: u ? "0" : "140%" });
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("div", {
              className: _e().container,
              children: (0, i.jsxs)(b.animated.div, {
                ref: f,
                style: h,
                className: _e().button,
                onClick: function () {
                  o.play(), p(!0), e.captureImage.current();
                },
                onPointerEnter: function () {
                  e.cursor.current.dispSmall();
                },
                onPointerLeave: function () {
                  r.transition.isZoom
                    ? e.cursor.current.dispMedium()
                    : e.cursor.current.dispDrag();
                },
                children: [
                  (0, i.jsx)("div", { className: _e().border }),
                  (0, i.jsx)("div", { className: _e().bg }),
                  (0, i.jsx)("div", {
                    className: _e().text,
                    children: "capture the view",
                  }),
                  (0, i.jsx)(b.animated.div, {
                    className: _e().path,
                    style: g,
                    children: (0, i.jsxs)("svg", {
                      fill: "#fff",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 64.83 46.9",
                      children: [
                        (0, i.jsx)("path", {
                          d: "M49.44,7.24l-3-7.24H18.44l-3.98,7.24H0V46.9H64.83V7.24h-15.39Zm-17.82,31.41c-6.67,0-12.08-5.4-12.09-12.07,0-6.67,5.4-12.08,12.07-12.09,6.67,0,12.08,5.4,12.09,12.07,0,0,0,.01,0,.02-.01,6.66-5.41,12.06-12.07,12.07Z",
                        }),
                        (0, i.jsx)("path", {
                          d: "M40.69,26.58c0,5.01-4.07,9.08-9.08,9.08s-9.08-4.07-9.08-9.08,4.07-9.08,9.08-9.08h0c5.01,0,9.07,4.07,9.07,9.08Z",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            (0, i.jsx)(b.animated.div, {
              className: _e().strobe,
              ref: m,
              style: x,
            }),
          ],
        });
      }
      var we = t(1325),
        Se = t(6744),
        Ce = (0, Se.zo)(we.fC, {
          position: "relative",
          display: "flex",
          alignItems: "center",
          userSelect: "none",
          touchAction: "none",
          width: "100%",
          '&[data-orientation="horizontal"]': { height: 17 },
          '&[data-orientation="vertical"]': {
            flexDirection: "column",
            width: 17,
            height: 100,
          },
        }),
        Ne = (0, Se.zo)(we.fQ, {
          backgroundColor: "#fff",
          position: "relative",
          flexGrow: 1,
          borderRadius: "9999px",
          '&[data-orientation="horizontal"]': { height: 1 },
          '&[data-orientation="vertical"]': { width: 3 },
        }),
        Ee = (0, Se.zo)(we.bU, {
          all: "unset",
          display: "block",
          width: 17,
          height: 17,
          backgroundColor: "black",
          border: "solid",
          borderColor: "#fff",
          borderWidth: "1px",
          borderRadius: "50%",
        }),
        Oe = t(4465),
        Me = t.n(Oe),
        De = function (e) {
          var n = (0, s.useRef)(null),
            t = (0, b.useSpring)({
              y: e.isOn ? "0%" : "100%",
              config: { easing: b.easings.easeOutCirc, duration: 500 },
              onStart: function () {
                if (e.isOn) {
                  if (null == n.current) return;
                  n.current.style.display = "initial";
                }
              },
              onRest: function () {
                if (!e.isOn) {
                  if (null == n.current) return;
                  n.current.style.display = "none";
                }
              },
            }),
            r = (0, b.useSpring)({ color: e.isOn ? "#000" : "#fff" });
          return (
            (0, s.useEffect)(function () {
              if (e.isOn) {
                if (null == n.current) return;
                n.current.style.display = "initial";
              } else {
                if (null == n.current) return;
                n.current.style.display = "none";
              }
            }, []),
            (0, i.jsx)(i.Fragment, {
              children: (0, i.jsxs)(b.animated.div, {
                className: "".concat(Me().button, " ").concat(Me().buttonType),
                children: [
                  (0, i.jsx)("div", { className: Me().border }),
                  (0, i.jsx)(b.animated.div, {
                    className: Me().bg,
                    style: t,
                    ref: n,
                  }),
                  (0, i.jsxs)(b.animated.div, {
                    className: Me().text,
                    style: r,
                    children: ["type ", e.idx],
                  }),
                ],
              }),
            })
          );
        },
        qe = function (e) {
          var n = function () {
              a(!0);
            },
            t = (0, s.useContext)(He),
            r = (0, s.useState)(!1),
            o = r[0],
            a = r[1],
            u = (0, s.useRef)(null),
            c = (0, b.useSpring)({
              y: o ? "100%" : "0%",
              config: { easing: b.easings.easeOutCirc, duration: 500 },
              onStart: function () {
                if (!o) {
                  if (null == u.current) return;
                  u.current.style.display = "initial";
                }
              },
              onRest: function () {
                if (o) {
                  if (null == u.current) return;
                  u.current.style.display = "none";
                }
              },
            }),
            l = (0, b.useSpring)({ color: o ? "#fff" : "#000" });
          return (
            (0, s.useEffect)(function () {
              e.toggleDefaultAngle.current = n;
            }, []),
            (0, i.jsx)(i.Fragment, {
              children: (0, i.jsxs)(b.animated.div, {
                className: ""
                  .concat(Me().button, " ")
                  .concat(Me().buttonDefaultAngle),
                onClick: function () {
                  t.transition.isZoom && (a(!1), e.toggleCapture.current(!1));
                },
                children: [
                  (0, i.jsx)("div", { className: Me().borderDefaultAngle }),
                  (0, i.jsx)(b.animated.div, {
                    className: Me().bgDefaultAngle,
                    style: c,
                    ref: u,
                  }),
                  (0, i.jsx)(b.animated.div, {
                    className: Me().text,
                    style: l,
                    children: "default angle",
                  }),
                ],
              }),
            })
          );
        },
        Pe = t(6512),
        Ie = t.n(Pe);
      function Ae(e) {
        var n = (0, s.useState)(0),
          t = n[0],
          r = n[1],
          o = (0, s.useContext)(He),
          a = (0, s.useState)(!0),
          u = a[0],
          c = a[1],
          l = (0, s.useState)(!1),
          d = l[0],
          p = l[1],
          f = (0, s.useState)(!1),
          m = f[0],
          x = f[1];
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)(b.animated.div, {
            className: Ie().container,
            children: [
              (0, i.jsx)("span", {
                className: Ie().buttonTitle,
                children: "visualization types",
              }),
              (0, i.jsxs)("ul", {
                className: Ie().buttons,
                children: [
                  (0, i.jsx)("li", {
                    onClick: function () {
                      e.changePattern.current(0), r(0), c(!0), p(!1), x(!1);
                    },
                    onPointerEnter: function () {
                      e.cursor.current.dispSmall();
                    },
                    onPointerLeave: function () {
                      o.transition.isZoom
                        ? e.cursor.current.dispMedium()
                        : e.cursor.current.dispDrag();
                    },
                    children: (0, i.jsx)(De, { idx: 1, isOn: u }),
                  }),
                  (0, i.jsx)("li", {
                    onClick: function () {
                      e.changePattern.current(1), r(1), c(!1), p(!0), x(!1);
                    },
                    onPointerEnter: function () {
                      e.cursor.current.dispSmall();
                    },
                    onPointerLeave: function () {
                      o.transition.isZoom
                        ? e.cursor.current.dispMedium()
                        : e.cursor.current.dispDrag();
                    },
                    children: (0, i.jsx)(De, { idx: 2, isOn: d }),
                  }),
                  (0, i.jsx)("li", {
                    onClick: function () {
                      e.changePattern.current(2),
                        r(2),
                        c(!1),
                        p(!1),
                        x(!0),
                        e.toggleVideo.current();
                    },
                    onPointerEnter: function () {
                      e.cursor.current.dispSmall();
                    },
                    onPointerLeave: function () {
                      o.transition.isZoom
                        ? e.cursor.current.dispMedium()
                        : e.cursor.current.dispDrag();
                    },
                    children: (0, i.jsx)(De, { idx: 3, isOn: m }),
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: Ie().slidersContainer,
                children: [
                  (0, i.jsxs)("div", {
                    className: Ie().sliderContainer,
                    children: [
                      (0, i.jsx)("span", {
                        className: Ie().sliderTitle,
                        children: "visualization editors",
                      }),
                      (0, i.jsxs)("div", {
                        className:
                          0 == t
                            ? ""
                                .concat(Ie().sliderWrapper, " ")
                                .concat(Ie().sliderOn)
                            : ""
                                .concat(Ie().sliderWrapper, " ")
                                .concat(Ie().sliderOff),
                        children: [
                          (0, i.jsx)("label", { children: "Hue" }),
                          (0, i.jsxs)(Ce, {
                            onValueChange: function (e) {
                              o.sliderA.val0 = e[0];
                            },
                            name: "hue",
                            min: 0,
                            max: 1,
                            step: 0.01,
                            defaultValue: [0],
                            onPointerEnter: function () {
                              e.cursor.current.dispSlider();
                            },
                            onPointerLeave: function () {
                              o.transition.isZoom
                                ? e.cursor.current.dispMedium()
                                : e.cursor.current.dispDrag();
                            },
                            children: [(0, i.jsx)(Ne, {}), (0, i.jsx)(Ee, {})],
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className:
                          1 == t
                            ? ""
                                .concat(Ie().sliderWrapper, " ")
                                .concat(Ie().sliderOn)
                            : ""
                                .concat(Ie().sliderWrapper, " ")
                                .concat(Ie().sliderOff),
                        children: [
                          (0, i.jsx)("label", { children: "Hue" }),
                          (0, i.jsxs)(Ce, {
                            onValueChange: function (e) {
                              o.sliderB.val0 = e[0];
                            },
                            name: "hue",
                            min: 0,
                            max: 6.28318530718,
                            step: 0.01,
                            defaultValue: [0],
                            onPointerEnter: function () {
                              e.cursor.current.dispSlider();
                            },
                            onPointerLeave: function () {
                              o.transition.isZoom
                                ? e.cursor.current.dispMedium()
                                : e.cursor.current.dispDrag();
                            },
                            children: [(0, i.jsx)(Ne, {}), (0, i.jsx)(Ee, {})],
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className:
                          2 == t
                            ? ""
                                .concat(Ie().sliderWrapper, " ")
                                .concat(Ie().sliderOn)
                            : ""
                                .concat(Ie().sliderWrapper, " ")
                                .concat(Ie().sliderOff),
                        children: [
                          (0, i.jsx)("label", { children: "Hue" }),
                          (0, i.jsxs)(Ce, {
                            onValueChange: function (e) {
                              o.sliderC.val0 = e[0];
                            },
                            name: "hue",
                            min: 0,
                            max: 1,
                            step: 0.01,
                            defaultValue: [1],
                            onPointerEnter: function () {
                              e.cursor.current.dispSlider();
                            },
                            onPointerLeave: function () {
                              o.transition.isZoom
                                ? e.cursor.current.dispMedium()
                                : e.cursor.current.dispDrag();
                            },
                            children: [(0, i.jsx)(Ne, {}), (0, i.jsx)(Ee, {})],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      0 == t
                        ? ""
                            .concat(Ie().sliderContainer, " ")
                            .concat(Ie().sliderWrapper, " ")
                            .concat(Ie().sliderOn, " ")
                            .concat(Ie().sliderOffset)
                        : ""
                            .concat(Ie().sliderContainer, " ")
                            .concat(Ie().sliderWrapper, " ")
                            .concat(Ie().sliderOff),
                    children: [
                      (0, i.jsx)("label", { children: "Speed" }),
                      (0, i.jsxs)(Ce, {
                        onValueChange: function (e) {
                          o.sliderA.val1 = e[0];
                        },
                        name: "speed",
                        min: 0,
                        max: 1,
                        step: 0.01,
                        defaultValue: [0.5],
                        onPointerEnter: function () {
                          e.cursor.current.dispSlider();
                        },
                        onPointerLeave: function () {
                          o.transition.isZoom
                            ? e.cursor.current.dispMedium()
                            : e.cursor.current.dispDrag();
                        },
                        children: [(0, i.jsx)(Ne, {}), (0, i.jsx)(Ee, {})],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      1 == t
                        ? ""
                            .concat(Ie().sliderContainer, " ")
                            .concat(Ie().sliderWrapper, " ")
                            .concat(Ie().sliderOn, " ")
                            .concat(Ie().sliderOffset)
                        : ""
                            .concat(Ie().sliderContainer, " ")
                            .concat(Ie().sliderWrapper, " ")
                            .concat(Ie().sliderOff),
                    children: [
                      (0, i.jsx)("label", { children: "Speed" }),
                      (0, i.jsxs)(Ce, {
                        onValueChange: function (e) {
                          o.sliderB.val1 = e[0];
                        },
                        name: "speed",
                        min: 0,
                        max: 1,
                        step: 0.01,
                        defaultValue: [0.5],
                        onPointerEnter: function () {
                          e.cursor.current.dispSlider();
                        },
                        onPointerLeave: function () {
                          o.transition.isZoom
                            ? e.cursor.current.dispMedium()
                            : e.cursor.current.dispDrag();
                        },
                        children: [(0, i.jsx)(Ne, {}), (0, i.jsx)(Ee, {})],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      2 == t
                        ? ""
                            .concat(Ie().sliderContainer, " ")
                            .concat(Ie().sliderWrapper, " ")
                            .concat(Ie().sliderOn, " ")
                            .concat(Ie().sliderOffset)
                        : ""
                            .concat(Ie().sliderContainer, " ")
                            .concat(Ie().sliderWrapper, " ")
                            .concat(Ie().sliderOff),
                    children: [
                      (0, i.jsx)("label", { children: "Gamma" }),
                      (0, i.jsxs)(Ce, {
                        onValueChange: function (e) {
                          o.sliderC.val1 = e[0];
                        },
                        name: "gamma",
                        min: 1.5,
                        max: 4,
                        step: 0.01,
                        defaultValue: [2.2],
                        onPointerEnter: function () {
                          e.cursor.current.dispSlider();
                        },
                        onPointerLeave: function () {
                          o.transition.isZoom
                            ? e.cursor.current.dispMedium()
                            : e.cursor.current.dispDrag();
                        },
                        children: [(0, i.jsx)(Ne, {}), (0, i.jsx)(Ee, {})],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      0 == t
                        ? ""
                            .concat(Ie().sliderContainer, " ")
                            .concat(Ie().sliderWrapper, " ")
                            .concat(Ie().sliderOn, " ")
                            .concat(Ie().sliderOffset)
                        : ""
                            .concat(Ie().sliderContainer, " ")
                            .concat(Ie().sliderWrapper, " ")
                            .concat(Ie().sliderOff),
                    children: [
                      (0, i.jsx)("label", { children: "DIMMER" }),
                      (0, i.jsxs)(Ce, {
                        onValueChange: function (e) {
                          o.sliderA.val2 = e[0];
                        },
                        name: "dimmer",
                        min: 0,
                        max: 1,
                        step: 0.01,
                        defaultValue: [1],
                        onPointerEnter: function () {
                          e.cursor.current.dispSlider();
                        },
                        onPointerLeave: function () {
                          o.transition.isZoom
                            ? e.cursor.current.dispMedium()
                            : e.cursor.current.dispDrag();
                        },
                        children: [(0, i.jsx)(Ne, {}), (0, i.jsx)(Ee, {})],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      1 == t
                        ? ""
                            .concat(Ie().sliderContainer, " ")
                            .concat(Ie().sliderWrapper, " ")
                            .concat(Ie().sliderOn, " ")
                            .concat(Ie().sliderOffset)
                        : ""
                            .concat(Ie().sliderContainer, " ")
                            .concat(Ie().sliderWrapper, " ")
                            .concat(Ie().sliderOff),
                    children: [
                      (0, i.jsx)("label", { children: "DIMMER" }),
                      (0, i.jsxs)(Ce, {
                        onValueChange: function (e) {
                          o.sliderB.val2 = e[0];
                        },
                        name: "dimmer",
                        min: 0,
                        max: 1,
                        step: 0.01,
                        defaultValue: [1],
                        onPointerEnter: function () {
                          e.cursor.current.dispSlider();
                        },
                        onPointerLeave: function () {
                          o.transition.isZoom
                            ? e.cursor.current.dispMedium()
                            : e.cursor.current.dispDrag();
                        },
                        children: [(0, i.jsx)(Ne, {}), (0, i.jsx)(Ee, {})],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      2 == t
                        ? ""
                            .concat(Ie().sliderContainer, " ")
                            .concat(Ie().sliderWrapper, " ")
                            .concat(Ie().sliderOn, " ")
                            .concat(Ie().sliderOffset)
                        : ""
                            .concat(Ie().sliderContainer, " ")
                            .concat(Ie().sliderWrapper, " ")
                            .concat(Ie().sliderOff),
                    children: [
                      (0, i.jsx)("label", { children: "DIMMER" }),
                      (0, i.jsxs)(Ce, {
                        onValueChange: function (e) {
                          o.sliderC.val2 = e[0];
                        },
                        name: "dimmer",
                        min: 0,
                        max: 1,
                        step: 0.01,
                        defaultValue: [1],
                        onPointerEnter: function () {
                          e.cursor.current.dispSlider();
                        },
                        onPointerLeave: function () {
                          o.transition.isZoom
                            ? e.cursor.current.dispMedium()
                            : e.cursor.current.dispDrag();
                        },
                        children: [(0, i.jsx)(Ne, {}), (0, i.jsx)(Ee, {})],
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                onClick: function () {
                  e.cameraDefaultAngle.current();
                },
                onPointerEnter: function () {
                  e.cursor.current.dispSmall();
                },
                onPointerLeave: function () {
                  o.transition.isZoomEnd
                    ? e.cursor.current.dispMedium()
                    : e.cursor.current.dispDrag();
                },
                children: (0, i.jsx)(qe, {
                  toggleDefaultAngle: e.toggleDefaultAngle,
                  toggleCapture: e.toggleCapture,
                  cursor: e.cursor,
                }),
              }),
            ],
          }),
        });
      }
      var Re = t(1136),
        Ke = t.n(Re),
        Te = (0, s.forwardRef)(function (e, n) {
          var t = (0, s.useRef)(null),
            r = (0, s.useRef)(null),
            o = (0, s.useRef)(null),
            a = (0, s.useRef)(null);
          return (
            (0, s.useEffect)(function () {
              var e = oe.p8.quickSetter(t.current, "x", "px"),
                n = oe.p8.quickSetter(t.current, "y", "px");
              oe.p8.set(t.current, { xPercent: -50, yPercent: -50 });
              var r = { x: window.innerWidth / 2, y: window.innerHeight / 2 },
                o = { x: r.x, y: r.y };
              return (
                window.addEventListener("pointermove", function (e) {
                  (o.x = e.x),
                    (o.y = e.y),
                    t.current && (t.current.style.opacity = "1");
                }),
                oe.p8.ticker.add(function (t) {
                  var i = 1 - Math.pow(0.65, oe.p8.ticker.deltaRatio());
                  (r.x += (o.x - r.x) * i),
                    (r.y += (o.y - r.y) * i),
                    e(r.x),
                    n(r.y);
                }),
                function () {}
              );
            }, []),
            (0, s.useEffect)(function () {
              oe.p8.set(t.current, {
                duration: 0.3,
                ease: "expo.out",
                width: "251px",
                height: "251px",
              }),
                oe.p8.to(o.current, {
                  onStart: function () {
                    null != o.current && (o.current.innerText = "start");
                  },
                  duration: 0.3,
                  ease: "expo.out",
                  opacity: 1,
                }),
                oe.p8.to(r.current, {
                  duration: 0.3,
                  ease: "expo.out",
                  width: "0px",
                  height: "0px",
                });
            }, []),
            (0, s.useImperativeHandle)(n, function () {
              return {
                dispDrag: function () {
                  oe.p8.to(t.current, {
                    duration: 0.3,
                    ease: "expo.out",
                    width: "111px",
                    height: "111px",
                  }),
                    oe.p8.to(r.current, {
                      duration: 0.3,
                      ease: "expo.out",
                      width: "0px",
                      height: "0px",
                    }),
                    oe.p8.to(o.current, {
                      onStart: function () {
                        null != o.current && (o.current.innerText = "drag");
                      },
                      duration: 0.3,
                      ease: "expo.out",
                      opacity: 1,
                    }),
                    oe.p8.to(a.current, {
                      duration: 0.3,
                      ease: "expo.out",
                      opacity: 0,
                    });
                },
                dispSlider: function () {
                  oe.p8.to(t.current, {
                    duration: 0.3,
                    ease: "expo.out",
                    width: "29px",
                    height: "29px",
                  }),
                    oe.p8.to(r.current, {
                      duration: 0.3,
                      ease: "expo.out",
                      width: "0px",
                      height: "0px",
                    }),
                    oe.p8.to(o.current, {
                      duration: 0.3,
                      ease: "expo.out",
                      opacity: 0,
                    }),
                    oe.p8.to(a.current, {
                      duration: 0.3,
                      ease: "expo.out",
                      opacity: 1,
                    });
                },
                dispMedium: function () {
                  oe.p8.to(t.current, {
                    duration: 0.3,
                    ease: "expo.out",
                    width: "45px",
                    height: "45px",
                  }),
                    oe.p8.to(r.current, {
                      duration: 0.3,
                      ease: "expo.out",
                      width: "6px",
                      height: "6px",
                    }),
                    oe.p8.to(o.current, {
                      duration: 0.3,
                      ease: "expo.out",
                      opacity: 0,
                    }),
                    oe.p8.to(a.current, {
                      duration: 0.3,
                      ease: "expo.out",
                      opacity: 0,
                    });
                },
                dispSmall: function () {
                  oe.p8.to(t.current, {
                    duration: 0.3,
                    ease: "expo.out",
                    width: "29px",
                    height: "29px",
                  }),
                    oe.p8.to(r.current, {
                      duration: 0.3,
                      ease: "expo.out",
                      width: "6px",
                      height: "6px",
                    }),
                    oe.p8.to(o.current, {
                      duration: 0.3,
                      ease: "expo.out",
                      opacity: 0,
                    }),
                    oe.p8.to(a.current, {
                      duration: 0.3,
                      ease: "expo.out",
                      opacity: 0,
                    });
                },
              };
            }),
            (0, i.jsxs)("div", {
              className: "".concat(Ke().mouseFollower, " ", "cursor"),
              ref: t,
              children: [
                (0, i.jsx)("div", { className: Ke().dot, ref: r }),
                (0, i.jsx)("div", {
                  className: Ke().label,
                  ref: o,
                  children: "Enter",
                }),
                (0, i.jsxs)("div", {
                  className: Ke().arrow,
                  ref: a,
                  children: [
                    (0, i.jsx)("svg", {
                      fill: "#fff",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 9 10.39",
                      children: (0, i.jsx)("path", {
                        d: "M0,5.2L9,0V10.39L0,5.2Z",
                      }),
                    }),
                    (0, i.jsx)("svg", {
                      fill: "#fff",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 9 10.39",
                      children: (0, i.jsx)("path", {
                        d: "M0,5.2L9,0V10.39L0,5.2Z",
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        ke = t(7160),
        Le = t.n(ke);
      function Be(e, n, t, r, o, i, s) {
        try {
          var a = e[i](s),
            u = a.value;
        } catch (c) {
          return void t(c);
        }
        a.done ? n(u) : Promise.resolve(u).then(r, o);
      }
      H()(
        function () {
          return t.e(125).then(t.bind(t, 3125));
        },
        {
          loadableGenerated: {
            webpack: function () {
              return [3125];
            },
          },
          ssr: !1,
        }
      );
      var Ve = {
        sliderA: { val0: 1, val1: 0.5, val2: 1 },
        sliderB: { val0: 0, val1: 0.5, val2: 1 },
        sliderC: { val0: 1, val1: 2.2, val2: 1 },
        pointIcon: { display: !1 },
        transition: {
          isSplash: !0,
          isZoom: !1,
          isZoomEnd: !1,
          isAbout: !1,
          isVideoLoaded: !1,
        },
      };
      function Fe() {
        var e = (0, l.z)(V.Xs, "/lut.txt");
        return W.tq ? null : (0, i.jsx)(B.Bt, { lut: e });
      }
      var He = (0, s.createContext)(Ve),
        We = function () {
          var e = function () {
              return W.tq
                ? null
                : (0, i.jsx)(B.dp, {
                    kernelSize: 3,
                    luminanceThreshold: 0,
                    luminanceSmoothing: 0.4,
                    intensity: R ? 1 : 0,
                  });
            },
            n = function () {
              return W.tq
                ? null
                : (0, i.jsx)(B.dp, {
                    kernelSize: V.DD.HUGE,
                    luminanceThreshold: 0,
                    luminanceSmoothing: 0,
                    intensity: 0.5,
                  });
            },
            t = (0, s.useState)(0),
            r = t[0],
            a = t[1],
            l = (0, s.useState)(!1),
            p = l[0],
            f = l[1],
            m = (0, s.useState)(2),
            x = (m[0], m[1]);
          (0, s.useEffect)(function () {
            var e;
            W.tq && x(1),
              ((e = o().mark(function e() {
                var n;
                return o().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), (0, Z.M)();
                      case 2:
                        (n = e.sent), a(n.tier), 0 == n.tier && (f(!0), x(0));
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })),
              function () {
                var n = this,
                  t = arguments;
                return new Promise(function (r, o) {
                  var i = e.apply(n, t);
                  function s(e) {
                    Be(i, r, o, s, a, "next", e);
                  }
                  function a(e) {
                    Be(i, r, o, s, a, "throw", e);
                  }
                  s(void 0);
                });
              })();
          }, []);
          var h = (0, s.useRef)({}),
            g = (0, s.useRef)(null),
            j = ((0, s.useRef)(null), (0, s.useState)(!1)),
            v = j[0],
            y = j[1],
            _ = (0, b.useSpring)({ opacity: v ? 1 : 0 }),
            w = (0, s.useRef)(null),
            S = (0, s.useRef)(null),
            C = (0, s.useRef)(null),
            N = (0, s.useRef)(null),
            E = (0, s.useRef)(null),
            O = (0, s.useRef)(null),
            M = (0, s.useRef)(null),
            D = (0, s.useRef)(null),
            q = (0, s.useRef)(null),
            P = (0, s.useRef)(!1),
            I = (0, s.useRef)(null),
            A = (0, s.useState)(!0),
            R = A[0],
            K = A[1],
            T = (0, s.useRef)(null);
          return (
            (0, s.useEffect)(function () {
              window.scrollTo(0, 1);
            }, []),
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsxs)("div", {
                  id: "container",
                  className: Le().container,
                  ref: T,
                  children: [
                    (0, i.jsxs)(u(), {
                      children: [
                        (0, i.jsx)("meta", { charSet: "UTF-8" }),
                        (0, i.jsx)("link", {
                          rel: "apple-touch-icon",
                          sizes: "180x180",
                          href: "/assets/apple-touch-icon.png",
                        }),
                        (0, i.jsx)("link", {
                          rel: "icon",
                          type: "image/png",
                          sizes: "32x32",
                          href: "/assets/favicon-32x32.png",
                        }),
                        (0, i.jsx)("link", {
                          rel: "icon",
                          type: "image/png",
                          sizes: "16x16",
                          href: "/assets/favicon-16x16.png",
                        }),
                        (0, i.jsx)("link", {
                          rel: "manifest",
                          href: "/assets/site.webmanifest",
                        }),
                        (0, i.jsx)("link", {
                          rel: "mask-icon",
                          href: "/assets/safari-pinned-tab.svg",
                          color: "#000000",
                        }),
                        (0, i.jsx)("meta", {
                          name: "theme-color",
                          content: "#000000",
                        }),
                        (0, i.jsx)("meta", {
                          property: "og:type",
                          content: "website",
                        }),
                        (0, i.jsx)("meta", {
                          property: "og:image",
                          content: "/assets/ogp.jpg",
                        }),
                        (0, i.jsx)("meta", {
                          property: "og:image:width",
                          content: "1280px",
                        }),
                        (0, i.jsx)("meta", {
                          property: "og:image:height",
                          content: "720px",
                        }),
                        (0, i.jsx)("title", {
                          children: "JDOG Media | Simulator",
                        }),
                        (0, i.jsx)("meta", {
                          name: "description",
                          content: "JDOG MEDIA",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(c.Xz, {
                      ref: w,
                      camera: {
                        fov: 80,
                        position: [
                          24.682166724477618, 151.08654013835573,
                          159.87200417587854,
                        ],
                        quaternion: [
                          -0.3052573070623509, 0.05882724215032874,
                          0.018897337906766037, 0.9502632386271005,
                        ],
                        far: 1e4,
                        near: 1.5,
                      },
                      dpr: r > 0 ? [1, 1.5] : 1,
                      gl: {
                        alpha: !1,
                        antialias: !1,
                        preserveDrawingBuffer: !0,
                      },
                      children: [
                        (0, i.jsx)("fog", {
                          attach: "fog",
                          args: ["#000000", 0.01, 500],
                        }),
                        (0, i.jsx)("ambientLight", { intensity: 10 }),
                        (0, i.jsx)(s.Suspense, {
                          fallback: null,
                          children: (0, i.jsx)(L, {
                            changePattern: S,
                            cameraDefaultAngle: C,
                            cameraStart: N,
                            cursor: h,
                            toggleAudio: E,
                            toggleDefaultAngle: O,
                            zoomRef: P,
                            isNight: R,
                            containerRef: T,
                            captureImage: q,
                            toggleCapture: M,
                            toggleVideo: D,
                          }),
                        }),
                        (0, i.jsx)(d.qA, { files: "/potsdamer_platz_1k.hdr" }),
                        !p &&
                          (0, i.jsxs)(B.xC, {
                            multisampling: 4,
                            children: [
                              (0, i.jsx)(Fe, {}),
                              (0, i.jsx)(B.k, {}),
                              (0, i.jsx)(B.lZ, {
                                blendFunction: V.YQ.NORMAL,
                                adaptive: !0,
                                resolution: 256,
                                middleGrey: R ? 199 : 5,
                                maxLuminance: 100,
                                averageLuminance: 1,
                                adaptationRate: 12,
                              }),
                              (0, i.jsx)(e, {}),
                              (0, i.jsx)(n, {}),
                              (0, i.jsx)(B.sY, {
                                eskil: !1,
                                offset: 0.1,
                                darkness: 0.95,
                              }),
                            ],
                          }),
                        p &&
                          (0, i.jsxs)(B.xC, {
                            multisampling: 4,
                            children: [
                              (0, i.jsx)(B.k, {}),
                              (0, i.jsx)(B.sY, {
                                eskil: !1,
                                offset: 0.1,
                                darkness: 0.95,
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)(b.animated.div, {
                  style: _,
                  children: [
                    (0, i.jsx)(ce, { aboutRef: I, context: He, cursor: h }),
                    (0, i.jsx)(ne, { aboutRef: I, context: He, cursor: h }),
                    (0, i.jsx)(pe, { context: He, cursor: h }),
                    (0, i.jsx)(xe, { cursor: h, toggleAudio: E, context: He }),
                    (0, i.jsx)(je, { context: He, cursor: h, setNight: K }),
                    (0, i.jsx)(be, {
                      captureImage: q,
                      cursor: h,
                      toggleCapture: M,
                    }),
                    (0, i.jsx)(Ae, {
                      changePattern: S,
                      cameraDefaultAngle: C,
                      cursor: h,
                      toggleDefaultAngle: O,
                      toggleCapture: M,
                      zoomRef: P,
                      toggleVideo: D,
                    }),
                  ],
                }),
                (0, i.jsx)(Y, {
                  splashRef: g,
                  cameraStart: N,
                  showHUD: function () {
                    y(!0);
                  },
                  context: He,
                  cursor: h,
                  toggleAudio: E,
                }),
                (0, i.jsx)(Te, { ref: h }),
              ],
            })
          );
        };
    },
    9825: function (e) {
      e.exports = {
        container: "About_container__rRFE8",
        path: "About_path__ptJUV",
        col2: "About_col2__M7_0n",
        col3: "About_col3__roadd",
        innerContainer: "About_innerContainer__FJBE_",
        col1: "About_col1__9VqSi",
        close: "About_close__Wk1zR",
        button: "About_button__zD9iF",
        anchor: "About_anchor__fflMz",
        social: "About_social__lcSTC",
        title: "About_title__mGjZR",
        columnsContainer: "About_columnsContainer__5zSTv",
        columnsWrapper: "About_columnsWrapper__yCI5A",
      };
    },
    4465: function (e) {
      e.exports = {
        button: "Button_button__HxzDS",
        border: "Button_border__b_yTN",
        text: "Button_text__zLCn6",
        buttonType: "Button_buttonType__pkANp",
        buttonDefaultAngle: "Button_buttonDefaultAngle__NoszL",
        borderDefaultAngle: "Button_borderDefaultAngle__DM9q3",
        bg: "Button_bg__4jSzI",
        bgDefaultAngle: "Button_bgDefaultAngle__PXoHB",
      };
    },
    9909: function (e) {
      e.exports = {
        container: "ButtonAudio_container__Ax5KX",
        button: "ButtonAudio_button__Fr3Z8",
        wrapper: "ButtonAudio_wrapper__b42aX",
      };
    },
    2512: function (e) {
      e.exports = {
        container: "ButtonCapture_container__QAS2F",
        button: "ButtonCapture_button__7IDKA",
        border: "ButtonCapture_border__WVLQy",
        bg: "ButtonCapture_bg__Hy4BY",
        text: "ButtonCapture_text__v2SxR",
        strobe: "ButtonCapture_strobe__I32my",
        path: "ButtonCapture_path__7fx5s",
      };
    },
    3217: function (e) {
      e.exports = {
        container: "ButtonDayNight_container__LKECd",
        wrapper: "ButtonDayNight_wrapper__17Pf3",
        button: "ButtonDayNight_button__ygSrO",
        border: "ButtonDayNight_border__OPh4N",
        bg: "ButtonDayNight_bg__dNXOI",
        sun: "ButtonDayNight_sun__XcbuZ",
        moon: "ButtonDayNight_moon__bEQiF",
      };
    },
    3695: function (e) {
      e.exports = {
        container: "Header_container__B90GU",
        about: "Header_about__7Nz8d",
      };
    },
    7160: function (e) {
      e.exports = {
        container: "Home_container__bCOhY",
        ui: "Home_ui__7GygQ",
        hooksMain: "Home_hooksMain__jYIs8",
      };
    },
    1136: function (e) {
      e.exports = {
        mouseFollower: "MouseFollower_mouseFollower__xV9cD",
        dot: "MouseFollower_dot__kDHMs",
        label: "MouseFollower_label__lFr_G",
        arrow: "MouseFollower_arrow__xklmb",
      };
    },
    6512: function (e) {
      e.exports = {
        container: "Panel_container__OE4Nk",
        buttonTitle: "Panel_buttonTitle__me_UY",
        buttons: "Panel_buttons__dPTiz",
        slidersContainer: "Panel_slidersContainer__1y8_u",
        sliderContainer: "Panel_sliderContainer__OgSrO",
        sliderTitle: "Panel_sliderTitle__9udoZ",
        sliderWrapper: "Panel_sliderWrapper__S7Uj0",
        sliderOn: "Panel_sliderOn__Wg0HV",
        sliderOff: "Panel_sliderOff__pvtyH",
        sliderOffset: "Panel_sliderOffset__Aadk2",
      };
    },
    1957: function (e) {
      e.exports = {
        container: "Place_container__PpAWu",
        wrapper: "Place_wrapper__zpSvY",
        text: "Place_text__Wblgb",
      };
    },
    3529: function (e) {
      e.exports = {
        container: "PointIcon_container__vl_Vl",
        c1: "PointIcon_c1__IxXvz",
        anim: "PointIcon_anim__a9eYq",
        c2: "PointIcon_c2__cO2WJ",
        c3: "PointIcon_c3__RBsU5",
        wrapper: "PointIcon_wrapper__KclJA",
        dot: "PointIcon_dot__BbRQt",
        circle: "PointIcon_circle__B9h73",
      };
      counter++;
    },
    4382: function (e) {
      e.exports = {
        container: "Splash_container__rgt_3",
        title: "Splash_title__3blBW",
        trailsText: "Splash_trailsText__vn9wj",
        line: "Splash_line__MRBcy",
        text: "Splash_text__NTcOd",
        wrapper: "Splash_wrapper__ZnKXB",
        start: "Splash_start__MjuTy",
      };
    },
  },
  function (e) {
    e.O(0, [737, 444, 395, 774, 888, 179], function () {
      return (n = 8312), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
//# sourceMappingURL=index-ce58378e64a42ee1.js.map
