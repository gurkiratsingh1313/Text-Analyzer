(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(12),a(1));a(13);function s(e){var t=Object(n.useState)("".concat(e.mode)),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("a",{className:"navbar-brand text-black",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link text-muted  text-white",href:"#"},"Home ",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link text-muted text-white",href:"#"},"About"))))),l.a.createElement("div",{className:"container d-flex justify-content-center my-3"},l.a.createElement("button",{type:"button",className:"btn btn-".concat(e.mode),"data-toggle":"button",onClick:function(){e.toggleMode(),"dark"===e.mode?c("dark"):c("light")},"aria-pressed":"false",autocomplete:"off"},"Enable ",r," Mode")))}function i(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h1",{className:"mb-4"},e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:r,onChange:function(e){c(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#413F42":"white",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"8"})),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=r.toUpperCase();c(t),e.showAlert("Converted to Uppercase!","success")}},"Convert to Uppercase"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-danger mx-1 my-1",onClick:function(){var t=r.toLowerCase();c(t),e.showAlert("Converted to Lowercase!","success")}},"Convert to Lowercase"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-info mx-1 my-1",onClick:function(){for(var t=r.split(" "),a=0;a<t.length;a++)t[a]=t[a].charAt(0).toUpperCase()+t[a].slice(1);var n=t.join(" ");c(n),e.showAlert("Converted to Titlecase!","success")}},"Convert to TitleCase"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-warning mx-1 my-1",onClick:function(){var t=new SpeechSynthesisUtterance;t.text=r,window.speechSynthesis.speak(t),e.showAlert("Converted to Speech!","success")}},"Convert to Speech"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-secondary mx-1 my-1",onClick:function(){var e=r.split(/[ ]+/);c(e.join(" "))}},"Remove Extra Spaces"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-dark mx-1 my-1",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Succesfully copied text","success")}},"Copy to clipboard")),l.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"}},l.a.createElement("h2",null,"Your text summary"),l.a.createElement("p",null,r.split(/\s+/).filter(function(e){return 0!==e.length}).length," words and ",r.replaceAll(" ","").length," characters"),l.a.createElement("p",null,.008*r.split(/\s+/).filter(function(e){return 0!==e.length}).length," Minutes read"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"Nothing to preview!")))}function m(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)," "),e.alert.msg,l.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7")))}var d=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),d=Object(o.a)(c,2),u=d[0],b=d[1],g=function(e,t){b({msg:e,type:t}),setTimeout(function(){b(null)},1e3)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"Text Analyser",mode:a,toggleMode:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="grey",g("Dark Mode has been enabled","success"),document.title="Text Analyser - Dark Mode"):(r("light"),document.body.style.backgroundColor="#fff",g("Light Mode has been enabled","success"),document.title="Text Analyser - Light Mode")}}),l.a.createElement(m,{alert:u}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(i,{heading:"Enter text to analyze",mode:a,showAlert:g})))},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root")),u()},4:function(e,t,a){e.exports=a(14)}},[[4,1,2]]]);
//# sourceMappingURL=main.b8c7624d.chunk.js.map