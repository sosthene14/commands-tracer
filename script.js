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
const guards = []
const liste_text_if_invalid_form =
 [

    "Nom invalide ","Prenom invalide ","Numero invalide, format accepté : +221123456789 ","Email invalide ",
    "Quantité invalide ","Date ", "Veuillez sélectionner au moins un produit ",
    " Veuillez sélectionner une priorité ","Veuillez sélectionner au moins une ville "
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

function calling_all_functions_of_the_file() {
  hide_and_show_product_list();
  upload_contains_of_cities_list()
  hide_and_show_priorities_list();
  upload_contains_of_products_list()
  upload_contains_of_priorities_list()
  hide_and_show_cities_list();

}
calling_all_functions_of_the_file();

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

function hide_and_show(id_list, id_dropdown_icon) {
  if (id_list.style.display == display_none) {
    id_list.style.display = display_block;
    id_dropdown_icon.style.visibility = display_hidden;
  }
  document.addEventListener("mouseup", function (e) {
    const container = id_list;
    if (!container.contains(e.target)) {
      container.style.display = display_none;
      id_dropdown_icon.style.visibility = display_visible;
    }
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

function upload_contains_of_list(
  id_list,
  items_list,
  item_prefix,
  items_save_location
) {
  const itemsLength = json_contains()[items_list].length;
  for (let i = 0; i < itemsLength; i++) {
    let div = document.createElement(diver);
    let span = document.createElement(spaner);
    let checkbox = document.createElement(inputer);

    checkbox.classList.add("form-check-input");
    div.classList.add("span-and-input");

    span.textContent = json_contains()[items_list][i];
    checkbox.type = "checkbox";

    div.appendChild(span);
    div.appendChild(checkbox);
    id_list.appendChild(div);

    checkbox.onclick =
      function put_name_of_item_in_local_storage_if_checkbox_checked() {
        if (checkbox.checked == true) {
          localStorage.setItem(item_prefix + i, span.textContent);
          items_save_location.push(item_prefix);
        } else {
          localStorage.removeItem(item_prefix + i);
          items_save_location.pop(item_prefix);
        }
      };
  }
}

function upload_contains_of_products_list() {
  upload_contains_of_list(
    get_products_list,
    "products",
    "product",
    guard_product
  );
}

function upload_contains_of_priorities_list() {
  for (let i = 0; i < 3; i++) {
    let div = document.createElement(diver);
    let span = document.createElement(spaner);
    let radio = document.createElement(inputer);

    radio.classList.add("form-check-input");
    div.classList.add("span-and-input");
    span.textContent = json_contains()["priorities"][i];
    radio.type = "radio";
    radio.name = "choix";

    div.appendChild(span);
    div.appendChild(radio);
    get_priorities_list.appendChild(div);

    radio.onclick =
      function put_state_of_priority_in_local_storage_if_radio_checked() {
        if (radio.checked == true) {
          localStorage.setItem("priority", span.textContent);
          liste_priority1[0] = span.textContent;
          guard_priority.push("priority");
        } else {
          localStorage.removeItem("priority");
          guard_priority.pop("priority");
        }
      };
  }
}

function upload_contains_of_cities_list() {
  upload_contains_of_list(get_cities_list, "cities", "city", guard_cities);
}

function put_user_information_in_local_storage() {
  if (
    put_client_email_in_list_information_client() &&
    put_client_first_name_in_list_information_client() &&
    put_date_in_list_information_client() &&
    put_client_number_in_list_information_client() &&
    put_commands_quantity_in_list_information_client() &&
    put_client_name_in_list_information_client() &&
    guard_cities[0] == "city" &&
    guard_priority[0] == "priority" &&
    guard_product[0] == "product"
  ) {
    for (let i = 0; i < 30; i++) {
      if ("product" + i in localStorage) {
        liste_products1.push(localStorage["product" + i]);
      }

      if ("city" + i in localStorage) {
        liste_city1.push(localStorage["city" + i]);
      }

      put_client_email_in_list_information_client();
      put_client_first_name_in_list_information_client();
      put_date_in_list_information_client();
      put_client_number_in_list_information_client();
      put_commands_quantity_in_list_information_client();
      put_client_name_in_list_information_client();

      let liste_of_commands_different_from_textarea = [
        "liste" + localStorage["k"],
        "liste_product" + localStorage["k"],
        "liste_city" + localStorage["k"],
        "liste_priority" + localStorage["k"],
      ];
      let liste_new_information_for_lists_different_from_textarea = [
        list_client_information1,
        liste_products1,
        liste_city1,
        liste_priority1,
      ];

      for (
        let i = 0;
        i < liste_of_commands_different_from_textarea.length;
        i++
      ) {
        localStorage.setItem(
          liste_of_commands_different_from_textarea[i],
          liste_new_information_for_lists_different_from_textarea[i]
        );
      }

      document.getElementById("error_text").textContent =
        "Enregistré avec succès ";
      document.getElementById("error_text").style.color = "green";
      if (
        "product" + i in localStorage ||
        "city" + i in localStorage ||
        "priority" in localStorage
      ) {
        localStorage.removeItem("product" + i);
        localStorage.removeItem("city" + i);
        localStorage.removeItem("priority");
      }
    }
    window.location.reload();
    localStorage.setItem("k", parseInt(localStorage["k"]) + 1);
    let p = localStorage["k"] - 5;
    clear_guards_list(guard_cities,guard_priority,guard_product);
  } 
  
  else
  
  {
    if (!put_client_name_in_list_information_client())
    
    {
      
      document.getElementById("error_text").textContent = liste_text_if_invalid_form[0];
      color_text_if_wrong_answer()

    } 
    
    else if (!put_client_first_name_in_list_information_client())
    
    {
      document.getElementById("error_text").textContent = liste_text_if_invalid_form[1];
      color_text_if_wrong_answer()

    } 
    
    else if (!put_client_number_in_list_information_client())
    
    {
      document.getElementById("error_text").textContent = liste_text_if_invalid_form[2];
      color_text_if_wrong_answer()
    } 
    
    else if (!put_client_email_in_list_information_client())
    
    {
      document.getElementById("error_text").textContent = liste_text_if_invalid_form[3];
      color_text_if_wrong_answer()
    }
    
    else if (!put_commands_quantity_in_list_information_client())
    
    {
      document.getElementById("error_text").textContent = liste_text_if_invalid_form[4];
     color_text_if_wrong_answer()
    }
    
    else if (!put_date_in_list_information_client())
    
    {
      document.getElementById("error_text").textContent = liste_text_if_invalid_form[5];
      color_text_if_wrong_answer()
    } 
    
    else if (guard_product[0] !== "product")
    
    {
      document.getElementById("error_text").textContent = liste_text_if_invalid_form[6];  
      color_text_if_wrong_answer()

    }
    
    else if (guard_priority[0] !== "priority") 
    
    {

    document.getElementById("error_text").textContent = liste_text_if_invalid_form [7];
    color_text_if_wrong_answer()

    } 
    
    else if (guard_cities[0] !== "city") 

    {
      document.getElementById("error_text").textContent = liste_text_if_invalid_form[8];
     color_text_if_wrong_answer()
    }
  }

  
  function clear_guards_list (...args)

  {
    for (let arg of args)

     {
        arg = [];
      }
  }

}
function color_text_if_wrong_answer()
  {
    document.getElementById("error_text").style.color = "red";
  }


function put_simple_client_text_in_list_information_client(id, error_message, index) {
  let value = document.getElementById(id).value.trim();

  if (
    value.trim().length !== 0 &&
    !value.match(regexnumber) &&
    !ponctuations.test(value)
  ) {
    list_client_information1[index] = value;
    return true;
  }
  document.getElementById("error_text").textContent = error_message + " ";
  document.getElementById("error_text").style.color = "red";
  return false;
}
function put_client_name_in_list_information_client() {
  return put_simple_client_text_in_list_information_client("name", "Nom invalide", 0);
}

function put_client_first_name_in_list_information_client() {
  return put_simple_client_text_in_list_information_client("first_name", "Prénom invalide", 1);
}

function put_client_complex_text_in_list_information_client
(
  id,
  pattern,
  error_message,
  index
) {
  let value = document.getElementById(id).value.trim();

  if (value.toLowerCase().match(pattern) && value.trim().length !== 0) {
    list_client_information1[index] = value.toLowerCase();
    return true;
  } else {
    document.getElementById("error_text").textContent = error_message + " ";
    color_text_if_wrong_answer()
    document.getElementById("error_text").style.textAlign = "center";
    return false;
  }
}

function put_client_number_in_list_information_client() {
  let number_validation =
    "^[+]?[(]?[0-9]{5}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$";
  return put_client_complex_text_in_list_information_client(
    "number",
    number_validation,
    "Numéro de téléphone invalide, format accepté : +221123456789",
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
