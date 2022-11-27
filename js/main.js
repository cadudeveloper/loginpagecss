/*
bi-eye-fill
bi-eye-slash-fill
*/

const show = document.querySelectorAll(".bi")
const inputPass = document.querySelector(".pass")

show[0].addEventListener("click", function(){
    if(inputPass.type == "password"){
        show[0].classList.add("hide")
        show[1].classList.add("show")
        inputPass.type = "text"
    }
})

show[1].addEventListener("click", function(){
    if(inputPass.type == "text"){
        show[0].classList.remove("hide")
        show[1].classList.remove("show")
        inputPass.type = "password"
    }
})