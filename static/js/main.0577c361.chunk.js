(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(7),l=a.n(i),c=(a(13),a(5)),o=a(1),r=a(2),d=a(4),m=a(3),u=(a(14),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement("header",null,s.a.createElement("h1",{className:"main-header"},"List of tasks"))}}]),a}(s.a.Component)),h=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleEdit=function(e,t){n.setState({editMode:!0,editText:t,editId:e})},n.handleEditUpdates=function(){var e=n.state.editId,t=Object(c.a)(n.state.tasks);t[e].text=n.state.editText,n.setState({tasks:t,editMode:!1,editId:0,editText:""})},n.handleComplete=function(e){var t=Object(c.a)(n.state.tasks);t[e].complete=!0,n.setState({tasks:t})},n.handleDelete=function(e){var t=Object(c.a)(n.state.tasks);t.splice(e,1),n.setState({tasks:t})},n.handleChange=function(e){n.setState({text:e.target.value})},n.handleEditChanges=function(e){n.setState({editText:e.target.value})},n.handleSubmit=function(e){if(e.preventDefault(),0!==n.state.text.length){var t={text:n.state.text,id:n.state.id+1,complete:!1};n.setState((function(e){return{tasks:e.tasks.concat(t),text:""}}))}},n.state={tasks:[],text:"",editMode:!1,editText:"",editId:0},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.state.tasks.filter((function(e){return!e.complete})).length;return s.a.createElement("div",{id:"todo-list"},s.a.createElement(u,null),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("label",{htmlFor:"new-task"},"Task: "),s.a.createElement("input",{type:"text",id:"new-task",onChange:this.handleChange,value:this.state.text}),s.a.createElement("button",null,"Add task")),t>0?s.a.createElement("div",{id:"results"},s.a.createElement("h2",null,"You have ","".concat(t,t>1?" pending tasks":" pending task"),".")):s.a.createElement("div",{id:"results"},s.a.createElement("h2",null,"You don't have any pending tasks.")),s.a.createElement("ol",{className:"task-list"},this.state.editMode&&s.a.createElement(n.Fragment,null,s.a.createElement("div",{id:"edit-overlay"},s.a.createElement("h2",null,"Edit task"),s.a.createElement("input",{type:"text",value:this.state.editText,onChange:this.handleEditChanges}),s.a.createElement("button",{onClick:function(){return e.handleEditUpdates()}},"Accept Changes"))),this.state.tasks.map((function(t,a){return s.a.createElement("li",{className:"task-item",key:a},s.a.createElement("div",{className:"task-item__content"},s.a.createElement("span",{className:"task-item "+(t.complete?"task--completed":"")},t.text)),s.a.createElement("div",{className:"task-item__controls"},s.a.createElement("span",{className:"task-item task-item__edit",onClick:function(){e.handleEdit(a,t.text)}},"Edit"),s.a.createElement("span",{className:"task-item task-item__delete",onClick:function(){e.handleDelete(a)}},"Delete"),s.a.createElement("span",{className:"task-item task-item__complete",onClick:function(){e.handleComplete(a)}},"Complete")))}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.0577c361.chunk.js.map