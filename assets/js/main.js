


const kmCost = 0.21;
let generateButton = document.getElementById("generate");

generateButton.addEventListener('click', function(){
    let name = document.getElementById("name").value;
    let km = Number(document.getElementById("km").value);
    let ageRange = document.getElementById("age").value;
    let ticketPrice = km * kmCost;

    switch (ageRange) {
        case 1:
            ticketPrice -= ((ticketPrice) * 0.2);
            document.writeln(`Il costo del biglietto è: € ${ticketPrice.toFixed(2)}`);
            break;
        case 3:
            ticketPrice -= ((ticketPrice) * 0.4);
            document.writeln(`Il costo del biglietto è: € ${ticketPrice.toFixed(2)}`);
            break;
        default:
            document.writeln(`Il costo del biglietto è: € ${ticketPrice.toFixed(2)}`);
            break;
    }

    console.log(name, km, ageRange)

    console.log(`Il costo del biglietto è: ${ticketPrice.toFixed(2)}`);
})