var lista = document.querySelector('ul');
lista.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle();
  }
}, false);

var haku = document.getElementById("haku")
haku.addEventListener(function(){
    if (haku === '') 
        alert("You must write something!");
   
}  
