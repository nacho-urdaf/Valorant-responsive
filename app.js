let button = document.querySelector("#menu_button");

let menu = document.querySelector("#menu");

let cerrar = document.querySelector("#menu_button_close");

let second =  document.querySelector("#second_menu"); 

let secondb =  document.querySelector("#second_menub"); 

let secondc =  document.querySelector("#second_menuc"); 

let submenu = document.querySelector("#submenu"); 

let submenub = document.querySelector("#submenub"); 

let submenuc = document.querySelector("#submenuc"); 

function toggleMenu(){
    menu.classList.toggle("open")
}
function togglesubmenu(){
    submenu.classList.toggle("open")

}
function togglesubmenub(){
    submenub.classList.toggle("open")

}
function togglesubmenuc(){
    submenuc.classList.toggle("open")

}

button.onclick = toggleMenu
cerrar.onclick = toggleMenu
second.onclick = togglesubmenu
secondb.onclick = togglesubmenub
secondc.onclick = togglesubmenuc
