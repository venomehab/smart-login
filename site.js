// all inputs
var user =document.querySelector(".user");
var email =document.querySelector(".email");
var loginEmail =document.querySelector(".login-email");
var loginPass =document.querySelector(".login-pass");
var pass =document.querySelector(".pass");
// important variables
var submit =document.querySelector(".submit");
var login =document.querySelector(".login");
var par =document.querySelector(".par");
var username =document.querySelector("#username");
var logout =document.querySelector("#logout");
 
// signup page
var allarry = [];
if(localStorage.getItem("allarry") ==null ){
    allarry=[];
        }else{
           allarry = JSON.parse(localStorage.getItem("allarry"));
        }
function savedata(){
if(user.value =="" || email.value =="" || pass.value ==""){
   par.innerText=" ALL inputs required";
   par.classList.add("red");
}
else if(user.value !== null && email.value !== null  && pass.value !== null && vaildmail()){
    var elemnt ={
        user:user.value,
        email:email.value,
        pass:pass.value,
    }
par.innerText= "success";
par.classList.remove("red");
par.classList.add("green");
allarry.push(elemnt); 
localStorage.setItem("allarry",JSON.stringify(allarry));
window.location.href="login.html";
}else{
    par.innerText="incoreect email";
par.classList.add("red");
}
}
if(submit !=null){
    submit.addEventListener('click',function(){
    savedata();
    });
}  
if(login !=null){
    login.addEventListener('click',function(){
        checkperson(); 
    });
}  
// login page
function checkperson(){
    if(loginEmail.value != "" || loginPass.value != ""){
        par.innerText= "";
        if(check()){
            location.href="home.html";
        }else{
            par.innerText=" incorrect is email or password";
            par.classList.add("red");
        }
        }else{
        par.innerText=" ALL inputs required";
        par.classList.add("red");
    }
}
function check(){
    for(var i =0;i < allarry.length;i++){
        if(allarry[i].email.toLowerCase() === loginEmail.value.toLowerCase() && allarry[i].pass.toLowerCase() === loginPass.value.toLowerCase()){
           localStorage.setItem("name",JSON.stringify(allarry[i].user))
          return true;
        }
    }
}
function vaildmail(){
    var emailregex =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
    var testing =emailregex.test(email.value);
if(testing===true){
 email.style.color="green";
  return true;
}else{
    return false
}
}
function checksub(){
    for(var i =0;i < allarry.length;i++){
        if(allarry[i].email.toLowerCase() === email.value.toLowerCase()){
            par.innerText=" email is exist";
            par.classList.add("red");
        }
    }
}
// home page
function adname(){
    var usernam=JSON.parse(localStorage.getItem("name"));
    username.innerHTML=`Welcome ${usernam}`;
}
if(logout !=null){
    logout.addEventListener('click',function(){
    location.href="login.html"
    localStorage.removeItem("name")
})
}