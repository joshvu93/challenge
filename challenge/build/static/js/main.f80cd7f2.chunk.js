(this.webpackJsonpchallenge=this.webpackJsonpchallenge||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),c=a.n(r),u=(a(15),a(9)),i=a(1),m=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],c=a[1],u=Object(n.useState)(""),m=Object(i.a)(u,2),d=m[0],s=m[1],o=Object(n.useState)(""),g=Object(i.a)(o,2),h=g[0],E=g[1],b=Object(n.useState)(""),p=Object(i.a)(b,2),S=p[0],f=p[1],v=Object(n.useState)(""),y=Object(i.a)(v,2),O=y[0],j=y[1],C=function(e){var t=e.target,a=t.name;t.value;switch(a){case"name":c(e.target.value);break;case"math":s(e.target.value);break;case"history":E(e.target.value);break;case"science":f(e.target.value);break;case"english":j(e.target.value)}};return l.a.createElement("form",null,l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",name:"name",value:r.name,onChange:C}),l.a.createElement("label",null,"Math"),l.a.createElement("input",{type:"text",name:"math",value:r.math,onChange:C}),l.a.createElement("label",null,"History"),l.a.createElement("input",{type:"text",name:"history",value:r.history,onChange:C}),l.a.createElement("label",null,"Science"),l.a.createElement("input",{type:"text",name:"science",value:r.science,onChange:C}),l.a.createElement("label",null,"English"),l.a.createElement("input",{type:"text",name:"english",value:r.english,onChange:C}),l.a.createElement("button",{onSubmit:function(){e.addStudent({_id:Math.random(),name:r,grades:["Math - ".concat(d),"History - ".concat(h),"Science - ".concat(S),"English - ".concat(O)]})}},"Add New Student"))},d=a(4),s=a(7),o=function(e){var t=Object(n.useState)(e.currentStudent),a=Object(i.a)(t,2),r=a[0],c=a[1];Object(n.useEffect)((function(){c(e.currentStudent)}),[e]);var u=function(e){var t=e.target,a=t.name,n=t.value;c(Object(s.a)({},r,Object(d.a)({},a,n)))};return l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.updateStudent(r.id,r)}},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",name:"name",value:r.name,onChange:u}),l.a.createElement("label",null,"Math"),l.a.createElement("input",{type:"text",name:"grade",value:r.grade[0],onChange:u}),l.a.createElement("label",null,"History"),l.a.createElement("input",{type:"text",name:"grade",value:r.grade[1],onChange:u}),l.a.createElement("label",null,"Science"),l.a.createElement("input",{type:"text",name:"grade",value:r.grade[2],onChange:u}),l.a.createElement("label",null,"English"),l.a.createElement("input",{type:"text",name:"grade",value:r.grade[3],onChange:u}),l.a.createElement("button",null,"Update Student"),l.a.createElement("button",{onClick:function(){return e.setEditing(!1)},className:"button muted-button"},"Cancel"))};var g=function(e){for(var t=e.grades,a=[],n=0;n<t.length;n++)"A"==t[n].slice(-1)&&a.push(4),"B"==t[n].slice(-1)&&a.push(3),"C"==t[n].slice(-1)&&a.push(2),"D"==t[n].slice(-1)&&a.push(1),"F"==t[n].slice(-1)&&a.push(0);return a.reduce((function(e,t){return e+t}))/4},h=function(e){return l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Math"),l.a.createElement("th",null,"History"),l.a.createElement("th",null,"Science"),l.a.createElement("th",null,"English"),l.a.createElement("th",null,"GPA"),l.a.createElement("th",null))),l.a.createElement("tbody",null,e.students.length>0?e.students.map((function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.grades[0].slice(-1)),l.a.createElement("td",null,t.grades[1].slice(-1)),l.a.createElement("td",null,t.grades[2].slice(-1)),l.a.createElement("td",null,t.grades[3].slice(-1)),l.a.createElement("td",null,l.a.createElement(g,{grades:t.grades})),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){e.editRow(t)},className:"button muted-button"},"Edit"),l.a.createElement("button",{onClick:function(){return e.deleteStudent(t._id)},className:"button muted-button"},"Delete")))})):l.a.createElement("tr",null,l.a.createElement("td",{colSpan:3},"No Students"))))},E=a(8),b=function(){var e=Object(n.useState)(E.data),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({id:null,name:"",grades:""}),d=Object(i.a)(c,2),s=d[0],g=d[1],b=Object(n.useState)(!1),p=Object(i.a)(b,2),S=p[0],f=p[1];return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Admin Dashboard"),l.a.createElement("div",{className:"flex-row"},l.a.createElement("div",{className:"flex-large"},S?l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Edit Student"),l.a.createElement(o,{editing:S,setEditing:f,currentStudent:s,updateStudent:function(e,t){f(!1),r(a.map((function(a){return a._id===e?t:a})))}})):l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Add Student"),l.a.createElement(m,{addStudent:function(e){console.log(e),e.id=e.length+1,r([].concat(Object(u.a)(a),[e]))}}))),l.a.createElement("div",{className:"flex-large"},l.a.createElement("h2",null,"View Students"),l.a.createElement(h,{students:a,editRow:function(e){f(!0),g({id:e.id,name:e.name,grade:e.grade})},deleteStudent:function(e){f(!1),r(a.filter((function(t){return t._id!==e})))}}))))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('{"data":[{"_id":1,"name":"Adam","grades":["Math - A","History - B","Science - A","English - B"],"img":"https://i.pravatar.cc/300","gender":"M","birthday":"July 23, 2003","athlete":true,"grade":10},{"_id":2,"name":"John","grades":["Math - B","History - B","Science - B","English - B"],"img":"https://i.pravatar.cc/300","gender":"M","birthday":"September 8, 2005","athlete":false,"grade":8},{"_id":3,"name":"Sarah","grades":["Math - C","History - B","Science - B","English - C"],"img":"https://i.pravatar.cc/300","gender":"F","birthday":"January 17, 2004","athlete":false,"grade":9},{"_id":4,"name":"Katie","grades":["Math - D","History - B","Science - C","English - B"],"img":"https://i.pravatar.cc/300","gender":"F","birthday":"October 6, 2005","athlete":true,"grade":8},{"_id":5,"name":"Phil","grades":["Math - F","History - B","Science - C","English - D"],"img":"https://i.pravatar.cc/300","gender":"M","birthday":"August 13, 2001","athlete":false,"grade":12}]}')}},[[10,1,2]]]);
//# sourceMappingURL=main.f80cd7f2.chunk.js.map