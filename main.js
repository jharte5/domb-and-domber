function appendListItem (element) {
    const uList = document.querySelector('ul');
    uList.appendChild(element);
}
function appendDiv (element) {
    const dDiv = document.querySelector('#lorem');
    dDiv.appendChild(element);
}
function takeInText (str) {
    const newLi = document.createElement('li');
    newLi.innerText = str;
}
function takeInImg (url, image) {
    image.src = url;
    const newImage = document.createElement('img');
    const newUrl = 'url'; newImage
    takeInImg(newUrl, newImage);
}
function sClass (elementClone, elementOriginal) {
    elementClone.className = elementOriginal.className
}
const thing1 = document.querySelector('#thing-1');
const thing2 = document.querySelector('#thing-2');
const thingC = document.querySelector('#thing-c');

sClass(thing1, thing2);
sClass(thing1, thingC);