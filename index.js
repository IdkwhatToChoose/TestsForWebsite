// console.log("conslole.log")
function toggleLeftMenuLi(menuLiName,menuArrowIcon){
const liElement=document.getElementById(menuLiName);
const arrowicon=document.getElementById(menuArrowIcon);
console.log(liElement.classList);
if(liElement.classList.contains('show')){
    liElement.classList.remove("show");
    arrowicon.classList.remove("rotate");

}else{
    liElement.classList.add('show');
    arrowicon.classList.add('rotate');
}
}
function openSidebarMenu(){
    const btn=document.getElementById("menuButton");
    // const leftIcon=document.getElementById("leftArrowIcon");
    // const rightIcon=document.getElementById("rightArrowIcon");
    // const sidebarNav=document.getElementById("sidebarNav");
    if(btn.classList.contains('showMenu')){
    btn.classList.remove('showMenu');
    }else{
    btn.classList.add('showMenu');

    }

}

