import{S as u,i}from"./assets/vendor-B2mb6eXk.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="49480217-2522e2603317fe0a16a9eaac0",f="https://pixabay.com/api/";async function p(a){const o=new URLSearchParams({key:d,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"});try{const r=await fetch(`${f}?${o}`);if(!r.ok)throw new Error("Network response was not ok");return await r.json()}catch(r){throw r}}function m(){const a=document.querySelector(".gallery");a.innerHTML=""}function y(a){const o=document.querySelector(".gallery"),r=a.map(s=>`
    <li class="gallery-item">
      <a href="${s.largeImageURL}">
        <img class="gallery-image" src="${s.webformatURL}" alt="${s.tags}" />
        <div class="info">
          <p>Likes ${s.likes}</p>
          <p>Views ${s.views}</p>
          <p>Comments ${s.comments}</p>
          <p>Downloads ${s.downloads}</p>
        </div>
      </a>
    </li>
  `).join("");o.insertAdjacentHTML("beforeend",r)}const l=document.querySelector(".form"),c=document.querySelector(".loader"),h=new u(".gallery a",{captionsData:"alt",captionDelay:250});l.addEventListener("submit",async a=>{a.preventDefault();const o=a.target.elements.searchQuery.value.trim();if(!o){i.error({message:"Please enter a search query!",position:"topLeft"});return}m(),c.classList.remove("hidden");try{const r=await p(o);if(c.classList.add("hidden"),r.hits.length===0){i.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topLeft"});return}y(r.hits),h.refresh()}catch(r){c.classList.add("hidden"),i.error({message:"An error occurred. Please try again.",position:"topLeft"}),console.error(r)}l.reset()});
//# sourceMappingURL=index.js.map
