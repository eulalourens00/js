var menuElem = document.getElementById('breakfast');
var titleElem = menuElem.querySelector('.title');

titleElem.onclick = function(){
    menuElem.classList.toggle('open');
};