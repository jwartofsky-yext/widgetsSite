var Ur=Object.defineProperty;var Mr=(e,r,t)=>r in e?Ur(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var F=(e,r,t)=>(Mr(e,typeof r!="symbol"?r+"":r,t),t);import{d as Br}from"../static/index-QKaMz_F6.js";import{g as de,c as M}from"../static/commonjsHelpers-DZNb-E5g.js";function E(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function Oe(e,r){for(var t="",n=0,a=-1,o=0,i,s=0;s<=e.length;++s){if(s<e.length)i=e.charCodeAt(s);else{if(i===47)break;i=47}if(i===47){if(!(a===s-1||o===1))if(a!==s-1&&o===2){if(t.length<2||n!==2||t.charCodeAt(t.length-1)!==46||t.charCodeAt(t.length-2)!==46){if(t.length>2){var c=t.lastIndexOf("/");if(c!==t.length-1){c===-1?(t="",n=0):(t=t.slice(0,c),n=t.length-1-t.lastIndexOf("/")),a=s,o=0;continue}}else if(t.length===2||t.length===1){t="",n=0,a=s,o=0;continue}}r&&(t.length>0?t+="/..":t="..",n=2)}else t.length>0?t+="/"+e.slice(a+1,s):t=e.slice(a+1,s),n=s-a-1;a=s,o=0}else i===46&&o!==-1?++o:o=-1}return t}function Gr(e,r){var t=r.dir||r.root,n=r.base||(r.name||"")+(r.ext||"");return t?t===r.root?t+n:t+e+n:n}var G={resolve:function(){for(var r="",t=!1,n,a=arguments.length-1;a>=-1&&!t;a--){var o;a>=0?o=arguments[a]:(n===void 0&&(n=Br.process.cwd()),o=n),E(o),o.length!==0&&(r=o+"/"+r,t=o.charCodeAt(0)===47)}return r=Oe(r,!t),t?r.length>0?"/"+r:"/":r.length>0?r:"."},normalize:function(r){if(E(r),r.length===0)return".";var t=r.charCodeAt(0)===47,n=r.charCodeAt(r.length-1)===47;return r=Oe(r,!t),r.length===0&&!t&&(r="."),r.length>0&&n&&(r+="/"),t?"/"+r:r},isAbsolute:function(r){return E(r),r.length>0&&r.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var r,t=0;t<arguments.length;++t){var n=arguments[t];E(n),n.length>0&&(r===void 0?r=n:r+="/"+n)}return r===void 0?".":G.normalize(r)},relative:function(r,t){if(E(r),E(t),r===t||(r=G.resolve(r),t=G.resolve(t),r===t))return"";for(var n=1;n<r.length&&r.charCodeAt(n)===47;++n);for(var a=r.length,o=a-n,i=1;i<t.length&&t.charCodeAt(i)===47;++i);for(var s=t.length,c=s-i,d=o<c?o:c,u=-1,f=0;f<=d;++f){if(f===d){if(c>d){if(t.charCodeAt(i+f)===47)return t.slice(i+f+1);if(f===0)return t.slice(i+f)}else o>d&&(r.charCodeAt(n+f)===47?u=f:f===0&&(u=0));break}var $=r.charCodeAt(n+f),I=t.charCodeAt(i+f);if($!==I)break;$===47&&(u=f)}var j="";for(f=n+u+1;f<=a;++f)(f===a||r.charCodeAt(f)===47)&&(j.length===0?j+="..":j+="/..");return j.length>0?j+t.slice(i+u):(i+=u,t.charCodeAt(i)===47&&++i,t.slice(i))},_makeLong:function(r){return r},dirname:function(r){if(E(r),r.length===0)return".";for(var t=r.charCodeAt(0),n=t===47,a=-1,o=!0,i=r.length-1;i>=1;--i)if(t=r.charCodeAt(i),t===47){if(!o){a=i;break}}else o=!1;return a===-1?n?"/":".":n&&a===1?"//":r.slice(0,a)},basename:function(r,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');E(r);var n=0,a=-1,o=!0,i;if(t!==void 0&&t.length>0&&t.length<=r.length){if(t.length===r.length&&t===r)return"";var s=t.length-1,c=-1;for(i=r.length-1;i>=0;--i){var d=r.charCodeAt(i);if(d===47){if(!o){n=i+1;break}}else c===-1&&(o=!1,c=i+1),s>=0&&(d===t.charCodeAt(s)?--s===-1&&(a=i):(s=-1,a=c))}return n===a?a=c:a===-1&&(a=r.length),r.slice(n,a)}else{for(i=r.length-1;i>=0;--i)if(r.charCodeAt(i)===47){if(!o){n=i+1;break}}else a===-1&&(o=!1,a=i+1);return a===-1?"":r.slice(n,a)}},extname:function(r){E(r);for(var t=-1,n=0,a=-1,o=!0,i=0,s=r.length-1;s>=0;--s){var c=r.charCodeAt(s);if(c===47){if(!o){n=s+1;break}continue}a===-1&&(o=!1,a=s+1),c===46?t===-1?t=s:i!==1&&(i=1):t!==-1&&(i=-1)}return t===-1||a===-1||i===0||i===1&&t===a-1&&t===n+1?"":r.slice(t,a)},format:function(r){if(r===null||typeof r!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof r);return Gr("/",r)},parse:function(r){E(r);var t={root:"",dir:"",base:"",ext:"",name:""};if(r.length===0)return t;var n=r.charCodeAt(0),a=n===47,o;a?(t.root="/",o=1):o=0;for(var i=-1,s=0,c=-1,d=!0,u=r.length-1,f=0;u>=o;--u){if(n=r.charCodeAt(u),n===47){if(!d){s=u+1;break}continue}c===-1&&(d=!1,c=u+1),n===46?i===-1?i=u:f!==1&&(f=1):i!==-1&&(f=-1)}return i===-1||c===-1||f===0||f===1&&i===c-1&&i===s+1?c!==-1&&(s===0&&a?t.base=t.name=r.slice(1,c):t.base=t.name=r.slice(s,c)):(s===0&&a?(t.name=r.slice(1,i),t.base=r.slice(1,c)):(t.name=r.slice(s,i),t.base=r.slice(s,c)),t.ext=r.slice(i,c)),s>0?t.dir=r.slice(0,s-1):a&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};G.posix=G;var Hr=G;const T=de(Hr);function kr(){this.__data__=[],this.size=0}var Nr=kr;function zr(e,r){return e===r||e!==e&&r!==r}var te=zr,Vr=te;function Kr(e,r){for(var t=e.length;t--;)if(Vr(e[t][0],r))return t;return-1}var ne=Kr,qr=ne,Wr=Array.prototype,Jr=Wr.splice;function Yr(e){var r=this.__data__,t=qr(r,e);if(t<0)return!1;var n=r.length-1;return t==n?r.pop():Jr.call(r,t,1),--this.size,!0}var Xr=Yr,Zr=ne;function Qr(e){var r=this.__data__,t=Zr(r,e);return t<0?void 0:r[t][1]}var et=Qr,rt=ne;function tt(e){return rt(this.__data__,e)>-1}var nt=tt,at=ne;function it(e,r){var t=this.__data__,n=at(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this}var st=it,ot=Nr,ct=Xr,lt=et,ut=nt,ft=st;function H(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}H.prototype.clear=ot;H.prototype.delete=ct;H.prototype.get=lt;H.prototype.has=ut;H.prototype.set=ft;var ae=H,vt=ae;function dt(){this.__data__=new vt,this.size=0}var gt=dt;function ht(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}var pt=ht;function bt(e){return this.__data__.get(e)}var _t=bt;function yt(e){return this.__data__.has(e)}var $t=yt,mt=typeof M=="object"&&M&&M.Object===Object&&M,nr=mt,wt=nr,Tt=typeof self=="object"&&self&&self.Object===Object&&self,Ct=wt||Tt||Function("return this")(),k=Ct,At=k,jt=At.Symbol,ar=jt,Se=ar,ir=Object.prototype,Pt=ir.hasOwnProperty,xt=ir.toString,q=Se?Se.toStringTag:void 0;function Ot(e){var r=Pt.call(e,q),t=e[q];try{e[q]=void 0;var n=!0}catch{}var a=xt.call(e);return n&&(r?e[q]=t:delete e[q]),a}var St=Ot,Et=Object.prototype,Rt=Et.toString;function Ft(e){return Rt.call(e)}var It=Ft,Ee=ar,Lt=St,Dt=It,Ut="[object Null]",Mt="[object Undefined]",Re=Ee?Ee.toStringTag:void 0;function Bt(e){return e==null?e===void 0?Mt:Ut:Re&&Re in Object(e)?Lt(e):Dt(e)}var ie=Bt;function Gt(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var B=Gt,Ht=ie,kt=B,Nt="[object AsyncFunction]",zt="[object Function]",Vt="[object GeneratorFunction]",Kt="[object Proxy]";function qt(e){if(!kt(e))return!1;var r=Ht(e);return r==zt||r==Vt||r==Nt||r==Kt}var ge=qt,Wt=k,Jt=Wt["__core-js_shared__"],Yt=Jt,ue=Yt,Fe=function(){var e=/[^.]+$/.exec(ue&&ue.keys&&ue.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Xt(e){return!!Fe&&Fe in e}var Zt=Xt,Qt=Function.prototype,en=Qt.toString;function rn(e){if(e!=null){try{return en.call(e)}catch{}try{return e+""}catch{}}return""}var tn=rn,nn=ge,an=Zt,sn=B,on=tn,cn=/[\\^$.*+?()[\]{}|]/g,ln=/^\[object .+?Constructor\]$/,un=Function.prototype,fn=Object.prototype,vn=un.toString,dn=fn.hasOwnProperty,gn=RegExp("^"+vn.call(dn).replace(cn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function hn(e){if(!sn(e)||an(e))return!1;var r=nn(e)?gn:ln;return r.test(on(e))}var pn=hn;function bn(e,r){return e==null?void 0:e[r]}var _n=bn,yn=pn,$n=_n;function mn(e,r){var t=$n(e,r);return yn(t)?t:void 0}var he=mn,wn=he,Tn=k,Cn=wn(Tn,"Map"),sr=Cn,An=he,jn=An(Object,"create"),se=jn,Ie=se;function Pn(){this.__data__=Ie?Ie(null):{},this.size=0}var xn=Pn;function On(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}var Sn=On,En=se,Rn="__lodash_hash_undefined__",Fn=Object.prototype,In=Fn.hasOwnProperty;function Ln(e){var r=this.__data__;if(En){var t=r[e];return t===Rn?void 0:t}return In.call(r,e)?r[e]:void 0}var Dn=Ln,Un=se,Mn=Object.prototype,Bn=Mn.hasOwnProperty;function Gn(e){var r=this.__data__;return Un?r[e]!==void 0:Bn.call(r,e)}var Hn=Gn,kn=se,Nn="__lodash_hash_undefined__";function zn(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=kn&&r===void 0?Nn:r,this}var Vn=zn,Kn=xn,qn=Sn,Wn=Dn,Jn=Hn,Yn=Vn;function N(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}N.prototype.clear=Kn;N.prototype.delete=qn;N.prototype.get=Wn;N.prototype.has=Jn;N.prototype.set=Yn;var Xn=N,Le=Xn,Zn=ae,Qn=sr;function ea(){this.size=0,this.__data__={hash:new Le,map:new(Qn||Zn),string:new Le}}var ra=ea;function ta(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}var na=ta,aa=na;function ia(e,r){var t=e.__data__;return aa(r)?t[typeof r=="string"?"string":"hash"]:t.map}var oe=ia,sa=oe;function oa(e){var r=sa(this,e).delete(e);return this.size-=r?1:0,r}var ca=oa,la=oe;function ua(e){return la(this,e).get(e)}var fa=ua,va=oe;function da(e){return va(this,e).has(e)}var ga=da,ha=oe;function pa(e,r){var t=ha(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this}var ba=pa,_a=ra,ya=ca,$a=fa,ma=ga,wa=ba;function z(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}z.prototype.clear=_a;z.prototype.delete=ya;z.prototype.get=$a;z.prototype.has=ma;z.prototype.set=wa;var Ta=z,Ca=ae,Aa=sr,ja=Ta,Pa=200;function xa(e,r){var t=this.__data__;if(t instanceof Ca){var n=t.__data__;if(!Aa||n.length<Pa-1)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new ja(n)}return t.set(e,r),this.size=t.size,this}var Oa=xa,Sa=ae,Ea=gt,Ra=pt,Fa=_t,Ia=$t,La=Oa;function V(e){var r=this.__data__=new Sa(e);this.size=r.size}V.prototype.clear=Ea;V.prototype.delete=Ra;V.prototype.get=Fa;V.prototype.has=Ia;V.prototype.set=La;var Da=V,Ua=he,Ma=function(){try{var e=Ua(Object,"defineProperty");return e({},"",{}),e}catch{}}(),or=Ma,De=or;function Ba(e,r,t){r=="__proto__"&&De?De(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}var pe=Ba,Ga=pe,Ha=te;function ka(e,r,t){(t!==void 0&&!Ha(e[r],t)||t===void 0&&!(r in e))&&Ga(e,r,t)}var cr=ka;function Na(e){return function(r,t,n){for(var a=-1,o=Object(r),i=n(r),s=i.length;s--;){var c=i[e?s:++a];if(t(o[c],c,o)===!1)break}return r}}var za=Na,Va=za,Ka=Va(),qa=Ka,X={exports:{}};X.exports;(function(e,r){var t=k,n=r&&!r.nodeType&&r,a=n&&!0&&e&&!e.nodeType&&e,o=a&&a.exports===n,i=o?t.Buffer:void 0,s=i?i.allocUnsafe:void 0;function c(d,u){if(u)return d.slice();var f=d.length,$=s?s(f):new d.constructor(f);return d.copy($),$}e.exports=c})(X,X.exports);var Wa=X.exports,Ja=k,Ya=Ja.Uint8Array,Xa=Ya,Ue=Xa;function Za(e){var r=new e.constructor(e.byteLength);return new Ue(r).set(new Ue(e)),r}var Qa=Za,ei=Qa;function ri(e,r){var t=r?ei(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var ti=ri;function ni(e,r){var t=-1,n=e.length;for(r||(r=Array(n));++t<n;)r[t]=e[t];return r}var ai=ni,ii=B,Me=Object.create,si=function(){function e(){}return function(r){if(!ii(r))return{};if(Me)return Me(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}(),oi=si;function ci(e,r){return function(t){return e(r(t))}}var li=ci,ui=li,fi=ui(Object.getPrototypeOf,Object),lr=fi,vi=Object.prototype;function di(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||vi;return e===t}var ur=di,gi=oi,hi=lr,pi=ur;function bi(e){return typeof e.constructor=="function"&&!pi(e)?gi(hi(e)):{}}var _i=bi;function yi(e){return e!=null&&typeof e=="object"}var J=yi,$i=ie,mi=J,wi="[object Arguments]";function Ti(e){return mi(e)&&$i(e)==wi}var Ci=Ti,Be=Ci,Ai=J,fr=Object.prototype,ji=fr.hasOwnProperty,Pi=fr.propertyIsEnumerable,xi=Be(function(){return arguments}())?Be:function(e){return Ai(e)&&ji.call(e,"callee")&&!Pi.call(e,"callee")},vr=xi,Oi=Array.isArray,dr=Oi,Si=9007199254740991;function Ei(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Si}var gr=Ei,Ri=ge,Fi=gr;function Ii(e){return e!=null&&Fi(e.length)&&!Ri(e)}var be=Ii,Li=be,Di=J;function Ui(e){return Di(e)&&Li(e)}var Mi=Ui,Z={exports:{}};function Bi(){return!1}var Gi=Bi;Z.exports;(function(e,r){var t=k,n=Gi,a=r&&!r.nodeType&&r,o=a&&!0&&e&&!e.nodeType&&e,i=o&&o.exports===a,s=i?t.Buffer:void 0,c=s?s.isBuffer:void 0,d=c||n;e.exports=d})(Z,Z.exports);var hr=Z.exports,Hi=ie,ki=lr,Ni=J,zi="[object Object]",Vi=Function.prototype,Ki=Object.prototype,pr=Vi.toString,qi=Ki.hasOwnProperty,Wi=pr.call(Object);function Ji(e){if(!Ni(e)||Hi(e)!=zi)return!1;var r=ki(e);if(r===null)return!0;var t=qi.call(r,"constructor")&&r.constructor;return typeof t=="function"&&t instanceof t&&pr.call(t)==Wi}var Yi=Ji,Xi=ie,Zi=gr,Qi=J,es="[object Arguments]",rs="[object Array]",ts="[object Boolean]",ns="[object Date]",as="[object Error]",is="[object Function]",ss="[object Map]",os="[object Number]",cs="[object Object]",ls="[object RegExp]",us="[object Set]",fs="[object String]",vs="[object WeakMap]",ds="[object ArrayBuffer]",gs="[object DataView]",hs="[object Float32Array]",ps="[object Float64Array]",bs="[object Int8Array]",_s="[object Int16Array]",ys="[object Int32Array]",$s="[object Uint8Array]",ms="[object Uint8ClampedArray]",ws="[object Uint16Array]",Ts="[object Uint32Array]",p={};p[hs]=p[ps]=p[bs]=p[_s]=p[ys]=p[$s]=p[ms]=p[ws]=p[Ts]=!0;p[es]=p[rs]=p[ds]=p[ts]=p[gs]=p[ns]=p[as]=p[is]=p[ss]=p[os]=p[cs]=p[ls]=p[us]=p[fs]=p[vs]=!1;function Cs(e){return Qi(e)&&Zi(e.length)&&!!p[Xi(e)]}var As=Cs;function js(e){return function(r){return e(r)}}var Ps=js,Q={exports:{}};Q.exports;(function(e,r){var t=nr,n=r&&!r.nodeType&&r,a=n&&!0&&e&&!e.nodeType&&e,o=a&&a.exports===n,i=o&&t.process,s=function(){try{var c=a&&a.require&&a.require("util").types;return c||i&&i.binding&&i.binding("util")}catch{}}();e.exports=s})(Q,Q.exports);var xs=Q.exports,Os=As,Ss=Ps,Ge=xs,He=Ge&&Ge.isTypedArray,Es=He?Ss(He):Os,br=Es;function Rs(e,r){if(!(r==="constructor"&&typeof e[r]=="function")&&r!="__proto__")return e[r]}var _r=Rs,Fs=pe,Is=te,Ls=Object.prototype,Ds=Ls.hasOwnProperty;function Us(e,r,t){var n=e[r];(!(Ds.call(e,r)&&Is(n,t))||t===void 0&&!(r in e))&&Fs(e,r,t)}var Ms=Us,Bs=Ms,Gs=pe;function Hs(e,r,t,n){var a=!t;t||(t={});for(var o=-1,i=r.length;++o<i;){var s=r[o],c=n?n(t[s],e[s],s,t,e):void 0;c===void 0&&(c=e[s]),a?Gs(t,s,c):Bs(t,s,c)}return t}var ks=Hs;function Ns(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n}var zs=Ns,Vs=9007199254740991,Ks=/^(?:0|[1-9]\d*)$/;function qs(e,r){var t=typeof e;return r=r??Vs,!!r&&(t=="number"||t!="symbol"&&Ks.test(e))&&e>-1&&e%1==0&&e<r}var yr=qs,Ws=zs,Js=vr,Ys=dr,Xs=hr,Zs=yr,Qs=br,eo=Object.prototype,ro=eo.hasOwnProperty;function to(e,r){var t=Ys(e),n=!t&&Js(e),a=!t&&!n&&Xs(e),o=!t&&!n&&!a&&Qs(e),i=t||n||a||o,s=i?Ws(e.length,String):[],c=s.length;for(var d in e)(r||ro.call(e,d))&&!(i&&(d=="length"||a&&(d=="offset"||d=="parent")||o&&(d=="buffer"||d=="byteLength"||d=="byteOffset")||Zs(d,c)))&&s.push(d);return s}var no=to;function ao(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var io=ao,so=B,oo=ur,co=io,lo=Object.prototype,uo=lo.hasOwnProperty;function fo(e){if(!so(e))return co(e);var r=oo(e),t=[];for(var n in e)n=="constructor"&&(r||!uo.call(e,n))||t.push(n);return t}var vo=fo,go=no,ho=vo,po=be;function bo(e){return po(e)?go(e,!0):ho(e)}var $r=bo,_o=ks,yo=$r;function $o(e){return _o(e,yo(e))}var mo=$o,ke=cr,wo=Wa,To=ti,Co=ai,Ao=_i,Ne=vr,ze=dr,jo=Mi,Po=hr,xo=ge,Oo=B,So=Yi,Eo=br,Ve=_r,Ro=mo;function Fo(e,r,t,n,a,o,i){var s=Ve(e,t),c=Ve(r,t),d=i.get(c);if(d){ke(e,t,d);return}var u=o?o(s,c,t+"",e,r,i):void 0,f=u===void 0;if(f){var $=ze(c),I=!$&&Po(c),j=!$&&!I&&Eo(c);u=c,$||I||j?ze(s)?u=s:jo(s)?u=Co(s):I?(f=!1,u=wo(c,!0)):j?(f=!1,u=To(c,!0)):u=[]:So(c)||Ne(c)?(u=s,Ne(s)?u=Ro(s):(!Oo(s)||xo(s))&&(u=Ao(c))):f=!1}f&&(i.set(c,u),a(u,c,n,o,i),i.delete(c)),ke(e,t,u)}var Io=Fo,Lo=Da,Do=cr,Uo=qa,Mo=Io,Bo=B,Go=$r,Ho=_r;function mr(e,r,t,n,a){e!==r&&Uo(r,function(o,i){if(a||(a=new Lo),Bo(o))Mo(e,r,i,t,mr,n,a);else{var s=n?n(Ho(e,i),o,i+"",e,r,a):void 0;s===void 0&&(s=o),Do(e,i,s)}},Go)}var ko=mr;function No(e){return e}var wr=No;function zo(e,r,t){switch(t.length){case 0:return e.call(r);case 1:return e.call(r,t[0]);case 2:return e.call(r,t[0],t[1]);case 3:return e.call(r,t[0],t[1],t[2])}return e.apply(r,t)}var Vo=zo,Ko=Vo,Ke=Math.max;function qo(e,r,t){return r=Ke(r===void 0?e.length-1:r,0),function(){for(var n=arguments,a=-1,o=Ke(n.length-r,0),i=Array(o);++a<o;)i[a]=n[r+a];a=-1;for(var s=Array(r+1);++a<r;)s[a]=n[a];return s[r]=t(i),Ko(e,this,s)}}var Wo=qo;function Jo(e){return function(){return e}}var Yo=Jo,Xo=Yo,qe=or,Zo=wr,Qo=qe?function(e,r){return qe(e,"toString",{configurable:!0,enumerable:!1,value:Xo(r),writable:!0})}:Zo,ec=Qo,rc=800,tc=16,nc=Date.now;function ac(e){var r=0,t=0;return function(){var n=nc(),a=tc-(n-t);if(t=n,a>0){if(++r>=rc)return arguments[0]}else r=0;return e.apply(void 0,arguments)}}var ic=ac,sc=ec,oc=ic,cc=oc(sc),lc=cc,uc=wr,fc=Wo,vc=lc;function dc(e,r){return vc(fc(e,r,uc),e+"")}var gc=dc,hc=te,pc=be,bc=yr,_c=B;function yc(e,r,t){if(!_c(t))return!1;var n=typeof r;return(n=="number"?pc(t)&&bc(r,t.length):n=="string"&&r in t)?hc(t[r],e):!1}var $c=yc,mc=gc,wc=$c;function Tc(e){return mc(function(r,t){var n=-1,a=t.length,o=a>1?t[a-1]:void 0,i=a>2?t[2]:void 0;for(o=e.length>3&&typeof o=="function"?(a--,o):void 0,i&&wc(t[0],t[1],i)&&(o=a<3?void 0:o,a=1),r=Object(r);++n<a;){var s=t[n];s&&e(r,s,n,o)}return r})}var Cc=Tc,Ac=ko,jc=Cc,Pc=jc(function(e,r,t){Ac(e,r,t)}),xc=Pc;const We=de(xc);class W{constructor(r){F(this,"path");F(this,"getRelativePath",r=>T.join(".",T.relative(this.path,r)));F(this,"getAbsolutePath",()=>T.resolve(this.path));this.path=r}}var ee={exports:{}};/*! https://mths.be/punycode v1.4.1 by @mathias */ee.exports;(function(e,r){(function(t){var n=r&&!r.nodeType&&r,a=e&&!e.nodeType&&e,o=typeof M=="object"&&M;(o.global===o||o.window===o||o.self===o)&&(t=o);var i,s=2147483647,c=36,d=1,u=26,f=38,$=700,I=72,j=128,$e="-",Sr=/^xn--/,Er=/[^\x20-\x7E]/,Rr=/[\x2E\u3002\uFF0E\uFF61]/g,Fr={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},ce=c-d,O=Math.floor,K=String.fromCharCode,Y;function D(l){throw new RangeError(Fr[l])}function me(l,v){for(var g=l.length,b=[];g--;)b[g]=v(l[g]);return b}function we(l,v){var g=l.split("@"),b="";g.length>1&&(b=g[0]+"@",l=g[1]),l=l.replace(Rr,".");var _=l.split("."),w=me(_,v).join(".");return b+w}function Te(l){for(var v=[],g=0,b=l.length,_,w;g<b;)_=l.charCodeAt(g++),_>=55296&&_<=56319&&g<b?(w=l.charCodeAt(g++),(w&64512)==56320?v.push(((_&1023)<<10)+(w&1023)+65536):(v.push(_),g--)):v.push(_);return v}function Ce(l){return me(l,function(v){var g="";return v>65535&&(v-=65536,g+=K(v>>>10&1023|55296),v=56320|v&1023),g+=K(v),g}).join("")}function Ir(l){return l-48<10?l-22:l-65<26?l-65:l-97<26?l-97:c}function Ae(l,v){return l+22+75*(l<26)-((v!=0)<<5)}function je(l,v,g){var b=0;for(l=g?O(l/$):l>>1,l+=O(l/v);l>ce*u>>1;b+=c)l=O(l/ce);return O(b+(ce+1)*l/(l+f))}function Pe(l){var v=[],g=l.length,b,_=0,w=j,y=I,C,P,S,R,m,A,x,L,U;for(C=l.lastIndexOf($e),C<0&&(C=0),P=0;P<C;++P)l.charCodeAt(P)>=128&&D("not-basic"),v.push(l.charCodeAt(P));for(S=C>0?C+1:0;S<g;){for(R=_,m=1,A=c;S>=g&&D("invalid-input"),x=Ir(l.charCodeAt(S++)),(x>=c||x>O((s-_)/m))&&D("overflow"),_+=x*m,L=A<=y?d:A>=y+u?u:A-y,!(x<L);A+=c)U=c-L,m>O(s/U)&&D("overflow"),m*=U;b=v.length+1,y=je(_-R,b,R==0),O(_/b)>s-w&&D("overflow"),w+=O(_/b),_%=b,v.splice(_++,0,w)}return Ce(v)}function xe(l){var v,g,b,_,w,y,C,P,S,R,m,A=[],x,L,U,le;for(l=Te(l),x=l.length,v=j,g=0,w=I,y=0;y<x;++y)m=l[y],m<128&&A.push(K(m));for(b=_=A.length,_&&A.push($e);b<x;){for(C=s,y=0;y<x;++y)m=l[y],m>=v&&m<C&&(C=m);for(L=b+1,C-v>O((s-g)/L)&&D("overflow"),g+=(C-v)*L,v=C,y=0;y<x;++y)if(m=l[y],m<v&&++g>s&&D("overflow"),m==v){for(P=g,S=c;R=S<=w?d:S>=w+u?u:S-w,!(P<R);S+=c)le=P-R,U=c-R,A.push(K(Ae(R+le%U,0))),P=O(le/U);A.push(K(Ae(P,0))),w=je(g,L,b==_),g=0,++b}++g,++v}return A.join("")}function Lr(l){return we(l,function(v){return Sr.test(v)?Pe(v.slice(4).toLowerCase()):v})}function Dr(l){return we(l,function(v){return Er.test(v)?"xn--"+xe(v):v})}if(i={version:"1.4.1",ucs2:{decode:Te,encode:Ce},decode:Pe,encode:xe,toASCII:Dr,toUnicode:Lr},n&&a)if(e.exports==n)a.exports=i;else for(Y in i)i.hasOwnProperty(Y)&&(n[Y]=i[Y]);else t.punycode=i})(M)})(ee,ee.exports);ee.exports;function Oc(e,r){for(var t=0,n=e.length-1;n>=0;n--){var a=e[n];a==="."?e.splice(n,1):a===".."?(e.splice(n,1),t++):t&&(e.splice(n,1),t--)}if(r)for(;t--;t)e.unshift("..");return e}function Sc(){for(var e="",r=!1,t=arguments.length-1;t>=-1&&!r;t--){var n=t>=0?arguments[t]:"/";if(typeof n!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!n)continue;e=n+"/"+e,r=n.charAt(0)==="/"}return e=Oc(Ec(e.split("/"),function(a){return!!a}),!r).join("/"),(r?"/":"")+e||"."}function Ec(e,r){if(e.filter)return e.filter(r);for(var t=[],n=0;n<e.length;n++)r(e[n],n,e)&&t.push(e[n]);return t}var Tr=function(e){function r(){var n=this||self;return delete e.prototype.__magic__,n}if(typeof globalThis=="object")return globalThis;if(this)return r();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:r});var t=__magic__;return t}(Object),Rc=Tr.URL;Tr.URLSearchParams;var Fc=/%/g,Ic=/\\/g,Lc=/\n/g,Dc=/\r/g,Uc=/\t/g,Mc=47;function Bc(e){return e.includes("%")&&(e=e.replace(Fc,"%25")),e.includes("\\")&&(e=e.replace(Ic,"%5C")),e.includes(`
`)&&(e=e.replace(Lc,"%0A")),e.includes("\r")&&(e=e.replace(Dc,"%0D")),e.includes("	")&&(e=e.replace(Uc,"%09")),e}var Cr=function(r){var t=new Rc("file://"),n=Sc(r),a=r.charCodeAt(r.length-1);return a===Mc&&n[n.length-1]!=="/"&&(n+="/"),t.pathname=Bc(n),t};const Gc="modulepreload",Hc=function(e){return"/"+e},Je={},_e=function(r,t,n){let a=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link");a=Promise.all(t.map(i=>{if(i=Hc(i),i in Je)return;Je[i]=!0;const s=i.endsWith(".css"),c=s?'[rel="stylesheet"]':"";if(!!n)for(let f=o.length-1;f>=0;f--){const $=o[f];if($.href===i&&(!s||$.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":Gc,s||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),s)return new Promise((f,$)=>{u.addEventListener("load",f),u.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${i}`)))})}))}return a.then(()=>r()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})},Ar=async e=>await _e(()=>import(e),__vite__mapDeps([])),kc=async(e,r)=>{var a;return r===""?e:((a=(await Ar(Cr(r).toString())).default.build)==null?void 0:a.assetsDir)??e},Nc=async(e,r)=>r===""?e:(await Ar(Cr(r).toString())).default.publicDir||e,jr="assets",Pr="public",Ye={rootFolders:{source:"src",dist:"dist",sitesConfig:"sites-config",functions:"functions"},subfolders:{templates:"templates",widgets:"widgets",serverlessFunctions:"functions",assets:jr,public:Pr,clientBundle:"client",serverBundle:"server",renderBundle:"render",renderer:"renderer",static:"static",plugin:"plugin"},sitesConfigFiles:{ci:"ci.json",features:"features.json",siteStream:"site-stream.json",serving:"serving.json",sitemap:"sitemap.json",redirects:"redirects.csv",auth:"auth.json"},distConfigFiles:{templates:"templates.json",artifacts:"artifacts.json",functionMetadata:"functionMetadata.json"},rootFiles:{config:"config.yaml"},envVarConfig:{envVarDir:"",envVarPrefix:"YEXT_PUBLIC"}},re=class re{constructor(r){F(this,"config");F(this,"getTemplatePaths",()=>{const r=T.join(this.config.rootFolders.source,this.config.subfolders.templates);return this.config.scope?[new W(T.join(r,this.config.scope)),new W(r)]:[new W(r)]});F(this,"getSitesConfigPath",()=>new W(T.join(this.config.rootFolders.sitesConfig,this.config.scope??"")));F(this,"getScopedDistPath",()=>new W(T.join(this.config.rootFolders.dist,this.config.scope??"")));const t=We(Ye,r);this.config=t}};F(re,"init",async r=>{const t=We(Ye,r),n=await kc(jr,T.resolve("vite.config.js"));t.subfolders.assets=n;const a=await Nc(Pr,T.resolve("vite.config.js"));return t.subfolders.public=a,new re(t)});let fe=re;const zc=e=>{const r=e.split("/");return r.pop(),r.map(()=>"../").reduce((t,n)=>t+n,"")},Xe=e=>e.split(T.sep).join(T.posix.sep);var ye={exports:{}},h=String,xr=function(){return{isColorSupported:!1,reset:h,bold:h,dim:h,italic:h,underline:h,inverse:h,hidden:h,strikethrough:h,black:h,red:h,green:h,yellow:h,blue:h,magenta:h,cyan:h,white:h,gray:h,bgBlack:h,bgRed:h,bgGreen:h,bgYellow:h,bgBlue:h,bgMagenta:h,bgCyan:h,bgWhite:h}};ye.exports=xr();ye.exports.createColors=xr;var Vc=ye.exports;const Kc=de(Vc),qc=e=>`<title>${e.title?e.title:"Yext Pages Site"}</title>
    <meta charset="${e.charset||"UTF-8"}">
    <meta name="viewport" content="${e.viewport||"width=device-width, initial-scale=1"}">
    ${e.tags?e.tags.map(Wc).join(`
