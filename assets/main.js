var maputils;(()=>{var e={617:e=>{var t;self,t=()=>(()=>{var e={4:function(e,t){var r,n;void 0===(n="function"==typeof(r=function(){"use strict";function e(e,t,r){this.low=0|e,this.high=0|t,this.unsigned=!!r}function t(e){return!0===(e&&e.__isLong__)}e.prototype.__isLong__,Object.defineProperty(e.prototype,"__isLong__",{value:!0,enumerable:!1,configurable:!1}),e.isLong=t;var r={},n={};function i(e,t){var i,o,s;return t?(s=0<=(e>>>=0)&&e<256)&&(o=n[e])?o:(i=a(e,(0|e)<0?-1:0,!0),s&&(n[e]=i),i):(s=-128<=(e|=0)&&e<128)&&(o=r[e])?o:(i=a(e,e<0?-1:0,!1),s&&(r[e]=i),i)}function o(e,t){if(isNaN(e)||!isFinite(e))return t?m:d;if(t){if(e<0)return m;if(e>=c)return S}else{if(e<=-g)return T;if(e+1>=g)return L}return e<0?o(-e,t).neg():a(e%h|0,e/h|0,t)}function a(t,r,n){return new e(t,r,n)}e.fromInt=i,e.fromNumber=o,e.fromBits=a;var s=Math.pow;function l(e,t,r){if(0===e.length)throw Error("empty string");if("NaN"===e||"Infinity"===e||"+Infinity"===e||"-Infinity"===e)return d;if("number"==typeof t?(r=t,t=!1):t=!!t,(r=r||10)<2||36<r)throw RangeError("radix");var n;if((n=e.indexOf("-"))>0)throw Error("interior hyphen");if(0===n)return l(e.substring(1),t,r).neg();for(var i=o(s(r,8)),a=d,u=0;u<e.length;u+=8){var h=Math.min(8,e.length-u),c=parseInt(e.substring(u,u+h),r);if(h<8){var g=o(s(r,h));a=a.mul(g).add(o(c))}else a=(a=a.mul(i)).add(o(c))}return a.unsigned=t,a}function u(t){return t instanceof e?t:"number"==typeof t?o(t):"string"==typeof t?l(t):a(t.low,t.high,t.unsigned)}e.fromString=l,e.fromValue=u;var h=4294967296,c=h*h,g=c/2,f=i(1<<24),d=i(0);e.ZERO=d;var m=i(0,!0);e.UZERO=m;var p=i(1);e.ONE=p;var y=i(1,!0);e.UONE=y;var v=i(-1);e.NEG_ONE=v;var L=a(-1,2147483647,!1);e.MAX_VALUE=L;var S=a(-1,-1,!0);e.MAX_UNSIGNED_VALUE=S;var T=a(0,-2147483648,!1);e.MIN_VALUE=T;var I=e.prototype;return I.toInt=function(){return this.unsigned?this.low>>>0:this.low},I.toNumber=function(){return this.unsigned?(this.high>>>0)*h+(this.low>>>0):this.high*h+(this.low>>>0)},I.toString=function(e){if((e=e||10)<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative()){if(this.eq(T)){var t=o(e),r=this.div(t),n=r.mul(t).sub(this);return r.toString(e)+n.toInt().toString(e)}return"-"+this.neg().toString(e)}for(var i=o(s(e,6),this.unsigned),a=this,l="";;){var u=a.div(i),h=(a.sub(u.mul(i)).toInt()>>>0).toString(e);if((a=u).isZero())return h+l;for(;h.length<6;)h="0"+h;l=""+h+l}},I.getHighBits=function(){return this.high},I.getHighBitsUnsigned=function(){return this.high>>>0},I.getLowBits=function(){return this.low},I.getLowBitsUnsigned=function(){return this.low>>>0},I.getNumBitsAbs=function(){if(this.isNegative())return this.eq(T)?64:this.neg().getNumBitsAbs();for(var e=0!=this.high?this.high:this.low,t=31;t>0&&!(e&1<<t);t--);return 0!=this.high?t+33:t+1},I.isZero=function(){return 0===this.high&&0===this.low},I.isNegative=function(){return!this.unsigned&&this.high<0},I.isPositive=function(){return this.unsigned||this.high>=0},I.isOdd=function(){return!(1&~this.low)},I.isEven=function(){return!(1&this.low)},I.equals=function(e){return t(e)||(e=u(e)),(this.unsigned===e.unsigned||this.high>>>31!=1||e.high>>>31!=1)&&this.high===e.high&&this.low===e.low},I.eq=I.equals,I.notEquals=function(e){return!this.eq(e)},I.neq=I.notEquals,I.lessThan=function(e){return this.comp(e)<0},I.lt=I.lessThan,I.lessThanOrEqual=function(e){return this.comp(e)<=0},I.lte=I.lessThanOrEqual,I.greaterThan=function(e){return this.comp(e)>0},I.gt=I.greaterThan,I.greaterThanOrEqual=function(e){return this.comp(e)>=0},I.gte=I.greaterThanOrEqual,I.compare=function(e){if(t(e)||(e=u(e)),this.eq(e))return 0;var r=this.isNegative(),n=e.isNegative();return r&&!n?-1:!r&&n?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1},I.comp=I.compare,I.negate=function(){return!this.unsigned&&this.eq(T)?T:this.not().add(p)},I.neg=I.negate,I.add=function(e){t(e)||(e=u(e));var r=this.high>>>16,n=65535&this.high,i=this.low>>>16,o=65535&this.low,s=e.high>>>16,l=65535&e.high,h=e.low>>>16,c=0,g=0,f=0,d=0;return f+=(d+=o+(65535&e.low))>>>16,g+=(f+=i+h)>>>16,c+=(g+=n+l)>>>16,c+=r+s,a((f&=65535)<<16|(d&=65535),(c&=65535)<<16|(g&=65535),this.unsigned)},I.subtract=function(e){return t(e)||(e=u(e)),this.add(e.neg())},I.sub=I.subtract,I.multiply=function(e){if(this.isZero())return d;if(t(e)||(e=u(e)),e.isZero())return d;if(this.eq(T))return e.isOdd()?T:d;if(e.eq(T))return this.isOdd()?T:d;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(f)&&e.lt(f))return o(this.toNumber()*e.toNumber(),this.unsigned);var r=this.high>>>16,n=65535&this.high,i=this.low>>>16,s=65535&this.low,l=e.high>>>16,h=65535&e.high,c=e.low>>>16,g=65535&e.low,m=0,p=0,y=0,v=0;return y+=(v+=s*g)>>>16,p+=(y+=i*g)>>>16,y&=65535,p+=(y+=s*c)>>>16,m+=(p+=n*g)>>>16,p&=65535,m+=(p+=i*c)>>>16,p&=65535,m+=(p+=s*h)>>>16,m+=r*g+n*c+i*h+s*l,a((y&=65535)<<16|(v&=65535),(m&=65535)<<16|(p&=65535),this.unsigned)},I.mul=I.multiply,I.divide=function(e){if(t(e)||(e=u(e)),e.isZero())throw Error("division by zero");if(this.isZero())return this.unsigned?m:d;var r,n,i;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return m;if(e.gt(this.shru(1)))return y;i=m}else{if(this.eq(T))return e.eq(p)||e.eq(v)?T:e.eq(T)?p:(r=this.shr(1).div(e).shl(1)).eq(d)?e.isNegative()?p:v:(n=this.sub(e.mul(r)),i=r.add(n.div(e)));if(e.eq(T))return this.unsigned?m:d;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();i=d}for(n=this;n.gte(e);){r=Math.max(1,Math.floor(n.toNumber()/e.toNumber()));for(var a=Math.ceil(Math.log(r)/Math.LN2),l=a<=48?1:s(2,a-48),h=o(r),c=h.mul(e);c.isNegative()||c.gt(n);)c=(h=o(r-=l,this.unsigned)).mul(e);h.isZero()&&(h=p),i=i.add(h),n=n.sub(c)}return i},I.div=I.divide,I.modulo=function(e){return t(e)||(e=u(e)),this.sub(this.div(e).mul(e))},I.mod=I.modulo,I.not=function(){return a(~this.low,~this.high,this.unsigned)},I.and=function(e){return t(e)||(e=u(e)),a(this.low&e.low,this.high&e.high,this.unsigned)},I.or=function(e){return t(e)||(e=u(e)),a(this.low|e.low,this.high|e.high,this.unsigned)},I.xor=function(e){return t(e)||(e=u(e)),a(this.low^e.low,this.high^e.high,this.unsigned)},I.shiftLeft=function(e){return t(e)&&(e=e.toInt()),0==(e&=63)?this:e<32?a(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):a(0,this.low<<e-32,this.unsigned)},I.shl=I.shiftLeft,I.shiftRight=function(e){return t(e)&&(e=e.toInt()),0==(e&=63)?this:e<32?a(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):a(this.high>>e-32,this.high>=0?0:-1,this.unsigned)},I.shr=I.shiftRight,I.shiftRightUnsigned=function(e){if(t(e)&&(e=e.toInt()),0==(e&=63))return this;var r=this.high;return e<32?a(this.low>>>e|r<<32-e,r>>>e,this.unsigned):a(32===e?r:r>>>e-32,0,this.unsigned)},I.shru=I.shiftRightUnsigned,I.toSigned=function(){return this.unsigned?a(this.low,this.high,!1):this},I.toUnsigned=function(){return this.unsigned?this:a(this.low,this.high,!0)},I.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()},I.toBytesLE=function(){var e=this.high,t=this.low;return[255&t,t>>>8&255,t>>>16&255,t>>>24&255,255&e,e>>>8&255,e>>>16&255,e>>>24&255]},I.toBytesBE=function(){var e=this.high,t=this.low;return[e>>>24&255,e>>>16&255,e>>>8&255,255&e,t>>>24&255,t>>>16&255,t>>>8&255,255&t]},e})?r.apply(t,[]):r)||(e.exports=n)},309:(e,t,r)=>{!function(e){"use strict";var t=e.S2={L:{}};t.L.LatLng=function(e,t,r){var n=parseFloat(e,10),i=parseFloat(t,10);if(isNaN(n)||isNaN(i))throw new Error("Invalid LatLng object: ("+e+", "+t+")");return!0!==r&&(n=Math.max(Math.min(n,90),-90),i=(i+180)%360+(i<-180||180===i?180:-180)),{lat:n,lng:i}},t.L.LatLng.DEG_TO_RAD=Math.PI/180,t.L.LatLng.RAD_TO_DEG=180/Math.PI,t.LatLngToXYZ=function(e){var r=t.L.LatLng.DEG_TO_RAD,n=e.lat*r,i=e.lng*r,o=Math.cos(n);return[Math.cos(i)*o,Math.sin(i)*o,Math.sin(n)]},t.XYZToLatLng=function(e){var r=t.L.LatLng.RAD_TO_DEG,n=Math.atan2(e[2],Math.sqrt(e[0]*e[0]+e[1]*e[1])),i=Math.atan2(e[1],e[0]);return t.L.LatLng(n*r,i*r)},t.XYZToFaceUV=function(e){var t=function(e){var t=[Math.abs(e[0]),Math.abs(e[1]),Math.abs(e[2])];return t[0]>t[1]?t[0]>t[2]?0:2:t[1]>t[2]?1:2}(e);e[t]<0&&(t+=3);var r=function(e,t){var r,n;switch(e){case 0:r=t[1]/t[0],n=t[2]/t[0];break;case 1:r=-t[0]/t[1],n=t[2]/t[1];break;case 2:r=-t[0]/t[2],n=-t[1]/t[2];break;case 3:r=t[2]/t[0],n=t[1]/t[0];break;case 4:r=t[2]/t[1],n=-t[0]/t[1];break;case 5:r=-t[1]/t[2],n=-t[0]/t[2];break;default:throw{error:"Invalid face"}}return[r,n]}(t,e);return[t,r]},t.FaceUVToXYZ=function(e,t){var r=t[0],n=t[1];switch(e){case 0:return[1,r,n];case 1:return[-r,1,n];case 2:return[-r,-n,1];case 3:return[-1,-n,-r];case 4:return[n,-1,-r];case 5:return[n,r,-1];default:throw{error:"Invalid face"}}};var n=function(e){return e>=.5?1/3*(4*e*e-1):1/3*(1-4*(1-e)*(1-e))};t.STToUV=function(e){return[n(e[0]),n(e[1])]};var i=function(e){return e>=0?.5*Math.sqrt(1+3*e):1-.5*Math.sqrt(1-3*e)};t.UVToST=function(e){return[i(e[0]),i(e[1])]},t.STToIJ=function(e,t){var r=1<<t,n=function(e){var t=Math.floor(e*r);return Math.max(0,Math.min(r-1,t))};return[n(e[0]),n(e[1])]},t.IJToST=function(e,t,r){var n=1<<t;return[(e[0]+r[0])/n,(e[1]+r[1])/n]};var o=function(e,t,r,n){if(0==n){1==r&&(t.x=e-1-t.x,t.y=e-1-t.y);var i=t.x;t.x=t.y,t.y=i}},a=function(e,t,r,n){var i={a:[[0,"d"],[1,"a"],[3,"b"],[2,"a"]],b:[[2,"b"],[1,"b"],[3,"a"],[0,"c"]],c:[[2,"c"],[3,"d"],[1,"c"],[0,"b"]],d:[[0,"a"],[3,"c"],[1,"d"],[2,"d"]]};"number"!=typeof n&&console.warn(new Error("called pointToHilbertQuadList without face value, defaulting to '0'").stack);for(var o=n%2?"d":"a",a=[],s=r-1;s>=0;s--){var l=1<<s,u=i[o][2*(e&l?1:0)+(t&l?1:0)];a.push(u[0]),o=u[1]}return a};t.S2Cell=function(){},t.S2Cell.FromHilbertQuadKey=function(e){var r,n,i,a,s,l,u=e.split("/"),h=parseInt(u[0]),c=u[1],g=c.length,f={x:0,y:0};for(r=g-1;r>=0;r--)n=g-r,a=0,s=0,"1"===(i=c[r])?s=1:"2"===i?(a=1,s=1):"3"===i&&(a=1),l=Math.pow(2,n-1),o(l,f,a,s),f.x+=l*a,f.y+=l*s;if(h%2==1){var d=f.x;f.x=f.y,f.y=d}return t.S2Cell.FromFaceIJ(parseInt(h),[f.x,f.y],n)},t.S2Cell.FromLatLng=function(e,r){if(!e.lat&&0!==e.lat||!e.lng&&0!==e.lng)throw new Error("Pass { lat: lat, lng: lng } to S2.S2Cell.FromLatLng");var n=t.LatLngToXYZ(e),i=t.XYZToFaceUV(n),o=t.UVToST(i[1]),a=t.STToIJ(o,r);return t.S2Cell.FromFaceIJ(i[0],a,r)},t.S2Cell.FromFaceIJ=function(e,r,n){var i=new t.S2Cell;return i.face=e,i.ij=r,i.level=n,i},t.S2Cell.prototype.toString=function(){return"F"+this.face+"ij["+this.ij[0]+","+this.ij[1]+"]@"+this.level},t.S2Cell.prototype.getLatLng=function(){var e=t.IJToST(this.ij,this.level,[.5,.5]),r=t.STToUV(e),n=t.FaceUVToXYZ(this.face,r);return t.XYZToLatLng(n)},t.S2Cell.prototype.getCornerLatLngs=function(){for(var e=[],r=[[0,0],[0,1],[1,1],[1,0]],n=0;n<4;n++){var i=t.IJToST(this.ij,this.level,r[n]),o=t.STToUV(i),a=t.FaceUVToXYZ(this.face,o);e.push(t.XYZToLatLng(a))}return e},t.S2Cell.prototype.getFaceAndQuads=function(){var e=a(this.ij[0],this.ij[1],this.level,this.face);return[this.face,e]},t.S2Cell.prototype.toHilbertQuadkey=function(){var e=a(this.ij[0],this.ij[1],this.level,this.face);return this.face.toString(10)+"/"+e.join("")},t.latLngToNeighborKeys=t.S2Cell.latLngToNeighborKeys=function(e,r,n){return t.S2Cell.FromLatLng({lat:e,lng:r},n).getNeighbors().map((function(e){return e.toHilbertQuadkey()}))},t.S2Cell.prototype.getNeighbors=function(){var e=function(e,r,n){var i=1<<n;if(r[0]>=0&&r[1]>=0&&r[0]<i&&r[1]<i)return t.S2Cell.FromFaceIJ(e,r,n);var o=t.IJToST(r,n,[.5,.5]),a=t.STToUV(o),s=t.FaceUVToXYZ(e,a),l=t.XYZToFaceUV(s);return e=l[0],a=l[1],o=t.UVToST(a),r=t.STToIJ(o,n),t.S2Cell.FromFaceIJ(e,r,n)},r=this.face,n=this.ij[0],i=this.ij[1],o=this.level;return[e(r,[n-1,i],o),e(r,[n,i-1],o),e(r,[n+1,i],o),e(r,[n,i+1],o)]},t.FACE_BITS=3,t.MAX_LEVEL=30,t.POS_BITS=2*t.MAX_LEVEL+1,t.facePosLevelToId=t.S2Cell.facePosLevelToId=t.fromFacePosLevel=function(n,i,o){var a,s,l,u=e.dcodeIO&&e.dcodeIO.Long||r(4);for(o||(o=i.length),i.length>o&&(i=i.substr(0,o)),a=u.fromString(n.toString(10),!0,10).toString(2);a.length<t.FACE_BITS;)a="0"+a;for(s=u.fromString(i,!0,4).toString(2);s.length<2*o;)s="0"+s;for(l=a+s,l+="1";l.length<t.FACE_BITS+t.POS_BITS;)l+="0";return u.fromString(l,!0,2).toString(10)},t.keyToId=t.S2Cell.keyToId=t.toId=t.toCellId=t.fromKey=function(e){var r=e.split("/");return t.fromFacePosLevel(r[0],r[1],r[1].length)},t.idToKey=t.S2Cell.idToKey=t.S2Cell.toKey=t.toKey=t.fromId=t.fromCellId=t.S2Cell.toHilbertQuadkey=t.toHilbertQuadkey=function(n){for(var i=e.dcodeIO&&e.dcodeIO.Long||r(4),o=i.fromString(n,!0,10).toString(2);o.length<t.FACE_BITS+t.POS_BITS;)o="0"+o;for(var a=o.lastIndexOf("1"),s=o.substring(0,3),l=o.substring(3,a),u=l.length/2,h=i.fromString(s,!0,2).toString(10),c=i.fromString(l,!0,2).toString(4);c.length<u;)c="0"+c;return h+"/"+c},t.keyToLatLng=t.S2Cell.keyToLatLng=function(e){return t.S2Cell.FromHilbertQuadKey(e).getLatLng()},t.idToLatLng=t.S2Cell.idToLatLng=function(e){var r=t.idToKey(e);return t.keyToLatLng(r)},t.S2Cell.latLngToKey=t.latLngToKey=t.latLngToQuadkey=function(e,r,n){if(isNaN(n)||n<1||n>30)throw new Error("'level' is not a number between 1 and 30 (but it should be)");return t.S2Cell.FromLatLng({lat:e,lng:r},n).toHilbertQuadkey()},t.stepKey=function(t,n){var i,o=e.dcodeIO&&e.dcodeIO.Long||r(4),a=t.split("/"),s=a[0],l=a[1],u=a[1].length,h=o.fromString(l,!0,4);n>0?i=h.add(Math.abs(n)):n<0&&(i=h.subtract(Math.abs(n)));var c=i.toString(4);for("0"===c&&console.warning(new Error("face/position wrapping is not yet supported"));c.length<u;)c="0"+c;return s+"/"+c},t.S2Cell.prevKey=t.prevKey=function(e){return t.stepKey(e,-1)},t.S2Cell.nextKey=t.nextKey=function(e){return t.stepKey(e,1)}}(e.exports)}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{"use strict";r.r(n),r.d(n,{DNS:()=>t,LocationToGeoDomain:()=>o,LocationToServerAddr:()=>a});var e="loc.arenaxr.org";class t{cache={};static DNS_TYPE_ID_TO_NAME={1:"A",5:"CNAME",12:"PTR",16:"TXT",29:"LOC"};constructor(e="https://dns.google/resolve",t=!0){this.dohUrl=e,this.negativeCachingEnabled=t}addRecordToCache(e,t,r){e in this.cache||(this.cache[e]={}),t in this.cache[e]||(this.cache[e][t]=[]),r.timestamp=Date.now(),this.cache[e][t].push(r)}getRecordFromCache(e,t){if(e in this.cache&&t in this.cache[e]){var r=this.cache[e][t],n=[],i=[];for(let e=0;e<r.length;e++){let t=r[e];Date.now()-t.timestamp<1e3*t.TTL?n.push(t):i.push(e)}if(r=r.filter(((e,t)=>!i.includes(t))),this.cache[e][t]=r,n.length>0)return n}return null}async dnsLookup(e,r){if(!Object.values(t.DNS_TYPE_ID_TO_NAME).includes(r))throw new Error(`Unsupported DNS record type: ${r}. Supported types: ${Object.values(t.DNS_TYPE_ID_TO_NAME).join(", ")}`);const n=this.getRecordFromCache(e,r);if(n){for(let e of n)e.fromCache=!0;return n}const i=`${this.dohUrl}?name=${e}&type=${r}`;try{const n=await fetch(i,{headers:{accept:"application/dns-json"}});if(!n.ok)throw new Error("DoH request failed!");const l=await n.json();if("Answer"in l&&l.Answer.length>0){var o=[];for(let n of l.Answer)n.type in t.DNS_TYPE_ID_TO_NAME&&this.addRecordToCache(e,t.DNS_TYPE_ID_TO_NAME[n.type],n),t.DNS_TYPE_ID_TO_NAME[n.type]===r&&o.push(n);if(o.length>0)return o}if("Authority"in l&&l.Authority.length>0&&this.negativeCachingEnabled){var a=null;for(let e of l.Authority)if(6===e.type){a=e;break}if(a){const t=a.data.split(" "),n=Number(t[t.length-1]),i=Number(a.TTL);var s={error:"NO-ANSWER",TTL:Math.min(n,i)};return this.addRecordToCache(e,r,s),[s]}}if(this.negativeCachingEnabled)throw new Error("No answer or authority found in response!")}catch(e){return`ERROR: ${e.message}`}}}var i=r(309);class o{static area_m2_to_level={93e-6:30,371e-6:29,.001485:28,.005939:27,.023756:26,.095023:25,.38:24,1.52:23,6.08:22,24.33:21,97.3:20,389.21:19,1556.86:18,6227.43:17,24909.73:16,99638.93:15,4e5:14,159e4:13,638e4:12,2551e4:11,10203e4:10,40812e4:9,163245e4:8,652909e4:7,261133e5:6,10429791e4:5,41391815e4:4,16464555e5:3,602652116e4:2,2125275305e4:1};static errorToLevel(e){const t=Math.PI*Math.pow(e,2),r=Object.keys(o.area_m2_to_level).map(Number).sort(((e,t)=>e-t));let n=null;for(const e of r){if(!(e<=t))break;n=o.area_m2_to_level[e]}return null===n&&(n=30),n}static getS2CellKey(e,t,r){return i.S2.latLngToKey(e,t,r)}static getGeoDomainFromS2CellKey(e){var t=e.split("/"),r=t[0],n=t[1].split("");return(n=n.reverse()).push(r),n}static getBaseGeoDomain(e,t,r){var n=o.errorToLevel(r),i=o.getS2CellKey(e,t,n);return o.getGeoDomainFromS2CellKey(i)}static formAddressFromDigits(t,r=e){return t.join(".")+"."+r}static getGeoDomains(t,r,n,i=e){var a=o.getBaseGeoDomain(t,r,n),s=[];for(let e=0;e<4;e++){let t=a.slice(1);t.unshift(e),s.push(o.formAddressFromDigits(t,i))}for(let e=1;e<a.length;e++){let t=a.slice(e);s.push(o.formAddressFromDigits(t,i))}return s}}class a{dnsObj=null;constructor(){this.dnsObj=new t}async getServersAddrs(t,r,n,i=e){var a=o.getGeoDomains(t,r,n,i),s=[];for(let e of a)try{const t=await this.dnsObj.dnsLookup(e,"TXT");for(let e of t)"data"in e&&s.push(e.data)}catch(e){console.log(e)}return s}}})(),n})(),e.exports=t()}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n),r.d(n,{exportedForTesting:()=>k});const e={map:null,currentPolygonLayer:null,currentPolygonCoords:null,s2CellsLayerGroup:null,currentS2Cells:null,setCurrentPolygonCoords(e){this.currentPolygonCoords=e.map((e=>({Lat:e.lat,Lng:e.lng}))),this.currentPolygonCoords.reverse()},currentMarkerLayer:null,currentMarkerErrorCircleLayer:null,currentGeoS2CellsLayerGroup:null};var t=r(617);function i(e,t){var r=parseInt(e,16).toString(2);r=r.slice(0,r.length-1);var n=parseInt(r.slice(0,3),2).toString(),i=parseInt(r.slice(3),2).toString(4);return(i=i.split("")).reverse(),i.push(n),i.join(".")+"."+t}function o(t){if(!e.currentS2Cells)return alert("Please generate S2 cells first"),null;var r=[];for(let o in e.currentS2Cells){var n=i(o,t);r.push(n)}return r}function a(e){e.reverse();let t=e[0];t=parseInt(t).toString(2).padStart(3,"0");let r=t;for(let t=1;t<e.length;t++)r+=parseInt(e[t]).toString(2).padStart(2,"0");return r+="1",parseInt(r,2).toString(16)}function s(e,r,n){var i=t.LocationToGeoDomain.getGeoDomains(e,r,n,"loc"),o=[];for(let e of i){let t=e.split(".");t=t.slice(0,t.length-1),o.push(a(t))}return o}function l(){let t=e.currentMarkerLayer.getLatLng(),r=function(e,t,r){let n=s(e,t,r),i=[];for(let e of n){let t=S2CellVerticesFromToken(e);i.push(t)}return i}(t.lat,t.lng,e.currentMarkerErrorCircleLayer.getRadius()),n=[];for(let e of r){let t=e.map((e=>[e.Lat,e.Lng]));var i=L.polygon(t,{color:"purple",fillOpacity:0,opacity:1,weight:3});n.push(i)}e.currentGeoS2CellsLayerGroup&&e.map.removeLayer(e.currentGeoS2CellsLayerGroup),e.currentGeoS2CellsLayerGroup=L.layerGroup(n),e.currentGeoS2CellsLayerGroup.addTo(e.map)}let u=function(e){let t=b(e,null,!0),r=!1,n=!1;r=!e.match(/^\s+/),r?isNaN(t[1])||(n=!0):isNaN(t[0])||(n=!0);let i=0;r&&++i,n&&++i;let o=t[i];"IN"===o&&(o=t[i+1]);let a=t.indexOf(o,r?1:0);return 0!==a&&"IN"===t[a-1]||(t.splice(a,0,"IN"),++a),{rrType:o,tokens:t,hasName:r,hasTtl:n,typeIndex:a}},h=function(e){let t={},r=e.length;return t.name=e[0],t.minimum=parseInt(e[r-1],10),t.expire=parseInt(e[r-2],10),t.retry=parseInt(e[r-3],10),t.refresh=parseInt(e[r-4],10),t.serial=parseInt(e[r-5],10),t.rname=e[r-6],t.mname=e[r-7],isNaN(e[1])||(t.ttl=parseInt(e[1],10)),t},c=function(e,t){let r=e.tokens;e.hasName||(t.length?r.unshift(t[t.length-1].name):r.unshift("@"));let n=r.length,i={name:r[0],host:r[n-1]};return e.hasTtl&&(i.ttl=parseInt(r[1],10)),i},g=function(e,t){let r=e.tokens;e.hasName||(t.length?r.unshift(t[t.length-1].name):r.unshift("@"));let n=r.length,i={name:r[0],ip:r[n-1]};return e.hasTtl&&(i.ttl=parseInt(r[1],10)),i},f=function(e,t){let r=e.tokens;e.hasName||(t.length?r.unshift(t[t.length-1].name):r.unshift("@"));let n=r.length,i={name:r[0],ip:r[n-1]};return e.hasTtl&&(i.ttl=parseInt(r[1],10)),i},d=function(e,t){let r=e.tokens;e.hasName||(t.length?r.unshift(t[t.length-1].name):r.unshift("@"));let n=r.length,i={name:r[0],alias:r[n-1]};return e.hasTtl&&(i.ttl=parseInt(r[1],10)),i},m=function(e,t){let r=e.tokens;e.hasName||(t.length?r.unshift(t[t.length-1].name):r.unshift("@"));let n=r.length,i={name:r[0],preference:parseInt(r[n-2],10),host:r[n-1]};return e.hasTtl&&(i.ttl=parseInt(r[1],10)),i},p=function(e,t){let r=e.tokens;const n=r.slice(e.typeIndex+1);e.hasName||(t.length?r.unshift(t[t.length-1].name):r.unshift("@"));let i={name:r[0],txt:n.join(" ")};return e.hasTtl&&(i.ttl=parseInt(r[1],10)),i},y=function(e,t,r){let n=e.tokens;!e.hasName&&t[t.length-1]&&n.unshift(t[t.length-1].name);let i=n.length,o={name:n[0],fullname:n[0]+"."+r,host:n[i-1]};return e.hasTtl&&(o.ttl=parseInt(n[1],10)),o},v=function(e,t){let r=e.tokens;e.hasName||(t.length?r.unshift(t[t.length-1].name):r.unshift("@"));let n=r.length,i={name:r[0],target:r[n-1],priority:parseInt(r[n-4],10),weight:parseInt(r[n-3],10),port:parseInt(r[n-2],10)};return e.hasTtl&&(i.ttl=parseInt(r[1],10)),i},S=function(e,t){let r=e.tokens;const n=r.slice(e.typeIndex+1);e.hasName||(t.length?r.unshift(t[t.length-1].name):r.unshift("@"));let i={name:r[0],data:n.join(" ")};return e.hasTtl&&(i.ttl=parseInt(r[1],10)),i},T=function(e,t){let r=e.tokens;e.hasName||(t.length?r.unshift(t[t.length-1].name):r.unshift("@"));let n=r.length,i={name:r[0],flags:parseInt(r[n-3],10),tag:r[n-2],value:r[n-1]};return e.hasTtl&&(i.ttl=parseInt(r[1],10)),i},I=function(e,t){let r=e.tokens;e.hasName||(t.length?r.unshift(t[t.length-1].name):r.unshift("@"));let n=r.length,i={name:r[0],key_tag:r[n-4],algorithm:r[n-3],digest_type:r[n-2],digest:r[n-1]};return e.hasTtl&&(i.ttl=parseInt(r[1],10)),i},b=function(e,t,r){let n=t||/\s/g,i=!1,o=!1,a=[],s=[],l=e.split("");for(let e=0;e<l.length;++e){let t=l[e],u=t.match(n);"'"!==t||o?'"'!==t||i?i||o||!u?a.push(t):a.length>0&&(s.push(a.join("")),a=[]):(!0===r&&a.push(t),o=!o):(!0===r&&a.push(t),i=!i)}return a.length>0?s.push(a.join("")):t&&s.push(""),s};const C={generate:function(e,t){const r=JSON.parse(JSON.stringify(e));return t=t||"; Zone: {zone}\n; Exported  (yyyy-mm-ddThh:mm:ss.sssZ): {datetime}\n\n{$origin}\n{$ttl}\n\n; SOA Record\n{name} {ttl}\tIN\tSOA\t{mname}{rname}(\n{serial} ;serial\n{refresh} ;refresh\n{retry} ;retry\n{expire} ;expire\n{minimum} ;minimum ttl\n)\n\n; NS Records\n{ns}\n\n; MX Records\n{mx}\n\n; A Records\n{a}\n\n; AAAA Records\n{aaaa}\n\n; CNAME Records\n{cname}\n\n; PTR Records\n{ptr}\n\n; TXT Records\n{txt}\n\n; SRV Records\n{srv}\n\n; SPF Records\n{spf}\n\n; CAA Records\n{caa}\n\n; DS Records\n{ds}\n\n",t=function(e,t){let r="";return void 0!==e&&(r+="$ORIGIN "+e),t.replace("{$origin}",r)}(r.$origin,t),t=function(e,t){let r="";return void 0!==e&&(r+="$TTL "+e),t.replace("{$ttl}",r)}(r.$ttl,t),t=function(e,t){let r=t;return e.name=e.name||"@",e.ttl=e.ttl||"",Object.keys(e).map((t=>{r=r.replace("{"+t+"}",e[t]+"\t")})),r}(r.soa,t),t=function(e,t){let r="";for(let t of e)r+=(t.name||"@")+"\t",t.ttl&&(r+=t.ttl+"\t"),r+="IN\tNS\t"+t.host+"\n";return t.replace("{ns}",r)}(r.ns||[],t),t=function(e,t){let r="";for(let t of e)r+=(t.name||"@")+"\t",t.ttl&&(r+=t.ttl+"\t"),r+="IN\tA\t"+t.ip+"\n";return t.replace("{a}",r)}(r.a||[],t),t=function(e,t){let r="";for(let t of e)r+=(t.name||"@")+"\t",t.ttl&&(r+=t.ttl+"\t"),r+="IN\tAAAA\t"+t.ip+"\n";return t.replace("{aaaa}",r)}(r.aaaa||[],t),t=function(e,t){let r="";for(let t of e)r+=(t.name||"@")+"\t",t.ttl&&(r+=t.ttl+"\t"),r+="IN\tCNAME\t"+t.alias+"\n";return t.replace("{cname}",r)}(r.cname||[],t),t=function(e,t){let r="";for(let t of e)r+=(t.name||"@")+"\t",t.ttl&&(r+=t.ttl+"\t"),r+="IN\tMX\t"+t.preference+"\t"+t.host+"\n";return t.replace("{mx}",r)}(r.mx||[],t),t=function(e,t){let r="";for(let t of e)r+=(t.name||"@")+"\t",t.ttl&&(r+=t.ttl+"\t"),r+="IN\tPTR\t"+t.host+"\n";return t.replace("{ptr}",r)}(r.ptr||[],t),t=function(e,t){let r="";for(let t of e)r+=(t.name||"@")+"\t",t.ttl&&(r+=t.ttl+"\t"),r+="IN\tTXT\t"+t.txt+"\n";return t.replace("{txt}",r)}(r.txt||[],t),t=function(e,t){let r="";for(let t of e)r+=(t.name||"@")+"\t",t.ttl&&(r+=t.ttl+"\t"),r+="IN\tSRV\t"+t.priority+"\t",r+=t.weight+"\t",r+=t.port+"\t",r+=t.target+"\n";return t.replace("{srv}",r)}(r.srv||[],t),t=function(e,t){let r="";for(let t of e)r+=(t.name||"@")+"\t",t.ttl&&(r+=t.ttl+"\t"),r+="IN\tSPF\t"+t.data+"\n";return t.replace("{spf}",r)}(r.spf||[],t),t=function(e,t){let r="";for(let t of e)r+=(t.name||"@")+"\t",t.ttl&&(r+=t.ttl+"\t"),r+=`IN\tCAA\t${t.flags}\t${t.tag}\t${t.value}\n`;return t.replace("{caa}",r)}(r.caa||[],t),(t=function(e,t){return(t=(t=t.replace("{zone}",e.$origin||e.soa.name||"")).replace("{datetime}",(new Date).toISOString())).replace("{time}",Math.round(Date.now()/1e3))}(r,t=function(e,t){let r="";for(let t of e)r+=(t.name||"@")+"\t",t.ttl&&(r+=t.ttl+"\t"),r+=`IN\tDS\t${t.key_tag}\t${t.algorithm}\t${t.digest_type}\t${t.digest}\n`;return t.replace("{ds}",r)}(r.ds||[],t))).replace(/\n{2,}/gim,"\n\n")},parse:function(e){return function(e){let t={},r=e.split("\n");for(let e of r){if(!e.trim())continue;let r=b(e,null,!0);if(e.startsWith("$ORIGIN"))t.$origin=r[1];else if(e.startsWith("$TTL"))t.$ttl=r[1];else{const n=u(e);switch(n.rrType){case"SOA":t.soa=h(r);break;case"TXT":t.txt=t.txt||[],t.txt.push(p(n,t.txt));break;case"NS":t.ns=t.ns||[],t.ns.push(c(n,t.ns));break;case"A":t.a=t.a||[],t.a.push(g(n,t.a));break;case"AAAA":t.aaaa=t.aaaa||[],t.aaaa.push(f(n,t.aaaa));break;case"CNAME":t.cname=t.cname||[],t.cname.push(d(n,t.cname));break;case"MX":t.mx=t.mx||[],t.mx.push(m(n,t.mx));break;case"PTR":t.ptr=t.ptr||[],t.ptr.push(y(n,t.ptr,t.$origin));break;case"SRV":t.srv=t.srv||[],t.srv.push(v(n,t.srv));break;case"SPF":t.spf=t.spf||[],t.spf.push(S(n,t.spf));break;case"CAA":t.caa=t.caa||[],t.caa.push(T(n,t.caa));break;case"DS":t.ds=t.ds||[],t.ds.push(I(n,t.ds))}}}return t}(e=function(e){let t=/SOA[\s\S]*?\([\s\S]*?\)/gim.exec(e);if(null!==t){let r=t[0].replace(/\s+/gm," ");return r=r.replace(/\(|\)/gim," "),e.substring(0,t.index)+r+e.substring(t.index+t[0].length)}return e}(e=function(e){const t=e.split("\n");let r="";for(const e of t){if(e.trim().startsWith(";"))continue;const t=b(e,";",!0);for(const e of t){if(r+=e,!e.endsWith("\\")){r+="\n";break}r+=";"}}return r}(e)))}};function w(e){var t=e.dnsSuffix;"."!=t[t.length-1]&&(t+=".");var r=o(t);if(!r)return null;var n=function(e){var t="",r=Math.min(...e.map((e=>e.length)));for(let i=0;i<r;i++){var n=e[0][e[0].length-i-1];if(!e.every((e=>e[e.length-i-1]==n)))break;t=n+t}return t}(r),i={$origin:n=n.slice(1),$ttl:e.TTL,soa:{mname:e.mname,rname:e.rname,serial:parseInt(Date.now()/1e3)%Math.pow(2,32),refresh:e.refresh,retry:e.retry,expire:e.expire,minimum:e.minimum}};i.ns=[{name:"@",host:e.mname}],i.txt=[];for(let t of r){var a=t.slice(0,t.length-n.length-1);i.txt.push({name:a,txt:JSON.stringify({type:e.rrType,data:e.rrData})})}return C.generate(i)}function N(){const e=w({dnsSuffix:document.getElementById("dns-suffix").value,mname:document.getElementById("mname").value,rname:document.getElementById("rname").value,refresh:document.getElementById("refresh").value,retry:document.getElementById("retry").value,expire:document.getElementById("expire").value,minimum:document.getElementById("minimum").value,rrType:document.getElementById("rr-type").value,rrData:document.getElementById("rr-data").value,TTL:document.getElementById("ttl").value});if(!e)return null;const t=document.createElement("a");return t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),t.setAttribute("download","dns-zonefile.txt"),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t),e}!function(){var t=L.map("map").setView([40.44266,-79.94327],17);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(t),t.pm.addControls({drawMarker:!0,drawCircleMarker:!1,drawPolyline:!1,drawRectangle:!1,drawPolygon:!0,drawCircle:!1,drawText:!1});const r=new GeoSearch.OpenStreetMapProvider,n=new GeoSearch.GeoSearchControl({provider:r,style:"bar"});t.addControl(n),t.on("pm:drawstart",(r=>{"Polygon"===r.shape&&(e.currentPolygonLayer&&(t.removeLayer(e.currentPolygonLayer),e.currentPolygonLayer=null,e.currentPolygonCoords=null),e.s2CellsLayerGroup&&(t.removeLayer(e.s2CellsLayerGroup),e.s2CellsLayerGroup=null,e.currentS2Cells=null))})),t.on("pm:create",(r=>{if("Polygon"===r.shape){const t=r.layer,n=t.getLatLngs()[0];e.setCurrentPolygonCoords(n),e.currentPolygonLayer=t}if("Marker"===r.shape){const n=r.layer;e.currentMarkerLayer&&(t.removeLayer(e.currentMarkerLayer),t.removeLayer(e.currentMarkerErrorCircleLayer),e.currentMarkerLayer=null,e.currentMarkerErrorCircleLayer=null),e.currentMarkerLayer=n;let i=document.getElementById("gps-error").value;e.currentMarkerErrorCircleLayer=L.circle(n.getLatLng(),{radius:i,color:"purple",weight:1,fillColor:"purple",fillOpacity:.2}).addTo(t),l()}})),e.map=t}(),document.getElementById("generate-s2-button").addEventListener("click",(()=>{!function(){if(e.currentPolygonCoords){var t=document.getElementById("max-s2-cells").value;if(t){var r=function(e,t){return GetS2CellsInRegion(t,1,30,e)}(t=parseInt(t),e.currentPolygonCoords),n=[];for(let e in r){var i=r[e];i=i.map((e=>[e.Lat,e.Lng]));var o=L.polygon(i,{color:"red",fillOpacity:.1,opacity:.5,weight:2});n.push(o)}e.s2CellsLayerGroup&&e.map.removeLayer(e.s2CellsLayerGroup),e.s2CellsLayerGroup=L.layerGroup(n),e.s2CellsLayerGroup.addTo(e.map),e.currentS2Cells=r}else alert("Please enter a number of cells")}else alert("Please draw a polygon first")}()}));const E=document.getElementById("dns-config-form");E.addEventListener("submit",(e=>{e.preventDefault(),E.checkValidity()?N():E.reportValidity()})),document.getElementById("gps-error").addEventListener("change",(t=>{if(e.currentMarkerErrorCircleLayer){let r=t.target.value;e.currentMarkerErrorCircleLayer.setRadius(r),l()}})),document.getElementById("generate-geodomains-button").addEventListener("click",(()=>{e.currentMarkerLayer?l():alert("Please place a marker first")})),document.getElementById("clear-marker-button").addEventListener("click",(()=>{e.currentMarkerLayer&&(e.map.removeLayer(e.currentMarkerLayer),e.map.removeLayer(e.currentMarkerErrorCircleLayer),e.currentMarkerLayer=null,e.currentMarkerErrorCircleLayer=null,e.currentGeoS2CellsLayerGroup&&(e.map.removeLayer(e.currentGeoS2CellsLayerGroup),e.currentGeoS2CellsLayerGroup=null))})),document.getElementById("clear-polygon-button").addEventListener("click",(()=>{e.currentPolygonLayer&&(e.map.removeLayer(e.currentPolygonLayer),e.currentPolygonLayer=null,e.currentPolygonCoords=null,e.s2CellsLayerGroup&&(e.map.removeLayer(e.s2CellsLayerGroup),e.s2CellsLayerGroup=null,e.currentS2Cells=null))}));var k={getGeoDomainFromS2CellID:i,getGeoDomainsForCurrentCells:o,getS2TokensForLocation:s,getS2TokenFromDomainDigits:a,generateZoneFile:w,generateZoneFileFromDOM:N,globalState:e}})(),maputils=n})();