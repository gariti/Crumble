;(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([
  [0],
  {
    195: function (e, a, t) {
      'use strict'
      t.r(a)
      t(157)
      var r = t(1),
        i = t.n(r),
        n = t(138),
        o = t(23),
        c = t.n(o),
        s = t(228),
        d = t(224),
        l = t(231),
        p = (t(117), t(131), t(41)),
        b = t(26),
        x = t(47),
        m = t(7),
        g = t(17),
        h = t.p + 'static/media/pizzaOven.455ba773.jpg',
        j = t(221),
        u = Object(g.a)(function (e) {
          return {
            root: {
              borderRadius: 0,
              fontWeight: e.typography.fontWeightMedium,
              fontFamily: e.typography.fontFamilySecondary,
              padding: e.spacing(2, 4),
              fontSize: e.typography.pxToRem(14),
              boxShadow: 'none',
              '&:active, &:focus': { boxShadow: 'none' },
            },
            sizeSmall: {
              padding: e.spacing(1, 3),
              fontSize: e.typography.pxToRem(13),
            },
            sizeLarge: {
              padding: e.spacing(2, 5),
              fontSize: e.typography.pxToRem(16),
            },
          }
        })(j.a),
        f = t(11),
        O = t(199),
        v = t(19),
        y = t(4),
        k = ['children', 'classes', 'marked', 'variant'],
        w = {
          h1: 'h1',
          h2: 'h1',
          h3: 'h1',
          h4: 'h1',
          h5: 'h3',
          h6: 'h2',
          subtitle1: 'h3',
        }
      var S = Object(g.a)(function (e) {
          return {
            markedH2Center: {
              height: 4,
              width: 73,
              display: 'block',
              margin: ''.concat(e.spacing(1), 'px auto 0'),
              backgroundColor: e.palette.secondary.main,
            },
            markedH3Center: {
              height: 4,
              width: 55,
              display: 'block',
              margin: ''.concat(e.spacing(1), 'px auto 0'),
              backgroundColor: e.palette.secondary.main,
            },
            markedH4Center: {
              height: 4,
              width: 55,
              display: 'block',
              margin: ''.concat(e.spacing(1), 'px auto 0'),
              backgroundColor: e.palette.secondary.main,
            },
            markedH6Left: {
              height: 2,
              width: 28,
              display: 'block',
              marginTop: e.spacing(0.5),
              background: 'currentColor',
            },
          }
        })(function (e) {
          var a = e.children,
            t = e.classes,
            r = e.marked,
            i = void 0 !== r && r,
            n = e.variant,
            o = Object(x.a)(e, k)
          return Object(y.jsxs)(
            O.a,
            Object(f.a)(
              Object(f.a)({ variantMapping: w, variant: n }, o),
              {},
              {
                children: [
                  a,
                  i
                    ? Object(y.jsx)('span', {
                        className:
                          t['marked'.concat(Object(v.a)(n) + Object(v.a)(i))],
                      })
                    : null,
                ],
              },
            ),
          )
        }),
        N = t(222),
        C = t(12)
      var R = Object(g.a)(function (e) {
        return {
          root: Object(m.a)(
            {
              color: e.palette.common.white,
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
            },
            e.breakpoints.up('sm'),
            { height: '80vh', minHeight: 500, maxHeight: 1300 },
          ),
          container: {
            marginTop: e.spacing(3),
            marginBottom: e.spacing(14),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
          backdrop: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: e.palette.common.black,
            opacity: 0.5,
            zIndex: -1,
          },
          background: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            zIndex: -2,
          },
          arrowDown: { position: 'absolute', bottom: e.spacing(4) },
        }
      })(function (e) {
        var a = e.backgroundClassName,
          t = e.children,
          r = e.classes
        return Object(y.jsx)('section', {
          className: r.root,
          children: Object(y.jsxs)(N.a, {
            className: r.container,
            children: [
              t,
              Object(y.jsx)('div', { className: r.backdrop }),
              Object(y.jsx)('div', { className: Object(C.a)(r.background, a) }),
              Object(y.jsx)('img', {
                className: r.arrowDown,
                src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAQCAYAAAAiYZ4HAAAAh0lEQVR4AWLABv4fLPwAwtjkaKdhVANQkpWQBiCfBcYIAtA9BxgAAlEQQG17kESdqFsFBUFQtwpQYu8Q8Jth4vssHpo/IwsntLUBb+qM/NjB4IYuDpjBpc7BILvRA4MG1CszdfL/ywSbDgVeKcx0a+LDE6xgnrLku3E0u/JSLYfhBN86sckBAK4Z2n3Yn7jWAAAAAElFTkSuQmCC',
                height: '16',
                width: '12',
                alt: 'arrow down',
              }),
            ],
          }),
        })
      })
      var A = Object(g.a)(function (e) {
          return {
            background: {
              backgroundImage: 'url('.concat(h, ')'),
              backgroundColor: '#7fc7d9',
              backgroundPosition: 'center',
            },
            button: { minWidth: 200 },
            h5: Object(m.a)(
              { marginBottom: e.spacing(4), marginTop: e.spacing(4) },
              e.breakpoints.up('sm'),
              { marginTop: e.spacing(10) },
            ),
            more: { marginTop: e.spacing(2) },
          }
        })(function (e) {
          var a = e.classes
          return Object(y.jsxs)(R, {
            backgroundClassName: a.background,
            children: [
              Object(y.jsx)('img', {
                style: { display: 'none' },
                src: h,
                alt: 'increase priority',
              }),
              Object(y.jsx)(S, {
                color: 'inherit',
                align: 'center',
                variant: 'h2',
                marked: 'center',
                children: 'Welcome',
              }),
              Object(y.jsx)(S, {
                color: 'inherit',
                align: 'center',
                variant: 'h5',
                className: a.h5,
                children:
                  'Souk is a place to find amazing food in your neighborhood at the lowest price possible. We do not take a slice of the profits from your order, so both you and your local businesses can afford it.',
              }),
              Object(y.jsx)(u, {
                color: 'secondary',
                variant: 'contained',
                size: 'large',
                className: a.button,
                component: 'a',
                href: '/login',
                children: "Let's eat!",
              }),
              Object(y.jsx)(S, {
                variant: 'body2',
                color: 'inherit',
                className: a.more,
                children: 'Support independant eateries!',
              }),
            ],
          })
        }),
        F = t(223),
        W = t.p + 'static/media/map.c846adaa.svg',
        L = t.p + 'static/media/order.0af0de3e.svg',
        z = t.p + 'static/media/walk.a0de33ab.svg'
      var q = Object(g.a)(function (e) {
          return {
            root: {
              display: 'flex',
              backgroundColor: e.palette.secondary.light,
              overflow: 'hidden',
            },
            container: {
              marginTop: e.spacing(10),
              marginBottom: e.spacing(15),
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            },
            item: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: e.spacing(0, 5),
            },
            title: { marginBottom: e.spacing(14) },
            number: {
              fontSize: 24,
              fontFamily: e.typography.fontFamily,
              color: e.palette.secondary.main,
              fontWeight: e.typography.fontWeightMedium,
            },
            image: {
              height: 55,
              marginTop: e.spacing(4),
              marginBottom: e.spacing(4),
            },
            curvyLines: {
              pointerEvents: 'none',
              position: 'absolute',
              top: -180,
              opacity: 0.7,
            },
            button: { marginTop: e.spacing(8) },
          }
        })(function (e) {
          var a = e.classes
          return Object(y.jsx)('section', {
            className: a.root,
            children: Object(y.jsxs)(N.a, {
              className: a.container,
              children: [
                Object(y.jsx)('img', {
                  src: '/static/themes/onepirate/productCurvyLines.png',
                  className: a.curvyLines,
                  alt: 'curvy lines',
                }),
                Object(y.jsx)(S, {
                  variant: 'h4',
                  marked: 'center',
                  className: a.title,
                  component: 'h2',
                  children: 'How it works',
                }),
                Object(y.jsx)('div', {
                  children: Object(y.jsxs)(F.a, {
                    container: !0,
                    spacing: 5,
                    children: [
                      Object(y.jsx)(F.a, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: Object(y.jsxs)('div', {
                          className: a.item,
                          children: [
                            Object(y.jsx)('div', {
                              className: a.number,
                              children: '1.',
                            }),
                            Object(y.jsx)('img', {
                              src: W,
                              alt: 'suitcase',
                              className: a.image,
                            }),
                            Object(y.jsx)(S, {
                              variant: 'h5',
                              align: 'center',
                              children: 'Search for tasty things in your area',
                            }),
                          ],
                        }),
                      }),
                      Object(y.jsx)(F.a, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: Object(y.jsxs)('div', {
                          className: a.item,
                          children: [
                            Object(y.jsx)('div', {
                              className: a.number,
                              children: '2.',
                            }),
                            Object(y.jsx)('img', {
                              src: L,
                              alt: 'graph',
                              className: a.image,
                            }),
                            Object(y.jsx)(S, {
                              variant: 'h5',
                              align: 'center',
                              children:
                                'Place your order for take out or delivery',
                            }),
                          ],
                        }),
                      }),
                      Object(y.jsx)(F.a, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: Object(y.jsxs)('div', {
                          className: a.item,
                          children: [
                            Object(y.jsx)('div', {
                              className: a.number,
                              children: '3.',
                            }),
                            Object(y.jsx)('img', {
                              src: z,
                              alt: 'clock',
                              className: a.image,
                            }),
                            Object(y.jsx)(S, {
                              variant: 'h5',
                              align: 'center',
                              children:
                                'Pick up your order or wait for delivery',
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          })
        }),
        B = t(20),
        I = t(139),
        E = Object(I.a)({
          apiKey: 'AIzaSyBqgNE_e8Mw7phwStCvKu85mHfdY0-5ylI',
          authDomain: 'souk-6a5e8.firebaseapp.com',
          databaseURL: 'https://souk-6a5e8.firebaseio.com',
          projectId: 'souk-6a5e8',
          storageBucket: 'souk-6a5e8.appspot.com',
          messagingSenderId: '294153288309',
        }),
        T = i.a.createContext(),
        H = function (e) {
          var a = e.children,
            t = Object(r.useState)(null),
            i = Object(B.a)(t, 2),
            n = i[0],
            o = i[1]
          return (
            Object(r.useEffect)(function () {
              E.auth().onAuthStateChanged(o)
            }, []),
            Object(y.jsx)(T.Provider, { value: { authUser: n }, children: a })
          )
        }
      var P = Object(b.g)(function () {
          return Object(r.useContext)(T).authUser
            ? Object(y.jsx)(b.a, { to: '/' })
            : Object(y.jsxs)(y.Fragment, {
                children: [Object(y.jsx)(A, {}), Object(y.jsx)(q, {})],
              })
        }),
        $ = ['component'],
        D = function (e) {
          var a = e.component,
            t = Object(x.a)(e, $),
            i = Object(r.useContext)(T).authUser ? a : P
          return Object(y.jsx)(b.b, { path: t.path, component: i })
        },
        U = t(107),
        Q = t(108),
        G = t(106),
        M = t(143),
        Y = Object(M.a)({
          palette: {
            primary: { light: '#69696a', main: '#28282a', dark: '#1e1e1f' },
            secondary: { light: '#fff5f8', main: '#ff3366', dark: '#e62958' },
            warning: { main: '#ffc071', dark: '#ffb25e' },
            error: { xLight: U.a[50], main: U.a[500], dark: U.a[700] },
            success: { xLight: Q.a[50], main: Q.a[500], dark: Q.a[700] },
          },
          typography: {
            fontFamily: "'Work Sans', sans-serif",
            fontSize: 14,
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 700,
            fontFamilySecondary: "'Roboto Condensed', sans-serif",
          },
        }),
        V = {
          color: Y.palette.text.primary,
          fontWeight: Y.typography.fontWeightMedium,
          fontFamily: Y.typography.fontFamilySecondary,
          textTransform: 'uppercase',
        },
        Z = Object(f.a)(
          Object(f.a)({}, Y),
          {},
          {
            palette: Object(f.a)(
              Object(f.a)({}, Y.palette),
              {},
              {
                background: Object(f.a)(
                  Object(f.a)({}, Y.palette.background),
                  {},
                  { default: Y.palette.common.white, placeholder: G.a[200] },
                ),
              },
            ),
            typography: Object(f.a)(
              Object(f.a)({}, Y.typography),
              {},
              {
                fontHeader: V,
                h1: Object(f.a)(
                  Object(f.a)(Object(f.a)({}, Y.typography.h1), V),
                  {},
                  { letterSpacing: 0, fontSize: 60 },
                ),
                h2: Object(f.a)(
                  Object(f.a)(Object(f.a)({}, Y.typography.h2), V),
                  {},
                  { fontSize: 48 },
                ),
                h3: Object(f.a)(
                  Object(f.a)(Object(f.a)({}, Y.typography.h3), V),
                  {},
                  { fontSize: 42 },
                ),
                h4: Object(f.a)(
                  Object(f.a)(Object(f.a)({}, Y.typography.h4), V),
                  {},
                  { fontSize: 36 },
                ),
                h5: Object(f.a)(
                  Object(f.a)({}, Y.typography.h5),
                  {},
                  { fontSize: 20, fontWeight: Y.typography.fontWeightLight },
                ),
                h6: Object(f.a)(
                  Object(f.a)(Object(f.a)({}, Y.typography.h6), V),
                  {},
                  { fontSize: 18 },
                ),
                subtitle1: Object(f.a)(
                  Object(f.a)({}, Y.typography.subtitle1),
                  {},
                  { fontSize: 18 },
                ),
                body1: Object(f.a)(
                  Object(f.a)({}, Y.typography.body2),
                  {},
                  { fontWeight: Y.typography.fontWeightRegular, fontSize: 16 },
                ),
                body2: Object(f.a)(
                  Object(f.a)({}, Y.typography.body1),
                  {},
                  { fontSize: 14 },
                ),
              },
            ),
          },
        ),
        K = t(225),
        J = t(227),
        _ = t(226),
        X = t(141),
        ee = t.n(X),
        ae = Object(d.a)(function (e) {
          return {
            root: { flexGrow: 1 },
            menuButton: { marginRight: e.spacing(2) },
            title: { flexGrow: 1 },
          }
        })
      var te = function () {
          var e = ae()
          return Object(y.jsx)(K.a, {
            position: 'static',
            children: Object(y.jsxs)(_.a, {
              children: [
                Object(y.jsx)(J.a, {
                  edge: 'start',
                  className: e.menuButton,
                  color: 'inherit',
                  'aria-label': 'menu',
                  children: Object(y.jsx)(ee.a, {}),
                }),
                Object(y.jsx)(p.a, {
                  to: '/login',
                  children: Object(y.jsx)(j.a, {
                    varient: 'contained',
                    color: 'secondary',
                    children: 'Login',
                  }),
                }),
              ],
            }),
          })
        },
        re = i.a.createContext(),
        ie = function (e) {
          var a = e.children,
            t = Object(r.useState)({ data: null, loading: !0, docRef: null }),
            i = Object(B.a)(t, 2),
            n = i[0],
            o = i[1],
            c = Object(r.useContext)(T).authUser
          return (
            Object(r.useEffect)(
              function () {
                c &&
                  o(
                    Object(f.a)(
                      Object(f.a)({}, n),
                      {},
                      { docRef: E.firestore().collection('users').doc(c.uid) },
                    ),
                  )
              },
              [c],
            ),
            Object(r.useEffect)(
              function () {
                n.docRef &&
                  n.docRef.get().then(function (e) {
                    o(
                      Object(f.a)(
                        Object(f.a)({}, n),
                        {},
                        {
                          data: Object(f.a)(
                            Object(f.a)({}, e.data()),
                            {},
                            {
                              uid: c.uid,
                              email: c.email,
                              emailVerified: c.emailVerified,
                            },
                          ),
                          loading: !1,
                        },
                      ),
                    )
                  })
              },
              [n.docRef],
            ),
            Object(y.jsx)(re.Provider, {
              value: { user: n, setUser: o },
              children: a,
            })
          )
        },
        ne = t(0),
        oe = t.n(ne),
        ce = t(2),
        se = t(234),
        de = t(200),
        le = t(232),
        pe = t(71),
        be = t.n(pe),
        xe = t(233),
        me = t.p + 'static/media/buffet.39fef2c0.jpg',
        ge = t(70),
        he = Object(d.a)(function (e) {
          return {
            avatar: {
              backgroundColor: e.palette.secondary.main,
              margin: e.spacing(1),
            },
            form: { marginTop: e.spacing(1), width: '100%' },
            image: {
              backgroundColor:
                'light' === e.palette.type
                  ? e.palette.grey[50]
                  : e.palette.grey[900],
              backgroundImage: 'url('.concat(me, ')'),
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            },
            paper: {
              color: e.palette.text.secondary,
              padding: e.spacing(2),
              textAlign: 'center',
            },
            root: { flexGrow: 1, height: '100vh' },
            submit: { margin: e.spacing(3, 0, 2) },
          }
        })
      var je = Object(b.g)(function () {
        var e = he(),
          a = Object(r.useContext)(re),
          t = a.user,
          i = a.setUser,
          n = Object(b.f)(),
          o = Object(r.useState)(!0),
          c = Object(B.a)(o, 2),
          d = c[0],
          l = c[1],
          p = Object(ge.a)({
            defaultValues: {
              address: '',
              bio: '',
              firstName: '',
              lastName: '',
              nickname: '',
            },
            mode: 'onBlur',
          }),
          x = p.register,
          m = p.handleSubmit,
          g = p.errors,
          h = p.reset
        Object(r.useEffect)(
          function () {
            t.loading || (l(t.loading), h(t.data))
          },
          [t, h],
        )
        var u = (function () {
          var e = Object(ce.a)(
            oe.a.mark(function e(a) {
              var r
              return oe.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = Object(f.a)(Object(f.a)({}, t.data), a)),
                        (e.next = 3),
                        t.docRef.update(Object(f.a)({}, r)).catch(function (e) {
                          console.error('Error updating document:', e)
                        })
                      )
                    case 3:
                      i(Object(f.a)(Object(f.a)({}, t), {}, { data: r })),
                        console.log('Document updated:', t.docRef.id),
                        n.push('/profile')
                    case 6:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            }),
          )
          return function (a) {
            return e.apply(this, arguments)
          }
        })()
        return (
          !d &&
          Object(y.jsx)('div', {
            className: e.root,
            children: Object(y.jsxs)(F.a, {
              container: !0,
              component: 'main',
              className: e.root,
              children: [
                Object(y.jsx)(s.a, {}),
                Object(y.jsx)(F.a, {
                  item: !0,
                  xs: !1,
                  sm: 4,
                  md: 7,
                  className: e.image,
                }),
                Object(y.jsx)(F.a, {
                  item: !0,
                  xs: 12,
                  sm: 8,
                  md: 5,
                  component: de.a,
                  elevation: 6,
                  square: !0,
                  children: Object(y.jsxs)('div', {
                    className: e.paper,
                    children: [
                      Object(y.jsx)(se.a, {
                        className: e.avatar,
                        children: Object(y.jsx)(be.a, {}),
                      }),
                      Object(y.jsx)(O.a, {
                        component: 'h1',
                        variant: 'h5',
                        children: 'Join Your Community!',
                      }),
                      Object(y.jsx)(O.a, {
                        component: 'h5',
                        variant: 'subtitle1',
                        children:
                          'Please provide a little bit more about yourself so others can get to know you.',
                      }),
                      Object(y.jsx)('form', {
                        className: e.form,
                        onSubmit: m(u),
                        children: Object(y.jsxs)(F.a, {
                          container: !0,
                          spacing: 1,
                          children: [
                            Object(y.jsxs)(F.a, {
                              item: !0,
                              xs: 4,
                              children: [
                                Object(y.jsx)(O.a, { children: 'First Name:' }),
                                Object(y.jsx)(le.a, {
                                  variant: 'outlined',
                                  margin: 'normal',
                                  name: 'firstName',
                                  inputRef: x({
                                    maxLength: 60,
                                    minLength: 2,
                                    pattern: /^[a-z]+$/i,
                                    required: !0,
                                  }),
                                }),
                              ],
                            }),
                            g.firstName &&
                              'required' === g.firstName.type &&
                              Object(y.jsx)(xe.a, {
                                severity: 'error',
                                children: 'First Name is required',
                              }),
                            g.firstName &&
                              'minLength' === g.firstName.type &&
                              Object(y.jsx)(xe.a, {
                                severity: 'error',
                                children:
                                  'First name must be at least 2 characters',
                              }),
                            g.firstName &&
                              'pattern' === g.firstName.type &&
                              Object(y.jsx)(xe.a, {
                                severity: 'error',
                                children: 'First name must be letters only',
                              }),
                            Object(y.jsxs)(F.a, {
                              item: !0,
                              xs: 4,
                              children: [
                                Object(y.jsx)(O.a, { children: 'Last Name:' }),
                                Object(y.jsx)(le.a, {
                                  variant: 'outlined',
                                  margin: 'normal',
                                  name: 'lastName',
                                  inputRef: x({
                                    minLength: 2,
                                    pattern: /^[a-z]+$/i,
                                    required: !0,
                                  }),
                                }),
                              ],
                            }),
                            g.lastName &&
                              'required' === g.lastName.type &&
                              Object(y.jsx)(xe.a, {
                                severity: 'error',
                                children: 'Last name is required',
                              }),
                            g.lastName &&
                              'minLength' === g.lastName.type &&
                              Object(y.jsx)(xe.a, {
                                severity: 'error',
                                children:
                                  'Last name must be at least 2 characters',
                              }),
                            g.lastName &&
                              'pattern' === g.lastName.type &&
                              Object(y.jsx)(xe.a, {
                                severity: 'error',
                                children: 'Last name must be letters only',
                              }),
                            Object(y.jsxs)(F.a, {
                              item: !0,
                              xs: 4,
                              children: [
                                Object(y.jsx)(O.a, { children: 'Nickname:' }),
                                Object(y.jsx)(le.a, {
                                  variant: 'outlined',
                                  margin: 'normal',
                                  name: 'nickname',
                                  inputRef: x({ required: !1 }),
                                }),
                                g.nickname &&
                                  'minLength' === g.nickname.type &&
                                  Object(y.jsx)(xe.a, {
                                    severity: 'error',
                                    children:
                                      'Last name must be at least 2 characters',
                                  }),
                              ],
                            }),
                            Object(y.jsxs)(F.a, {
                              item: !0,
                              xs: 12,
                              children: [
                                Object(y.jsx)(O.a, {
                                  children: 'Street Address:',
                                }),
                                Object(y.jsx)(le.a, {
                                  variant: 'outlined',
                                  margin: 'normal',
                                  name: 'address1',
                                  inputRef: x({ required: !1 }),
                                }),
                              ],
                            }),
                            g.address1 &&
                              'minLength' === g.address1.type &&
                              Object(y.jsx)(xe.a, {
                                severity: 'error',
                                children: 'Address must be valid',
                              }),
                            Object(y.jsxs)(F.a, {
                              item: !0,
                              xs: 12,
                              children: [
                                Object(y.jsx)(O.a, {
                                  children: 'Street Address Line 2:',
                                }),
                                Object(y.jsx)(le.a, {
                                  variant: 'outlined',
                                  margin: 'normal',
                                  name: 'address2',
                                  inputRef: x({ required: !1 }),
                                }),
                              ],
                            }),
                            g.address2 &&
                              'minLength' === g.address2.type &&
                              Object(y.jsx)(xe.a, {
                                severity: 'error',
                                children: 'Address must be valid',
                              }),
                            Object(y.jsxs)(F.a, {
                              item: !0,
                              xs: 4,
                              children: [
                                Object(y.jsx)(O.a, { children: 'City' }),
                                Object(y.jsx)(le.a, {
                                  variant: 'outlined',
                                  margin: 'normal',
                                  name: 'city',
                                  inputRef: x({ required: !1 }),
                                }),
                              ],
                            }),
                            Object(y.jsxs)(F.a, {
                              item: !0,
                              xs: 4,
                              children: [
                                Object(y.jsx)(O.a, {
                                  children: 'State/Province',
                                }),
                                Object(y.jsx)(le.a, {
                                  variant: 'outlined',
                                  margin: 'normal',
                                  name: 'state',
                                  inputRef: x({ required: !1 }),
                                }),
                              ],
                            }),
                            Object(y.jsxs)(F.a, {
                              item: !0,
                              xs: 4,
                              children: [
                                Object(y.jsx)(O.a, { children: 'Postal Code' }),
                                Object(y.jsx)(le.a, {
                                  variant: 'outlined',
                                  margin: 'normal',
                                  name: 'postal',
                                  inputRef: x({
                                    maxLength: 5,
                                    minLength: 5,
                                    required: !1,
                                  }),
                                }),
                              ],
                            }),
                            Object(y.jsxs)(F.a, {
                              item: !0,
                              xs: 6,
                              children: [
                                Object(y.jsx)(O.a, { children: 'Country' }),
                                Object(y.jsx)(le.a, {
                                  variant: 'outlined',
                                  margin: 'normal',
                                  name: 'country',
                                  inputRef: x({ required: !1 }),
                                }),
                              ],
                            }),
                            Object(y.jsxs)(F.a, {
                              item: !0,
                              xs: 12,
                              children: [
                                Object(y.jsx)(O.a, { children: 'Bio:' }),
                                Object(y.jsx)(le.a, {
                                  variant: 'outlined',
                                  margin: 'normal',
                                  fullWidth: !0,
                                  name: 'bio',
                                  inputRef: x({ maxLength: 1e3, required: !1 }),
                                }),
                              ],
                            }),
                            Object(y.jsx)(F.a, {
                              item: !0,
                              xs: 'auto',
                              children: Object(y.jsx)(j.a, {
                                variant: 'contained',
                                color: 'primary',
                                type: 'submit',
                                children: 'Submit',
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          })
        )
      })
      var ue = Object(b.g)(function () {
          var e = Object(r.useContext)(re).user,
            a = Object(r.useState)(!0),
            t = Object(B.a)(a, 2),
            i = t[0],
            n = t[1]
          return (
            Object(r.useEffect)(
              function () {
                n(e.loading)
              },
              [e],
            ),
            !i &&
              Object(y.jsxs)('div', {
                children: [
                  Object(y.jsxs)('h1', {
                    children: [
                      'Welcome ',
                      e.data.firstName,
                      ', you are now logged in.',
                    ],
                  }),
                  Object(y.jsx)(p.b, {
                    to: '/editprofile',
                    children: 'Edit Profile',
                  }),
                  Object(y.jsx)('div', {
                    children: Object(y.jsx)(p.b, {
                      to: '/profile',
                      children: 'Profile',
                    }),
                  }),
                  Object(y.jsx)(j.a, {
                    variant: 'contained',
                    color: 'primary',
                    onClick: function () {
                      return E.auth().signOut()
                    },
                    children: 'Sign out',
                  }),
                ],
              })
          )
        }),
        fe = t(235),
        Oe = t(229),
        ve = t.p + 'static/media/biryani.da221a50.jpg'
      function ye() {
        return Object(y.jsxs)(O.a, {
          variant: 'body2',
          color: 'textSecondary',
          align: 'center',
          children: [
            'Copyright \xa9 ',
            Object(y.jsx)(Oe.a, {
              color: 'inherit',
              href: '/',
              children: 'Souk',
            }),
            ' ',
            new Date().getFullYear(),
            '.',
          ],
        })
      }
      var ke = Object(d.a)(function (e) {
        return {
          root: { height: '100vh' },
          image: {
            backgroundImage: 'url('.concat(ve, ')'),
            backgroundRepeat: 'no-repeat',
            backgroundColor:
              'light' === e.palette.type
                ? e.palette.grey[50]
                : e.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          },
          paper: {
            margin: e.spacing(8, 4),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
          avatar: {
            margin: e.spacing(1),
            backgroundColor: e.palette.secondary.main,
          },
          form: { width: '100%', marginTop: e.spacing(1) },
          submit: { margin: e.spacing(3, 0, 2) },
        }
      })
      var we = Object(b.g)(function () {
          var e = ke(),
            a = Object(ge.a)({ mode: 'onBlur' }),
            t = a.register,
            i = a.handleSubmit,
            n = a.errors,
            o = a.setError,
            c = Object(b.f)(),
            d = Object(r.useContext)(T).authUser,
            l = (function () {
              var e = Object(ce.a)(
                oe.a.mark(function e(a) {
                  return oe.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          E.auth()
                            .signInWithEmailAndPassword(a.email, a.password)
                            .then(function () {
                              console.log('log in success'), c.push('/')
                            })
                            .catch(function (e) {
                              o('firebase', {
                                type: 'manual',
                                message: e.message,
                              }),
                                console.error('Failed to Log in: ', e.message)
                            })
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )
              return function (a) {
                return e.apply(this, arguments)
              }
            })()
          return d
            ? Object(y.jsx)(b.a, { to: '/' })
            : Object(y.jsxs)(F.a, {
                container: !0,
                component: 'main',
                className: e.root,
                children: [
                  Object(y.jsx)(s.a, {}),
                  Object(y.jsx)(F.a, {
                    item: !0,
                    xs: !1,
                    sm: 4,
                    md: 7,
                    className: e.image,
                  }),
                  Object(y.jsx)(F.a, {
                    item: !0,
                    xs: 12,
                    sm: 8,
                    md: 5,
                    component: de.a,
                    elevation: 6,
                    square: !0,
                    children: Object(y.jsxs)('div', {
                      className: e.paper,
                      children: [
                        Object(y.jsx)(se.a, {
                          className: e.avatar,
                          children: Object(y.jsx)(be.a, {}),
                        }),
                        Object(y.jsx)(O.a, {
                          component: 'h1',
                          variant: 'h5',
                          children: 'Sign in',
                        }),
                        Object(y.jsxs)('form', {
                          className: e.form,
                          onSubmit: i(l),
                          children: [
                            Object(y.jsx)(le.a, {
                              variant: 'outlined',
                              margin: 'normal',
                              required: !0,
                              fullWidth: !0,
                              id: 'email',
                              label: 'Email Address',
                              name: 'email',
                              autoComplete: 'email',
                              autoFocus: !0,
                              inputRef: t({
                                required: !0,
                                pattern:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              }),
                            }),
                            n.email &&
                              'required' === n.email.type &&
                              Object(y.jsx)(xe.a, {
                                severity: 'error',
                                children: 'Email address is required to log in',
                              }),
                            n.email &&
                              'pattern' === n.email.type &&
                              Object(y.jsx)(xe.a, {
                                severity: 'error',
                                children: 'Email is not in a correct format',
                              }),
                            Object(y.jsx)(le.a, {
                              variant: 'outlined',
                              margin: 'normal',
                              required: !0,
                              fullWidth: !0,
                              name: 'password',
                              label: 'Password',
                              type: 'password',
                              id: 'password',
                              autoComplete: 'current-password',
                              inputRef: t({ required: !0, minLength: 6 }),
                            }),
                            n.password &&
                              'required' === n.password.type &&
                              Object(y.jsx)(xe.a, {
                                severity: 'error',
                                children: 'Password is required',
                              }),
                            n.firebase &&
                              Object(y.jsx)('p', {
                                children: n.firebase.message,
                              }),
                            Object(y.jsx)(j.a, {
                              type: 'submit',
                              fullWidth: !0,
                              variant: 'contained',
                              color: 'primary',
                              className: e.submit,
                              children: 'Sign In',
                            }),
                            Object(y.jsx)(F.a, {
                              container: !0,
                              children: Object(y.jsx)(F.a, {
                                item: !0,
                                children: Object(y.jsx)(Oe.a, {
                                  href: '/signup',
                                  variant: 'body2',
                                  children: "Don't have an account? Sign Up",
                                }),
                              }),
                            }),
                            Object(y.jsx)(fe.a, {
                              mt: 5,
                              children: Object(y.jsx)(ye, {}),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              })
        }),
        Se = t.p + 'static/media/garrettprofile.c7ed4936.jpg',
        Ne = Object(f.a)(
          Object(f.a)(
            {},
            {
              paddingRight: '15px',
              paddingLeft: '15px',
              marginRight: 'auto',
              marginLeft: 'auto',
              width: '100%',
            },
          ),
          {},
          {
            '@media (min-width: 576px)': { maxWidth: '540px' },
            '@media (min-width: 768px)': { maxWidth: '720px' },
            '@media (min-width: 992px)': { maxWidth: '960px' },
            '@media (min-width: 1200px)': { maxWidth: '1140px' },
          },
        ),
        Ce = '#9c27b0',
        Re = '#ff9800',
        Ae = '#f44336',
        Fe = '#4caf50',
        We = '#00acc1',
        Le = '#e91e63',
        ze = '#999999',
        qe =
          (Object(f.a)(
            {
              color: '#fff',
              background: 'linear-gradient(60deg, #ffa726, #fb8c00)',
            },
            {
              boxShadow:
                '0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)',
            },
          ),
          Object(f.a)(
            {
              color: '#fff',
              background: 'linear-gradient(60deg, #66bb6a, #43a047)',
            },
            {
              boxShadow:
                '0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)',
            },
          ),
          Object(f.a)(
            {
              color: '#fff',
              background: 'linear-gradient(60deg, #ef5350, #e53935)',
            },
            {
              boxShadow:
                '0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)',
            },
          ),
          Object(f.a)(
            {
              color: '#fff',
              background: 'linear-gradient(60deg, #26c6da, #00acc1)',
            },
            {
              boxShadow:
                '0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)',
            },
          ),
          Object(f.a)(
            {
              color: '#fff',
              background: 'linear-gradient(60deg, #ab47bc, #8e24aa)',
            },
            {
              boxShadow:
                '0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)',
            },
          ),
          Object(f.a)(
            {
              color: '#fff',
              background: 'linear-gradient(60deg, #ec407a, #d81b60)',
            },
            {
              boxShadow:
                '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)',
            },
          ),
          Object(f.a)(
            {
              margin: '0 20px 10px',
              paddingTop: '10px',
              borderTop: '1px solid #eeeeee',
              height: 'auto',
            },
            {
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: '300',
              lineHeight: '1.5em',
            },
          ),
          {
            color: '#3C4858',
            margin: '1.75rem 0 0.875rem',
            textDecoration: 'none',
            fontWeight: '700',
            fontFamily: '"Roboto Slab", "Times New Roman", serif',
          }),
        Be =
          (Object(f.a)(Object(f.a)({}, qe), {}, { marginTop: '.625rem' }),
          {
            imgFluid: { maxWidth: '100%', height: 'auto' },
            imgRounded: { borderRadius: '6px !important' },
            imgRoundedCircle: { borderRadius: '50% !important' },
            imgRaised: {
              boxShadow:
                '0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
            },
            imgGallery: { width: '100%', marginBottom: '2.142rem' },
            imgCardTop: {
              width: '100%',
              borderTopLeftRadius: 'calc(.25rem - 1px)',
              borderTopRightRadius: 'calc(.25rem - 1px)',
            },
            imgCardBottom: {
              width: '100%',
              borderBottomLeftRadius: 'calc(.25rem - 1px)',
              borderBottomRightRadius: 'calc(.25rem - 1px)',
            },
            imgCard: { width: '100%', borderRadius: 'calc(.25rem - 1px)' },
            imgCardOverlay: {
              position: 'absolute',
              top: '0',
              right: '0',
              bottom: '0',
              left: '0',
              padding: '1.25rem',
            },
          }),
        Ie = Object(f.a)(
          Object(f.a)(
            {
              container: Ne,
              profile: {
                textAlign: 'center',
                '& img': {
                  maxWidth: '160px',
                  width: '100%',
                  margin: '0 auto',
                  transform: 'translate3d(0, -50%, 0)',
                },
              },
              description: {
                margin: '1.071rem auto 0',
                maxWidth: '600px',
                color: '#999',
                textAlign: 'center !important',
              },
              name: { marginTop: '-80px' },
            },
            Be,
          ),
          {},
          {
            main: { background: '#FFFFFF', position: 'relative', zIndex: '3' },
            mainRaised: {
              margin: '-60px 30px 0px',
              borderRadius: '6px',
              boxShadow:
                '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
            },
            title: Object(f.a)(
              Object(f.a)({}, qe),
              {},
              {
                display: 'inline-block',
                position: 'relative',
                marginTop: '30px',
                minHeight: '32px',
                textDecoration: 'none',
              },
            ),
            socials: {
              marginTop: '0',
              width: '100%',
              transform: 'none',
              left: '0',
              top: '0',
              height: '100%',
              lineHeight: '41px',
              fontSize: '20px',
              color: '#999',
            },
            navWrapper: { margin: '20px auto 50px auto', textAlign: 'center' },
          },
        ),
        Ee = t(83),
        Te = t.n(Ee),
        He = t(142),
        Pe = {
          button: {
            minHeight: 'auto',
            minWidth: 'auto',
            backgroundColor: ze,
            color: '#FFFFFF',
            boxShadow:
              '0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)',
            border: 'none',
            borderRadius: '3px',
            position: 'relative',
            padding: '12px 30px',
            margin: '.3125rem 1px',
            fontSize: '12px',
            fontWeight: '400',
            textTransform: 'uppercase',
            letterSpacing: '0',
            willChange: 'box-shadow, transform',
            transition:
              'box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            lineHeight: '1.42857143',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            verticalAlign: 'middle',
            touchAction: 'manipulation',
            cursor: 'pointer',
            '&:hover,&:focus': {
              color: '#FFFFFF',
              backgroundColor: ze,
              boxShadow:
                '0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)',
            },
            '& .fab,& .fas,& .far,& .fal,& .material-icons': {
              position: 'relative',
              display: 'inline-block',
              top: '0',
              fontSize: '1.1rem',
              marginRight: '4px',
              verticalAlign: 'middle',
            },
            '& svg': {
              position: 'relative',
              display: 'inline-block',
              top: '0',
              width: '18px',
              height: '18px',
              marginRight: '4px',
              verticalAlign: 'middle',
            },
            '&$justIcon': {
              '& .fab,& .fas,& .far,& .fal,& .material-icons': {
                marginRight: '0px',
                position: 'absolute',
                width: '100%',
                transform: 'none',
                left: '0px',
                top: '0px',
                height: '100%',
                lineHeight: '41px',
                fontSize: '20px',
              },
            },
          },
          fullWidth: { width: '100%' },
          primary: {
            backgroundColor: Ce,
            boxShadow:
              '0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12)',
            '&:hover,&:focus': {
              backgroundColor: Ce,
              boxShadow:
                '0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)',
            },
          },
          info: {
            backgroundColor: We,
            boxShadow:
              '0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12)',
            '&:hover,&:focus': {
              backgroundColor: We,
              boxShadow:
                '0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2)',
            },
          },
          success: {
            backgroundColor: Fe,
            boxShadow:
              '0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)',
            '&:hover,&:focus': {
              backgroundColor: Fe,
              boxShadow:
                '0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2)',
            },
          },
          warning: {
            backgroundColor: Re,
            boxShadow:
              '0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12)',
            '&:hover,&:focus': {
              backgroundColor: Re,
              boxShadow:
                '0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2)',
            },
          },
          danger: {
            backgroundColor: Ae,
            boxShadow:
              '0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12)',
            '&:hover,&:focus': {
              backgroundColor: Ae,
              boxShadow:
                '0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2)',
            },
          },
          rose: {
            backgroundColor: Le,
            boxShadow:
              '0 2px 2px 0 rgba(233, 30, 99, 0.14), 0 3px 1px -2px rgba(233, 30, 99, 0.2), 0 1px 5px 0 rgba(233, 30, 99, 0.12)',
            '&:hover,&:focus': {
              backgroundColor: Le,
              boxShadow:
                '0 14px 26px -12px rgba(233, 30, 99, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(233, 30, 99, 0.2)',
            },
          },
          white: {
            '&,&:focus,&:hover,&:visited': {
              backgroundColor: '#FFFFFF',
              color: ze,
            },
          },
          twitter: {
            backgroundColor: '#55acee',
            color: '#fff',
            boxShadow:
              '0 2px 2px 0 rgba(85, 172, 238, 0.14), 0 3px 1px -2px rgba(85, 172, 238, 0.2), 0 1px 5px 0 rgba(85, 172, 238, 0.12)',
            '&:hover,&:focus,&:visited': {
              backgroundColor: '#55acee',
              color: '#fff',
              boxShadow:
                '0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2)',
            },
          },
          facebook: {
            backgroundColor: '#3b5998',
            color: '#fff',
            boxShadow:
              '0 2px 2px 0 rgba(59, 89, 152, 0.14), 0 3px 1px -2px rgba(59, 89, 152, 0.2), 0 1px 5px 0 rgba(59, 89, 152, 0.12)',
            '&:hover,&:focus': {
              backgroundColor: '#3b5998',
              color: '#fff',
              boxShadow:
                '0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2)',
            },
          },
          google: {
            backgroundColor: '#dd4b39',
            color: '#fff',
            boxShadow:
              '0 2px 2px 0 rgba(221, 75, 57, 0.14), 0 3px 1px -2px rgba(221, 75, 57, 0.2), 0 1px 5px 0 rgba(221, 75, 57, 0.12)',
            '&:hover,&:focus': {
              backgroundColor: '#dd4b39',
              color: '#fff',
              boxShadow:
                '0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2)',
            },
          },
          github: {
            backgroundColor: '#333333',
            color: '#fff',
            boxShadow:
              '0 2px 2px 0 rgba(51, 51, 51, 0.14), 0 3px 1px -2px rgba(51, 51, 51, 0.2), 0 1px 5px 0 rgba(51, 51, 51, 0.12)',
            '&:hover,&:focus': {
              backgroundColor: '#333333',
              color: '#fff',
              boxShadow:
                '0 14px 26px -12px rgba(51, 51, 51, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(51, 51, 51, 0.2)',
            },
          },
          simple: {
            '&,&:focus,&:hover,&:visited': {
              color: '#FFFFFF',
              background: 'transparent',
              boxShadow: 'none',
            },
            '&$primary': { '&,&:focus,&:hover,&:visited': { color: Ce } },
            '&$info': { '&,&:focus,&:hover,&:visited': { color: We } },
            '&$success': { '&,&:focus,&:hover,&:visited': { color: Fe } },
            '&$warning': { '&,&:focus,&:hover,&:visited': { color: Re } },
            '&$rose': { '&,&:focus,&:hover,&:visited': { color: Le } },
            '&$danger': { '&,&:focus,&:hover,&:visited': { color: Ae } },
            '&$twitter': {
              '&,&:focus,&:hover,&:visited': { color: '#55acee' },
            },
            '&$facebook': {
              '&,&:focus,&:hover,&:visited': { color: '#3b5998' },
            },
            '&$google': { '&,&:focus,&:hover,&:visited': { color: '#dd4b39' } },
            '&$github': { '&,&:focus,&:hover,&:visited': { color: '#333333' } },
          },
          transparent: {
            '&,&:focus,&:hover,&:visited': {
              color: 'inherit',
              background: 'transparent',
              boxShadow: 'none',
            },
          },
          disabled: { opacity: '0.65', pointerEvents: 'none' },
          lg: {
            padding: '1.125rem 2.25rem',
            fontSize: '0.875rem',
            lineHeight: '1.333333',
            borderRadius: '0.2rem',
          },
          sm: {
            padding: '0.40625rem 1.25rem',
            fontSize: '0.6875rem',
            lineHeight: '1.5',
            borderRadius: '0.2rem',
          },
          round: { borderRadius: '30px' },
          block: { width: '100% !important' },
          link: {
            '&,&:hover,&:focus': {
              backgroundColor: 'transparent',
              color: '#999999',
              boxShadow: 'none',
            },
          },
          justIcon: {
            paddingLeft: '12px',
            paddingRight: '12px',
            fontSize: '20px',
            height: '41px',
            minWidth: '41px',
            width: '41px',
            '& .fab,& .fas,& .far,& .fal,& svg,& .material-icons': {
              marginRight: '0px',
            },
            '&$lg': {
              height: '57px',
              minWidth: '57px',
              width: '57px',
              lineHeight: '56px',
              '& .fab,& .fas,& .far,& .fal,& .material-icons': {
                fontSize: '32px',
                lineHeight: '56px',
              },
              '& svg': { width: '32px', height: '32px' },
            },
            '&$sm': {
              height: '30px',
              minWidth: '30px',
              width: '30px',
              '& .fab,& .fas,& .far,& .fal,& .material-icons': {
                fontSize: '17px',
                lineHeight: '29px',
              },
              '& svg': { width: '17px', height: '17px' },
            },
          },
        },
        $e = [
          'color',
          'round',
          'children',
          'fullWidth',
          'disabled',
          'simple',
          'size',
          'block',
          'link',
          'justIcon',
          'className',
        ],
        De = t.n(He)()(function () {
          return Object(f.a)({}, Pe)
        }),
        Ue = i.a.forwardRef(function (e, a) {
          var t,
            r = e.color,
            i = e.round,
            n = e.children,
            o = e.fullWidth,
            c = e.disabled,
            s = e.simple,
            d = e.size,
            l = e.block,
            p = e.link,
            b = e.justIcon,
            g = e.className,
            h = Object(x.a)(e, $e),
            u = De(),
            O = Te()(
              ((t = {}),
              Object(m.a)(t, u.button, !0),
              Object(m.a)(t, u[d], d),
              Object(m.a)(t, u[r], r),
              Object(m.a)(t, u.round, i),
              Object(m.a)(t, u.fullWidth, o),
              Object(m.a)(t, u.disabled, c),
              Object(m.a)(t, u.simple, s),
              Object(m.a)(t, u.block, l),
              Object(m.a)(t, u.link, p),
              Object(m.a)(t, u.justIcon, b),
              Object(m.a)(t, g, g),
              t),
            )
          return Object(y.jsx)(
            j.a,
            Object(f.a)(
              Object(f.a)({}, h),
              {},
              { ref: a, className: O, children: n },
            ),
          )
        }),
        Qe = ['children', 'className'],
        Ge = Object(d.a)({
          grid: { marginRight: '-15px', marginLeft: '-15px', width: 'auto' },
        })
      function Me(e) {
        var a = Ge(),
          t = e.children,
          r = e.className,
          i = Object(x.a)(e, Qe)
        return Object(y.jsx)(
          F.a,
          Object(f.a)(
            Object(f.a)({ container: !0 }, i),
            {},
            { className: ''.concat(a.grid, ' ').concat(r), children: t },
          ),
        )
      }
      Me.defaultProps = { className: '' }
      var Ye = ['children', 'className'],
        Ve = Object(d.a)({
          grid: {
            position: 'relative',
            width: '100%',
            minHeight: '1px',
            paddingRight: '15px',
            paddingLeft: '15px',
            flexBasis: 'auto',
          },
        })
      function Ze(e) {
        var a = Ve(),
          t = e.children,
          r = e.className,
          i = Object(x.a)(e, Ye)
        return Object(y.jsx)(
          F.a,
          Object(f.a)(
            Object(f.a)({ item: !0 }, i),
            {},
            { className: ''.concat(a.grid, ' ').concat(r), children: t },
          ),
        )
      }
      Ze.defaultProps = { className: '' }
      var Ke = Object(d.a)(Ie)
      function Je() {
        var e = Object(r.useContext)(re).user,
          a = Object(r.useState)(!0),
          t = Object(B.a)(a, 2),
          i = t[0],
          n = t[1]
        Object(r.useEffect)(
          function () {
            e.loading || n(e.loading)
          },
          [e.loading],
        )
        var o = Ke(),
          c = Te()(o.imgRaised, o.imgRoundedCircle, o.imgFluid)
        return (
          !i &&
          Object(y.jsx)('div', {
            children: Object(y.jsx)('div', {
              className: Te()(o.main, o.mainRaised),
              children: Object(y.jsx)('div', {
                children: Object(y.jsxs)('div', {
                  className: o.container,
                  children: [
                    Object(y.jsx)(Me, {
                      justify: 'center',
                      children: Object(y.jsx)(Ze, {
                        xs: 12,
                        sm: 12,
                        md: 6,
                        children: Object(y.jsxs)('div', {
                          className: o.profile,
                          children: [
                            Object(y.jsx)('div', {
                              children: Object(y.jsx)('img', {
                                src: Se,
                                alt: '...',
                                className: c,
                              }),
                            }),
                            Object(y.jsxs)('div', {
                              className: o.name,
                              children: [
                                Object(y.jsxs)('h3', {
                                  className: o.title,
                                  children: [
                                    e.data.firstName,
                                    e.data.nickname,
                                    e.data.lastName,
                                  ],
                                }),
                                Object(y.jsx)('h6', { children: e.data.city }),
                                Object(y.jsx)(Ue, {
                                  justIcon: !0,
                                  link: !0,
                                  className: o.margin5,
                                  children: Object(y.jsx)('i', {
                                    className: 'fab fa-twitter',
                                  }),
                                }),
                                Object(y.jsx)(Ue, {
                                  justIcon: !0,
                                  link: !0,
                                  className: o.margin5,
                                  children: Object(y.jsx)('i', {
                                    className: 'fab fa-instagram',
                                  }),
                                }),
                                Object(y.jsx)(Ue, {
                                  justIcon: !0,
                                  link: !0,
                                  className: o.margin5,
                                  children: Object(y.jsx)('i', {
                                    className: 'fab fa-facebook',
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    Object(y.jsx)('div', {
                      className: o.description,
                      children: Object(y.jsx)('p', { children: e.data.bio }),
                    }),
                    Object(y.jsx)(Me, {
                      justify: 'center',
                      children: Object(y.jsx)(Ze, {
                        xs: 12,
                        sm: 12,
                        md: 8,
                        className: o.navWrapper,
                      }),
                    }),
                  ],
                }),
              }),
            }),
          })
        )
      }
      var _e = t.p + 'static/media/chickpeabowl.c10ecc23.jpg'
      function Xe() {
        return Object(y.jsxs)(O.a, {
          variant: 'body2',
          color: 'textSecondary',
          align: 'center',
          children: [
            'Copyright \xa9 ',
            Object(y.jsx)(Oe.a, {
              color: 'inherit',
              href: '/',
              children: 'Souk',
            }),
            ' ',
            new Date().getFullYear(),
            '.',
          ],
        })
      }
      var ea = Object(d.a)(function (e) {
        return {
          root: { height: '100vh' },
          image: {
            backgroundImage: 'url('.concat(_e, ')'),
            backgroundRepeat: 'no-repeat',
            backgroundColor:
              'light' === e.palette.type
                ? e.palette.grey[50]
                : e.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          },
          paper: {
            margin: e.spacing(8, 4),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
          avatar: {
            margin: e.spacing(1),
            backgroundColor: e.palette.secondary.main,
          },
          form: { width: '100%', marginTop: e.spacing(1) },
          submit: { margin: e.spacing(3, 0, 2) },
        }
      })
      var aa = Object(b.g)(function () {
          var e = ea(),
            a = Object(ge.a)({ mode: 'onBlur' }),
            t = a.register,
            r = a.handleSubmit,
            i = a.errors,
            n = a.setError,
            o = Object(b.f)(),
            c = (function () {
              var e = Object(ce.a)(
                oe.a.mark(function e(a) {
                  return oe.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          E.auth()
                            .createUserWithEmailAndPassword(a.email, a.password)
                            .then(function () {
                              console.log('sign up success'), o.push('/')
                            })
                            .catch(function (e) {
                              n('firebase', {
                                type: 'manual',
                                message: e.message,
                              }),
                                console.error('Failed to sign up: ', e.message)
                            })
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )
              return function (a) {
                return e.apply(this, arguments)
              }
            })()
          return Object(y.jsxs)(F.a, {
            container: !0,
            component: 'main',
            className: e.root,
            children: [
              Object(y.jsx)(s.a, {}),
              Object(y.jsx)(F.a, {
                item: !0,
                xs: !1,
                sm: 4,
                md: 7,
                className: e.image,
              }),
              Object(y.jsx)(F.a, {
                item: !0,
                xs: 12,
                sm: 8,
                md: 5,
                component: de.a,
                elevation: 6,
                square: !0,
                children: Object(y.jsxs)('div', {
                  className: e.paper,
                  children: [
                    Object(y.jsx)(se.a, {
                      className: e.avatar,
                      children: Object(y.jsx)(be.a, {}),
                    }),
                    Object(y.jsx)(O.a, {
                      component: 'h1',
                      variant: 'h5',
                      children: 'Sign up',
                    }),
                    Object(y.jsxs)('form', {
                      className: e.form,
                      onSubmit: r(c),
                      children: [
                        Object(y.jsx)(le.a, {
                          variant: 'outlined',
                          margin: 'normal',
                          required: !0,
                          fullWidth: !0,
                          id: 'email',
                          label: 'Email Address',
                          name: 'email',
                          autoComplete: 'email',
                          autoFocus: !0,
                          inputRef: t({
                            required: !0,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          }),
                        }),
                        i.email &&
                          'required' === i.email.type &&
                          Object(y.jsx)(xe.a, {
                            severity: 'error',
                            children: 'Email address is required to Sign Up',
                          }),
                        i.email &&
                          'pattern' === i.email.type &&
                          Object(y.jsx)(xe.a, {
                            severity: 'error',
                            children: 'Email is not in a correct format',
                          }),
                        Object(y.jsx)(le.a, {
                          variant: 'outlined',
                          margin: 'normal',
                          required: !0,
                          fullWidth: !0,
                          name: 'password',
                          label: 'Password',
                          type: 'password',
                          id: 'password',
                          autoComplete: 'current-password',
                          inputRef: t({ required: !0, minLength: 6 }),
                        }),
                        i.password &&
                          'required' === i.password.type &&
                          Object(y.jsx)(xe.a, {
                            severity: 'error',
                            children: 'Password is required',
                          }),
                        i.firebase &&
                          Object(y.jsx)('p', { children: i.firebase.message }),
                        Object(y.jsx)(j.a, {
                          type: 'submit',
                          fullWidth: !0,
                          variant: 'contained',
                          color: 'primary',
                          className: e.submit,
                          children: 'Sign Up',
                        }),
                        Object(y.jsx)(fe.a, {
                          mt: 5,
                          children: Object(y.jsx)(Xe, {}),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        }),
        ta = Object(d.a)(function (e) {
          return {
            root: { flexGrow: 1 },
            menuButton: { marginRight: e.spacing(2) },
            title: { flexGrow: 1 },
          }
        })
      function ra() {
        var e = ta()
        return Object(y.jsx)('div', {
          className: e.root,
          children: Object(y.jsx)(H, {
            children: Object(y.jsx)(ie, {
              children: Object(y.jsxs)(l.a, {
                theme: Z,
                children: [
                  Object(y.jsx)(s.a, {}),
                  Object(y.jsx)(p.a, {
                    children: Object(y.jsx)('div', {
                      className: 'App',
                      children: Object(y.jsxs)('header', {
                        className: 'App-header',
                        children: [
                          Object(y.jsx)(te, {}),
                          Object(y.jsxs)('div', {
                            children: [
                              Object(y.jsx)(b.b, {
                                exact: !0,
                                path: '/landing',
                                component: P,
                              }),
                              Object(y.jsx)(b.b, {
                                exact: !0,
                                path: '/login',
                                component: we,
                              }),
                              Object(y.jsx)(b.b, {
                                exact: !0,
                                path: '/signup',
                                component: aa,
                              }),
                              Object(y.jsx)(D, {
                                exact: !0,
                                path: '/',
                                component: ue,
                              }),
                              Object(y.jsx)(D, {
                                exact: !0,
                                path: '/profile',
                                component: Je,
                              }),
                              Object(y.jsx)(D, {
                                exact: !0,
                                path: '/editprofile',
                                component: je,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            }),
          }),
        })
      }
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
          ),
      )
      var ia = document.getElementById('root')
      c.a.render(
        Object(y.jsxs)(i.a.StrictMode, {
          children: [
            Object(y.jsx)('link', {
              rel: 'stylesheet',
              href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css',
              integrity:
                'sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh',
              crossOrigin: 'anonymous',
            }),
            Object(y.jsx)(ra, {}),
          ],
        }),
        ia,
      ),
        Object(n.a)(ia, {
          debugReducer: !0,
          debugContext: !0,
          disable: !1,
          disableAutoMode: !1,
        }),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister()
            })
            .catch(function (e) {
              console.error(e.message)
            })
    },
  },
  [[195, 1, 2]],
])
//# sourceMappingURL=main.e1d6f54f.chunk.js.map
