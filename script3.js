
const pass = document.getElementById("password");
pass.type = "password";
const id = document.getElementById("id");
const names = "..sss5dd*-+//sssckz)z=";
const password = "..sss5dd*-+//sssczzyzsskz)z=";

let id_and_password = 
{
   "person1":
   ["stanislas","123456"]
  ,

   "person2":
   ["chris","h422"],

   "person3":
   ["louis","zz42"],
};

if ( (names in localStorage) && (password) in localStorage)
{
  document.getElementById("my_body").style.display = "none";
  window.location.replace("commands_list.html");
}
else
{
  function hide_or_show_password()
  
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
        if(id.value == id_and_password["person"+i][0] && pass.value == id_and_password["person"+i][1])

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
    if(id.value == id_and_password["person"+i][0] && pass.value == id_and_password["person"+i][1] )

        {
            window.location.replace("commands_list.html");       
        }
   }  
   annimate_inputs_if_false(); 
   stop
 }
 

function annimate_inputs_if_false()
{
    $("#id").effect( "shake",{times:1}, 1000  );
    $("#password").effect( "shake",{times:1}, 1000  );   
}
 
}
