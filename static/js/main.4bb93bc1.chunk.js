(this["webpackJsonpmatching-game-react"]=this["webpackJsonpmatching-game-react"]||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},24:function(e,t,n){e.exports=n(38)},29:function(e,t,n){},31:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),o=n.n(c),i=(n(29),n(9)),s=n(1),u=(n(30),n(31),n(21)),l=n.n(u),m=function(){var e=Object(s.g)();function t(t){e.push("/PlayGame/".concat(t))}return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("img",{src:l.a,alt:"LOGO",width:"60",height:"60"}),r.a.createElement("h1",null,"Matching Game")),r.a.createElement("h5",{className:"center-text"},"Please select game difficulty"),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("button",{className:"btn-lg mx-6",onClick:function(){return t(3)}},"Easy"),r.a.createElement("button",{className:"btn-lg btn-primary mx-6",onClick:function(){return t(10)}},"Medium"),r.a.createElement("button",{className:"btn-lg btn-danger mx-6",onClick:function(){return t(25)}},"Hard")))},f=n(7),d=function(e){var t=e.point,n=e.onClickCarset;return r.a.createElement("button",{className:"btn card card-closed",onClick:function(){return n(t)}})},p=function(e){var t=e.point;return r.a.createElement("div",{className:"card card-green"},t)},E=function(e){var t=e.point;return r.a.createElement("div",{className:"card card-red"},t)},b=function(){return r.a.createElement("div",{className:"card card-hidden"})},v=function(e){var t=e.card,n=e.onClickCarset,a=t.status;return 0===a?r.a.createElement(d,{point:t.point,onClickCarset:n}):1===a?r.a.createElement(p,{point:t.point}):2===a?r.a.createElement(E,{point:t.point}):r.a.createElement(b,null)},h=n(14),O=function(e){var t=e.mood;return 1===t?r.a.createElement(h.c,{color:"green",size:"28px"}):2===t?r.a.createElement(h.a,{color:"red",size:"28px"}):r.a.createElement(h.b,{color:"Black",size:"28px"})},j=n(23),g=n.n(j),y=Object(a.forwardRef)((function(e,t){var n=Object(a.useState)(!1),c=Object(f.a)(n,2),o=c[0],i=c[1],s=Object(a.useState)(0),u=Object(f.a)(s,2),l=u[0],m=u[1];Object(a.useEffect)((function(){o&&setTimeout((function(){return m(l+1)}),1e3)}));var d=Object(a.useMemo)((function(){return function(e){var t=new Date(0,0,0,0,0,0);return t.setSeconds(e),g()(t).format("HH:mm:ss")}(l)}),[l]);return Object(a.useImperativeHandle)(t,(function(){return{start:function(){return i(!0)},stop:function(){return i(!1)},timeUsed:function(){return d}}})),r.a.createElement("span",{"font-scale":"1.5"},d)})),N=n(8),k=n(12),x=function(e){function t(e,t){return Array.from({length:e},(function(e,t){return t})).sort((function(){return Math.random()-.5})).map((function(e){return{point:e,status:t}}))}return{difficulty:e,cardset1:t(e,0),cardset2:t(e,0),refresh:0}},w="clickUno",C="clickDue",G="refresh";function P(e,t){var n=e.find((function(e){return 1===e.status}));void 0!==n&&(n.status=0,t.status=1)}function S(e,t){var n=e.find((function(e){return 1===e.status}));if(void 0!==n){if(n.point===t.point){t.status=1;return setTimeout((function(){n.status=3,t.status=3}),1e3),1e3}t.status=2;return setTimeout((function(){t.status=0}),3e3),3e3}return t.status=1,0}var M=function(e,t){switch(t.type){case w:var n=0,a=Object(k.a)(e.cardset1),r=Object(k.a)(e.cardset2),c=a.find((function(e){return e.point===t.payload.point}));return void 0!==c&&(P(a,c),n=S(r,c)),Object(N.a)(Object(N.a)({},e),{},{cardset1:a,cardset2:r,refresh:n});case C:var o=0,i=Object(k.a)(e.cardset1),s=Object(k.a)(e.cardset2),u=s.find((function(e){return e.point===t.payload.point}));return void 0!==u&&(P(s,u),o=S(i,u)),Object(N.a)(Object(N.a)({},e),{},{cardset1:i,cardset2:s,refresh:o});case G:return Object(N.a)(Object(N.a)({},e),{},{refresh:0});default:return e}},T=function(e){var t=Object(s.g)(),n=e.match.params.difficulty,c=Object(a.useReducer)(M,n,x),o=Object(f.a)(c,2),i=o[0],u=o[1],l=i.cardset1,m=i.cardset2,d=Object(a.useState)(0),p=Object(f.a)(d,2),E=p[0],b=p[1],h=Object(a.useState)(!1),j=Object(f.a)(h,2),g=j[0],N=j[1],k=Object(a.useRef)(null);function P(e){u({type:w,payload:{point:e}})}function S(e){u({type:C,payload:{point:e}})}return Object(a.useEffect)((function(){k.current.start()}),[]),Object(a.useEffect)((function(){var e,n=i.refresh;if(0!==n)b(3e3===n?2:1),(e=n,new Promise((function(t){return setTimeout(t,e)}))).then((function(){u({type:G,payload:{}}),b(0),0===l.filter((function(e){return 3!==e.status})).length+m.filter((function(e){return 3!==e.status})).length&&N(!0)}));else if(g){k.current.stop();var a=k.current.timeUsed();t.push("/GameOver/".concat(a))}else b(0)})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-around align-items-center mt-2"},r.a.createElement(O,{mood:E}),r.a.createElement("h3",null,"Play Game"),r.a.createElement(y,{ref:k})),r.a.createElement("div",{className:"d-flex flex-wrap card-set"},l.map((function(e,t){return r.a.createElement(v,{key:t,card:e,onClickCarset:P})}))),r.a.createElement("p",null),r.a.createElement("div",{className:"d-flex flex-wrap card-set"},m.map((function(e,t){return r.a.createElement(v,{key:t,card:e,onClickCarset:S})}))))},H=function(e){var t=Object(s.g)(),n=e.match.params.duration;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"center-text"},"Game Over"),r.a.createElement("h5",{className:"center-text"},"Time used: ",n),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("button",{className:"btn-lg",onClick:function(e){e.preventDefault(),t.push("/NewGame")}},"Play Again")))};var z=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/NewGame",component:m}),r.a.createElement(s.b,{path:"/PlayGame/:difficulty",component:T}),r.a.createElement(s.b,{path:"/GameOver/:duration",component:H}),r.a.createElement(s.b,{path:"/"},r.a.createElement(s.a,{to:"/NewGame"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.4bb93bc1.chunk.js.map