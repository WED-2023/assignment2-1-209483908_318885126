(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[415],{8364:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});r(8309),r(9753),r(2222),r(7042);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[e.recipe?t("div",{staticClass:"recipe-container"},[t("div",{staticClass:"recipe-header mt-3 mb-4"},[t("h1",[e._v(e._s(e.recipe.title))]),t("img",{staticClass:"center recipe-image",attrs:{src:e.recipe.image}}),t("RecipeLogos",{attrs:{recipe:e.recipe}})],1),t("div",{staticClass:"recipe-body"},[t("div",{staticClass:"wrapper"},[t("div",{staticClass:"wrapped"},[t("div",{staticClass:"mb-3"},[t("div",[t("strong",[e._v("Ready in:")]),e._v(" "+e._s(e.recipe.readyInMinutes)+" minutes")]),t("div",[t("strong",[e._v("Likes:")]),e._v(" "+e._s(e.recipe.aggregateLikes)+" likes")]),t("div",[t("strong",[e._v("Servings:")]),e._v(" "+e._s(e.adjustedServings)+" "),t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.multiplier,expression:"multiplier",modifiers:{number:!0}}],staticClass:"ml-2 multiplier-input",attrs:{type:"number",min:"1",step:"0.5"},domProps:{value:e.multiplier},on:{input:function(t){t.target.composing||(e.multiplier=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})])]),t("h3",[e._v("Ingredients:")]),t("ul",{staticClass:"ingredients-list"},e._l(e.adjustedIngredients,(function(r,n){return t("li",{key:n+"_"+r.id},[e._v(" "+e._s(r)+" ")])})),0)]),t("div",{staticClass:"wrapped"},[t("h3",[e._v("Instructions:")]),e._l(e.recipe.analyzedInstructions,(function(r,n){return t("div",{key:n},[r.name?t("h4",[e._v(e._s(r.name))]):e._e(),t("ol",{staticClass:"instructions-list"},e._l(r.steps,(function(r,i){return t("li",{key:e.getCheckboxIndex(n,i)},[t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.completedSteps[e.getCheckboxIndex(n,i)],expression:"completedSteps[getCheckboxIndex(sectionIndex, stepIndex)]"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.completedSteps[e.getCheckboxIndex(n,i)])?e._i(e.completedSteps[e.getCheckboxIndex(n,i)],null)>-1:e.completedSteps[e.getCheckboxIndex(n,i)]},on:{change:[function(t){var r=e.completedSteps[e.getCheckboxIndex(n,i)],s=t.target,a=!!s.checked;if(Array.isArray(r)){var o=null,c=e._i(r,o);s.checked?c<0&&e.$set(e.completedSteps,e.getCheckboxIndex(n,i),r.concat([o])):c>-1&&e.$set(e.completedSteps,e.getCheckboxIndex(n,i),r.slice(0,c).concat(r.slice(c+1)))}else e.$set(e.completedSteps,e.getCheckboxIndex(n,i),a)},e.saveCheckboxState]}}),t("span",{staticClass:"step-number"},[e._v(e._s(i+1)+".")]),e._v(" "+e._s(r.step)+" ")])])})),0)])}))],2)])]),t("div",{staticClass:"progress-bar-container mt-4"},[t("b-progress",{attrs:{value:e.progressValue,variant:"success",striped:"",animated:""}})],1)]):e._e()])},i=[],s=r(124),a=r(8534),o=(r(4916),r(5306),r(1249),r(6535),r(9244),r(1539),r(7327),r(6977),r(8862),r(6647),r(3710),r(9714),r(1058),r(3290),r(5827),r(4839)),c=r(8327),u=r(1499);const l={components:{RecipeLogos:u.Z,BProgress:o.D},data:function(){return{recipe:null,isFavorite:!1,multiplier:1,adjustedIngredients:[],adjustedServings:0,completedSteps:[]}},created:function(){var e=this;return(0,a.Z)((0,s.Z)().mark((function t(){var r,n,i,a,o,u,l,p,d,v,h,g,f,m;return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,c.lQ)(e.$route.params.recipeId);case 3:if(r=t.sent,200===r.status){t.next=7;break}return e.$router.replace("/NotFound"),t.abrupt("return");case 7:n=r.data.recipe,i=n.analyzedInstructions,a=n.extendedIngredients,o=n.aggregateLikes,u=n.readyInMinutes,l=n.image,p=n.title,d=n.servings,v=n.glutenFree,h=n.vegetarian,g=n.vegan,f=n.id,e.adjustedIngredients=a.map((function(e){return e.original})),e.adjustedServings=d,m=i.flatMap((function(e){return e.steps})).length,e.completedSteps=e.getSavedCheckboxState(f,m),e.recipe={analyzedInstructions:i,extendedIngredients:a,aggregateLikes:o,readyInMinutes:u,image:l,title:p,servings:d,glutenFree:v,vegetarian:h,vegan:g,id:f},t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](0),console.error("Error while initializing the recipe view:",t.t0),e.$router.replace("/NotFound");case 19:case"end":return t.stop()}}),t,null,[[0,15]])})))()},watch:{multiplier:function(e,t){this.adjustQuantities()}},computed:{progressValue:function(){var e=this.completedSteps.length,t=this.completedSteps.filter((function(e){return e})).length;return e?t/e*100:0}},methods:{adjustQuantities:function(){var e=this;this.adjustedIngredients=this.recipe.extendedIngredients.map((function(t){var r=(t.amount*e.multiplier).toFixed(2);return"".concat(r," ").concat(t.unit," ").concat(t.originalName)})),this.adjustedServings=(this.recipe.servings*this.multiplier).toFixed(2)},saveCheckboxState:function(){sessionStorage.setItem("completedSteps_".concat(this.recipe.id),JSON.stringify(this.completedSteps)),sessionStorage.setItem("totalSteps_".concat(this.recipe.id),this.completedSteps.length.toString())},getSavedCheckboxState:function(e,t){var r=sessionStorage.getItem("completedSteps_".concat(e)),n=parseInt(sessionStorage.getItem("totalSteps_".concat(e)))||t;if(this.totalSteps=n,r){var i=JSON.parse(r);return Array.isArray(i)?i:new Array(n).fill(!1)}return new Array(n).fill(!1)},getCheckboxIndex:function(e,t){var r=this.recipe.analyzedInstructions.slice(0,e).reduce((function(e,t){return e+t.steps.length}),0);return r+t}}},p=l;var d=r(1001),v=(0,d.Z)(p,n,i,!1,null,"02d2162a",null);const h=v.exports},4839:(e,t,r)=>{"use strict";r.d(t,{D:()=>S});var n=r(1915),i=r(4689),s=r(2299),a=r(7040),o=r(451),c=r(8280),u=r(8735),l=r(3284),p=r(1578),d=r(3954),v=r(6595),h=(0,o.y2)({animated:(0,o.pi)(s.U5,null),label:(0,o.pi)(s.N0),labelHtml:(0,o.pi)(s.N0),max:(0,o.pi)(s.fE,null),precision:(0,o.pi)(s.fE,null),showProgress:(0,o.pi)(s.U5,null),showValue:(0,o.pi)(s.U5,null),striped:(0,o.pi)(s.U5,null),value:(0,o.pi)(s.fE,0),variant:(0,o.pi)(s.N0)},i.M3),g=(0,n.l7)({name:i.M3,mixins:[c.Z],inject:{getBvProgress:{default:function(){return function(){return{}}}}},props:h,computed:{bvProgress:function(){return this.getBvProgress()},progressBarClasses:function(){var e=this.computedAnimated,t=this.computedVariant;return[t?"bg-".concat(t):"",this.computedStriped||e?"progress-bar-striped":"",e?"progress-bar-animated":""]},progressBarStyles:function(){return{width:this.computedValue/this.computedMax*100+"%"}},computedValue:function(){return(0,d.f_)(this.value,0)},computedMax:function(){var e=(0,d.f_)(this.max)||(0,d.f_)(this.bvProgress.max,0);return e>0?e:100},computedPrecision:function(){return(0,p.nP)((0,d.Z3)(this.precision,(0,d.Z3)(this.bvProgress.precision,0)),0)},computedProgress:function(){var e=this.computedPrecision,t=(0,p.Fq)(10,e);return(0,d.FH)(100*t*this.computedValue/this.computedMax/t,e)},computedVariant:function(){return this.variant||this.bvProgress.variant},computedStriped:function(){return(0,l.jn)(this.striped)?this.striped:this.bvProgress.striped||!1},computedAnimated:function(){return(0,l.jn)(this.animated)?this.animated:this.bvProgress.animated||!1},computedShowProgress:function(){return(0,l.jn)(this.showProgress)?this.showProgress:this.bvProgress.showProgress||!1},computedShowValue:function(){return(0,l.jn)(this.showValue)?this.showValue:this.bvProgress.showValue||!1}},render:function(e){var t,r=this.label,n=this.labelHtml,i=this.computedValue,s=this.computedPrecision,a={};return this.hasNormalizedSlot()?t=this.normalizeSlot():r||n?a=(0,u.U)(n,r):this.computedShowProgress?t=this.computedProgress:this.computedShowValue&&(t=(0,d.FH)(i,s)),e("div",{staticClass:"progress-bar",class:this.progressBarClasses,style:this.progressBarStyles,attrs:{role:"progressbar","aria-valuemin":"0","aria-valuemax":(0,v.BB)(this.computedMax),"aria-valuenow":(0,d.FH)(i,s)},domProps:a},t)}});function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){x(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=(0,a.CE)(h,["label","labelHtml"]),y=(0,o.y2)((0,a.GE)(m(m({},b),{},{animated:(0,o.pi)(s.U5,!1),height:(0,o.pi)(s.N0),max:(0,o.pi)(s.fE,100),precision:(0,o.pi)(s.fE,0),showProgress:(0,o.pi)(s.U5,!1),showValue:(0,o.pi)(s.U5,!1),striped:(0,o.pi)(s.U5,!1)})),i.i),S=(0,n.l7)({name:i.i,mixins:[c.Z],provide:function(){var e=this;return{getBvProgress:function(){return e}}},props:y,computed:{progressHeight:function(){return{height:this.height||null}}},render:function(e){var t=this.normalizeSlot();return t||(t=e(g,{props:(0,o.uj)(b,this.$props)})),e("div",{staticClass:"progress",style:this.progressHeight},[t])}})},1530:(e,t,r)=>{"use strict";var n=r(8710).charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},1285:(e,t,r)=>{"use strict";var n=r(7908),i=r(1400),s=r(6244);e.exports=function(e){var t=n(this),r=s(t),a=arguments.length,o=i(a>1?arguments[1]:void 0,r),c=a>2?arguments[2]:void 0,u=void 0===c?r:i(c,r);while(u>o)t[o++]=e;return t}},3671:(e,t,r)=>{var n=r(9662),i=r(7908),s=r(8361),a=r(6244),o=TypeError,c=function(e){return function(t,r,c,u){n(r);var l=i(t),p=s(l),d=a(l),v=e?d-1:0,h=e?-1:1;if(c<2)while(1){if(v in p){u=p[v],v+=h;break}if(v+=h,e?v<0:d<=v)throw o("Reduce of empty array with no initial value")}for(;e?v>=0:d>v;v+=h)v in p&&(u=r(u,p[v],v,l));return u}};e.exports={left:c(!1),right:c(!0)}},7007:(e,t,r)=>{"use strict";r(4916);var n=r(1470),i=r(8052),s=r(2261),a=r(7293),o=r(5112),c=r(8880),u=o("species"),l=RegExp.prototype;e.exports=function(e,t,r,p){var d=o(e),v=!a((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),h=v&&!a((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[u]=function(){return r},r.flags="",r[d]=/./[d]),r.exec=function(){return t=!0,null},r[d](""),!t}));if(!v||!h||r){var g=n(/./[d]),f=t(d,""[e],(function(e,t,r,i,a){var o=n(e),c=t.exec;return c===s||c===l.exec?v&&!a?{done:!0,value:g(t,r,i)}:{done:!0,value:o(r,t,i)}:{done:!1}}));i(String.prototype,e,f[0]),i(l,d,f[1])}p&&c(l[d],"sham",!0)}},6790:(e,t,r)=>{"use strict";var n=r(3157),i=r(6244),s=r(7207),a=r(9974),o=function(e,t,r,c,u,l,p,d){var v,h,g=u,f=0,m=!!p&&a(p,d);while(f<c)f in r&&(v=m?m(r[f],f,t):r[f],l>0&&n(v)?(h=i(v),g=o(e,t,v,h,g,l-1)-1):(s(g+1),e[g]=v),g++),f++;return g};e.exports=o},647:(e,t,r)=>{var n=r(1702),i=r(7908),s=Math.floor,a=n("".charAt),o=n("".replace),c=n("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,n,p,d){var v=r+e.length,h=n.length,g=l;return void 0!==p&&(p=i(p),g=u),o(d,g,(function(i,o){var u;switch(a(o,0)){case"$":return"$";case"&":return e;case"`":return c(t,0,r);case"'":return c(t,v);case"<":u=p[c(o,1,-1)];break;default:var l=+o;if(0===l)return i;if(l>h){var d=s(l/10);return 0===d?i:d<=h?void 0===n[d-1]?a(o,1):n[d-1]+a(o,1):i}u=n[l-1]}return void 0===u?"":u}))}},7651:(e,t,r)=>{var n=r(6916),i=r(9670),s=r(614),a=r(4326),o=r(2261),c=TypeError;e.exports=function(e,t){var r=e.exec;if(s(r)){var u=n(r,e,t);return null!==u&&i(u),u}if("RegExp"===a(e))return n(o,e,t);throw c("RegExp#exec called on incompatible receiver")}},4706:(e,t,r)=>{var n=r(6916),i=r(2597),s=r(7976),a=r(7066),o=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in o||i(e,"flags")||!s(o,e)?t:n(a,e)}},3189:(e,t,r)=>{"use strict";var n=r(9303),i=r(1340),s=r(4488),a=RangeError;e.exports=function(e){var t=i(s(this)),r="",o=n(e);if(o<0||o==1/0)throw a("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(t+=t))1&o&&(r+=t);return r}},2222:(e,t,r)=>{"use strict";var n=r(2109),i=r(7293),s=r(3157),a=r(111),o=r(7908),c=r(6244),u=r(7207),l=r(6135),p=r(5417),d=r(1194),v=r(5112),h=r(7392),g=v("isConcatSpreadable"),f=h>=51||!i((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),m=function(e){if(!a(e))return!1;var t=e[g];return void 0!==t?!!t:s(e)},x=!f||!d("concat");n({target:"Array",proto:!0,arity:1,forced:x},{concat:function(e){var t,r,n,i,s,a=o(this),d=p(a,0),v=0;for(t=-1,n=arguments.length;t<n;t++)if(s=-1===t?a:arguments[t],m(s))for(i=c(s),u(v+i),r=0;r<i;r++,v++)r in s&&l(d,v,s[r]);else u(v+1),l(d,v++,s);return d.length=v,d}})},3290:(e,t,r)=>{var n=r(2109),i=r(1285),s=r(1223);n({target:"Array",proto:!0},{fill:i}),s("fill")},7327:(e,t,r)=>{"use strict";var n=r(2109),i=r(2092).filter,s=r(1194),a=s("filter");n({target:"Array",proto:!0,forced:!a},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},6535:(e,t,r)=>{"use strict";var n=r(2109),i=r(6790),s=r(9662),a=r(7908),o=r(6244),c=r(5417);n({target:"Array",proto:!0},{flatMap:function(e){var t,r=a(this),n=o(r);return s(e),t=c(r,0),t.length=i(t,r,r,n,0,1,e,arguments.length>1?arguments[1]:void 0),t}})},5827:(e,t,r)=>{"use strict";var n=r(2109),i=r(3671).left,s=r(9341),a=r(7392),o=r(5268),c=!o&&a>79&&a<83,u=c||!s("reduce");n({target:"Array",proto:!0,forced:u},{reduce:function(e){var t=arguments.length;return i(this,e,t,t>1?arguments[1]:void 0)}})},9244:(e,t,r)=>{var n=r(1223);n("flatMap")},3710:(e,t,r)=>{var n=r(1702),i=r(8052),s=Date.prototype,a="Invalid Date",o="toString",c=n(s[o]),u=n(s.getTime);String(new Date(NaN))!=a&&i(s,o,(function(){var e=u(this);return e===e?c(this):a}))},6977:(e,t,r)=>{"use strict";var n=r(2109),i=r(1702),s=r(9303),a=r(863),o=r(3189),c=r(7293),u=RangeError,l=String,p=Math.floor,d=i(o),v=i("".slice),h=i(1..toFixed),g=function(e,t,r){return 0===t?r:t%2===1?g(e,t-1,r*e):g(e*e,t/2,r)},f=function(e){var t=0,r=e;while(r>=4096)t+=12,r/=4096;while(r>=2)t+=1,r/=2;return t},m=function(e,t,r){var n=-1,i=r;while(++n<6)i+=t*e[n],e[n]=i%1e7,i=p(i/1e7)},x=function(e,t){var r=6,n=0;while(--r>=0)n+=e[r],e[r]=p(n/t),n=n%t*1e7},b=function(e){var t=6,r="";while(--t>=0)if(""!==r||0===t||0!==e[t]){var n=l(e[t]);r=""===r?n:r+d("0",7-n.length)+n}return r},y=c((function(){return"0.000"!==h(8e-5,3)||"1"!==h(.9,0)||"1.25"!==h(1.255,2)||"1000000000000000128"!==h(0xde0b6b3a7640080,0)}))||!c((function(){h({})}));n({target:"Number",proto:!0,forced:y},{toFixed:function(e){var t,r,n,i,o=a(this),c=s(e),p=[0,0,0,0,0,0],h="",y="0";if(c<0||c>20)throw u("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return l(o);if(o<0&&(h="-",o=-o),o>1e-21)if(t=f(o*g(2,69,1))-69,r=t<0?o*g(2,-t,1):o/g(2,t,1),r*=4503599627370496,t=52-t,t>0){m(p,0,r),n=c;while(n>=7)m(p,1e7,0),n-=7;m(p,g(10,n,1),0),n=t-1;while(n>=23)x(p,1<<23),n-=23;x(p,1<<n),m(p,1,1),x(p,2),y=b(p)}else m(p,0,r),m(p,1<<-t,0),y=b(p)+d("0",c);return c>0?(i=y.length,y=h+(i<=c?"0."+d("0",c-i)+y:v(y,0,i-c)+"."+v(y,i-c))):y=h+y,y}})},9714:(e,t,r)=>{"use strict";var n=r(6530).PROPER,i=r(8052),s=r(9670),a=r(1340),o=r(7293),c=r(4706),u="toString",l=RegExp.prototype,p=l[u],d=o((function(){return"/a/b"!=p.call({source:"a",flags:"b"})})),v=n&&p.name!=u;(d||v)&&i(RegExp.prototype,u,(function(){var e=s(this),t=a(e.source),r=a(c(e));return"/"+t+"/"+r}),{unsafe:!0})},5306:(e,t,r)=>{"use strict";var n=r(2104),i=r(6916),s=r(1702),a=r(7007),o=r(7293),c=r(9670),u=r(614),l=r(8554),p=r(9303),d=r(7466),v=r(1340),h=r(4488),g=r(1530),f=r(8173),m=r(647),x=r(7651),b=r(5112),y=b("replace"),S=Math.max,w=Math.min,_=s([].concat),I=s([].push),k=s("".indexOf),P=s("".slice),C=function(e){return void 0===e?e:String(e)},j=function(){return"$0"==="a".replace(/./,"$0")}(),O=function(){return!!/./[y]&&""===/./[y]("a","$0")}(),E=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));a("replace",(function(e,t,r){var s=O?"$":"$0";return[function(e,r){var n=h(this),s=l(e)?void 0:f(e,y);return s?i(s,e,n,r):i(t,v(n),e,r)},function(e,i){var a=c(this),o=v(e);if("string"==typeof i&&-1===k(i,s)&&-1===k(i,"$<")){var l=r(t,a,o,i);if(l.done)return l.value}var h=u(i);h||(i=v(i));var f=a.global;if(f){var b=a.unicode;a.lastIndex=0}var y=[];while(1){var j=x(a,o);if(null===j)break;if(I(y,j),!f)break;var O=v(j[0]);""===O&&(a.lastIndex=g(o,d(a.lastIndex),b))}for(var E="",$=0,A=0;A<y.length;A++){j=y[A];for(var N=v(j[0]),M=S(w(p(j.index),o.length),0),V=[],R=1;R<j.length;R++)I(V,C(j[R]));var F=j.groups;if(h){var B=_([N],V,M,o);void 0!==F&&I(B,F);var U=v(n(i,void 0,B))}else U=m(N,o,M,V,F,i);M>=$&&(E+=P(o,$,M)+U,$=M+N.length)}return E+P(o,$)}]}),!E||!j||O)}}]);
//# sourceMappingURL=415.5df646eb.js.map