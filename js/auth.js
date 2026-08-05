Enter/* =================================
   Yalla Nanhad
   Authentication JavaScript
================================= */


document.addEventListener("DOMContentLoaded",()=>{



/* ===============================
   Register
================================ */


const registerForm =
document.getElementById(
"registerForm"
);



if(registerForm){


registerForm.addEventListener(
"submit",
(e)=>{


e.preventDefault();



const name =
document.getElementById("name").value;



const email =
document.getElementById("registerEmail").value;



const password =
document.getElementById("registerPassword").value;



const confirm =
document.getElementById("confirmPassword").value;



if(password !== confirm){


alert(
"كلمتا المرور غير متطابقتين"
);


return;

}



const user={


name:name,

email:email,

password:password,

favorites:[],

books:[],

articles:[],

podcasts:[]



};



localStorage.setItem(

"yallaUser",

JSON.stringify(user)

);



alert(
"تم إنشاء الحساب بنجاح"
);



window.location.href =
"login.html";



});


}







/* ===============================
   Login
================================ */


const loginForm =
document.getElementById(
"loginForm"
);



if(loginForm){


loginForm.addEventListener(
"submit",
(e)=>{


e.preventDefault();



const email =
document.getElementById("email").value;



const password =
document.getElementById("password").value;



const savedUser =
JSON.parse(
localStorage.getItem(
"yallaUser"
)
);



if(
savedUser &&
savedUser.email===email &&
savedUser.password===password
){



localStorage.setItem(

"loggedIn",

"true"

);



localStorage.setItem(

"currentUser",

JSON.stringify(savedUser)

);



alert(
"مرحباً بك في يلا ننهض"
);



window.location.href =
"profile.html";



}else{


alert(
"بيانات الدخول غير صحيحة"
);



}



});


}







/* ===============================
   Check Login
================================ */


function checkAuth(){


const protectedPages=[

"profile.html",

"dashboard.html"

];



const page =
window.location.pathname;



protectedPages.forEach(item=>{


if(
page.includes(item) &&
localStorage.getItem(
"loggedIn"
)!=="true"
){


window.location.href =
"login.html";


}


});


}



checkAuth();







});
