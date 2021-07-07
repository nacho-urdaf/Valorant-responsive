let button = document.querySelector("#menu_button");

let button1 = document.querySelector("#menu_button1");

let button2 = document.querySelector("#menu_button2");

let button3 = document.querySelector("#menu_button3");

let menu = document.querySelector("#menu");

let go_back = document.querySelector("#go_back");

let go_back2 = document.querySelector("#go_back2");

let go_back3 = document.querySelector("#go_back3");

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

function closeAll (){
    menu.classList.remove('open')
    submenu.classList.remove('open')
    submenub.classList.remove('open')
    submenuc.classList.remove('open')
}

button.onclick = toggleMenu

//CERRAR
button1.onclick = closeAll
button2.onclick = closeAll
button3.onclick = closeAll
cerrar.onclick = closeAll

second.onclick = togglesubmenu
secondb.onclick = togglesubmenub
secondc.onclick = togglesubmenuc


go_back.onclick = togglesubmenu
go_back2.onclick = togglesubmenub
go_back3.onclick = togglesubmenuc

//go back