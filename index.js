var counter = 0;
document.querySelector("span").innerText = counter;
function inc() {
    counter++; 
    document.querySelector("span").innerText = counter;
}
function dec() {
    counter--;
    document.querySelector("span").innerText = counter;
}
function res() {
    counter = 0;
    document.querySelector("span").innerText = counter;
}