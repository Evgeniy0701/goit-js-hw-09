import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */let a={email:"",message:""};const r=document.querySelector(".feedback-form");(()=>{try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e===null)return;a=e;for(const t in e)r.elements[t]&&(r.elements[t].value=e[t])}catch(e){console.error("Error parsing storage data:",e)}})();const s=e=>{const{value:t,name:o}=e.target;a[o]=t.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(a))},l=e=>{if(e.preventDefault(),Object.values(a).some(o=>o==="")){alert("Fill please all fields");return}console.log("Submitted data:",a),r.reset(),localStorage.removeItem("feedback-form-state"),a={email:"",message:""}};r.addEventListener("input",s);r.addEventListener("submit",l);
//# sourceMappingURL=2-form.js.map
