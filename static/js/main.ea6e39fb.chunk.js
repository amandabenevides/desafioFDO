(this["webpackJsonpdesafio-folha"]=this["webpackJsonpdesafio-folha"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(5),r=a.n(l),i=(a(12),a(6)),u=a(3);var o=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),o=Object(u.a)(r,2),m=o[0],s=o[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"list-wrap"},c.a.createElement("div",{className:"lines"},c.a.createElement("div",{className:"title"},c.a.createElement("span",null,"Tarefas")," "),c.a.createElement("ul",{className:"list"},c.a.createElement("li",null,c.a.createElement("input",{type:"checkbox",checked:!0})," Finalizar desafio "),c.a.createElement("li",null,c.a.createElement("input",{type:"checkbox",checked:!0})," Publicar no GitHub "),a.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("input",{type:"checkbox",id:e.id})," ",c.a.createElement("span",{className:"write",id:e.title}," ",e.title," "),c.a.createElement("div",{className:"button-wrap"},c.a.createElement("button",{onClick:function(){return function(e){var t=a.filter((function(t){return t.id!==e}));l(t)}(e.id)}}," excluir "),c.a.createElement("button",{onClick:function(){return t=e.id,a=e.title,document.getElementById(a).setAttribute("class","written"),void(document.getElementById(t).checked=!0);var t,a}}," completar ")))})),c.a.createElement("div",{className:"form-wrap"},c.a.createElement("input",{className:"form",value:m,onChange:function(e){return s(e.target.value)},type:"text",name:"todo",id:"title",placeholder:"Digite\xa0a\xa0nova\xa0tarefa"}),c.a.createElement("button",{onClick:function(e){e.preventDefault(),l([].concat(Object(i.a)(a),[{id:a.length+1,title:m}])),s("")}},"Adicionar"))))))};var m=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement(o,null)))};r.a.render(c.a.createElement(m,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.ea6e39fb.chunk.js.map