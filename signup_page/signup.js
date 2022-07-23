document.querySelector("form").addEventListener("submit",signup_page)

let arr=JSON.parse(localStorage.getItem("signup_arr"))|| []
function signup_page(){

event.preventDefault()
let p_email= document.querySelector("#email").value
let p_name= document.querySelector("#name").value
let p_password= document.querySelector("#pass").value
let p_number= document.querySelector("#num").value

let obj={
    number: p_number,
    email:p_email,
    name:p_name,
    password:p_password
}

arr.push(obj)
 console.log(arr)


JSON.parse(localStorage.getItem("signup_obj"))

}