(this["webpackJsonpmovie-app-with-redux"]=this["webpackJsonpmovie-app-with-redux"]||[]).push([[0],{115:function(e,t,i){},116:function(e,t,i){"use strict";i.r(t);var a,c=i(1),n=i(7),s=i(41),r=i.n(s),o=(i(55),i(3)),l=i(6),d=i(5),j=i(20),p=i(42),h=i.n(p),b=i(21),m=i(0),v=b.a.div(a||(a=Object(j.a)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),u=function(){return Object(m.jsx)(v,{children:Object(m.jsx)(h.a,{type:"Puff",color:"#00BFFF",height:150,width:150})})},x=i(16),O=i.n(x),_=function(e){var t=e.movie_id,i=e.title,a=e.poster,c=e.release_date;return Object(m.jsxs)("div",{className:O.a.Container,children:[Object(m.jsx)(n.b,{exact:!0,to:"/movie/"+t,children:a&&Object(m.jsx)("div",{className:O.a.thumbnail,children:Object(m.jsx)("img",{src:a,alt:"poster",style:{width:"200px",height:"300px"}})})}),Object(m.jsxs)("div",{className:O.a.contents,children:[Object(m.jsx)("h3",{children:i}),Object(m.jsx)("p",{children:c})]})]})},g=i(9),f=i.n(g),w=function(e){var t=e.movie_id,i=e.title,a=e.poster,c=e.release_date,s=e.overview;return Object(m.jsxs)("div",{className:f.a.Container,children:[Object(m.jsx)(n.b,{exact:!0,to:"/movie/"+t,children:a&&Object(m.jsx)("div",{className:f.a.thumbnail,children:Object(m.jsx)("img",{src:a,alt:"poster",style:{width:"500px",height:"500px"}})})}),Object(m.jsx)(n.b,{exact:!0,to:"/movie/"+t,children:Object(m.jsxs)("div",{className:f.a.description,children:[Object(m.jsx)("h1",{children:i}),Object(m.jsx)("p",{className:f.a.release_date,children:c}),Object(m.jsx)("p",{className:f.a.summary,children:"\uc904\uac70\ub9ac"}),Object(m.jsx)("p",{className:f.a.overview,children:s})]})})]})},N=i(47),y=i.n(N),k=i(29),C=i.n(k),S=i(48);function F(e){var t=Object(c.useState)(!1),i=Object(d.a)(t,2),a=i[0],n=i[1],s=Object(c.useState)(null),r=Object(d.a)(s,2),o=r[0],l=r[1],j=Object(c.useState)(null),p=Object(d.a)(j,2),h=p[0],b=p[1];return Object(c.useEffect)((function(){(function(){var t=Object(S.a)(C.a.mark((function t(){var i;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(!0),t.prev=1,t.next=4,e();case 4:i=t.sent,l(i),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),b(t.t0);case 11:n(!1);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}})()()}),[]),[a,o,h]}var M,I,L="7db3edc572c4459c628c28ce8cec50fa",T=["ko-KR","pt-US"],z=b.a.div(M||(M=Object(j.a)(["\n  margin: 3% auto;\n  width: 100%;\n  .slick-prev:before {\n    color: gray; // \ubc84\ud2bc \uc0c9\uc740 \uac80\uc740\uc0c9\uc73c\ub85c\n    font-size: 50px;\n  }\n  .slick-prev {\n    z-index: 9999;\n    left: -55px;\n  }\n  .slick-next:before {\n    color: gray; // \ubc84\ud2bc \uc0c9\uc740 \uac80\uc740\uc0c9\uc73c\ub85c\n    font-size: 50px;\n  }\n  .slick-next {\n    z-index: 9999;\n    right: -10px;\n  }\n  h2 {\n    color: white;\n    margin-bottom: 10px;\n  }\n"]))),B=b.a.div(I||(I=Object(j.a)(["\n  margin: 0 auto;\n  width: 1300px;\n  padding-top: 30px;\n  h2 {\n    margin-bottom: 5px;\n  }\n  .slick-list {\n    width: 1300px;\n    margin-left: 0;\n  }\n  .slick-dots {\n  }\n  .slick-dots li.slick-active button:before {\n    color: white;\n  }\n  .slick-dots button:before {\n    color: white;\n  }\n"]))),P={dots:!1,arrows:!0,infinite:!0,speed:500,slidesToShow:6,slidesToScroll:1},q={dots:!0,arrows:!1,autoplay:!0,autoplaySpeed:5e3,infinite:!0,speed:2e3,slidesToShow:1,slidesToScroll:1,pauseOnHover:!1},Q=i(8),V=i.n(Q),E=i(15),J=i.n(E),R=(i(113),i(114),function(){var e=["https://api.themoviedb.org/3/movie/848278/recommendations?api_key=".concat(L,"&language=").concat(T[0],"&page=1"),"https://api.themoviedb.org/3/movie/popular?api_key=".concat(L,"&language=").concat(T[0],"&page=1"),"https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(L,"&language=").concat(T[0],"&page=1"),"https://api.themoviedb.org/3/movie/upcoming?api_key=".concat(L,"&language=").concat(T[0],"&page=1"),"https://api.themoviedb.org/3/movie/now_playing?api_key=".concat(L,"&language=").concat(T[0],"&page=1")],t=F((function(){return V.a.get(e[0])})),i=Object(d.a)(t,3),a=i[0],c=i[1],n=i[2],s=F((function(){return V.a.get(e[1])})),r=Object(d.a)(s,3),o=r[0],j=r[1],p=r[2],h=F((function(){return V.a.get(e[2])})),b=Object(d.a)(h,3),v=b[0],x=b[1],O=b[2],g=F((function(){return V.a.get(e[3])})),f=Object(d.a)(g,3),N=f[0],k=f[1],C=f[2];return a||o||v||N?Object(m.jsx)(u,{}):c&&j&&x&&k?n||p||O||C?"\uc5d0\ub7ec \ubc1c\uc0dd":Object(m.jsxs)("div",{className:y.a.movieContainer,children:[Object(m.jsx)(B,{children:Object(m.jsx)(J.a,Object(l.a)(Object(l.a)({},q),{},{children:c.data.results.slice(0,5).map((function(e){return Object(m.jsx)(w,{movie_id:e.id,title:e.title,poster:"https://image.tmdb.org/t/p/w500"+e.poster_path,release_date:e.release_date.slice(0,4),overview:e.overview.length<100?e.overview:e.overview.slice(0,100)+"..."},e.id)}))}))}),Object(m.jsxs)(z,{children:[Object(m.jsx)("h2",{children:"\uc778\uae30"}),Object(m.jsx)(J.a,Object(l.a)(Object(l.a)({},P),{},{children:j.data.results.map((function(e){return Object(m.jsx)(_,{movie_id:e.id,title:e.title.length<12?e.title:e.title.slice(0,12)+"...",poster:"https://image.tmdb.org/t/p/w500"+e.poster_path,release_date:e.release_date.slice(0,4)},e.id)}))}))]}),Object(m.jsxs)(z,{children:[Object(m.jsx)("h2",{children:"\ud3c9\uc810 \ub192\uc740 \uc21c"}),Object(m.jsx)(J.a,Object(l.a)(Object(l.a)({},P),{},{children:x.data.results.map((function(e){return Object(m.jsx)(_,{movie_id:e.id,title:e.title.length<12?e.title:e.title.slice(0,12)+"...",poster:"https://image.tmdb.org/t/p/w500"+e.poster_path,release_date:e.release_date.slice(0,4)},e.id)}))}))]}),Object(m.jsxs)(z,{children:[Object(m.jsx)("h2",{children:"\uac1c\ubd09 \uc608\uc815"}),Object(m.jsx)(J.a,Object(l.a)(Object(l.a)({},P),{},{children:k.data.results.map((function(e){return Object(m.jsx)(_,{movie_id:e.id,title:e.title.length<12?e.title:e.title.slice(0,12)+"...",poster:"https://image.tmdb.org/t/p/w500"+e.poster_path,release_date:e.release_date.slice(0,4)},e.id)}))}))]})]}):null}),D=i(14),H=i.n(D),K=i(50),U=function(e){var t=e.poster,i=e.title,a=e.genres_list,c=e.vote_average,n=e.release_date,s=e.runtime,r=e.overview,o=e.videos_list,l=e.similar_list;return Object(m.jsxs)("div",{className:H.a.container,children:[Object(m.jsx)("div",{className:H.a.thumbnail,children:Object(m.jsx)("img",{width:"500",src:"https://image.tmdb.org/t/p/w500"+t})}),Object(m.jsxs)("div",{className:H.a.desc_container,children:[Object(m.jsx)("h1",{children:i}),Object(m.jsx)("p",{className:H.a.genres,children:a}),Object(m.jsxs)("p",{className:H.a.detail,children:[Object(m.jsx)(K.a,{style:{color:"yellow"}}),c,"\xa0\xa0",n,"\xa0\xa0",s,"min"]}),Object(m.jsx)("p",{className:H.a.overview,children:r}),Object(m.jsx)("p",{className:H.a.preview,children:"Preview"}),Object(m.jsx)("div",{className:H.a.videoList,children:0!==o.length?o:Object(m.jsx)("p",{children:"Sorry, there's no trailer"})}),Object(m.jsx)("p",{className:H.a.similar,children:"Similar"}),Object(m.jsx)("div",{className:H.a.similarList,children:Object(m.jsx)("ul",{style:{width:230*l.length},children:l})})]})]})},W=function(){var e=Object(o.f)().movie_id,t=["https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(L,"&language=").concat(T[0]),"https://api.themoviedb.org/3/movie/".concat(e,"/videos?api_key=").concat(L,"&language=").concat(T[0]),"https://api.themoviedb.org/3/movie/".concat(e,"/similar?api_key=").concat(L,"&language=").concat(T[0],"&page=1")],i=F((function(){return V.a.get(t[0])})),a=Object(d.a)(i,3),c=a[0],n=a[1],s=a[2],r=F((function(){return V.a.get(t[1])})),l=Object(d.a)(r,3),j=l[0],p=l[1],h=l[2],b=F((function(){return V.a.get(t[2])})),v=Object(d.a)(b,3),x=v[0],O=v[1],_=v[2];if(c||j||x)return Object(m.jsx)(u,{});if(!n||!p||!O)return null;if(s||h||_)return"\uc5d0\ub7ec \ubc1c\uc0dd";var g=n.data.genres.map((function(e){return Object(m.jsxs)("span",{children:[e.name,"\xa0"]})})),f=p.data.results.map((function(e,t){return Object(m.jsx)("div",{children:Object(m.jsx)("iframe",{width:"420",height:"300",src:"https://www.youtube.com/embed/"+e.key+"?autoplay=0",frameBorder:"0",allowFullScreen:"allowFullScreen"})},t)})),w=O.data.results.map((function(e){return Object(m.jsxs)("li",{onClick:function(){window.location.replace("/movie/"+e.id)},style:{cursor:"pointer"},children:[Object(m.jsx)("img",{width:"200px",height:"300px",src:"https://image.tmdb.org/t/p/w500"+e.poster_path}),Object(m.jsx)("p",{children:e.title.length<15?e.title:e.title.slice(0,15)+"..."})]},e.id)}));return Object(m.jsx)("div",{children:Object(m.jsx)(U,{poster:"https://image.tmdb.org/t/p/w500"+n.data.poster_path,title:n.data.title,genres_list:g,vote_average:n.data.vote_average,release_date:n.data.release_date.slice(0,4),runtime:n.data.runtime,overview:n.data.overview,videos_list:f,similar_list:w},n.data.id)})},Z=function(e){var t=e.tv_id,i=e.title,a=e.poster,c=e.first_air_date,s=e.overview;return Object(m.jsxs)("div",{className:f.a.Container,children:[Object(m.jsx)(n.b,{exact:!0,to:"/tv/"+t,children:a&&Object(m.jsx)("div",{className:f.a.thumbnail,children:Object(m.jsx)("img",{src:a,alt:"poster",style:{width:"500px",height:"500px"}})})}),Object(m.jsx)(n.b,{exact:!0,to:"/tv/"+t,children:Object(m.jsxs)("div",{className:f.a.description,children:[Object(m.jsx)("h1",{children:i}),Object(m.jsx)("p",{className:f.a.release_date,children:c}),Object(m.jsx)("p",{className:f.a.summary,children:"\uc904\uac70\ub9ac"}),Object(m.jsx)("p",{className:f.a.overview,children:s})]})})]})},A=function(e){var t=e.tv_id,i=e.title,a=e.poster,c=e.first_air_date;return Object(m.jsxs)("div",{className:O.a.Container,children:[Object(m.jsx)(n.b,{exact:!0,to:"/tv/"+t,children:a&&Object(m.jsx)("div",{className:O.a.thumbnail,children:Object(m.jsx)("img",{src:a,alt:"poster",style:{width:"200px",height:"300px"}})})}),Object(m.jsxs)("div",{className:O.a.contents,children:[Object(m.jsx)("h3",{children:i}),Object(m.jsx)("p",{children:c})]})]})},G=i(49),X=i.n(G),Y=function(){var e=["https://api.themoviedb.org/3/tv/81356/recommendations?api_key=".concat(L,"&language=").concat(T[0],"&page=1"),"https://api.themoviedb.org/3/tv/popular?api_key=".concat(L,"&language=").concat(T[0],"&page=1"),"https://api.themoviedb.org/3/tv/top_rated?api_key=".concat(L,"&language=").concat(T[0],"&page=1"),"https://api.themoviedb.org/3/tv/on_the_air?api_key=".concat(L,"&language=").concat(T[0],"&page=1")],t=F((function(){return V.a.get(e[0])})),i=Object(d.a)(t,3),a=i[0],c=i[1],n=i[2],s=F((function(){return V.a.get(e[1])})),r=Object(d.a)(s,3),o=r[0],j=r[1],p=r[2],h=F((function(){return V.a.get(e[2])})),b=Object(d.a)(h,3),v=b[0],x=b[1],O=b[2],_=F((function(){return V.a.get(e[3])})),g=Object(d.a)(_,3),f=g[0],w=g[1],N=g[2];return a||o||v||f?Object(m.jsx)(u,{}):c&&j&&x&&w?n||p||O||N?"\uc5d0\ub7ec \ubc1c\uc0dd":(console.log(j.data.results),console.log(x.data.results),console.log(w.data.results),Object(m.jsxs)("div",{className:X.a.tvContainer,children:[Object(m.jsx)(B,{children:Object(m.jsx)(J.a,Object(l.a)(Object(l.a)({},q),{},{children:c.data.results.slice(0,5).map((function(e){return Object(m.jsx)(Z,{tv_id:e.id,title:e.title,poster:"https://image.tmdb.org/t/p/w500"+e.poster_path,first_air_date:e.first_air_date.slice(0,4),overview:e.overview.length<100?e.overview:e.overview.slice(0,100)+"..."},e.id)}))}))}),Object(m.jsxs)(z,{children:[Object(m.jsx)("h2",{children:"\uc778\uae30"}),Object(m.jsx)(J.a,Object(l.a)(Object(l.a)({},P),{},{children:j.data.results.map((function(e){return Object(m.jsx)(A,{tv_id:e.id,poster:"https://image.tmdb.org/t/p/w500"+e.poster_path,first_air_date:e.first_air_date.slice(0,4)},e.id)}))}))]}),Object(m.jsxs)(z,{children:[Object(m.jsx)("h2",{children:"\ud3c9\uc810 \ub192\uc740 \uc21c"}),Object(m.jsx)(J.a,Object(l.a)(Object(l.a)({},P),{},{children:x.data.results.map((function(e){return Object(m.jsx)(A,{tv_id:e.id,title:e.name.length<12?e.name:e.name.slice(0,12)+"...",poster:"https://image.tmdb.org/t/p/w500"+e.poster_path,first_air_date:e.first_air_date.slice(0,4)},e.id)}))}))]}),Object(m.jsxs)(z,{children:[Object(m.jsx)("h2",{children:"\ud604\uc7ac \uc0c1\uc601\uc791"}),Object(m.jsx)(J.a,Object(l.a)(Object(l.a)({},P),{},{children:w.data.results.map((function(e){return Object(m.jsx)(A,{tv_id:e.id,title:e.name.length<12?e.name:e.name.slice(0,12)+"...",poster:"https://image.tmdb.org/t/p/w500"+e.poster_path,first_air_date:e.first_air_date.slice(0,4)},e.id)}))}))]})]})):null},$=function(){return Object(m.jsx)("div",{})},ee=(i(115),function(){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("ul",{className:"category",children:[Object(m.jsx)("li",{children:Object(m.jsx)(n.b,{exact:!0,to:"/react-movie-app",children:Object(m.jsx)("p",{className:"nav_selected",children:"Movie"})})}),Object(m.jsx)("li",{children:Object(m.jsx)(n.b,{exact:!0,to:"/tv",children:Object(m.jsx)("p",{className:"nav_selected",children:"TV"})})})]}),Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{exact:!0,path:"/react-movie-app",component:R}),Object(m.jsx)(o.a,{exact:!0,path:"/movie/:movie_id",component:W}),Object(m.jsx)(o.a,{exact:!0,path:"/tv",component:Y}),Object(m.jsx)(o.a,{exact:!0,path:"/tv/:tv_id",component:$}),Object(m.jsx)(o.a,{path:"/",children:Object(m.jsx)("h1",{className:"notFound",children:"Not found :("})})]})]})}),te=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,117)).then((function(t){var i=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;i(e),a(e),c(e),n(e),s(e)}))};r.a.render(Object(m.jsx)(n.a,{children:Object(m.jsx)(ee,{})}),document.getElementById("root")),te()},14:function(e,t,i){e.exports={container:"Movie_detailed_container__SQyv4",thumbnail:"Movie_detailed_thumbnail__2-r4F",desc_container:"Movie_detailed_desc_container__CWzqQ",preview:"Movie_detailed_preview__3zx9-",similar:"Movie_detailed_similar__2Fmnu",overview:"Movie_detailed_overview__3uTeh",videoList:"Movie_detailed_videoList__3k1qS",similarList:"Movie_detailed_similarList__2qjsR"}},16:function(e,t,i){e.exports={Container:"Items_Container__C9ZsV",contents:"Items_contents__1mTdF"}},47:function(e,t,i){e.exports={movieContainer:"MovieList_movieContainer__2NQCV"}},49:function(e,t,i){},55:function(e,t,i){},9:function(e,t,i){e.exports={Container:"mainItems_Container__hPNN_",description:"mainItems_description__2xbj7",release_date:"mainItems_release_date__1o0br",summary:"mainItems_summary__2bxcc",overview:"mainItems_overview__BkN37"}}},[[116,1,2]]]);
//# sourceMappingURL=main.9728097a.chunk.js.map