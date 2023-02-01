

function login(){

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if ( username == "admin" && password == "1234"){
        window.location ="admin.html";
        return false;
    }

    if ( username == "user" && password =="4321"){
        window.location = "user.html";
        return false;
    }


    if( username !== "" && password !== ""){
        alert('password or username fleed plz time again')
        return false;
    }
    else{
        alert('plasce Enter Your username and password');

    }
    
}