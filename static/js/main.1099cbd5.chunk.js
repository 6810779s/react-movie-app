(this["webpackJsonpmovie-app-with-redux"]=this["webpackJsonpmovie-app-with-redux"]||[]).push([[0],{10:function(e,t,a){e.exports={Container:"mainItems_Container__hPNN_",description:"mainItems_description__2xbj7",release_date:"mainItems_release_date__1o0br",summary:"mainItems_summary__2bxcc",overview:"mainItems_overview__BkN37"}},115:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var i,c=a(1),n=a(9),s=a(42),r=a.n(s),l=(a(55),a(5)),o=a(8),d=a(4),j=a(20),p=a(43),h=a.n(p),b=a(21),m=a(0),u=b.a.div(i||(i=Object(j.a)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),v=function(){return Object(m.jsx)(u,{children:Object(m.jsx)(h.a,{type:"Puff",color:"#00BFFF",height:150,width:150})})},x=a(16),_=a.n(x),O=function(e){var t=e.movie_id,a=e.title,i=e.poster,c=e.release_date;return Object(m.jsxs)("div",{className:_.a.Container,children:[Object(m.jsx)(n.b,{exact:!0,to:"/movie/"+t,children:i&&Object(m.jsx)("div",{className:_.a.thumbnail,children:Object(m.jsx)("img",{src:i,alt:"poster",style:{width:"200px",height:"300px"}})})}),Object(m.jsxs)("div",{className:_.a.contents,children:[Object(m.jsx)("h3",{children:a}),Object(m.jsx)("p",{children:c})]})]})},g=a(10),f=a.n(g),w=function(e){var t=e.movie_id,a=e.title,i=e.poster,c=e.release_date,s=e.overview;return Object(m.jsxs)("div",{className:f.a.Container,children:[Object(m.jsx)(n.b,{exact:!0,to:"/movie/"+t,children:i&&Object(m.jsx)("div",{className:f.a.thumbnail,children:Object(m.jsx)("img",{src:i,alt:"poster",style:{width:"500px",height:"500px"}})})}),Object(m.jsx)(n.b,{exact:!0,to:"/movie/"+t,children:Object(m.jsxs)("div",{className:f.a.description,children:[Object(m.jsx)("h1",{children:a}),Object(m.jsx)("p",{className:f.a.release_date,children:c}),Object(m.jsx)("p",{className:f.a.summary,children:"\uc904\uac70\ub9ac"}),Object(m.jsx)("p",{className:f.a.overview,children:s})]})})]})},N=a(48),y=a.n(N),k=a(30),C=a.n(k),S=a(49);function F(e){var t=Object(c.useState)(!1),a=Object(d.a)(t,2),i=a[0],n=a[1],s=Object(c.useState)(null),r=Object(d.a)(s,2),l=r[0],o=r[1],j=Object(c.useState)(null),p=Object(d.a)(j,2),h=p[0],b=p[1];return Object(c.useEffect)((function(){(function(){var t=Object(S.a)(C.a.mark((function t(){var a;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(!0),t.prev=1,t.next=4,e();case 4:a=t.sent,o(a),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),b(t.t0);case 11:n(!1);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}})()()}),[]),[i,l,h]}var L,I,T="7db3edc572c4459c628c28ce8cec50fa",P=["ko-KR","pt-US"],z=b.a.div(L||(L=Object(j.a)(["\n  margin: 3% auto;\n  width: 100%;\n  .slick-prev:before {\n    color: gray; // \ubc84\ud2bc \uc0c9\uc740 \uac80\uc740\uc0c9\uc73c\ub85c\n    font-size: 50px;\n  }\n  .slick-prev {\n    z-index: 9999;\n    left: -55px;\n  }\n  .slick-next:before {\n    color: gray; // \ubc84\ud2bc \uc0c9\uc740 \uac80\uc740\uc0c9\uc73c\ub85c\n    font-size: 50px;\n  }\n  .slick-next {\n    z-index: 9999;\n    right: -10px;\n  }\n  h2 {\n    color: white;\n    margin-bottom: 10px;\n  }\n"]))),B=b.a.div(I||(I=Object(j.a)(["\n  margin: 0 auto;\n  width: 1300px;\n  padding-top: 30px;\n  h2 {\n    margin-bottom: 5px;\n  }\n  .slick-list {\n    width: 1300px;\n    margin-left: 0;\n  }\n  .slick-dots {\n  }\n  .slick-dots li.slick-active button:before {\n    color: white;\n  }\n  .slick-dots button:before {\n    color: white;\n  }\n"]))),V={dots:!1,arrows:!0,infinite:!0,speed:500,slidesToShow:6,slidesToScroll:1},H={dots:!0,arrows:!1,autoplay:!0,autoplaySpeed:5e3,infinite:!0,speed:2e3,slidesToShow:1,slidesToScroll:1,pauseOnHover:!1},J=a(7),E=a.n(J),M=a(15),Q=a.n(M),R=(a(113),a(114),function(){var e=["https://api.themoviedb.org/3/movie/848278/recommendations?api_key=".concat(T,"&language=").concat(P[0],"&page=1"),"https://api.themoviedb.org/3/movie/popular?api_key=".concat(T,"&language=").concat(P[0],"&page=1"),"https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(T,"&language=").concat(P[0],"&page=1"),"https://api.themoviedb.org/3/movie/upcoming?api_key=".concat(T,"&language=").concat(P[0],"&page=1"),"https://api.themoviedb.org/3/movie/now_playing?api_key=".concat(T,"&language=").concat(P[0],"&page=1")],t=F((function(){return E.a.get(e[0])})),a=Object(d.a)(t,3),i=a[0],c=a[1],n=a[2],s=F((function(){return E.a.get(e[1])})),r=Object(d.a)(s,3),l=r[0],j=r[1],p=r[2],h=F((function(){return E.a.get(e[2])})),b=Object(d.a)(h,3),u=b[0],x=b[1],_=b[2],g=F((function(){return E.a.get(e[3])})),f=Object(d.a)(g,3),N=f[0],k=f[1],C=f[2];return i||l||u||N?Object(m.jsx)(v,{}):c&&j&&x&&k?n||p||_||C?"\uc5d0\ub7ec \ubc1c\uc0dd":Object(m.jsxs)("div",{className:y.a.movieContainer,children:[Object(m.jsx)(B,{children:Object(m.jsx)(Q.a,Object(o.a)(Object(o.a)({},H),{},{children:c.data.results.slice(0,5).map((function(e){return Object(m.jsx)(w,{movie_id:e.id,title:e.title,poster:"https://image.tmdb.org/t/p/w500"+e.poster_path,release_date:e.release_date.slice(0,4),overview:e.overview.length<100?e.overview:e.overview.slice(0,100)+"..."},e.id)}))}))}),Object(m.jsxs)(z,{children:[Object(m.jsx)("h2",{children:"\uc778\uae30"}),Object(m.jsx)(Q.a,Object(o.a)(Object(o.a)({},V),{},{children:j.data.results.map((function(e){return Object(m.jsx)(O,{movie_id:e.id,title:e.title.length<12?e.title:e.title.slice(0,12)+"...",poster:"https://image.tmdb.org/t/p/w500"+e.poster_path,release_date:e.release_date.slice(0,4)},e.id)}))}))]}),Object(m.jsxs)(z,{children:[Object(m.jsx)("h2",{children:"\ud3c9\uc810 \ub192\uc740 \uc21c"}),Object(m.jsx)(Q.a,Object(o.a)(Object(o.a)({},V),{},{children:x.data.results.map((function(e){return Object(m.jsx)(O,{movie_id:e.id,title:e.title.length<12?e.title:e.title.slice(0,12)+"...",poster:"https://image.tmdb.org/t/p/w500"+e.poster_path,release_date:e.release_date.slice(0,4)},e.id)}))}))]}),Object(m.jsxs)(z,{children:[Object(m.jsx)("h2",{children:"\uac1c\ubd09 \uc608\uc815"}),Object(m.jsx)(Q.a,Object(o.a)(Object(o.a)({},V),{},{children:k.data.results.map((function(e){return Object(m.jsx)(O,{movie_id:e.id,title:e.title.length<12?e.title:e.title.slice(0,12)+"...",poster:"https://image.tmdb.org/t/p/w500"+e.poster_path,release_date:e.release_date.slice(0,4)},e.id)}))}))]})]}):null}),U=a(3),Z=a.n(U),A=a(24),D=function(e){var t=e.poster,a=e.title,i=e.genres_list,c=e.vote_average,n=e.release_date,s=e.runtime,r=e.overview,l=e.videos_list,o=e.similar_list;return Object(m.jsxs)("div",{className:Z.a.container,children:[Object(m.jsx)("div",{className:Z.a.thumbnail,children:Object(m.jsx)("img",{width:"500",src:"https://image.tmdb.org/t/p/w500"+t})}),Object(m.jsxs)("div",{className:Z.a.desc_container,children:[Object(m.jsx)("h1",{children:a}),Object(m.jsx)("p",{className:Z.a.genres,children:i}),Object(m.jsxs)("p",{className:Z.a.detail,children:[Object(m.jsx)(A.a,{style:{color:"yellow"}}),c,"\xa0\xa0",n,"\xa0\xa0",s,"min"]}),Object(m.jsx)("p",{className:Z.a.overview,children:r}),Object(m.jsx)("p",{className:Z.a.preview,children:"Preview"}),Object(m.jsx)("div",{className:Z.a.videoList,children:0!==l.length?l:Object(m.jsx)("p",{children:"Sorry, there's no trailer"})}),Object(m.jsx)("p",{className:Z.a.similar,children:"Similar"}),Object(m.jsx)("div",{className:Z.a.similarList,children:Object(m.jsx)("ul",{style:{width:230*o.length},children:o})})]})]})},G=function(){var e=Object(l.f)().movie_id,t=["https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(T,"&language=").concat(P[0]),"https://api.themoviedb.org/3/movie/".concat(e,"/videos?api_key=").concat(T,"&language=").concat(P[0]),"https://api.themoviedb.org/3/movie/".concat(e,"/similar?api_key=").concat(T,"&language=").concat(P[0],"&page=1")],a=F((function(){return E.a.get(t[0])})),i=Object(d.a)(a,3),c=i[0],n=i[1],s=i[2],r=F((function(){return E.a.get(t[1])})),o=Object(d.a)(r,3),j=o[0],p=o[1],h=o[2],b=F((function(){return E.a.get(t[2])})),u=Object(d.a)(b,3),x=u[0],_=u[1],O=u[2];if(c||j||x)return Object(m.jsx)(v,{});if(!n||!p||!_)return null;if(s||h||O)return"\uc5d0\ub7ec \ubc1c\uc0dd";var g=n.data.genres.map((function(e){return Object(m.jsxs)("span",{children:[e.name,"\xa0"]})})),f=p.data.results.map((function(e,t){return Object(m.jsx)("div",{children:Object(m.jsx)("iframe",{width:"420",height:"300",src:"https://www.youtube.com/embed/"+e.key+"?autoplay=0",frameBorder:"0",allowFullScreen:"allowFullScreen"})},t)})),w=_.data.results.map((function(e){return Object(m.jsxs)("li",{onClick:function(){window.location.replace("/movie/"+e.id)},style:{cursor:"pointer"},children:[Object(m.jsx)("img",{width:"200px",height:"300px",src:"https://image.tmdb.org/t/p/w500"+e.poster_path}),Object(m.jsx)("p",{children:e.title.length<15?e.title:e.title.slice(0,15)+"..."})]},e.id)}));return Object(m.jsx)("div",{children:Object(m.jsx)(D,{poster:"https://image.tmdb.org/t/p/w500"+n.data.poster_path,title:n.data.title,genres_list:g,vote_average:n.data.vote_average,release_date:n.data.release_date.slice(0,4),runtime:n.data.runtime,overview:n.data.overview,videos_list:f,similar_list:w},n.data.id)})},K=function(e){var t=e.tv_id,a=e.title,i=e.poster,c=e.first_air_date,s=e.overview;return Object(m.jsxs)("div",{className:f.a.Container,children:[Object(m.jsx)(n.b,{exact:!0,to:"/tv/"+t,children:i&&Object(m.jsx)("div",{className:f.a.thumbnail,children:Object(m.jsx)("img",{src:i,alt:"poster",style:{width:"500px",height:"500px"}})})}),Object(m.jsx)(n.b,{exact:!0,to:"/tv/"+t,children:Object(m.jsxs)("div",{className:f.a.description,children:[Object(m.jsx)("h1",{children:a}),Object(m.jsx)("p",{className:f.a.release_date,children:c}),Object(m.jsx)("p",{className:f.a.summary,children:"\uc904\uac70\ub9ac"}),Object(m.jsx)("p",{className:f.a.overview,children:s})]})})]})},W=function(e){var t=e.tv_id,a=e.title,i=e.poster,c=e.first_air_date;return Object(m.jsxs)("div",{className:_.a.Container,children:[Object(m.jsx)(n.b,{exact:!0,to:"/tv/"+t,children:i&&Object(m.jsx)("div",{className:_.a.thumbnail,children:Object(m.jsx)("img",{src:i,alt:"poster",style:{width:"200px",height:"300px"}})})}),Object(m.jsxs)("div",{className:_.a.contents,children:[Object(m.jsx)("h3",{children:a}),Object(m.jsx)("p",{children:c})]})]})},q=a(50),X=a.n(q),Y=function(){var e=["https://api.themoviedb.org/3/tv/81356/recommendations?api_key=".concat(T,"&language=").concat(P[0],"&page=1"),"https://api.themoviedb.org/3/tv/popular?api_key=".concat(T,"&language=").concat(P[0],"&page=1"),"https://api.themoviedb.org/3/tv/top_rated?api_key=".concat(T,"&language=").concat(P[0],"&page=1"),"https://api.themoviedb.org/3/tv/on_the_air?api_key=".concat(T,"&language=").concat(P[0],"&page=1")],t=F((function(){return E.a.get(e[0])})),a=Object(d.a)(t,3),i=a[0],c=a[1],n=a[2],s=F((function(){return E.a.get(e[1])})),r=Object(d.a)(s,3),l=r[0],j=r[1],p=r[2],h=F((function(){return E.a.get(e[2])})),b=Object(d.a)(h,3),u=b[0],x=b[1],_=b[2],O=F((function(){return E.a.get(e[3])})),g=Object(d.a)(O,3),f=g[0],w=g[1],N=g[2];return i||l||u||f?Object(m.jsx)(v,{}):c&&j&&x&&w?n||p||_||N?"\uc5d0\ub7ec \ubc1c\uc0dd":(console.log(j.data.results),console.log(x.data.results),console.log(w.data.results),Object(m.jsxs)("div",{className:X.a.tvContainer,children:[Object(m.jsx)(B,{children:Object(m.jsx)(Q.a,Object(o.a)(Object(o.a)({},H),{},{children:c.data.results.slice(0,5).map((function(e){return Object(m.jsx)(K,{tv_id:e.id,title:e.title,poster:"https://image.tmdb.org/t/p/w500"+e.poster_path,first_air_date:e.first_air_date.slice(0,4),overview:e.overview.length<100?e.overview:e.overview.slice(0,100)+"..."},e.id)}))}))}),Object(m.jsxs)(z,{children:[Object(m.jsx)("h2",{children:"\uc778\uae30"}),Object(m.jsx)(Q.a,Object(o.a)(Object(o.a)({},V),{},{children:j.data.results.map((function(e){return Object(m.jsx)(W,{tv_id:e.id,poster:"https://image.tmdb.org/t/p/w500"+e.poster_path,first_air_date:e.first_air_date.slice(0,4)},e.id)}))}))]}),Object(m.jsxs)(z,{children:[Object(m.jsx)("h2",{children:"\ud3c9\uc810 \ub192\uc740 \uc21c"}),Object(m.jsx)(Q.a,Object(o.a)(Object(o.a)({},V),{},{children:x.data.results.map((function(e){return Object(m.jsx)(W,{tv_id:e.id,title:e.name.length<12?e.name:e.name.slice(0,12)+"...",poster:"https://image.tmdb.org/t/p/w500"+e.poster_path,first_air_date:e.first_air_date.slice(0,4)},e.id)}))}))]}),Object(m.jsxs)(z,{children:[Object(m.jsx)("h2",{children:"\ud604\uc7ac \uc0c1\uc601\uc791"}),Object(m.jsx)(Q.a,Object(o.a)(Object(o.a)({},V),{},{children:w.data.results.map((function(e){return Object(m.jsx)(W,{tv_id:e.id,title:e.name.length<12?e.name:e.name.slice(0,12)+"...",poster:"https://image.tmdb.org/t/p/w500"+e.poster_path,first_air_date:e.first_air_date.slice(0,4)},e.id)}))}))]})]})):null},$=function(e){var t=e.poster,a=e.title,i=e.genres_list,c=e.vote_average,n=e.first_air_date,s=e.number_of_seasons,r=e.number_of_episodes,l=e.overview,o=e.creditCast_list,d=e.creditCrew_list,j=e.similar_list;return Object(m.jsxs)("div",{className:Z.a.container,children:[Object(m.jsx)("div",{className:Z.a.thumbnail,children:Object(m.jsx)("img",{width:"500",src:"https://image.tmdb.org/t/p/w500"+t})}),Object(m.jsxs)("div",{className:Z.a.desc_container,children:[Object(m.jsx)("h1",{children:a}),Object(m.jsx)("p",{className:Z.a.genres,children:i}),Object(m.jsxs)("p",{className:Z.a.detail,children:[Object(m.jsx)(A.a,{style:{color:"yellow"}}),c,"\xa0\xa0",n,"\xa0\xa0",r,"\ubd80\uc791 \uc2dc\uc98c ",s,"\uac1c"]}),Object(m.jsx)("p",{className:Z.a.overview,children:l}),Object(m.jsx)("p",{className:Z.a.preview,children:"\uc778\ubb3c \uc815\ubcf4"}),Object(m.jsx)("p",{children:"\ucd9c\uc5f0\uc9c4"}),Object(m.jsx)("div",{className:Z.a.creditCast,children:o}),Object(m.jsx)("p",{children:"\uc81c\uc791\uc9c4"}),Object(m.jsx)("div",{className:Z.a.creditCrew,children:0!==d.length?d:""}),Object(m.jsx)("p",{className:Z.a.similar,children:"Similar"}),Object(m.jsx)("div",{className:Z.a.similarList,children:Object(m.jsx)("ul",{style:{width:230*j.length},children:j})})]})]})},ee=function(){var e=Object(l.f)().tv_id,t=["https://api.themoviedb.org/3/tv/".concat(e,"?api_key=").concat(T,"&language=").concat(P[0]),"https://api.themoviedb.org/3/tv/".concat(e,"/credits?api_key=").concat(T,"&language=").concat(P[0]),"https://api.themoviedb.org/3/tv/".concat(e,"/similar?api_key=").concat(T,"&language=").concat(P[0],"&page=1")],a=F((function(){return E.a.get(t[0])})),i=Object(d.a)(a,3),c=i[0],n=i[1],s=i[2],r=F((function(){return E.a.get(t[1])})),o=Object(d.a)(r,3),j=o[0],p=o[1],h=o[2],b=F((function(){return E.a.get(t[2])})),u=Object(d.a)(b,3),x=u[0],_=u[1],O=u[2];if(c||j||x)return Object(m.jsx)(v,{});if(!n||!p||!_)return null;if(s||h||O)return"\uc5d0\ub7ec \ubc1c\uc0dd";var g=n.data.genres.map((function(e){return Object(m.jsxs)("span",{children:[e.name,"\xa0"]})}));console.log(p.data.crew);var f=p.data.cast.map((function(e,t){return Object(m.jsxs)("div",{children:[null!==e.profile_path?Object(m.jsx)("img",{width:"100px",src:"https://image.tmdb.org/t/p/w500"+e.profile_path}):Object(m.jsx)("div",{width:"100px",height:"150px",background:"white"}),Object(m.jsx)("p",{children:e.name}),Object(m.jsx)("p",{children:e.known_for_department})]},t)})),w=p.data.crew.map((function(e,t){return Object(m.jsxs)("div",{children:[null!==e.profile_path?Object(m.jsx)("img",{width:"100px",src:"https://image.tmdb.org/t/p/w500"+e.profile_path}):Object(m.jsx)("div",{style:{width:"100px",height:"150px"},children:Object(m.jsx)("p",{style:{lineHeight:"150px"},children:"no picture"})}),Object(m.jsx)("p",{children:e.name}),Object(m.jsx)("p",{children:e.known_for_department})]},t)})),N=_.data.results.map((function(e){return Object(m.jsxs)("li",{onClick:function(){window.location.replace("/tv/"+e.id)},style:{cursor:"pointer"},children:[Object(m.jsx)("img",{width:"200px",height:"300px",src:"https://image.tmdb.org/t/p/w500"+e.poster_path}),Object(m.jsx)("p",{children:e.name.length<15?e.name:e.name.slice(0,15)+"..."})]},e.id)}));return Object(m.jsx)("div",{children:Object(m.jsx)($,{poster:"https://image.tmdb.org/t/p/w500"+n.data.poster_path,title:n.data.name,genres_list:g,vote_average:n.data.vote_average,first_air_date:null===n.data.first_air_date?"":n.data.first_air_date.slice(0,4),number_of_seasons:n.data.number_of_seasons,number_of_episodes:n.data.number_of_episodes,overview:n.data.overview,creditCast_list:f,creditCrew_list:w,similar_list:N},n.data.id)})},te=(a(115),function(){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("ul",{className:"category",children:[Object(m.jsx)("li",{children:Object(m.jsx)(n.b,{exact:!0,to:"/react-movie-app",children:Object(m.jsx)("p",{className:"nav_selected",children:"Movie"})})}),Object(m.jsx)("li",{children:Object(m.jsx)(n.b,{exact:!0,to:"/tv",children:Object(m.jsx)("p",{className:"nav_selected",children:"TV"})})})]}),Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{exact:!0,path:"/react-movie-app",component:R}),Object(m.jsx)(l.a,{exact:!0,path:"/movie/:movie_id",component:G}),Object(m.jsx)(l.a,{exact:!0,path:"/tv",component:Y}),Object(m.jsx)(l.a,{exact:!0,path:"/tv/:tv_id",component:ee}),Object(m.jsx)(l.a,{path:"/",children:Object(m.jsx)("h1",{className:"notFound",children:"Not found :("})})]})]})}),ae=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,117)).then((function(t){var a=t.getCLS,i=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),i(e),c(e),n(e),s(e)}))};r.a.render(Object(m.jsx)(n.a,{children:Object(m.jsx)(te,{})}),document.getElementById("root")),ae()},16:function(e,t,a){e.exports={Container:"Items_Container__C9ZsV",contents:"Items_contents__1mTdF"}},3:function(e,t,a){e.exports={container:"detail_container__32hRP",thumbnail:"detail_thumbnail__2rJP2",desc_container:"detail_desc_container__3e4wZ",preview:"detail_preview__1OAOy",similar:"detail_similar__3HpV6",creditCast:"detail_creditCast__xhGri",creditCrew:"detail_creditCrew__mOdHj",overview:"detail_overview__2zWcV",videoList:"detail_videoList__1FyQh",similarList:"detail_similarList__3UgF2"}},48:function(e,t,a){e.exports={movieContainer:"MovieList_movieContainer__2NQCV"}},50:function(e,t,a){},55:function(e,t,a){}},[[116,1,2]]]);
//# sourceMappingURL=main.1099cbd5.chunk.js.map