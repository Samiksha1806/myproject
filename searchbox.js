const searchWrapper = document.querySelector(".search-input");
const inputbox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");



inputbox.addEventListener("keyup", ()=>{
    searchWrapper.classList.add("active");
});

function remove(){
    searchWrapper.classList.remove("active");
}






