let principal_div = document.getElementById("principal_div");
const list_client_information1 = [];
const liste_priority1 = [];
const liste_product1 = [];
const liste_city1 = [];
const text_activate_modification = "Activer la modification";
const text_desactivate_modification = "Desactiver la modification";
const text_delete_command = "Effacer la commande";
const names_of_commands_composition = [
  "Information Commande",
  "Nom (s) : ",
  "Prénom (s) : ",
  "E-mail : ",
  "Numéro de téléphone : ",
  "Quantité : ",
  "Date : ",
  "Priorité : ",
  "Produit (s) : ",
  "Ville (s) : ",
];
const type_of_input_to_create = "textarea";
const type_of_container_to_create = "div";
const cities_list = "liste_city";
const products_list = "liste_products";
const input_type = "input";

let liste = [];
function push_informations_in_list_if_in_localestorage()
{
  let information_to_convert = "";
  let informations_to_search = "Client_data";

  for (let i = 0; i < localStorage['k']; i++)
{
  if (informations_to_search+i in localStorage)
  {
    information_to_convert = localStorage[informations_to_search+i];
    const converted_information = JSON.parse(information_to_convert);
    liste.push(converted_information);
  }
  
} 
return liste;
}
const get_lenght = push_informations_in_list_if_in_localestorage().length;

