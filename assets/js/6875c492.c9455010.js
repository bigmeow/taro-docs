"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[48610],{58630:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(93106),r=a(64107),l=a(77763);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(l.Z,{permalink:a,title:n.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),o&&n.createElement(l.Z,{permalink:o,title:n.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},79752:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(93106),r=a(15984),l=a(78598);function o({items:e,component:t=l.Z}){return n.createElement(n.Fragment,null,e.map((({content:e})=>n.createElement(r.n,{key:e.metadata.permalink,content:e},n.createElement(t,null,n.createElement(e,null))))))}},70661:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var n=a(93106),r=a(4706),l=a(64107),o=a(12441),s=a(54660),i=a(66022),c=a(13645),g=a(15071),u=a(58630),m=a(75989),p=a(79752);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d.apply(this,arguments)}function h(e){const t=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,l.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,l.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function b({tag:e}){const t=h(e);return n.createElement(n.Fragment,null,n.createElement(s.d,{title:t}),n.createElement(m.Z,{tag:"blog_tags_posts"}))}function f({tag:e,items:t,sidebar:a,listMetadata:r}){const o=h(e);return n.createElement(g.Z,{sidebar:a},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,o),n.createElement(c.Z,{href:e.allTagsPath},n.createElement(l.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement(p.Z,{items:t}),n.createElement(u.Z,{metadata:r}))}function E(e){return n.createElement(s.FG,{className:(0,r.Z)(i.k.wrapper.blogPages,i.k.page.blogTagPostListPage)},n.createElement(b,d({},e)),n.createElement(f,d({},e)))}}}]);