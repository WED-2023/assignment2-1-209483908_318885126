"use strict";(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[250],{5290:(e,t,s)=>{s.r(t),s.d(t,{default:()=>_});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[e.recipe?t("div",{staticClass:"recipe-container"},[t("div",{staticClass:"recipe-header mt-3 mb-4"},[t("h1",[e._v(e._s(e.recipe.title))]),t("h3",[t("span",[e._v("Owner:")]),e._v(" "+e._s(e.recipe.owner))]),t("img",{staticClass:"center recipe-image",attrs:{src:e.recipe.image}}),t("div",{staticClass:"image-container"},[t("img",{attrs:{src:e.recipe.image1,alt:"Image 1"}}),t("img",{attrs:{src:e.recipe.image2,alt:"Image 2"}}),t("img",{attrs:{src:e.recipe.image3,alt:"Image 3"}}),t("img",{attrs:{src:e.recipe.image4,alt:"Image 4"}})]),t("div",{staticClass:"story-wrapper"},[t("h3",[e._v("Story:")]),t("li",[e._v(e._s(e.recipe.story))])]),t("RecipeLogos",{attrs:{recipe:e.recipe}})],1),t("div",{staticClass:"recipe-body"},[t("div",{staticClass:"wrapper"},[t("div",{staticClass:"wrapped"},[t("div",{staticClass:"mb-3"},[t("div",[t("strong",[e._v("Ready in:")]),e._v(" "+e._s(e.recipe.readyInMinutes)+" minutes")]),t("div",[t("strong",[e._v("Servings:")]),e._v(" "+e._s(e.recipe.servings))])]),t("h3",[e._v("Ingredients:")]),t("ul",{staticClass:"ingredients-list"},e._l(e.recipe.extendedIngredients,(function(s,i){return t("li",{key:i+"_"+s.id},[e._v(" "+e._s(s.original)+" ")])})),0)]),t("div",{staticClass:"wrapped"},[t("h3",[e._v("Instructions:")]),t("ol",{staticClass:"instructions-list"},e._l(e.recipe._instructions,(function(s,i){return t("li",{key:i},[t("div",[t("span",{staticClass:"step-number"},[e._v(e._s(i+1)+".")]),e._v(" "+e._s(s.step)+" ")])])})),0)])])])]):e._e(),t("PrepareAndMealButtons"),e._v(" /> ")],1)},r=[],a=s(124),n=s(3144),c=s(8534),o=(s(4916),s(5306),s(4944),s(3792),s(1249),s(8309),s(8327)),p=s(1499),l=s(3258),u=s(3099);const d={components:{RecipeLogos:p.Z,PrepareAndMealButtons:l.Z},data:function(){return{recipe:null,isFavorite:!1}},created:function(){var e=this;return(0,c.Z)((0,a.Z)().mark((function t(){var s,i,r,c,p,l,d,g,v,m,_,C,f,h,I,w,y,b,k,Z;return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:t.prev=0,t.prev=1,s=(0,o.C7)(e.$route.params.recipeId),200!==s.status&&e.$router.replace("/NotFound"),t.next=11;break;case 6:return t.prev=6,t.t0=t["catch"](1),console.log("error.response.status",t.t0.response.status),e.$router.replace("/NotFound"),t.abrupt("return");case 11:i=s.data.recipe,r=i.analyzedInstructions,c=i.instructions,p=i.extendedIngredients,l=i.readyInMinutes,d=i.image,g=i.image1,v=i.image2,m=i.image3,_=i.image4,C=i.owner,f=i.title,h=i.servings,I=i.glutenFree,w=i.vegetarian,y=i.vegan,b=i.id,k=i.story,Z=r.map((function(e){return e.steps.map((function(t){return(0,n.Z)((0,n.Z)({},t),{},{step:e.name+t.step})}))})).flat(),e.recipe={instructions:c,_instructions:Z,analyzedInstructions:r,extendedIngredients:p,readyInMinutes:l,image:d,image1:g,image2:v,image3:m,image4:_,owner:C,title:f,servings:h,glutenFree:I,vegetarian:w,vegan:y,id:b,story:k},t.next=19;break;case 16:t.prev=16,t.t1=t["catch"](0),console.log(t.t1);case 19:(0,u.f9)(e.recipe.id),console.log("Added to last viewed recipes "+e.recipe.id);case 21:case"end":return t.stop()}}),t,null,[[0,16],[1,6]])})))()}},g=d;var v=s(1001),m=(0,v.Z)(g,i,r,!1,null,"c437b51c",null);const _=m.exports}}]);
//# sourceMappingURL=250.0a199435.js.map