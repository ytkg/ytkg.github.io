(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{154:function(t,e,a){"use strict";a.r(e);var n=a(9),r=(a(0),a(157)),i=a(170),o=a(4),s=a.n(o),c=a(155),l=Object(r.a)("div",{target:"expqaej0"})({name:"xi606m",styles:"text-align:center;"}),b=Object(r.a)("div",{target:"expqaej1"})({name:"xgfv4s",styles:"display:flex;align-items:center;justify-content:center;flex-direction:row;height:78vh;"}),u=Object(r.a)("p",{target:"expqaej2"})({name:"ekrh3a",styles:"padding:0;margin-bottom:1rem;font-size:1.4rem;"}),d=Object(r.a)("h1",{target:"expqaej3"})({name:"76m1uk",styles:"font-size:3.5rem;margin-bottom:0;"});d.propTypes={siteTitle:s.a.string},d.defaultProps={siteTitle:""};var p=function(){return Object(n.b)(c.b,{query:"1846427949",render:function(t){return Object(n.b)(b,null,Object(n.b)(l,null,Object(n.b)(d,null,t.site.siteMetadata.title),Object(n.b)(u,null,"Software Developer")))},data:i})},g=a(162),m=a(160);e.default=function(){return Object(n.b)(g.a,null,Object(n.b)(m.a,{title:"Home",keywords:["gatsby","application","react"]}),Object(n.b)(p,null))}},155:function(t,e,a){"use strict";a.d(e,"b",function(){return u});var n=a(9),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(36),l=a.n(c);a.d(e,"a",function(){return l.a});a(156);var b=i.a.createContext({}),u=function(t){return Object(n.b)(b.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(n.b)("div",null,"Loading (StaticQuery)")})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},156:function(t,e,a){var n;t.exports=(n=a(159))&&n.default||n},158:function(t){t.exports={data:{site:{siteMetadata:{title:"takagi.dev"}}}}},159:function(t,e,a){"use strict";a.r(e);a(58);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(59),c=a(2),l=function(t){var e=t.location,a=c.default.getResourcesForPathnameSync(e.pathname);return a?r.a.createElement(s.a,Object.assign({location:e,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=l},160:function(t,e,a){"use strict";var n=a(9),r=a(161),i=(a(0),a(4)),o=a.n(i),s=a(163),c=a.n(s);function l(t){var e=t.description,a=t.lang,i=t.meta,o=t.keywords,s=t.title,l=r.data.site,b=e||l.siteMetadata.description;return Object(n.b)(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:b},{property:"og:title",content:s},{property:"og:description",content:b},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:b}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=l},161:function(t){t.exports={data:{site:{siteMetadata:{title:"takagi.dev",description:"A minimal blog starter built with Gatsbyjs. The needed Gatsby files are included.",author:"@ytkg"}}}}},162:function(t,e,a){"use strict";var n=a(157),r=a(9),i=a(158),o=a(0),s=a.n(o),c=a(4),l=a.n(c),b=a(155),u=Object(n.a)("div",{target:"e2i1wbd0"})({name:"k1grrt",styles:"max-width:860px;padding:1rem 1.0875rem;font-size:1.2rem;"}),d=Object(n.a)(b.a,{target:"e2i1wbd1"})({name:"1wj6arw",styles:'color:black;margin-left:15px;text-decoration:none;display:inline-block;position:relative;::after{content:"";position:absolute;width:100%;transform:scaleX(0);height:2px;bottom:0;left:0;background-color:rgba(0,0,0,0.8);transform-origin:bottom right;transition:transform 0.4s cubic-bezier(0.86,0,0.07,1);}:hover::after{transform:scaleX(1);transform-origin:bottom left;}'}),p=Object(n.a)("a",{target:"e2i1wbd2"})({name:"1wj6arw",styles:'color:black;margin-left:15px;text-decoration:none;display:inline-block;position:relative;::after{content:"";position:absolute;width:100%;transform:scaleX(0);height:2px;bottom:0;left:0;background-color:rgba(0,0,0,0.8);transform-origin:bottom right;transition:transform 0.4s cubic-bezier(0.86,0,0.07,1);}:hover::after{transform:scaleX(1);transform-origin:bottom left;}'}),g=Object(n.a)(d,{target:"e2i1wbd3"})({name:"qbubgm",styles:"margin-left:0;"}),m=Object(n.a)("header",{target:"e2i1wbd4"})({name:"1pyi7sa",styles:"background:transparent;display:flex;align-content:center;justify-content:center;"}),f=function(t){var e=t.siteTitle;return Object(r.b)(m,null,Object(r.b)(u,null,Object(r.b)("p",null,Object(r.b)(g,{to:"/"},e),Object(r.b)(d,{to:"/blog"},"Blog"),Object(r.b)(p,{href:"https://github.com/ytkg",target:"_blank"},"GitHub"))))};f.propTypes={siteTitle:l.a.string},f.defaultProps={siteTitle:""};var y=f,j=(a(149),Object(n.a)("div",{target:"e1ehxxwc0"})({name:"1813l62",styles:"margin:0 auto;max-width:860px;padding:0 1.0875rem 1rem;padding-top:0;"})),h=Object(n.a)("a",{target:"e1ehxxwc1"})({name:"o5uqvq",styles:"margin-left:5px;"}),w=Object(n.a)("footer",{target:"e1ehxxwc2"})({name:"1l4w6pd",styles:"display:flex;justify-content:center;"}),O=function(t){var e=t.children;return Object(r.b)(b.b,{query:"755544856",render:function(t){return Object(r.b)(s.a.Fragment,null,Object(r.b)(y,{siteTitle:t.site.siteMetadata.title}),Object(r.b)(j,null,Object(r.b)("main",null,e),Object(r.b)(w,null,"© ",(new Date).getFullYear(),", Built with"," ",Object(r.b)(h,{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:i})};O.propTypes={children:l.a.node.isRequired};e.a=O},170:function(t){t.exports={data:{site:{siteMetadata:{title:"takagi.dev"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-ec4ab799cc37964431d2.js.map