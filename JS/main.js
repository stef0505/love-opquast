// Call DOM => link with fields
const glossaireContainer = document.getElementById('glossaire')
const titleToggle = document.querySelectorAll('.titleToggle')

// First Button Bonnes Pratiques
const arrayButton = ["Design",  "Développement", "Projet", "Intégration", "Rédaction", "Prototype"] 
const container = document.getElementById('container_array');

function addButton() { 
    for (i = 0; i < arrayButton.length; i++) { // Boucle for create button
        var btn = document.getElementById('requeteur'); // Name requeter (index.html)
        var button = document.createElement("button"); // Create element button for each button
        button.innerText = arrayButton[i]; // Get the value from the arrayButton 
        button.classList.add("logo");
        button.style.backgroundImage = `url(./img/${arrayButton[i]}.png)`; // Picture for each phases (design.png...)
        btn.appendChild(button); 
        document.getElementById("home").style.display = "block"; // Make the button appear => Click
        document.getElementById("req").style.display = "none"; // Erase button bonnes pratiques => Click
        document.getElementById("glo").style.display = "none"; // Erase button glossaire => Click
        button.addEventListener('click', (e) => {
            bonnesPratiques.forEach(function(element) { // Get all elements pratiques.js => by category
                if (element.phases.includes(e.target.innerText)) {
                    var reponses = ''; 
                    var arrayR = element.objectives;
                    for(var i=0; i<arrayR.length;i++) { // Create number for each objectives
                        var indique = i+1;
                        reponses +='<p>'+indique +' .'+arrayR[i]+'</p>'; // Number in arrayR => by category design => obj
                    }
                    container.innerHTML += `<div> 
                        <h3 class="titleToggle" onclick = "animeClick(event)">${element.title}</h3>
                        <div class="animeClick"> 
                              ${reponses} 
                        </div></div>`       
                } // Click title bonnes pratiques => appearance of objectives via animeClick (=> function)
            });
        });
    }
}

function animeClick(event) {
    event.target.nextElementSibling.classList.toggle('animeClick') // Get element after toggle (obj)
    //console.log(event.target.nextElementSibling)
}
            
 function myFunction () { // Function call Glosaire title & description
    document.getElementById("home").style.display = "block"; // Make the button appear => Click
    document.getElementById("req").style.display = "none"; // Erase button bonnes pratiques => Click
    document.getElementById("glo").style.display = "none"; // Erase button glossaire => Click
    glossaire.map(item => { // get ID glossaire index.html
        glossaireContainer.innerHTML += `<div><div><strong>${item.title}</strong></div><br/><div>${item.description}</div></div><br/><br/>`; // Get each elements title & description (boucle => array glossaire)
    })
}
