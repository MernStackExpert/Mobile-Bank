document.getElementById("login-btn")
.addEventListener("click", function () {

  const number = 12345678910;
  const pass = 1234;

  let loginInput1 = document.getElementById("login-input-1").value
  let loginInput2 = document.getElementById("login-input-2").value

  if(loginInput1 === '' || loginInput2 === ''){
    return alert("Plese Provide Username and Password.");
  }

  if(parseInt(loginInput1 ) === number && parseInt(loginInput2) === pass){
    window.location.href = "main.html"
  }else{
    alert("you are type wrong password")
  }
  
});

