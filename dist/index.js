(()=>{"use strict";var e,t={3276:()=>{var e=document.querySelector(".profileEdit__container"),t=document.querySelector(".popup"),o=(document.querySelector(".popup__cross"),document.querySelector(".popup__inframe")),r=document.querySelectorAll(".ivents__item"),n={"001":"https://www.youtube.com/embed/dgQX4LSwpoE","002":"https://www.youtube.com/embed/Ohl8mZKVTlk","003":"https://www.youtube.com/embed/t-OkWxKsH_4","004":"https://www.youtube.com/embed/V9N35ttYWxY","005":"https://www.youtube.com/embed/XOMp2oexA_Q","006":"https://www.youtube.com/embed/XOMp2oexA_Q"};r.forEach((function(e){e.onclick=function(){console.log(o.src),o.src=n[e.id],t.style.display="flex"}})),t.addEventListener("click",(function(e){e.currentTarget!==o&&(t.style.display="none",o.src="./imgs/imgs_main/Blackflag.png")})),e.addEventListener("submit",(function(e){e.preventDefault(),console.log("test")}))}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var c=o[e]={exports:{}};return t[e](c,c.exports,r),c.exports}r.m=t,e=[],r.O=(t,o,n,c)=>{if(!o){var u=1/0;for(p=0;p<e.length;p++){for(var[o,n,c]=e[p],s=!0,i=0;i<o.length;i++)(!1&c||u>=c)&&Object.keys(r.O).every((e=>r.O[e](o[i])))?o.splice(i--,1):(s=!1,c<u&&(u=c));if(s){e.splice(p--,1);var l=n();void 0!==l&&(t=l)}}return t}c=c||0;for(var p=e.length;p>0&&e[p-1][2]>c;p--)e[p]=e[p-1];e[p]=[o,n,c]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,c,[u,s,i]=o,l=0;if(u.some((t=>0!==e[t]))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(i)var p=i(r)}for(t&&t(o);l<u.length;l++)c=u[l],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(p)},o=self.webpackChunk=self.webpackChunk||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),r.O(void 0,[202],(()=>r(1202)));var n=r.O(void 0,[202],(()=>r(3276)));n=r.O(n)})();