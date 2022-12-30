const get_products_list = document.getElementById("products_list");
const get_priorities_list = document.getElementById("priorities_list");
const get_cities_list = document.getElementById("cities_list");
const diver = "div";
const spaner = "span";
const inputer = "input";
const ponctuations = /\p{P}/gu;
const regexnumber = /[1-9]/g;
const guard_cities = [];
const guard_priority = [];
const guard_product = [];
const guards = [];
const list_of_texts_message =
 [

    "Nom invalide ","Prenom invalide ","Numero invalide, format accepté : +221123456789 ","Email invalide ",
    "Quantité invalide ","Date invalide", "Veuillez sélectionner au moins un produit ",
    " Veuillez sélectionner une priorité ","Veuillez sélectionner au moins une ville ","Enregistrés avec succès"
]
const liste_icons = [document.getElementById("dropdown"),document.getElementById("dropdown2"),document.getElementById("dropdown3")]
const i = 1;
const display_block = "block";
const display_none = "none";
const display_hidden = "hidden";
const display_visible = "visible";

const liste_priority1 = [];
const liste_products1 = [];
const liste_city1 = [];
const list_client_information1 = [];
let k = localStorage.setItem("k", localStorage.length + 1);

function calling_some_functions_of_the_file() {
  hide_and_show_product_list();
  upload_contains_of_cities_list();
  hide_and_show_priorities_list();
  upload_contains_of_products_list();
  upload_contains_of_priorities_list();
  hide_and_show_cities_list();
}
calling_some_functions_of_the_file();

function json_contains() {
  let my_json_contains = {
    products: [
      "Tomates",
      "Poivrons",
      "Aubergines",
      "Oignons",
      "Lentilles",
      "Ails",
      "Comcombres",
      "Courgettes",
      "Brocolis",
      "Navets",
      "Haricots Vert",
      "Chous",
      "Lettus",
      "Pommes de terre",
      "Piments",
    ],
    priorities: ["Faible", "Moyenne", "Urgente"],
    cities: ["Dakar", "Brazzaville", "Libreville", "Paris", "Bruxelle"],
  };
  return my_json_contains;
}



function hide_and_show(id_list, id_dropdown_icon)
 {if (id_list.style.display == display_none) {
    id_list.style.display = display_block;
    id_dropdown_icon.style.visibility = display_hidden;}

  document.addEventListener("mouseup", function (e) {
    const container = id_list;
    if (!container.contains(e.target)) {
      container.style.display = display_none;
      id_dropdown_icon.style.visibility = display_visible;}
    });
  }

function hide_and_show_product_list() {
  hide_and_show(get_products_list, liste_icons[0]);
}

function hide_and_show_priorities_list() {
  hide_and_show(get_priorities_list, liste_icons[1]);
}

function hide_and_show_cities_list() {
  hide_and_show(get_cities_list, liste_icons[2]);
}

function adding_items_to_principals_div(var1,var2,var1_content,var1_content2){
  var1.appendChild(var1_content);
  var1.appendChild(var1_content2);
  var2.appendChild(var1);
}

function creating_some_element_of_the_main_file(type_to_create){ 
  return document.createElement(type_to_create);
}

function style_radio_and_checkbox_button(parameter1,parameter2,parameter3,parameter4){
  parameter1.classList.add(parameter3);
  parameter2.classList.add(parameter4);
}

function delete_some_items(item1,item2,item3){
localStorage.removeItem(item1);
item3.pop(item2);
}

