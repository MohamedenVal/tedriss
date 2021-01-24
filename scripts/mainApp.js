// 
const contentPar = document.querySelector(".hidden-part");
const showBtn = document.querySelector(".show-button");

// 

showBtn.addEventListener("click", showMore);
//
function showMore(e) {
    e.preventDefault();
    contentPar.classList.toggle("show");
    // contentPar.style = "display: block;";
    console.log("todo bem!");
};