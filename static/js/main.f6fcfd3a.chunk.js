(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(2),c=n.n(l),s=(n(13),n(3)),u=n(4),o=n(6),i=n(5),m=n(7),h=(n(14),n(15),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{src:"https://robohash.org/".concat(e.user.id,"?set=set5&size=180x180"),alt:"user"}),r.a.createElement("h2",null,e.user.name),r.a.createElement("p",null,e.user.email.toLowerCase()),r.a.createElement("small",null,r.a.createElement("em",null,"Username:")," ",e.user.username),r.a.createElement("small",null,r.a.createElement("em",null,"from"),": ",e.user.address.city))}),d=(n(16),function(e){return r.a.createElement("div",{className:"card-list"},e.users.map(function(e){return r.a.createElement(h,{key:e.id,user:e})}))}),f=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("div",null,r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n}))}),p=(n(18),function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"\xa9 ",(new Date).getFullYear()," - Egomson Emmanuel"))}),E=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={users:[],searchField:""},n.handleChange=function(e){n.setState({searchField:e.target.value})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({users:t})})}},{key:"render",value:function(){var e=this.state,t=e.users,n=e.searchField,a=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Users Rolodex"),r.a.createElement(f,{placeholder:"Search Users",handleChange:this.handleChange}),r.a.createElement(d,{users:a}),r.a.createElement(p,null))}}]),t}(a.Component);c.a.render(r.a.createElement(E,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.f6fcfd3a.chunk.js.map