/* =================================
   Yalla Nanhad
   Articles JavaScript
================================= */


document.addEventListener("DOMContentLoaded",()=>{


/* ===============================
   البحث في المقالات
================================ */


const searchInput =
document.querySelector(".article-search input");


const articles =
document.querySelectorAll(".article-box");



if(searchInput){


searchInput.addEventListener("input",()=>{


let value =
searchInput.value.toLowerCase();



articles.forEach(article=>{


let title =
article.querySelector("h3")
.innerText
.toLowerCase();



let text =
article.querySelector("p")
.innerText
.toLowerCase();



if(
title.includes(value) ||
text.includes(value)
){


article.parentElement.style.display="block";


}else{


article.parentElement.style.display="none";


}



});


});


}





/* ===============================
   تصنيف المقالات
================================ */


const categoryButtons =
document.querySelectorAll(
".categories-scroll button"
);



categoryButtons.forEach(button=>{


button.addEventListener("click",()=>{


categoryButtons.forEach(btn=>{

btn.classList.remove("active");

});


button.classList.add("active");



let category =
button.innerText.trim();



articles.forEach(article=>{


let articleCategory =
article.querySelector("span")
.innerText
.trim();



if(
category==="الكل" ||
category===articleCategory
){


article.parentElement.style.display="block";


}else{


article.parentElement.style.display="none";


}



});


});


});






/* ===============================
   تأثير الظهور عند التمرير
================================ */


const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";


}


});


},
{
threshold:.15
}

);



articles.forEach(article=>{


article.style.opacity="0";

article.style.transform=
"translateY(40px)";

article.style.transition=
".6s ease";


observer.observe(article);


});






/* ===============================
   مشاركة المقال
================================ */


const shareButtons =
document.querySelectorAll(
".share-btn"
);



shareButtons.forEach(button=>{


button.addEventListener("click",()=>{


if(navigator.share){


navigator.share({

title:
document.title,

url:
window.location.href

});


}else{


alert(
"يمكنك نسخ رابط المقال ومشاركته"
);


}


});


});




});