`):""}
    ${e.other?e.other:""}`.split(`
`).filter(r=>r.trim()!="").join(`
`),Wc=e=>{switch(e.type){case"base":case"link":case"meta":return`<${e.type} ${Ze(e.attributes)}>`;case"style":case"script":case"noscript":case"template":return`<${e.type} ${Ze(e.attributes)}></${e.type}>`;default:return console.log(Kc.yellow(`[WARNING]: Tag type ${e.type} is unsupported by the Tag interface. Please use "other" to render this tag.`)),""}},Ze=e=>Object.keys(e).map(r=>`${r}="${e[r]}"`).join(" "),Jc=(e,r)=>{var t,n;return e!=null&&e.lang?e.lang:(t=r==null?void 0:r.document)!=null&&t.locale?(n=r==null?void 0:r.document)==null?void 0:n.locale:"en"},Yc=(e,r,t)=>{const n=Qe(Xe(r)),a=Qe(Xe(e));return`
        const componentURL = new URL("${n}", import.meta.url)
        const component = await import(componentURL);

        const renderURL = new URL("${a}", import.meta.url)
        const render = await import(renderURL);

        render.render(
        {
            Page: component.default,
            pageProps: ${Xc(t)},
        }
        );
    `},Xc=e=>`JSON.parse(decodeURIComponent("${encodeURIComponent(JSON.stringify(e))}"))`,Qe=e=>e.startsWith("/")?e:"/"+e,Zc=(e,r,t,n)=>(r=r.replace("<!--app-lang-->",t),e&&(r=ve(r,`<script type="module">${e}<\/script>`)),n&&(r=ve(r,qc(n))),r),Qc=(e,r,t,n,a,o)=>{let i=Zc(e,r,a,o);return i=ve(i,el(t,n)),i},el=(e,r)=>Array.from(Or(e,r,new Set)).map(t=>`<link rel="stylesheet" href="/${t}"/>`).join(`
`),Or=(e,r,t)=>{const n=structuredClone(Object.entries(r).find(([s])=>s===e));if(!n)return new Set;const[a,o]=n;t.add(a);const i=new Set(o.css);return(o.imports||[]).flatMap(s=>Array.from(Or(s,r,t))).forEach(s=>i.add(s)),i},er="<head>",ve=(e,r)=>{let t=e.indexOf(er);if(t===-1)throw new Error("_server.tsx: No head tag is defined");return t+=er.length,e.slice(0,t)+r+e.slice(t)},rl=async(e,r,t,n,a,o)=>{if(!a)throw new Error("Manifest is undefined");const i=r.getHeadConfig?r.getHeadConfig(e):void 0,s=T.join(o.getTemplatePaths()[0].path,`${r.templateName}.tsx`),c=await n.server.render({Page:r.default,pageProps:e});let d;return t&&(d=Yc(n.client,a.clientPaths[r.templateName],e)),Qc(d,c,s,a.bundlerManifest,Jc(i,e),i)},tl=e=>{if(nl(e.filename,e.config),!e.getPath)throw new Error(`Template ${e.filename} is missing an exported getPath function.`);if(!e.default&&!e.render)throw new Error(`Template ${e.filename} does not have the necessary exports to produce page. A module should either have a React component as a default export or a render function.`)},nl=(e,r)=>{if(!r.name)throw new Error(`Template ${e} is missing a "name" in the config function.`);if(r.streamId&&r.stream)throw new Error(`Template ${e} must not define both a "streamId" and a "stream".`)},al=(e,r)=>{let t=e.split(T.sep)[e.split(T.sep).length-1];const n=t.slice(t.lastIndexOf("."));let a=t.slice(0,t.lastIndexOf("."));return r&&(t=t.split(n)[0].slice(0,t.split(n)[0].lastIndexOf("."))+n,a=a.slice(0,a.lastIndexOf("."))),{base:t,name:a}},il=(e,r,t)=>{const n=al(e,t),a={...r,config:sl(n.name,r.config),path:e,filename:n.base,templateName:n.name};return tl(a),a},sl=(e,r)=>({name:(r==null?void 0:r.name)??e,hydrate:(r==null?void 0:r.hydrate)??!0,...r,stream:ol(r==null?void 0:r.stream)}),ol=e=>{if(e)return e.localization.locales&&e.localization.locales.length>0?{...e,localization:{locales:e.localization.locales,primary:!1}}:{...e,localization:{primary:!0}}},cl=(e,r)=>{if(!e||typeof e!="string")throw new Error(`getPath does not return a valid string in template '${r}'`)},rr=new Map,ll=async(e,r,t)=>{const n=r.serverPaths[e].replace(t.config.subfolders.assets,"..");if(!n)throw new Error(`Could not find path for feature ${e}`);let a=rr.get(n);return a||(a=await _e(()=>import(n),__vite__mapDeps([])),rr.set(n,a)),il(n,a,!0)},ul=async(e,r)=>{const t=e.renderPaths._server.replace(r.config.subfolders.assets,"..");return{server:await fl(t),client:e.renderPaths._client}},tr=new Map,fl=async e=>{let r=tr.get(e);return r||(r=await _e(()=>import(e),__vite__mapDeps([])),tr.set(e,r)),r},vl=async(e,r,t,n,a)=>{var c;e.transformProps&&(r=await e.transformProps(r));const o=e.getPath(r);cl(o,e.templateName);const i={...r,path:o,relativePrefixToRoot:zc(o)};return{content:await dl(e,i,t,n,a),path:o,redirects:((c=e.getRedirects)==null?void 0:c.call(e,i))??[]}},dl=async(e,r,t,n,a)=>{const{default:o,render:i,getHeadConfig:s}=e;if(!o&&!i)throw new Error(`Cannot render html from template '${e.config.name}'. Template is missing render function or default export.`);return i?(s&&console.warn(`getHeadConfig for template ${e.config.name} will not be called since a custom render function is defined.`),i(r)):await rl(r,e,e.config.hydrate,t,n,a)};var bl=async(e,r)=>{const t=new fe(r.projectStructure),n=await ll(e.document.__.name,r,t),a=await ul(r,t);return await vl(n,e,a,r,t)};export{bl as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
