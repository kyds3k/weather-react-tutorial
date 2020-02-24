(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{11:function(e,n,t){e.exports=t(27)},16:function(e,n,t){},25:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(7),i=t.n(c),o=(t(16),t(8)),l=(t(25),t(4)),u=t.n(l),s=t(3),m=t(1),f=t(2);function g(){var e=Object(m.a)(['\n    font-family: "Fira Sans", sans-serif;\n    font-size: 1.1rem;\n  ']);return g=function(){return e},e}function p(){var e=Object(m.a)(['\n    font-family: "Merriweather", sans-serif;\n    font-size: 1.6rem;\n  ']);return p=function(){return e},e}function b(){var e=Object(m.a)(["\n    text-align: center;\n  "]);return b=function(){return e},e}var d=function(e){var n=e.city,t=e.country,a=f.a.div(b()),c=f.a.h1(p()),i=f.a.h3(g());return r.a.createElement(a,null,r.a.createElement(c,null,n),r.a.createElement(i,null,t))};function h(){var e=Object(m.a)(["\n    width: 40%;\n  "]);return h=function(){return e},e}var v=function(e){var n=f.a.img(h()),t="";switch(e.condition){case"Clouds":t="./img/Mostly Cloudy-2x.png";break;case"Clear":t="./img/Mostly Sunny-2x.png";break;case"Haze":t="./img/Haze-2x.png";break;case"Hail":t="./img/Hail-2x.png";break;case"Fog":t="./img/Fog-2x.png";break;case"Tornado":t="./img/Tornado-2x.png";break;case"Dust":t="./img/Dust-2x.png";break;case"Mist":t="./img/Fog-2x.png";break;case"Snow":t="./img/Snow-2x.png";break;case"Rain":t="./img/Rain-2x.png";break;case"Drizzle":t="./img/Drizzle-2x.png";break;case"Thunderstorm":t="./img/Severe Thunderstorm-2x.png";break;case"Clear Night":t="./img/Clear Night-2x.png";break;default:t="./img/Fog-2x.png"}return r.a.createElement(n,{classname:"icon",src:t,alt:"Weather Icon"})};function y(){var e=Object(m.a)(['\n    font-family: "Merriweather", sans-serif;\n    font-size: 1.2rem;\n  ']);return y=function(){return e},e}function E(){var e=Object(m.a)(['\n    font-family: "Fira Sans", sans-serif;\n    font-size: 2rem;\n    font-weight: 200;\n  ']);return E=function(){return e},e}var x=function(e){var n=e.temp,t=e.condition,a=f.a.h1(E()),c=f.a.h3(y());return r.a.createElement(r.a.Fragment,null,r.a.createElement(a,null,n," \xb0F"),r.a.createElement(c,null,t))};function w(){var e=Object(m.a)(["\n    margin: 10px auto;\n    background: ",";\n    width: 200px;\n    height: 240px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    border-radius: 15px;\n  "]);return w=function(){return e},e}var k=function(e){var n=e.temp,t=e.condition,a=e.city,c=e.country,i=0,o=0,l=null;n>32?(o=(i=255*(1-(n-12)/28))-150,l="linear-gradient(\n      to top,\n      rgb(255, ".concat(i,", 0),\n      rgb(255, ").concat(o,", 0)\n    );")):n<=32&&(o=(i=255*(1-(n+20)/32))-150,l="linear-gradient(\n      to top,\n      rgb(0, ".concat(i,", 255),\n      rgb(0, ").concat(o,", 255)\n    );"));var u=f.a.div(w(),l);return r.a.createElement(u,null,r.a.createElement(d,{city:a,country:c}),r.a.createElement(v,{condition:t}),r.a.createElement(x,{temp:n,condition:t}))},j=function(e){var n=e.location,t=Object(a.useState)(""),c=Object(s.a)(t,2),i=c[0],o=c[1],l=Object(a.useState)(!1),m=Object(s.a)(l,2),f=m[0],g=m[1],p=Object(a.useState)(!1),b=Object(s.a)(p,2),d=b[0],h=b[1],v=Object(a.useState)({temp:null,city:null,condition:null,country:null}),y=Object(s.a)(v,2),E=y[0],x=y[1],w=function(e){var n,t;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return o(""),h(!0),a.prev=2,a.next=5,u.a.awrap(fetch("//api.openweathermap.org/data/2.5/weather?q=".concat(e,"&APPID=b747622a24940adba2d44f32b1a44caf&units=imperial")));case 5:return n=a.sent,a.next=8,u.a.awrap(n.json());case 8:t=a.sent,x({temp:t.main.temp,city:t.name,condition:t.weather[0].main,country:t.sys.country}),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(2),g(!0);case 15:h(!1);case 16:case"end":return a.stop()}}),null,null,[[2,12]])};return Object(a.useEffect)((function(){w(n)}),[n]),r.a.createElement("div",null,d||f?d?r.a.createElement("div",{style:{color:"black"}},"Loading"):!d&&f?r.a.createElement("div",null,"There has been an error!",r.a.createElement("br",null)," ",r.a.createElement("button",{onClick:function(){return g(!1)}},"Reset!")):null:r.a.createElement("div",null,r.a.createElement(k,{temp:E.temp,city:E.city,country:E.country,condition:E.condition}),r.a.createElement("form",null,r.a.createElement("input",{value:i,onChange:function(e){return o(e.target.value)}}),r.a.createElement("button",{onClick:function(e){return function(e){e.preventDefault(),w(i)}(e)}},"Search"))))};var O=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.Helmet,null,r.a.createElement("title",null,"Fuckin' Weather Shit")),r.a.createElement(j,{location:"nairobi"}),r.a.createElement(j,{location:"antarctica"}),r.a.createElement(j,{location:"seattle"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.5754b6da.chunk.js.map