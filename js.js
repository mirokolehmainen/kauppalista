const Lista = document.getElementById("Lista")    // the list of all elements can be global as we are going to modify it constantly
const btn = document.getElementById("btn")
const li = document.querySelectorAll("li")

localStorage.getItem('lastid, newid') 
store();

//const id = ["Lista", "tavara"]
//localStorage.setItem('id', JSON.stringify(id))

//let itemsArray = localStorage.getItem('Lista, li') ? 
//JSON.parse(localStorage.getItem('Lista'));
//localStorage.setItem('Lista', JSON.stringify(itemsArray))
//const data = JSON.parse(localStorage.getItem('Lista'))


document.getElementById('Lisää').onclick = function Tarkista(){

  if(document.querySelector('Form input').value.length == 0){
      alert("Kenttä on tyhjä!")
      return false;

  } else { 
    const tavara = document.createElement("li")
    const Teksti = document.querySelector('form input').value
    
    
    // getting the new ID to use with the li element to easier deletion and easier stuff

    const lastaddress = parseInt(document.querySelectorAll("li").length - 1);
    const lastid = parseInt(document.querySelectorAll("li")[lastaddress].attributes.id.value);
    const newid = lastid + 1; // next in the line

    // checkbox
    const checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox");
    tavara.appendChild(checkbox)

     // Rakennetaan tavara
    tavara.appendChild(document.createTextNode(Teksti))
    tavara.setAttribute('id', newid); // the next id thats avaliable
   
    // Lisätään tavara Listaan
    Lista.appendChild(tavara) 
    
  
   
    document.getElementsByTagName("li")
    for(var i = 1; i< Lista.length; i++){
    btn(Lista[i]);
    
    
      //tietojentallennus
    Lista.innerHTML += '<li>' + tavara.value + '</li>';
    store();
    tavara.value = "";
    false;

  }


    let btn = document.createElement("button");
    btn.innerHTML = "X";
    btn.setAttribute('onclick', `Poista(${ newid })`)
    btn.setAttribute('id', newid);

    tavara.appendChild(btn);
    //extra
    
     
  }
}

function Poista (newid) {  
    // the identification is a variable, that will be provided with the click of the button, we set needed attribute up there
    // which is simpler than getting the id of button we pressed, tho if you want... do it with DOM Interaction like previously in the Tarkista() up there ^^
    const tavara = document.getElementById(newid);
    Lista.removeChild(tavara);
    //Lista.removeChild(li);
    
}
  
  //estää sivun uudelleen lataamisen
  document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    
  })
  
  //Tallennus funktio
  function store() {
    window.localStorage.Tavarat = Lista.innerHTML;
  }
  
//document.getElementsByClassName("button").onclick = function Delete(newid){






  




