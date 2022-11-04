const Lista = document.getElementById("Lista")    // tarvittavat elementit useasti
const todoInput = document.querySelector('.todo-input');

//haetaan Local Storagesta
HaeArvot();

//estää sivun uudelleen lataamisen
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
 
  //tallennetaan ja tyhjennetään kenttä
    Tallenna();
    todoInput.value = "";
  },false)
  

    // tyhjentää arvon
    todoInput.value = '';
    
//auttaa luomaan id:n
var määrä = 0;

//Tarkistetaan syöte 
document.getElementById('Lisää').onclick = function Tarkista(){

  if(document.querySelector('Form input').value.length == 0){
      alert("Kenttä on tyhjä!")
      return false;


    //Tehdään uusi li 
  } else { 
    const tavara = document.createElement("li")
    tavara.id = (++määrä);
    const Teksti = document.querySelector('form input').value
    

    // checkbox
    const checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox");
    tavara.appendChild(checkbox)


     // Rakennetaan tavara
    tavara.appendChild(document.createTextNode(Teksti))
    
    // Lisätään tavara Listaan
    Lista.appendChild(tavara) 
    if (tavara === true) {
      Lista.classList.add('checked');
    }
    

   //Lisätään viiva klikkauksella
    checkbox.onclick = function Viiva()
    {
	  document.getElementById('tavara');
	  if (this.checked)
    {
    	tavara.style.textDecoration = 'line-through';
      tavara.style.textDecorationColor ='white';
    }else{
    
    	tavara.style.textDecoration = 'none';
    }
  }

    //Poistonappi
    let nappi = document.createElement("button")
    nappi.innerHTML = "X";
    nappi.setAttribute("onclick", "Poista()")
    
    //Lisätään nappi tavaraan
    tavara.appendChild(nappi);
    
    }
     
  
  }
 //Poista funktio
  function Poista () {  
  var tavara = this.event.currentTarget.parentNode;
  Lista.removeChild(tavara);
  localStorage.removeItem('myitems');
}

//Tallennus funktio
function Tallenna() {
  window.localStorage.myitems = Lista.innerHTML;
}
//Saadaan arvot Local Storagesta funktio
function HaeArvot() {
  var storedValues = window.localStorage.myitems;
 
   
    Lista.innerHTML = storedValues;
  }
  HaeArvot();

