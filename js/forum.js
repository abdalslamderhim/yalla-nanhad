/* =================================
   Yalla Nanhad
   Forum JavaScript
================================= */


document.addEventListener("DOMContentLoaded",()=>{


const postsContainer =
document.querySelector(".forum-posts .col-lg-8");



const publishBtn =
document.querySelector(".publish-btn");


const postInput =
document.querySelector(".user-area input");



let posts =
JSON.parse(
localStorage.getItem("forumPosts")
) || [];





/* ===============================
   نشر منشور جديد
================================ */


if(publishBtn){


publishBtn.addEventListener("click",()=>{


let content =
postInput.value.trim();



if(content===""){

alert("اكتب محتوى المنشور أولاً");

return;

}



let newPost={


id:Date.now(),


user:"عضو جديد",


time:"الآن",


content:content,


likes:0,


comments:[]



};



posts.unshift(newPost);



savePosts();


renderPosts();



postInput.value="";



});



}







/* ===============================
   عرض المنشورات
================================ */


function renderPosts(){


if(!postsContainer) return;



postsContainer.innerHTML="";



posts.forEach(post=>{


let commentsHTML="";


post.comments.forEach(comment=>{


commentsHTML += `

<div class="comment-item">

<strong>
${comment.user}
</strong>

<p>
${comment.text}
</p>

</div>

`;



});





postsContainer.innerHTML += `


<div class="post-card">


<div class="post-header">


<img src="assets/images/avatar.png">


<div>

<h5>
${post.user}
</h5>


<span>
${post.time}
</span>


</div>


</div>




<h3>
${post.content}
</h3>



<div class="post-footer">


<button class="like-btn"
data-id="${post.id}">


<i class="bi bi-heart"></i>

<span>
${post.likes}
</span>


</button>




<button class="comment-toggle"
data-id="${post.id}">


<i class="bi bi-chat"></i>

تعليق


</button>



<button>

<i class="bi bi-share"></i>

مشاركة

</button>



</div>




<div class="comments-area"
data-comments="${post.id}">


${commentsHTML}



<input type="text"
class="comment-input"
data-id="${post.id}"
placeholder="اكتب تعليقاً...">


</div>



</div>


`;



});



activateEvents();



}






/* ===============================
   الإعجاب
================================ */


function activateEvents(){


document.querySelectorAll(
".like-btn"
)
.forEach(button=>{


button.addEventListener("click",()=>{


let id =
Number(button.dataset.id);



let post =
posts.find(
p=>p.id===id
);



post.likes++;


button.classList.add("liked");


savePosts();


renderPosts();



});


});






/* ===============================
   التعليقات
================================ */


document.querySelectorAll(
".comment-input"
)
.forEach(input=>{


input.addEventListener(
"keypress",
(e)=>{


if(e.key==="Enter"){


let text =
input.value.trim();



if(text==="")
return;



let id =
Number(input.dataset.id);



let post =
posts.find(
p=>p.id===id
);



post.comments.push({

user:"عضو",

text:text

});



savePosts();


renderPosts();



}



});


});






/* ===============================
   مشاركة المنشور
================================ */


document.querySelectorAll(
".post-footer button:last-child"
)
.forEach(button=>{


button.addEventListener(
"click",
()=>{


if(navigator.share){


navigator.share({

title:"منشور من يلا ننهض",

url:window.location.href


});


}else{


navigator.clipboard.writeText(
window.location.href
);


alert(
"تم نسخ الرابط"
);


}



});


});



}







/* ===============================
   حفظ البيانات
================================ */


function savePosts(){


localStorage.setItem(

"forumPosts",

JSON.stringify(posts)

);


}





/* تحميل البيانات */


renderPosts();



});
