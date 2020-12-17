let togg1 = document.getElementById("click");
let image1 = document.getElementById("images1");
let image2 = document.getElementById("images2");
let image3 = document.getElementById("images3");
let image4 = document.getElementById("images4");
let image5 = document.getElementById("images5");
let image6 = document.getElementById("images6");
let desc1 = document.getElementById("desc1");
let desc2 = document.getElementById("desc2");
let desc3 = document.getElementById("desc3");
let desc4 = document.getElementById("desc4");
let desc5 = document.getElementById("desc5");
let desc6 = document.getElementById("desc6");
let d1 = document.getElementById("block1");
let newP = document.createElement('p');

const json = '{"images1":"la vie d\'un geek", "images2":"space invader vive les années 80","images3":"Vive les geeks","images4":"c\'est à moi que tu parle","images5":"KAMEHAMEHA !!","images6":"Un jour peut être" }';
const data = JSON.parse(json);
let text1 = document.createTextNode(data.images1);
let text2 = document.createTextNode(data.images2);
let text3 = document.createTextNode(data.images3);
let text4 = document.createTextNode(data.images4);
let text5 = document.createTextNode(data.images5);
let text6 = document.createTextNode(data.images6);


window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js').then(res => {
                console.log("service worker loaded")
            });
    }
} 

togg1.addEventListener("click", () => {
    if (getComputedStyle(d1).display != "none") {
        d1.style.display = "none";
    } else {
        d1.style.display = "block";
    }
})

image1.addEventListener("click", () => {
    desc1.prepend(text1)
})
image2.addEventListener("click", () => {
    desc2.prepend(text2)
})
image3.addEventListener("click", () => {
    desc3.prepend(text3)
})
image4.addEventListener("click", () => {
    desc4.prepend(text4)
})
image5.addEventListener("click", () => {
    desc5.prepend(text5)
})
image6.addEventListener("click", () => {
    desc6.prepend(text6)
})