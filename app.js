const button = document.getElementById("btn");
const container = document.querySelector(".container");
const crossIcon = document.querySelector(".fa-regular")

button.addEventListener("click", () =>{
    container.classList.add("show");
    document.body.style.background = "rgb(237, 226, 226)";
    container.style.background = "#fff"
    button.style.display = "none"
})

crossIcon.addEventListener("click", normal)

// document.body.addEventListener("click", normal)

function normal (){
    container.classList.remove("show");
    button.style.display = "block";
    document.body.style.background = "#fff";
}