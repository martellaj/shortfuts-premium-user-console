(this["webpackJsonpshortfuts-premium-users-console"]=this["webpackJsonpshortfuts-premium-users-console"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),s=n.n(r),c=(n(9),n(1));n(10);var i=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(""),i=Object(c.a)(s,2),u=i[0],l=i[1];return o.a.createElement("div",{className:"App"},o.a.createElement("span",{style:{width:"500px",marginTop:"12px",marginBottom:"12px"}},"This page is to rectify your shortfuts premium purchase. You didn't follow instructions and didn't use the email address that's listed in your shortfuts app."," ",o.a.createElement("span",{style:{backgroundColor:"lightblue"}},"This will only work for first-time buyers.")),o.a.createElement("div",{className:"box"},o.a.createElement("strong",null,"contact email you used:"),o.a.createElement("input",{value:n,onChange:function(e){return r(e.target.value)}}),o.a.createElement("p",{className:"note"},"This is the email that received the shortfuts premium receipt.")),o.a.createElement("div",{className:"box"},o.a.createElement("strong",null,"your shortfuts account:"),o.a.createElement("input",{value:u,onChange:function(e){return l(e.target.value)}}),o.a.createElement("p",{className:"note"},"You can find this email on your shortfuts app (where you were supposed to find it before you purchased).")),o.a.createElement("button",{style:{marginTop:"6px"},onClick:function(){fetch("https://shortfuts-server.herokuapp.com/update-premium-user/".concat(n,"/").concat(u),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},referrer:"no-referrer"}).then((function(e){return e.json()})).then((function(e){alert(e.result)}))}},o.a.createElement("strong",null,"update")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.3a1f85ff.chunk.js.map