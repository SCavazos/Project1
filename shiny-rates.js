function storeBulbaInfo() {
    let bulba_see = document.getElementById("bulba_seen").value;
    let bulba_shine = document.getElementById("bulba_shiny").value;
}

let button = document.getElementById("bulba_rate");
button.addEventListener("click", storeBulbaInfo);

console.log(bulba_see);
console.log(bulba_shine);