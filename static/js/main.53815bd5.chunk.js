(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,a,n){},14:function(e,a,n){},15:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(2),o=n.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(12);var m=n(3),l=n(4),c=n(6),s=n(5),h=function(e){var a=e.id,n=e.name,t=e.email;return r.a.createElement("div",{className:" tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(a,"?bgset=bg2"),alt:"robot"}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,t)))},u=function(e){var a=e.robot;return r.a.createElement("div",null,a.map((function(e,n){return r.a.createElement(h,{key:n,id:a[n].id,name:a[n].name,email:a[n].email})})))},d=[{id:1,name:"Pinpin",username:"pin",email:"pinpin@gmail.com"},{id:2,name:"Alex hellen",username:"alex",email:"alex@gmail.com."},{id:3,name:"Amy farrera",username:"amy",email:"amy@gmail.com."},{id:4,name:"Bob vender",username:"bob",email:"bob@gmail.com."},{id:5,name:"Ellen fowler",username:"Ellen",email:"ellen@gmail.com."},{id:6,name:"Jimmy helpart",username:"Jimmy",email:"jimmy@gmail.com."},{id:7,name:"Bob dilan",username:"Bob",email:"Bob@gmail.com."},{id:1,name:"Zach human",username:"Zach",email:"zach@gmail.com."}],b=function(e){e.searchfield;var a=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--white-70 bg-lightest-blue ",type:"search",placeholder:"search robots",onChange:a}))},g=(n(13),function(e){Object(c.a)(n,e);var a=Object(s.a)(n);function n(){var e;return Object(m.a)(this,n),(e=a.call(this)).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={robot:d,searchfield:""},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,a=this.state.robot.filter((function(a){return a.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return r.a.createElement("div",{className:"tc "},r.a.createElement("h1",{className:"f1"}," Robo Friends "),r.a.createElement(b,{searchChange:this.onSearchChange}),r.a.createElement(u,{robot:a}))}}]),n}(t.Component));n(14);o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,a,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.53815bd5.chunk.js.map