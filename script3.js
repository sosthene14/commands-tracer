const pass = document.getElementById("password");
pass.type = "password";
const id = document.getElementById("id");
const names = "..sss5dd*-+//sssckz)z=";
const password = "..sss5dd*-+//sssczzyzsskz)z=";

const idPassword = {
  "person1": ["stanislas","123456"],
  "person2": ["chris","h422"],
  "person3": ["louis","zz42"]
};

function passAuthentification() {
  if (names in localStorage && password in localStorage) {
    const body = document.getElementById("my_body");
    body.style.display = "none";
    window.location.replace("commands_list.html");
  }
}
passAuthentification();

function hideOrShowPassword() {
  const pass = document.getElementById("password");
  if (pass.type === "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
}

function main() {
  const keepConnection = document.getElementById("keep_connection");
  for (const personKey in idPassword) {
    const person = idPassword[personKey];
    if (keepConnection.checked && id.value === person[0] && pass.value === person[1]) {
      localStorage.setItem(names, id.value);
      localStorage.setItem(password, pass.value);
      window.location.replace("commands_list.html");
      return;
    } else {
      localStorage.removeItem(names);
      localStorage.removeItem(password);
    }
    if (id.value === person[0] && pass.value === person[1]) {
      window.location.replace("commands_list.html");
      return;
    }
  }
  animateInputsIfFalse();
}

function animateInputsIfFalse() {
  $("#id").effect("shake", { times: 1 }, 1000);
    $("#password").effect("shake", { times: 1 }, 1000);
  
}
