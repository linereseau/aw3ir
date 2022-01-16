window.onload = function () {   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     console.log( "DOM ready!" );
     
    
     document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("form submitted!");

        validation()
      });

    
};

var myModal = new bootstrap.Modal(document.getElementById('myModal'));

function validation() 
{
   var nom = document.getElementById("nom").value;
   var prenom = document.getElementById("prenom").value;
   var adresse = document.getElementById("adresse").value;
   var ddn = document.getElementById("date").value;
   var mail = document.getElementById("email").value;

   document.querySelector(".modal-body").innerHTML  = "";
   

   if (nom.length < 5) {
    document.querySelector(".modal-body").innerHTML     = "La saisie du nom est obligatoire";
    
myModal.show();
       return false;
   }

   if (prenom.length < 5) {
    document.querySelector(".modal-body").innerHTML  = "La saisie du prénom est obligatoire";
    
myModal.show();
       return false;
   }

   if (adresse.length < 5) {
    document.querySelector(".modal-body").innerHTML  = "La saisie d'Adresse est obligatoire";
    
myModal.show();
       return false;
   }

}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
 }

 function validationdate(date) {
    let today = Date.now();
    let  dateNaissance = new Date(date); // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#syntaxe
    let dateNaissanceTimestamp = dateNaissance.getTime();

    return dateNaissanceTimestamp < today;
 }
const openModal = function (e) {
    e.preventDefault
    const target= document.querySelector(e.target.getAttribute(href))
    target.style.display= null;
    target.removeAttribute('aria-hidden')
}
 document.querySelectorAll('js-modal').forEach(a => {
     a.addEventListener('click', openModal)
     
 })