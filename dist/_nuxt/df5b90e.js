(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{286:function(t,e,o){var content=o(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(64).default)("0d1ecc43",content,!0,{sourceMap:!1})},288:function(t,e,o){var map={"./IlMheg.png":289};function r(t){var e=n(t);return o(e)}function n(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=n,t.exports=r,r.id=288},289:function(t,e,o){t.exports=o.p+"img/IlMheg.4b025a7.png"},290:function(t,e,o){"use strict";var r=o(2),n=o(82).find,c=o(135),d="find",l=!0;d in[]&&Array(1).find((function(){l=!1})),r({target:"Array",proto:!0,forced:l},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),c(d)},291:function(t,e,o){var r=o(2),n=o(195).values;r({target:"Object",stat:!0},{values:function(t){return n(t)}})},292:function(t){t.exports=JSON.parse('{"IlMheg":{"name":"Il Mheg","coords":[[1910,2715],[2280,2885],[2455,3275],[2470,3725],[1970,3490],[1360,3410],[965,3065],[785,2705],[745,2300],[1080,2035],[1120,1590],[2020,850],[2550,710],[2925,545],[3380,730],[3160,1365],[2720,1900]],"maxCoords":4200}}')},293:function(t,e,o){"use strict";o(286)},294:function(t,e,o){var r=o(63)((function(i){return i[1]}));r.push([t.i,".mapContainer{position:relative;display:inline-block}.mapContainer img{max-width:100%}.mapContainer .coords div{position:absolute;z-index:2;--tw-bg-opacity:1;background-color:rgb(15 118 110 / var(--tw-bg-opacity));border-radius:100%;height:18px;width:18px;transform:translate(-18px,-18px);border:1px solid #fff}.mapContainer .coords div.selected{--tw-bg-opacity:1;background-color:rgb(159 18 57 / var(--tw-bg-opacity))}.mapContainer .coords div.selected:hover{background-color:#999}.mapContainer .coords div:hover{background-color:#fff;cursor:pointer}",""]),r.locals={},t.exports=r},298:function(t,e,o){"use strict";o.r(e);o(28),o(81);var r=o(10),n=(o(15),o(83),o(29),o(196),o(290),o(39),o(38),o(291),o(46),o(136),o(65),o(292)),c={data:function(){return{selectedCoords:{},spawnPoint:null,imgHeight:0,paramCoords:{},imgIsLoaded:!1}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.params,r=o.slug,data=n[r],e.abrupt("return",{slug:r,data:data});case 4:case"end":return e.stop()}}),e)})))()},beforeMount:function(){var t={};if(void 0!==this.$route.query.spawnPoint)for(var i=1;i<this.data.coords.length+1;i++)i.toString()==this.$route.query.spawnPoint?t[i]=!1:t[i]=!0;else if(void 0!==this.$route.query.selectedCoords){var e=this.$route.query.selectedCoords.split(",");for(i=1;i<this.data.coords.length+1;i++)t[i]=!!e.find((function(t){return t==i.toString()}))}this.paramCoords=t},mounted:function(){var t=window.localStorage.getItem("".concat(this.slug,"-coords"));if(void 0!==this.paramCoords&&0!==Object.keys(this.paramCoords).length)this.selectedCoords=this.paramCoords;else if(null!==t)this.selectedCoords=JSON.parse(t);else{for(var e={},i=1;i<this.data.coords.length+1;i++)e[i]=!1;this.selectedCoords=e}this.updateQuery(),this.checkForSpawnPoint()},computed:{isFullyMapped:function(){return 1===Object.values(this.paramCoords).filter((function(t){return!1===t})).length}},methods:{checkForSpawnPoint:function(){var t=this;if(this.isFullyMapped){var e=Object.keys(this.paramCoords).find((function(e){return!1===t.paramCoords[e]}));this.spawnPoint=e}},checkIfSelectedById:function(t){var e=t.slice(t.indexOf("-")+1,t.length);return this.selectedCoords[parseInt(e)]},updateQuery:function(){var t=this;if(void 0!==this.selectedCoords){var e=Object.keys(this.selectedCoords).filter((function(e){return t.selectedCoords[e]})).join(",");this.$router.push({path:this.$route.path,query:{selectedCoords:e}})}},imgLoaded:function(){this.imgIsLoaded=!0,this.setImgHeight()},setImgHeight:function(){this.imgHeight=this.$refs.mapImg.offsetHeight-20;for(var t=this.imgHeight/this.data.maxCoords,i=0;i<this.data.coords.length;i++){var e=[],o=this.data.coords[i];e[0]=Math.round(o[0]*t)/this.imgHeight*100,e[1]=Math.round(o[1]*t)/this.imgHeight*100;var r=document.getElementById("".concat(this.slug,"-").concat(i+1));r.style.left=e[0]+"%",r.style.top=e[1]+"%"}},toggleCoord:function(t){var e=t.target.id,o=e.slice(e.indexOf("-")+1,e.length);this.selectedCoords[parseInt(o)]?this.selectedCoords[parseInt(o)]=!1:this.selectedCoords[parseInt(o)]=!0,this.updateQuery(),this.checkForSpawnPoint()},copyUrl:function(){navigator.clipboard.writeText(window.location.href)},saveCoords:function(){localStorage.setItem("".concat(this.slug,"-coords"),JSON.stringify(this.selectedCoords))},clearCoords:function(){for(var t={},i=1;i<this.data.coords.length+1;i++)t[i]=!1;this.selectedCoords=t,this.updateQuery()}}},d=(o(293),o(47)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticClass:"mb-12 text-3xl text-orange-200"},[t._v(t._s(t.data.name))]),t._v(" "),e("div",{staticClass:"flex flex-col md:flex-row"},[e("div",{ref:"mapContainer",staticClass:"mapContainer"},[e("img",{ref:"mapImg",attrs:{src:o(288)("./".concat(t.slug,".png"))},on:{load:t.imgLoaded}}),t._v(" "),e("div",{ref:"coords",staticClass:"coords"},t._l(t.data.coords.length,(function(o,r){return e("div",{key:r,class:{selected:t.checkIfSelectedById("".concat(t.slug,"-").concat(r+1))},attrs:{id:"".concat(t.slug,"-").concat(r+1)},on:{click:t.toggleCoord}})})),0)]),t._v(" "),e("div",{staticClass:"pl-12"},[e("div",[e("button",{staticClass:"text-center w-64 font-medium border-2 border-rose-300 text-rose-300 hover:bg-rose-300 hover:text-slate-800 rounded-lg text-xl px-8 py-2",on:{click:t.copyUrl}},[t._v("\n                    Copy Map URL\n                ")])]),t._v(" "),e("div",{staticClass:"mt-4"},[e("button",{staticClass:"text-center w-64 font-medium border-2 border-rose-300 text-rose-300 hover:bg-rose-300 hover:text-slate-800 rounded-lg text-xl px-8 py-2",on:{click:t.saveCoords}},[t._v("\n                    Save\n                ")])]),t._v(" "),e("div",{staticClass:"mt-4"},[e("button",{staticClass:"text-center w-64 font-medium border-2 border-rose-300 text-rose-300 hover:bg-rose-300 hover:text-slate-800 rounded-lg text-xl px-8 py-2",on:{click:t.clearCoords}},[t._v("\n                    Clear\n                ")])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);