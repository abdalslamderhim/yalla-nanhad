/* ===================================
   Yalla Nanhad
   Library JavaScript
=================================== */

document.addEventListener("DOMContentLoaded", () => {


/* ================================
   البحث عن الكتب
================================ */

const searchInput = document.querySelector(
    ".library-search input"
);

const books = document.querySelectorAll(
    ".library-card"
);


if(searchInput){

searchInput.addEventListener("input", function(){

    const value = this.value.toLowerCase();


    books.forEach(book => {

        const title = book
        .querySelector("h5")
        .innerText
        .toLowerCase();


        const author = book
        .querySelector("p")
        .innerText
        .toLowerCase();


        if(
            title.includes(value) ||
            author.includes(value)
        ){

            book.parentElement.style.display="block";

        }else{

            book.parentElement.style.display="none";

        }


    });


});


}



/* ================================
   فلترة التصنيفات
================================ */


const categoryButtons =
document.querySelectorAll(
".category-list button"
);


categoryButtons.forEach(button=>{


button.addEventListener("click",()=>{


categoryButtons.forEach(btn=>{

btn.classList.remove("active");

});


button.classList.add("active");


const category =
button.innerText.trim();



books.forEach(book=>{


const bookCategory =
book.querySelector(".category")
.innerText.trim();



if(
category==="الكل" ||
category===bookCategory
){

book.parentElement.style.display="block";


}else{


book.parentElement.style.display="none";


}



});


});


});



/* ================================
   المفضلة
================================ */


const favoriteButtons =
document.querySelectorAll(
".favorite-btn"
);



favoriteButtons.forEach((button,index)=>{


let saved =
localStorage.getItem(
"favorite-book-"+index
);



if(saved){

button.classList.add("liked");

button.innerHTML =
'<i class="bi bi-heart-fill"></i>';

}



button.addEventListener("click",()=>{


button.classList.toggle("liked");


if(
button.classList.contains("liked")
){


localStorage.setItem(
"favorite-book-"+index,
"true"
);


button.innerHTML =
'<i class="bi bi-heart-fill"></i>';


}else{


localStorage.removeItem(
"favorite-book-"+index
);


button.innerHTML =
'<i class="bi bi-heart"></i>';


}



});


});



/* ================================
   تأثير ظهور الكتب
================================ */


const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add(
"show-book"
);


}


});


},
{
threshold:.2
}

);



books.forEach(book=>{

observer.observe(book);

});



/* ================================
   أزرار القراءة
================================ */


const readButtons =
document.querySelectorAll(
".library-actions .btn-success"
);


readButtons.forEach(button=>{


button.addEventListener("click",(e)=>{


console.log(
"فتح صفحة الكتاب"
);


// لاحقاً:
// الانتقال إلى book.html
// مع ID الكتاب من قاعدة البيانات


});


});



/* ================================
   تحميل PDF
================================ */


const downloadButtons =
document.querySelectorAll(
".library-actions .btn-outline-success"
);



downloadButtons.forEach(button=>{


button.addEventListener("click",(e)=>{


e.preventDefault();


alert(
"سيبدأ تحميل الكتاب عند ربط الملفات مع قاعدة البيانات."
);



});


});



});
