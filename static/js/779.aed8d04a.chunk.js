"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[779],{9779:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,c=e(5861),u=e(9439),i=e(7757),s=e.n(i),o=e(9263),p=e(7233),f=e(2791),l=e(7689),h=e(168),v=e(5867),d=v.ZP.ul(r||(r=(0,h.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    margin-top: 16px;\n"]))),x=v.ZP.p(a||(a=(0,h.Z)(["\n    font-weight: bold;\n    margin-top: 16px;\n    margin-left: 16px;\n"]))),m=e(184);function w(){var n=(0,l.UO)().movieID,t=(0,f.useState)([]),e=(0,u.Z)(t,2),r=e[0],a=e[1],i=(0,f.useState)(!1),h=(0,u.Z)(i,2),v=h[0],w=h[1];return(0,f.useEffect)((function(){function t(){return(t=(0,c.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,w(!0),t.next=4,(0,p.Hx)(n);case 4:e=t.sent,a(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:return t.prev=11,w(!1),t.finish(11);case 14:case 15:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n]),(0,m.jsxs)(m.Fragment,{children:[v&&(0,m.jsx)(o.a,{}),0===r.length?(0,m.jsx)(x,{children:"No info!"}):(0,m.jsx)(d,{children:r.map((function(n){return(0,m.jsxs)("li",{children:[(0,m.jsxs)("h3",{children:["Autor: ",n.author]}),(0,m.jsx)("p",{children:n.content})]},n.id)}))})]})}},7233:function(n,t,e){e.d(t,{Hx:function(){return l},bI:function(){return p},gQ:function(){return o},wr:function(){return s},xc:function(){return f}});var r=e(5861),a=e(7757),c=e.n(a),u=e(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="fc9b2ba3c1d7d66208afaa93dbd87a11",s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/all/week?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?&page=1&api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=779.aed8d04a.chunk.js.map