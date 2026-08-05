/* =================================
   Yalla Nanhad
   Article JavaScript
================================= */


document.addEventListener("DOMContentLoaded",()=>{


/* ===============================
   مشاركة المقال
================================ */


const shareBtn =
document.querySelector(".share-btn");



if(shareBtn){


shareBtn.addEventListener("click",()=>{


const shareData={

title:document.title,

text:
"اقرأ هذا المقال في منصة يلا ننهض",

url:
window.location.href

};



if(navigator.share){


navigator.share(shareData)
.then(()=>{

console.log("تمت المشاركة");

});


}else{


navigator.clipboard.writeText(
window.location.href
);


alert(
"تم نسخ رابط المقال"
);


}



});


}





/* ===============================
   وقت القراءة التلقائي
================================ */


const article =
document.querySelector(
".article-content-page article"
);



const timeElement =
document.querySelector(
".article-header .bi-clock"
);



if(article && timeElement){


const words =
article.innerText
.trim()
.split(/\s+/)
.length;



const minutes =
Math.ceil(words / 200);



timeElement.parentElement.innerHTML =

`<i class="bi bi-clock"></i>
${minutes} دقائق قراءة`;



}






/* ===============================
   حفظ آخر قراءة
================================ */


window.addEventListener(
"scroll",
()=>{


localStorage.setItem(
"lastArticlePosition",
window.scrollY
);


});




const savedPosition =
localStorage.getItem(
"lastArticlePosition"
);



if(savedPosition){


window.scrollTo({

top:Number(savedPosition),

behavior:"smooth"

});


}




/* ===============================
   ظهور المحتوى أثناء القراءة
================================ */


const paragraphs =
document.querySelectorAll(
".article-content-page p, 
.article-content-page h2"
);



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add(
"visible"
);


}


});


},
{
threshold:.2
}

);



paragraphs.forEach(item=>{


item.classList.add(
"reading-item"
);


observer.observe(item);


});



});
