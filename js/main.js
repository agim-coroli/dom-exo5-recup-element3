// 1. Affiche le contenu textuel du premier paragraphe contenant la class "tartine", utilise une méthode pour récupérer un élémént via sa class
let a = document.getElementsByClassName("tartine")[0].textContent
console.log(a);


// 2. Pareil que le précédent mais cette fois si c'est via l'id "toast"
let b = document.getElementById("toast").textContent
console.log(b);
// la diff c get ElementById au lieu de ClassName

// 3. Affiche le dernier élément ayant la class tartine ( pas son contenu, l'élément entier)
let c = document.getElementsByClassName("tartine")[1]
console.log(c);

// correction (autre methode)

// let c = document.getElementsByClassName("tartine")[c.length-1]
// console.log(c);