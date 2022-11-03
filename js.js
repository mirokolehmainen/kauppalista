const Lista = document.getElementById("Lista")    // tarvittava elementti useasti

//estää sivun uudelleen lataamisen
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  
})
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
    
    //tallentaa uudet tiedot
    localStorage["Tavarat"] = Lista.innerHTML
    localStorage.getItem('Tavarat') 
 

    // checkbox
    const checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox");
    tavara.appendChild(checkbox)


     // Rakennetaan tavara
    tavara.appendChild(document.createTextNode(Teksti))
    
    // Lisätään tavara Listaan
    Lista.appendChild(tavara) 
    
   
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
  localStorage["Tavarat"] = Lista.innerHTML // Päivitetään Local Storage
}

//Tallennusta jossa Listasta tehdään Tavarat
if (localStorage["Tavarat"]) {
  Lista.innerHTML = localStorage["Tavarat"];
}
  
  







  


  




