(this.webpackJsonpaviasaless=this.webpackJsonpaviasaless||[]).push([[0],{43:function(t,e,n){t.exports=n(73)},48:function(t,e,n){},54:function(t,e,n){},73:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(13),i=n.n(c),o=(n(48),n(6)),l=n(5),s=n(35),u=n(14),f=n(15),p=n(17),m=n(18),d=n(1),b=(n(54),n(2)),h=function(t){return a.a.createElement("div",null,a.a.createElement("img",{src:"Logo.svg",alt:"logo"}))},g=n(12),E=n.n(g),O=n(22),x=n(16),j=n(20),T=n(75),v=n(21),k=n.n(v),S=Object(T.a)("TICKETS_REQUESTE"),F=Object(T.a)("REQUEST_SUCSESS"),w=Object(T.a)("REQUEST_FAILURE"),y=Object(T.a)("SHOW_CHEAPEST_TICKETS"),_=Object(T.a)("SHOW_FASTEST_TICKETS"),C=Object(T.a)("REQUEST_ALL_TICKETS"),U=Object(T.a)("REQUEST_TICKETS_WITHOUT_STOPS"),A=Object(T.a)("REQUEST_ONE_STOP"),I=Object(T.a)("REQUEST_TWO_STOPS"),R=Object(T.a)("REQUEST_THREE_STOPS"),D=function(){return function(){var t=Object(j.a)(E.a.mark((function t(e){var n,r,a,c;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(S()),t.next=3,k.a.get("https://front-test.beta.aviasales.ru/search");case 3:n=t.sent,r=n.data.searchId,a={tickets:[]},(c=function(){var t=Object(j.a)(E.a.mark((function t(e){var n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.a.get("https://front-test.beta.aviasales.ru/tickets?searchId=".concat(r));case 3:if(n=t.sent,a=Object(x.a)({},a,{tickets:[].concat(Object(O.a)(a.tickets),Object(O.a)(n.data.tickets)),stop:n.data.stop}),e(F(a)),!a.stop){t.next=8;break}return t.abrupt("return",e(F(a)));case 8:return t.abrupt("return",c(e));case 11:return t.prev=11,t.t0=t.catch(0),t.abrupt("return",c(e));case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}())(e);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};function L(){var t=Object(d.a)(["\n  font-size: 12px;\n  text-transform: uppercase;\n  margin: 0;\n  margin-top: 20px;\n  text-align: center;\n"]);return L=function(){return t},t}function H(){var t=Object(d.a)(["\n  background-color: #fff;\n  width: 250px;\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  text-align: left;\n  align-self: flex-start;\n  /* TEXT_STYLES */\n  color: #4A4A4A;\n  font-family: 'Open Sans' sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 13px;\n  /* TEXT_STYLES */\n  @media (max-width: 768px) {\n    align-self: center;\n    margin-bottom: 20px;\n  }\n"]);return H=function(){return t},t}function z(){var t=Object(d.a)(['\n\n  &:before {\n    content: "";\n    display: inline-block;\n    position: absolute;\n    left: 20px;\n    width: 20px;\n    height: 20px;\n    border-radius: 2px;\n    border: 1px solid #9ABBCE;\n  }\n  &:after {\n    content: "";\n    display: none;\n    position: absolute;\n    transform: rotate(-45deg);\n    top: 15px;\n    left: 25px;\n    width: 10px;\n    height: 5px;\n    border: 2px solid #2196F3;\n    border-top: transparent;\n    border-right: transparent;\n  }\n']);return z=function(){return t},t}function M(){var t=Object(d.a)(["\n  display: none;\n  &:checked + label:after {\n    display: inline-block;\n  }\n  \n  &:checked + label:before {\n    border: 1px solid #2196F3;\n  }\n"]);return M=function(){return t},t}function Q(){var t=Object(d.a)(["\n  padding: 10px 20px;\n  padding-left: 50px;\n  position: relative;\n  line-height: 22px;\n\n  &:hover {\n    background-color: #F1FCFF;;\n  }\n"]);return Q=function(){return t},t}function X(){var t=Object(d.a)(["\n  padding: 0;\n  list-style-type: none;\n"]);return X=function(){return t},t}var q=b.a.ul(X()),B=b.a.li(Q()),N=b.a.input(M()),P=b.a.label(z()),W=b.a.section(H()),K=b.a.h1(L()),Y={addTickets:D,allTickets:C,oneStopTickets:A,twoStopsTickets:I,threeStopsTickets:R,withoutStopsTickets:U},J=Object(l.b)((function(t){return{tickets:t.tickets.tickets,allTicketsFilter:t.allTicketsFilter,oneStopFilter:t.oneStopFilter,twoStopsFilter:t.twoStopsFilter,threeStopsFilter:t.threeStopsFilter,withoutStopsFilter:t.withoutStopsFilter}}),Y)((function(t){var e=t.allTicketsFilter,n=t.allTickets,r=t.oneStopTickets,c=t.oneStopFilter,i=t.twoStopsTickets,o=t.twoStopsFilter,l=t.threeStopsFilter,s=t.threeStopsTickets,u=t.withoutStopsTickets,f=t.withoutStopsFilter;return a.a.createElement(W,null,a.a.createElement(K,null,"\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"),a.a.createElement(q,null,a.a.createElement(B,null,a.a.createElement(N,{id:"1",type:"checkbox",checked:e,onChange:function(){return n(e)}}),a.a.createElement(P,{htmlFor:"1"},"\u0412\u0441\u0435")),a.a.createElement(B,null,a.a.createElement(N,{id:"2",type:"checkbox",checked:f,onChange:function(){return u(f)}}),a.a.createElement(P,{htmlFor:"2"},"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a")),a.a.createElement(B,null,a.a.createElement(N,{id:"3",type:"checkbox",checked:c,onChange:function(){return r(c)}}),a.a.createElement(P,{htmlFor:"3"},"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430")),a.a.createElement(B,null,a.a.createElement(N,{id:"4",type:"checkbox",checked:o,onChange:function(){return i(o)}}),a.a.createElement(P,{htmlFor:"4"},"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438")),a.a.createElement(B,null,a.a.createElement(N,{id:"5",type:"checkbox",checked:l,onChange:function(){return s(l)}}),a.a.createElement(P,{htmlFor:"5"},"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"))))}));function V(){var t=Object(d.a)(["\n  width: 100%;\n  height: 50px;\n  line-height: 50px;\n  border: ",";\n  border-radius: 5px 0 0 5px;\n  background: ",";;\n  /* TEXT_STYLES */\n  color: ",";\n  text-transform: uppercase;\n  font-family: 'Open Sans' sans-serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  "]);return V=function(){return t},t}var $=b.a.div(V(),(function(t){return t.primary?"none":"1px solid #DFE5EC"}),(function(t){return t.primary?"#2196F3":"#fff"}),(function(t){return t.primary?"#fff":"#4A4A4A"})),G={cheapestTickets:y},Z=Object(l.b)((function(t){return{cheapestTicketsFilter:t.cheapestTicketsFilter,fastestTicketsFilter:t.fastestTicketsFilter}}),G)((function(t){var e=t.cheapestTickets,n=t.cheapestTicketsFilter;return a.a.createElement($,{primary:n,onClick:function(){return e(n)}},"\u0421\u0430\u043c\u044b\u0439 \u0434\u0435\u0448\u0435\u0432\u044b\u0439")}));function tt(){var t=Object(d.a)(["\n  width: 100%;\n  height: 50px;\n  line-height: 50px;\n  border: ",";\n  border-radius: 0 5px 5px 0;\n  background: ",";\n  /* TEXT_STYLES */\n  color: ",";\n  text-transform: uppercase;\n  font-family: 'Open Sans' sans-serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  "]);return tt=function(){return t},t}var et=b.a.div(tt(),(function(t){return t.primary?"none":"1px solid #DFE5EC"}),(function(t){return t.primary?"#2196F3":"#fff"}),(function(t){return t.primary?"#fff":"#4A4A4A"})),nt={fastestTickets:_},rt=Object(l.b)((function(t){return{fastestTicketsFilter:t.fastestTicketsFilter}}),nt)((function(t){var e=t.fastestTickets,n=t.fastestTicketsFilter;return a.a.createElement(et,{primary:n,onClick:function(){return e(n)}},"\u0421\u0430\u043c\u044b\u0439 \u0431\u044b\u0441\u0442\u0440\u044b\u0439")}));function at(){var t=Object(d.a)(["\n  display: flex;\n  margin-bottom: 20px;\n  "]);return at=function(){return t},t}var ct=b.a.section(at()),it=function(t){return a.a.createElement(ct,null,a.a.createElement(Z,null),a.a.createElement(rt,null))},ot=n(39),lt=n(40),st=n.n(lt);function ut(){var t=Object(d.a)(["\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 21px;\n  margin-bottom: 10px;\n  "]);return ut=function(){return t},t}function ft(){var t=Object(d.a)(["\n  text-transform: uppercase;\n  color: #A0B0B9;\n  line-height: 18px;\n  font-size: 12px;\n"]);return ft=function(){return t},t}function pt(){var t=Object(d.a)(["\n  margin-bottom: 20px;\n"]);return pt=function(){return t},t}function mt(){var t=Object(d.a)(["\n  margin: 0;\n  font-weight: 600;\n  font-size: 24px;\n  color: #2196F3;\n  margin-bottom: 20px;\n"]);return mt=function(){return t},t}function dt(){var t=Object(d.a)(["\n  width: 100%;\n  text-align: left;\n"]);return dt=function(){return t},t}function bt(){var t=Object(d.a)(["\n  padding: 20px;\n  display: flex;\n  width: 100%;\n  margin-bottom: 20px;\n  align-items: flex-end;\n  background: #fff;\n  box-sizing: border-box;\n  border-radius: 5px;\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);\n"]);return bt=function(){return t},t}function ht(){var t=Object(d.a)(["\n display: flex;\n align-items: center;\n justify-content: center;\n flex-direction: column;\n height: 450px;\n"]);return ht=function(){return t},t}function gt(){var t=Object(d.a)(["\n  width: 50px;\n  height: 50px;\n  background-color: transparent;\n  border-radius: 50%;\n  border-top: 4px solid black;\n  border-right: 4px solid #ccc;\n  border-bottom: 4px solid #ccc;\n  border-left: 4px solid #ccc;\n  animation-name: ",";\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n"]);return gt=function(){return t},t}function Et(){var t=Object(d.a)(["\n 0% { transform: rotate(0deg); }\n 100% { transform: rotate(360deg); }\n"]);return Et=function(){return t},t}var Ot=Object(b.b)(Et()),xt=b.a.div(gt(),Ot),jt=b.a.div(ht()),Tt=b.a.div(bt()),vt=b.a.div(dt()),kt=b.a.h1(mt()),St=b.a.img(pt()),Ft=b.a.div(ft()),wt=b.a.div(ut()),yt=function(t){return t.stops.length?1===t.stops.length?a.a.createElement("div",null,a.a.createElement(Ft,null,"".concat(t.stops.length," \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430")),a.a.createElement(wt,null,t.stops.join(", "))):a.a.createElement("div",null,a.a.createElement(Ft,null,"".concat(t.stops.length," \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438")),a.a.createElement(wt,null,t.stops.join(", "))):a.a.createElement("div",null,a.a.createElement(Ft,null,"\u0431\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"),a.a.createElement(wt,null,"-"))},_t=Object(ot.a)((function(t){return t}),(function(t){var e=t.tickets,n=t.oneStopFilter,r=t.cheapestTicketsFilter,a=t.fastestTicketsFilter,c=t.twoStopsFilter,i=t.threeStopsFilter,o=t.withoutStopsFilter,l=e.all;if(o&&n&&(l=e.all.filter((function(t){return t.segments[0].stops.length<=1&&t.segments[1].stops.length<=1})).slice(0,5)),o&&(l=e.all.filter((function(t){return 0===t.segments[0].stops.length&&0===t.segments[1].stops.length})).slice(0,5)),n&&(l=e.all.filter((function(t){return 1===t.segments[0].stops.length&&1===t.segments[1].stops.length})).slice(0,5)),c&&(l=e.all.filter((function(t){return 2===t.segments[0].stops.length&&2===t.segments[1].stops.length})).slice(0,5)),i&&(l=e.all.filter((function(t){return 3===t.segments[0].stops.length&&3===t.segments[1].stops.length})).slice(0,5)),r){var s=Math.ceil(l.reduce((function(t,e){return t+e.price}),0)/l.length);return l.filter((function(t){return t.price<s})).slice(0,5)}if(a){var u=Math.ceil(l.reduce((function(t,e){return t+e.segments[0].duration}),0)/l.length);return l.filter((function(t){return t.segments[0].duration<u})).slice(0,5)}return o&&n&&(l=e.all.filter((function(t){return t.segments[0].stops.length<=1&&t.segments[1].stops.length<=1})).slice(0,5)),o&&n&&c&&(l=e.all.filter((function(t){return t.segments[0].stops.length<=2&&t.segments[1].stops.length<=2})).slice(0,5)),o&&n&&c&&i&&(l=e.all),l.slice(0,5)})),Ct=function(t){Object(m.a)(n,t);var e=Object(p.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){var t=this.props,e=t.requestStatus,n=t.tickets;return"requested"===e?a.a.createElement(jt,null,a.a.createElement(xt,null)):"sucsess"===e?function(t){return a.a.createElement("div",null,t.map((function(t){var e=new Date(t.segments[0].date),n=new Date(6e4*t.segments[0].duration),r=new Date(t.segments[1].date),c=new Date(6e4*t.segments[1].duration);return a.a.createElement(Tt,{key:st.a.uniqueId()},a.a.createElement(vt,null,a.a.createElement(kt,null,"".concat(t.price," P")),a.a.createElement(Ft,null,"".concat(t.segments[0].origin," - ").concat(t.segments[0].destination)),a.a.createElement(wt,null,"".concat(e.getUTCHours(),":").concat(e.getMinutes()," - ").concat(n.getUTCHours(),":").concat(n.getMinutes())),a.a.createElement(Ft,null,"".concat(t.segments[1].origin," - ").concat(t.segments[1].destination)),a.a.createElement(wt,null,"".concat(r.getUTCHours(),":").concat(r.getMinutes()," - ").concat(c.getUTCHours(),":").concat(c.getMinutes()))),a.a.createElement(vt,null,a.a.createElement(Ft,null,"\u0412 \u043f\u0443\u0442\u0438"),a.a.createElement(wt,null,"".concat((t.segments[0].duration/60).toFixed(),"\u0447 ").concat((t.segments[0].duration%60).toFixed(),"\u043c")),a.a.createElement(Ft,null,"\u0412 \u043f\u0443\u0442\u0438"),a.a.createElement(wt,null,"".concat((t.segments[1].duration/60).toFixed(),"\u0447 ").concat((t.segments[1].duration%60).toFixed(),"\u043c"))),a.a.createElement(vt,null,a.a.createElement(St,{alt:"",src:"https://pics.avs.io/99/36/".concat(t.carrier,".png")}),yt(t.segments[0]),yt(t.segments[1])))})))}(n):"failure"===e?a.a.createElement("h1",null,"\u0423\u043f\u0441! \u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."):a.a.createElement("div",null,"text")}}]),n}(a.a.Component),Ut=Object(l.b)((function(t){return{tickets:_t(t),oneStopFilter:t.oneStopFilter,requestStatus:t.requestStatus}}))(Ct);function At(){var t=Object(d.a)(["\n  width: 100%;\n  margin-left: 20px;\n  @media (max-width: 768px) {\n    margin-left: 0;\n  }\n  "]);return At=function(){return t},t}var It=b.a.section(At()),Rt=function(t){return a.a.createElement(It,null,a.a.createElement(it,null),a.a.createElement(Ut,null))};function Dt(){var t=Object(d.a)(["\n  display: flex;\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n  "]);return Dt=function(){return t},t}var Lt=b.a.div(Dt()),Ht=function(t){return a.a.createElement(Lt,null,a.a.createElement(J,null),a.a.createElement(Rt,null))};function zt(){var t=Object(d.a)(["\n  width: 60%;\n  @media (max-width: 768px) {\n    width: 95%;\n  }\n  margin: 0 auto;\n  "]);return zt=function(){return t},t}var Mt={addTickets:D},Qt=b.a.div(zt()),Xt=function(t){Object(m.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(u.a)(this,n),(r=e.call(this,t)).componentDidMount=function(){(0,r.props.addTickets)()},r.props=t,r}return Object(f.a)(n,[{key:"render",value:function(){return a.a.createElement(Qt,{className:"App"},a.a.createElement(h,null),a.a.createElement(Ht,null))}}]),n}(a.a.Component),qt=Object(l.b)(null,Mt)(Xt);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Bt,Nt,Pt,Wt,Kt,Yt,Jt,Vt,$t=n(3),Gt=n(74),Zt=Object(Gt.a)((Bt={},Object($t.a)(Bt,S,(function(){return"requested"})),Object($t.a)(Bt,F,(function(){return"sucsess"})),Object($t.a)(Bt,w,(function(){return"failure"})),Bt),"none"),te=Object(Gt.a)((Nt={},Object($t.a)(Nt,y,(function(t,e){return!e.payload})),Object($t.a)(Nt,_,(function(t,e){return e.payload})),Nt),!1),ee=Object(Gt.a)((Pt={},Object($t.a)(Pt,_,(function(t,e){return!e.payload})),Object($t.a)(Pt,y,(function(t,e){return e.payload})),Pt),!1),ne=Object(Gt.a)((Wt={},Object($t.a)(Wt,C,(function(t,e){return!e.payload})),Object($t.a)(Wt,A,(function(){return!1})),Object($t.a)(Wt,I,(function(){return!1})),Object($t.a)(Wt,R,(function(){return!1})),Object($t.a)(Wt,U,(function(){return!1})),Wt),!1),re=Object(Gt.a)((Kt={},Object($t.a)(Kt,A,(function(t,e){return!e.payload})),Object($t.a)(Kt,C,(function(){return!1})),Kt),!1),ae=Object(Gt.a)((Yt={},Object($t.a)(Yt,I,(function(t,e){return!e.payload})),Object($t.a)(Yt,C,(function(){return!1})),Yt),!1),ce=Object(Gt.a)((Jt={},Object($t.a)(Jt,R,(function(t,e){return!e.payload})),Object($t.a)(Jt,C,(function(){return!1})),Jt),!1),ie=Object(Gt.a)((Vt={},Object($t.a)(Vt,U,(function(t,e){return!e.payload})),Object($t.a)(Vt,C,(function(){return!1})),Vt),!1),oe=Object(Gt.a)(Object($t.a)({},F,(function(t,e){var n=e.payload;return Object(x.a)({},t,{all:n.tickets})})),{all:[]}),le=Object(o.c)({tickets:oe,requestStatus:Zt,allTicketsFilter:ne,oneStopFilter:re,cheapestTicketsFilter:te,fastestTicketsFilter:ee,twoStopsFilter:ae,threeStopsFilter:ce,withoutStopsFilter:ie}),se=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),ue=Object(o.e)(le,Object(o.d)(Object(o.a)(s.a),se));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(l.a,{store:ue},a.a.createElement(qt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.3c7c5102.chunk.js.map