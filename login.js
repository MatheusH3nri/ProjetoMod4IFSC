function Verify() {
  let email = document.getElementById("email").value;
  console.log(email);
  if (email == "admin@gmail.com") {
    location.replace("indexadm.html");
  }
  if (email == "") {
    myFunction();
  }
  if (email !== "" && email !== "admin@gmail.com") {
    location.replace("indexCliente.html");
  }
}
