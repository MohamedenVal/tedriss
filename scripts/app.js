// variables declaration 

const dropDown = document.querySelector(".circle-content");

// console.log(showBtn);

// Event listeners

dropDown.addEventListener("click", showContent);


// function declaration 

function showContent(event){
    /* this function will make any information about the title show up under the label */

    let element = document.querySelector(".hcj-content");
    element.style = "display: block;";
    element.classList.toggle("appear");
}