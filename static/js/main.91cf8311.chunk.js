(this["webpackJsonpmatching-game-react"]=this["webpackJsonpmatching-game-react"]||[]).push([[0],{19:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},22:function(e,t,n){e.exports=n(37)},27:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),o=n.n(c),i=(n(27),n(6)),s=n(1),u=(n(28),n(29),n(19)),l=n.n(u),m=function(){var e=Object(s.g)();function t(t){e.push("/PlayGame/".concat(t))}return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("img",{src:l.a,alt:"LOGO",width:"60",height:"60"}),r.a.createElement("h1",null,"Matching Game")),r.a.createElement("h5",{className:"center-text"},"Please select game difficulty"),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("button",{className:"btn-lg mx-6",onClick:function(){return t(3)}},"Easy"),r.a.createElement("button",{className:"btn-lg btn-primary mx-6",onClick:function(){return t(10)}},"Medium"),r.a.createElement("button",{className:"btn-lg btn-danger mx-6",onClick:function(){return t(25)}},"Hard")))},f=n(4),d=n(5),p=n(9),E=0,b=1,v=2,h=3,O=function(e){function t(e,t){return Array.from({length:e},(function(e,t){return t})).sort((function(){return Math.random()-.5})).map((function(e){return{point:e,status:t}}))}return{difficulty:e,cardset1:t(e,E),cardset2:t(e,E),refresh:0}},j="clickUno",g="clickDue",y="refresh";function N(e,t){var n=e.find((function(e){return e.status===b}));void 0!==n&&(n.status=E,t.status=b)}function k(e,t){var n=e.find((function(e){return e.status===b}));if(void 0!==n){if(n.point===t.point){t.status=b;return setTimeout((function(){n.status=h,t.status=h}),1e3),1e3}t.status=v;return setTimeout((function(){t.status=E}),3e3),3e3}return t.status=b,0}var x=function(e,t){switch(t.type){case j:var n=0,a=Object(p.a)(e.cardset1),r=Object(p.a)(e.cardset2),c=a.find((function(e){return e.point===t.payload.point}));return void 0!==c&&(N(a,c),n=k(r,c)),Object(d.a)(Object(d.a)({},e),{},{cardset1:a,cardset2:r,refresh:n});case g:var o=0,i=Object(p.a)(e.cardset1),s=Object(p.a)(e.cardset2),u=s.find((function(e){return e.point===t.payload.point}));return void 0!==u&&(N(s,u),o=k(i,u)),Object(d.a)(Object(d.a)({},e),{},{cardset1:i,cardset2:s,refresh:o});case y:return Object(d.a)(Object(d.a)({},e),{},{refresh:0});default:return e}},w=(n(35),function(e){var t=e.point,n=e.onClickCarset;return r.a.createElement("button",{className:"card card-closed",onClick:function(){return n(t)}})}),C=function(e){var t=e.point;return r.a.createElement("div",{className:"card card-green"},t)},G=function(e){var t=e.point;return r.a.createElement("div",{className:"card card-red"},t)},P=function(){return r.a.createElement("div",{className:"card card-hidden"})},S=function(e){var t=e.card,n=e.onClickCarset,a=t.status;return a===E?r.a.createElement(w,{point:t.point,onClickCarset:n}):a===b?r.a.createElement(C,{point:t.point}):a===v?r.a.createElement(G,{point:t.point}):r.a.createElement(P,null)},T=n(11),H=function(e){var t=e.mood;return 1===t?r.a.createElement(T.c,{color:"green",size:"28px"}):2===t?r.a.createElement(T.a,{color:"red",size:"28px"}):r.a.createElement(T.b,{color:"Black",size:"28px"})},M=n(21),z=n.n(M),A=Object(a.forwardRef)((function(e,t){var n=Object(a.useState)(!1),c=Object(f.a)(n,2),o=c[0],i=c[1],s=Object(a.useState)(0),u=Object(f.a)(s,2),l=u[0],m=u[1];function d(e){var t=new Date(0,0,0,0,0,0);return t.setSeconds(e),z()(t).format("HH:mm:ss")}return Object(a.useEffect)((function(){o&&setTimeout((function(){return m(l+1)}),1e3)})),Object(a.useImperativeHandle)(t,(function(){return{start:function(){return i(!0)},stop:function(){return i(!1)},timeUsed:function(){return d(l)}}})),r.a.createElement("span",{"font-scale":"1.5"},d(l))})),B=function(e){var t=Object(s.g)(),n=e.match.params.difficulty,c=Object(a.useReducer)(x,n,O),o=Object(f.a)(c,2),i=o[0],u=o[1],l=i.cardset1,m=i.cardset2,d=Object(a.useState)(0),p=Object(f.a)(d,2),E=p[0],b=p[1],v=Object(a.useState)(!1),N=Object(f.a)(v,2),k=N[0],w=N[1],C=Object(a.useRef)(null);function G(e){u({type:j,payload:{point:e}})}function P(e){u({type:g,payload:{point:e}})}return Object(a.useEffect)((function(){C.current.start()}),[]),Object(a.useEffect)((function(){var e,n=i.refresh;if(0!==n)b(3e3===n?2:1),(e=n,new Promise((function(t){return setTimeout(t,e)}))).then((function(){u({type:y,payload:{}}),b(0),0===l.filter((function(e){return e.status!==h})).length+m.filter((function(e){return e.status!==h})).length&&w(!0)}));else if(k){C.current.stop();var a=C.current.timeUsed();t.push("/GameOver/".concat(a))}else b(0)})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-around align-items-center mt-2"},r.a.createElement(H,{mood:E}),r.a.createElement("h3",null,"Play Game"),r.a.createElement(A,{ref:C})),r.a.createElement("div",{className:"d-flex flex-wrap card-set"},l.map((function(e,t){return r.a.createElement(S,{key:t,card:e,onClickCarset:G})}))),r.a.createElement("p",null),r.a.createElement("div",{className:"d-flex flex-wrap card-set"},m.map((function(e,t){return r.a.createElement(S,{key:t,card:e,onClickCarset:P})}))))},D=function(e){var t=Object(s.g)(),n=e.match.params.duration;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"center-text"},"Game Over"),r.a.createElement("h5",{className:"center-text"},"Time used: ",n),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("button",{className:"btn-lg",onClick:function(e){e.preventDefault(),t.push("/NewGame")}},"Play Again")))};var R=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/NewGame",component:m}),r.a.createElement(s.b,{path:"/PlayGame/:difficulty",component:B}),r.a.createElement(s.b,{path:"/GameOver/:duration",component:D}),r.a.createElement(s.b,{path:"/"},r.a.createElement(s.a,{to:"/NewGame"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.91cf8311.chunk.js.map