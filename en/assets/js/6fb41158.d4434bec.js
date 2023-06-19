"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[33813],{79874:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||s;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83480:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c}});n(93106);var r=n(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={title:"Using NutUI Jingdong Style Component Library"},i=void 0,l={unversionedId:"nutui",id:"version-3.x/nutui",title:"Using NutUI Jingdong Style Component Library",description:"Note: NutUI must currently be developed using taro version 3.x + vue3 technology stack.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/nutui.mdx",sourceDirName:".",slug:"/nutui",permalink:"/taro-docs/en/docs/nutui",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/nutui.mdx",tags:[],version:"3.x",frontMatter:{title:"Using NutUI Jingdong Style Component Library"},sidebar:"docs",previous:{title:"\u4f7f\u7528 OSSA(React) UI\u7ec4\u4ef6\u5e93",permalink:"/taro-docs/en/docs/ossa"},next:{title:"Vant UI",permalink:"/taro-docs/en/docs/vant"}},u={},c=[{value:"Preview Experience",id:"preview-experience",level:2},{value:"How to Use",id:"how-to-use",level:2},{value:"Installation",id:"installation",level:3},{value:"Install Taro cli",id:"install-taro-cli",level:4},{value:"Check if the installation is successful",id:"check-if-the-installation-is-successful",level:3},{value:"Project initialization",id:"project-initialization",level:3},{value:"Select the Vue3 + NutUI template according to the image below in order",id:"select-the-vue3--nutui-template-according-to-the-image-below-in-order",level:4},{value:"NPM Usage examples",id:"npm-usage-examples",level:3},{value:"Recommended to use load-on-demand",id:"recommended-to-use-load-on-demand",level:3},{value:"Customized theme usage",id:"customized-theme-usage",level:3},{value:"First you need to configure the <strong>app.ts</strong> file to use scss style files such as",id:"first-you-need-to-configure-the-appts-file-to-use-scss-style-files-such-as",level:4},{value:"Create custom theme style files <code>assets/styles/custom_theme.scss</code> \uff0cStyle variable override table reference nutui variables",id:"create-custom-theme-style-files-assetsstylescustom_themescss-style-variable-override-table-reference-nutui-variables",level:4},{value:"The scss file then needs to be configured in the <strong>config/index.js</strong> file to globally override e.g:",id:"the-scss-file-then-needs-to-be-configured-in-the-configindexjs-file-to-globally-override-eg",level:4},{value:"Use in vue files to see the effect",id:"use-in-vue-files-to-see-the-effect",level:4}],p={toc:c};function m(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)("wrapper",o({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: NutUI must currently be developed using ",(0,r.kt)("strong",{parentName:"p"},"taro version 3.x + vue3")," technology stack.")),(0,r.kt)("p",null,"In order to provide developers with a more efficient and convenient way to develop, Taro and NutUI have joined forces and are now available with ",(0,r.kt)("a",o({parentName:"p"},{href:"https://nutui.jd.com/#/starttaro"}),"NutUI")," to develop mini program\uff0c",(0,r.kt)("a",o({parentName:"p"},{href:"https://nutui.jd.com/#/starttaro"}),"NutUI")," provides 30+ components covering most of the components used in daily business development\u3002"),(0,r.kt)("p",null,"Taro3 supports development using the ",(0,r.kt)("a",o({parentName:"p"},{href:"https://nutui.jd.com/#/starttaro"}),"NutUI")," component library, sample repository: ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/jdf2e/nutui-demo/tree/master/taro"}),"taro3-nutui"),"\u3002"),(0,r.kt)("h2",o({},{id:"preview-experience"}),"Preview Experience"),(0,r.kt)("img",{src:"https://img12.360buyimg.com/imagetools/jfs/t1/162421/39/13392/9425/6052ea60E592310a9/264bdff23ef5fe95.png",width:"200",alt:"NutUI"}),(0,r.kt)("img",{src:"https://storage.360buyimg.com/jdc-article/gh_f2231eb941be_258.jpg",width:"200",alt:"NutUI"}),(0,r.kt)("h2",o({},{id:"how-to-use"}),"How to Use"),(0,r.kt)("h3",o({},{id:"installation"}),"Installation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use Npm or Yarn Install")),(0,r.kt)("h4",o({},{id:"install-taro-cli"}),"Install Taro cli"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"# use npm install CLI\nnpm install -g @tarojs/cli\n\n# OR use yarn install CLI\nyarn global add @tarojs/cli\n\n# OR installed cnpm\uff0cuse cnpm install CLI\ncnpm install -g @tarojs/cli\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"It is worth mentioning that if the installation process results in sass-related installation errors, please retry after installing mirror-config-china.")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"npm install -g mirror-config-china\n")),(0,r.kt)("h3",o({},{id:"check-if-the-installation-is-successful"}),"Check if the installation is successful"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"taro -v\n")),(0,r.kt)("h3",o({},{id:"project-initialization"}),"Project initialization"),(0,r.kt)("p",null,"Use the command to create a template:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"taro init myApp\n")),(0,r.kt)("h4",o({},{id:"select-the-vue3--nutui-template-according-to-the-image-below-in-order"}),"Select the Vue3 + NutUI template according to the image below in order"),(0,r.kt)("img",{src:"https://storage.360buyimg.com/jdc-article/taro.jpg"}),(0,r.kt)("h3",o({},{id:"npm-usage-examples"}),"NPM Usage examples"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-javascript"}),'import { createApp } from "vue";\nimport App from "./App.vue";\nimport NutUI from "@nutui/nutui-taro";\nimport "@nutui/nutui-taro/dist/style.css";\ncreateApp(App).use(NutUI);\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: This method will import all components")),(0,r.kt)("h3",o({},{id:"recommended-to-use-load-on-demand"}),"Recommended to use load-on-demand"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-javascript"}),'import { createApp } from "vue";\nimport App from "./App.vue";\nimport { Button, Cell, Icon } from "@nutui/nutui-taro";\nimport "@nutui/nutui-taro/dist/style.css";\ncreateApp(App).use(Button).use(Cell).use(Icon);\n')),(0,r.kt)("h3",o({},{id:"customized-theme-usage"}),"Customized theme usage"),(0,r.kt)("h4",o({},{id:"first-you-need-to-configure-the-appts-file-to-use-scss-style-files-such-as"}),"First you need to configure the ",(0,r.kt)("strong",{parentName:"h4"},"app.ts")," file to use scss style files such as"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-javascript"}),'import { createApp } from "vue";\nimport App from "./App.vue";\nimport { Button, Cell, Icon } from "@nutui/nutui-taro";\n// Customized themes must use scss \nimport \'@nutui/nutui-taro/dist/styles/themes/default.scss\';\ncreateApp(App).use(Button).use(Cell).use(Icon);\n')),(0,r.kt)("h4",o({},{id:"create-custom-theme-style-files-assetsstylescustom_themescss-style-variable-override-table-reference-nutui-variables"}),"Create custom theme style files ",(0,r.kt)("inlineCode",{parentName:"h4"},"assets/styles/custom_theme.scss")," \uff0cStyle variable override table reference ",(0,r.kt)("a",o({parentName:"h4"},{href:"https://github.com/jdf2e/nutui/blob/next/src/packages/styles/variables.scss"}),"nutui variables")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"custom_theme.scss")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-scss"}),"$primary-color: #478EF2;\n$primary-color-end: #496AF2;\n")),(0,r.kt)("h4",o({},{id:"the-scss-file-then-needs-to-be-configured-in-the-configindexjs-file-to-globally-override-eg"}),"The scss file then needs to be configured in the ",(0,r.kt)("strong",{parentName:"h4"},"config/index.js")," file to globally override e.g:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-javascript"}),"const path = require('path');\nconst config = {\n  deviceRatio: {\n    640: 2.34 / 2,\n    750: 1,\n    828: 1.81 / 2,\n    375: 2 / 1\n  },\n  sass: {\n        resource: [\n            path.resolve(__dirname, '..', 'src/assets/styles/custom_theme.scss')\n        ]\n    },\n  // ...\n")),(0,r.kt)("h4",o({},{id:"use-in-vue-files-to-see-the-effect"}),"Use in vue files to see the effect"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-html"}),'<template>\n  <view>\n      <nut-button type="primary" >nutui</nut-button>\n  </view>\n</template>\n')))}m.isMDXComponent=!0}}]);