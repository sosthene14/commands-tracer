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
  "Numéro de téléphone : ",
  "E-mail : ",
  "Quantité : ",
  "Date : ",
  "Priorité : ",
  "Produit (s) : ",
  "Ville (s) : ",
];
const type_of_input_to_create = "textarea";
const type_of_container_to_create = "div";

function main() {
  for (let i = 1; i < parseInt(localStorage["k"]); i++) {
    try {
      /*************************************************************************************************/
      const get_lists_without_input = localStorage["liste" + i];
      const split_lists_without_input = get_lists_without_input.split(",");
      document.getElementById("text_if_empty_commands_list").textContent = "";
      let client_text = document.createElement("h4");
      upload_names_of_divs_of_commands_composition(client_text,0);
      client_text.style.marginTop = "30px";
      client_text.classList.add("text_counting_clients_number");

      /*************************************************************************************************/

      let div_name = document.createElement(type_of_container_to_create);
      upload_names_of_divs_of_commands_composition(div_name,1);
      let name = document.createElement(type_of_input_to_create);

      /*************************************************************************************************/

      let div_first_name = document.createElement(type_of_container_to_create);
      upload_names_of_divs_of_commands_composition(div_first_name,2);
      let first_name = document.createElement(type_of_input_to_create);

      /*************************************************************************************************/

      let div_email = document.createElement("div");
      let email = document.createElement(type_of_input_to_create);
      upload_names_of_divs_of_commands_composition(div_email,3);

      /*************************************************************************************************/

      let div_number = document.createElement(type_of_container_to_create);
      let number = document.createElement(type_of_input_to_create);
      upload_names_of_divs_of_commands_composition(div_number,4);

      /*************************************************************************************************/

      let div_quantity = document.createElement(type_of_container_to_create);
      let quantity = document.createElement(type_of_input_to_create);
      upload_names_of_divs_of_commands_composition(div_quantity,5);

      /*************************************************************************************************/
      let div_date = document.createElement(type_of_container_to_create);
      let date = document.createElement(type_of_input_to_create);
      upload_names_of_divs_of_commands_composition(div_date,6);

      /*************************************************************************************************/

      let div_priority = document.createElement(type_of_container_to_create);
      let priority = document.createElement(type_of_input_to_create);
      priority.textContent = localStorage["liste_priority" + i];
      upload_names_of_divs_of_commands_composition(div_priority,7);

      /*************************************************************************************************/

      let div_products = document.createElement(type_of_container_to_create);
      let string_listproduct_without_filter = localStorage["liste_product" + i];
      let create_listproducts = string_listproduct_without_filter.split(",");
      let listproducts_filter = [...new Set(create_listproducts)];
      let products = document.createElement(type_of_input_to_create);
      let new_products_liste = products.value.split(",");
      upload_names_of_divs_of_commands_composition(div_products,8);
      products.textContent = listproducts_filter.toString();

      /*************************************************************************************************/

      let div_cities = document.createElement(type_of_container_to_create);
      let string_listcities_without_filter = localStorage["liste_city" + i];
      let create_listcities = string_listcities_without_filter.split(",");
      let listcities_filter = [...new Set(create_listcities)];
      let cities = document.createElement(type_of_input_to_create);
      let new_cities_liste = cities.value.split(",");
      upload_names_of_divs_of_commands_composition(div_cities,9);
      cities.textContent = listcities_filter.toString();

      /*************************************************************************************************/

        function upload_names_of_divs_of_commands_composition(name,index)
        {
            name.textContent = names_of_commands_composition[index]
        }

      function upload_some_contains_of_commands_list() {
        let list_all_commands_composition = [
          cities,
          name,
          priority,
          first_name,
          products,
          date,
          quantity,
          number,
          email,
        ];
        let list_commands_composition_different_from_a_list = [
          name,
          first_name,
          email,
          number,
          quantity,
          date,
        ];

        for (let i = 0; i < list_all_commands_composition.length; i++) {
          list_all_commands_composition[i].classList.add(
            "text_shown_in_commands_list"
          );
        }
        for (
          let i = 0;
          i < list_commands_composition_different_from_a_list.length;
          i++
        ) {
          list_commands_composition_different_from_a_list[i].textContent =
            split_lists_without_input[i];
        }
      }
      upload_some_contains_of_commands_list();

      function commands_list_disabled_to_true(...args) {
        for (let arg of args) {
          arg.disabled = true;
        }
      }

      commands_list_disabled_to_true(
        cities,
        name,
        priority,
        first_name,
        products,
        date,
        quantity,
        number,
        email
      );

      function append_child_to_parent_div_corresponding_to_their_names() {
        let liste_div = [
          div_name,
          div_first_name,
          div_email,
          div_number,
          div_quantity,
          div_date,
          div_priority,
          div_products,
          div_cities,
        ];
        let liste_contents_of_div = [
          name,
          first_name,
          email,
          number,
          quantity,
          date,
          priority,
          products,
          cities,
        ];

        for (let i = 0; i < liste_div.length; i++) {
          liste_div[i].appendChild(liste_contents_of_div[i]);
        }
      }

      append_child_to_parent_div_corresponding_to_their_names();

      function append_child_to_principal_div(...args) {
        for (let arg of args) {
          principal_div.appendChild(arg);
        }
      }
      append_child_to_principal_div(
        client_text,
        div_name,
        div_first_name,
        div_email,
        div_number,
        div_quantity,
        div_date,
        div_priority,
        div_products,
        div_cities
      );
      function disposition_of_informations(...args) {
        for (let arg of args) {
          arg.classList.add("div_for_informations_shown");
        }
      }
      disposition_of_informations(
        div_cities,
        div_date,
        div_email,
        div_first_name,
        div_quantity,
        div_products,
        div_priority,
        div_number,
        div_name
      );

      function commands_list_disabled_to_false(...args) {
        for (let arg of args) {
          arg.disabled = false;
        }
      }

      function put_modification_commands_list_to_true() {
        commands_list_disabled_to_true(
          cities,
          name,
          priority,
          first_name,
          products,
          date,
          quantity,
          number,
          email
        );
      }

      function put_modification_commands_list_to_false() {
        commands_list_disabled_to_false(
          cities,
          name,
          priority,
          first_name,
          products,
          date,
          quantity,
          number,
          email
        );
      }

      let modify_commands_btn = document.createElement("button");
      modify_commands_btn.textContent = text_activate_modification;
      modify_commands_btn.classList.add("btn_for_removing_commands");
      principal_div.appendChild(modify_commands_btn);

      modify_commands_btn.onclick = function modify_commands_list_items() {
        let liste_of_informations_using_textarea = [
          name.value,
          first_name.value,
          email.value,
          number.value,
          quantity.value,
          date.value,
        ];

        if (modify_commands_btn.textContent == text_desactivate_modification) {
          put_modification_commands_list_to_true();

          for (
            let i = 0;
            i < liste_of_informations_using_textarea.length;
            i++
          ) {
            list_client_information1[i] =
              liste_of_informations_using_textarea[i];
          }

          liste_priority1[0] = priority.value;

          for (let i = 0; i < new_products_liste.length; i++) {
            new_products_liste[i] = products.value;
          }
          for (let i = 0; i < new_cities_liste.length; i++) {
            new_cities_liste[i] = cities.value;
          }

          let liste_of_commands_different_from_textarea = [
            "liste" + i,
            "liste_product" + i,
            "liste_city" + i,
            "liste_priority" + i,
          ];
          let liste_new_information_for_lists_different_from_textarea = [
            list_client_information1,
            new_products_liste,
            new_cities_liste,
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

          modify_commands_btn.style.backgroundColor = "green";
          modify_commands_btn.textContent = text_activate_modification;
        } else if (
          modify_commands_btn.textContent == text_activate_modification
        ) {
          put_modification_commands_list_to_false();

          modify_commands_btn.style.backgroundColor = "red";
          modify_commands_btn.textContent = text_desactivate_modification;
          modify_commands_btn.style.marginTop = "5px";
        }
      };

      function items_deleter_in_page(...args) {
        for (let arg of args) {
          principal_div.removeChild(arg);
        }
      }

      function items_deleter_in_localstorage(...args) {
        for (let arg of args) {
          localStorage.removeItem(arg);
        }
      }

      let delete_commands_btn = document.createElement("button");
      delete_commands_btn.textContent = text_delete_command;
      delete_commands_btn.classList.add("btn_for_removing_commands");
      principal_div.appendChild(delete_commands_btn);

      delete_commands_btn.onclick = function remove_items() {
        items_deleter_in_page(
          div_priority,
          div_products,
          div_name,
          div_first_name,
          div_date,
          div_email,
          div_cities,
          div_number,
          div_quantity,
          modify_commands_btn,
          delete_commands_btn,
          client_text
        );
        items_deleter_in_localstorage(
          "liste" + i,
          "liste_product" + i,
          "liste_priority" + i,
          "liste_city" + i
        );
      };
    } catch {}
  }
}
main();
