let togg1 = document.getElementById("click");
let image1 = document.getElementById("images1");
let image2 = document.getElementById("images2");
let image3 = document.getElementById("images3");
let image4 = document.getElementById("images4");
let image5 = document.getElementById("images5");
let image6 = document.getElementById("images6");
let d1 = document.getElementById("block1");
let d2 = document.getElementById("block2");
let newP = document.createElement('p');

const json = '{"images1":"la vie d\'un geek", "images2":"space invader vive les années 80","images3":"Vive les geeks","images4":"c\'est à moi que tu parle","images5":"KAMEHAMEHA !!","images6":"Un jour peut être" }';
const data = JSON.parse(json);
let text1 = document.createTextNode(data.images1);
let text2 = document.createTextNode(data.images2);
let text3 = document.createTextNode(data.images3);
let text4 = document.createTextNode(data.images4);
let text5 = document.createTextNode(data.images5);
let text6 = document.createTextNode(data.images6);

togg1.addEventListener("click", () => {
    if (getComputedStyle(d1).display != "none") {
        d1.style.display = "none";
    } else {
        d1.style.display = "block";
    }
})

image1.addEventListener("click", () => {
    newP.remove();
    newP = document.createElement('p');
    newP.prepend(text1)
})
image2.addEventListener("click", () => {
    d2.prepend(text2)
})
image3.addEventListener("click", () => {
    d2.prepend(text3)
})
image4.addEventListener("click", () => {
    d2.prepend(text4)
})
image5.addEventListener("click", () => {
    d2.prepend(text5)
})
image6.addEventListener("click", () => {
    d2.prepend(text6)
})