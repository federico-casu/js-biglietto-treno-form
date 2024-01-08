
document.body.style.backgroundColor = "#b91550";

const kmCost = 0.21;
let generateButton = document.getElementById("generate");

generateButton.addEventListener('click', function(){
    let name = document.getElementById("name").value;
    let km = Number(document.getElementById("km").value);
    let ageRange = Number(document.getElementById("age").value);
    let ticketPrice = km * kmCost;

    document.getElementById("passengerName").innerHTML = name;
    document.getElementById("carriage").innerHTML = Math.floor(Math.random()* 10);
    document.getElementById("cpCode").innerHTML = Math.floor(Math.random()* 100000);


    switch (ageRange) {
        case 1:
            ticketPrice -= ((ticketPrice) * 0.2);
            document.getElementById("offer").innerHTML = "Biglietto Ridotto";
            break;
        case 3:
            ticketPrice -= ((ticketPrice) * 0.4);
            document.getElementById("offer").innerHTML = "Biglietto Over 65";
            break;
        default:
            document.getElementById("offer").innerHTML = "Biglietto Standard";
            break;
    }

    document.getElementById("priceOnTicket").innerHTML = `${ticketPrice.toFixed(2)} €`;

    document.getElementById("ticket").classList.remove("d-none");
})