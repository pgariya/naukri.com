let store= JSON.parse(localStorage.getItem("signup_arr"))

document.querySelector("button").addEventListener("click", login_page)

function login_page(){

    let is_email = document.querySelector("#l_email").value
    let is_password= document.querySelector("#l_password").value


let flag = true;

for(let i=0 ; i<store.length ; i++){

    if (( store[i].email == is_email ) && ( store[i].password == is_password ))
    {  flag = false  }
}

if(flag == true){
    // console.log("iiii")
    alert("incorrect email or password")
}
else{
    console.log("cccc")
    // alert("successfully loged in")

    window.location.href ="navbar.html"
}

}