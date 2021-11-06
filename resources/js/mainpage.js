let element = document.getElementsByClassName("link");

function changeBackground(event) {
    event.target.style.backgroundColor = "#2C2828";
}

function changeBack(event) {
    event.target.style.backgroundColor = "#3500d3";
}

for(let i = 0; i < element.length; i++){
    element[i].addEventListener("mouseenter", changeBackground);
    element[i].addEventListener("mouseleave", changeBack);
};


