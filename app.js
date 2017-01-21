var signbtn = document.getElementsByClassName("btn")[0];
var smodal = document.getElementById("signupModal");
var clsbtn = document.getElementsByClassName("btn")[3];

signbtn.onclick = function() {
    smodal.style.display = "block";
}
clsbtn.onclick = function(){
    smodal.style.display = "none";
}


var users = [];



function signUp(){
    var name = document.getElementById("usrName").value;
    var email = document.getElementById("usrEmail").value;
    var pass = document.getElementById("usrPass").value;
    var p = document.getElementById("demo");
    if(name == ""){
        p.innerHTML = "You must Enter your Name";
        
    }
    else if(email == ""){
        p.innerHTML = "You must Enter your Email";
    }
    
    else if( email.indexOf("@") == "-1" || email.lastIndexOf(".com") == "-1"){
        p.innerHTML = "Enter valid Email";
    }
    else if(pass == ""){
        p.innerHTML = "You must Enter your Password";
    }
    else if(pass.length < 8){
        p.innerHTML = "Your Password is too short";
    }
    else{
        var newUser = {
            userName : name ,
            userPass : pass ,
            userEmail : email
        }
        users.push(newUser);
        localStorage.setItem("usersSign", JSON.stringify(users));  
        smodal.style.display = "none";
        lmodal.style.display = "block";
    }
}







var loginbtn = document.getElementsByClassName('btn')[1];
var lmodal = document.getElementById('loginModal');
var lcls = document.getElementsByClassName('btn4')[1];
loginbtn.onclick = function(){
    lmodal.style.display = "block";
}
lcls.onclick = function(){
    lmodal.style.display = "none";
}





function logIn(){
    var name = document.getElementById("userName").value;
    var email = document.getElementById("userEmail").value;
    var pass = document.getElementById("userPass").value;
    var p = document.getElementById("ldemo");
    var loginUser = {
            usrName : name ,
            usrPass : pass ,
            usrEmail : email
        }
    var usersSigned  = JSON.parse(localStorage.getItem("usersSign"));
    // console.log(usersSigned);
    for(var i = 0; i < usersSigned.length; i++){
        
        if(usersSigned[i].userName == loginUser.usrName && usersSigned[i].userPass == loginUser.usrPass && usersSigned[i].userEmail == loginUser.usrEmail){
            alert("Log In Successfully...!");
        }
        else{
            p.innerHTML = "YOu Entered Wrong Details.";
            // lmodal.style.display = "none";
        }
    }
    
}