function upload_contains_of_list(id_list,items_list,item_prefix,items_save_location,names) {
  const itemsLength = json_contains()[items_list].length;
  for (let i = 0; i < itemsLength; i++){
    let div = creating_some_element_of_the_main_file(diver);
    let span = creating_some_element_of_the_main_file(spaner);
    let checkbox = creating_some_element_of_the_main_file(inputer);
    style_radio_and_checkbox_button(checkbox,div,"form-check-input","span-and-input");
    span.textContent = json_contains()[items_list][i];
    checkbox.type = "checkbox";
    adding_items_to_principals_div(div,id_list,span,checkbox);
    checkbox.onclick =
      function put_name_of_item_in_local_storage_if_checkbox_checked() {
        if (checkbox.checked == true) {
          localStorage.setItem(item_prefix + i, span.textContent);
          checkbox.value = span.textContent;
          checkbox.name = names+i;
          items_save_location.push(item_prefix);
        } else {
          delete_some_items(item_prefix+i,item_prefix,items_save_location);
        }
      };
  }
}

function upload_contains_of_products_list() {
  upload_contains_of_list(get_products_list,"products","product",guard_product,"produit");
}


function upload_contains_of_priorities_list() {
  for (let i = 0; i < 3; i++) {
    let div = creating_some_element_of_the_main_file(diver);
    let span = creating_some_element_of_the_main_file(spaner);
    let radio = creating_some_element_of_the_main_file(inputer);
    style_radio_and_checkbox_button(radio,div,"form-check-input","span-and-input");
    span.textContent = json_contains()["priorities"][i];
    radio.type = "radio";
    adding_items_to_principals_div(div,get_priorities_list,span,radio);
    radio.onclick =
      function put_state_of_priority_in_local_storage_if_radio_checked() {
        if (radio.checked == true) {
          localStorage.setItem("priority", span.textContent);
          liste_priority1[0] = span.textContent;
          radio.value = span.textContent;
          radio.name = "priorité";
          guard_priority.push("priority");
        } else {
          delete_some_items("priority","priority",guard_priority);
        }
      };
  }
}

function upload_contains_of_cities_list() {
  upload_contains_of_list(get_cities_list, "cities", "city", guard_cities,"villes");
}

function text_to_shown_when_events_come(text_to_show,text_decoration){
  return document.getElementById("error_text").textContent = text_to_show , text_decoration;
}



function check_informations_validity() {if (
    put_client_email_in_list_information_client() &&
    put_client_first_name_in_list_information_client() &&
    put_date_in_list_information_client() &&
    put_client_number_in_list_information_client() &&
    put_commands_quantity_in_list_information_client() &&
    put_client_name_in_list_information_client() &&
    guard_cities[0] == "city" &&
    guard_priority[0] == "priority" &&
    guard_product[0] == "product"
  ) 
  {the_main_function_of_the_program()
  }
  else{if (!put_client_name_in_list_information_client())
    {
      text_to_shown_when_events_come(list_of_texts_message[0],color_text_if_answer_exist("red"));
    } 
    else if (!put_client_first_name_in_list_information_client())
    {
      text_to_shown_when_events_come(list_of_texts_message[1],color_text_if_answer_exist("red"));
    } 
    else if (!put_client_email_in_list_information_client())
    {
      text_to_shown_when_events_come(list_of_texts_message[3],color_text_if_answer_exist("red"));
    }
    else if (!put_client_number_in_list_information_client())
    {
      text_to_shown_when_events_come(list_of_texts_message[2],color_text_if_answer_exist("red"));
    } 
    else if (guard_product[0] !== "product")
    {
      text_to_shown_when_events_come(list_of_texts_message[6],color_text_if_answer_exist("red"));
    }
    else if (guard_priority[0] !== "priority") 
    {
      text_to_shown_when_events_come(list_of_texts_message[7],color_text_if_answer_exist("red"));
    } 
    else if (guard_cities[0] !== "city") 
    {
      text_to_shown_when_events_come(list_of_texts_message[8],color_text_if_answer_exist("red"));
    }
    else if (!put_commands_quantity_in_list_information_client())
    {
      text_to_shown_when_events_come(list_of_texts_message[4],color_text_if_answer_exist("red"));
    }
    else if (!put_date_in_list_information_client())
    {
      text_to_shown_when_events_come(list_of_texts_message[5],color_text_if_answer_exist("red"));
    } 
    
  }
}

