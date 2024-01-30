document.getElementById("acess").addEventListener("click", function aperta() {
  let email = document.getElementById("username").value;
  let saldo;
  let password = Number(document.getElementById("password").value);
  console.log("Senha Digitada " + password);

  if (password === 123456) {
      window.location.href = 'index2.html';
      console.log("acesso permitido!!");


      
      
  } else {
      console.log("acesso negado!!");
      document.getElementById("p").innerHTML = "acesso negado!!";
  }
});
