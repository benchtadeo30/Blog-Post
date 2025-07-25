import"./modulepreload-polyfill-B5Qt9EMX.js";const c=document.querySelector(".blogs"),m=document.querySelector("header"),n=JSON.parse(localStorage.getItem("posts"))||[{id:1,postTitle:"How to Learn JavaScript Fast",postDate:"June 30, 2025",postContent:"",postAuthor:"Dave Tadeo"},{id:2,postTitle:"Markdown Tips and Tricks",postDate:"June 29, 2025",postContent:"",postAuthor:"Bench Tadeo"}];console.log(n);function d(){c.innerHTML="",n.forEach(t=>{const a=document.createElement("div");a.className="post",a.dataset.id=t.id,a.innerHTML=`
    <div class="post-details">
          <div class="post-title">${t.postTitle}</div>
          <div class="post-author">Posted by ${t.postAuthor}</div>
          <div class="post-date">${t.postDate}</div>
        </div>
    <a href="./post.html?id=${t.id}">Read Post</a>
    `,c.appendChild(a)}),localStorage.setItem("posts",JSON.stringify(n))}d();c.addEventListener("click",t=>{const a=parseInt(t.target.closest(".post").getAttribute("data-id"))||parseInt(t.target.getAttribute("data-id")),l=document.querySelectorAll(".blogs .post");if((t.target.matches(".post")||t.target.closest(".post").className==="post"&&t.target.tagName!=="SPAN")&&l.forEach(o=>{const i=parseInt(o.dataset.id);if(a===i)if(o.classList.toggle("changeBackground"),o.classList.contains("changeBackground")){const e=document.createElement("span");e.className="material-symbols-outlined",e.textContent="delete";const s=document.createElement("span");s.className="material-symbols-outlined",s.textContent="edit",o.append(e,s)}else o.querySelectorAll("span").forEach(e=>e.remove());else o.classList.contains("changeBackground")&&o.classList.remove("changeBackground"),o.contains(o.querySelector("span"))&&o.querySelectorAll("span").forEach(e=>e.remove())}),t.target.tagName==="SPAN"&&t.target.textContent.trim()==="delete")if(confirm("Are you sure you want to delete this post?")){const i=n.findIndex(e=>e.id===a);n.splice(i,1),d()}else alert("Delete has been cancelled.");t.target.tagName==="SPAN"&&t.target.textContent.trim()==="edit"&&(window.location.href=`./editor.html?id=${a}`)});m.addEventListener("click",t=>{if(t.target.tagName==="BUTTON"){const a=document.createElement("div");a.className="newpost-container",a.innerHTML=`
    <div class="newpost">
    <div class="newpost-details">
    <h3>Create New Post</h3>
    <div class="newpost-input">
    <label for="title">Title:</label>
    <input type="text" placeholder="Enter title" id="title">
    <label for="author">Author:</label>
    <input type="text" placeholder="Enter author name" id="author">
    </div>
    <div class="post-btn">
      <button>Cancel</button>
      <button>Done</button>
    </div>
    </div>
    </div>
    `,document.body.querySelector("script").insertAdjacentElement("beforebegin",a);const l=document.querySelector(".newpost-container .newpost"),o=document.getElementById("title"),i=document.getElementById("author");l.addEventListener("click",e=>{if(e.target.tagName==="BUTTON"&&e.target.textContent.trim()==="Cancel"&&e.target.closest(".newpost-container").remove(),e.target.tagName==="BUTTON"&&e.target.textContent.trim()==="Done"){const s=o.value.trim(),p=i.value.trim(),r=new Date,u=`${r.toLocaleDateString("en-us",{month:"long"})} ${r.getDate()}, ${r.getFullYear()}`;s!==""&&p!==""?(n.push({id:n.length>0?n[n.length-1].id+1:1,postTitle:s,postDate:u,postContent:"",postAuthor:p}),localStorage.setItem("posts",JSON.stringify(n)),d(),window.location.href=`./editor.html?id=${n[n.length-1].id}`):alert("Both fields cannot be empty. Please try again")}})}});