for (let j = 0; j < get_lenght; j++)
{
  try
  { 
    
  let title = document.createElement('p');
  define_divs_name(title,names_of_commands_composition[0]);
  principal_div.appendChild(title);
  
/***************************************************************************************/
  let name_div = create_elements_div(type_of_container_to_create);
  let names = create_elements_span(input_type);
  define_divs_name(name_div,names_of_commands_composition[1]);
  names.value = push_informations_in_list_if_in_localestorage()[j]['nom'];
  append_childs_to_principals_divs(principal_div,names,name_div);

  /***************************************************************************************/
  let first_name_div = create_elements_div(type_of_container_to_create);
  let first_name = create_elements_span(input_type);
  define_divs_name(first_name_div,names_of_commands_composition[2]);
  first_name.value = push_informations_in_list_if_in_localestorage()[j]['prenom'];
  append_childs_to_principals_divs(principal_div,first_name,first_name_div);

/******************************************************************************************/
  let email_div = create_elements_div(type_of_container_to_create);
  let email = create_elements_span(input_type);
  define_divs_name(email_div,names_of_commands_composition[3]);
  email.value = push_informations_in_list_if_in_localestorage()[j]['email'];
  append_childs_to_principals_divs(principal_div,email,email_div);
/*******************************************************************************************/
  let phone_div = create_elements_div(type_of_container_to_create);
  let phone = create_elements_span(input_type);
  define_divs_name(phone_div,names_of_commands_composition[4]);
  phone.value = push_informations_in_list_if_in_localestorage()[j]['number_phone'];
  append_childs_to_principals_divs(principal_div,phone,phone_div);

  /***************************************************************************************/
  let products_div = create_elements_div(type_of_container_to_create);
  let products = create_elements_span(input_type);
  let list_products = [];
  define_divs_name(phone_div,names_of_commands_composition[8]);
  for (let i = 0; i < 16; i++)
  {
    if ('produit'+i in push_informations_in_list_if_in_localestorage()[j])
    {
      list_products.push(push_informations_in_list_if_in_localestorage()[j]['produit'+i]);
    }
  }
  const list_products_splited = list_products.toString().split(",");
  const filter_products_list = [...new Set(list_products_splited)];
  products.value = filter_products_list.toString().replaceAll(",,",",");
  append_childs_to_principals_divs(principal_div,products,products_div);

  /**********************************************************************************************/
  let priorities_div = create_elements_div(type_of_container_to_create);
  let priorities = create_elements_span(input_type);
  define_divs_name(priorities_div,names_of_commands_composition[7]);
  priorities.value = push_informations_in_list_if_in_localestorage()[j]['priorité'];
  append_childs_to_principals_divs(principal_div,priorities,priorities_div);

  /*******************************************************************************************/
  let cities_div = create_elements_div(type_of_container_to_create);
  let cities = create_elements_span(input_type);
  let list_cities = [];
  define_divs_name(cities_div,names_of_commands_composition[9]);
  for (let i = 0; i < 6; i++)
  {
    if ('villes'+i in push_informations_in_list_if_in_localestorage()[j])
    {
      list_cities.push(push_informations_in_list_if_in_localestorage()[j]['villes'+i]);
    }
    
  }
  const list_cities_splited = list_cities.toString().split(",");
  const filter_cities_list = [...new Set(list_cities_splited)];
  cities.value = filter_cities_list.toString().replaceAll(",,",",");
  append_childs_to_principals_divs(principal_div,cities,cities_div);

  /*******************************************************************************************/
  let quantities_div = create_elements_div(type_of_container_to_create);
  let quantities = create_elements_span(input_type);
  define_divs_name(quantities_div,names_of_commands_composition[5]);
  quantities.value = push_informations_in_list_if_in_localestorage()[j]['quantity'];
  append_childs_to_principals_divs(principal_div,quantities,quantities_div);

  /*******************************************************************************************/
  let dates_div = create_elements_div(type_of_container_to_create);
  let date = create_elements_span(input_type);
  define_divs_name(dates_div,names_of_commands_composition[6]);
  date.value = push_informations_in_list_if_in_localestorage()[j]['date'];
  append_childs_to_principals_divs(principal_div,date,dates_div);

  /*******************************************************************************************/

  let modify_commands_btn = document.createElement("button");
  modify_commands_btn.textContent = text_activate_modification;
  modify_commands_btn.classList.add("btn_for_removing_commands");
  principal_div.appendChild(modify_commands_btn);

    modify_commands_btn.addEventListener("click",(e) => {
    if (modify_commands_btn.textContent == text_activate_modification)
    {
      commands_list_disabled_to_false(names,first_name,email,phone,products,priorities,cities,quantities,date);
      modify_commands_btn.textContent = text_desactivate_modification;
      modify_commands_btn.style.backgroundColor = "red";
    }
    else
    {
      commands_list_disabled_to_true(names,first_name,email,phone,products,priorities,cities,quantities,date);
      modify_commands_btn.textContent = text_activate_modification;
      modify_commands_btn.style.backgroundColor = "green";
      update_localstorage_content();
    }

    function update_localstorage_content()
    {
      for (let i = 0; i < localStorage['k']; i++)
      {
        if ('Client_data'+i in localStorage)
        {
          let new_data = JSON.stringify(liste[j]);
          if (localStorage['Client_data'+i] == new_data)
          {
            modifie_items("nom",names);
            modifie_items("prenom",first_name);
            modifie_items("email",email);
            modifie_items("number_phone",phone);
            modifie_items("date",date);
            modifie_items("quantity",quantities);
            modifie_items("priorité",priorities);

            for (let i = 0; i < 16; i++)
            {
              if ('produit'+i in liste[j])
              {
                modifie_items("produit"+i,products);
              }
              if ('villes'+i in liste[j])
              {
                modifie_items('villes'+i,cities);
              }
            }
            localStorage.setItem('Client_data'+i,JSON.stringify(liste[j]));
          }
        }
         
      }
    }
})

let delete_commands_btn = document.createElement("button");
delete_commands_btn.textContent = text_delete_command;
delete_commands_btn.classList.add("btn_for_removing_commands");
principal_div.appendChild(delete_commands_btn);
delete_commands_btn.addEventListener("click", (e) =>{
e.preventDefault()
    remove_content_of_principal_div(name_div,title,first_name_div,modify_commands_btn,delete_commands_btn,phone_div,email_div,products_div,priorities_div,cities_div,quantities_div,dates_div);
    for (let i = 0; i < localStorage['k']; i++)
    {
      let new_data = JSON.stringify(liste[j]);
      if ('Client_data'+i in localStorage)
      {
        if (localStorage['Client_data'+i] == new_data)
        {
          localStorage.removeItem('Client_data'+i);
        }
      } 
    }   
}
)
/********************************************************************************************** */
function modifie_items(parameter1,paramatre2)
{
  
    liste[j][parameter1] = paramatre2.value;
}
  /******************************************************************************************/

  function commands_list_disabled_to_true(...args) {
    for (let arg of args) {
      arg.disabled = true;
    }
  }
  commands_list_disabled_to_true(names,first_name,email,phone,products,priorities,cities,quantities,date)

  function commands_list_disabled_to_false(...args) {
    for (let arg of args) {
      arg.disabled = false;
    }
  }

  function design_of_divs(...args) {
    for (let arg of args) {
      arg.classList.add("div_for_informations_shown");
    }
  }
  design_of_divs(name_div,first_name_div,email_div,phone_div,products_div,priorities_div,cities_div,quantities_div,dates_div,title);

  function design_of_divs_contains(...args) {
    for (let arg of args) {
      arg.classList.add("text_shown_in_commands_list");
    }
  }
  design_of_divs_contains(names,first_name,email,phone,products,priorities,cities,quantities,date);
}
catch
{
  
}
}

function create_elements_div(a)
{
return document.createElement(a);
}

function create_elements_span(b)
{
return document.createElement(b);
}

function define_divs_name(parameter1,paramatre2)
{
  parameter1.textContent = paramatre2;
}

function append_childs_to_principals_divs(principal_div_name,element,second_div_name)
{
  second_div_name.appendChild(element);
  principal_div_name.appendChild(second_div_name);
}

function remove_content_of_principal_div(...args) {
  for (let arg of args) {
    principal_div.removeChild(arg);
  }
}

function append_elements_to_others_div(others_div,element)
{
  others_div.appendChild(element);
}