function informations_to_put_in_lists(){
  put_client_email_in_list_information_client();
  put_client_first_name_in_list_information_client();
  put_date_in_list_information_client();
  put_client_number_in_list_information_client();
  put_commands_quantity_in_list_information_client();
  put_client_name_in_list_information_client();
}


function get_formdata_informations(){
  const form = document.getElementById('my_form');
  form.addEventListener("click", (e) => {e.preventDefault()
})
  return formData = new FormData(form);
}


function put_formdata_informations_to_localstorage(){
  const data = Object.fromEntries(get_formdata_informations());
  const client_data = JSON.stringify(data);
  localStorage.setItem("Client_data"+localStorage["k"],client_data);
  localStorage.setItem("compteur",localStorage["k"]);
}


function put_informations_of_checkbox_in_lists(item1,item2){
  for (let i = 0; i < json_contains()['products'].length; i++) {
      if (item1+i in localStorage)
        {
          item2.push(localStorage[item1+i]);
        }   
      }
}

function delete_elements_in_local_storage_which_use_checkbox_after_validation(){
  for (let i = 0; i < json_contains()['products'].length; i++)
  {
    if ("product" + i in localStorage ||"city" + i in localStorage ||"priority" in localStorage) {
      localStorage.removeItem("product" + i);
      localStorage.removeItem("city" + i);
      localStorage.removeItem("priority");
    }
  }
}

function set_items_which_dont_use_formdata_in_local_storage(parameter1,parameter2){
  localStorage.setItem(parameter1,parameter2);
}

  function the_main_function_of_the_program(){
    put_formdata_informations_to_localstorage();
    text_to_shown_when_events_come(list_of_texts_message[9],color_text_if_answer_exist("green"));
    delete_elements_in_local_storage_which_use_checkbox_after_validation();
    set_items_which_dont_use_formdata_in_local_storage("k",parseInt(localStorage["k"]) + 1);
    clear_guards_list(guard_cities,guard_priority,guard_product);
    let save_value_k = localStorage["k"]+1 - localStorage["k"];
    window.location.reload();

 }
  
  function clear_guards_list (...args){
    for (let arg of args){
        arg = [];}
  }


function color_text_if_answer_exist(color){
document.getElementById("error_text").style.color = color;
}


function put_simple_client_text_in_list_information_client(id, index){
  let value = document.getElementById(id).value.trim();
  if (value.trim().length !== 0 && !value.match(regexnumber) && !ponctuations.test(value)) {
    list_client_information1[index] = value;
    id.name = id;
    return true;
  }
  return false;
}

function put_client_name_in_list_information_client() {
  return put_simple_client_text_in_list_information_client("name", 0);
}

function put_client_first_name_in_list_information_client() {
  return put_simple_client_text_in_list_information_client("first_name", 1);
}

function put_client_complex_text_in_list_information_client(id,pattern,index) {
  let value = document.getElementById(id).value.trim();
  if (value.toLowerCase().match(pattern) && value.trim().length !== 0) {
    list_client_information1[index] = value.toLowerCase();
    return true;
  } else {
    return false;
  }
}

function put_client_number_in_list_information_client() {
  let number_validation =
    "^[+]?[(]?[0-9]{5}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$";
  return put_client_complex_text_in_list_information_client(
    "number",
    number_validation,
    2
  );
}

function put_client_email_in_list_information_client() {
  let email_validation =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return put_client_complex_text_in_list_information_client(
    "email",
    email_validation,
    "E-mail invalide",
    3
  );
}

function put_simple_text_in_list_information_client(id, index) {
  let value = document.getElementById(id).value.trim();
  if (value.length !== 0) {
    list_client_information1[index] = value;
    return true;
  }
}

function put_commands_quantity_in_list_information_client() {
  return put_simple_text_in_list_information_client("quantity", 4);
}

function put_date_in_list_information_client() {
  return put_simple_text_in_list_information_client("date", 5);
}