


let background3 = document.getElementById("background3")
background3.style.display = "none";




let saldo = 1000
document.getElementById("confirmar").addEventListener("click", function () {
let opcao = Number(document.getElementById("opcao").value);

let background = document.getElementById("background")
background.style.display = "none";

        console.log("voce escolheu " + opcao)
       

        if (opcao === 3) {
            background3.style.display = "block";
            
            document.getElementById("apa").innerHTML = "Seu saldo é: " + saldo
            
            
        } else if (opcao === 2) {
            let depositar = Number(prompt("Insira o valor que você quer sacar"));
            let saldoatual = depositar + saldo;
            alert("Saldo atual: " + saldoatual);
        } else if (opcao === 1) {
            let sacar = Number(prompt("Você tem na conta " + saldo + " quanto você deseja sacar?"));
            if (sacar <= saldo) {
                let resto = saldo - sacar;
                alert("Tudo OK, o valor que você ficou na conta foi: " + resto);
            } else {
                alert("Não foi possível sacar, pois você não tem esse valor na conta.");
            }
        }



})
   