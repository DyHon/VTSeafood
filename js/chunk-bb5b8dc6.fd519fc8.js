(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bb5b8dc6"],{2469:function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"container py-5",staticStyle:{"padding-top":"70px"}},[i("InfoBreadcrumb",{attrs:{information:t.information}}),i("InfoBox",{attrs:{information:t.information}}),i("InfoText"),i("div",{staticClass:"related-item"},[i("hr"),i("h6",{staticClass:"pb-4"},[t._v("RELATED PRODUCTS")]),i("Card",{attrs:{CardArray:t.sliceRelatedItems}})],1)],1)},s=[],a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",t._l(t.information,(function(n){return i("nav",{key:n.id,staticClass:"row justify-content-start",attrs:{"aria-label":"breadcrumb"}},[i("ol",{staticClass:"breadcrumb"},[i("li",{staticClass:"breadcrumb-item"},[i("router-link",{attrs:{to:"/"}},[t._v("Trang chủ")])],1),i("li",{staticClass:"breadcrumb-item"},[i("router-link",{attrs:{to:"/products"}},[t._v("Sản phẩm")])],1),i("li",{staticClass:"breadcrumb-item"},[t._v(t._s(n.type))]),i("li",{staticClass:"breadcrumb-item active"},[t._v(t._s(n.title))])])])})),0)},r=[],c={props:["information"],name:"InfoBreadcrumb"},o=c,l=(i("65d7"),i("2877")),u=Object(l["a"])(o,a,r,!1,null,"f054d8c8",null),d=u.exports,f=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",t._l(t.information,(function(n){return i("div",{key:n.id,staticClass:"row mb-5"},[i("div",{staticClass:"col6 col-xl-6 col-lg-6 col-md-12 col-sm-12"},[i("img",{staticClass:"img-fluid",attrs:{src:n.img}})]),i("div",{staticClass:"col6 col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex align-items-center justify-content-start"},[i("div",{staticClass:"info pt-xl-0 pt-lg-0 pt-5"},[i("span",{staticClass:"float-left pr-3"},[t._v("★★★★★")]),i("h6",{staticStyle:{width:"190px"}},[t._v("3 đánh giá")]),i("h1",{staticClass:"font-weight-bold text-uppercase pt-3"},[t._v(t._s(n.title))]),i("h4",[t._v("$"+t._s(n.price))]),i("br"),i("br"),i("br"),i("div",{staticClass:"control number text-center"},[i("button",{staticClass:"decrement-button",staticStyle:{"border-right":"0.2px solid lightgrey",float:"left","margin-right":"11px"},on:{click:t.dec}},[t._v("−")]),i("span",[t._v(t._s(t.quan))]),i("button",{staticClass:"increment-button",staticStyle:{"border-left":"0.2px solid lightgrey","margin-left":"16px"},on:{click:t.inc}},[t._v("+")]),i("br"),i("br")]),i("button",{staticClass:"add-to-cart-button",on:{click:function(i){return t.addtoCart(n,n.id)}}},[t._v("Đặt hàng")])])])])})),0)},m=[],b={props:["information"],name:"InfoBox",data:function(){return{quan:1}},methods:{inc:function(){if(this.quan<=8)return this.quan++},dec:function(){if(this.quan>=2)return this.quan--},addtoCart:function(t,n){for(var i=0;i<this.quan;i++)this.$store.commit("inCart",t,n)}}},v=b,p=(i("bea9"),Object(l["a"])(v,f,m,!1,null,"388fc979",null)),h=p.exports,C=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",[i("div",{staticClass:"more info d-flex justify-content-between text-center"},t._l(t.moreInfo,(function(n,e){return i("div",{key:n.id,staticClass:"col4 flex-fill",class:[e===t.active?"col4 active":""],on:{click:function(n){return t.moreInfoSelect(e)}}},[i("h6",[t._v(t._s(n))])])})),0),i("div",{staticClass:"container pt-3"})])},_=[],g={name:"InfoText",data:function(){return{moreInfo:["DESCRIPTION","WARRANTY","REVIEWS"],active:0}},methods:{moreInfoSelect:function(t){return this.active=t}}},I=g,x=(i("7e63"),Object(l["a"])(I,C,_,!1,null,"3e63a2a2",null)),y=x.exports,k=i("912f"),w={name:"Info",components:{InfoBreadcrumb:d,InfoBox:h,InfoText:y,Card:k["a"]},data:function(){return{information:[],relatedItems:[]}},created:function(){this.information=this.infO,this.relatedItems=this.bringItems},computed:{infO:function(){return this.$store.getters.infoLength},bringItems:function(){return this.$store.state.items},sliceRelatedItems:function(){return this.relatedItems.slice(0,3)}},methods:{sendInfo:function(t,n){this.$store.commit("addtoInfo",t,n)}}},$=w,E=(i("d167"),Object(l["a"])($,e,s,!1,null,"d579ea92",null));n["default"]=E.exports},"4bb9":function(t,n,i){"use strict";i("bb5e")},"56ab":function(t,n,i){},"65d7":function(t,n,i){"use strict";i("cc8f")},"7e63":function(t,n,i){"use strict";i("56ab")},"912f":function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",[i("transition-group",{staticClass:"row",attrs:{name:"fade",tag:"div"}},t._l(t.CardArray,(function(n){return i("div",{key:n.id,staticClass:"col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-4 pb-3"},[i("div",{staticClass:"card"},[i("img",{staticClass:"card-img-top",attrs:{src:n.img,alt:"Card image cap"}}),i("div",{staticClass:"overlay"},[i("button",{staticClass:"btn btn-outline-secondary btn-lg",attrs:{type:"button"},on:{click:function(i){return t.addtoCart(n)}}},[t._v("Đặt hàng +")]),i("router-link",{attrs:{to:"/Info"}},[i("button",{staticClass:"btn btn-outline-secondary btn-lg",attrs:{type:"button"},on:{click:function(i){return t.sendInfo(n)}}},[t._v("Thông tin")])])],1),i("div",{staticClass:"card-body"},[i("h5",{staticClass:"card-title"},[t._v(t._s(n.title))]),i("p",{staticClass:"card-text"},[t._v(t._s(n.price))])])])])})),0)],1)},s=[],a={props:["CardArray"],name:"Card",methods:{addtoCart:function(t){this.$store.commit("inCart",t)},sendInfo:function(t){this.$store.commit("addtoInfo",t)}}},r=a,c=(i("4bb9"),i("2877")),o=Object(c["a"])(r,e,s,!1,null,null,null);n["a"]=o.exports},"9ed7":function(t,n,i){},bb5e:function(t,n,i){},bea9:function(t,n,i){"use strict";i("ec24")},cc8f:function(t,n,i){},d167:function(t,n,i){"use strict";i("9ed7")},ec24:function(t,n,i){}}]);
//# sourceMappingURL=chunk-bb5b8dc6.fd519fc8.js.map