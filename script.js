document.getElementById("acess").addEventListener("click", function aperta() {
  let email = document.getElementById("username").value;
  let saldo;
  let password = Number(document.getElementById("password").value);
  console.log("Senha Digitada " + password);

  if (password === 123456) {
      window.location.href = 'index2.html';
      console.log("acesso permitido!!");

      let opcao = Number(document.getElementById("opcao").value);
   
      document.getElementById("confirmar").addEventListener("click", function () {
        alert("Funcionando")
          if (opcao === 3) {
              alert("Seu saldo é: " + saldo);
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
      });
  } else {
      console.log("acesso negado!!");
      document.getElementById("p").innerHTML = "acesso negado!!";
  }
});
