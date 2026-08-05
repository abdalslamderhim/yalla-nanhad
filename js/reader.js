/* =================================
   Yalla Nanhad
   Reader JavaScript
================================= */


document.addEventListener("DOMContentLoaded",()=>{


const readerText =
document.getElementById("readerText");


const increaseBtn =
document.getElementById("increaseFont");


const decreaseBtn =
document.getElementById("decreaseFont");


const modeBtn =
document.getElementById("readerMode");



/* ================================
   حجم الخط
================================ */


let fontSize =
localStorage.getItem("readerFontSize") || 22;



readerText.style.fontSize =
fontSize + "px";



increaseBtn.addEventListener("click",()=>{


fontSize = Number(fontSize) + 2;


if(fontSize > 36){

fontSize = 36;

}


readerText.style.fontSize =
fontSize + "px";


localStorage.setItem(
"readerFontSize",
fontSize
);


});





decreaseBtn.addEventListener("click",()=>{


fontSize = Number(fontSize) - 2;


if(fontSize < 14){

fontSize = 14;

}


readerText.style.fontSize =
fontSize + "px";


localStorage.setItem(
"readerFontSize",
fontSize
);


});





/* ================================
   الوضع الليلي للقراءة
================================ */


const savedMode =
localStorage.getItem(
"readerMode"
);



if(savedMode==="dark"){


document.body.classList.add(
"reader-dark"
);


modeBtn.innerHTML =
'<i class="bi bi-sun-fill"></i>';

}




modeBtn.addEventListener("click",()=>{


document.body.classList.toggle(
"reader-dark"
);



const dark =
document.body.classList.contains(
"reader-dark"
);



localStorage.setItem(
"readerMode",
dark ? "dark" : "light"
);



modeBtn.innerHTML = dark

?
'<i class="bi bi-sun-fill"></i>'

:

'<i class="bi bi-moon-stars"></i>';



});





/* ================================
   حفظ موضع القراءة
================================ */


window.addEventListener(
"scroll",
()=>{


localStorage.setItem(
"readingPosition",
window.scrollY
);


});



const position =
localStorage.getItem(
"readingPosition"
);



if(position){


window.scrollTo({

top:Number(position),

behavior:"smooth"

});


}





/* ================================
   ملء الشاشة
================================ */


const fullScreenBtn =
document.querySelector(
".reader-bottom button:last-child"
);



if(fullScreenBtn){


fullScreenBtn.addEventListener(
"click",
()=>{


if(!document.fullscreenElement){


document.documentElement.requestFullscreen();


}else{


document.exitFullscreen();


}


});


}




});
