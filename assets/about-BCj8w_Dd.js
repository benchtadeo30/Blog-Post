import"./modulepreload-polyfill-B5Qt9EMX.js";import{x as h,d as g}from"./marked.esm-CHm3TNXY.js";const w=new URL(window.location.href),i=parseInt(w.searchParams.get("id"));if(i){const t=JSON.parse(localStorage.getItem("posts")),e=t.find(n=>n.id===i),c=document.querySelector("header");console.log(e),document.querySelector(".post .post-details .post-title h1").textContent=e.postTitle,document.querySelector(".post .post-details .post-title p").textContent=`By ${e.postAuthor}`,document.querySelector(".post .post-details .post-date").textContent=e.postDate,document.querySelector(".post .post-content").innerHTML=h(g.parse(e.postContent)),c.addEventListener("click",n=>{if(n.target.tagName==="BUTTON"){const s=document.createElement("div");s.className="newpost-container",s.innerHTML=`
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
    `,document.body.querySelector("script").insertAdjacentElement("beforebegin",s);const d=document.querySelector(".newpost-container .newpost"),p=document.getElementById("title"),u=document.getElementById("author");d.addEventListener("click",o=>{if(o.target.tagName==="BUTTON"&&o.target.textContent.trim()==="Cancel"&&o.target.closest(".newpost-container").remove(),o.target.tagName==="BUTTON"&&o.target.textContent.trim()==="Done"){const r=p.value.trim(),l=u.value.trim(),a=new Date,m=`${a.toLocaleDateString("en-us",{month:"long"})} ${a.getDate()}, ${a.getFullYear()}`;r!==""&&l!==""?(t.push({id:t.length>0?t[t.length-1].id+1:1,postTitle:r,postDate:m,postContent:"",postAuthor:l}),localStorage.setItem("posts",JSON.stringify(t)),displayPosts(),window.location.href=`./editor.html?id=${t[t.length-1].id}`):alert("Both fields cannot be empty. Please try again")}})}})}else alert("Please choose a post or create new post first."),window.location.href="./index.html";
