var maputils;(()=>{var t={617:t=>{var e;self,e=()=>(()=>{var t={4:function(t,e){var n,r;void 0===(r="function"==typeof(n=function(){"use strict";function t(t,e,n){this.low=0|t,this.high=0|e,this.unsigned=!!n}function e(t){return!0===(t&&t.__isLong__)}t.prototype.__isLong__,Object.defineProperty(t.prototype,"__isLong__",{value:!0,enumerable:!1,configurable:!1}),t.isLong=e;var n={},r={};function i(t,e){var i,o,s;return e?(s=0<=(t>>>=0)&&t<256)&&(o=r[t])?o:(i=a(t,(0|t)<0?-1:0,!0),s&&(r[t]=i),i):(s=-128<=(t|=0)&&t<128)&&(o=n[t])?o:(i=a(t,t<0?-1:0,!1),s&&(n[t]=i),i)}function o(t,e){if(isNaN(t)||!isFinite(t))return e?m:d;if(e){if(t<0)return m;if(t>=c)return T}else{if(t<=-g)return L;if(t+1>=g)return S}return t<0?o(-t,e).neg():a(t%h|0,t/h|0,e)}function a(e,n,r){return new t(e,n,r)}t.fromInt=i,t.fromNumber=o,t.fromBits=a;var s=Math.pow;function l(t,e,n){if(0===t.length)throw Error("empty string");if("NaN"===t||"Infinity"===t||"+Infinity"===t||"-Infinity"===t)return d;if("number"==typeof e?(n=e,e=!1):e=!!e,(n=n||10)<2||36<n)throw RangeError("radix");var r;if((r=t.indexOf("-"))>0)throw Error("interior hyphen");if(0===r)return l(t.substring(1),e,n).neg();for(var i=o(s(n,8)),a=d,u=0;u<t.length;u+=8){var h=Math.min(8,t.length-u),c=parseInt(t.substring(u,u+h),n);if(h<8){var g=o(s(n,h));a=a.mul(g).add(o(c))}else a=(a=a.mul(i)).add(o(c))}return a.unsigned=e,a}function u(e){return e instanceof t?e:"number"==typeof e?o(e):"string"==typeof e?l(e):a(e.low,e.high,e.unsigned)}t.fromString=l,t.fromValue=u;var h=4294967296,c=h*h,g=c/2,f=i(1<<24),d=i(0);t.ZERO=d;var m=i(0,!0);t.UZERO=m;var p=i(1);t.ONE=p;var v=i(1,!0);t.UONE=v;var y=i(-1);t.NEG_ONE=y;var S=a(-1,2147483647,!1);t.MAX_VALUE=S;var T=a(-1,-1,!0);t.MAX_UNSIGNED_VALUE=T;var L=a(0,-2147483648,!1);t.MIN_VALUE=L;var I=t.prototype;return I.toInt=function(){return this.unsigned?this.low>>>0:this.low},I.toNumber=function(){return this.unsigned?(this.high>>>0)*h+(this.low>>>0):this.high*h+(this.low>>>0)},I.toString=function(t){if((t=t||10)<2||36<t)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative()){if(this.eq(L)){var e=o(t),n=this.div(e),r=n.mul(e).sub(this);return n.toString(t)+r.toInt().toString(t)}return"-"+this.neg().toString(t)}for(var i=o(s(t,6),this.unsigned),a=this,l="";;){var u=a.div(i),h=(a.sub(u.mul(i)).toInt()>>>0).toString(t);if((a=u).isZero())return h+l;for(;h.length<6;)h="0"+h;l=""+h+l}},I.getHighBits=function(){return this.high},I.getHighBitsUnsigned=function(){return this.high>>>0},I.getLowBits=function(){return this.low},I.getLowBitsUnsigned=function(){return this.low>>>0},I.getNumBitsAbs=function(){if(this.isNegative())return this.eq(L)?64:this.neg().getNumBitsAbs();for(var t=0!=this.high?this.high:this.low,e=31;e>0&&!(t&1<<e);e--);return 0!=this.high?e+33:e+1},I.isZero=function(){return 0===this.high&&0===this.low},I.isNegative=function(){return!this.unsigned&&this.high<0},I.isPositive=function(){return this.unsigned||this.high>=0},I.isOdd=function(){return!(1&~this.low)},I.isEven=function(){return!(1&this.low)},I.equals=function(t){return e(t)||(t=u(t)),(this.unsigned===t.unsigned||this.high>>>31!=1||t.high>>>31!=1)&&this.high===t.high&&this.low===t.low},I.eq=I.equals,I.notEquals=function(t){return!this.eq(t)},I.neq=I.notEquals,I.lessThan=function(t){return this.comp(t)<0},I.lt=I.lessThan,I.lessThanOrEqual=function(t){return this.comp(t)<=0},I.lte=I.lessThanOrEqual,I.greaterThan=function(t){return this.comp(t)>0},I.gt=I.greaterThan,I.greaterThanOrEqual=function(t){return this.comp(t)>=0},I.gte=I.greaterThanOrEqual,I.compare=function(t){if(e(t)||(t=u(t)),this.eq(t))return 0;var n=this.isNegative(),r=t.isNegative();return n&&!r?-1:!n&&r?1:this.unsigned?t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1:this.sub(t).isNegative()?-1:1},I.comp=I.compare,I.negate=function(){return!this.unsigned&&this.eq(L)?L:this.not().add(p)},I.neg=I.negate,I.add=function(t){e(t)||(t=u(t));var n=this.high>>>16,r=65535&this.high,i=this.low>>>16,o=65535&this.low,s=t.high>>>16,l=65535&t.high,h=t.low>>>16,c=0,g=0,f=0,d=0;return f+=(d+=o+(65535&t.low))>>>16,g+=(f+=i+h)>>>16,c+=(g+=r+l)>>>16,c+=n+s,a((f&=65535)<<16|(d&=65535),(c&=65535)<<16|(g&=65535),this.unsigned)},I.subtract=function(t){return e(t)||(t=u(t)),this.add(t.neg())},I.sub=I.subtract,I.multiply=function(t){if(this.isZero())return d;if(e(t)||(t=u(t)),t.isZero())return d;if(this.eq(L))return t.isOdd()?L:d;if(t.eq(L))return this.isOdd()?L:d;if(this.isNegative())return t.isNegative()?this.neg().mul(t.neg()):this.neg().mul(t).neg();if(t.isNegative())return this.mul(t.neg()).neg();if(this.lt(f)&&t.lt(f))return o(this.toNumber()*t.toNumber(),this.unsigned);var n=this.high>>>16,r=65535&this.high,i=this.low>>>16,s=65535&this.low,l=t.high>>>16,h=65535&t.high,c=t.low>>>16,g=65535&t.low,m=0,p=0,v=0,y=0;return v+=(y+=s*g)>>>16,p+=(v+=i*g)>>>16,v&=65535,p+=(v+=s*c)>>>16,m+=(p+=r*g)>>>16,p&=65535,m+=(p+=i*c)>>>16,p&=65535,m+=(p+=s*h)>>>16,m+=n*g+r*c+i*h+s*l,a((v&=65535)<<16|(y&=65535),(m&=65535)<<16|(p&=65535),this.unsigned)},I.mul=I.multiply,I.divide=function(t){if(e(t)||(t=u(t)),t.isZero())throw Error("division by zero");if(this.isZero())return this.unsigned?m:d;var n,r,i;if(this.unsigned){if(t.unsigned||(t=t.toUnsigned()),t.gt(this))return m;if(t.gt(this.shru(1)))return v;i=m}else{if(this.eq(L))return t.eq(p)||t.eq(y)?L:t.eq(L)?p:(n=this.shr(1).div(t).shl(1)).eq(d)?t.isNegative()?p:y:(r=this.sub(t.mul(n)),i=n.add(r.div(t)));if(t.eq(L))return this.unsigned?m:d;if(this.isNegative())return t.isNegative()?this.neg().div(t.neg()):this.neg().div(t).neg();if(t.isNegative())return this.div(t.neg()).neg();i=d}for(r=this;r.gte(t);){n=Math.max(1,Math.floor(r.toNumber()/t.toNumber()));for(var a=Math.ceil(Math.log(n)/Math.LN2),l=a<=48?1:s(2,a-48),h=o(n),c=h.mul(t);c.isNegative()||c.gt(r);)c=(h=o(n-=l,this.unsigned)).mul(t);h.isZero()&&(h=p),i=i.add(h),r=r.sub(c)}return i},I.div=I.divide,I.modulo=function(t){return e(t)||(t=u(t)),this.sub(this.div(t).mul(t))},I.mod=I.modulo,I.not=function(){return a(~this.low,~this.high,this.unsigned)},I.and=function(t){return e(t)||(t=u(t)),a(this.low&t.low,this.high&t.high,this.unsigned)},I.or=function(t){return e(t)||(t=u(t)),a(this.low|t.low,this.high|t.high,this.unsigned)},I.xor=function(t){return e(t)||(t=u(t)),a(this.low^t.low,this.high^t.high,this.unsigned)},I.shiftLeft=function(t){return e(t)&&(t=t.toInt()),0==(t&=63)?this:t<32?a(this.low<<t,this.high<<t|this.low>>>32-t,this.unsigned):a(0,this.low<<t-32,this.unsigned)},I.shl=I.shiftLeft,I.shiftRight=function(t){return e(t)&&(t=t.toInt()),0==(t&=63)?this:t<32?a(this.low>>>t|this.high<<32-t,this.high>>t,this.unsigned):a(this.high>>t-32,this.high>=0?0:-1,this.unsigned)},I.shr=I.shiftRight,I.shiftRightUnsigned=function(t){if(e(t)&&(t=t.toInt()),0==(t&=63))return this;var n=this.high;return t<32?a(this.low>>>t|n<<32-t,n>>>t,this.unsigned):a(32===t?n:n>>>t-32,0,this.unsigned)},I.shru=I.shiftRightUnsigned,I.toSigned=function(){return this.unsigned?a(this.low,this.high,!1):this},I.toUnsigned=function(){return this.unsigned?this:a(this.low,this.high,!0)},I.toBytes=function(t){return t?this.toBytesLE():this.toBytesBE()},I.toBytesLE=function(){var t=this.high,e=this.low;return[255&e,e>>>8&255,e>>>16&255,e>>>24&255,255&t,t>>>8&255,t>>>16&255,t>>>24&255]},I.toBytesBE=function(){var t=this.high,e=this.low;return[t>>>24&255,t>>>16&255,t>>>8&255,255&t,e>>>24&255,e>>>16&255,e>>>8&255,255&e]},t})?n.apply(e,[]):n)||(t.exports=r)},309:(t,e,n)=>{!function(t){"use strict";var e=t.S2={L:{}};e.L.LatLng=function(t,e,n){var r=parseFloat(t,10),i=parseFloat(e,10);if(isNaN(r)||isNaN(i))throw new Error("Invalid LatLng object: ("+t+", "+e+")");return!0!==n&&(r=Math.max(Math.min(r,90),-90),i=(i+180)%360+(i<-180||180===i?180:-180)),{lat:r,lng:i}},e.L.LatLng.DEG_TO_RAD=Math.PI/180,e.L.LatLng.RAD_TO_DEG=180/Math.PI,e.LatLngToXYZ=function(t){var n=e.L.LatLng.DEG_TO_RAD,r=t.lat*n,i=t.lng*n,o=Math.cos(r);return[Math.cos(i)*o,Math.sin(i)*o,Math.sin(r)]},e.XYZToLatLng=function(t){var n=e.L.LatLng.RAD_TO_DEG,r=Math.atan2(t[2],Math.sqrt(t[0]*t[0]+t[1]*t[1])),i=Math.atan2(t[1],t[0]);return e.L.LatLng(r*n,i*n)},e.XYZToFaceUV=function(t){var e=function(t){var e=[Math.abs(t[0]),Math.abs(t[1]),Math.abs(t[2])];return e[0]>e[1]?e[0]>e[2]?0:2:e[1]>e[2]?1:2}(t);t[e]<0&&(e+=3);var n=function(t,e){var n,r;switch(t){case 0:n=e[1]/e[0],r=e[2]/e[0];break;case 1:n=-e[0]/e[1],r=e[2]/e[1];break;case 2:n=-e[0]/e[2],r=-e[1]/e[2];break;case 3:n=e[2]/e[0],r=e[1]/e[0];break;case 4:n=e[2]/e[1],r=-e[0]/e[1];break;case 5:n=-e[1]/e[2],r=-e[0]/e[2];break;default:throw{error:"Invalid face"}}return[n,r]}(e,t);return[e,n]},e.FaceUVToXYZ=function(t,e){var n=e[0],r=e[1];switch(t){case 0:return[1,n,r];case 1:return[-n,1,r];case 2:return[-n,-r,1];case 3:return[-1,-r,-n];case 4:return[r,-1,-n];case 5:return[r,n,-1];default:throw{error:"Invalid face"}}};var r=function(t){return t>=.5?1/3*(4*t*t-1):1/3*(1-4*(1-t)*(1-t))};e.STToUV=function(t){return[r(t[0]),r(t[1])]};var i=function(t){return t>=0?.5*Math.sqrt(1+3*t):1-.5*Math.sqrt(1-3*t)};e.UVToST=function(t){return[i(t[0]),i(t[1])]},e.STToIJ=function(t,e){var n=1<<e,r=function(t){var e=Math.floor(t*n);return Math.max(0,Math.min(n-1,e))};return[r(t[0]),r(t[1])]},e.IJToST=function(t,e,n){var r=1<<e;return[(t[0]+n[0])/r,(t[1]+n[1])/r]};var o=function(t,e,n,r){if(0==r){1==n&&(e.x=t-1-e.x,e.y=t-1-e.y);var i=e.x;e.x=e.y,e.y=i}},a=function(t,e,n,r){var i={a:[[0,"d"],[1,"a"],[3,"b"],[2,"a"]],b:[[2,"b"],[1,"b"],[3,"a"],[0,"c"]],c:[[2,"c"],[3,"d"],[1,"c"],[0,"b"]],d:[[0,"a"],[3,"c"],[1,"d"],[2,"d"]]};"number"!=typeof r&&console.warn(new Error("called pointToHilbertQuadList without face value, defaulting to '0'").stack);for(var o=r%2?"d":"a",a=[],s=n-1;s>=0;s--){var l=1<<s,u=i[o][2*(t&l?1:0)+(e&l?1:0)];a.push(u[0]),o=u[1]}return a};e.S2Cell=function(){},e.S2Cell.FromHilbertQuadKey=function(t){var n,r,i,a,s,l,u=t.split("/"),h=parseInt(u[0]),c=u[1],g=c.length,f={x:0,y:0};for(n=g-1;n>=0;n--)r=g-n,a=0,s=0,"1"===(i=c[n])?s=1:"2"===i?(a=1,s=1):"3"===i&&(a=1),l=Math.pow(2,r-1),o(l,f,a,s),f.x+=l*a,f.y+=l*s;if(h%2==1){var d=f.x;f.x=f.y,f.y=d}return e.S2Cell.FromFaceIJ(parseInt(h),[f.x,f.y],r)},e.S2Cell.FromLatLng=function(t,n){if(!t.lat&&0!==t.lat||!t.lng&&0!==t.lng)throw new Error("Pass { lat: lat, lng: lng } to S2.S2Cell.FromLatLng");var r=e.LatLngToXYZ(t),i=e.XYZToFaceUV(r),o=e.UVToST(i[1]),a=e.STToIJ(o,n);return e.S2Cell.FromFaceIJ(i[0],a,n)},e.S2Cell.FromFaceIJ=function(t,n,r){var i=new e.S2Cell;return i.face=t,i.ij=n,i.level=r,i},e.S2Cell.prototype.toString=function(){return"F"+this.face+"ij["+this.ij[0]+","+this.ij[1]+"]@"+this.level},e.S2Cell.prototype.getLatLng=function(){var t=e.IJToST(this.ij,this.level,[.5,.5]),n=e.STToUV(t),r=e.FaceUVToXYZ(this.face,n);return e.XYZToLatLng(r)},e.S2Cell.prototype.getCornerLatLngs=function(){for(var t=[],n=[[0,0],[0,1],[1,1],[1,0]],r=0;r<4;r++){var i=e.IJToST(this.ij,this.level,n[r]),o=e.STToUV(i),a=e.FaceUVToXYZ(this.face,o);t.push(e.XYZToLatLng(a))}return t},e.S2Cell.prototype.getFaceAndQuads=function(){var t=a(this.ij[0],this.ij[1],this.level,this.face);return[this.face,t]},e.S2Cell.prototype.toHilbertQuadkey=function(){var t=a(this.ij[0],this.ij[1],this.level,this.face);return this.face.toString(10)+"/"+t.join("")},e.latLngToNeighborKeys=e.S2Cell.latLngToNeighborKeys=function(t,n,r){return e.S2Cell.FromLatLng({lat:t,lng:n},r).getNeighbors().map((function(t){return t.toHilbertQuadkey()}))},e.S2Cell.prototype.getNeighbors=function(){var t=function(t,n,r){var i=1<<r;if(n[0]>=0&&n[1]>=0&&n[0]<i&&n[1]<i)return e.S2Cell.FromFaceIJ(t,n,r);var o=e.IJToST(n,r,[.5,.5]),a=e.STToUV(o),s=e.FaceUVToXYZ(t,a),l=e.XYZToFaceUV(s);return t=l[0],a=l[1],o=e.UVToST(a),n=e.STToIJ(o,r),e.S2Cell.FromFaceIJ(t,n,r)},n=this.face,r=this.ij[0],i=this.ij[1],o=this.level;return[t(n,[r-1,i],o),t(n,[r,i-1],o),t(n,[r+1,i],o),t(n,[r,i+1],o)]},e.FACE_BITS=3,e.MAX_LEVEL=30,e.POS_BITS=2*e.MAX_LEVEL+1,e.facePosLevelToId=e.S2Cell.facePosLevelToId=e.fromFacePosLevel=function(r,i,o){var a,s,l,u=t.dcodeIO&&t.dcodeIO.Long||n(4);for(o||(o=i.length),i.length>o&&(i=i.substr(0,o)),a=u.fromString(r.toString(10),!0,10).toString(2);a.length<e.FACE_BITS;)a="0"+a;for(s=u.fromString(i,!0,4).toString(2);s.length<2*o;)s="0"+s;for(l=a+s,l+="1";l.length<e.FACE_BITS+e.POS_BITS;)l+="0";return u.fromString(l,!0,2).toString(10)},e.keyToId=e.S2Cell.keyToId=e.toId=e.toCellId=e.fromKey=function(t){var n=t.split("/");return e.fromFacePosLevel(n[0],n[1],n[1].length)},e.idToKey=e.S2Cell.idToKey=e.S2Cell.toKey=e.toKey=e.fromId=e.fromCellId=e.S2Cell.toHilbertQuadkey=e.toHilbertQuadkey=function(r){for(var i=t.dcodeIO&&t.dcodeIO.Long||n(4),o=i.fromString(r,!0,10).toString(2);o.length<e.FACE_BITS+e.POS_BITS;)o="0"+o;for(var a=o.lastIndexOf("1"),s=o.substring(0,3),l=o.substring(3,a),u=l.length/2,h=i.fromString(s,!0,2).toString(10),c=i.fromString(l,!0,2).toString(4);c.length<u;)c="0"+c;return h+"/"+c},e.keyToLatLng=e.S2Cell.keyToLatLng=function(t){return e.S2Cell.FromHilbertQuadKey(t).getLatLng()},e.idToLatLng=e.S2Cell.idToLatLng=function(t){var n=e.idToKey(t);return e.keyToLatLng(n)},e.S2Cell.latLngToKey=e.latLngToKey=e.latLngToQuadkey=function(t,n,r){if(isNaN(r)||r<1||r>30)throw new Error("'level' is not a number between 1 and 30 (but it should be)");return e.S2Cell.FromLatLng({lat:t,lng:n},r).toHilbertQuadkey()},e.stepKey=function(e,r){var i,o=t.dcodeIO&&t.dcodeIO.Long||n(4),a=e.split("/"),s=a[0],l=a[1],u=a[1].length,h=o.fromString(l,!0,4);r>0?i=h.add(Math.abs(r)):r<0&&(i=h.subtract(Math.abs(r)));var c=i.toString(4);for("0"===c&&console.warning(new Error("face/position wrapping is not yet supported"));c.length<u;)c="0"+c;return s+"/"+c},e.S2Cell.prevKey=e.prevKey=function(t){return e.stepKey(t,-1)},e.S2Cell.nextKey=e.nextKey=function(t){return e.stepKey(t,1)}}(t.exports)}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,n),o.exports}n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};return(()=>{"use strict";n.r(r),n.d(r,{DNS:()=>e,LocationToGeoDomain:()=>o,LocationToServerAddr:()=>a});var t="loc.arenaxr.org";class e{cache={};static DNS_TYPE_ID_TO_NAME={1:"A",5:"CNAME",12:"PTR",16:"TXT",29:"LOC"};constructor(t="https://dns.google/resolve",e=!0){this.dohUrl=t,this.negativeCachingEnabled=e}addRecordToCache(t,e,n){t in this.cache||(this.cache[t]={}),e in this.cache[t]||(this.cache[t][e]=[]),n.timestamp=Date.now(),this.cache[t][e].push(n)}getRecordFromCache(t,e){if(t in this.cache&&e in this.cache[t]){var n=this.cache[t][e],r=[],i=[];for(let t=0;t<n.length;t++){let e=n[t];Date.now()-e.timestamp<1e3*e.TTL?r.push(e):i.push(t)}if(n=n.filter(((t,e)=>!i.includes(e))),this.cache[t][e]=n,r.length>0)return r}return null}async dnsLookup(t,n){if(!Object.values(e.DNS_TYPE_ID_TO_NAME).includes(n))throw new Error(`Unsupported DNS record type: ${n}. Supported types: ${Object.values(e.DNS_TYPE_ID_TO_NAME).join(", ")}`);const r=this.getRecordFromCache(t,n);if(r){for(let t of r)t.fromCache=!0;return r}const i=`${this.dohUrl}?name=${t}&type=${n}`;try{const r=await fetch(i,{headers:{accept:"application/dns-json"}});if(!r.ok)throw new Error("DoH request failed!");const l=await r.json();if("Answer"in l&&l.Answer.length>0){var o=[];for(let r of l.Answer)r.type in e.DNS_TYPE_ID_TO_NAME&&this.addRecordToCache(t,e.DNS_TYPE_ID_TO_NAME[r.type],r),e.DNS_TYPE_ID_TO_NAME[r.type]===n&&o.push(r);if(o.length>0)return o}if("Authority"in l&&l.Authority.length>0&&this.negativeCachingEnabled){var a=null;for(let t of l.Authority)if(6===t.type){a=t;break}if(a){const e=a.data.split(" "),r=Number(e[e.length-1]),i=Number(a.TTL);var s={error:"NO-ANSWER",TTL:Math.min(r,i)};return this.addRecordToCache(t,n,s),[s]}}if(this.negativeCachingEnabled)throw new Error("No answer or authority found in response!")}catch(t){return`ERROR: ${t.message}`}}}var i=n(309);class o{static area_m2_to_level={93e-6:30,371e-6:29,.001485:28,.005939:27,.023756:26,.095023:25,.38:24,1.52:23,6.08:22,24.33:21,97.3:20,389.21:19,1556.86:18,6227.43:17,24909.73:16,99638.93:15,4e5:14,159e4:13,638e4:12,2551e4:11,10203e4:10,40812e4:9,163245e4:8,652909e4:7,261133e5:6,10429791e4:5,41391815e4:4,16464555e5:3,602652116e4:2,2125275305e4:1};static errorToLevel(t){const e=Math.PI*Math.pow(t,2),n=Object.keys(o.area_m2_to_level).map(Number).sort(((t,e)=>t-e));let r=null;for(const t of n){if(!(t<=e))break;r=o.area_m2_to_level[t]}return null===r&&(r=30),r}static getS2CellKey(t,e,n){return i.S2.latLngToKey(t,e,n)}static getGeoDomainFromS2CellKey(t){var e=t.split("/"),n=e[0],r=e[1].split("");return(r=r.reverse()).push(n),r}static getBaseGeoDomain(t,e,n){var r=o.errorToLevel(n),i=o.getS2CellKey(t,e,r);return o.getGeoDomainFromS2CellKey(i)}static formAddressFromDigits(e,n=t){return e.join(".")+"."+n}static getGeoDomains(e,n,r,i=t){var a=o.getBaseGeoDomain(e,n,r),s=[];for(let t=0;t<4;t++){let e=a.slice(1);e.unshift(t),s.push(o.formAddressFromDigits(e,i))}for(let t=1;t<a.length;t++){let e=a.slice(t);s.push(o.formAddressFromDigits(e,i))}return s}}class a{dnsObj=null;constructor(){this.dnsObj=new e}async getServersAddrs(e,n,r,i=t){var a=o.getGeoDomains(e,n,r,i),s=[];for(let t of a)try{const e=await this.dnsObj.dnsLookup(t,"TXT");for(let t of e)"data"in t&&s.push(t.data)}catch(t){console.log(t)}return s}}})(),r})(),t.exports=e()}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};(()=>{"use strict";n.r(r),n.d(r,{exportedForTesting:()=>C});const t={map:null,currentPolygonLayer:null,currentPolygonCoords:null,s2CellsLayerGroup:null,currentS2Cells:null,setCurrentPolygonCoords(t){this.currentPolygonCoords=t.map((t=>({Lat:t.lat,Lng:t.lng}))),this.currentPolygonCoords.reverse()}};let e=function(t){let e=p(t,null,!0),n=!1,r=!1;n=!t.match(/^\s+/),n?isNaN(e[1])||(r=!0):isNaN(e[0])||(r=!0);let i=0;n&&++i,r&&++i;let o=e[i];"IN"===o&&(o=e[i+1]);let a=e.indexOf(o,n?1:0);return 0!==a&&"IN"===e[a-1]||(e.splice(a,0,"IN"),++a),{rrType:o,tokens:e,hasName:n,hasTtl:r,typeIndex:a}},i=function(t){let e={},n=t.length;return e.name=t[0],e.minimum=parseInt(t[n-1],10),e.expire=parseInt(t[n-2],10),e.retry=parseInt(t[n-3],10),e.refresh=parseInt(t[n-4],10),e.serial=parseInt(t[n-5],10),e.rname=t[n-6],e.mname=t[n-7],isNaN(t[1])||(e.ttl=parseInt(t[1],10)),e},o=function(t,e){let n=t.tokens;t.hasName||(e.length?n.unshift(e[e.length-1].name):n.unshift("@"));let r=n.length,i={name:n[0],host:n[r-1]};return t.hasTtl&&(i.ttl=parseInt(n[1],10)),i},a=function(t,e){let n=t.tokens;t.hasName||(e.length?n.unshift(e[e.length-1].name):n.unshift("@"));let r=n.length,i={name:n[0],ip:n[r-1]};return t.hasTtl&&(i.ttl=parseInt(n[1],10)),i},s=function(t,e){let n=t.tokens;t.hasName||(e.length?n.unshift(e[e.length-1].name):n.unshift("@"));let r=n.length,i={name:n[0],ip:n[r-1]};return t.hasTtl&&(i.ttl=parseInt(n[1],10)),i},l=function(t,e){let n=t.tokens;t.hasName||(e.length?n.unshift(e[e.length-1].name):n.unshift("@"));let r=n.length,i={name:n[0],alias:n[r-1]};return t.hasTtl&&(i.ttl=parseInt(n[1],10)),i},u=function(t,e){let n=t.tokens;t.hasName||(e.length?n.unshift(e[e.length-1].name):n.unshift("@"));let r=n.length,i={name:n[0],preference:parseInt(n[r-2],10),host:n[r-1]};return t.hasTtl&&(i.ttl=parseInt(n[1],10)),i},h=function(t,e){let n=t.tokens;const r=n.slice(t.typeIndex+1);t.hasName||(e.length?n.unshift(e[e.length-1].name):n.unshift("@"));let i={name:n[0],txt:r.join(" ")};return t.hasTtl&&(i.ttl=parseInt(n[1],10)),i},c=function(t,e,n){let r=t.tokens;!t.hasName&&e[e.length-1]&&r.unshift(e[e.length-1].name);let i=r.length,o={name:r[0],fullname:r[0]+"."+n,host:r[i-1]};return t.hasTtl&&(o.ttl=parseInt(r[1],10)),o},g=function(t,e){let n=t.tokens;t.hasName||(e.length?n.unshift(e[e.length-1].name):n.unshift("@"));let r=n.length,i={name:n[0],target:n[r-1],priority:parseInt(n[r-4],10),weight:parseInt(n[r-3],10),port:parseInt(n[r-2],10)};return t.hasTtl&&(i.ttl=parseInt(n[1],10)),i},f=function(t,e){let n=t.tokens;const r=n.slice(t.typeIndex+1);t.hasName||(e.length?n.unshift(e[e.length-1].name):n.unshift("@"));let i={name:n[0],data:r.join(" ")};return t.hasTtl&&(i.ttl=parseInt(n[1],10)),i},d=function(t,e){let n=t.tokens;t.hasName||(e.length?n.unshift(e[e.length-1].name):n.unshift("@"));let r=n.length,i={name:n[0],flags:parseInt(n[r-3],10),tag:n[r-2],value:n[r-1]};return t.hasTtl&&(i.ttl=parseInt(n[1],10)),i},m=function(t,e){let n=t.tokens;t.hasName||(e.length?n.unshift(e[e.length-1].name):n.unshift("@"));let r=n.length,i={name:n[0],key_tag:n[r-4],algorithm:n[r-3],digest_type:n[r-2],digest:n[r-1]};return t.hasTtl&&(i.ttl=parseInt(n[1],10)),i},p=function(t,e,n){let r=e||/\s/g,i=!1,o=!1,a=[],s=[],l=t.split("");for(let t=0;t<l.length;++t){let e=l[t],u=e.match(r);"'"!==e||o?'"'!==e||i?i||o||!u?a.push(e):a.length>0&&(s.push(a.join("")),a=[]):(!0===n&&a.push(e),o=!o):(!0===n&&a.push(e),i=!i)}return a.length>0?s.push(a.join("")):e&&s.push(""),s};const v={generate:function(t,e){const n=JSON.parse(JSON.stringify(t));return e=e||"; Zone: {zone}\n; Exported  (yyyy-mm-ddThh:mm:ss.sssZ): {datetime}\n\n{$origin}\n{$ttl}\n\n; SOA Record\n{name} {ttl}\tIN\tSOA\t{mname}{rname}(\n{serial} ;serial\n{refresh} ;refresh\n{retry} ;retry\n{expire} ;expire\n{minimum} ;minimum ttl\n)\n\n; NS Records\n{ns}\n\n; MX Records\n{mx}\n\n; A Records\n{a}\n\n; AAAA Records\n{aaaa}\n\n; CNAME Records\n{cname}\n\n; PTR Records\n{ptr}\n\n; TXT Records\n{txt}\n\n; SRV Records\n{srv}\n\n; SPF Records\n{spf}\n\n; CAA Records\n{caa}\n\n; DS Records\n{ds}\n\n",e=function(t,e){let n="";return void 0!==t&&(n+="$ORIGIN "+t),e.replace("{$origin}",n)}(n.$origin,e),e=function(t,e){let n="";return void 0!==t&&(n+="$TTL "+t),e.replace("{$ttl}",n)}(n.$ttl,e),e=function(t,e){let n=e;return t.name=t.name||"@",t.ttl=t.ttl||"",Object.keys(t).map((e=>{n=n.replace("{"+e+"}",t[e]+"\t")})),n}(n.soa,e),e=function(t,e){let n="";for(let e of t)n+=(e.name||"@")+"\t",e.ttl&&(n+=e.ttl+"\t"),n+="IN\tNS\t"+e.host+"\n";return e.replace("{ns}",n)}(n.ns||[],e),e=function(t,e){let n="";for(let e of t)n+=(e.name||"@")+"\t",e.ttl&&(n+=e.ttl+"\t"),n+="IN\tA\t"+e.ip+"\n";return e.replace("{a}",n)}(n.a||[],e),e=function(t,e){let n="";for(let e of t)n+=(e.name||"@")+"\t",e.ttl&&(n+=e.ttl+"\t"),n+="IN\tAAAA\t"+e.ip+"\n";return e.replace("{aaaa}",n)}(n.aaaa||[],e),e=function(t,e){let n="";for(let e of t)n+=(e.name||"@")+"\t",e.ttl&&(n+=e.ttl+"\t"),n+="IN\tCNAME\t"+e.alias+"\n";return e.replace("{cname}",n)}(n.cname||[],e),e=function(t,e){let n="";for(let e of t)n+=(e.name||"@")+"\t",e.ttl&&(n+=e.ttl+"\t"),n+="IN\tMX\t"+e.preference+"\t"+e.host+"\n";return e.replace("{mx}",n)}(n.mx||[],e),e=function(t,e){let n="";for(let e of t)n+=(e.name||"@")+"\t",e.ttl&&(n+=e.ttl+"\t"),n+="IN\tPTR\t"+e.host+"\n";return e.replace("{ptr}",n)}(n.ptr||[],e),e=function(t,e){let n="";for(let e of t)n+=(e.name||"@")+"\t",e.ttl&&(n+=e.ttl+"\t"),n+="IN\tTXT\t"+e.txt+"\n";return e.replace("{txt}",n)}(n.txt||[],e),e=function(t,e){let n="";for(let e of t)n+=(e.name||"@")+"\t",e.ttl&&(n+=e.ttl+"\t"),n+="IN\tSRV\t"+e.priority+"\t",n+=e.weight+"\t",n+=e.port+"\t",n+=e.target+"\n";return e.replace("{srv}",n)}(n.srv||[],e),e=function(t,e){let n="";for(let e of t)n+=(e.name||"@")+"\t",e.ttl&&(n+=e.ttl+"\t"),n+="IN\tSPF\t"+e.data+"\n";return e.replace("{spf}",n)}(n.spf||[],e),e=function(t,e){let n="";for(let e of t)n+=(e.name||"@")+"\t",e.ttl&&(n+=e.ttl+"\t"),n+=`IN\tCAA\t${e.flags}\t${e.tag}\t${e.value}\n`;return e.replace("{caa}",n)}(n.caa||[],e),(e=function(t,e){return(e=(e=e.replace("{zone}",t.$origin||t.soa.name||"")).replace("{datetime}",(new Date).toISOString())).replace("{time}",Math.round(Date.now()/1e3))}(n,e=function(t,e){let n="";for(let e of t)n+=(e.name||"@")+"\t",e.ttl&&(n+=e.ttl+"\t"),n+=`IN\tDS\t${e.key_tag}\t${e.algorithm}\t${e.digest_type}\t${e.digest}\n`;return e.replace("{ds}",n)}(n.ds||[],e))).replace(/\n{2,}/gim,"\n\n")},parse:function(t){return function(t){let n={},r=t.split("\n");for(let t of r){if(!t.trim())continue;let r=p(t,null,!0);if(t.startsWith("$ORIGIN"))n.$origin=r[1];else if(t.startsWith("$TTL"))n.$ttl=r[1];else{const p=e(t);switch(p.rrType){case"SOA":n.soa=i(r);break;case"TXT":n.txt=n.txt||[],n.txt.push(h(p,n.txt));break;case"NS":n.ns=n.ns||[],n.ns.push(o(p,n.ns));break;case"A":n.a=n.a||[],n.a.push(a(p,n.a));break;case"AAAA":n.aaaa=n.aaaa||[],n.aaaa.push(s(p,n.aaaa));break;case"CNAME":n.cname=n.cname||[],n.cname.push(l(p,n.cname));break;case"MX":n.mx=n.mx||[],n.mx.push(u(p,n.mx));break;case"PTR":n.ptr=n.ptr||[],n.ptr.push(c(p,n.ptr,n.$origin));break;case"SRV":n.srv=n.srv||[],n.srv.push(g(p,n.srv));break;case"SPF":n.spf=n.spf||[],n.spf.push(f(p,n.spf));break;case"CAA":n.caa=n.caa||[],n.caa.push(d(p,n.caa));break;case"DS":n.ds=n.ds||[],n.ds.push(m(p,n.ds))}}}return n}(t=function(t){let e=/SOA[\s\S]*?\([\s\S]*?\)/gim.exec(t);if(null!==e){let n=e[0].replace(/\s+/gm," ");return n=n.replace(/\(|\)/gim," "),t.substring(0,e.index)+n+t.substring(e.index+e[0].length)}return t}(t=function(t){const e=t.split("\n");let n="";for(const t of e){if(t.trim().startsWith(";"))continue;const e=p(t,";",!0);for(const t of e){if(n+=t,!t.endsWith("\\")){n+="\n";break}n+=";"}}return n}(t)))}};var y=n(617);function S(t,e){var n=parseInt(t,16).toString(2);n=n.slice(0,n.length-1);var r=parseInt(n.slice(0,3),2).toString(),i=parseInt(n.slice(3),2).toString(4);return(i=i.split("")).reverse(),i.push(r),i.join(".")+"."+e}function T(e){if(!t.currentS2Cells)return alert("Please generate S2 cells first"),null;var n=[];for(let i in t.currentS2Cells){var r=S(i,e);n.push(r)}return n}function I(t){t.reverse();let e=t[0];e=parseInt(e).toString(2).padStart(3,"0");let n=e;for(let e=1;e<t.length;e++)n+=parseInt(t[e]).toString(2).padStart(2,"0");return n+="1",parseInt(n,2).toString(16)}function b(t){var e=t.dnsSuffix;"."!=e[e.length-1]&&(e+=".");var n=T(e);if(!n)return null;var r=function(t){var e="",n=Math.min(...t.map((t=>t.length)));for(let i=0;i<n;i++){var r=t[0][t[0].length-i-1];if(!t.every((t=>t[t.length-i-1]==r)))break;e=r+e}return e}(n),i={$origin:r=r.slice(1),$ttl:t.TTL,soa:{mname:t.mname,rname:t.rname,serial:parseInt(Date.now()/1e3)%Math.pow(2,32),refresh:t.refresh,retry:t.retry,expire:t.expire,minimum:t.minimum}};i.ns=[{name:"@",host:t.mname}],i.txt=[];for(let e of n){var o=e.slice(0,e.length-r.length-1);i.txt.push({name:o,txt:JSON.stringify({type:t.rrType,data:t.rrData})})}return v.generate(i)}function w(){const t=b({dnsSuffix:document.getElementById("dns-suffix").value,mname:document.getElementById("mname").value,rname:document.getElementById("rname").value,refresh:document.getElementById("refresh").value,retry:document.getElementById("retry").value,expire:document.getElementById("expire").value,minimum:document.getElementById("minimum").value,rrType:document.getElementById("rr-type").value,rrData:document.getElementById("rr-data").value,TTL:document.getElementById("ttl").value});if(!t)return null;const e=document.createElement("a");return e.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),e.setAttribute("download","dns-zonefile.txt"),e.style.display="none",document.body.appendChild(e),e.click(),document.body.removeChild(e),t}!function(){var e=L.map("map").setView([40.44266,-79.94327],17);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(e),e.pm.addControls({drawMarker:!1,drawCircleMarker:!1,drawPolyline:!1,drawRectangle:!1,drawPolygon:!0,drawCircle:!1,drawText:!1});const n=new GeoSearch.OpenStreetMapProvider,r=new GeoSearch.GeoSearchControl({provider:n,style:"bar"});e.addControl(r),e.on("pm:drawstart",(n=>{t.currentPolygonLayer&&(e.removeLayer(t.currentPolygonLayer),t.currentPolygonLayer=null,t.currentPolygonCoords=null),t.s2CellsLayerGroup&&(e.removeLayer(t.s2CellsLayerGroup),t.s2CellsLayerGroup=null,t.currentS2Cells=null)})),e.on("pm:create",(e=>{if("Polygon"===e.shape){const n=e.layer,r=n.getLatLngs()[0];t.setCurrentPolygonCoords(r),t.currentPolygonLayer=n}})),t.map=e}(),document.getElementById("generate-s2-button").addEventListener("click",(()=>{!function(){if(t.currentPolygonCoords){var e=document.getElementById("max-s2-cells").value;if(e){var n=function(t,e){return GetS2CellsInRegion(e,1,30,t)}(e=parseInt(e),t.currentPolygonCoords),r=[];for(let t in n){var i=n[t];i=i.map((t=>[t.Lat,t.Lng]));var o=L.polygon(i,{color:"red",fillOpacity:.1,opacity:.5,weight:2});r.push(o)}t.s2CellsLayerGroup&&t.map.removeLayer(t.s2CellsLayerGroup),t.s2CellsLayerGroup=L.layerGroup(r),t.s2CellsLayerGroup.addTo(t.map),t.currentS2Cells=n}else alert("Please enter a number of cells")}else alert("Please draw a polygon first")}()}));const N=document.getElementById("dns-config-form");N.addEventListener("submit",(t=>{t.preventDefault(),N.checkValidity()?w():N.reportValidity()}));var C={getGeoDomainFromS2CellID:S,getGeoDomainsForCurrentCells:T,getS2TokensForLocation:function(t,e,n){var r=y.LocationToGeoDomain.getGeoDomains(t,e,n,"loc"),i=[];for(let t of r){let e=t.split(".");e=e.slice(0,e.length-1),i.push(I(e))}return i},getS2TokenFromDomainDigits:I,generateZoneFile:b,generateZoneFileFromDOM:w,globalState:t}})(),maputils=r})();