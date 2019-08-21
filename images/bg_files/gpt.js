(function(E){var window=this;var aa=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ba=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}},ca=function(a){if(!(a instanceof Array)){a=ba(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a},g=this||self,k=function(a){return"string"==typeof a},da=function(a){return"number"==typeof a},ha=function(){if(null===ea)a:{var a=g.document;if((a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&fa.test(a)){ea=a;break a}ea=""}return ea},fa=/^[\w+/_-]+[=]{0,2}$/,ea=null,ia=function(a){a=a.split(".");for(var b=g,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b},ja=function(){},l=function(a){a.m=void 0;a.b=function(){return a.m?a.m:a.m=new a}},m=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ka="closure_uid_"+(1E9*Math.random()>>>0),la=0,ma=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}},na=function(a,b){for(var c in b)a[c]=b[c]},n=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var p=function(a,b){for(var c=a.length,d=k(a)?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},oa=function(a,b){for(var c=a.length,d=[],e=0,f=k(a)?a.split(""):a,h=0;h<c;h++)if(h in f){var q=f[h];b.call(void 0,q,h,a)&&(d[e++]=q)}return d},pa=function(a,b){for(var c=a.length,d=Array(c),e=k(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));return d},qa=function(a,b){a:{for(var c=a.length,d=k(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:k(a)?a.charAt(b):a[b]},ra=function(a,b){a:{for(var c=k(a)?a.split(""):a,d=a.length-1;0<=d;d--)if(d in c&&b.call(void 0,c[d],d,a)){b=d;break a}b=-1}return 0>b?null:k(a)?a.charAt(b):a[b]},sa=function(a,b){a:if(k(a))a=k(b)&&1==b.length?a.indexOf(b,0):-1;else{for(var c=0;c<a.length;c++)if(c in a&&a[c]===b){a=c;break a}a=-1}return 0<=a};var r=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};var ta=function(a,b){return null!==a&&b in a};var t=function(){this.a="";this.h=ua};t.prototype.f=!0;t.prototype.c=function(){return this.a.toString()};var va=function(a){return a instanceof t&&a.constructor===t&&a.h===ua?a.a:"type_error:TrustedResourceUrl"},ua={};var wa=function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},u=function(a,b){var c=0;a=wa(String(a)).split(".");b=wa(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;0==c&&e<d;e++){var f=a[e]||"",h=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==f[0].length&&0==h[0].length)break;c=xa(0==f[1].length?0:parseInt(f[1],10),0==h[1].length?0:parseInt(h[1],10))||xa(0==f[2].length,0==h[2].length)||xa(f[2],h[2]);f=f[3];h=h[3]}while(0==c)}return c},xa=function(a,b){return a<b?-1:a>b?1:0};var v=function(){this.a="";this.h=ya};v.prototype.f=!0;v.prototype.c=function(){return this.a.toString()};var za=function(a){return a instanceof v&&a.constructor===v&&a.h===ya?a.a:"type_error:SafeUrl"},Aa=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,ya={},Ba=function(a){var b=new v;b.a=a;return b};Ba("about:blank");var w;a:{var Ca=g.navigator;if(Ca){var Da=Ca.userAgent;if(Da){w=Da;break a}}w=""}var y=function(a){return-1!=w.indexOf(a)},Ea=function(a){for(var b=/(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g,c=[],d;d=b.exec(a);)c.push([d[1],d[2],d[3]||void 0]);return c};var Ga=function(){return(y("Chrome")||y("CriOS"))&&!y("Edge")},Ia=function(){function a(e){e=qa(e,d);return c[e]||""}var b=w;if(y("Trident")||y("MSIE"))return Ha(b);b=Ea(b);var c={};p(b,function(e){c[e[0]]=e[1]});var d=ma(ta,c);return y("Opera")?a(["Version","Opera"]):y("Edge")?a(["Edge"]):y("Edg/")?a(["Edg"]):Ga()?a(["Chrome","CriOS"]):(b=b[2])&&b[1]||""},Ha=function(a){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])return b[1];b="";var c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),"7.0"==c[1])if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];return b};var Ja=function(a,b){a.src=va(b);(b=ha())&&a.setAttribute("nonce",b)};var z=function(a){z[" "](a);return a};z[" "]=ja;var A=function(){},Ka="function"==typeof Uint8Array,C=function(a,b,c,d){a.a=null;b||(b=[]);a.G=void 0;a.f=-1;a.g=b;a:{if(b=a.g.length){--b;var e=a.g[b];if(!(null===e||"object"!=typeof e||"array"==m(e)||Ka&&e instanceof Uint8Array)){a.h=b-a.f;a.c=e;break a}}a.h=Number.MAX_VALUE}a.v={};if(c)for(b=0;b<c.length;b++)e=c[b],e<a.h?(e+=a.f,a.g[e]=a.g[e]||B):(La(a),a.c[e]=a.c[e]||B);if(d&&d.length)for(b=0;b<d.length;b++)Ma(a,d[b])},B=[],La=function(a){var b=a.h+a.f;a.g[b]||(a.c=a.g[b]={})},D=function(a,b){if(b<a.h){b+=a.f;var c=a.g[b];return c===B?a.g[b]=[]:c}if(a.c)return c=a.c[b],c===B?a.c[b]=[]:c},F=function(a,b,c){a=D(a,b);return null==a?c:a},Na=function(a,b){a=D(a,b);a=null==a?a:+a;return null==a?0:a},Oa=function(a,b,c){b<a.h?a.g[b+a.f]=c:(La(a),a.c[b]=c)},Ma=function(a,b){for(var c,d,e=0;e<b.length;e++){var f=b[e],h=D(a,f);null!=h&&(c=f,d=h,Oa(a,f,void 0))}return c?(Oa(a,c,d),c):0},G=function(a,b,c){a.a||(a.a={});if(!a.a[c]){var d=D(a,c);d&&(a.a[c]=new b(d))}return a.a[c]},H=function(a,b,c){a.a||(a.a={});if(!a.a[c]){for(var d=D(a,c),e=[],f=0;f<d.length;f++)e[f]=new b(d[f]);a.a[c]=e}b=a.a[c];b==B&&(b=a.a[c]=[]);return b},Pa=function(a,b,c){a.a||(a.a={});c=c||[];for(var d=[],e=0;e<c.length;e++)d[e]=c[e].g;a.a[b]=c;Oa(a,b,d)};var Ra=function(a){Qa();var b=new t;b.a=a;return b},Qa=ja;var Sa=function(a,b){a=[a];for(var c=b.length-1;0<=c;--c)a.push(typeof b[c],b[c]);return a.join("\x0B")};var Ta=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;var Xa=function(a,b){if(!Ua()&&!Va()){var c=Math.random();if(c<b)return c=Wa(g),a[Math.floor(c*a.length)]}return null},Wa=function(a){if(!a.crypto)return Math.random();try{var b=new Uint32Array(1);a.crypto.getRandomValues(b);return b[0]/65536/65536}catch(c){return Math.random()}},Va=r(function(){return-1!=w.indexOf("Google Web Preview")||1E-4>Math.random()}),Ua=r(function(){return-1!=w.indexOf("MSIE")}),Ya=/^(-?[0-9.]{1,30})$/,Za=function(a,b){return Ya.test(a)&&(a=Number(a),!isNaN(a))?a:void 0==b?null:b},$a=function(){try{return ha()}catch(a){}},ab=r(function(){var a=/Edge\/([^. ]+)/.exec(navigator.userAgent);return a?18<=parseInt(a[1],10):(a=/Chrome\/([^. ]+)/.exec(navigator.userAgent))?71<=parseInt(a[1],10):(a=/AppleWebKit\/([^. ]+)/.exec(navigator.userAgent))?13<=parseInt(a[1],10):(a=/Firefox\/([^. ]+)/.exec(navigator.userAgent))?64<=parseInt(a[1],10):!1}),bb=r(function(){return Ga()&&0<=u(Ia(),72)||y("Edge")&&0<=u(Ia(),18)||(y("Firefox")||y("FxiOS"))&&0<=u(Ia(),65)||y("Safari")&&!(Ga()||y("Coast")||y("Opera")||y("Edge")||y("Edg/")||y("OPR")||y("Firefox")||y("FxiOS")||y("Silk")||y("Android"))&&0<=u(Ia(),12)});var cb=function(a){var b=window,c=-1;a="google_experiment_mod"+(void 0===a?"":a);try{b.localStorage&&(c=parseInt(b.localStorage.getItem(a),10))}catch(d){return null}if(0<=c&&1E3>c)return c;if(Va())return null;c=Math.floor(1E3*Wa(b));try{if(b.localStorage)return b.localStorage.setItem(a,""+c),c}catch(d){}return null};var db=function(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};var eb=null,fb=function(){if(null===eb){eb="";try{var a="";try{a=g.top.location.hash}catch(c){a=g.location.hash}if(a){var b=a.match(/\bdeid=([\d,]+)/);eb=b?b[1]:""}}catch(c){}}return eb};var I=function(a){C(this,a,gb,hb)};n(I,A);var gb=[2,8],hb=[[3,4,5],[6,7]];var ib=function(a){return null!=a?!a:a},jb=function(a,b){for(var c=!1,d=0;d<a.length;d++){var e=a[d].call();if(e==b)return e;null==e&&(c=!0)}if(!c)return!b},lb=function(a,b){var c=H(a,I,2);if(!c.length)return kb(a,b);a=F(a,1,0);if(1==a)return ib(lb(c[0],b));c=pa(c,function(d){return function(){return lb(d,b)}});switch(a){case 2:return jb(c,!1);case 3:return jb(c,!0)}},kb=function(a,b){var c=Ma(a,hb[0]);a:{switch(c){case 3:var d=F(a,3,0);break a;case 4:d=F(a,4,0);break a;case 5:d=F(a,5,0);break a}d=void 0}if(d&&(b=(b=b[c])&&b[d])){try{var e=b.apply(null,D(a,8))}catch(f){return}b=F(a,1,0);if(4==b)return!!e;d=null!=e;if(5==b)return d;if(12==b)a=F(a,7,"");else a:{switch(c){case 4:a=Na(a,6);break a;case 5:a=F(a,7,"");break a}a=void 0}if(null!=a){if(6==b)return e===a;if(9==b)return 0==u(e,a);if(d)switch(b){case 7:return e<a;case 8:return e>a;case 12:return(new RegExp(a)).test(e);case 10:return-1==u(e,a);case 11:return 1==u(e,a)}}}},mb=function(a,b){return!a||!(!b||!lb(a,b))};var nb=function(){var a={};this[3]=(a[8]=function(b){return!!ia(b)},a[9]=function(b){b=ia(b);var c;if(c="function"==m(b))b=b&&b.toString&&b.toString(),c=k(b)&&-1!=b.indexOf("[native code]");return c},a[10]=function(){return window==window.top},a[16]=function(){return bb()},a[22]=function(){return ab()},a);a={};this[4]=(a[5]=function(b){b=cb(void 0===b?"":b);return null!=b?b:void 0},a[6]=function(b){b=ia(b);return da(b)?b:void 0},a);a={};this[5]=(a[2]=function(){return window.location.href},a[3]=function(){try{return window.top.location.hash}catch(b){return""}},a[4]=function(b){b=ia(b);return k(b)?b:void 0},a)};l(nb);var pb=function(a){C(this,a,ob,null)};n(pb,A);var ob=[4];var J=function(a){C(this,a,qb,rb)};n(J,A);var sb=function(a){C(this,a,null,null)};n(sb,A);var qb=[5],rb=[[1,2,3,6]];var K=function(){var a={};this.a=(a[3]={},a[4]={},a[5]={},a)};l(K);var tb=function(a,b){switch(b){case 1:return F(a,1,0);case 2:return F(a,2,0);case 3:return F(a,3,0);case 6:return F(a,6,0);default:return null}},ub=function(a,b){if(!a)return null;switch(b){case 1:return a=D(a,1),a=null==a?a:!!a,null==a?!1:a;case 2:return Na(a,2);case 3:return F(a,3,"");case 6:return D(a,4);default:return null}},wb=function(a,b,c){b=L.b().a[a][b];if(!b)return c;b=new J(b);b=vb(b);a=ub(b,a);return null!=a?a:c},vb=function(a){var b=K.b().a;if(b){var c=ra(H(a,sb,5),function(d){return mb(G(d,I,1),b)});if(c)return G(c,pb,2)}return G(a,pb,4)},L=function(){var a={};this.a=(a[1]={},a[2]={},a[3]={},a[6]={},a)};l(L);var xb=function(a,b){return!!wb(1,a,void 0===b?!1:b)},yb=function(a,b){b=void 0===b?0:b;a=Number(wb(2,a,b));return isNaN(a)?b:a},zb=function(a,b){return wb(3,a,void 0===b?"":b)},Ab=function(a,b){b=void 0===b?[]:b;return wb(6,a,b)},Bb=function(a){var b=L.b().a;p(a,function(c){var d=Ma(c,rb[0]),e=tb(c,d);e&&(b[d][e]=c.g)})},Cb=function(a){var b=L.b().a;p(a,function(c){var d=new J(c),e=Ma(d,rb[0]);(d=tb(d,e))&&(b[e][d]||(b[e][d]=c))})};var M=function(a){this.a=a},Db=new M(1),Eb=new M(2),Fb=new M(3),Gb=new M(4),Hb=new M(5),Ib=new M(6),Jb=new M(7),Kb=new M(8),Lb=new M(9),Mb=new M(10),Nb=new M(11),Ob=new M(12),Pb=new M(13),Qb=new M(14),N=function(a,b,c){c.hasOwnProperty(a.a)||Object.defineProperty(c,String(a.a),{value:b})},O=function(a,b,c){return b[a.a]||c||function(){}},Rb=function(a){N(Hb,xb,a);N(Ib,yb,a);N(Jb,zb,a);N(Kb,Ab,a);N(Pb,Cb,a)},Sb=function(a){N(Gb,function(b){K.b().a=b},a);N(Lb,function(b,c){var d=K.b();d.a[3][b]||(d.a[3][b]=c)},a);N(Mb,function(b,c){var d=K.b();d.a[4][b]||(d.a[4][b]=c)},a);N(Nb,function(b,c){var d=K.b();d.a[5][b]||(d.a[5][b]=c)},a);N(Qb,function(b){for(var c=K.b(),d=ba([3,4,5]),e=d.next();!e.done;e=d.next())e=e.value,na(c.a[e],b[e])},a)},Tb=function(a){a.hasOwnProperty("init-done")||Object.defineProperty(a,"init-done",{value:!0})};var Ub=function(){var a=void 0===a?g:a;return a.ggeac||(a.ggeac={})};var P=function(){this.a=function(){return[]};this.c=function(){return[]}},Vb=function(a,b){a.a=O(Eb,b,function(){});a.c=O(Fb,b,function(){return[]})};l(P);var Xb=function(a){C(this,a,Wb,null)};n(Xb,A);var Wb=[2];Xb.prototype.getId=function(){return F(this,1,0)};Xb.prototype.i=function(){return F(this,7,0)};var Zb=function(a){C(this,a,Yb,null)};n(Zb,A);var Yb=[2];Zb.prototype.i=function(){return F(this,5,0)};var ac=function(a){C(this,a,$b,null)};n(ac,A);var Q=function(a){C(this,a,bc,null)};n(Q,A);var $b=[1,2],bc=[2];Q.prototype.i=function(){return F(this,1,0)};var cc=[12,13],dc=function(a,b){var c=this,d=void 0===b?{}:b;b=void 0===d.u?!1:d.u;var e=void 0===d.A?{}:d.A;d=void 0===d.D?[]:d.D;this.a=a;this.v=b;this.f=e;this.h=d;this.c={};(a=fb())&&p(a.split(",")||[],function(f){(f=parseInt(f,10))&&(c.c[f]=!0)})},hc=function(a,b){var c=[],d=ec(a.a,b);d.length&&(9!==b&&(a.a=fc(a.a,b)),p(d,function(e){if(e=gc(a,e)){var f=e.getId();c.push(f);a.h.push(f);(e=H(e,J,2))&&Bb(e)}}));return c},ic=function(a,b){a.a.push.apply(a.a,ca(oa(pa(b,function(c){return new Q(c)}),function(c){return!sa(cc,c.i())})))},gc=function(a,b){var c=K.b().a;if(!mb(G(b,I,3),c))return null;var d=H(b,Xb,2),e=c?oa(d,function(h){return mb(G(h,I,3),c)}):d,f=e.length;if(!f)return null;d=F(b,4,0);b=f*F(b,1,0);if(!d)return jc(a,e,b/1E3);f=null!=a.f[d]?a.f[d]:1E3;if(0>=f)return null;e=jc(a,e,b/f);a.f[d]=e?0:f-b;return e},jc=function(a,b,c){var d=a.c,e=qa(b,function(f){return!!d[f.getId()]});return e?e:a.v?null:Xa(b,c)},kc=function(a,b){N(Db,function(c){a.c[c]=!0},b);N(Eb,function(c){return hc(a,c)},b);N(Fb,function(){return a.h},b);N(Ob,function(c){return ic(a,c)},b)},ec=function(a,b){return(a=qa(a,function(c){return c.i()==b}))&&H(a,Zb,2)||[]},fc=function(a,b){return oa(a,function(c){return c.i()!=b})};var lc=function(){this.a=function(){return!1};this.c=function(){return 0}};l(lc);var mc=function(a){var b=void 0===b?!1:b;return lc.b().a(a,b)};var nc=function(){this.a=function(){}};l(nc);var oc=function(a){nc.b().a(a)};var qc=function(a,b){var c={u:R(211),A:R(227),D:R(226)};var d=void 0===d?Ub():d;d.hasOwnProperty("init-done")?(O(Ob,d)(pa(H(a,Q,2),function(e){return e.g})),O(Pb,d)(pa(H(a,J,1),function(e){return e.g})),b&&O(Qb,d)(b),pc(d)):(kc(new dc(H(a,Q,2),c),d),Rb(d),Sb(d),Tb(d),pc(d),Bb(H(a,J,1)),oc(nb.b()),b&&oc(b))},pc=function(a){var b=a=void 0===a?Ub():a;Vb(P.b(),b);b=a;var c=lc.b();c.a=O(Hb,b);c.c=O(Ib,b);nc.b().a=O(Qb,a)};var rc=r(function(){var a=g.navigator&&g.navigator.userAgent||"";a=a.toLowerCase();return-1!=a.indexOf("firefox/")||-1!=a.indexOf("chrome/")||-1!=a.indexOf("opr/")}),sc=function(a,b,c,d,e){d=void 0===d?"":d;var f=a.createElement("link");try{f.rel=c;if(-1!=c.toLowerCase().indexOf("stylesheet"))var h=va(b).toString();else{if(b instanceof t)var q=va(b).toString();else{if(b instanceof v)var x=za(b);else{if(b instanceof v)var X=b;else b="object"==typeof b&&b.f?b.c():String(b),Aa.test(b)||(b="about:invalid#zClosurez"),X=Ba(b);x=za(X)}q=x}h=q}f.href=h}catch(Fa){return}d&&"preload"==c&&(f.as=d);e&&f.setAttribute("nonce",e);if(a=a.getElementsByTagName("head")[0])try{a.appendChild(f)}catch(Fa){}};var tc=/^\.google\.(com?\.)?[a-z]{2,3}$/,uc=/\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,vc=function(a){return tc.test(a)&&!uc.test(a)},wc=function(a){return a.replace(/[\W]/g,function(b){return"&#"+b.charCodeAt()+";"})},S=g,xc=function(a,b){a="https://adservice"+(b+"/adsid/integrator."+a);b=["domain="+encodeURIComponent(g.location.hostname)];T[3]>=+new Date&&b.push("adsid="+encodeURIComponent(T[1]));return a+"?"+b.join("&")},T,U,yc=function(){S=g;T=S.googleToken=S.googleToken||{};var a=+new Date;T[1]&&T[3]>a&&0<T[2]||(T[1]="",T[2]=-1,T[3]=-1,T[4]="",T[6]="");U=S.googleIMState=S.googleIMState||{};vc(U[1])||(U[1]=".google.com");"array"==m(U[5])||(U[5]=[]);"boolean"==typeof U[6]||(U[6]=!1);"array"==m(U[7])||(U[7]=[]);da(U[8])||(U[8]=0)},zc=function(a){try{a()}catch(b){g.setTimeout(function(){throw b;},0)}},Bc=function(a){"complete"==g.document.readyState||"loaded"==g.document.readyState||g.document.currentScript&&g.document.currentScript.async?Ac(3):a()},Cc=0,V={j:function(){return 0<U[8]},o:function(){U[8]++},B:function(){0<U[8]&&U[8]--},C:function(){U[8]=0},l:function(){},F:function(){return!1},w:function(){return U[5]},s:zc},W={j:function(){return U[6]},o:function(){U[6]=!0},B:function(){U[6]=!1},C:function(){U[6]=!1},l:function(){},F:function(){return".google.com"!=U[1]&&2<++Cc},w:function(){return U[7]},s:function(a){Bc(function(){zc(a)})}},Ac=function(a){if(1E-5>Math.random()){g.google_image_requests||(g.google_image_requests=[]);var b=g.document.createElement("img");b.src="https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+a;g.google_image_requests.push(b)}};V.l=function(){if(!V.j()){var a=g.document,b=function(e){e=xc("js",e);var f=$a();sc(a,e,"preload","script",f);f=a.createElement("script");f.type="text/javascript";f.onerror=function(){return g.processGoogleToken({},2)};e=Ra(e);Ja(f,e);try{(a.head||a.body||a.documentElement).appendChild(f),V.o()}catch(h){}},c=U[1];b(c);".google.com"!=c&&b(".google.com");b={};var d=(b.newToken="FBT",b);g.setTimeout(function(){return g.processGoogleToken(d,1)},1E3)}};W.l=function(){if(!W.j()){var a=g.document,b=xc("sync.js",U[1]);sc(a,b,"preload","script");b=wc(b);var c=z("script"),d="",e=$a();e&&(d='nonce="'+wc(e)+'"');var f="<"+c+' src="'+b+'" '+d+"></"+c+"><"+(c+" "+d+'>processGoogleTokenSync({"newToken":"FBS"},5);</'+c+">");Bc(function(){a.write(f);W.o()})}};var Dc=function(a){yc();T[3]>=+new Date&&T[2]>=+new Date||a.l()},Fc=function(){g.processGoogleToken=g.processGoogleToken||function(a,b){return Ec(V,a,b)};Dc(V)},Gc=function(){g.processGoogleTokenSync=g.processGoogleTokenSync||function(a,b){return Ec(W,a,b)};Dc(W)},Ec=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?0:c;var d=b.newToken||"",e="NT"==d,f=parseInt(b.freshLifetimeSecs||"",10),h=parseInt(b.validLifetimeSecs||"",10),q=b["1p_jar"]||"";b=b.pucrd||"";yc();1==c?a.C():a.B();if(!d&&a.F())vc(".google.com")&&(U[1]=".google.com"),a.l();else{var x=S.googleToken=S.googleToken||{},X=0==c&&d&&k(d)&&!e&&da(f)&&0<f&&da(h)&&0<h&&k(q);e=e&&!a.j()&&(!(T[3]>=+new Date)||"NT"==T[1]);var Fa=!(T[3]>=+new Date)&&0!=c;if(X||e||Fa)e=+new Date,f=e+1E3*f,h=e+1E3*h,Ac(c),x[5]=c,x[1]=d,x[2]=f,x[3]=h,x[4]=q,x[6]=b,yc();if(X||!a.j()){c=a.w();for(d=0;d<c.length;d++)a.s(c[d]);c.length=0}}};var Hc=function(){this.a=null;this.f=this.c},Ic=function(a,b){a.a=b};Hc.prototype.c=function(a,b,c,d,e){if(Math.random()>(void 0===c?.01:c))return!1;b.error&&b.meta&&b.id||(b=new db(b,{context:a,id:void 0===e?"gpt_exception":e}));if(d||this.a)b.meta={},this.a&&this.a(b.meta),d&&d(b.meta);g.google_js_errors=g.google_js_errors||[];g.google_js_errors.push(b);g.error_rep_loaded||(b=g.document,a=b.createElement("script"),Ja(a,Ra(g.location.protocol+"//pagead2.googlesyndication.com/pagead/js/err_rep.js")),(b=b.getElementsByTagName("script")[0])&&b.parentNode&&b.parentNode.insertBefore(a,b),g.error_rep_loaded=!0);return!1};var Jc=function(a,b){try{b()}catch(c){if(!a.f(420,c,.01,void 0,"gpt_exception"))throw c;}};var Kc=function(a){if(!a.google_ltobserver){var b=new a.PerformanceObserver(function(c){var d=a.google_lt_queue=a.google_lt_queue||[];p(c.getEntries(),function(e){return d.push(e)})});b.observe({entryTypes:["longtask"]});a.google_ltobserver=b}};var Lc=function(a){var b=a;b=void 0===b?g:b;if(b=(b=b.performance)&&b.now?b.now():null)b={label:"1",type:9,value:b},a=a.google_js_reporting_queue=a.google_js_reporting_queue||[],2048>a.length&&a.push(b)};var Mc=function(){return g.googletag||(g.googletag={})},Nc=function(a,b){var c=Mc();c.hasOwnProperty(a)||(c[a]=b)};var Y={173:"pubads.g.doubleclick.net",174:"securepubads.g.doubleclick.net",7:.02,13:1500,23:.001,24:200,37:.01,38:.001,58:1,150:"",211:!1,152:[],172:null,191:"",192:"",190:"",245:{},180:null,230:{},246:[],227:{},226:[],220:!1,228:"//www.googletagservices.com/pubconsole/",242:!1,244:!1,243:-1};Y[6]=function(a,b){b=void 0===b?!0:b;try{for(var c=null;c!=a;c=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return b;case "http:":return!1}}catch(d){}return!0}(window);Y[49]=(new Date).getTime();Y[36]=/^true$/.test("false");Y[148]=/^true$/.test("false");Y[221]=/^true$/.test("");Y[204]=Za("{{MOD}}",-1);var Oc=function(){na(this,Y)};l(Oc);var R=function(a){return Oc.b()[a]},Z=function(a,b){Oc.b()[a]=b},Pc=Mc(),Qc=Oc.b();na(Qc,Pc._vars_);Pc._vars_=Qc;var Rc=function(){return R(36)};var Sc=function(a,b){var c=b||Sa;return function(){var d=this||g;d=d.closure_memoize_cache_||(d.closure_memoize_cache_={});var e=c(a[ka]||(a[ka]=++la),arguments);return d.hasOwnProperty(e)?d[e]:d[e]=a.apply(this,arguments)}}(function(a){return a&&a.src?/^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net)\/tag\/js\/gpt(?:_[a-z]+)*\.js/.test(a.src)?0:1:2},function(a,b){return a+"\x0B"+(b[0]&&b[0].src)}),Tc=function(){return 0===Sc(R(172))};var Uc=function(){return Za("1")||0},Vc=function(){return"2019081501"};Nc("getVersion",Vc);var Wc=function(){var a={};this[3]=(a[3]=Tc,a[2]=Rc,a[17]=function(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];d=String;var e=void 0===e?window:e;if(e=(e=e.location.href.match(Ta)[3]||null)?decodeURI(e):e){var f=e.length;if(0==f)e=0;else{for(var h=305419896,q=0;q<f;q++)h^=(h<<5)+(h>>2)+e.charCodeAt(q)&4294967295;e=0<h?h:4294967296+h}}else e=null;return sa(c,d(e))},a[21]=function(){return R(148)},a);a={};this[4]=(a[1]=function(){return R(204)},a[4]=Uc,a);this[5]={}};l(Wc);var Xc=[],Zc=function(a){a=Yc(new ac(R(246)),new ac(a||Xc));var b=Wc.b();b[3][6]=function(c){return sa(P.b().c(),parseInt(c,10))};qc(a,b);Z(230,L.b().a)},Yc=function(a,b){if(!H(a,J,1).length&&H(b,J,1).length){var c=H(b,J,1);Pa(a,1,c)}!H(a,Q,2).length&&H(b,Q,2).length&&(b=H(b,Q,2),Pa(a,2,b));return a};z("partner.googleadservices.com");var $c=z("www.googletagservices.com"),ad=function(a){var b=a.currentScript;return"complete"!=a.readyState&&"loaded"!=a.readyState&&!(b&&b.async)},bd=function(){var a="gpt/pubads_impl_"+(mc(187)?"modern_":""),b=Vc();var c=void 0===c?0:c;c=lc.b().c(24,c);a="https://securepubads.g.doubleclick.net/"+a+b+".js";c&&(a+="?"+c);return a},cd=function(a,b){var c;if(!(c=a.currentScript))a:{if(a=a.scripts)for(c=0;c<a.length;c++){var d=a[c];if(-1<d.src.indexOf($c+"/tag/js/gpt")){c=d;break a}}c=null}Z(172,c);new Zc(b);P.b().a(12);P.b().a(5);b=R(150);yc();vc(b)&&(U[1]=b)},dd=function(){return navigator.getBattery?navigator.getBattery().then(function(a){Z(243,a.level);Z(244,a.charging);Z(242,!0)}):null},ed=function(a,b,c){var d=Mc();a=a||d.fifWin||window;b=b||a.document;Nc("cmd",[]);if(d.evalScripts)d.evalScripts();else{cd(b,c);a.PerformanceObserver&&a.PerformanceLongTaskTiming&&Kc(a);Lc(a);a=bd();if(ad(b)){c="gpt-impl-"+Math.random();try{var e='<script id="'+c+'" src="'+a+'">\x3c/script>';mc(17)&&rc()&&(e+='<link rel="preconnect" href="https://securepubads.g.doubleclick.net">');b.write(e)}catch(f){}b.getElementById(c)&&(d._loadStarted_=!0,Z(220,!1),Gc())}d._loadStarted_||(Fc(),mc(16)&&sc(b,a,"preload","script"),c=b.createElement("script"),c.src=a,c.async=!0,(b.head||b.body||b.documentElement).appendChild(c),mc(17)&&rc()&&sc(b,"https://securepubads.g.doubleclick.net","preconnect"),Z(220,!0),d._loadStarted_=!0);(b=dd())&&b.catch(function(f){var h=new Hc;Ic(h,function(q){q.methodId=501});h.c(501,f)})}};var fd;a:{try{if("array"==m(E)){fd=E;break a}}catch(a){}fd=[]}(function(a,b,c){var d=new Hc;Ic(d,function(e){e.methodId=420});Jc(d,function(){return ed(a,b,c)})})(void 0,void 0,fd);}).call(this.googletag&&googletag.fifWin?googletag.fifWin.parent:this,[[[null,13,null,[null,1]],[146,null,null,[1]],[null,7,null,[null,0.1]],[97,null,null,[1]],[184,null,null,[1]],[167,null,null,[1]],[20,null,null,[],[[[1,[[4,null,1]]],[1]]]],[181,null,null,[1]],[193,null,null,[],[[[4,null,21],[1]]]],[110,null,null,[1]],[90,null,null,[1]],[192,null,null,[1]],[158,null,null,[1]],[105,null,null,[1]],[8,null,null,[1]],[55,null,null,[1]],[null,8,null,[null,-1]],[null,28,null,[null,0.01]],[null,1,null,[null,4096],[[[4,null,14],[null,8192]],[[4,null,15,null,null,null,null,["7646"]],[null,16384]]]],[45,null,null,[]],[null,null,2,[null,null,"1-0-35"]],[195,null,null,[1]],[185,null,null,[1]]],[[12,[[1,[[21064123],[21064124]]]]],[null,[[null,[[21063445],[21063446]]],[null,[[21064213],[21064214]]],[null,[[21064294],[21064295]]],[null,[[21064297]]],[null,[[21064425],[21064426]]],[null,[[676982416]]],[null,[[676982680]]],[null,[[676982682]]]]],[3,[[null,[[1337,[[82,null,null,[1]],[188,null,null,[1]]]]]],[5,[[20194812,[[20,null,null,[1]]]],[20194813]],null,3],[500,[[21060610],[21060611,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,["21061508"]]],[500,[[21060697],[21060698,[[87,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,["21061508"]],[4,null,8,null,null,null,null,["Uint8Array"]],[4,null,11]]]],[100,[[21061497],[21061498,[[86,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,["21061508"]],[4,null,9,null,null,null,null,["requestAnimationFrame"]]]]],[100,[[21061545],[21061546,[[79,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,["21061508"]],[4,null,8,null,null,null,null,["google_ltobserver"]]]]],[50,[[21061863,[[null,1,null,[null,4096],[[[4,null,14],[null,8192]]]]]],[21061864,[[null,1,null,[null,12288]]]],[21061865,[[null,1,null,[null,15360]]]]]],[50,[[21061999],[21062000,[[81,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,["21061508"]],[4,null,10]]]],[null,[[21062185],[21062186,[[24,null,null,[1]]]]]],[1,[[21062330],[21062331,[[null,8,null,[null,800]]]],[21062332,[[null,8,null,[null,10000]]]]],null,3],[50,[[21062414],[21062415,[[64,null,null,[1]]]]]],[50,[[21062420],[21062421,[[42,null,null,[1]]]]]],[50,[[21062452],[21062453,[[43,null,null,[1]]]]]],[50,[[21062724],[21062725,[[67,null,null,[1]]]]]],[10,[[21062751],[21062752,[[null,15,null,[null,1]]]],[21062753,[[null,15,null,[null,2]]]]]],[10,[[21062796],[21062797,null,[4,null,8,null,null,null,null,["Map"]]]]],[50,[[21062818],[21062819,[[93,null,null,[1]]]]]],[50,[[21062832],[21062833,[[89,null,null,[1]]]]],null,12],[50,[[21062886],[21062887,[[91,null,null,[1]]]]]],[10,[[21062888],[21062889,[[101,null,null,[1]]]]]],[5,[[21062899],[21062900,[[98,null,null,[1]]]],[21062901,[[98,null,null,[1]]]]]],[5,[[21062916,[[98,null,null,[1]]]],[21062917,[[98,null,null,[1]]]]]],[1,[[21062970],[21062971,[[109,null,null,[1]]]]]],[5,[[21063046],[21063047,[[142,null,null,[1]]]],[21063048,[[142,null,null,[1]]]]],[2,[[4,null,7],[4,null,8,null,null,null,null,["TextDecoder"]],[4,null,10]]],9],[null,[[21063065],[21063066,[[116,null,null,[1]]]]]],[null,[[21063094],[21063095,[[142,null,null,[1]]]],[21063096,[[142,null,null,[1]]]]],[2,[[4,null,7],[4,null,8,null,null,null,null,["TextDecoder"]],[4,null,10]]],9],[1,[[21063145],[21063146,[[112,null,null,[1]]]]]],[1,[[21063147],[21063148,[[99,null,null,[1]]]]]],[1000,[[21063165,null,[3,[[6,null,null,1,null,0],[6,null,null,1,null,5]]]],[21063166,[[114,null,null,[1]]],[3,[[6,null,null,1,null,1],[6,null,null,1,null,6]]]]],[4,null,3]],[10,[[21063167],[21063168,[[102,null,null,[1]]]]]],[50,[[21063202],[21063203,[[123,null,null,[1]]]]]],[10,[[21063204],[21063205,[[47,null,null,[1]]]]]],[1000,[[21063316,null,[3,[[6,null,null,1,null,2],[6,null,null,1,null,7]]]],[21063317,[[114,null,null,[1]]],[3,[[6,null,null,1,null,3],[6,null,null,1,null,8]]]]],[4,null,3]],[5,[[21063340],[21063341,[[129,null,null,[1]],[65,null,null,[1]]]],[21063342,[[129,null,null,[1]],[65,null,null,[1]],[71,null,null,[1]]]]]],[50,[[21063387],[21063388,[[130,null,null,[1]]]]]],[1,[[21063633],[21063634,[[143,null,null,[1]]]]],[2,[[4,null,10]]]],[50,[[21063635],[21063636,[[104,null,null,[1]]]]]],[10,[[21063637],[21063638,[[141,null,null,[1]]]]]],[1,[[21063669],[21063670],[21063671,[[142,null,null,[1]]]]],[4,null,8,null,null,null,null,["TextDecoder"]],9],[1,[[21063792],[21063793,[[148,null,null,[1]]]]]],[50,[[21063817],[21063818,[[149,null,null,[1]]]]]],[50,[[21063964],[21063965,[[156,null,null,[1]]]],[21063966,[[157,null,null,[1]]]],[21063967,[[156,null,null,[1]],[157,null,null,[1]]]]]],[null,[[21064078],[21064079,[[null,null,null,[null,null,null,["v","1-0-35"]],null,1]]],[21064080,[[null,null,2,[null,null,"1-0-35"]]]]]],[10,[[21064154],[21064155,[[null,null,null,[null,null,null,["1288355901","165763429","3946387130","3617864019","1901889028","586877095","1194064817"]],null,5],[null,null,null,[null,null,null,["AjFHi2xI34QG9mkTo+LAkUveOiwZ5PA431Mg5xMZgzDG9ILu992s838MxmWTxC5VXcTZ8BLhuaCHUa03Ru8fUwQAAABneyJvcmlnaW4iOiJodHRwczovL3d3dy5vdWVzdC1mcmFuY2UuZnI6NDQzIiwiZmVhdHVyZSI6IkV4cGVyaW1lbnRhbElzSW5wdXRQZW5kaW5nIiwiZXhwaXJ5IjoxNTY1ODAyNzI4fQ==","AifTQ5uv14T+i8Fftz98/0omgVvWj5OzleDfX40OneC130Py90zjCw4OWFZFH+Jnluzx6yl0n4t+q96pXerdrwIAAABgeyJvcmlnaW4iOiJodHRwczovL3d3dy5zcG9ydC5lczo0NDMiLCJmZWF0dXJlIjoiRXhwZXJpbWVudGFsSXNJbnB1dFBlbmRpbmciLCJleHBpcnkiOjE1Njc1NTUxOTl9","AjgLr+DWrYV+4+Zj4cu8jgQ1XRIrk1RBIfeCWS36FqJpoi0nRnmesU7SooSrU8SCy/fcK13pLqu/P4cjlQKpmQMAAABkeyJvcmlnaW4iOiJodHRwczovL20uYWN0aXZlYmVhdC5jb206NDQzIiwiZmVhdHVyZSI6IkV4cGVyaW1lbnRhbElzSW5wdXRQZW5kaW5nIiwiZXhwaXJ5IjoxNTY3NTU1MTk5fQ==","Aui6tI5jkQUtPwStPkcMds9kF4fQ5huwq8dGaPdF79wbz8fqnq8WcKGXZrxus+OPMHeS8NDQhMP+bRVT+hopXAgAAABheyJvcmlnaW4iOiJodHRwczovL20ucGF0cmlrYS5jb206NDQzIiwiZmVhdHVyZSI6IkV4cGVyaW1lbnRhbElzSW5wdXRQZW5kaW5nIiwiZXhwaXJ5IjoxNTY3NTU1MTk5fQ==","AjkSkwQrzZ6TGqQqQ7H7jWAm7ufvN1JScSr5ZzJosEJLt/GHqqHy7hCvbjG2hPQAGJZfPzbcwW1nE7nlL5MoHAgAAABieyJvcmlnaW4iOiJodHRwczovL3RveW9rZWl6YWkubmV0OjQ0MyIsImZlYXR1cmUiOiJFeHBlcmltZW50YWxJc0lucHV0UGVuZGluZyIsImV4cGlyeSI6MTU2NzU1NTE5OX0=","AkVre/BXgPOgX2/X7wk/InUmf1YnGmBz93GO0tVYcmJ+ZS+CNMViV8BQduGK/jZU55WsTD3FYLCI4zJNzjf7VwkAAABheyJvcmlnaW4iOiJodHRwczovL3d3dy5tZXJrdXIuZGU6NDQzIiwiZmVhdHVyZSI6IkV4cGVyaW1lbnRhbElzSW5wdXRQZW5kaW5nIiwiZXhwaXJ5IjoxNTY3NTU1MTk5fQ==","Asq2CwjSqEZ1+HHgV7O1hkQh2STUJOnyWvcuNq4zMaqrlWwbeyy6g5h/8YW4dV/Q1Pn6fXAYo0esFAV0maJ+ww4AAABdeyJvcmlnaW4iOiJodHRwczovL3d3dy50ei5kZTo0NDMiLCJmZWF0dXJlIjoiRXhwZXJpbWVudGFsSXNJbnB1dFBlbmRpbmciLCJleHBpcnkiOjE1Njc1NTUxOTl9"]],null,6],[169,null,null,[1]]]]],[4,null,17,null,null,null,null,["1288355901","165763429","3946387130","3617864019","1901889028","586877095","1194064817"]]],[10,[[21064165],[21064166]]],[50,[[21064169],[21064170,[[168,null,null,[1]]]]]],[1,[[21064194],[21064195,[[165,null,null,[1]]]]]],[10,[[21064211],[21064212,[[177,null,null,[1]]]]]],[1,[[21064227],[21064228,[[159,null,null,[1]],[139,null,null,[1]]]]]],[50,[[21064324],[21064325,[[null,13,null,[]]]]]],[50,[[21064358],[21064359,[[126,null,null,[1]]]]]],[10,[[21064365],[21064366,[[null,null,null,[null,null,null,["u_tz"]],null,7]]],[21064367,[[null,null,null,[null,null,null,["u_his"]],null,7]]],[21064368,[[null,null,null,[null,null,null,["u_ah","u_aw"]],null,7]]],[21064369,[[null,null,null,[null,null,null,["u_cd"]],null,7]]],[21064370,[[null,null,null,[null,null,null,["u_nplug"]],null,7]]],[21064371,[[null,null,null,[null,null,null,["u_nmime"]],null,7]]],[21064372,[[null,null,null,[null,null,null,["flash"]],null,7]]]]],[10,[[21064386],[21064387,[[null,26,null,[null,1]]]],[21064388,[[null,26,null,[null,10]]]]]],[50,[[21064395],[21064396,[[197,null,null,[1]]]]]],[1,[[21064411],[21064412,[[144,null,null,[1]]]]]],[10,[[21064413],[21064414,[[194,null,null,[1]]]]]],[null,[[21064439],[21064440,[[199,null,null,[1]]]]]],[1000,[[21064458,null,[4,null,6,null,null,null,null,["21064456"]]],[21064459,null,[4,null,6,null,null,null,null,["21064457"]]]],[4,null,22]],[null,[[21064464],[21064465,[[199,null,null,[1]],[201,null,null,[1]]]]]],[1000,[[22316437,null,[2,[[8,null,null,1,null,-1],[7,null,null,1,null,5]]]],[22316438,null,[2,[[8,null,null,1,null,4],[7,null,null,1,null,10]]]]],[4,null,3]],[100,[[22325465],[22325466,[[80,null,null,[1]]]]],[4,null,6,null,null,null,null,["21060611"]]],[1,[[108809132],[108809133,[[45,null,null,[1]]]]]],[10,[[370204026],[370204027],[370204053]]]]],[4,[[null,[[21063927],[21063928,[[null,16,null,[null,500]]]],[21063929,[[null,16,null,[null,500]]]],[21063930,[[null,16,null,[null,750]]]],[21063931,[[null,16,null,[null,1000]]]],[21063932,[[null,17,null,[null,50]]]],[21063933,[[null,17,null,[null,100]]]],[21063934,[[null,17,null,[null,150]]]],[21063935,[[null,17,null,[null,200]]]],[21063936,[[null,18,null,[null,1]]]],[21063937,[[null,18,null,[null,250]]]],[21063938,[[null,18,null,[null,500]]]],[21063939,[[null,18,null,[null,750]]]],[21063940,[[null,18,null,[null,1000]]]]]],[null,[[21063941],[21063942,[[null,16,null,[null,250]]]],[21063943,[[null,16,null,[null,500]]]],[21063944,[[null,16,null,[null,750]]]],[21063945,[[null,16,null,[null,1000]]]],[21063946,[[null,17,null,[null,50]]]],[21063947,[[null,17,null,[null,100]]]],[21063948,[[null,17,null,[null,150]]]],[21063949,[[null,17,null,[null,200]]]],[21063950,[[null,18,null,[null,250]]]],[21063951,[[null,18,null,[null,500]]]],[21063952,[[null,18,null,[null,750]]]],[21063953,[[null,18,null,[null,1000]]]]]],[null,[[21063962],[21063963,[[null,18,null,[null,1]]]]]],[null,[[21064288],[21064289]]],[null,[[21064291],[21064292],[21064293]]],[null,[[21064296,[[150,null,null,[1]]]]]],[null,[[21064298,[[null,22,null,[null,30]]]]]],[null,[[21064299],[21064300],[21064301,[[null,19,null,[null,30]]]],[21064302,[[null,19,null,[null,30]],[150,null,null,[1]]]]]],[null,[[21064303],[21064304],[21064305,[[74,null,null,[1]]]]]],[null,[[21064451],[21064452],[21064453,[[74,null,null,[1]]]]]],[null,[[676982417]]],[null,[[676982681]]],[null,[[676983663]]]]],[5,[[10,[[21061507],[21061508,[[83,null,null,[1]],[84,null,null,[1]]]]]],[1000,[[21062785,[[23,null,null,[]]],[7,null,null,5,null,50]],[21062786,[[23,null,null,[1]]],[8,null,null,5,null,949]]],[2,[[12,null,null,null,2,null,"today\\.line\\.me/.+/(main|article)"],[4,null,8,null,null,null,null,["_gmptnl"]]]],7],[1000,[[21062812,[[23,null,null,[1]]],[2,[[8,null,null,5,null,49],[7,null,null,5,null,950]]]]],[2,[[12,null,null,null,2,null,"today\\.line\\.me/.+/(main|article)"],[4,null,8,null,null,null,null,["_gmptnl"]]]],7],[1000,[[21063916,[[23,null,null,[]]],[7,null,null,5,null,50]],[21063917,[[23,null,null,[1]]],[8,null,null,5,null,949]],[21064113,[[23,null,null,[1]]]]],[2,[[12,null,null,null,2,null,"today\\.line\\.me/.+/(main|article)"],[4,null,8,null,null,null,null,["webkit.messageHandlers._gmptnl"]]]],7],[10,[[21064029,null,[4,null,8,null,null,null,null,["webkit.messageHandlers._gmptnl"]]]]],[10,[[21064030,null,[4,null,8,null,null,null,null,["_gmptnl"]]]]],[1,[[21064275],[21064276,[[176,null,null,[1]]]],[21064277,[[176,null,null,[1]],[171,null,null,[1]]]],[21064278,[[176,null,null,[1]],[173,null,null,[1]],[171,null,null,[1]]]],[21064279,[[172,null,null,[1]],[176,null,null,[1]],[171,null,null,[1]]]],[21064280,[[172,null,null,[1]],[176,null,null,[1]],[173,null,null,[1]],[171,null,null,[1]]]]]],[1000,[[21064355,[[89,null,null,[1]]],[12,null,null,null,3,null,"googPreventMultipleDisplay"]]],null,12],[1000,[[21064454,[[null,7,null,[null,1]],[null,24,null,[null,21064454]],[60,null,null,[1]],[null,28,null,[null,0.1]],[null,25,null,[null,21064454]]],[6,null,null,4,null,4]],[21064455,[[null,7,null,[null,1]],[60,null,null,[1]],[null,28,null,[null,0.1]]],[6,null,null,4,null,5]]],[4,null,3],1],[1000,[[21064456,[[null,24,null,[null,21064456]],[null,25,null,[null,21064456]]],[2,[[8,null,null,1,null,29],[7,null,null,1,null,40]]]],[21064457,[[null,24,null,[null,21064457]],[null,25,null,[null,21064457]],[187,null,null,[],[[[4,null,22],[1]]]]],[2,[[8,null,null,1,null,39],[7,null,null,1,null,50]]]]],[4,null,3],1]]],[6,[[null,[[21062379,[[23,null,null,[1]]]]]],[50,[[21064102],[21064103,[[159,null,null,[1]]]]],[2,[[4,null,12]]]],[1000,[[21064215,null,[4,null,6,null,null,null,null,["21064211"]]],[21064216,null,[4,null,6,null,null,null,null,["21064212"]]]],[4,null,19]]]],[9,[[1000,[[21061726]],[4,null,13,null,null,null,null,["PnHSZjekOp","jvnwkvnp"]]]]]]])
