
const pass = document.getElementById("password");
pass.type = "password";
const id = document.getElementById("id");
const names = "..sss5dd*-+//sssckz)z=";
const password = "..sss5dd*-+//sssczzyzsskz)z=";

let id_and_password = 
{
   "person1":
   {
    "id":"stan",
    "password":"1234"
   },
   "person2":
   {
    "id":"chris",
    "password":"4321"
   },
   "person3":
   {
    "id":"messi",
    "password":"goat"
   }
};

if ( (names in localStorage) && (password) in localStorage)
{
  document.getElementById("my_body").style.display = "none";
  window.location.replace("commands_list.html");
}
else
{
  function myFunction()
  
  {

    document.getElementById("my_body").style.display = "block";
    var pass = document.getElementById("password");
    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  }

 function main()

 {
  
   for (let i =1; i < 4; i++)
   {
    if(document.getElementById("keep_connection").checked == true)
    {
        if(id.value == id_and_password["person"+i]["id"] && pass.value == id_and_password["person"+i]["password"])

        {
            localStorage.setItem(names,id.value);
            localStorage.setItem(password,pass.value);
        }
    }
    else
    {
        localStorage.removeItem(names);
        localStorage.removeItem(password);
    }
    if(id.value == id_and_password["person"+i]["id"] && pass.value == id_and_password["person"+i]["password"] )

        {
            window.location.replace("commands_list.html");       
        }
   }  
   annimate_inputs_if_false(); 
 }
 

function annimate_inputs_if_false()
{
    $("#id").effect( "shake",{times:1}, 1000  );
    $("#password").effect( "shake",{times:1}, 1000  );   
}
 
}









        
        
        
        
        
        
     