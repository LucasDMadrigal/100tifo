!function(n){var e={};function a(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=n,a.c=e,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)a.d(t,r,function(e){return n[e]}.bind(null,r));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="",a(a.s=0)}([function(n,e,a){"use strict";a.r(e);var t=()=>'\n    <div className="header_main">\n        <div className="header_logo">\n            <h1>\n                <a href="/">\n                    100tifi.co\n                </a>\n            </h1>\n        </div>\n        <div className="header_nav">\n            <a href="#/about/">\n            about\n            </a>\n        </div>\n    </div>\n    ';const r="https://rickandmortyapi.com/api/character/";var i=async n=>{const e=n?`${r}${n}`:r;try{const n=await fetch(e);return await n.json()}catch(n){console.log("Fetch error"+n)}};var c=()=>location.hash.slice().toLocaleLowerCase().split("/")[1]||"/";var s=()=>'\n    <div className="Error404">\n        <h2>Error 404</h2>\n    </div>\n    ';var o=n=>{if(n.length<=3){return"/"===n?n:"/:id"}return"/"+n};const l={"/":async()=>`\n      <div class="characters">\n      ${(await i()).results.map(n=>`\n          <article class="characters_item">\n            <a href="#/${n.id}/">\n              <img src="${n.image}" alt="${n.image}">\n              <h2>${n.name}</h2>\n            </a>\n          </article>\n        `).join("")}\n        \n      </div>\n    `,"/:id":async()=>{const n=c(),e=await i(n);return`\n    <div className="characters_inner">\n\n        <article className="characters_card">\n            <img src="${e.image}" alt="image"/>\n            <h2>${e.name}</h2>\n        </article>\n        <article className="characters_card">\n            <h3>\n                Episodes: <span>${e.episode.length}</span>\n            </h3>\n            <h3>\n                Status: <span>${e.status}</span>\n            </h3>\n            <h3>\n                Species: <span>${e.spacies}</span>\n            </h3>\n            <h3>\n                Gender: <span>${e.gender}</span>\n            </h3>\n            <h3>\n                Origin: <span>${e.origin.name}</span>\n            </h3>\n            <h3>\n                Last Location: <span>${e.location.name}</span>\n            </h3>\n        </article>\n    </div>\n    `},"/contact":"contact"};var d=async()=>{const n=document.getElementById("header"),e=document.getElementById("content");n.innerHTML=await t();let a=c(),r=await o(a);const i=l[r]?l[r]:s;e.innerHTML=await i()};window.addEventListener("load",d),window.addEventListener("hashchange",d)}]);