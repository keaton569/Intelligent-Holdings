(function(){var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function t(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ba="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ca;
if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var ea={a:!0},fa={};try{fa.__proto__=ea;da=fa.a;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ha=ca;
function u(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(ha)ha(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.W=b.prototype}
var ia="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ja="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function v(a,b){if(b){for(var c=ia,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ja(c,d,{configurable:!0,writable:!0,value:f})}}
v("Promise",function(a){function b(g){this.g=0;this.h=void 0;this.f=[];var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var h=this;this.h(function(){h.j()})}this.f.push(g)};
var e=ia.setTimeout;c.prototype.h=function(g){e(g,0)};
c.prototype.j=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.i(l)}}}this.f=null};
c.prototype.i=function(g){this.h(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.w),reject:g(this.j)}};
b.prototype.w=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.C(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.F(g):this.l(g)}};
b.prototype.F=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}"function"==typeof h?this.H(h,g):this.l(g)};
b.prototype.j=function(g){this.m(2,g)};
b.prototype.l=function(g){this.m(1,g)};
b.prototype.m=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.h=h;this.o()};
b.prototype.o=function(){if(null!=this.f){for(var g=0;g<this.f.length;++g)f.g(this.f[g]);this.f=null}};
var f=new c;b.prototype.C=function(g){var h=this.i();g.ha(h.resolve,h.reject)};
b.prototype.H=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,q){return"function"==typeof r?function(E){try{l(r(E))}catch(D){m(D)}}:q}
var l,m,p=new b(function(r,q){l=r;m=q});
this.ha(k(g,l),k(h,m));return p};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.ha=function(g,h){function k(){switch(l.g){case 1:g(l.h);break;case 2:h(l.h);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.f?f.g(k):this.f.push(k)};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=t(g),m=l.next();!m.done;m=l.next())d(m.value).ha(h,k)})};
b.all=function(g){var h=t(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(E){return function(D){r[E]=D;q--;0==q&&l(r)}}
var r=[],q=0;do r.push(void 0),q++,d(k.value).ha(p(r.length-1),m),k=h.next();while(!k.done)})};
return b});
function ka(){ka=function(){};
ia.Symbol||(ia.Symbol=la)}
function ma(a,b){this.f=a;ja(this,"description",{configurable:!0,writable:!0,value:b})}
ma.prototype.toString=function(){return this.f};
var la=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new ma("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
function na(){ka();var a=ia.Symbol.iterator;a||(a=ia.Symbol.iterator=ia.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ja(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return oa(aa(this))}});
na=function(){}}
function oa(a){na();a={next:a};a[ia.Symbol.iterator]=function(){return this};
return a}
function pa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=pa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=pa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
function qa(a,b){na();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};
return d.next()}};
d[Symbol.iterator]=function(){return d};
return d}
v("Array.prototype.keys",function(a){return a?a:function(){return qa(this,function(b){return b})}});
v("Array.prototype.values",function(a){return a?a:function(){return qa(this,function(b,c){return c})}});
function ra(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var sa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ra(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||sa});
v("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==pa(this,b,"includes").indexOf(b,c||0)}});
v("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=t(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ra(k,g)){var l=new c;ja(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ra(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&ra(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&ra(k,g)&&ra(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&ra(k,g)&&ra(k[g],this.f)?delete k[g][this.f]:!1};
return b});
v("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return oa(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.g[l];if(m&&ra(h.g,l))for(var p=0;p<m.length;p++){var r=m[p];if(k!==k&&r.key!==r.key||k===r.key)return{id:l,list:m,index:p,A:r}}return{id:l,list:m,index:-1,A:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=t(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(t([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
na();var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.A?l.A.value=k:(l.A={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.A),this.f.previous.next=l.A,this.f.previous=l.A,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.A&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.A.previous.next=h.A.next,h.A.next.previous=h.A.previous,h.A.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).A};
e.prototype.get=function(h){return(h=d(this,h).A)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
v("Set",function(a){function b(c){this.f=new Map;if(c){c=t(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(t([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
na();b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ra(b,d)&&c.push(b[d]);return c}});
var ta=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ba(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
v("Reflect.construct",function(){return ta});
var w=this||self;function x(a){return void 0!==a}
function y(a){return"string"==typeof a}
function z(a,b,c){a=a.split(".");c=c||w;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&x(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
var ua=/^[\w+/_-]+[=]{0,2}$/,va=null;function A(a,b){for(var c=a.split("."),d=b||w,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function wa(){}
function xa(a){a.na=void 0;a.Ka=function(){return a.na?a.na:a.na=new a}}
function ya(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function za(a){return"array"==ya(a)}
function Aa(a){var b=ya(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function B(a){return"function"==ya(a)}
function Ba(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var Ca="closure_uid_"+(1E9*Math.random()>>>0),Da=0;function Ea(a,b,c){return a.call.apply(a.bind,arguments)}
function Ha(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function C(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?C=Ea:C=Ha;return C.apply(null,arguments)}
function Ia(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var F=Date.now||function(){return+new Date};
function G(a,b){function c(){}
c.prototype=b.prototype;a.W=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;var H=window;function Ja(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ja);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
G(Ja,Error);Ja.prototype.name="CustomError";function Ka(a){return a[a.length-1]}
var La=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(y(a))return y(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},I=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=y(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ma=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=y(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Na=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
I(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},Oa=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=y(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1},Pa=Array.prototype.every?function(a,b,c){Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=y(a)?a.split(""):a,f=0;f<d&&(!(f in e)||b.call(c,e[f],f,a));f++);
};
function Qa(a,b){var c=Ra(a,b,void 0);return 0>c?null:y(a)?a.charAt(c):a[c]}
function Ra(a,b,c){for(var d=a.length,e=y(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}
function Sa(a,b){return 0<=La(a,b)}
function Ta(a){return Array.prototype.concat.apply([],arguments)}
function Ua(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Va(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Aa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Wa(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function Xa(a,b,c){c=c||Ya;for(var d=0,e=a.length,f;d<e;){var g=d+e>>1;var h=c(b,a[g]);0<h?d=g+1:(e=g,f=!h)}return f?d:~d}
function Za(a,b){a.sort(b||Ya)}
function $a(a,b){var c=Ya;Za(a,function(d,e){return c(b(d),b(e))})}
function Ya(a,b){return a>b?1:a<b?-1:0}
;function ab(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function bb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function cb(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1}
function db(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function eb(a){var b=gb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function hb(a){for(var b in a)return!1;return!0}
function ib(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function jb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function kb(a){var b=ya(a);if("object"==b||"array"==b){if(B(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=kb(a[c]);return b}return a}
var lb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<lb.length;f++)c=lb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function nb(a,b){this.f=a===ob&&b||"";this.g=pb}
nb.prototype.U=!0;nb.prototype.T=function(){return this.f};
nb.prototype.toString=function(){return"Const{"+this.f+"}"};
var pb={},ob={},qb;qb=new nb(ob,"");function rb(){this.f="";this.g=sb}
rb.prototype.U=!0;rb.prototype.T=function(){return this.f.toString()};
rb.prototype.ma=!0;rb.prototype.ka=function(){return 1};
function tb(a){if(a instanceof rb&&a.constructor===rb&&a.g===sb)return a.f;ya(a);return"type_error:TrustedResourceUrl"}
var sb={};function ub(a){var b=new rb;b.f=a;return b}
;var vb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function wb(a,b){if(b)a=a.replace(xb,"&amp;").replace(yb,"&lt;").replace(zb,"&gt;").replace(Ab,"&quot;").replace(Bb,"&#39;").replace(Cb,"&#0;");else{if(!Db.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(xb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(yb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(zb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ab,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Bb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Cb,"&#0;"))}return a}
var xb=/&/g,yb=/</g,zb=/>/g,Ab=/"/g,Bb=/'/g,Cb=/\x00/g,Db=/[\x00&<>"']/;
function Eb(a,b){for(var c=0,d=vb(String(a)).split("."),e=vb(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",k=e[g]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==h[0].length&&0==k[0].length)break;c=Fb(0==h[1].length?0:parseInt(h[1],10),0==k[1].length?0:parseInt(k[1],10))||Fb(0==h[2].length,0==k[2].length)||Fb(h[2],k[2]);h=h[3];k=k[3]}while(0==c)}return c}
function Fb(a,b){return a<b?-1:a>b?1:0}
;function Gb(){this.f="";this.g=Hb}
Gb.prototype.U=!0;Gb.prototype.T=function(){return this.f.toString()};
Gb.prototype.ma=!0;Gb.prototype.ka=function(){return 1};
function Ib(a){if(a instanceof Gb&&a.constructor===Gb&&a.g===Hb)return a.f;ya(a);return"type_error:SafeUrl"}
var Jb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Kb(a){if(a instanceof Gb)return a;a="object"==typeof a&&a.U?a.T():String(a);Jb.test(a)||(a="about:invalid#zClosurez");return Lb(a)}
var Hb={};function Lb(a){var b=new Gb;b.f=a;return b}
Lb("about:blank");var J;a:{var Mb=w.navigator;if(Mb){var Nb=Mb.userAgent;if(Nb){J=Nb;break a}}J=""}function K(a){return-1!=J.indexOf(a)}
;function Ob(){return K("Firefox")||K("FxiOS")}
function Pb(){return(K("Chrome")||K("CriOS"))&&!K("Edge")}
;function Qb(){this.f="";this.h=Rb;this.g=null}
Qb.prototype.ma=!0;Qb.prototype.ka=function(){return this.g};
Qb.prototype.U=!0;Qb.prototype.T=function(){return this.f.toString()};
function Sb(a){if(a instanceof Qb&&a.constructor===Qb&&a.h===Rb)return a.f;ya(a);return"type_error:SafeHtml"}
var Rb={};function Tb(a,b){var c=new Qb;c.f=a;c.g=b;return c}
Tb("<!DOCTYPE html>",0);var Ub=Tb("",0);Tb("<br>",0);function Vb(a){var b=ub(qb instanceof nb&&qb.constructor===nb&&qb.g===pb?qb.f:"type_error:Const");a.src=tb(b).toString()}
function Wb(a,b){a.src=tb(b);if(null===va)b:{var c=w.document;if((c=c.querySelector&&c.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&ua.test(c)){va=c;break b}va=""}c=va;c&&a.setAttribute("nonce",c)}
;function Xb(a){return decodeURIComponent(a.replace(/\+/g," "))}
function Yb(a){return a=wb(a,void 0)}
function Zb(a){var b=Number(a);return 0==b&&/^[\s\xa0]*$/.test(a)?NaN:b}
;function $b(){return K("iPhone")&&!K("iPod")&&!K("iPad")}
function ac(){return $b()||K("iPad")||K("iPod")}
;function bc(a,b){var c=cc;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var dc=K("Opera"),ec=K("Trident")||K("MSIE"),fc=K("Edge"),gc=fc||ec,hc=K("Gecko")&&!(-1!=J.toLowerCase().indexOf("webkit")&&!K("Edge"))&&!(K("Trident")||K("MSIE"))&&!K("Edge"),ic=-1!=J.toLowerCase().indexOf("webkit")&&!K("Edge");function jc(){var a=w.document;return a?a.documentMode:void 0}
var kc;a:{var lc="",mc=function(){var a=J;if(hc)return/rv:([^\);]+)(\)|;)/.exec(a);if(fc)return/Edge\/([\d\.]+)/.exec(a);if(ec)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ic)return/WebKit\/(\S+)/.exec(a);if(dc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
mc&&(lc=mc?mc[1]:"");if(ec){var nc=jc();if(null!=nc&&nc>parseFloat(lc)){kc=String(nc);break a}}kc=lc}var oc=kc,cc={};function pc(a){return bc(a,function(){return 0<=Eb(oc,a)})}
var qc;qc=w.document&&ec?jc():void 0;var rc=Ob(),sc=$b()||K("iPod"),tc=K("iPad"),uc=K("Android")&&!(Pb()||Ob()||K("Opera")||K("Silk")),vc=Pb(),wc=K("Safari")&&!(Pb()||K("Coast")||K("Opera")||K("Edge")||K("Edg/")||K("OPR")||Ob()||K("Silk")||K("Android"))&&!ac();var xc={},yc=null;function zc(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Ac(a,function(f){d[e++]=f})}
function Ac(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=yc[l];if(null!=m)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Bc();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function Bc(){if(!yc){yc={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));xc[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===yc[f]&&(yc[f]=e)}}}}
;function Cc(a){this.f=a||{cookie:""}}
n=Cc.prototype;n.isEnabled=function(){return navigator.cookieEnabled};
n.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');x(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(F()+1E3*c)).toUTCString();this.f.cookie=a+"="+b+e+d+c+f};
n.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=vb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=x(this.get(a));this.set(a,"",0,b,c);return d};
n.M=function(){return Dc(this).keys};
n.I=function(){return Dc(this).values};
n.isEmpty=function(){return!this.f.cookie};
n.clear=function(){for(var a=Dc(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Dc(a){a=(a.f.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=vb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Ec=new Cc("undefined"==typeof document?null:document);function Fc(a){var b=A("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if(y(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||w.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(a.constructor&&a.constructor instanceof
Function?(a.constructor.name?b=a.constructor.name:(b=a.constructor,Gc[b]?b=Gc[b]:(b=String(b),Gc[b]||(c=/function\s+([^\(]+)/m.exec(b),Gc[b]=c?c[1]:"[Anonymous]"),b=Gc[b])),b='Unknown Error of type "'+b+'"'):b="Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})}
var Gc={};var Hc=!ec||9<=Number(qc);function Ic(a,b){this.x=x(a)?a:0;this.y=x(b)?b:0}
n=Ic.prototype;n.clone=function(){return new Ic(this.x,this.y)};
n.equals=function(a){return a instanceof Ic&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
n.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
n.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
n.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Jc(a,b){this.width=a;this.height=b}
n=Jc.prototype;n.clone=function(){return new Jc(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Kc(a,b){bb(b,function(c,d){c&&"object"==typeof c&&c.U&&(c=c.T());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Lc.hasOwnProperty(d)?a.setAttribute(Lc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Lc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Mc(a){a=a.document;a="CSS1Compat"==a.compatMode?a.documentElement:a.body;return new Jc(a.clientWidth,a.clientHeight)}
function Nc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Hc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Yb(g.name),'"');if(g.type){f.push(' type="',Yb(g.type),'"');var h={};mb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(y(g)?f.className=g:za(g)?f.className=g.join(" "):Kc(f,g));2<d.length&&Oc(e,f,d);return f}
function Oc(a,b,c){function d(g){g&&b.appendChild(y(g)?a.createTextNode(g):g)}
for(var e=2;e<c.length;e++){var f=c[e];!Aa(f)||Ba(f)&&0<f.nodeType?d(f):I(Pc(f)?Ua(f):f,d)}}
function Qc(a){return ec&&!pc("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function Rc(a){a=a.tabIndex;return"number"==typeof a&&0<=a&&32768>a}
function Pc(a){if(a&&"number"==typeof a.length){if(Ba(a))return"function"==typeof a.item||"string"==typeof a.item;if(B(a))return"function"==typeof a.item}return!1}
function Sc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Tc(a){Uc();return ub(a)}
var Uc=wa;var Vc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Wc(a){return a?decodeURI(a):a}
function L(a,b){return b.match(Vc)[a]||null}
function Xc(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null;if(0<=e){var g=c[d].substring(0,e);f=c[d].substring(e+1)}else g=c[d];b(g,f?Xb(f):"")}}
function Yc(a,b,c){if(za(b))for(var d=0;d<b.length;d++)Yc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Zc(a){var b=[],c;for(c in a)Yc(c,a[c],b);return b.join("&")}
function $c(a,b){var c=Zc(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var ad=/#|$/;function bd(a,b){var c=a.search(ad);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return Xb(a.substr(d,e-d))}
;function cd(a){var b=dd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function ed(){var a=[];cd(function(b){a.push(b)});
return a}
var dd={wb:"allow-forms",xb:"allow-modals",yb:"allow-orientation-lock",zb:"allow-pointer-lock",Ab:"allow-popups",Bb:"allow-popups-to-escape-sandbox",Cb:"allow-presentation",Db:"allow-same-origin",Eb:"allow-scripts",Fb:"allow-top-navigation",Gb:"allow-top-navigation-by-user-activation"},fd=ab(function(){return ed()});
function gd(){var a=document.createElement("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};I(fd(),function(d){b.call(a,d)&&(c[d]=!0)});
return c}
;var hd=(new Date).getTime();function id(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function jd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var r=g,q=0;64>q;q+=4)r[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(p<<1|p>>>31)&4294967295;p=e[0];var E=e[1],D=e[2],Y=e[3],Fa=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var Ga=Y^E&(D^Y);var fb=1518500249}else Ga=E^D^Y,fb=1859775393;else 60>q?(Ga=E&D|Y&(E|D),fb=2400959708):(Ga=E^D^Y,fb=3395469782);Ga=((p<<5|p>>>27)&4294967295)+Ga+Fa+fb+r[q]&4294967295;Fa=Y;Y=D;D=(E<<30|E>>>2)&4294967295;E=p;p=Ga}e[0]=e[0]+p&4294967295;e[1]=e[1]+
E&4294967295;e[2]=e[2]+D&4294967295;e[3]=e[3]+Y&4294967295;e[4]=e[4]+Fa&4294967295}
function c(p,r){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],E=0,D=p.length;E<D;++E)q.push(p.charCodeAt(E));p=q}r||(r=p.length);q=0;if(0==l)for(;q+64<r;)b(p.slice(q,q+64)),q+=64,m+=64;for(;q<r;)if(f[l++]=p[q++],m++,64==l)for(l=0,b(f);q+64<r;)b(p.slice(q,q+64)),q+=64,m+=64}
function d(){var p=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;5>q;q++)for(var E=24;0<=E;E-=8)p[r++]=e[q]>>E&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Wa:function(){for(var p=d(),r="",q=0;q<p.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return r}}}
;function kd(a,b,c){var d=[],e=[];if(1==(za(c)?2:1))return e=[b,a],I(d,function(h){e.push(h)}),ld(e.join(" "));
var f=[],g=[];I(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];I(d,function(h){e.push(h)});
a=ld(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function ld(a){var b=jd();b.update(a);return b.Wa().toLowerCase()}
;function md(a){var b=id(String(w.location.href)),c=w.__OVERRIDE_SID;null==c&&(c=(new Cc(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?w.__SAPISID:w.__APISID,null==b&&(b=(new Cc(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(w.location.href);return d&&b&&c?[c,kd(id(d),b,a||null)].join(" "):null}return null}
;function M(){this.D=this.D;this.V=this.V}
M.prototype.D=!1;M.prototype.dispose=function(){this.D||(this.D=!0,this.G())};
function nd(a,b){a.D?x(void 0)?b.call(void 0):b():(a.V||(a.V=[]),a.V.push(x(void 0)?C(b,void 0):b))}
M.prototype.G=function(){if(this.V)for(;this.V.length;)this.V.shift()()};
function od(a){a&&"function"==typeof a.dispose&&a.dispose()}
function pd(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Aa(d)?pd.apply(null,d):od(d)}}
;function qd(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
qd.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function rd(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function sd(a){w.setTimeout(function(){throw a;},0)}
var td;
function ud(){var a=w.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!K("Presto")&&(a=function(){var e=document.createElement("IFRAME");e.style.display="none";Vb(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(Sb(Ub));e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=C(function(k){if(("*"==h||k.origin==h)&&k.data==
g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!K("Trident")&&!K("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(x(c.next)){c=c.next;var e=c.Ha;c.Ha=null;e()}};
return function(e){d.next={Ha:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var f=document.createElement("SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};
document.documentElement.appendChild(f)}:function(e){w.setTimeout(e,0)}}
;function vd(){this.g=this.f=null}
var xd=new qd(function(){return new wd},function(a){a.reset()});
vd.prototype.add=function(a,b){var c=xd.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
vd.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function wd(){this.next=this.scope=this.f=null}
wd.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
wd.prototype.reset=function(){this.next=this.scope=this.f=null};function yd(a,b){zd||Ad();Bd||(zd(),Bd=!0);Cd.add(a,b)}
var zd;function Ad(){if(w.Promise&&w.Promise.resolve){var a=w.Promise.resolve(void 0);zd=function(){a.then(Dd)}}else zd=function(){var b=Dd;
!B(w.setImmediate)||w.Window&&w.Window.prototype&&!K("Edge")&&w.Window.prototype.setImmediate==w.setImmediate?(td||(td=ud()),td(b)):w.setImmediate(b)}}
var Bd=!1,Cd=new vd;function Dd(){for(var a;a=Cd.remove();){try{a.f.call(a.scope)}catch(b){sd(b)}rd(xd,a)}Bd=!1}
;function Ed(a){this.f=0;this.m=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=wa)try{var b=this;a.call(void 0,function(c){Fd(b,2,c)},function(c){Fd(b,3,c)})}catch(c){Fd(this,3,c)}}
function Gd(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
Gd.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var Hd=new qd(function(){return new Gd},function(a){a.reset()});
function Id(a,b,c){var d=Hd.get();d.g=a;d.onRejected=b;d.context=c;return d}
function Jd(a){return new Ed(function(b,c){c(a)})}
Ed.prototype.then=function(a,b,c){return Kd(this,B(a)?a:null,B(b)?b:null,c)};
Ed.prototype.$goog_Thenable=!0;function Ld(a,b){return Kd(a,null,b,void 0)}
Ed.prototype.cancel=function(a){0==this.f&&yd(function(){var b=new Md(a);Nd(this,b)},this)};
function Nd(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.h||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?Nd(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Od(c),Pd(c,e,3,b)))}a.h=null}else Fd(a,3,b)}
function Qd(a,b){a.g||2!=a.f&&3!=a.f||Rd(a);a.i?a.i.next=b:a.g=b;a.i=b}
function Kd(a,b,c,d){var e=Id(null,null,null);e.f=new Ed(function(f,g){e.g=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);!x(k)&&h instanceof Md?g(h):f(k)}catch(l){g(l)}}:g});
e.f.h=a;Qd(a,e);return e.f}
Ed.prototype.F=function(a){this.f=0;Fd(this,2,a)};
Ed.prototype.w=function(a){this.f=0;Fd(this,3,a)};
function Fd(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.F,f=a.w;if(d instanceof Ed){Qd(d,Id(e||wa,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ba(d))try{var k=d.then;if(B(k)){Sd(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.m=c,a.f=b,a.h=null,Rd(a),3!=b||c instanceof Md||Td(a,c))}}
function Sd(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Rd(a){a.l||(a.l=!0,yd(a.o,a))}
function Od(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
Ed.prototype.o=function(){for(var a;a=Od(this);)Pd(this,a,this.f,this.m);this.l=!1};
function Pd(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,Ud(b,c,d);else try{b.h?b.g.call(b.context):Ud(b,c,d)}catch(e){Vd.call(null,e)}rd(Hd,b)}
function Ud(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Td(a,b){a.j=!0;yd(function(){a.j&&Vd.call(null,b)})}
var Vd=sd;function Md(a){Ja.call(this,a)}
G(Md,Ja);Md.prototype.name="cancel";function Wd(a,b,c){M.call(this);this.f=a;this.i=b||0;this.g=c;this.h=C(this.Xa,this)}
G(Wd,M);n=Wd.prototype;n.ea=0;n.G=function(){Wd.W.G.call(this);this.stop();delete this.f;delete this.g};
n.start=function(a){this.stop();var b=this.h;a=x(a)?a:this.i;if(!B(b))if(b&&"function"==typeof b.handleEvent)b=C(b.handleEvent,b);else throw Error("Invalid listener argument");this.ea=2147483647<Number(a)?-1:w.setTimeout(b,a||0)};
n.stop=function(){this.isActive()&&w.clearTimeout(this.ea);this.ea=0};
n.isActive=function(){return 0!=this.ea};
n.Xa=function(){this.ea=0;this.f&&this.f.call(this.g)};function Xd(){this.g=-1}
;function Yd(){this.g=64;this.f=[];this.l=[];this.m=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
G(Yd,Xd);Yd.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function Zd(a,b,c){c||(c=0);var d=a.m;if(y(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):(f=c^g^h,l=
3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
Yd.prototype.update=function(a,b){if(null!=a){x(b)||(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)Zd(this,a,d),d+=this.g;if(y(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){Zd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){Zd(this,e);f=0;break}}this.h=f;this.j+=b}};
Yd.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;Zd(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};var $d="StopIteration"in w?w.StopIteration:{message:"StopIteration",stack:""};function ae(){}
ae.prototype.next=function(){throw $d;};
ae.prototype.P=function(){return this};
function be(a){if(a instanceof ae)return a;if("function"==typeof a.P)return a.P(!1);if(Aa(a)){var b=0,c=new ae;c.next=function(){for(;;){if(b>=a.length)throw $d;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function ce(a,b){if(Aa(a))try{I(a,b,void 0)}catch(c){if(c!==$d)throw c;}else{a=be(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==$d)throw c;}}}
function de(a){if(Aa(a))return Ua(a);a=be(a);var b=[];ce(a,function(c){b.push(c)});
return b}
;function ee(a,b){this.g={};this.f=[];this.i=this.h=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof ee)for(c=a.M(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
n=ee.prototype;n.I=function(){fe(this);for(var a=[],b=0;b<this.f.length;b++)a.push(this.g[this.f[b]]);return a};
n.M=function(){fe(this);return this.f.concat()};
n.equals=function(a,b){if(this===a)return!0;if(this.h!=a.h)return!1;var c=b||ge;fe(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function ge(a,b){return a===b}
n.isEmpty=function(){return 0==this.h};
n.clear=function(){this.g={};this.i=this.h=this.f.length=0};
n.remove=function(a){return he(this.g,a)?(delete this.g[a],this.h--,this.i++,this.f.length>2*this.h&&fe(this),!0):!1};
function fe(a){if(a.h!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];he(a.g,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.h!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],he(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
n.get=function(a,b){return he(this.g,a)?this.g[a]:b};
n.set=function(a,b){he(this.g,a)||(this.h++,this.f.push(a),this.i++);this.g[a]=b};
n.forEach=function(a,b){for(var c=this.M(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new ee(this)};
n.P=function(a){fe(this);var b=0,c=this.i,d=this,e=new ae;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw $d;var f=d.f[b++];return a?f:d.g[f]};
return e};
function he(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function ie(a){var b=[];je(new ke,a,b);return b.join("")}
function ke(){}
function je(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(za(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),je(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),le(d,c),c.push(":"),je(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":le(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var me={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},ne=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function le(a,b){b.push('"',a.replace(ne,function(c){var d=me[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),me[c]=d);return d}),'"')}
;function N(a){M.call(this);this.j=1;this.h=[];this.i=0;this.f=[];this.g={};this.l=!!a}
G(N,M);n=N.prototype;n.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.j;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.j=e+3;d.push(e);return e};
function oe(a){var b=pe,c=a.g.onClick;if(c){var d=a.f;(c=Qa(c,function(e){return d[e+1]==b&&void 0==d[e+2]}))&&a.fa(c)}}
n.fa=function(a){var b=this.f[a];if(b){var c=this.g[b];if(0!=this.i)this.h.push(a),this.f[a+1]=wa;else{if(c){var d=La(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.f[a];delete this.f[a+1];delete this.f[a+2]}}return!!b};
n.la=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.l)for(e=0;e<c.length;e++){var g=c[e];qe(this.f[g+1],this.f[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;c=this.h.pop();)this.fa(c)}}return 0!=e}return!1};
function qe(a,b,c){yd(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.g[a];b&&(I(b,this.fa,this),delete this.g[a])}else this.f.length=0,this.g={}};
n.G=function(){N.W.G.call(this);this.clear();this.h.length=0};function re(a){this.f=a}
re.prototype.set=function(a,b){x(b)?this.f.set(a,ie(b)):this.f.remove(a)};
re.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
re.prototype.remove=function(a){this.f.remove(a)};function se(a){this.f=a}
G(se,re);function te(a){this.data=a}
function ue(a){return!x(a)||a instanceof te?a:new te(a)}
se.prototype.set=function(a,b){se.W.set.call(this,a,ue(b))};
se.prototype.g=function(a){a=se.W.get.call(this,a);if(!x(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
se.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,!x(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function ve(a){this.f=a}
G(ve,se);ve.prototype.set=function(a,b,c){if(b=ue(b)){if(c){if(c<F()){ve.prototype.remove.call(this,a);return}b.expiration=c}b.creation=F()}ve.W.set.call(this,a,b)};
ve.prototype.g=function(a){var b=ve.W.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<F()||c&&c>F())ve.prototype.remove.call(this,a);else return b}};function we(a){this.f=a}
G(we,ve);function xe(){}
;function ye(){}
G(ye,xe);ye.prototype.clear=function(){var a=de(this.P(!0)),b=this;I(a,function(c){b.remove(c)})};function ze(a){this.f=a}
G(ze,ye);n=ze.prototype;n.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.f.getItem(a);if(!y(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.f.removeItem(a)};
n.P=function(a){var b=0,c=this.f,d=new ae;d.next=function(){if(b>=c.length)throw $d;var e=c.key(b++);if(a)return e;e=c.getItem(e);if(!y(e))throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){this.f.clear()};
n.key=function(a){return this.f.key(a)};function Ae(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
G(Ae,ze);function Be(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.f=a}
G(Be,ze);function Ce(a,b){this.g=a;this.f=null;if(ec&&!(9<=Number(qc))){De||(De=new ee);this.f=De.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),De.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
G(Ce,ye);var Ee={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},De=null;function Fe(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Ee[b]})}
n=Ce.prototype;n.isAvailable=function(){return!!this.f};
n.set=function(a,b){this.f.setAttribute(Fe(a),b);Ge(this)};
n.get=function(a){a=this.f.getAttribute(Fe(a));if(!y(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.f.removeAttribute(Fe(a));Ge(this)};
n.P=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new ae;d.next=function(){if(b>=c.length)throw $d;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if(!y(e))throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ge(this)};
function Ge(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function He(a,b){this.g=a;this.f=b+"::"}
G(He,ye);He.prototype.set=function(a,b){this.g.set(this.f+a,b)};
He.prototype.get=function(a){return this.g.get(this.f+a)};
He.prototype.remove=function(a){this.g.remove(this.f+a)};
He.prototype.P=function(a){var b=this.g.P(!0),c=this,d=new ae;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function Ie(a){if(a.I&&"function"==typeof a.I)return a.I();if(y(a))return a.split("");if(Aa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b}
function Je(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(Aa(a)||y(a))I(a,b,c);else{if(a.M&&"function"==typeof a.M)var d=a.M();else if(a.I&&"function"==typeof a.I)d=void 0;else if(Aa(a)||y(a)){d=[];for(var e=a.length,f=0;f<e;f++)d.push(f)}else d=db(a);e=Ie(a);f=e.length;for(var g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)}}
;function Ke(a,b){this.f=this.o=this.h="";this.i=null;this.l=this.g="";this.m=!1;var c;a instanceof Ke?(this.m=x(b)?b:a.m,Le(this,a.h),this.o=a.o,this.f=a.f,Me(this,a.i),this.g=a.g,Ne(this,a.j.clone()),this.l=a.l):a&&(c=String(a).match(Vc))?(this.m=!!b,Le(this,c[1]||"",!0),this.o=Oe(c[2]||""),this.f=Oe(c[3]||"",!0),Me(this,c[4]),this.g=Oe(c[5]||"",!0),Ne(this,c[6]||"",!0),this.l=Oe(c[7]||"")):(this.m=!!b,this.j=new Pe(null,this.m))}
Ke.prototype.toString=function(){var a=[],b=this.h;b&&a.push(Qe(b,Re,!0),":");var c=this.f;if(c||"file"==b)a.push("//"),(b=this.o)&&a.push(Qe(b,Re,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.i,null!=c&&a.push(":",String(c));if(c=this.g)this.f&&"/"!=c.charAt(0)&&a.push("/"),a.push(Qe(c,"/"==c.charAt(0)?Se:Te,!0));(c=this.j.toString())&&a.push("?",c);(c=this.l)&&a.push("#",Qe(c,Ue));return a.join("")};
Ke.prototype.resolve=function(a){var b=this.clone(),c=!!a.h;c?Le(b,a.h):c=!!a.o;c?b.o=a.o:c=!!a.f;c?b.f=a.f:c=null!=a.i;var d=a.g;if(c)Me(b,a.i);else if(c=!!a.g){if("/"!=d.charAt(0))if(this.f&&!this.g)d="/"+d;else{var e=b.g.lastIndexOf("/");-1!=e&&(d=b.g.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],g=0;g<e.length;){var h=e[g++];"."==h?d&&g==e.length&&f.push(""):".."==h?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(h),d=!0)}d=f.join("/")}else d=e}c?b.g=d:c=""!==a.j.toString();c?Ne(b,a.j.clone()):c=!!a.l;c&&(b.l=a.l);return b};
Ke.prototype.clone=function(){return new Ke(this)};
function Le(a,b,c){a.h=c?Oe(b,!0):b;a.h&&(a.h=a.h.replace(/:$/,""))}
function Me(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.i=b}else a.i=null}
function Ne(a,b,c){b instanceof Pe?(a.j=b,Ve(a.j,a.m)):(c||(b=Qe(b,We)),a.j=new Pe(b,a.m))}
function Oe(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function Qe(a,b,c){return y(a)?(a=encodeURI(a).replace(b,Xe),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function Xe(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var Re=/[#\/\?@]/g,Te=/[#\?:]/g,Se=/[#\?]/g,We=/[#\?@]/g,Ue=/#/g;function Pe(a,b){this.g=this.f=null;this.h=a||null;this.i=!!b}
function Ye(a){a.f||(a.f=new ee,a.g=0,a.h&&Xc(a.h,function(b,c){a.add(Xb(b),c)}))}
n=Pe.prototype;n.add=function(a,b){Ye(this);this.h=null;a=Ze(this,a);var c=this.f.get(a);c||this.f.set(a,c=[]);c.push(b);this.g=this.g+1;return this};
n.remove=function(a){Ye(this);a=Ze(this,a);return he(this.f.g,a)?(this.h=null,this.g=this.g-this.f.get(a).length,this.f.remove(a)):!1};
n.clear=function(){this.f=this.h=null;this.g=0};
n.isEmpty=function(){Ye(this);return 0==this.g};
function $e(a,b){Ye(a);b=Ze(a,b);return he(a.f.g,b)}
n.forEach=function(a,b){Ye(this);this.f.forEach(function(c,d){I(c,function(e){a.call(b,e,d,this)},this)},this)};
n.M=function(){Ye(this);for(var a=this.f.I(),b=this.f.M(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
n.I=function(a){Ye(this);var b=[];if(y(a))$e(this,a)&&(b=Ta(b,this.f.get(Ze(this,a))));else{a=this.f.I();for(var c=0;c<a.length;c++)b=Ta(b,a[c])}return b};
n.set=function(a,b){Ye(this);this.h=null;a=Ze(this,a);$e(this,a)&&(this.g=this.g-this.f.get(a).length);this.f.set(a,[b]);this.g=this.g+1;return this};
n.get=function(a,b){if(!a)return b;var c=this.I(a);return 0<c.length?String(c[0]):b};
n.toString=function(){if(this.h)return this.h;if(!this.f)return"";for(var a=[],b=this.f.M(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.I(d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}}return this.h=a.join("&")};
n.clone=function(){var a=new Pe;a.h=this.h;this.f&&(a.f=this.f.clone(),a.g=this.g);return a};
function Ze(a,b){var c=String(b);a.i&&(c=c.toLowerCase());return c}
function Ve(a,b){b&&!a.i&&(Ye(a),a.h=null,a.f.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(this.remove(d),this.remove(e),0<c.length&&(this.h=null,this.f.set(Ze(this,e),Ua(c)),this.g=this.g+c.length))},a));
a.i=b}
n.extend=function(a){for(var b=0;b<arguments.length;b++)Je(arguments[b],function(c,d){this.add(d,c)},this)};function af(a){return(a=a.exec(J))?a[1]:""}
var bf=function(){if(rc)return af(/Firefox\/([0-9.]+)/);if(ec||fc||dc)return oc;if(vc)return ac()?af(/CriOS\/([0-9.]+)/):af(/Chrome\/([0-9.]+)/);if(wc&&!ac())return af(/Version\/([0-9.]+)/);if(sc||tc){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(J);if(a)return a[1]+"."+a[2]}else if(uc)return(a=af(/Android\s+([0-9.]+)/))?a:af(/Version\/([0-9.]+)/);return""}();function cf(){this.g=[];this.f=-1}
cf.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
cf.prototype.get=function(a){return!!this.g[a]};
function df(a){-1==a.f&&(a.f=Na(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;/*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
var ef=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};z("yt.config_",ef,void 0);function ff(a){var b=arguments;1<b.length?ef[b[0]]=b[1]:1===b.length&&Object.assign(ef,b[0])}
function O(a,b){return a in ef?ef[a]:b}
function gf(a){return O(a,void 0)}
;function hf(a,b){var c=P(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function P(a){return O("EXPERIMENT_FLAGS",{})[a]}
;function jf(){return A("yt.ads.biscotti.lastId_")||""}
;function kf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){lf(b)}}:a}
function lf(a,b,c,d,e){var f=A("yt.logging.errors.log");f?f(a,b,c,d,e):(f=O("ERRORS",[]),f.push([a,b,c,d,e]),ff("ERRORS",f))}
function mf(a){lf(a,"WARNING",void 0,void 0,void 0)}
;function nf(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=Xb(e[0]||""),g=Xb(e[1]||"");f in b?za(b[f])?Va(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){var h=Error("Error decoding URL component");h.params="key: "+e[0]+", value: "+e[1];"q"==e[0]?mf(h):lf(h)}}return b}
function of(a){var b=[];bb(a,function(c,d){var e=encodeURIComponent(String(d)),f;za(c)?f=c:f=[c];I(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Q(a){"?"==a.charAt(0)&&(a=a.substr(1));return nf(a)}
function pf(a){a=a.split(",");return a=a.map(function(b){return Q(b)})}
function qf(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Q(1<a.length?a[1]:a[0])):{}}
function rf(a,b){return sf(a,b||{},!0)}
function tf(a,b){return sf(a,b||{},!1)}
function sf(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Q(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return $c(a,e)+d}
;function uf(a){var b=vf;a=void 0===a?jf():a;b=Object.assign(wf(b),xf(b));b.ca_type="image";a&&(b.bid=a);return b}
function wf(a){var b={};b.dt=hd;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?H:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!H.navigator&&"unknown"!==typeof H.navigator.javaEnabled&&!!H.navigator.javaEnabled&&H.navigator.javaEnabled();H.screen&&(b.u_h=H.screen.height,b.u_w=H.screen.width,b.u_ah=H.screen.availHeight,b.u_aw=H.screen.availWidth,b.u_cd=H.screen.colorDepth);
H.navigator&&H.navigator.plugins&&(b.u_nplug=H.navigator.plugins.length);H.navigator&&H.navigator.mimeTypes&&(b.u_nmime=H.navigator.mimeTypes.length);return b}
function xf(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(l){}try{var e=b.outerWidth;var f=b.outerHeight}catch(l){}try{var g=b.innerWidth;var h=b.innerHeight}catch(l){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=Mc(c||window).round()}catch(l){k=new Jc(-12245933,-12245933)}c=k;k={};d=new cf;w.SVGElement&&w.document.createElementNS&&d.set(0);e=gd();e["allow-top-navigation-by-user-activation"]&&d.set(1);e["allow-popups-to-escape-sandbox"]&&
d.set(2);w.crypto&&w.crypto.subtle&&d.set(3);w.TextDecoder&&w.TextEncoder&&d.set(4);d=df(d);k.bc=d;k.bih=c.height;k.biw=c.width;k.brdim=b.join();a=a.g;return k.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,k.wgl=!!H.WebGLRenderingContext,k}
var vf=new function(){var a=window.document;this.f=window;this.g=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return of(uf(a))},void 0);F();var yf=x(XMLHttpRequest)?function(){return new XMLHttpRequest}:x(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function zf(){if(!yf)return null;var a=yf();return"open"in a?a:null}
function Af(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Bf(a,b){B(a)&&(a=kf(a));return window.setTimeout(a,b)}
;var Cf={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Df="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
Ef=!1;
function Ff(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=L(1,a),e=Wc(L(3,a));d&&e?(d=c,c=a.match(Vc),d=d.match(Vc),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Wc(L(3,c))==e&&(Number(L(4,c))||null)==(Number(L(4,a))||null):!0;d=!!P("web_ajax_ignore_global_headers_if_set");for(var f in Cf)e=O(Cf[f]),!e||!c&&!Gf(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Gf(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();(P("pass_biscotti_id_in_header_ajax")||P("pass_biscotti_id_in_header_ajax_tv"))&&(c||
Gf(a,"X-YouTube-Ad-Signals"))&&(b["X-YouTube-Ad-Signals"]=of(uf(void 0)));return b}
function Hf(a){var b=window.location.search,c=Wc(L(3,a)),d=Wc(L(5,a));d=(c=c&&c.endsWith("youtube.com"))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Q(b),f={};I(Df,function(g){e[g]&&(f[g]=e[g])});
return tf(a,f)}
function Gf(a,b){var c=O("CORS_HEADER_WHITELIST")||{},d=Wc(L(3,a));return d?(c=c[d])?Sa(c,b):!1:!0}
function If(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Jf(a,b);var d=Kf(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&window.clearTimeout(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||w;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.oa&&b.oa.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.Ra&&0<b.timeout&&(f=Bf(function(){e||(e=!0,window.clearTimeout(f),b.Ra.call(b.context||w))},b.timeout))}else Lf(a,b)}
function Lf(a,b){var c=b.format||"JSON";a=Jf(a,b);var d=Kf(a,b),e=!1,f,g=Mf(a,function(h){if(!e){e=!0;f&&window.clearTimeout(f);var k=Af(h),l=null,m=400<=h.status&&500>h.status,p=500<=h.status&&600>h.status;if(k||m||p)l=Nf(c,h,b.ic);if(k)a:if(h&&204==h.status)k=!0;else{switch(c){case "XML":k=0==parseInt(l&&l.return_code,10);break a;case "RAW":k=!0;break a}k=!!l}l=l||{};m=b.context||w;k?b.onSuccess&&b.onSuccess.call(m,h,l):b.onError&&b.onError.call(m,h,l);b.oa&&b.oa.call(m,h,l)}},b.method,d,b.headers,
b.responseType,b.withCredentials);
b.ga&&0<b.timeout&&(f=Bf(function(){e||(e=!0,g.abort(),window.clearTimeout(f),b.ga.call(b.context||w,g))},b.timeout));
return g}
function Jf(a,b){b.nc&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=O("XSRF_FIELD_NAME",void 0),d=b.ub;d&&(d[c]&&delete d[c],a=rf(a,d));return a}
function Kf(a,b){var c=O("XSRF_FIELD_NAME",void 0),d=O("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.N,g=gf("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.mc||Wc(L(3,a))&&!b.withCredentials&&Wc(L(3,a))!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.N&&b.N[g]||(f||(f={}),f[c]=d);f&&y(e)&&(e=Q(e),mb(e,f),e=b.Sa&&"JSON"==b.Sa?JSON.stringify(e):Zc(e));f=e||f&&!hb(f);!Ef&&f&&"POST"!=b.method&&(Ef=!0,lf(Error("AJAX request with postData should use POST")));
return e}
function Nf(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Of(b):null)d={},I(b.getElementsByTagName("*"),function(e){d[e.tagName]=Pf(e)})}c&&Qf(d);
return d}
function Qf(a){if(Ba(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Tb(a[b],null);a[c]=d}else Qf(a[b])}}
function Of(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Pf(a){var b="";I(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Mf(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&kf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=zf();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;P("debug_forward_web_query_parameters")&&(a=Hf(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Ff(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Rf={},Sf=0;
function Tf(a,b,c,d,e,f){f=f||{};f.name=c||O("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||O("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=Sf||(P("console_log_js_exceptions")&&(e=a,c=[],c.push("Name: "+e.name),c.push("Message: "+e.message),e.hasOwnProperty("params")&&c.push("Error Params: "+JSON.stringify(e.params)),c.push("File name: "+e.fileName),c.push("Stacktrace: "+e.stack),
window.console.log(c.join("\n"),e)),e=a.stacktrace,c=a.columnNumber,a.hasOwnProperty("params")&&(d=String(JSON.stringify(a.params)),f.params=d.substr(0,500)),a=Fc(a),e=e||a.stack,d=a.lineNumber.toString(),isNaN(d)||isNaN(c)||(d=d+":"+c),window.yterr&&B(window.yterr)&&window.yterr(a),Rf[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js")))){b={ub:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,250),line:d,level:b,"client.name":f.name},N:{url:O("PAGE_NAME",window.location.href),
file:a.fileName},method:"POST"};f.version&&(b["client.version"]=f.version);e&&(b.N.stack=e);for(var g in f)b.N["client."+g]=f[g];if(g=O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var h in g)b.N[h]=g[h];Lf(O("ECATCHER_REPORT_HOST","")+"/error_204",b);Rf[a.message]=!0;Sf++}}
;var Uf=0;function Vf(){var a=document,b;Oa(["fullscreenEnabled","webkitFullscreenEnabled","mozFullScreenEnabled","msFullscreenEnabled"],function(c){b=a[c];return!!b})}
z("ytDomDomGetNextId",A("ytDomDomGetNextId")||function(){return++Uf},void 0);var Wf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Xf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{a=a||window.event;if(!a)return;this.event=a}catch(c){return}for(var b in a)b in Wf||(this[b]=a[b]);this.rotation=a.rotation;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=
b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.f=a.pageX;this.g=a.pageY}
function Yf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.f=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.g=a.clientY+b}}
Xf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Xf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Xf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var gb=A("ytEventsEventsListeners")||{};z("ytEventsEventsListeners",gb,void 0);var Zf=A("ytEventsEventsCounter")||{count:0};z("ytEventsEventsCounter",Zf,void 0);
function $f(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return eb(function(e){var f="boolean"==typeof e[4]&&e[4]==!!d,g=Ba(e[4])&&Ba(d)&&ib(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function ag(a){a&&("string"==typeof a&&(a=[a]),I(a,function(b){if(b in gb){var c=gb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?bg()||"boolean"==typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete gb[b]}}))}
var bg=ab(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function cg(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=$f(a,b,c,d);if(e)return e;e=++Zf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Xf(h);if(!Sc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Xf(h);
h.currentTarget=a;return c.call(a,h)};
g=kf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),bg()||"boolean"==typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);gb[e]=[a,b,c,g,d];return e}
;function dg(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||jb(b);this.assets=a.assets||{};this.attrs=a.attrs||jb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
dg.prototype.clone=function(){var a=new dg,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==ya(c)?a[b]=jb(c):a[b]=c}return a};function eg(a){return a?a.dataset?a.dataset[fg()]:a.getAttribute("data-loaded"):null}
var gg={};function fg(){return gg.loaded||(gg.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;var hg=A("ytPubsubPubsubInstance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.fa;N.prototype.publish=N.prototype.la;N.prototype.clear=N.prototype.clear;z("ytPubsubPubsubInstance",hg,void 0);var ig=A("ytPubsubPubsubSubscribedKeys")||{};z("ytPubsubPubsubSubscribedKeys",ig,void 0);var jg=A("ytPubsubPubsubTopicToKeys")||{};z("ytPubsubPubsubTopicToKeys",jg,void 0);var kg=A("ytPubsubPubsubIsSynchronous")||{};z("ytPubsubPubsubIsSynchronous",kg,void 0);
function lg(a,b){var c=mg();if(c){var d=c.subscribe(a,function(){var e=arguments;var f=function(){ig[d]&&b.apply(window,e)};
try{kg[a]?f():Bf(f,0)}catch(g){lf(g)}},void 0);
ig[d]=!0;jg[a]||(jg[a]=[]);jg[a].push(d)}}
function ng(a,b){var c=mg();c&&c.publish.apply(c,arguments)}
function og(a){var b=mg();if(b)if(b.clear(a),a)pg(a);else for(var c in jg)pg(c)}
function mg(){return A("ytPubsubPubsubInstance")}
function pg(a){jg[a]&&(a=jg[a],I(a,function(b){ig[b]&&delete ig[b]}),a.length=0)}
;var qg=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,rg=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function sg(a,b,c){c=void 0===c?null:c;var d=tg(a),e=document.getElementById(d),f=e&&eg(e),g=e&&!f;f?b&&b():(b&&(lg(d,b),b[Ca]||(b[Ca]=++Da)),g||(e=ug(a,d,function(){if(!eg(e)){var h=e;h&&(h.dataset?h.dataset[fg()]="true":h.setAttribute("data-loaded","true"));ng(d);Bf(Ia(og,d),0)}},c)))}
function ug(a,b,c,d){d=void 0===d?null:d;var e=document.createElement("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Wb(e,Tc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function tg(a){var b=document.createElement("a");a instanceof Gb||a instanceof Gb||(a="object"==typeof a&&a.U?a.T():String(a),Jb.test(a)||(a="about:invalid#zClosurez"),a=Lb(a));b.href=Ib(a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");for(var c=a=0;c<b.length;++c)a=31*a+b.charCodeAt(c)>>>0;return"js-"+a}
;function vg(a,b){var c=jb(b),d;return Ld(new Ed(function(e,f){c.onSuccess=function(g){Af(g)?e(g):f(new wg("Request failed, status="+g.status,"net.badstatus",g))};
c.onError=function(g){f(new wg("Unknown request error","net.unknown",g))};
c.ga=function(g){f(new wg("Request timed out","net.timeout",g))};
d=Lf(a,c)}),function(e){e instanceof Md&&d.abort();
return Jd(e)})}
function xg(a,b){function c(e,f,g){return Ld(e,function(h){return 0>=f||403===h.f.status?Jd(new wg("Request retried too many times","net.retryexhausted",h.f)):d(g).then(function(){return c(vg(a,b),f-1,Math.pow(2,4-f+1)*g)})})}
function d(e){return new Ed(function(f){setTimeout(f,e)})}
return c(vg(a,b),3,1E3)}
function wg(a,b,c){Ja.call(this,a+", errorCode="+b);this.errorCode=b;this.f=c;this.name="PromiseAjaxError"}
u(wg,Ja);var yg={RED:"red",fc:"white"};var zg={vb:"adunit",Kb:"detailpage",Mb:"editpage",Nb:"embedded",Tb:"leanback",ac:"previewpage",cc:"profilepage",ec:"unplugged",Zb:"playlistoverview",dc:"sponsorshipsoffer"};function Ag(a,b){this.experimentIds=a?a.split(","):[];this.flags=nf(b||"");var c={};I(this.experimentIds,function(d){c[d]=!0});
this.experiments=c}
function R(a,b){return"true"==a.flags[b]}
function Bg(a,b){var c=a.flags[b];return c?c.toString():""}
;function Cg(a,b){this.sampleRate=a||0;this.spatialAudioType=b||0}
;function Dg(a,b,c,d){this.displayName=a;this.vssId=b;this.languageCode=c;this.kind=void 0===d?"":d}
;var Eg={0:"f",160:"h",133:"h",134:"h",135:"h",136:"h",137:"h",264:"h",266:"h",138:"h",298:"h",299:"h",304:"h",305:"h",214:"h",216:"h",374:"h",375:"h",140:"a",141:"ah",327:"sa",258:"m",380:"mac3",328:"meac3",161:"H",142:"H",143:"H",144:"H",222:"H",223:"H",145:"H",224:"H",225:"H",146:"H",226:"H",227:"H",147:"H",384:"H",376:"H",385:"H",377:"H",149:"A",261:"M",381:"MAC3",329:"MEAC3",278:"9",242:"9",243:"9",244:"9",247:"9",248:"9",271:"9",313:"9",272:"9",302:"9",303:"9",308:"9",315:"9",330:"9h",331:"9h",
332:"9h",333:"9h",334:"9h",335:"9h",336:"9h",337:"9h",171:"v",338:"so",250:"o",251:"o",194:"*",195:"*",220:"*",221:"*",196:"*",197:"*",198:"V",279:"(",280:"(",317:"(",318:"(",273:"(",274:"(",357:"(",358:"(",275:"(",359:"(",360:"(",276:"(",314:"(",561:"(",277:"(",362:"(h",363:"(h",364:"(h",365:"(h",366:"(h",367:"(h",368:"(h",562:"(h",394:"1",395:"1",396:"1",397:"1",398:"1",399:"1",400:"1",401:"1",402:"1",386:"3",387:"w",406:"6"};function Fg(){this.name="Default";this.id="und";this.isDefault=!0}
Fg.prototype.getName=function(){return this.name};
Fg.prototype.getId=function(){return this.id};
Fg.prototype.getIsDefault=function(){return this.isDefault};
Fg.prototype.toString=function(){return this.name};
Fg.prototype.getName=Fg.prototype.getName;Fg.prototype.getId=Fg.prototype.getId;Fg.prototype.getIsDefault=Fg.prototype.getIsDefault;var S={},Gg=(S.auto=0,S.tiny=144,S.light=144,S.small=240,S.medium=360,S.large=480,S.hd720=720,S.hd1080=1080,S.hd1440=1440,S.hd2160=2160,S.hd2880=2880,S.highres=4320,S);var Hg="highres hd2880 hd2160 hd1440 hd1080 hd720 large medium small tiny".split(" ");function Ig(a,b,c,d,e,f,g,h,k){this.width=a;this.height=b;a:{var l=Math.max(a,b);a=Math.min(a,b);b=Hg[0];for(var m=0;m<Hg.length;m++){var p=Hg[m],r=Gg[p];if(l>=1.3*Math.floor(16*r/9)||a>=1.3*r){l=b;break a}b=p}l="tiny"}this.quality=l;this.fps=c||0;this.stereoLayout=!e||null!=d&&0!=d&&1!=d?0:e;this.projectionType=d?2==d&&2==e?3:d:0;(c=f)||(c=Gg[this.quality],0==c?c="Auto":(d=this.fps,e=this.projectionType,c=c+(2==e||3==e||4==e?"s":"p")+(55<d?"60":49<d?"50":39<d?"48":"")));this.qualityLabel=c;this.f=
g||"";this.primaries=h||"";this.streamType=k||0;this.isAccelerated=!1}
;function Jg(a,b,c,d,e,f,g){this.id=a;this.containerType=0<=b.indexOf("/mp4")?1:0<=b.indexOf("/webm")?2:0<=b.indexOf("/x-flv")?3:0<=b.indexOf("/vtt")?4:0;this.mimeType=b;this.h=f||0;this.audio=void 0===c?null:c;this.video=void 0===d?null:d;this.captionTrack=void 0===g?null:g;this.g=void 0===e?null:e;this.f=Eg[this.id.split(";",1)[0]]||""}
function Kg(a){return/(opus|vorbis|mp4a|dtse|ac-3|ec-3)/.test(a)}
;var Lg=sc||tc;function Mg(){return T("android")&&T("chrome")&&!(T("trident/")||T("edge/"))}
function Ng(){return T("cobalt")&&T("appletv")}
function T(a){var b=J;return b?0<=b.toLowerCase().indexOf(a):!1}
;function Og(){var a=A("yt.player.utils.videoElement_");a||(a=document.createElement("VIDEO"),z("yt.player.utils.videoElement_",a,void 0));return a}
function Pg(){var a='video/webm; codecs="vp9"';if(/opus/.test(a)&&(vc&&!(0<=Eb(bf,"38"))||vc&&T("crkey")))return!1;if(window.MediaSource&&window.MediaSource.isTypeSupported)return window.MediaSource.isTypeSupported(a);if(/webm/.test(a)&&!(T("(ps4; leanback shell)")||T("ps4")&&T("cobalt")))return!1;'audio/mp4; codecs="mp4a.40.2"'==a&&(a='video/mp4; codecs="avc1.4d401f"');var b=Og();return!!(b&&b.canPlayType&&b.canPlayType(a))}
;function Qg(a,b){this.errorCode=a;this.details=b||{}}
;function Rg(a){a=void 0===a?!1:a;M.call(this);this.F=new N(a);nd(this,Ia(od,this.F))}
G(Rg,M);Rg.prototype.subscribe=function(a,b,c){return this.D?0:this.F.subscribe(a,b,c)};
Rg.prototype.j=function(a,b){this.D||this.F.la.apply(this.F,arguments)};var Sg={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},Tg;a:{var Ug=J;Ug=Ug.toLowerCase();if(-1!=Ug.indexOf("android")){var Vg=Ug.match(/android\s*(\d+(\.\d+)?)[^;|)]*[;)]/);if(Vg){var Wg=parseFloat(Vg[1]);if(100>Wg){Tg=Wg;break a}}var Xg=Ug.match("("+db(Sg).join("|")+")");Tg=Xg?Sg[Xg[0]]:0}else Tg=void 0}var Yg=Tg;function Zg(){this.f=!!A("cast.receiver.platform.canDisplayType");var a=A("cast.receiver.platform.getValue");!this.f&&a&&a("max-video-resolution-vpx")}
Zg.prototype.canPlayType=function(a,b){var c=a.canPlayType?a.canPlayType(b):!1;Lg?c=c||$g[b]:2.2==Yg?c=c||ah[b]:Mg()&&(c=c||bh[b]);return!!c};
function ch(){var a=T("google tv")&&T("chrome")&&!(0<=Eb(bf,30)),b=Ng();return Mg()&&!(0<=Eb(bf,29))||a||b?!1:!!(window.MediaSource||window.WebKitMediaSource||window.HTMLMediaElement&&HTMLMediaElement.prototype.webkitSourceAddId)}
var ah={'video/mp4; codecs="avc1.42001E, mp4a.40.2"':"maybe"},bh={"application/x-mpegURL":"maybe"},$g={"application/x-mpegURL":"maybe"};function dh(){Rg.call(this);this.f={}}
u(dh,Rg);dh.prototype.add=function(a,b){if(!this.f[a]&&(b.f||b.g||b.h)){var c=this.f,d=b;Object.isFrozen&&!Object.isFrozen(b)&&(d=Object.create(b),Object.freeze(d));c[a]=d;this.j("vast_info_card_add",a)}};
dh.prototype.remove=function(a){var b=this.get(a);delete this.f[a];return b};
dh.prototype.get=function(a){return this.f[a]||null};
dh.prototype.isEmpty=function(){return hb(this.f)};var eh=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var fh={Lb:1,Ob:2,PAUSED:3};function gh(){var a=hh(),b=ih();if(!a&&!b||!window.JSON)return null;try{var c=a.get("yt-player-bandwidth")}catch(d){}if(!y(c))try{c=b.get("yt-player-bandwidth")}catch(d){}if(!y(c))return null;try{c=JSON.parse(c,void 0)}catch(d){}return c}
var ih=ab(function(){var a=new Ae;return a.isAvailable()?new we(a):null}),hh=ab(function(){var a=new Be;
return a.isAvailable()?new we(a):null});function jh(){this.g=17;this.h=13E4;this.i=.5;this.j=this.f=!1}
;function kh(){}
kh.prototype.g=function(){};function lh(a,b){this.i=b;this.f=Math.round(a*this.i);this.j=Array(this.f);for(var c=0;c<this.f;c++)this.j[c]=Infinity;c=Array(this.f);for(var d=0;d<this.f;d++)c[d]=d;this.h=0}
lh.prototype.g=function(a,b){for(var c=Math.min(this.f,Math.max(1,Math.round(a*this.i)));c--;)this.j[this.h]=b,this.h=(this.h+1)%this.f};function mh(a){this.policy=a;eh();this.g=new lh(4,1);this.h=new lh(10,1);this.f=a.f?new kh:new lh(a.g,20);new lh(5,1);new lh(30,1);a=gh()||{};this.f.g(this.policy.i,0<a.byterate?a.byterate:this.policy.h);0<a.delay&&this.g.g(1,Math.min(+a.delay,2));0<a.stall&&this.h.g(1,+a.stall);eh()}
;function U(a,b){return void 0==b?a:"1"==b||"True"==b?!0:!1}
function nh(a,b,c){for(var d in c)if(c[d]==b)return c[d];return a}
function oh(a,b){return void 0==b?a:Number(b)}
function V(a,b){return void 0==b?a:b.toString()}
;var ph=/^http:\/\/0\.[a-z0-9\-_]+\.[a-z0-9\-_]+\.l2gfe\.[a-z0-9_]+\.([a-z]{2}|i)\.borg\.google\.com(:[0-9]+)?\/|^https:\/\/([a-z]+\.)?[0-9a-f]{1,63}\.sslproxy\.corp\.google\.com\/|^https:\/\/([a-z]+\.)?[a-z0-9\-]{1,63}\.demos\.corp\.google\.com\/|^https?:\/\/((?:uytfe\.corp|dev-uytfe\.corp|uytfe\.sandbox)\.google\.com\/|([-\w]*www[-\w]*\.|[-\w]*web[-\w]*\.|[-\w]*canary[-\w]*\.|[-\w]*dev[-\w]*\.|[-\w]{1,3}\.)+youtube(-nocookie|kids)?\.com\/|([A-Za-z0-9-]{1,63}\.)*(youtube\.googleapis\.com)(:[0-9]+)?\/|([a-z]+\.)?[a-z0-9\-]{1,63}\.([a-z]{3}|i)\.corp\.google\.com(:[0-9]+)?\/|([a-z]+\.)?[a-z0-9\-]{1,63}\.c\.googlers\.com(:[0-9]+)?\/|(docs|drive)\.google\.com\/(a\/[^/\\%]+\/|)|(tv|tv-green-qa|tv-release-qa)\.youtube\.com\/|[A-Za-z0-9-]+\.prod\.google\.com(:[0-9]+)?\/|m?web-ppg\.corp\.google\.com\/|play\.google\.com\/)/,
qh=/^https:\/\/([A-Za-z0-9-]{1,63}\.)+demos\.corp\.google\.com\/(?!url\b)|^https:\/\/([A-Za-z0-9-]{1,63}\.)+sslproxy\.corp\.google\.com\/|^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|c\.googlers\.com|docs\.google\.com|drive\.google\.com|prod\.google\.com|plus\.google\.com|currents\.google\.com|mail\.google\.com|youtube\.com|youtube\-nocookie\.com|youtubekids\.com)(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?\/(?!url\b))/,rh=/^((http(s)?):)?\/\/((((lh[3-6](-tt|-d[a-g,z])?\.((ggpht)|(googleusercontent)|(google)))|(([1-4]\.bp\.blogspot)|(bp[0-3]\.blogger))|((((cp|ci|gp)[3-6])|(ap[1-2]))\.(ggpht|googleusercontent))|(gm[1-4]\.ggpht)|(((yt[3-4])|(sp[1-3]))\.(ggpht|googleusercontent)))\.com)|(dp[3-6]\.googleusercontent\.cn)|(dp4\.googleusercontent\.com)|(photos\-image\-(dev|qa)(-auth)?\.corp\.google\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\.sandbox\.google\.com\/image)|(image\-(dev|qa)\-lighthouse(-auth)?\.sandbox\.google\.com(\/image)?))\/|^https:\/\/([A-Za-z0-9-]{1,63}\.)+demos\.corp\.google\.com\/(?!url\b)|^https:\/\/([A-Za-z0-9-]{1,63}\.)+sslproxy\.corp\.google\.com\/|^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|c\.googlers\.com|borg\.google\.com|docs\.google\.com|drive\.google\.com|googleplex\.com|play\.google\.com|prod\.google\.com|plus\.google\.com|currents\.google\.com|video\.google\.com|youtube\.com|ytimg\.com|ytimg\.sandbox\.google\.com|chat\.google\.com)(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?\/(?!url\b)|s2\.googleusercontent\.com\/s2\/favicons\?|yt[3-4]\.ggpht\.com\/)/,
sh=/^https?:\/\/(googleads\.g\.doubleclick\.net\/(aclk|pagead\/conversion)|www\.google\.com\/(aclk|pagead\/conversion)|www\.googleadservices\.com\/(aclk|pagead\/(aclk|conversion))|www\.youtube\.com\/pagead\/conversion)/,th=/^((http(s)?):)?\/\/((((lh[3-6](-tt|-d[a-g,z])?\.((ggpht)|(googleusercontent)|(google)))|(([1-4]\.bp\.blogspot)|(bp[0-3]\.blogger))|((((cp|ci|gp)[3-6])|(ap[1-2]))\.(ggpht|googleusercontent))|(gm[1-4]\.ggpht)|(((yt[3-4])|(sp[1-3]))\.(ggpht|googleusercontent)))\.com)|(dp[3-6]\.googleusercontent\.cn)|(dp4\.googleusercontent\.com)|(photos\-image\-(dev|qa)(-auth)?\.corp\.google\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\.sandbox\.google\.com\/image)|(image\-(dev|qa)\-lighthouse(-auth)?\.sandbox\.google\.com(\/image)?))\/|^https:\/\/([A-Za-z0-9-]{1,63}\.)+demos\.corp\.google\.com\/(?!url\b)|^https:\/\/([A-Za-z0-9-]{1,63}\.)+sslproxy\.corp\.google\.com\/|^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|c\.googlers\.com|borg\.google\.com|docs\.google\.com|drive\.google\.com|googleplex\.com|googlevideo\.com|play\.google\.com|prod\.google\.com|lh3\.photos\.google\.com|plus\.google\.com|currents\.google\.com|mail\.google\.com|youtube\.com|xfx7\.com|yt\.akamaized\.net|chat\.google\.com)(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?\/(?!url\b)|([A-Za-z0-9-]{1,63}\.)*c\.lh3(-d[a-gz])?\.(googleusercontent|photos\.google)\.com\/.*$)/,
uh=/^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(imasdk\.googleapis\.com|2mdn\.net|googlesyndication\.com|corp\.google\.com|c\.googlers\.com|borg\.google\.com|googleads\.g\.doubleclick\.net|prod\.google\.com|static\.doubleclick\.net|static\.googleadsserving\.cn|studioapi\.doubleclick\.net|youtube\.com|youtube\.googleapis\.com|youtube\-nocookie\.com|youtubekids\.com|ytimg\.com|ytimg\.sandbox\.google\.com)(:[0-9]+)?\/|lightbox-(demos|builder)\.appspot\.com\/|s[01](qa)?\.2mdn\.net\/ads\/richmedia\/studio\/mu\/templates\/tetris|www\.gstatic\.com\/doubleclick\/studio\/innovation\/h5\/layouts\/tetris|www\.gstatic\.com\/doubleclick\/studio\/innovation\/ytplayer)/,
vh=/^https:\/\/([A-Za-z0-9-]{1,63}\.)+demos\.corp\.google\.com\/(?!url\b)|^https:\/\/([A-Za-z0-9-]{1,63}\.)+sslproxy\.corp\.google\.com\/|^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(imasdk\.googleapis\.com|corp\.google\.com|c\.googlers\.com|borg\.google\.com|docs\.google\.com|drive\.google\.com|googleads\.g\.doubleclick\.net|googleplex\.com|play\.google\.com|prod\.google\.com|photos\.google\.com|get\.google\.com|class\.photos\.google\.com|plus\.google\.com|currents\.google\.com|books\.googleusercontent\.com|blogger\.com|mail\.google\.com|play\-books\-internal\-sandbox\.googleusercontent\.com|talkgadget\.google\.com|survey\.g\.doubleclick\.net|youtube\.com|youtube\.googleapis\.com|youtube\-nocookie\.com|youtubekids\.com|vevo\.com|jamboard\.google\.com|chat\.google\.com|meet\.google\.com|crowdsource\.google\.com)(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?\/(?!url\b)|(www\.|encrypted\.)?google\.(cat|com(\.(a[fgiru]|b[dhnorz]|c[ouy]|do|e[cgt]|fj|g[hit]|hk|jm|kh|kw|l[bcy]|m[mtxy]|n[afgip]|om|p[aeghkry]|qa|s[abglv]|t[jnrw]|ua|uy|vc|vn))?|a[cdelmstz]|c[acdfghilmnvz]|b[aefgijsty]|ee|es|d[ejkmz]|g[aefglmpry]|f[imr]|i[emoqrst]|h[nrtu]|k[giz]|je|jo|m[degklnsuvw]|l[aiktuv]|n[eloru]|p[lnst]|s[cehikmnort]|r[osuw]|us|t[dgklmnot]|ws|vg|vu|co\.(ao|bw|ck|cr|i[dln]|jp|ke|kr|ls|ma|mz|nz|th|tz|u[gkz]|ve|vi|z[amw]))\/(search|webhp)\?|lightbox-(demos|builder)\.appspot\.com\/|s0\.2mdn\.net\/instream\/html5\/native\/|s[01](qa)?\.2mdn\.net\/ads\/richmedia\/studio\/mu\/templates\/tetris|www\.gstatic\.com\/doubleclick\/studio\/innovation\/h5\/layouts\/tetris)/;function wh(a,b,c,d){!a&&(void 0===c?0:c)&&mf(Error("Player URL validator detects invalid url. "+(void 0===d?"":d)+": "+b));return a}
function xh(a){return(a=ph.exec(a))?a[0]:""}
function yh(a){var b=void 0===b?!1:b;return wh(rh.test(a),a,b,"Trusted Image URL")}
function zh(a){var b=void 0===b?!1:b;wh(sh.test(a),a,b,"Trusted Promoted Video Domain URL")}
function Ah(a,b){b=void 0===b?!1:b;return wh(qh.test(a),a,b,"Captions URL")}
function Bh(a){a=new Ke(a);Le(a,document.location.protocol);return a.toString()}
;var Ch=A("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",Ch,void 0);function Dh(){this.f=O("ALT_PREF_COOKIE_NAME","PREF");var a=Ec.get(""+this.f,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Ch[d]=c.toString())}}}
n=Dh.prototype;n.get=function(a,b){Eh(a);Fh(a);var c=void 0!==Ch[a]?Ch[a].toString():null;return null!=c?c:b?b:""};
n.set=function(a,b){Eh(a);Fh(a);if(null==b)throw Error("ExpectedNotNull");Ch[a]=b.toString()};
n.remove=function(a){Eh(a);Fh(a);delete Ch[a]};
n.save=function(){var a=this.dump();Ec.set(""+this.f,a,63072E3,"/","youtube.com",!1)};
n.clear=function(){for(var a in Ch)delete Ch[a]};
n.dump=function(){var a=[],b;for(b in Ch)a.push(b+"="+encodeURIComponent(String(Ch[b])));return a.join("&")};
function Fh(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Eh(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
xa(Dh);function Gh(a){this.C=a;this.f=null;this.i=0;this.l=null;this.j=0;this.g=[];for(a=0;4>a;a++)this.g.push(0);this.h=0;this.o=cg(window,"mousemove",C(this.F,this));a=C(this.m,this);B(a)&&(a=kf(a));this.w=window.setInterval(a,25)}
G(Gh,M);Gh.prototype.F=function(a){x(a.f)||Yf(a);var b=a.f;x(a.g)||Yf(a);this.f=new Ic(b,a.g)};
Gh.prototype.m=function(){if(this.f){var a=eh();if(0!=this.i){var b=this.l,c=this.f,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.i);this.g[this.h]=.5<Math.abs((d-this.j)/this.j)?1:0;for(c=b=0;4>c;c++)b+=this.g[c]||0;3<=b&&this.C();this.j=d}this.i=a;this.l=this.f;this.h=(this.h+1)%4}};
Gh.prototype.G=function(){window.clearInterval(this.w);ag(this.o)};function Hh(){}
function Ih(a,b){Jh(a,1,b)}
;function Kh(){}
u(Kh,Hh);function Jh(a,b,c){isNaN(c)&&(c=void 0);var d=A("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Bf(a,c||0)}
function Lh(a){if(!isNaN(a)){var b=A("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}
Kh.prototype.start=function(){var a=A("yt.scheduler.instance.start");a&&a()};
xa(Kh);Kh.Ka();var Mh={};function Nh(){var a={},b=void 0===a.eb?!0:a.eb;a=void 0===a.rb?!1:a.rb;if(null==A("_lact",window)){var c=parseInt(O("LACT"),10);c=isFinite(c)?F()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&Oh();cg(document,"keydown",Oh);cg(document,"keyup",Oh);cg(document,"mousedown",Oh);cg(document,"mouseup",Oh);b&&(a?cg(window,"touchmove",function(){Ph("touchmove",200)},{passive:!0}):(cg(window,"resize",function(){Ph("resize",200)}),cg(window,"scroll",function(){Ph("scroll",200)})));
new Gh(function(){Ph("mouse",100)});
cg(document,"touchstart",Oh,{passive:!0});cg(document,"touchend",Oh,{passive:!0})}}
function Ph(a,b){Mh[a]||(Mh[a]=!0,Ih(function(){Oh();Mh[a]=!1},b))}
function Oh(){null==A("_lact",window)&&Nh();var a=F();z("_lact",a,window);-1==A("_fact",window)&&z("_fact",a,window);(a=A("ytglobal.ytUtilActivityCallback_"))&&a()}
;var Qh=F().toString();
function Rh(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=F();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Qh)for(a=1,b=0;b<Qh.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Qh.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Sh=window,Th=Sh.ytcsi&&Sh.ytcsi.now?Sh.ytcsi.now:Sh.performance&&Sh.performance.timing&&Sh.performance.now?function(){return Sh.performance.timing.navigationStart+Sh.performance.now()}:function(){return(new Date).getTime()};var Uh="blogger books docs google-live play chat hangouts-meet photos-edu picasaweb gmail jamboard".split(" ");
function Vh(a,b){M.call(this);a=a?jb(a):{};this.experiments=new Ag(a.fexp,a.fflags);if(!b&&R(this.experiments,"fill_web_player_context_config")&&a.player_response){var c=JSON.parse(a.player_response).playerConfig;c&&(b=c.webPlayerContextConfig)}try{var d=document.location.toString()}catch(g){d=""}this.j=d;(c=window.location.ancestorOrigins)&&Array.from(c);this.loaderUrl=(this.h=U(!1,a.is_embed))?V("",a.loaderUrl):this.j;this.F=vh.test(this.loaderUrl);c=this.loaderUrl;var e=void 0===e?!1:e;wh(uh.test(c),
c,e,"Trusted Ad Domain URL");this.protocol=0==this.j.indexOf("http:")?"http":"https";this.o=xh(a.BASE_YT_URL||"")||xh(this.j)||this.protocol+"://www.youtube.com/";e=a.el;c="detailpage";"adunit"==e?c=this.h?"embedded":"detailpage":"embedded"==e||this.F?c=nh(c,e,zg):e&&(c="embedded");this.f=c;Nh();e=null;c=a.ps;d=Sa(Uh,c);!c||d&&!this.F||(e=c);this.playerStyle=e;this.J=(this.g=Sa(Uh,this.playerStyle))&&"play"!=this.playerStyle&&"jamboard"!=this.playerStyle;this.K=!this.J;e={};this.deviceParams=(e.c=
a.c||"web",e.cver=a.cver||"html5",e.cplayer="UNIPLAYER",e);(this.w=U(!1,a.disableplaybackui))||Og();this.H=U("blazer"==this.playerStyle,a.is_html5_mobile_device);this.H||(e=parseInt(F()/1E3,10),c=Dh.Ka(),R(this.experiments,"block_desktop_background_playback_with_mobile_cookie")&&c&&c.get("dhmu",e.toString()));e=Og();try{e.muted=!e.muted}catch(g){}this.L=U(!1,a.opt_out_deprecation);this.i=this.h&&"embedded"==this.f&&!Wh(this)&&!this.g&&!this.L||U(!Wh(this)&&"detailpage"!=this.f&&!this.g,a.showinfo);
this.color=nh("red",a.color,yg);this.widgetReferrer=V("",a.widget_referrer);"pictureInPictureEnabled"in window.document&&window.document.pictureInPictureEnabled||(e=Og(),e.webkitSupportsPresentationMode&&B(e.webkitSetPresentationMode));e=("detailpage"==this.f||Wh(this))&&"blazer"==this.playerStyle;(this.C=!U(!0,a.fs))||e||Vf();this.loop=U(!1,a.loop);this.pageId=V("",a.pageid);this.mute=U(!1,a.mute);this.region=V("US",a.cr);this.deviceHasDisplay=U(!0,a.deviceHasDisplay);this.l=oh(this.l,a.ismb);!Bg(this.experiments,
"html5_qoe_intercept")&&this.K&&(e=a.vss_host||"s.youtube.com",R(this.experiments,"www_for_videostats")&&"s.youtube.com"==e&&Xh(this.o));e=a;for(var f in Yh)c=Yh[f],d=e[c],void 0!=d&&(this.deviceParams[c]=d);this.userAge=oh(this.userAge,e.user_age);this.m=V(this.m,e.user_display_image);yh(this.m)||(this.m="");this.R=new dh;nd(this,Ia(od,this.R));new Zg;f=new jh;if(/^TVHTML5/.test(this.deviceParams.c)||"TV"==this.deviceParams.cplatform)f.f=!0,f.i=.1;R(this.experiments,"html5_ewma_bandwidth_estimator")&&
(f.f=!0);R(this.experiments,"html5_pctile_bandwidth_estimator")&&(f.f=!1);this.l&&(f.h=this.l/8);f.g=parseFloat(this.experiments.flags.html5_bandwidth_window_size)||f.g;f.j=R(this.experiments,"html5_dont_predict_end_time_in_past");this.schedule=new mh(f);this.enableSafetyMode=U(!1,a.enable_safety_mode);Th();this.embedConfig=V("",a.embed_config);this.O="WEB_UNPLUGGED"!=this.deviceParams.c&&"WEB_KIDS"!=this.deviceParams.c&&"music-embed"!=this.playerStyle&&!(R(this.experiments,"embeds_enable_embed_module")&&
this.h&&"embedded"==this.f&&!Wh(this)&&!this.g);this.livingRoomAppMode=a.living_room_app_mode;this.transparentBackground=b?!!b.transparentBackground:U(!1,a.transparent_background);this.useFastSizingOnWatchDefault=b?!!b.useFastSizingOnWatchDefault:U(!0,a.use_fast_sizing_on_watch_default);this.showMiniplayerButton=b?!!b.showMiniplayerButton:U(!1,a.show_miniplayer_button);this.externalFullscreen=b?!!b.externalFullscreen:U(!1,a.external_fullscreen);this.showMiniplayerUiWhenMinimized=b?!!b.showMiniplayerUiWhenMinimized:
U(!1,a.use_miniplayer_ui);this.showBackButton=U(!1,a.showbackbutton)}
u(Vh,M);function Zh(a){a=Xh(a.o);return"www.youtube-nocookie.com"==a?"www.youtube.com":a}
Vh.prototype.getVideoUrl=function(a,b,c,d,e){b={list:b};c&&(e?b.time_continue=c:b.t=c);c="music-embed"==this.playerStyle?"music.youtube.com":Zh(this);d&&"www.youtube.com"==c?d="https://youtu.be/"+a:"WEB_UNPLUGGED"==this.deviceParams.c?(d="https://"+c+"/fire",b.v=a):(d=this.protocol+"://"+c+"/watch",b.v=a,Lg&&(a=jf())&&(b.ebc=a));return $c(d,b)};
Vh.prototype.getVideoEmbedCode=function(a,b,c){var d="https://"+("music-embed"==this.playerStyle?"music.youtube.com":Zh(this))+"/embed/"+a;c&&(d=$c(d,{list:c}));a=!R(this.experiments,"enable_responsive_embed_snippet");R(this.experiments,"embed_snippet_includes_version")&&(d=$c(d,{ecver:a?"1":"2"}));c=b.width;b=b.height;a?(a=Yb(d),b='<iframe width="'+c+'" height="'+b+'" src="'+a+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'):
(a=Math.round(360*c/b),b='<div style="position:relative;height:0;padding-bottom:'+Math.round(1E4*b/c)/100+'%"><iframe src="'+Yb(d)+'" style="position:absolute;width:100%;height:100%;left:0" width="'+a+'" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>');return b};
function Wh(a){return"adunit"==a.f||"gvn"==a.playerStyle}
function Xh(a){var b=Wc(L(3,a));return(a=Number(L(4,a))||null)?b+":"+a:b}
var Yh={Hb:"cbrand",Ib:"cbr",Jb:"cbrver",Pb:"c",Sb:"cver",Rb:"ctheme",Qb:"cplayer",Ub:"cmodel",Vb:"cnetwork",Wb:"cos",Xb:"cosver",Yb:"cplatform"};var $h=1;function ai(a){M.call(this);this.f={};this.i={};this.element=bi(this,a)}
u(ai,M);
function bi(a,b,c){c=c||"svg"==b.B;if(c){var d=document.createElementNS("http://www.w3.org/2000/svg",b.B);gc&&(b.X||(b.X={}),b.X.focusable="false")}else d=document.createElement(String(b.B));var e;if(e=b.Z){if(e=ci(a,d,"class",e))di(a,d,"class",e),a.f[e]=d}else if(e=b.qa){for(var f=0;f<e.length;f++)a.f[e[f]]=d;di(a,d,"class",e.join(" "))}if(e=b.tb)c=ci(a,d,"child",e),null!=c&&d.appendChild(document.createTextNode(String(c)));else if(e=b.Y)for(var g=f=0;g<e.length;g++){var h=e[g];if(h)if(y(h))h=ci(a,
d,"child",h),null!=h&&d.appendChild(document.createTextNode(String(h)));else if(h.element)d.appendChild(h.element);else{var k=h;h=bi(a,k,c);d.appendChild(h);k.pc&&(k="ytp-id-"+$h++,h.id=k,h=document.createElementNS("http://www.w3.org/2000/svg","use"),h.setAttribute("class","ytp-svg-shadow"),h.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+k),k=f++,d.insertBefore(h,d.childNodes[k]||null))}}if(b=b.X){c=d;for(var l in b)e=b[l],null!=e&&di(a,c,l,y(e)?ci(a,c,l,e):e)}return d}
function ci(a,b,c,d){return"{{"==d.substr(0,2)?(a.i[d]=[b,c],null):d}
ai.prototype.update=function(a){for(var b in a)this.updateValue(b,a[b])};
ai.prototype.updateValue=function(a,b){var c=this.i["{{"+a+"}}"];c&&di(this,c[0],c[1],b)};
function di(a,b,c,d){if("child"==c){for(;c=b.firstChild;)b.removeChild(c);if(!za(d)||Ba(d)&&y(d.B))d=[d];c=[];for(var e=0;e<d.length;e++){var f=d[e];if(null!=f){var g=f.nodeType;if(1==g||3==g)c.push(f);else if(Ba(f)&&y(f.B))c.push(bi(a,f));else if(f.element)c.push(f.element);else if(y(f)&&-1!=f.indexOf("\n"))for(f=f.split("\n"),g=0;g<f.length;g++)0<g&&c.push(document.createElement("BR")),c.push(document.createTextNode(String(f[g])));else c.push(document.createTextNode(String(f)))}}for(a=0;a<c.length;a++)b.appendChild(c[a])}else"style"==
c?b.style.cssText=d?d:"":null===d?b.removeAttribute(c):(a=d.toString(),"href"==c&&(a=Ib(Kb(a)).toString()),b.setAttribute(c,a))}
ai.prototype.G=function(){this.f={};this.i={};var a=this.element;a&&a.parentNode&&a.parentNode.removeChild(a);M.prototype.G.call(this)};function ei(a){ai.call(this,a);this.j="";this.g=!0;this.h=[]}
u(ei,ai);ei.prototype.show=function(){this.g||(this.element.style.display=this.j,this.g=!0)};
ei.prototype.hide=function(){this.g&&(this.element.style.display="none",this.g=!1)};
ei.prototype.focus=function(){var a=this.element;("A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!Qc(a)||Rc(a)):Qc(a)&&Rc(a))&&ec&&(!B(a.getBoundingClientRect)||ec&&null==a.parentElement||a.getBoundingClientRect());this.element.focus()};
ei.prototype.G=function(){for(;this.h.length;){var a=this.h.pop();a.target.removeEventListener(a.type,a.listener)}ai.prototype.G.call(this)};function fi(a,b,c,d,e){this.duration=c;this.endTime=b+c;this.ingestionTime=d;this.u=a;this.startTime=b;this.range=e||null}
;function gi(){this.segments=[]}
n=gi.prototype;n.getDuration=function(a){return(a=this.ia(a))?a.duration:0};
n.Ja=function(a){return this.getDuration(a)};
n.S=function(){return this.segments.length?this.segments[this.segments.length-1].u:-1};
n.La=function(a){return(a=this.ja(a))?a.u:-1};
n.Ma=function(a){return(a=this.ia(a))?a.startTime:0};
n.Oa=function(){return 0<this.segments.length};
n.ia=function(a){a=Xa(this.segments,new fi(a,0,0,0),function(b,c){return b.u-c.u});
return 0<=a?this.segments[a]:null};
n.ja=function(a){a=Xa(this.segments,{startTime:a},function(b,c){return b.startTime-c.startTime});
return 0<=a?this.segments[a]:this.segments[Math.max(0,-a-2)]};
n.append=function(a){if(0!=a.length)if(a=Ua(a),0==this.segments.length)this.segments=a;else{var b=this.segments.length?Ka(this.segments).endTime:0,c=a[0].u-this.S();if(1<c){var d=this.segments;if(!za(d))for(var e=d.length-1;0<=e;e--)delete d[e];d.length=0}for(c=0<c?0:-c+1;c<a.length;c++)d=a[c],d.startTime=b,d.endTime=d.startTime+d.duration,b+=a[c].duration,this.segments.push(a[c])}};
function hi(a,b){if(b>a.S())a.segments=[];else{var c=Ra(a.segments,function(d){return d.u>=b},a);
0<c&&a.segments.splice(0,c)}}
;var ii={},ji=(ii.predictStart="predictStart",ii.start="start",ii["continue"]="continue",ii.stop="stop",ii);function ki(a,b,c,d,e,f){this.f=a;this.durationSecs=b;this.context=c;this.identifier=d;this.event=e;this.g=f}
;function li(a,b){this.start=a;this.end=b;this.length=b-a+1}
function mi(a){a=a.split("-");return 2==a.length&&(a=new li(parseInt(a[0],10),parseInt(a[1],10)),!isNaN(a.start)&&!isNaN(a.end)&&!isNaN(a.length)&&0<a.length)?a:null}
li.prototype.toString=function(){return this.start+"-"+(null==this.end?"":this.end)};var ni={Ym:function(a,b){a.splice(0,b)},
f0:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
vI:function(a){a.reverse()}};
function oi(a){a=a.split("");ni.vI(a,37);ni.f0(a,34);ni.f0(a,50);ni.Ym(a,1);ni.vI(a,22);ni.f0(a,68);return a.join("")}
;function pi(a){this.h=a;this.j=this.g=this.l="";this.f={};this.i=""}
pi.prototype.set=function(a,b){this.f[a]!==b&&(this.f[a]=b,this.i="")};
pi.prototype.get=function(a){if(this.h){var b=this.h;var c=void 0===c?!1:c;if(!wh(th.test(b),b,c,"Trusted Stream URL")&&!this.h.startsWith("local"))throw Error("Untrusted URL: "+this.h);b=this.h;c=b instanceof Ke?b.clone():new Ke(b,void 0);this.l=c.h;this.j=c.f+(null!=c.i?":"+c.i:"");var d=c.g;if(0==d.indexOf("/videoplayback"))this.g="/videoplayback",d=d.substr(14);else if(0==d.indexOf("/api/manifest")){b=d.indexOf("/",12);var e=d.indexOf("/",b+1);0<b&&0<e?(this.g=d.substr(0,e),d=d.substr(e+1)):(this.g=
d,d="")}else this.g=d,d="";b=this.f;d=d.split("/");e=0;d[0]||e++;for(var f={};e<d.length;e+=2)d[e]&&qi(f,d[e],d[e+1]);d=this.f=f;c=c.j.toString().split("&");e={};for(f=0;f<c.length;f++){var g=c[f],h=g.indexOf("=");0<h?qi(e,g.substr(0,h),g.substr(h+1)):g&&(e[g]="")}for(var k in e)d[k]=e[k];k=this.f;for(var l in b)k[l]=b[l];"index.m3u8"==this.f.file&&(delete this.f.file,this.g+="/file/index.m3u8");this.i=this.h=""}return this.f[a]||null};
pi.prototype.clone=function(){var a=new pi(this.h);a.l=this.l;a.g=this.g;a.j=this.j;a.f=jb(this.f);a.i=this.i;return a};
function qi(a,b,c){if("cmo"==b){var d;0<=(d=c.indexOf("="))?(b="cmo="+c.substr(0,d),c=c.substr(d+1)):0<=(d=c.indexOf("%3D"))&&(b="cmo="+c.substr(0,d),c=c.substr(d+3))}a[b]=c}
;function ri(a){a.clone()}
;function si(a,b,c){this.info=b;this.initRange=c||null;this.resource=new ri(a)}
;function ti(a,b,c,d,e){si.call(this,a,b,d);this.index=e||new gi}
u(ti,si);ti.prototype.update=function(a,b,c){this.index.append(a);hi(this.index,c)};function ui(a,b,c,d,e){e=void 0===e?Infinity:e;this.segments=[];this.f=a;this.g=void 0===c?!1:c;this.h=e}
u(ui,gi);ui.prototype.S=function(){return Math.min(this.h,Math.max(gi.prototype.S.call(this),-1))};
ui.prototype.ja=function(a){if(!this.g)return gi.prototype.ja.call(this,a);if(!this.segments.length)return null;var b=Xa(this.segments,{startTime:a},function(d,e){return d.startTime-e.startTime}),c=this.segments[0<=b?b:Math.max(-(b+2),0)];
return c.startTime+c.duration>a&&c.startTime<=a?c:-1==b?vi(this,Math.max(c.u-Math.ceil((c.startTime-a)/this.f),0),c):vi(this,c.u+Math.ceil((a-c.endTime)/this.f),c)};
ui.prototype.ia=function(a){if(!this.g)return gi.prototype.ia.call(this,a);if(!this.segments.length)return null;var b=wi(this,a);return 0<=b?this.segments[b]:vi(this,a,this.segments[Math.max(-(b+2),0)])};
function wi(a,b){return Xa(a.segments,{u:b},function(c,d){return c.u-d.u})}
function vi(a,b,c){return new fi(b,Math.max(0,c.startTime-(c.u-b)*a.f),a.f,0,void 0)}
;function xi(a,b,c,d,e,f,g){d=void 0===d?!1:d;e=void 0===e?14400:e;f=void 0===f?0:f;g=void 0===g?Infinity:g;ti.call(this,a,b,"",void 0,void 0,c);this.index=new ui(c||0,e,d,f,g)}
u(xi,ti);function yi(a,b,c,d){this.u=a;this.f=b;this.durationSecs=c;this.g=d||NaN}
;function W(a,b,c){for(;a;a=a.parentNode)if(a.attributes&&(!c||a.nodeName==c)){var d=a.getAttribute(b);if(d)return d}return""}
function zi(a,b){for(var c=a;c;c=c.parentNode){var d=c.getElementsByTagName(b);if(0<d.length)return d[0]}return null}
function Ai(a){if(!a)return 0;var b=a.match(/PT(([0-9]*)H)?(([0-9]*)M)?(([0-9.]*)S)?/);return b?3600*parseFloat(b[2]||0)+60*parseFloat(b[4]||0)+parseFloat(b[6]||0):parseFloat(a)}
function Bi(a){return a.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})$/)?a+"Z":a}
;function Ci(){this.f=[];this.g=null;this.j=0;this.i=[];this.h=!1;this.l=""}
Ci.prototype.update=function(a,b){var c=void 0;this.g&&(c=this.g);var d=new Ci,e=Array.from(a.getElementsByTagName("S"));if(e.length){var f=+W(a,"timescale")||1,g=(+e[0].getAttribute("t")||0)/f,h=+W(a,"startNumber")||0;var k=g;var l=+W(a,"presentationTimeOffset")||0;k=c?c.f+c.durationSecs:b?k-l/f:0;l=Date.parse(Bi(W(a,"yt:segmentIngestTime")))/1E3;d.h="SegmentTemplate"==a.parentNode.tagName;d.h&&(d.l=W(a,"media"));var m=c?h-c.u:1;d.j=0<m?0:-m+1;e=t(e);for(m=e.next();!m.done;m=e.next()){m=m.value;
for(var p=+m.getAttribute("d")/f,r=(+m.getAttribute("yt:sid")||0)/f,q=+m.getAttribute("r")||0,E=0;E<=q;E++)if(c&&h<=c.u)h++;else{var D=new yi(h,k,p,l+r);d.f.push(D);var Y=D.f;D=m.getAttribute("yt:cuepointTimeOffset");var Fa=m.getAttribute("yt:cuepointDuration");if(D&&Fa){D=parseFloat(D);Y=-D/f+Y;Fa=parseFloat(Fa)/f;var Ga=m.getAttribute("yt:cuepointContext")||null,fb=m.getAttribute("yt:cuepointIdentifier"),Gk=m.getAttribute("yt:cuepointEvent");D=new ki(Y,Fa,Ga,fb,ji[Gk]||"unknown",D)}else D=null;
D&&d.i.push(D);h++;k+=p;g+=p;l+=p+r}}d.f.length&&(d.g=Ka(d.f))}this.j=d.j;this.g=d.g||this.g;Va(this.f,d.f);Va(this.i,d.i);this.h=d.h;this.l=d.l};
function Di(a){var b=a.i;a.i=[];return b}
;function Ei(){this.i=[];this.f=null;this.g={};this.h={}}
function Fi(a,b,c){var d=[];b=Array.from(b.getElementsByTagName("SegmentTimeline"));b=t(b);for(var e=b.next();!e.done;e=b.next()){e=e.value;var f=e.parentNode.parentNode,g=null;"Period"==f.nodeName?g=Gi(a):"AdaptationSet"==f.nodeName?g=Hi(a,f.attributes.id?f.attributes.id.value:f.attributes.mimetype.value):"Representation"==f.nodeName&&(g=Ii(a,f.attributes.id.value));if(null==g)return;g.update(e,c);Va(d,Di(g))}Va(a.i,d);$a(a.i,function(h){return 1E3*h.f+h.g})}
function Ji(a){a.f&&(a.f.f=[]);bb(a.g,function(b){b.f=[]});
bb(a.h,function(b){b.f=[]})}
function Gi(a){a.f||(a.f=new Ci);return a.f}
function Hi(a,b){a.g[b]||(a.g[b]=new Ci);return a.g[b]}
function Ii(a,b){a.h[b]||(a.h[b]=new Ci);return a.h[b]}
;function Ki(a,b,c,d,e){si.call(this,a,b,d||void 0);this.index=new gi;this.indexRange=e}
u(Ki,si);function Li(){this.g=new Float64Array(128);this.f=new Float64Array(128);this.h=!1}
n=Li.prototype;n.Ma=function(a){return this.f[a]/1};
n.getDuration=function(a){a=this.Ja(a);return 0<=a?a/1:-1};
n.Ja=function(a){return 0>a+1||this.h?this.f[a+1]-this.f[a]:-1};
n.S=function(){return-1};
n.La=function(a){a=Xa(this.f.subarray(0,0),1*a);return 0<=a?a:Math.max(0,-a-2)};
n.Oa=function(){return 0<=this.S()};
n.cap=function(a,b){if(1>this.g.length){var c=2*this.g.length;c+=2;var d=this.g;this.g=new Float64Array(c+1);var e=this.f;this.f=new Float64Array(c+1);for(c=0;1>c;c++)this.g[c]=d[c],this.f[c]=e[c]}this.h=!0;this.f[0]=b;this.g[0]=a};function Mi(a,b,c,d,e,f){si.call(this,a,b,c||void 0);this.indexRange=d;this.index=new Li;this.lastModified=f}
u(Mi,si);function Ni(a,b){return Oi(function(c,d){return xg(c,d)},a,b)}
function Oi(a,b,c){return a(b,c).then(function(d){var e;d.responseType&&"text"!=d.responseType?"arraybuffer"==d.responseType&&(e=String.fromCharCode.apply(null,new Uint8Array(d.response))):e=d.responseText;return(e=!e||2048<e.length?"":0==e.indexOf("https://")?e:"")?Oi(a,e,c):d})}
;function Pi(a,b,c){a=void 0===a?"":a;b=void 0===b?null:b;c=void 0===c?!1:c;Rg.call(this);this.H=this.duration=0;this.isLive=this.m=!1;this.J=0;this.R=this.L=!1;this.w=eh();this.h=Infinity;this.f={};this.sourceUrl=a||"";this.i=0;this.g=null;this.aa=!!b&&R(b,"html5_live_nonzero_first_segment_start_time");this.o=!1;this.K=[];this.ba=!!b&&R(b,"html5_live_self_init_segments");this.l=null;this.ca=c;this.da=!b||!R(b,"html5_manifest_without_credentials");this.C=!!b&&R(b,"disable_html5_manifest_namespace_redux");
this.O=""}
u(Pi,Rg);function Qi(a){cb(a.f,function(b){return!!b.info.g})}
function Ri(a){return cb(a.f,function(b){return b.info.video?2==b.info.video.projectionType:!1})}
function Si(a){return cb(a.f,function(b){return b.info.video?3==b.info.video.projectionType:!1})}
function Ti(a){return cb(a.f,function(b){return b.info.video?4==b.info.video.projectionType:!1})}
function Ui(a){return cb(a.f,function(b){return b.info.video?1==b.info.video.stereoLayout:!1})}
function Vi(a,b){a.f[b.info.id]=b}
function Wi(a,b,c,d){c=void 0===c?0:c;var e=new Pi("",d,!1);e.duration=c||0;I(a,function(f){var g=Xi(f,b),h=mi(f.init),k=mi(f.index),l=parseInt(f.clen,10),m=Yi(f.url,f.sp,f.s),p=parseInt(f.lmt,10);m&&Vi(e,new Mi(m,g,h,k,l,p,f))});
return e}
function Zi(a,b,c,d){c=void 0===c?0:c;var e=new Pi("",d,!1);e.duration=c||0;I(a,function(f){var g=Xi(f,b),h=Yi(f.url,f.sp,f.s);if(1!=g.containerType){var k=d&&R(d,"html5_otf_webm_audio_killswitch");if(!d||!R(d,"html5_manifestless_vp9_otf")||!g.video&&k)return}h&&(g.video&&3==g.video.streamType?Vi(e,new Ki(h,g,"sq/0",null,null)):Vi(e,new Ki(h,g,"",mi(f.init),mi(f.index))))});
e.R=!0;return e}
function $i(a,b,c,d){var e=new Pi("",d,!0);I(a,function(f){var g=Xi(f,c),h=Yi(f.url,f.sp,f.s),k=parseInt(f.target_duration_sec,10);f=parseInt(f.max_dvr_duration_sec,10)||14400;var l=parseInt(h.get("mindsq"),10)||parseInt(h.get("min_sq"),10)||0,m=parseInt(h.get("maxdsq"),10)||parseInt(h.get("max_sq"),10)||Infinity;e.J=e.J||l;var p=g.mimeType;p=!(p.includes("vtt")||p.includes("text/mp4"));h&&Vi(e,new xi(h,g,k,d&&R(d,"html5_manifestless_interpolate")&&p,f,l,m))});
e.m=!b;e.L=!0;e.o=!0;e.isLive=!b;return e}
function Xi(a,b){var c=a.type;var d=a.itag;var e=a.xtags;e&&(d=a.itag+";"+e);var f=null;e=null;if(/(vp9|vp09|vp8|avc1|av01)/.test(c)){f=(a.size||"640x360").split("x");f=new Ig(+f[0],+f[1],+a.fps,+a.projection_type,+a.stereo_layout,a.quality_label,a.eotf,a.primaries,+a.stream_type);var g=f;null===aj&&(aj=window.MediaSource&&MediaSource.isTypeSupported&&MediaSource.isTypeSupported('video/webm; codecs="vp09.02.51.10.01.09.16.09"')&&!MediaSource.isTypeSupported('video/webm; codecs="vp09.02.51.10.01.09.99.99"'));
if((aj||bj)&&('video/webm; codecs="vp9"'==c||'video/webm; codecs="vp9.2"'==c)){var h="00",k="08",l="01",m="01",p="01";'video/webm; codecs="vp9.2"'==c&&(h="02",k="10","bt2020"==g.primaries&&(p=l="09"),"smpte2084"==g.f&&(m="16"),"arib-std-b67"==g.f&&(m="18"));c='video/webm; codecs="'+["vp09",h,"51",k,"01",l,m,p].join(".")+'"'}}g=null;Kg(c)&&(g=new Cg(+a.audio_sample_rate||void 0,+a.spatial_audio_type));a.caption_display_name&&a.caption_vss_id&&a.caption_language_code&&(e=new Dg(a.caption_display_name,
a.caption_vss_id,a.caption_language_code,a.caption_kind));h=parseInt(a.bitrate,10)/8;k=null;if(b&&a.drm_families)for(k={},l=t(a.drm_families.split(",")),m=l.next();!m.done;m=l.next())m=m.value,k[m]=b[m];return new Jg(d,c,g,f,k,h,e)}
function cj(a){return Oa(a,function(b){return 3==+b.stream_type})?3:0}
n=Pi.prototype;
n.qb=function(a){var b=a.getElementsByTagName("Representation");if(0<a.getElementsByTagName("SegmentList").length||0<a.getElementsByTagName("SegmentTemplate").length){this.L=this.m=!0;this.g||(this.g=new Ei);Fi(this.g,a,this.aa);this.j("refresh");for(a=0;a<b.length;a++){var c=dj(this,b[a]),d=this.isLive&&1==c.containerType&&this.ba;if(!this.f[c.id]){var e=Yi(zi(b[a],"BaseURL").textContent),f=zi(b[a],"Initialization"),g=W(f,"sourceURL");f=mi(W(f,"range"));d&&(g="",f=void 0);this.f[c.id]=new ti(e,c,
g,null===f?void 0:f)}c=this.f[c.id];e=W(b[a],"id","AdaptationSet");e=""!=e?e:W(b[a],"mimetype","AdaptationSet");g=this.g;e=g.h[c.info.id]||g.g[e]||g.f||null;g=e.f;if(e.h)for(d=[],g=t(g),f=g.next();!f.done;f=g.next()){f=f.value;for(var h=c.info.id,k=8*c.info.h,l=f.u,m=f.f,p=e.l.split("$$"),r=0;r<p.length;r++)p[r]=p[r].replace("$RepresentationID$",h),p[r]=p[r].replace("$Number$",l.toString()),p[r]=p[r].replace("$Bandwidth$",k.toString()),p[r]=p[r].replace("$Time$",m.toString());d.push(new fi(f.u,f.f,
f.durationSecs,f.g,null))}else{e=Wa(zi(b[a],"SegmentList").getElementsByTagName("SegmentURL"),e.j);f=[];for(h=0;h<e.length;h++)f.push(ej(e[h],g[h],d));d=f}c.update(d,this.isLive,this.H)}Ji(this.g);return!0}this.duration=Ai(W(a,"mediaPresentationDuration"));a:{for(a=0;a<b.length;a++){g=b[a];c=dj(this,g);e=zi(g,"BaseURL");d=Yi(e.textContent);f=zi(g,"SegmentBase");g=mi(f.attributes.indexRange.value);f=mi(f.getElementsByTagName("Initialization")[0].attributes.range.value);e=parseInt(e.getAttribute(fj(this,
"contentLength")),10);c=new Mi(d,c,f,g,e,NaN);if(!c){b=!1;break a}Vi(this,c)}b=!0}return b};
function Yi(a,b,c){b=void 0===b?"":b;c=void 0===c?"":c;a=new pi(a);a.set("alr","yes");c&&a.set(b,encodeURIComponent(oi(decodeURIComponent(c))));return a}
function dj(a,b){var c=W(b,"id");c=c.replace(":",";");var d=W(b,"mimeType"),e=W(b,"codecs");d=e?d+'; codecs="'+e+'"':d;e=parseInt(W(b,"bandwidth"),10)/8;zi(b,"BaseURL").getAttribute(fj(a,"contentLength"));var f=null;if(/(vp9|vp09|vp8|avc1|av01)/.test(d)){f=parseInt(W(b,"width"),10);var g=parseInt(W(b,"height"),10),h=parseInt(W(b,"frameRate"),10),k=gj(W(b,fj(a,"projectionType")));a:switch(W(b,fj(a,"stereoLayout"))){case "layout_left_right":var l=1;break a;case "layout_top_bottom":l=2;break a;default:l=
0}W(b,"video_level");f=new Ig(f,g,h,k,l,void 0,void 0,void 0)}g=null;Kg(d)&&(g=parseInt(W(b,"audioSamplingRate"),10),W(b.getElementsByTagName("AudioChannelConfiguration")[0],"value"),h=hj(W(b,fj(a,"spatialAudioType"))),g=new Cg(g,h),W(b,"lang"),h=zi(b,"Role"))&&(h=W(h,"value")||"",null!==ij&&h in ij&&W(b,fj(a,"langName")));k=null;if(h=zi(b,"ContentProtection"))if(T("cobalt"))if((k=h.attributes.schemeIdUri)&&"http://youtube.com/drm/2012/10/10"==k.value)for(k={},h=h.firstChild;null!=h;h=h.nextSibling)"yt:SystemURL"==
h.nodeName&&(k[h.attributes.type.value]=h.textContent.trim());else k=null;else if((k=h.attributes.schemeIdUri)&&"http://youtube.com/drm/2012/10/10"==k.textContent)for(k={},h=h.firstChild;null!=h;h=h.nextSibling)"SystemURL"==h.localName&&"http://youtube.com/yt/2012/10/10"==h.namespaceURI&&(k[h.attributes.type.textContent]=h.textContent.trim());else k=null;return new Jg(c,d,g,f,k,e)}
function gj(a){switch(a){case "equirectangular":return 2;case "equirectangular_threed_top_bottom":return 3;case "mesh":return 4;case "rectangular":return 1;default:return 0}}
function hj(a){switch(a){case "spatial_audio_type_ambisonics_5_1":return 1;case "spatial_audio_type_ambisonics_quad":return 2;case "spatial_audio_type_foa_with_non_diegetic":return 3;default:return 0}}
function jj(a,b){b=void 0===b?"":b;a.i=1;a.w=eh();return Ld(Ni(b||a.sourceUrl,{format:"RAW",method:"GET",withCredentials:a.da}).then(C(a.bb,a)),C(a.cb,a))}
n.bb=function(a){if(this.D)return this;a=a.responseText;a=(new DOMParser).parseFromString(a,"text/xml").getElementsByTagName("MPD")[0];this.h=1E3*Ai(W(a,"minimumUpdatePeriod"))||Infinity;if(!this.C){var b;a:{if(a.attributes)for(b=0;b<a.attributes.length;b++)if("http://youtube.com/yt/2012/10/10"==a.attributes[b].value){b=a.attributes[b].name.split(":")[1];break a}b=""}this.O=b}this.isLive=Infinity>this.h&&this.ca;this.H=parseInt(W(a,fj(this,"earliestMediaSequence")),10)||0;Date.parse(Bi(W(a,fj(this,
"mpdResponseTime"))))&&F();this.isLive&&0>=a.getElementsByTagName("SegmentTimeline").length||Pa(a.getElementsByTagName("Period"),this.qb,this);this.i=2;this.j("loaded");kj(this);return this};
n.cb=function(a){this.i=3;this.j("loaderror");return Jd(a.f)};
function ej(a,b,c){a.getAttribute("media");var d=null;c||(a=a.getAttribute("mediaRange"),null!=a&&0<=parseInt(a.split("-")[1],10)&&(d=mi(a)));return new fi(b.u,b.f,b.durationSecs,b.g,d)}
n.Pa=function(){if(1!=this.i&&!this.D){var a=$c(this.sourceUrl,{start_seq:lj(this).toString()});Ld(jj(this,a),function(){})}};
n.resume=function(){kj(this)};
function kj(a){var b=a.h;isFinite(b)&&(a.isLive&&eh()-a.w>=a.h?a.Pa():(b=Math.max(0,a.w+b-eh()),a.l||(a.l=new Wd(a.Pa,b,a),nd(a,Ia(od,a.l))),a.l.start(b)))}
function lj(a){a=a.f;for(var b in a){var c=a[b].index;if(c.Oa())return c.S()+1}return 0}
function fj(a,b){return a.C?"yt:"+b:a.O+":"+b}
var aj=null,bj=!1,ij={commentary:1,alternate:2,dub:3,main:4};function mj(a){a=void 0===a?{}:a;this.h=a.languageCode||"";this.j=a.languageName||null;this.i=a.kind||"";this.g=a.name||null;this.l=a.id||null;this.m=a.vss_id||"";this.isDefault=a.is_default||!1;this.f=a.translationLanguage||null}
n=mj.prototype;n.getId=function(){return this.l};
n.getName=function(){return this.g};
n.toString=function(){var a=this.h+": ",b=this.j||"",c=[b];"asr"==this.i&&-1==b.indexOf("(")&&c.push(" (Automatic Captions)");this.g&&c.push(" - "+this.g);this.f&&c.push(" >> "+this.f.languageName);return a+c.join("")+" - "+this.m};
n.equals=function(a){return a?this.toString()==a.toString():!1};
n.isValid=function(){return!(!this.h||this.f&&!this.f.languageCode)};function nj(){var a=new Fg;this.id="und";this.f=a;this.captionTracks=[]}
nj.prototype.getLanguageInfo=function(){return this.f};
nj.prototype.toString=function(){return this.f.name};
nj.prototype.getLanguageInfo=nj.prototype.getLanguageInfo;var oj={iurl:"default.jpg",iurlmq:"mqdefault.jpg",iurlhq:"hqdefault.jpg",iurlsd:"sddefault.jpg",iurlpop1:"pop1.jpg",iurlpop2:"pop2.jpg",iurlhq720:"hq720.jpg",iurlmaxres:"maxresdefault.jpg"},pj={120:"default.jpg",320:"mqdefault.jpg",480:"hqdefault.jpg",560:"pop1.jpg",640:"sddefault.jpg",854:"pop2.jpg",1280:"hq720.jpg"};function qj(a){var b={},c;for(c in oj){var d=a[oj[c]];d&&(b[c]=d)}return b}
function rj(a){var b={},c;for(c in oj){var d=c;d=a[d+"_webp"]||a[d];yh(d)&&(b[oj[c]]=d)}return b}
function sj(a){var b={};if(!a||!a.thumbnails)return b;a=a.thumbnails.filter(function(h){return!!h.url});
a.sort(function(h,k){return h.width-k.width||h.height-k.height});
for(var c in pj)for(var d=parseInt(c,10),e=pj[d],f=t(a),g=f.next();!g.done;g=f.next())if(g=g.value,g.width>=d){d=tj(g.url);yh(d)&&(b[e]=d);break}(c=a.pop())&&1280<=c.width&&(c=tj(c.url),yh(c)&&(b["maxresdefault.jpg"]=c));return b}
function tj(a){return a.startsWith("//")?"https:"+a:a}
;var uj=Math.pow(2,16)-1,vj=null,wj=0,xj={log_event:"events",log_interaction:"interactions"},yj=Object.create(null);yj.log_event="GENERIC_EVENT_LOGGING";yj.log_interaction="INTERACTION_LOGGING";var zj=new Set(["log_event"]),Aj={},Bj=0,Cj=0,Dj=A("ytLoggingTransportLogPayloadsQueue_")||{};z("ytLoggingTransportLogPayloadsQueue_",Dj,void 0);var Ej=A("ytLoggingTransportTokensToCttTargetIds_")||{};z("ytLoggingTransportTokensToCttTargetIds_",Ej,void 0);var Fj=A("ytLoggingTransportDispatchedStats_")||{};
z("ytLoggingTransportDispatchedStats_",Fj,void 0);z("ytytLoggingTransportCapturedTime_",A("ytLoggingTransportCapturedTime_")||{},void 0);function Gj(){window.clearTimeout(Bj);window.clearTimeout(Cj);Cj=0;if(!hb(Dj)){for(var a in Dj){var b=Aj[a];b&&(Hj(a,b),delete Dj[a])}hb(Dj)||Ij()}}
function Ij(){P("web_gel_timeout_cap")&&!Cj&&(Cj=Bf(Gj,6E4));window.clearTimeout(Bj);Bj=Bf(Gj,O("LOGGING_BATCH_TIMEOUT",hf("web_gel_debounce_ms",1E4)))}
function Jj(a,b){b=void 0===b?"":b;Dj[a]=Dj[a]||{};Dj[a][b]=Dj[a][b]||[];return Dj[a][b]}
function Hj(a,b){var c=xj[a],d=Fj[a]||{};Fj[a]=d;var e=Math.round(Th());for(l in Dj[a]){var f=kb,g=b.f;g={client:{hl:g.lb,gl:g.kb,clientName:g.ib,clientVersion:g.jb,configInfo:g.hb}};var h=window.devicePixelRatio;h&&1!=h&&(g.client.screenDensityFloat=String(h));O("DELEGATED_SESSION_ID")&&!P("pageid_as_header_web")&&(g.user={onBehalfOfUser:O("DELEGATED_SESSION_ID")});f=f({context:g});f[c]=Jj(a,l);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(g=Ej[l])a:{var k=
l;if(g.videoId)h="VIDEO";else if(g.playlistId)h="PLAYLIST";else break a;f.credentialTransferTokenTargetId=g;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:k,scope:h}]}delete Ej[l];f.requestTimeMs=e;if(g=gf("EVENT_ID"))h=(O("BATCH_CLIENT_COUNTER",void 0)||0)+1,h>uj&&(h=1),ff("BATCH_CLIENT_COUNTER",h),g={serializedEventId:g,clientCounter:h},f.serializedClientEventId=g,vj&&wj&&P("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:vj,
roundtripMs:wj}),vj=g,wj=0;Kj(b,a,f,{retry:zj.has(a),onSuccess:C(Lj,this,Th())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var l=d.diffCount||0;d.averageTimeBetweenDispatchesMs=l?(d.averageTimeBetweenDispatchesMs*l+c)/(l+1):c;d.diffCount=l+1}d.previousDispatchMs=e}
function Lj(a){wj=Math.round(Th()-a)}
;var Mj=A("ytLoggingGelSequenceIdObj_")||{};z("ytLoggingGelSequenceIdObj_",Mj,void 0);
function Nj(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||Th());e[a]=b;a=String;d.timestamp?b=-1:(b=A("_lact",window),b=null==b?-1:Math.max(F()-b,0));e.context={lastActivityMs:a(b)};P("log_sequence_info_on_gel_web")&&d.Ta&&(a=e.context,b=d.Ta,Mj[b]=b in Mj?Mj[b]+1:0,a.sequence={index:Mj[b],groupKey:b},d.lc&&delete Mj[d.Ta]);(d=d.jc)?(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Ej[d.token]=a,d=Jj("log_event",d.token)):d=Jj("log_event");d.push(e);
c&&(Aj.log_event=new c);d.length>=(hf("web_logging_max_batch")||100)?Gj():Ij()}
;function Oj(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||O("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.hc||O("AUTHORIZATION"))||(a?b="Bearer "+A("gapi.auth.getToken")().gc:b=md([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=O("SESSION_INDEX",0),P("pageid_as_header_web")&&(d["X-Goog-PageId"]=O("DELEGATED_SESSION_ID")));return d}
function Pj(a){a=Object.assign({},a);delete a.Authorization;var b=md();if(b){var c=new Yd;c.update(O("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Aa(b);void 0===c&&(c=0);Bc();c=xc[c];for(var d=[],e=0;e<b.length;e+=3){var f=b[e],g=e+1<b.length,h=g?b[e+1]:0,k=e+2<b.length,l=k?b[e+2]:0,m=f>>2;f=(f&3)<<4|h>>4;h=(h&15)<<2|l>>6;l&=63;k||(l=64,g||(h=64));d.push(c[m],c[f],c[h]||"",c[l]||"")}a.hash=d.join("")}return a}
;function Qj(){var a=new Ae;(a=a.isAvailable()?new He(a,"yt.innertube"):null)||(a=new Ce("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new ve(a):null;this.g=document.domain||window.location.hostname}
Qj.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,F()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(ie(b))}catch(f){return}else e=escape(b);b=this.g;Ec.set(""+a,e,c,"/",void 0===b?"youtube.com":b,!1)};
Qj.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=Ec.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Qj.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;Ec.remove(""+a,"/",void 0===b?"youtube.com":b)};var Rj=new Qj;function Sj(a,b,c,d){if(d)return null;d=Rj.get("nextId",!0)||1;var e=Rj.get("requests",!0)||{};e[d]={method:a,request:b,authState:Pj(c),requestTime:Math.round(Th())};Rj.set("nextId",d+1,86400,!0);Rj.set("requests",e,86400,!0);return d}
function Tj(a){var b=Rj.get("requests",!0)||{};delete b[a];Rj.set("requests",b,86400,!0)}
function Uj(a){var b=Rj.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Th())-d.requestTime)){var e=d.authState,f=Pj(Oj(!1));ib(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Th())),Kj(a,d.method,e,{}));delete b[c]}}Rj.set("requests",b,86400,!0)}}
;function Vj(a){var b=this;this.f=a||{fb:gf("INNERTUBE_API_KEY"),gb:gf("INNERTUBE_API_VERSION"),hb:O("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ib:O("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),jb:gf("INNERTUBE_CONTEXT_CLIENT_VERSION"),lb:gf("INNERTUBE_CONTEXT_HL"),kb:gf("INNERTUBE_CONTEXT_GL"),mb:gf("INNERTUBE_HOST_OVERRIDE")||"",nb:!!O("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};Jh(function(){Uj(b)},0,5E3)}
function Kj(a,b,c,d){!O("VISITOR_DATA")&&.01>Math.random()&&lf(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",N:c,Sa:"JSON",ga:function(){d.ga()},
Ra:d.ga,onSuccess:function(r,q){if(d.onSuccess)d.onSuccess(q)},
Qa:function(r){if(d.onSuccess)d.onSuccess(r)},
onError:function(r,q){if(d.onError)d.onError(q)},
oc:function(r){if(d.onError)d.onError(r)},
timeout:d.timeout,withCredentials:!0},f="",g=a.f.mb;g&&(f=g);g=a.f.nb||!1;var h=Oj(g,f,d);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var k=rf(""+f+("/youtubei/"+a.f.gb+"/"+b),{alt:"json",key:a.f.fb}),l;if(d.retry&&P("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(l=Sj(b,c,h,g))){var m=e.onSuccess,p=e.Qa;e.onSuccess=function(r,q){Tj(l);m(r,q)};
c.Qa=function(r,q){Tj(l);p(r,q)}}try{P("use_fetch_for_op_xhr")?If(k,e):(e.method="POST",e.N||(e.N={}),Lf(k,e))}catch(r){if("InvalidAccessError"==r)l&&(Tj(l),l=0),lf(Error("An extension is blocking network request."),"WARNING");
else throw r;}l&&Jh(function(){Uj(a)},0,5E3)}
;function Wj(a,b,c){c=void 0===c?{}:c;var d=Vj;O("ytLoggingEventsDefaultDisabled",!1)&&Vj==Vj&&(d=null);Nj(a,b,d,c)}
;var Xj=A("ytLoggingLatencyUsageStats_")||{};z("ytLoggingLatencyUsageStats_",Xj,void 0);var Yj=0;function Zj(a){Xj[a]=Xj[a]||{count:0};var b=Xj[a];b.count++;b.time=Th();Yj||(Yj=Jh(ak,0,5E3));if(5<b.count){if(6==b.count&&1>1E5*Math.random()){b=0==a.indexOf("info")?"WARNING":"ERROR";var c=Error("CSI data exceeded logging limit with key");c.params=a;Tf(c,b)}return!0}return!1}
function ak(){var a=Th(),b;for(b in Xj)6E4<a-Xj[b].time&&delete Xj[b];Yj=0}
;var bk=A("ytLoggingTimeDocumentNonce_")||Rh();z("ytLoggingTimeDocumentNonce_",bk,void 0);function ck(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function dk(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
z("yt_logging_screen.getRootVeType",function(a){return O(dk(void 0===a?0:a),void 0)},void 0);
z("yt_logging_screen.getCurrentCsn",function(a){a=void 0===a?0:a;var b=O(ck(a));b||0!=a||(P("kevlar_client_side_screens")?b="UNDEFINED_CSN":b=O("EVENT_ID"));return b?b:null},void 0);
z("yt_logging_screen.setCurrentScreen",function(a,b,c){c=void 0===c?0:c;if(a!==O(ck(c))||b!==O(dk(c)))ff(ck(c),a),ff(dk(c),b),0==c&&(b=function(){setTimeout(function(){a&&Nj("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:bk,clientScreenNonce:a},Vj)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())},void 0);var ek={},fk=0;
function gk(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&!T("cobalt")?a&&(b=Ib(Kb(a)).toString(),"about:invalid#zClosurez"===b?a="":(b instanceof Qb?a=b:(c="object"==typeof b,a=null,c&&b.ma&&(a=b.ka()),b=wb(c&&b.U?b.T():String(b)),a=Tb(b,a)),a=Sb(a).toString(),a=encodeURIComponent(String(ie(a)))),/^[\s\xa0]*$/.test(a)||(a=Nc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?Mf(a,b,"POST",e,d):O("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||d?Mf(a,b,"GET","",d):hk(a,b)||ik(a,b))}
function hk(a,b){var c=ef.EXPERIMENT_FLAGS;if(!c||!c.web_use_beacon_api_for_ad_click_server_pings)return!1;c=Wc(L(5,a));return c&&-1!=c.indexOf("/aclk")&&"1"===bd(a,"ae")&&"1"===bd(a,"act")?jk(a)?(b&&b(),!0):!1:!1}
function jk(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function ik(a,b){var c=new Image,d=""+fk++;ek[d]=c;c.onload=c.onerror=function(){b&&ek[d]&&b();delete ek[d]};
c.src=a}
;function kk(a,b){this.version=a;this.args=b}
;function lk(a){this.topic=a}
lk.prototype.toString=function(){return this.topic};var mk=A("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.fa;N.prototype.publish=N.prototype.la;N.prototype.clear=N.prototype.clear;z("ytPubsub2Pubsub2Instance",mk,void 0);z("ytPubsub2Pubsub2SubscribedKeys",A("ytPubsub2Pubsub2SubscribedKeys")||{},void 0);z("ytPubsub2Pubsub2TopicToKeys",A("ytPubsub2Pubsub2TopicToKeys")||{},void 0);z("ytPubsub2Pubsub2IsAsync",A("ytPubsub2Pubsub2IsAsync")||{},void 0);
z("ytPubsub2Pubsub2SkipSubKey",null,void 0);function nk(a,b){var c=A("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;var ok=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function pk(){var a=O("TIMING_TICK_EXPIRATION");a||(a={},ff("TIMING_TICK_EXPIRATION",a));return a}
function qk(){var a=pk(),b;for(b in a)Lh(a[b]);ff("TIMING_TICK_EXPIRATION",{})}
;function rk(a,b){kk.call(this,1,arguments)}
u(rk,kk);function sk(a,b){kk.call(this,1,arguments)}
u(sk,kk);var tk=new lk("aft-recorded"),uk=new lk("timing-sent");function vk(a){var b;(b=A("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},z("ytcsi."+(a||"")+"data_",b,void 0));return b}
function wk(a){var b=vk(a).nonce;b||(b=Rh(),vk(a).nonce=b);return b}
;var X={},xk=(X.ad_allowed="adTypesAllowed",X.yt_abt="adBreakType",X.ad_cpn="adClientPlaybackNonce",X.ad_docid="adVideoId",X.yt_ad_an="adNetworks",X.ad_at="adType",X.browse_id="browseId",X.p="httpProtocol",X.t="transportProtocol",X.cpn="clientPlaybackNonce",X.cseg="creatorInfo.creatorSegment",X.csn="clientScreenNonce",X.docid="videoId",X.GetHome_rid="getHomeRequestId",X.is_continuation="isContinuation",X.is_nav="isNavigation",X.b_p="kabukiInfo.browseParams",X.is_prefetch="kabukiInfo.isPrefetch",X.is_secondary_nav=
"kabukiInfo.isSecondaryNav",X.prev_browse_id="kabukiInfo.prevBrowseId",X.query_source="kabukiInfo.querySource",X.voz_type="kabukiInfo.vozType",X.yt_lt="loadType",X.mver="creatorInfo.measurementVersion",X.yt_ad="isMonetized",X.nr="webInfo.navigationReason",X.ncnp="webInfo.nonPreloadedNodeCount",X.prt="playbackRequiresTap",X.pis="playerInfo.playerInitializedState",X.paused="playerInfo.isPausedOnLoad",X.yt_pt="playerType",X.fmt="playerInfo.itag",X.yt_pl="watchInfo.isPlaylist",X.yt_pre="playerInfo.preloadType",
X.yt_ad_pr="prerollAllowed",X.pa="previousAction",X.yt_red="isRedSubscriber",X.st="serverTimeMs",X.aq="tvInfo.appQuality",X.br_trs="tvInfo.bedrockTriggerState",X.label="tvInfo.label",X.is_mdx="tvInfo.isMdx",X.preloaded="tvInfo.isPreloaded",X.query="unpluggedInfo.query",X.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",X.yt_vst="videoStreamType",X.vph="viewportHeight",X.vpw="viewportWidth",X.yt_vis="isVisible",X),yk="isContinuation isNavigation kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
zk={},Ak=(zk.mver="MEASUREMENT_VERSION_",zk.pis="PLAYER_INITIALIZED_STATE_",zk.yt_pt="LATENCY_PLAYER_",zk.pa="LATENCY_ACTION_",zk.yt_vst="VIDEO_STREAM_TYPE_",zk),Bk="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" ");
function Ck(a){return!!P("csi_on_gel")||!!vk(a).useGel}
function Dk(a){a=vk(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;function Ek(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!Fk(a)||c.some(function(e){return!Fk(e)}))throw Error("Only objects may be merged.");
c=t(c);for(d=c.next();!d.done;d=c.next())Hk(a,d.value)}
function Hk(a,b){for(var c in b)if(Fk(b[c])){if(c in a&&!Fk(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Hk(a[c],b[c])}else if(Ik(b[c])){if(c in a&&!Ik(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Jk(a[c],b[c])}else a[c]=b[c];return a}
function Jk(a,b){for(var c=t(b),d=c.next();!d.done;d=c.next())d=d.value,Fk(d)?a.push(Hk({},d)):Ik(d)?a.push(Jk([],d)):a.push(d);return a}
function Fk(a){return"object"===typeof a&&!Array.isArray(a)}
function Ik(a){return"object"===typeof a&&Array.isArray(a)}
;var Kk={vc:!0},Lk=!1;
function Mk(a,b,c){var d=Nk(c);if(!P("use_first_tick")||!Ok(a,c)){if(!b&&"_"!=a[0]){var e=a;ok.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),ok.mark(e))}e=b||eh();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;d=pk();if(e=d[a])Lh(e),d[a]=0;d=Dk(c);d.gelTicks&&(d.gelTicks["tick_"+a]=!0);c||b||eh();Ck(c)?(d=wk(c),"_start"===a?Zj("baseline_"+d)||Wj("latencyActionBaselined",{clientActionNonce:d},{timestamp:b}):Zj("tick_"+a+"_"+d)||Wj("latencyActionTicked",{tickName:a,
clientActionNonce:d},{timestamp:b}),a=!0):a=!1;if(!a&&!A("yt.timing."+(c||"")+"pingSent_")&&(b=gf((c||"")+"TIMING_ACTION"),a=Nk(c),A("ytglobal.timing"+(c||"")+"ready_")&&b&&a._start&&(b=Pk(c))))if(Lk||(nk(tk,new rk(Math.round(b-a._start),c)),Lk=!0),c)Qk(c);else{b=!0;d=O("TIMING_WAIT",[]);if(d.length){e=0;for(var f=d.length;e<f;++e)if(!(d[e]in a)){b=!1;break}}b&&Qk(c)}}}
function Ok(a,b){var c=Nk(b);return a in c}
function Rk(a){Ok("_start","video_to_ad")&&!Ok(a,"video_to_ad")&&Mk(a,void 0,"video_to_ad")}
function Sk(a){vk(a).info.yt_lt="hot_bg";if(Ck(a)){var b="hot_bg";var c=Dk(a);(c.gelInfos?c.gelInfos:c).info_yt_lt=!0;if("yt_lt"in xk){var d=xk.yt_lt;Sa(yk,d)&&(b=!!b);"yt_lt"in Ak&&(b=Ak.yt_lt+b.toUpperCase());c={};d=d.split(".");for(var e=c,f=0;f<d.length-1;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];e[d[d.length-1]]=b;b=c}else Sa(Bk,"yt_lt")||(b=Error("Unknown label logged with GEL CSI"),b.params="yt_lt",mf(b)),b=void 0;b&&Ck(a)&&(c=Dk(a),"gelInfos"in c||(c.gelInfos={}),Ek(c.gelInfos,b),a=wk(a),c=Object.keys(b).join(""),
Zj("info_"+c+"_"+a)||(b.clientActionNonce=a,Wj("latencyActionInfo",b)))}}
function Pk(a){var b=Nk(a);if(b.aft)return b.aft;a=O((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
C(ok.clearResourceTimings||ok.webkitClearResourceTimings||ok.mozClearResourceTimings||ok.msClearResourceTimings||ok.oClearResourceTimings||wa,ok);function Nk(a){return vk(a).tick}
function Tk(a){var b=Nk(a),c=b.pbr,d=b.vc;b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==vk(a).info.yt_pvis}
function Qk(a){qk();if(!Ck(a)){var b=Nk(a),c=vk(a).info,d=b._start;for(g in b)if(0==g.lastIndexOf("_",0)&&za(b[g])){var e=g.slice(1);if(e in Kk){var f=Ma(b[g],function(m){return Math.round(m-d)});
c["all_"+e]=f.join()}delete b[g]}f=O("CSI_SERVICE_NAME","youtube");var g={v:2,s:f,action:O((a||"")+"TIMING_ACTION",void 0)};e=Sk.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var h=window.location.protocol+A("ytplayer.config.assets.js");(h=ok.getEntriesByName?ok.getEntriesByName(h)[0]:null)?c.h5jse=Math.round(c.h5jse-h.responseEnd):delete c.h5jse}b.aft=Pk(a);Tk(a)&&"youtube"==f&&(Sk(a),f=b.vc,h=b.pbs,delete b.aft,c.aft=Math.round(h-f));for(var k in c)"_"!=k.charAt(0)&&(g[k]=c[k]);b.ps=eh();k={};f=
[];for(var l in b)"_"!=l.charAt(0)&&(h=Math.round(b[l]-d),k[l]=h,f.push(l+"."+h));g.rt=f.join(",");(b=A("ytdebug.logTiming"))&&b(g,k);Uk(g,!!c.ap,a);nk(uk,new sk(k.aft+(e||0),a))}}
function Uk(a,b,c){if(P("debug_csi_data")){var d=A("yt.timing.csiData");d||(d=[],z("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;jk(a,f)||gk(a,void 0,void 0,void 0,f)}else gk(a);z("yt.timing."+(c||"")+"pingSent_",!0,void 0)}
;var Vk;var Wk=J,Xk=Wk.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!Xk||2>Xk.length)Vk=void 0;else{var Yk=Wk.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);Vk=Yk&&6==Yk.length?Number(Yk[5].replace("_",".")):0}var Zk=Vk;0<=Zk&&0<=J.search("Safari")&&J.search("Version");function Z(a){if(a.simpleText)return a.simpleText;if(a.runs){var b=[];a=t(a.runs);for(var c=a.next();!c.done;c=a.next())c=c.value,c.text&&b.push(c.text);return b.join("")}return""}
;function $k(a,b){Rg.call(this);this.H=a;this.adModule=!1;this.adaptiveFormats="";this.ta=null;this.drmParams="";this.allowEmbed=!0;this.allowLiveDvr=this.backgroundable=!1;this.m="";this.w=this.C=!1;this.author="";this.wa=!1;this.clientScreenNonce=this.clientPlaybackNonce=this.videoCountText=this.channelBanner=this.sa="";this.contentCheckOk=!1;this.endSeconds=0;this.isLowLatencyLiveStream=this.isLivingRoomDeeplink=this.isLiveDefaultBroadcast=this.Ba=this.l=this.isListed=this.pipable=this.aa=!1;this.latencyClass=
"UNKNOWN";this.isMdxPlayback=this.isPremiere=!1;this.mdxControlMode=null;this.isPharma=!1;this.reloadReason="";this.keywords={};this.liveChunkReadahead=NaN;this.lengthSeconds=0;this.playerParams=this.musicVideoType=null;this.paygated=!1;this.g=[];this.racyCheckOk=!1;this.autonavState=1;this.startSeconds=0;this.ca=this.suggestions=null;this.hlsFormats=this.da=this.expandedSubtitle=this.subtitle=this.title="";this.Ca=this.Ia=null;this.i={};this.clipStart=0;this.clipEnd=Infinity;this.heartbeatToken=
"";this.K=this.ya=0;this.captionTracks=[];this.chapterMarkers=[];this.va=new nj;this.R=0;this.slotPosition=-1;this.breakType=0;this.Ga=new Wd(this.sb,5E3,this);nd(this,Ia(od,this.Ga));this.za=0;this.L=this.f=this.xa=this.o=null;this.defraggedFromSubfragments=this.hasSubfragmentedFmp4=!1;this.liveExperimentalContentId=NaN;this.interstitials=[];this.isVisualizerEligible=this.Aa=!1;this.Ea=this.ba=this.O=this.readAheadGrowthRateMs=this.minReadAheadMediaTimeMs=this.maxReadAheadMediaTimeMs=NaN;this.showShareButton=
!0;this.J=!1;this.errorDetail="";this.errorReason=this.errorCode=null;this.Za=!al(this,"web_player_response_player_ads_killswitch");this.Da=al(this,"web_player_watch_next_response_parsing");al(this,"web_player_ux_module_wait")&&this.H.O&&this.g.push("ux");this.Fa={};bl(this,b)}
u($k,Rg);
function cl(a,b){b=b||{};if(a.Da){var c=b.raw_watch_next_response;if(!c){var d=b.watch_next_response;d&&(c=JSON.parse(d))}c&&(a.L=c);if(a.L){c=a.L.contents;var e;if(c){if((e=c.singleColumnWatchNextResults)&&e.autoplay&&e.autoplay.autoplay&&!e.playlist){var f=e.autoplay.autoplay.sets;e={};d={};var g=null;if(f){for(var h=t(f),k=h.next();!k.done;k=h.next())if((k=k.value.autoplayVideoRenderer)&&k.compactVideoRenderer){g=k.compactVideoRenderer;break}(f=f[0].autoplayVideo)&&(f=f.clickTrackingParams)&&(e.itct=
f)}else e.feature="related-auto";if(g){d.autonav="1";d.video_id=g.videoId;if(f=g.shortBylineText)d.author=Z(f);if(g=g.title)d.title=Z(g)}d.endscreen_autoplay_session_data=Zc(e);a.suggestions=[d]}e=c.twoColumnWatchNextResults}c=a.L.playerOverlays;if(c&&(c=c.playerOverlayRenderer)){if(d=c.endScreen)if(d=d.watchNextEndScreenRenderer)var l=d.results;if(d=c.videoDetails)var m=d.embeddedPlayerOverlayVideoDetailsRenderer;if(d=c.actions)for(d=t(d),g=d.next();!g.done;g=d.next())g=g.value,g.likeButtonRenderer&&
(a.likeButtonRenderer=g.likeButtonRenderer);a.showShareButton=!!c.shareButton}!l&&e&&(c=e.endScreen&&e.endScreen.endScreen)&&(l=c.results);if(m){c=b;if(d=m.channelThumbnail)if(d=d.thumbnails)if(d=d[0])c.profile_picture=d.url;if(d=m.channelThumbnailEndpoint&&m.channelThumbnailEndpoint.channelThumbnailEndpoint)if(d=d.urlEndpoint&&d.urlEndpoint.urlEndpoint)c.channel_path=d.url;if(d=m.collapsedRenderer)if(d=d.embeddedPlayerOverlayVideoDetailsCollapsedRenderer){if(g=d.title)c.title=Z(g);if(d=d.subtitle)c.subtitle=
Z(d)}if(m=m.expandedRenderer)if(m=m.embeddedPlayerOverlayVideoDetailsExpandedRenderer){if(d=m.title)c.expanded_title=Z(d);if(d=m.subtitle)c.expanded_subtitle=Z(d);if(m=m.subscribeButton)if(m=m.subscribeButtonRenderer)c.ucid=m.channelId,c.subscribed=m.subscribed}}if(l){e=e||null;m=oh(0,b.autoplay_count);c=[];g=!0;l=t(l);for(d=l.next();!d.done;d=l.next()){h=d.value;f=void 0;d=null;if(h.endScreenVideoRenderer){h=h.endScreenVideoRenderer;k=h.title;d={id:h.videoId,length_seconds:h.lengthInSeconds};var p=
h.shortBylineText;p&&(d.author=Z(p));if(p=h.shortViewCountText)d.short_view_count_text=Z(p);k&&(d.title=Z(k),(k=k.accessibility)&&(k=k.accessibilityData)&&k.label&&(d.aria_label=k.label));if(k=h.navigationEndpoint)f=k.clickTrackingParams;if(k=h.thumbnailOverlays)for(k=t(k),p=k.next();!p.done;p=k.next())if((p=p.value.thumbnailOverlayTimeStatusRenderer)&&"LIVE"==p.style){d.live_playback="1";break}h=sj(h.thumbnail);Object.assign(d,qj(h))}else if(h.endScreenPlaylistRenderer){h=h.endScreenPlaylistRenderer;
f=h.navigationEndpoint;if(!f)continue;d=f.watchEndpoint;if(!d)continue;d=d.videoId;d={list:h.playlistId,video_id:d,playlist_length:h.videoCount,thumbnail_ids:d};if(k=h.title)d.playlist_title=Z(k);if(k=h.shortBylineText)d.playlist_author=Z(k);f=f.clickTrackingParams;h=sj(h.thumbnail);Object.assign(d,qj(h))}d&&(d.session_data=Zc({itct:f}),g?(g={autonav:1,playnext:m},d.list&&(g.autoplay="1"),e&&(f=e.autoplay)&&(f=f.autoplay)&&(f=f.sets)&&(f=f[0])&&(f=f.autoplayVideo)&&(f=f.clickTrackingParams)&&(g.itct=
f),g.itct||(g.feature="related-auto"),d.endscreen_autoplay_session_data=Zc(g),c.splice(0,0,d),g=!1):c.push(d))}a.suggestions=c}}}if(l=b.iv_invideo_url)a.m=Bh(l);a.isPharma=U(a.isPharma,b.is_pharma);a.author=V(a.author,b.author);a.sa=dl(b.ttsurl)||a.sa;a.channelBanner=V(a.channelBanner,b.channel_banner);a.videoCountText=V(a.videoCountText,b.video_count_text);a.autonavState=nh(a.autonavState,b.autonav_state,fh);a.clientPlaybackNonce=V(a.clientPlaybackNonce,b.cpn);a.subscribed=U(a.subscribed,b.subscribed);
a.shortViewCount=V(a.shortViewCount,b.short_view_count_text);a.title=V(a.title,b.title);a.subtitle=V(a.subtitle,b.subtitle);a.expandedSubtitle=V(a.expandedSubtitle,b.expanded_subtitle);a.ypcPreview=V(a.ypcPreview,b.ypc_preview);a.paygated=U(a.paygated,b.paygated);a.showShareButton=!U(!a.showShareButton,b.ss);if(l=b.keywords)a.keywords=el(l.split(","));if(l=b.rvs)!a.Da||b.raw_watch_next_response||b.watch_next_response||mf(Error('"rvs" unexpected')),a.suggestions=pf(l);a.contentCheckOk=U(a.contentCheckOk,
"1"==b.cco);a.racyCheckOk=U(a.racyCheckOk,"1"==b.rco);a.isLivingRoomDeeplink=U(a.isLivingRoomDeeplink,b.is_living_room_deeplink);a.oauthToken=V(a.oauthToken,b.oauth_token);a.visitorData=V(a.visitorData,b.visitor_data);(l=b.session_data)&&nf(l);(l=b.endscreen_autoplay_session_data)&&nf(l)}
function bl(a,b){b=b||{};var c=b.status;null!=c&&(a.J="fail"==c);c=b.errordetail;null!=c&&(a.errorDetail=c);c=b.errorcode;null!=c&&(a.errorCode=c);c=b.reason;null!=c&&(a.errorReason=c);a.clientPlaybackNonce||(a.clientPlaybackNonce=b.cpn||Rh());c=b.raw_embedded_player_response;if(!c){var d=b.embedded_player_response;d&&(c=JSON.parse(d))}c&&(a.o=c);a.o&&((c=a.o.embedPreview)&&fl(a,c),a.o.playabilityStatus&&(a.xa=a.o.playabilityStatus,gl(a)&&(a.errorDetail="0")));c=b.raw_player_response;c||(d=b.player_response)&&
(c=JSON.parse(d));c&&(a.f=c);if(a.f){(c=a.f.annotations)&&hl(a,c);if(c=a.f.attestation)a.botguardData=c.playerAttestationRenderer.botguardData;(c=a.f.heartbeatParams)&&il(a,c);(c=a.f.multicamera)&&jl(c);if(c=a.f.playabilityStatus)kl(a,c),(d=c.errorScreen)&&ll(a,d);(d=a.f.playbackTracking)&&ml(a,d,b);(d=a.f.playerAds)&&nl(a,d,b);(d=a.f.playerConfig)&&ol(a,d);var e=a.f.streamingData;e&&pl(a,e,d||null);if(e=a.f.videoDetails)ql(a,e,b),rl(a,e,d||null,b);c&&sl(a,c,e||null);if(c=a.f.interstitialPods)for(c=
t(c),d=c.next();!d.done;d=c.next())switch(e=d.value,d=e.interstitials.map(function(f){return(f=f.playerVars)&&Object.assign({is_yto_interstitial:!0},Q(f))})[0],e.podConfig.playbackPlacement){case "INTERSTITIAL_PLAYBACK_PLACEMENT_PRE":a.interstitials=a.interstitials.concat({time:0,
playerVars:d,Ua:5});break;case "INTERSTITIAL_PLAYBACK_PLACEMENT_POST":a.interstitials=a.interstitials.concat({time:0x7ffffffffffff,playerVars:d,Ua:6});break;case "INTERSTITIAL_PLAYBACK_PLACEMENT_INSERT_AT_VIDEO_TIME":e=parseInt(e.podConfig.timeToInsertAtMillis,10),a.interstitials=a.interstitials.concat({time:e,playerVars:d,Ua:0==e?5:7})}a.m&&a.eventId&&(a.m=tf(a.m,{ei:a.eventId}));(c=a.f.captions)&&c.playerCaptionsTracklistRenderer&&tl(a,c.playerCaptionsTracklistRenderer);a.f.chapterMarkers&&(a.chapterMarkers=
a.f.chapterMarkers)}c=b.hlsdvr;null!=c&&(a.allowLiveDvr="1"==c?ch()?!0:tc&&5>Zk?!1:!0:!1);a.adQueryId=b.ad_query_id||null;a.adSafetyReason||(a.adSafetyReason=b.encoded_ad_safety_reason||null);a.authKey=b.authkey;a.endSeconds=oh(a.endSeconds,a.ba||b.end||b.endSeconds);a.l=U(a.l,b.live_playback);a.isMdxPlayback=U(a.isMdxPlayback,b.mdx);if(c=b.mdx_control_mode)a.mdxControlMode="number"==typeof c?c:Zb(c);a.reloadReason=V(a.reloadReason,b.reload_reason);a.cycToken=b.cyc||null;c=rj(b);Object.keys(c);a.mdxEnvironment=
V(a.mdxEnvironment,b.mdx_environment);a.eventId||(a.eventId=b.eventid);a.osid||(a.osid=b.osid);a.playlistId=V(a.playlistId,b.list);if(c=b.remarketing_url)a.remarketingUrl=c;if(c=b.ppv_remarketing_url)a.ppvRemarketingUrl=c;c=b.session_data;!a.ab&&c&&(a.ab=nf(c).feature);a.vnd=oh(a.vnd,b.vnd);a.slotPosition=oh(a.slotPosition,b.slot_pos);a.breakType=b.break_type;a.videoId=b.docid||b.video_id||b.videoId||b.id||a.videoId;ul(a.f)&&(a.adModule=!0,a.g.push("ad"));if(c=b.adaptive_fmts)a.adaptiveFormats=c;
if(c=b.allow_embed)a.allowEmbed="1"==c;if(c=b.backgroundable)a.backgroundable="1"==c;"0"==b.dash&&(a.wa=!0);if(c=b.dashmpd)a.ua=$c(c,{cpn:a.clientPlaybackNonce});c=a.ba||b.end;void 0!=c&&(a.clipEnd=oh(a.clipEnd,c));b.fresca_preroll&&a.g.push("fresca");b.heartbeat_preroll&&a.g.push("heartbeat");if(c=b.is_listed)a.isListed=U(a.isListed,c);if(c=b.pipable)a.pipable=U(a.pipable,c);if(c=b.url_encoded_fmt_stream_map)a.da=c;if(c=b.hls_formats)a.hlsFormats=c;if(c=b.hlsvp)a.hlsvp=c;if(c=b.length_seconds)a.lengthSeconds=
y(c)?Zb(c):c;if(c=b.player_params)a.playerParams=c;if(c=b.probe_url)a.probeUrl=Bh($c(c,{cpn:a.clientPlaybackNonce}));(c=b.pyv_billable_url)&&zh(c);(c=b.pyv_conv_url)&&zh(c);0<a.startSeconds||(a.startSeconds=oh(a.startSeconds,a.Ea||a.O||b.start||b.startSeconds));c=b.live_utc_start;null!=c&&(a.liveUtcStartSeconds=parseInt(c,10));if(c=b.utc_start_millis)a.liveUtcStartSeconds=.001*parseInt(c,10);c=a.O||b.start;void 0==c||"1"==b.resume||a.l||(a.clipStart=oh(a.clipStart,c));if(c=b.url_encoded_third_party_media)a.ca=
pf(c);(c=b.ypc_offer_button_formatted_text)&&JSON.parse(c);(c=b.ypc_trailer_player_vars)&&Q(c);I("baseUrl uid oeid ieid ppe engaged subscribed".split(" "),function(f){b[f]&&(this.i[f]=b[f])},a);
a.i.focEnabled=U(a.i.focEnabled,b.focEnabled);a.i.rmktEnabled=U(a.i.rmktEnabled,b.rmktEnabled);a.Ia=b.storyboard_spec||null;a.Ca=b.live_storyboard_spec||null;a.C=U(a.C,b.ypc_module);a.w=U(a.w,b.ypc_clickwrap_module);a.C&&a.g.push("ypc");a.w&&a.g.push("ypc_clickwrap");a.Fa=b;cl(a,b);vl(a)?Ng()&&wl(a):xl(a);(c=b.adpings)&&c&&Q(c);if(c=b.referrer)a.referrer=c;a.clientScreenNonce=V(a.clientScreenNonce,b.csn);void 0!=b.kids_app_info&&(a.kidsAppInfo=b.kids_app_info);void 0!=b.home_group_info&&(a.homeGroupInfo=
b.home_group_info);a.Aa=!!b.is_yto_interstitial;(a.interstitials.length||a.Aa)&&a.g.push("yto")}
function al(a,b){return R(a.H.experiments,b)}
function ul(a){if(!a||!a.adPlacements)return!1;a=t(a.adPlacements);for(var b=a.next();!b.done;b=a.next())if(b=b.value.adPlacementRenderer,null!=b&&"AD_PLACEMENT_KIND_START"==(b.config&&b.config.adPlacementConfig&&b.config.adPlacementConfig.kind))return!0;return!1}
function xl(a){var b;if(b=al(a,"mweb_hoffline")&&a.adaptiveFormats){b=a.videoId;var c;if(c=!!b)c=window.localStorage&&window.localStorage["yt-player-lv"],c=(c?c.split(","):[]).includes(b);b=c}if(!b){if(c=b=a.adaptiveFormats)c=!(Ng()&&!wl(a)||!a.adaptiveFormats);if(c){b=pf(b);c={};for(var d=t(b),e=d.next();!e.done;e=d.next()){e=e.value;var f=c[e.itag];f&&(e.width=f.width,e.height=f.height)}c=a.ta;d=a.lengthSeconds;e=a.l;f=a.Ba;var g=a.H.experiments,h=cj(b);c=e||f?$i(b,f,c,g):3==h?Zi(b,c,d,g):Wi(b,
c,d,g);0<b.length&&(b=b[0],b.url&&b.sp&&b.s&&Yi(b.url,b.sp,b.s).get("max_sq"));c.o&&!al(a,"html5_manifestless_vp9")&&yl(c)?c.dispose():(a.h=c,nd(a,Ia(od,c)),(a.h&&Si(a.h)||a.h&&Ri(a.h)||a.h&&Ui(a.h)||a.h&&Ti(a.h))&&a.g.push("webgl"),a.h.isLive||(a.l=!1),c.m&&c.subscribe("cuepointsadded",a.Va,a),Qi(c))}}}
function wl(a){var b;(b=al(a,"html5_enable_tvos_dash"))||(b=al(a,"html5_enable_tvos_dash_dogfood")?!0:(a.Fa.fflags||"").includes("html5_enable_tvos_dash_dogfood=true"));return b&&MediaSource.isTypeSupported('audio/webm; codecs="opus"')}
function yl(a){return a.o&&Pg()&&cb(a.f,function(b){b=b.info;return"9"==b.f||"("==b.f||"9h"==b.f||"(h"==b.f})}
function vl(a){return Ng()&&wl(a)?!1:!ch()||a.wa?!0:!1}
n=$k.prototype;n.Va=function(){var a=this.h;var b=this.R;a=a.g?Wa(a.g.i,b):a.K.length?Wa(a.K,b):[];0<a.length&&(this.j("cuepointupdated",a),this.R+=a.length)};
n.getStoryboardFormat=function(){if(this.f&&this.f.storyboards){var a=this.f.storyboards;return(a=a.playerStoryboardSpecRenderer||a.playerLiveStoryboardSpecRenderer)&&a.spec||null}return this.Ia||this.Ca};
n.getPlaylistSequenceForTime=function(a){if(this.h&&this.Ya){var b=this.h.f[this.Ya.id];if(!b)return null;var c=b.index.La(a);b=b.index.Ma(c);return{sequence:c,kc:Math.floor(1E3*(a-b))}}return null};
n.isValid=function(){return!this.D&&!(!this.videoId&&!this.ca)};
n.sb=function(){var a={format:"RAW",method:"GET",withCredentials:!1},b={},c=Bg(this.H.experiments,"debug_dapper_trace_id");c&&(b["X-Google-DapperTraceInfo"]=c);0<Object.keys(b).length&&(a.headers=b);0<this.za&&(a.timeout=this.za);b="";0<this.K&&(b=tf(b,{playerretry:this.K}));Oi(vg,b,a).then(kf(this.pb),kf(this.ob),this);Mk("vir");Rk("vir");this.ya=Th()};
n.pb=function(a){if(!this.D){var b=a.responseText;b?(this.aa=!1,a=Q(b),this.J=!1,bl(this,a),this.J?this.j("onStatusFail",a):(Mk("virc"),Rk("virc"),a=Sa(this.g,"ypc"),this.ypcPreview&&(a=!1),this.isValid()&&!this.aa&&(this.ua||this.adaptiveFormats||this.da||this.ca||this.hlsvp||Sa(this.g,"fresca")||Sa(this.g,"heartbeat")||a)?this.D||(this.aa=!1,this.j("dataloaded")):this.j("dataloaderror",new Qg("manifest.net.retryexhausted",{successButUnplayable:"1"})))):this.Na(a)}};
n.ob=function(a){this.Na(a.f)};
n.Na=function(a){if(!this.D){a=a?a.status:-1;var b=0<=this.K||400==a||429==a,c=200<a?"manifest.net.badstatus":"manifest.net.connect",d=((Th()-this.ya)/1E3).toFixed(3);d={backend:"gvi",rc:a,rt:d};429==a?c="auth":b||(this.K++,this.Ga.start());this.j("dataloaderror",new Qg(c,d))}};
function hl(a,b){var c=b[0];c&&(c=c.playerAnnotationsUrlsRenderer)&&(c=c.invideoUrl)&&(a.m=Bh(c))}
function tl(a,b){a.captionTracks=[];b.captionTracks&&I(b.captionTracks,function(c){var d=dl(c.baseUrl);d&&(c=new mj({is_translateable:!!c.isTranslatable,languageCode:c.languageCode,languageName:c.name&&Z(c.name),url:d,vss_id:c.vssId,kind:c.kind}),this.captionTracks.push(c))},a);
b.translationLanguages&&Ma(b.translationLanguages,function(c){return{languageCode:c.languageCode,languageName:Z(c.languageName)}})}
function sl(a,b,c){var d=b.errorScreen;if(!(d&&(d.playerLegacyDesktopYpcOfferRenderer||d.playerLegacyDesktopYpcTrailerRenderer||d.ypcTrailerRenderer)||c&&c.isUpcoming||["OK","LIVE_STREAM_OFFLINE","FULLSCREEN_ONLY"].includes(b.status))){a.J=!0;a.errorCode="150";if(c=d&&d.playerErrorMessageRenderer){if(d=c.reason)a.errorReason=Z(d);(c=c.subreason)&&Z(c)}else a.errorReason=b.reason||null;c=b.status;"LOGIN_REQUIRED"==c?a.errorDetail="1":"CONTENT_CHECK_REQUIRED"==c?a.errorDetail="2":"AGE_CHECK_REQUIRED"==
c?(b=(b=b.errorScreen)&&b.playerKavRenderer,a.errorDetail=b&&b.kavUrl?"4":"3"):a.errorDetail=b.isBlockedInRestrictedMode?"5":"0"}}
function il(a,b){var c=b.heartbeatToken;c&&(a.drmSessionId=b.drmSessionId||"",a.heartbeatToken=c)}
function jl(a){(a=a.playerLegacyMulticameraRenderer)&&(a=a.metadataList)&&pf(a)}
function kl(a,b){var c=b.backgroundability;c&&c.backgroundabilityRenderer.backgroundable&&(a.backgroundable=!0);(c=b.pictureInPicture)&&c.pictureInPictureRenderer.playableInPip&&(a.pipable=!0);b.playableInEmbed&&(a.allowEmbed=!0);if(c=b.ypcClickwrap){var d=c.ypcRentalActivationRenderer;c.playerLegacyDesktopYpcClickwrapRenderer?a.w=!0:d&&((c=d.durationMessage)&&Z(c),a.w=!0)}}
function ml(a,b,c){var d=zl(b.googleRemarketingUrl);d&&(a.googleRemarketingUrl=d);if(d=zl(b.youtubeRemarketingUrl))a.youtubeRemarketingUrl=d;(d=zl(b.ptrackingUrl))&&(d=Al(d).ptk)&&encodeURIComponent(d);if(d=zl(b.ppvRemarketingUrl))a.ppvRemarketingUrl=d;if(d=zl(b.qoeUrl)){d=qf(d);for(var e in d){var f=d[e];d[e]=za(f)?f.join(","):f}}if(e=zl(b.remarketingUrl)){a.remarketingUrl=e;d=Al(e);d.foc_id&&(a.i.focEnabled=!0);if(d=d.data)a.i.rmktEnabled=!0,d.engaged&&(a.i.engaged="1");d=a.i;var g=e.match(Vc);
f=g[1];var h=g[3];g=g[4];var k="";f&&(k+=f+":");h&&(k=k+"//"+h,g&&(k+=":"+g));d.baseUrl=k+Wc(L(5,e))}if(b=zl(b.videostatsPlaybackUrl)){b=Al(b);if(e=b.adformat)c.adformat=e;if(c=b.ei)a.eventId=c;if(c=b.list)a.playlistId=c;if(c=b.osid)a.osid=c;if(c=b.referrer)a.referrer=c;if(c=b.subscribed)a.subscribed="1"==c,a.i.subscribed=c;if(c=b.vm)a.videoMetadata=c}}
function nl(a,b,c){if(a.Za){b=t(b);for(var d=b.next();!d.done;d=b.next())if(d=d.value)if(d=d.playerLegacyDesktopWatchAdsRenderer)if(d=d.playerAdParams){a.adSafetyReason=d.encodedAdSafetyReason||null;c.enabled_engage_types=d.enabledEngageTypes;break}}}
function ol(a,b){var c=b.fairPlayConfig;if(c&&(c=c.certificate))try{zc(c)}catch(e){}if(c=b.playbackStartConfig){a.Ea=parseInt(c.startSeconds,10);var d=c.liveUtcStartSeconds;d&&(a.liveUtcStartSeconds=parseInt(d,10));if(c=c.startPosition)if(c=c.utcTimeMillis)a.liveUtcStartSeconds=.001*parseInt(c,10)}else if(c=b.skippableSegmentsConfig){if(d=c.introSkipDurationMs)a.O=parseInt(d,10)/1E3;if(c=c.outroSkipDurationMs)a.ba=parseInt(c,10)/1E3}(c=b.visualizerConfig)&&c.isVisualizerEligible&&(a.isVisualizerEligible=
!0);if(c=b.webDrmConfig)if(c=c.widevineServiceCert)try{zc(c)}catch(e){}if(c=b.mediaCommonConfig)if(c=c.dynamicReadaheadConfig)a.maxReadAheadMediaTimeMs=c.maxReadAheadMediaTimeMs||NaN,a.minReadAheadMediaTimeMs=c.minReadAheadMediaTimeMs||NaN,a.readAheadGrowthRateMs=c.readAheadGrowthRateMs||NaN}
function pl(a,b,c){if(!al(a,"web_player_response_streaming_data_cipher_killswitch")){var d=b.adaptiveFormats;if(d){var e=[];d=t(d);for(var f=d.next();!f.done;f=d.next()){var g=f.value;f=g.indexRange;var h=g.initRange;f={itag:g.itag,url:g.url,index:f?f.start+"-"+f.end:"0-0",bitrate:g.bitrate,init:h?h.start+"-"+h.end:"0-0",type:g.mimeType,clen:g.contentLength,lmt:g.lastModified,xtags:g.xtags};if(h=g.audioTrack){var k=h.displayName;k&&(f.name=k,f.audio_track_id=h.id,h.audioIsDefault&&(f.isDefault="1"))}if(h=
g.captionTrack)f.caption_display_name=h.displayName,f.caption_vss_id=h.vssId,f.caption_language_code=h.languageCode,f.caption_kind=h.kind;(h=g.cipher)?(h=Q(h),f.sp=h.sp,f.s=h.s,f.url=h.url):f.url=g.url;h=g.width;k=g.height;null!=h&&null!=k&&(f.size=h+"x"+k);(h=g.fps)&&(f.fps=h);(h=g.type)&&(f.stream_type=Bl[h]);(h=g.projectionType)&&(f.projection_type=Cl[h]);(h=g.stereoLayout)&&(f.stereo_layout=Dl[h]);(h=g.spatialAudioType)&&(f.spatial_audio_type=El[h]);if(k=g.drmFamilies){h=[];k=t(k);for(var l=k.next();!l.done;l=
k.next())h.push(Fl[l.value]);f.drm_families=h.join(",")}(h=g.qualityLabel)&&(f.quality_label=h);(h=g.targetDurationSec)&&(f.target_duration_sec=h);(h=g.maxDvrDurationSec)&&(f.max_dvr_duration_sec=h);(h=g.audioSampleRate)&&(f.audio_sample_rate=h);(h=g.audioChannels)&&(f.audio_channels=h);if(g=g.colorInfo)(h=g.primaries)&&(h=Gl[h])&&(f.primaries=h),(g=g.transferCharacteristics)&&(g=Hl[g])&&(f.eotf=g);e.push(Zc(f))}a.adaptiveFormats=e.join(",")}if(d=b.formats){e=[];g=t(d);for(f=g.next();!f.done;f=g.next())f=
f.value,e.push(f.itag+"/"+f.width+"x"+f.height);e=[];d=t(d);for(f=d.next();!f.done;f=d.next()){f=f.value;g={itag:f.itag,type:f.mimeType,quality:f.quality};(h=f.url)&&(g.url=h);if(h=f.cipher)h=Q(h),g.sp=h.sp,g.s=h.s,g.url=h.url;f.stereo3d&&(g.stereo3d=1);e.push(Zc(g))}a.da=e.join(",")}}if(f=b.hlsFormats){e={};if(c&&(c=c.audioPairingConfig)&&c.pairs)for(c=t(c.pairs),d=c.next();!d.done;d=c.next())d=d.value,e[d.videoItag]=d.audioItag;c={};d=t(f);for(g=d.next();!g.done;g=d.next())g=g.value,c[g.itag]=g.bitrate;
d=[];f=t(f);for(g=f.next();!g.done;g=f.next()){h=g.value;g={itag:h.itag,type:h.mimeType,url:h.url,bitrate:h.bitrate,width:h.width,height:h.height,fps:h.fps};if(k=h.audioTrack)if(l=k.displayName)g.name=l,g.audio_track_id=k.id,k.audioIsDefault&&(g.is_default="1");if(h.drmFamilies){k=[];l=t(h.drmFamilies);for(var m=l.next();!m.done;m=l.next())k.push(Fl[m.value]);g.drm_families=k.join(",")}h=e[h.itag];k=c[h];h&&k&&(g.audio_itag=h,g.bitrate+=k);d.push(Zc(g))}a.hlsFormats=d.join(",")}if((c=b.licenseInfos)&&
0<c.length){e={};d=t(c);for(f=d.next();!f.done;f=d.next())g=f.value,f=g.drmFamily,g=g.url,f&&g&&(e[Fl[f]]=g);a.ta=e;if(c=c[0].drmParams)a.drmParams=c}if(c=b.dashManifestUrl)a.ua=$c(c,{cpn:a.clientPlaybackNonce});if(c=b.hlsManifestUrl)a.hlsvp=c;if(b=b.probeUrl)a.probeUrl=Bh($c(b,{cpn:a.clientPlaybackNonce}))}
function ql(a,b,c){var d=b.videoId;d&&(a.videoId=d,c.video_id||(c.video_id=d));al(a,"web_player_uid_killswitch")||(d=b.channelId)&&(a.i.uid=d.substr(2));if(d=b.title)a.title=d,c.title||(c.title=d);if(d=b.lengthSeconds)a.lengthSeconds=parseInt(d,10),c.length_seconds||(c.length_seconds=d);if(d=b.keywords)a.keywords=el(d);(d=b.channelId)&&!c.ucid&&(c.ucid=d);if(d=b.author)a.author=d,c.author||(c.author=d);if(c=b.isCrawlable)a.isListed=c;if(c=b.musicVideoType)a.musicVideoType=c;c=b.isLive;null!=c&&(a.l=
c,a.isPremiere=!!c&&!b.isLiveContent);(a=b.thumbnail)&&sj(a)}
function ll(a,b){if(b.playerLegacyDesktopYpcTrailerRenderer){var c=b.playerLegacyDesktopYpcTrailerRenderer;var d=(d=b.playerLegacyDesktopYpcTrailerRenderer.ypcTrailer)&&d.ypcTrailerRenderer}else if(b.playerLegacyDesktopYpcOfferRenderer)c=b.playerLegacyDesktopYpcOfferRenderer;else if(b.ypcTrailerRenderer){d=b.ypcTrailerRenderer;var e=d.fullVideoMessage;e&&Z(e)}c&&(a.C=!0);d&&((c=d.playerVars)&&Q(c),a.C=!0)}
function rl(a,b,c,d){b.isLiveDefaultBroadcast&&(a.isLiveDefaultBroadcast=!0);if(b.isPostLiveDvr)a.Ba=!0;else{var e=!1;if(b.isLive){d.livestream="1";a.allowLiveDvr=b.isLiveDvrEnabled?ch()?!0:tc&&5>Zk?!1:!0:!1;b.isLowLatencyLiveStream&&(a.isLowLatencyLiveStream=!0);if(e=b.latencyClass)a.latencyClass=Il[e]||"UNKNOWN";if(b=b.liveChunkReadahead)a.liveChunkReadahead=b;if(c=c&&c.livePlayerConfig)if(c.hasSubfragmentedFmp4&&(a.hasSubfragmentedFmp4=!0),c.defraggedFromSubfragments&&(a.defraggedFromSubfragments=
!0),c=c.liveExperimentalContentId)a.liveExperimentalContentId=parseInt(c,10);e=!0}else b.isUpcoming&&(e=!0);e&&(a.l=!0,d.adformat&&"8"!=d.adformat.split("_")[1]||(al(a,"live_fresca_v2")?a.g.push("heartbeat"):a.g.push("fresca")))}}
function fl(a,b){var c=b.thumbnailPreviewRenderer,d=c.defaultThumbnail;d&&sj(d);a.showShareButton=!!c.shareButton}
n.getAvailableAudioTracks=function(){return[]};
n.getAudioTrack=function(){var a=this;return this.ra&&"application/x-mpegURL"!=this.ra.mimeType?Qa(this.getAvailableAudioTracks(),function(b){return b.id==a.ra.id})||this.va:this.va};
n.getPlayerResponse=function(){return this.f};
n.getPlaylistId=function(){return null};
n.isAd=function(){return!!this.adFormat};
function gl(a){return al(a,"embeds_enable_hide_thumbnail_for_limited_state_videos")?(a=a.xa)&&a.showError?a.showError:!1:!1}
n.useInnertubeDrmService=function(){return!1};
var Jl={},Gl=(Jl.COLOR_PRIMARIES_BT709="bt709",Jl.COLOR_PRIMARIES_BT2020="bt2020",Jl),Kl={},Hl=(Kl.COLOR_TRANSFER_CHARACTERISTICS_BT709="bt709",Kl.COLOR_TRANSFER_CHARACTERISTICS_BT2020_10="bt2020",Kl.COLOR_TRANSFER_CHARACTERISTICS_SMPTEST2084="smpte2084",Kl.COLOR_TRANSFER_CHARACTERISTICS_ARIB_STD_B67="arib-std-b67",Kl),Ll={},Fl=(Ll.FAIRPLAY="fairplay",Ll.PLAYREADY="playready",Ll.WIDEVINE="widevine",Ll),Ml={},Il=(Ml.MDE_STREAM_OPTIMIZATIONS_RENDERER_LATENCY_UNKNOWN="UNKNOWN",Ml.MDE_STREAM_OPTIMIZATIONS_RENDERER_LATENCY_NORMAL=
"NORMAL",Ml.MDE_STREAM_OPTIMIZATIONS_RENDERER_LATENCY_LOW="LOW",Ml.MDE_STREAM_OPTIMIZATIONS_RENDERER_LATENCY_ULTRA_LOW="ULTRALOW",Ml),Nl={},Cl=(Nl.UNKNOWN=0,Nl.RECTANGULAR=1,Nl.EQUIRECTANGULAR=2,Nl.EQUIRECTANGULAR_THREED_TOP_BOTTOM=3,Nl.MESH=4,Nl),Ol={},El=(Ol.SPATIAL_AUDIO_TYPE_NONE=0,Ol.SPATIAL_AUDIO_TYPE_AMBISONICS_5_1=1,Ol.SPATIAL_AUDIO_TYPE_AMBISONICS_QUAD=2,Ol.SPATIAL_AUDIO_TYPE_FOA_WITH_NON_DIEGETIC=3,Ol),Pl={},Dl=(Pl.STEREO_LAYOUT_UNKNOWN=0,Pl.STEREO_LAYOUT_LEFT_RIGHT=1,Pl.STEREO_LAYOUT_TOP_BOTTOM=
2,Pl),Ql={},Bl=(Ql.FORMAT_STREAM_TYPE_UNKNOWN=0,Ql.FORMAT_STREAM_TYPE_OTF=3,Ql);function zl(a){return a&&a.baseUrl||""}
function Al(a){a=qf(a);for(var b in a){var c=a[b];a[b]=za(c)?c[0]:c}return a}
function el(a){var b={};I(a,function(c){var d=c.split("=");2==d.length?b[d[0]]=d[1]:b[c]=!0});
return b}
function dl(a){if(a){if(Ah(a))return a;a=new Ke(a);Le(a,document.location.protocol);a.f=document.location.hostname;document.location.port&&Me(a,document.location.port);a=a.toString();if(Ah(a,!0))return a}return""}
;var Rl;function Sl(a){ei.call(this,{B:"div",Z:"ytp-lightweight",Y:[{B:"div",Z:"ytp-gradient-top"},{B:"div",Z:"ytp-chrome-top",Y:[{B:"div",Z:"ytp-title",Y:[{B:"div",Z:"ytp-title-text",Y:[{B:"a",qa:["ytp-title-link"],X:{target:"blank_",href:"{{url}}"},tb:"{{title}}"}]}]}]},{B:"button",qa:["ytp-large-play-button","ytp-button"],Y:[Rl?{B:"div",qa:["ytp-icon","ytp-icon-large-play-button"]}:{B:"svg",X:{height:"100%",version:"1.1",viewBox:"0 0 68 48",width:"100%"},Y:[{B:"path",Z:"ytp-large-play-button-bg",X:{d:"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",
fill:"#212121","fill-opacity":"0.8"}},{B:"path",X:{d:"M 45,24 27,14 27,34",fill:"#fff"}}]}]}]});Rl=!1;var b=new Vh(a.args||{});this.f["ytp-gradient-top"].style.display=b.i?"":"none";this.f["ytp-chrome-top"].style.display=b.i?"":"none";this.f["ytp-title"].style.display=b.i?"":"none";b.i&&(a=new $k(b,a.args),this.updateValue("title",a.title||""),this.updateValue("url",b.getVideoUrl(a.videoId,a.playlistId)));b=this.f["ytp-title"];a=C(this.l,this);this.h.push({target:b,type:"click",listener:a});b.addEventListener("click",
a)}
u(Sl,ei);Sl.prototype.l=function(a){a=a||window.event;a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation()};function Tl(a,b,c){Rg.call(this);this.f=a;this.h=b;Wc(L(3,c));cg(this.f,"click",C(this.g,this))}
G(Tl,Rg);Tl.prototype.g=function(){this.j("onClick",this.h)};
Tl.prototype.G=function(){var a=this.f,b;for(b in gb)gb[b][0]==a&&ag(b);this.f=null};function Ul(a,b){M.call(this);this.f=a;this.h=b;this.g(this.h.iurl,!0)}
G(Ul,M);Ul.prototype.g=function(a,b){ec&&!pc(10)?this.f.style.filter='progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+a+'", sizingMethod="scale")':b||(this.f.style.backgroundImage="url("+a+")")};
Ul.prototype.G=function(){this.f=null};var Vl=null,Wl=null,Xl=null,Yl=null;function Zl(){var a=Xl,b=Mc(window),c=a.h,d=null;720<=b.height&&c.iurlmaxres?d=c.iurlmaxres:480<=b.height&&c.iurlsd?d=c.iurlsd:320<=b.height?d=c.iurlhq:180<=b.height&&(d=c.iurlmq);d&&(b=d,a=C(a.g,a,d,!1),d=new Image,d.onload=a,d.src=b)}
function pe(){var a=gf("EMBED_BINARY_URL"),b=$l;var c=void 0===c?null:c;if(window.spf){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(qg,""),c=c.replace(rg,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else sg(a,b,c)}
function $l(){ff("LIGHTWEIGHT_AUTOPLAY",!0);Vl&&Vl.parentNode&&Vl.parentNode.removeChild(Vl);var a=Wl;a.D||oe(a.F);pd(Wl,Xl);Yl.dispose();A("writeEmbed")()}
;z("writeLightweightEmbed",function(){var a,b;var c=document;Vl=y("lightweight-embed")?c.getElementById("lightweight-embed"):"lightweight-embed";c=document;if(c.getElementsByClassName)c=c.getElementsByClassName("yt-embed-thumbnail")[0];else if(c=document,c.querySelectorAll&&c.querySelector)c=c.querySelector(".yt-embed-thumbnail");else{if(c.querySelectorAll&&c.querySelector)c=c.querySelectorAll(".yt-embed-thumbnail");else if(c.getElementsByClassName){var d=c.getElementsByClassName("yt-embed-thumbnail");
c=d}else{d=c.getElementsByTagName("*");var e={};for(a=b=0;c=d[a];a++){var f=c.className;"function"==typeof f.split&&Sa(f.split(/\s+/),"yt-embed-thumbnail")&&(e[b++]=c)}e.length=b;c=e}c=c[0]||null}Xl=new Ul(c||null,O("THUMBNAIL_URLS"));Yl=new Sl(new dg(O("PLAYER_CONFIG",void 0)));Vl.appendChild(Yl.element);Wl=new Tl(Yl.element,O("VIDEO_ID")||"",O("EURL"));Wl.subscribe("onClick",pe);cg(window,"load",Zl)},void 0);
z("yt.setConfig",ff,void 0);z("yt.config.set",ff,void 0);z("yt.logging.errors.log",Tf,void 0);}).call(this);
