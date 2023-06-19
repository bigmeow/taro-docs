"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[92406],{79874:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?i.createElement(f,a(a({ref:t},u),{},{components:n})):i.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51242:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});n(93106);var i=n(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const a={title:"Cross-platform Development"},l=void 0,s={unversionedId:"envs",id:"version-3.x/envs",title:"Cross-platform Development",description:"Taro was originally designed to unify cross-platform development and has tried its best to smooth out the differences between multiple ends through runtime frameworks, components, and APIs, but there are still some differences between different platforms that cannot be eliminated, so in order to better realize cross-platform development, Taro provides the following solutions",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/envs.md",sourceDirName:".",slug:"/envs",permalink:"/taro-docs/en/docs/envs",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/envs.md",tags:[],version:"3.x",frontMatter:{title:"Cross-platform Development"},sidebar:"docs",previous:{title:"\u8282\u70b9\u83b7\u53d6",permalink:"/taro-docs/en/docs/ref"},next:{title:"Multi-Platform Synchronized Debugging",permalink:"/taro-docs/en/docs/envs-debug"}},p={},u=[{value:"Built-in environment variables",id:"built-in-environment-variables",level:2},{value:"process.env.TARO_ENV",id:"processenvtaro_env",level:3},{value:"Uniform interface for multi-terminal files",id:"uniform-interface-for-multi-terminal-files",level:2},{value:"Multiple platform components",id:"multiple-platform-components",level:3},{value:"Multiple platform scripting",id:"multiple-platform-scripting",level:3},{value:"Usage points",id:"usage-points",level:3},{value:"Use different pages in app.js",id:"use-different-pages-in-appjs",level:3},{value:"Make dependencies in node_modules parse multiple files as well",id:"make-dependencies-in-node_modules-parse-multiple-files-as-well",level:3}],c={toc:u};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,i.kt)("wrapper",r({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Taro was originally designed to unify cross-platform development and has tried its best to smooth out the differences between multiple ends through runtime frameworks, components, and APIs, but there are still some differences between different platforms that cannot be eliminated, so in order to better realize cross-platform development, Taro provides the following solutions"),(0,i.kt)("h2",r({},{id:"built-in-environment-variables"}),"Built-in environment variables"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: The way environment variables are used in the code, ",(0,i.kt)("a",r({parentName:"p"},{href:"/taro-docs/en/docs/best-practice#%E6%9C%80%E4%BD%B3%E7%BC%96%E7%A0%81%E6%96%B9%E5%BC%8F"}),"reference"))),(0,i.kt)("p",null,"Taro provides some built-in environment variables at compile time to help the user do some special handling"),(0,i.kt)("h3",r({},{id:"processenvtaro_env"}),"process.env.TARO_ENV"),(0,i.kt)("p",null,"Used to determine the current compilation type, currently there are ",(0,i.kt)("inlineCode",{parentName:"p"},"weapp")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"swan")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"alipay")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"h5")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"rn")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"tt")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"qq")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"quickapp")," eight values, This variable can be used to write code for different environments, and when compiling the code that does not belong to the current compile type will be removed  and only the code under the current compile type will be kept, for example, if you want to refer to different resources in the WeChat mini-program and H5 respectively"),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{className:"language-jsx"}),"if (process.env.TARO_ENV === 'weapp') {\n  require('path/to/weapp/name')\n} else if (process.env.TARO_ENV === 'h5') {\n  require('path/to/h5/name')\n}\n")),(0,i.kt)("p",null,"It can also be used in JSX to determine which components to load on different ends."),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{className:"language-jsx"}),"render () {\n  return (\n    <View>\n      {process.env.TARO_ENV === 'weapp' && <ScrollViewWeapp />}\n      {process.env.TARO_ENV === 'h5' && <ScrollViewH5 />}\n    </View>\n  )\n}\n")),(0,i.kt)("h2",r({},{id:"uniform-interface-for-multi-terminal-files"}),"Uniform interface for multi-terminal files"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"1.2.17 start support")),(0,i.kt)("p",null,"The built-in environment variables can solve most of the cross-end problems, but it will fill the code with logic judgment code, which affects the maintainability of the code, and also makes the code more and more ugly. To solve this problem, since ",(0,i.kt)("inlineCode",{parentName:"p"},"1.2.17"),", Taro provides another way of cross-end development as a supplement."),(0,i.kt)("p",null,"Developers can address features that differ across ends by using multiple platform files with a unified interface. For a feature, if there are differences between multiple ends, developers can modify the file into the naming form of ",(0,i.kt)("inlineCode",{parentName:"p"},"original file name + end type"),", so that the file code of different ends keeps a unified interface to the outside world, while the reference is still ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," the file with the original file name. Taro will change the loaded file to a file with the file name of the corresponding end type at compilation time, so as to achieve the purpose of loading the corresponding file for different ends."),(0,i.kt)("p",null,"The end type corresponds to the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"process.env.TARO_ENV"),"."),(0,i.kt)("p",null,"There are usually two usage scenarios."),(0,i.kt)("h3",r({},{id:"multiple-platform-components"}),"Multiple platform components"),(0,i.kt)("p",null,"If there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"Test")," component that exists in three different versions - WeChat mini-program, Baidu smart-program and H5 - then the code can be organized like this"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"test.js")," file, which is the default form of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Test")," component, is compiled to a version that is used outside of the  WeChat mini-program, Baidu smart-program and H5"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"test.h5.js")," file, which is the H5 version of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Test")," component"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"test.weapp.js")," file, which is the WeChat mini-program version of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Test")," component"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"test.swan.js")," file, which is the Baidu smart-program version of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Test")," component"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"test.qq.js")," file, which is the QQ mini-program version of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Test")," component"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"test.quickapp.js")," file, which is the quick app version of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Test")," component"),(0,i.kt)("p",null,"The four files, which expose a unified interface to the outside world, accept consistent parameters, but only have internal code implementations for their respective platforms"),(0,i.kt)("p",null,"When we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Test")," component, the reference remains the same as before, the ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," is a file name without the end type, and the end type suffix is automatically recognized and added at compile time"),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{className:"language-jsx"}),"import Test from '../../components/test'\n\n<Test argA={1} argA={2} />\n")),(0,i.kt)("h3",r({},{id:"multiple-platform-scripting"}),"Multiple platform scripting"),(0,i.kt)("p",null,"Similar to the multiple platform component, if there is a need to write different script logic code for different ends, we can handle it similarly, the only principle to follow is to keep the external interface of the multiple platform file consistent."),(0,i.kt)("p",null,"For example, we use ",(0,i.kt)("inlineCode",{parentName:"p"},"Taro.setNavigationBarTitle")," to set the page title on WeChat mini-program, and H5 uses ",(0,i.kt)("inlineCode",{parentName:"p"},"document.title"),", then you can encapsulate a ",(0,i.kt)("inlineCode",{parentName:"p"},"setTitle")," method to smooth out the difference between the two platforms."),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"set_title.h5.js"),",with the following code"),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="set_title.h5.js"',title:'"set_title.h5.js"'}),"export default function setTitle (title) {\n  document.title = title\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"set_title.weapp.js"),"\uff0cwith the following code"),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="set_title.weapp.js"',title:'"set_title.weapp.js"'}),"import Taro from '@tarojs/taro'\nexport default function setTitle (title) {\n  Taro.setNavigationBarTitle({\n    title\n  })\n}\n")),(0,i.kt)("p",null,"When called, the following is used"),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{className:"language-js"}),"import setTitle from '../utils/set_title'\n\nsetTitle('page title')\n")),(0,i.kt)("h3",r({},{id:"usage-points"}),"Usage points"),(0,i.kt)("p",null,"There are three key points of use for this cross-platform compatible writeup of the unified interface's multi-terminal files"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The corresponding files on different ends must have a unified interface and a unified call method"),(0,i.kt)("li",{parentName:"ul"},"It is better to have a platform-independent default file, so that there will be no error when using ts"),(0,i.kt)("li",{parentName:"ul"},"When referring to a file, only the default file name should be written, not the file suffix.")),(0,i.kt)("h3",r({},{id:"use-different-pages-in-appjs"}),"Use different pages in app.js"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"1.3.11 Start of support")),(0,i.kt)("p",null,"Depending on the environment, different ",(0,i.kt)("inlineCode",{parentName:"p"},"pages")," are returned, which can be written like this"),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{className:"language-js"}),"let pages = []\nif (process.env.TARO_ENV === 'weapp') {\n  pages = [\n    '/pages/index/index'\n  ]\n}\nif (process.env.TARO_ENV === 'swan') {\n  pages = [\n    '/pages/indexswan/indexswan'\n  ]\n}\nexport default {\n  pages\n}\n")),(0,i.kt)("h3",r({},{id:"make-dependencies-in-node_modules-parse-multiple-files-as-well"}),"Make dependencies in node_modules parse multiple files as well"),(0,i.kt)("p",null,"The multiple platform files in Taro 3 are parsed by the  ",(0,i.kt)("a",r({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/next/packages/taro-runner-utils/src/resolve/MultiPlatformPlugin.ts"}),"MultiPlatformPlugin")," plugin."),(0,i.kt)("p",null,"It is an ",(0,i.kt)("a",r({parentName:"p"},{href:"https://github.com/webpack/enhanced-resolve"}),"enhanced-resolve")," plugin, which is loaded internally by taro by default. However, the plugin does not resolve files in node_modules by default."),(0,i.kt)("p",null,"If we have an npm package called @taro-mobile and we need to parse the multiple platform files  in it, we can change the configuration of the MultiPlatformPlugin in the taro configuration file like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="/config/index.js"',title:'"/config/index.js"'}),"// mini can also be changed to h5, corresponding to the mini-program and h5 end configuration respectively\nmini: {\n  webpackChain (chain) {\n    chain.resolve.plugin('MultiPlatformPlugin')\n      .tap(args => {\n        return [...args, {\n          include: ['@taro-mobile']\n        }]\n      })\n  }\n}\n")),(0,i.kt)("p",null,"The Taro 3 RN side does not use webpack, so it can't be consistent with the other side, so a configuration support has to be added here."),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="/config/index.js"',title:'"/config/index.js"'}),"rn: {\n  resolve: {\n    include: ['@taro-mobile'],\n  }\n}\n")))}d.isMDXComponent=!0}}]);