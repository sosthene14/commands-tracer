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

const get_dropdown_icon1 = document.getElementById("dropdown");
const get_dropdown_icon2 = document.getElementById("dropdown2");
const get_dropdown_icon3 = document.getElementById("dropdown3");
const i = 1;
const display_block = "block";
const display_none = "none";
const display_hidden = "hidden";
const display_visible = "visible";

const liste_priority1 = [];
const liste_products1 = [];
const liste_city1 = [];
const list_client_information1 = [];
let k = localStorage.setItem('k',localStorage.length+1);

function calling_all_functions_of_the_file()
{
    hide_and_show_product_list();
    upload_contains_of_products_list();
    hide_and_show_priorities_list();
    upload_contains_of_priorities_list();
    hide_and_show_cities_list();
    upload_contains_of_cities_list();
}
calling_all_functions_of_the_file();

function json_contains()

{
    let my_json_contains = [

        {
        "products":
        {
            "product_1":"Tomates",
            "product_2":"Poivrons",
            "product_3":"Aubergines",
            "product_4":"Oignons",
            "product_5":"Lentilles",
            "product_6":"Ails",
            "product_7":"Comcombres",
            "product_8":"Courgettes",
            "product_9":"Brocolis",
            "product_10":"Navets",
            "product_11":"Haricots Vert",
            "product_12":"Chous",
            "product_13":"Lettus",
            "product_14":"Pommes de terre",
            "product_15":"Piments"
        },
        "priorities":
        {
            "priority_1":"Faible",
            "priority_2":"Moyenne",
            "priority_3":"Urgente",
        },
        "cities":
        {
            "city_1":"Dakar",
            "city_2":"Brazzaville",
            "city_3":"Libreville",
            "city_4":"Paris",
            "city_5":"Bruxelle"
        },
            
        }
        
        ];
        return my_json_contains;
}

function hide_and_show_product_list()

{

    if ( get_products_list.style.display == display_none)
{
   
    get_products_list.style.display = display_block;
    get_dropdown_icon1.style.visibility = display_hidden;
}

document.addEventListener('mouseup', function(e) {
    const container = get_products_list;
    if (!container.contains(e.target)) {
        container.style.display = display_none;
        get_dropdown_icon1.style.visibility = display_visible;
    }
});

}

function hide_and_show_priorities_list()

{
    if ( get_priorities_list.style.display == display_none)
{
    get_priorities_list.style.display = display_block;
    get_dropdown_icon2.style.visibility = display_hidden;
}
document.addEventListener('mouseup', function(e) {
    const container = get_priorities_list;
    if (!container.contains(e.target)) {
        container.style.display = display_none;
        get_dropdown_icon2.style.visibility = display_visible;
    }
});

}

function hide_and_show_cities_list()

{
    if ( get_cities_list.style.display == display_none)
{
    get_cities_list.style.display = display_block;
    get_dropdown_icon3.style.visibility = display_hidden;
}
document.addEventListener('mouseup', function(e) {
    const container = get_cities_list;
    if (!container.contains(e.target)) {
        container.style.display = 'none';
        get_dropdown_icon3.style.visibility = display_visible;
    }
});

}


function upload_contains_of_products_list ()
{


    for (let i = 1; i < 16; i++)
    {
        let div = document.createElement(diver);
        let span = document.createElement(spaner);
        let checkbox = document.createElement(inputer);

        checkbox.classList.add("form-check-input");
        div.classList.add("span-and-input");

        span.textContent = json_contains()[0]["products"]["product_"+i];
        checkbox.type = "checkbox";
        
        div.appendChild(span);
        div.appendChild(checkbox);
        get_products_list.appendChild(div);
        
   
   /*     function saving_check_box_checked()
    {
        if (('product'+i in localStorage))
        {
            checkbox.checked = true;
        }
    }
    saving_check_box_checked();*/

    checkbox.onclick = function put_name_of_product_in_local_storage_if_checkbox_checked()
        {
            if (checkbox.checked == true)
            {
                localStorage.setItem('product'+i,span.textContent);   
                guard_product.push("product");
            }      
              
            else
            {
                localStorage.removeItem('product'+i);
                guard_product.pop("product");
            }
        }
    }
}

function upload_contains_of_priorities_list ()
{
    for (let i = 1; i < 4; i++)
    {
        let div = document.createElement(diver);
        let span = document.createElement(spaner);
        let radio = document.createElement(inputer);

        radio.classList.add("form-check-input");
        div.classList.add("span-and-input");
        span.textContent = json_contains()[0]["priorities"]["priority_"+i];
        radio.type = "radio";
        radio.name = "choix";
        
        div.appendChild(span);
        div.appendChild(radio);
        get_priorities_list.appendChild(div);


    radio.onclick = function put_state_of_priority_in_local_storage_if_radio_checked()
    {
        if (radio.checked == true)
        {
            localStorage.setItem('priority',span.textContent);
            liste_priority1[0] = span.textContent;
            guard_priority.push("priority");
        }
        else
        {
            localStorage.removeItem('priority');
            guard_priority.pop("priority");
        }
    }
    }
}



function upload_contains_of_cities_list ()
{
    
    for (let i = 1; i < 6; i++)
    {
        let div = document.createElement(diver);
        let span = document.createElement(spaner);
        let input_checkbox = document.createElement(inputer);
        input_checkbox.classList.add("form-check-input");
        div.classList.add("span-and-input");
        span.textContent = json_contains()[0]["cities"]["city_"+i];
        input_checkbox.type = "checkbox";
        div.appendChild(span);
        div.appendChild(input_checkbox);
        
        get_cities_list.appendChild(div);
        
        
    input_checkbox.onclick = function put_name_of_city_in_local_storage_if_checkbox_checked()
        {
            if (input_checkbox.checked == true)
            {
                localStorage.setItem('city'+i,span.textContent);
                guard_cities.push("city");
            }
            else
            {
                localStorage.removeItem('city'+i);
                guard_cities.pop("city");
            }
        }
        
    }
  
   
}

function put_user_information_in_local_storage()
{
    if (put_client_email_in_localstorage() && put_client_first_name_in_localstorage() && put_date_in_localstorage() && put_client_number_in_localstorage() && put_commands_quantity_in_localstorage() && put_client_name_in_localstorage() && guard_cities[0] == "city" && guard_priority[0] == "priority" && guard_product[0] == "product")
    {
        
        for (let i = 1; i < 30 ; i++)
        {
                    if ('product'+i in localStorage)
                    {
                        liste_products1.push(localStorage["product"+i]);
                    }
           
                    if ('city'+i in localStorage)
                    {
                        liste_city1.push(localStorage["city"+i]);
                    }

                    put_client_name_in_localstorage();
                    put_client_first_name_in_localstorage();
                    put_client_number_in_localstorage();
                    put_client_email_in_localstorage();
                    put_commands_quantity_in_localstorage();
                    put_date_in_localstorage();
                   
                    let liste_of_commands_different_from_textarea = ['liste'+localStorage['k'],'liste_product'+localStorage['k'],'liste_city'+localStorage['k'],'liste_priority'+localStorage['k']];
                    let liste_new_information_for_lists_different_from_textarea = [list_client_information1,liste_products1,liste_city1,liste_priority1];

                    for (let i =0; i<liste_of_commands_different_from_textarea.length; i++)
    
                    {
                        localStorage.setItem(liste_of_commands_different_from_textarea[i],liste_new_information_for_lists_different_from_textarea[i]);
                    }

                    document.getElementById("error_text").textContent = "Enregistré avec succès ";
                    document.getElementById("error_text").style.color = "green";
                    if ('product'+i in localStorage || 'city'+i in localStorage || 'priority' in localStorage)
                    {
                        localStorage.removeItem('product'+i);
                        localStorage.removeItem('city'+i);
                        localStorage.removeItem('priority');
                    }
        }
        window.location.reload();
        localStorage.setItem('k',parseInt(localStorage['k']) + 1);
        let p = localStorage['k']-5;
        guard_cities = [];
        guard_priority = [];
        guard_product = [];
    }
 else 
 {
    if (!put_client_name_in_localstorage())
    {
        document.getElementById("error_text").textContent = "Nom invalide ";
        document.getElementById("error_text").style.color = "red";
    }
    else if (!put_client_first_name_in_localstorage())
    {
        document.getElementById("error_text").textContent = "Prenom invalide ";
        document.getElementById("error_text").style.color = "red";
    }
    else if (!put_client_number_in_localstorage())
    {
        document.getElementById("error_text").textContent = "Numero invalide, format accepté : +221123456789 ";
        document.getElementById("error_text").style.color = "red";
    }
    else if (!put_client_email_in_localstorage())
    {
        document.getElementById("error_text").textContent = "Email invalide ";
        document.getElementById("error_text").style.color = "red";
    }
    else if (!put_commands_quantity_in_localstorage())
    {
        document.getElementById("error_text").textContent = "Quantité invalide ";
        document.getElementById("error_text").style.color = "red";
    }
    else if (!put_date_in_localstorage())
    {
        document.getElementById("error_text").textContent = "Date ";
        document.getElementById("error_text").style.color = "red";
    }
    else if (guard_product[0] !== "product")
    {
        document.getElementById("error_text").textContent = "Veuillez sélectionner au moins un produit ";
        document.getElementById("error_text").style.color = "red";
    }
    else if (guard_priority[0] !== "priority")
    {
        document.getElementById("error_text").textContent = "Veuillez sélectionner une priorité ";
        document.getElementById("error_text").style.color = "red";
    }
    else if (guard_cities[0] !== "city")
    {
        document.getElementById("error_text").textContent = "Veuillez sélectionner au moins une ville ";
        document.getElementById("error_text").style.color = "red";
    }
    
 }
    
}


function put_client_name_in_localstorage()
{
    
    let get_client_name = document.getElementById("name").value.trim();
    
    if(get_client_name.trim().length !== 0 && !get_client_name.match(regexnumber) && !ponctuations.test(get_client_name))
    {
        list_client_information1[0] = get_client_name;
        return true;
    }
    else
    {
        document.getElementById("error_text").textContent = "Nom invalide ";
        document.getElementById("error_text").style.color = "red";
        return false;
    }
}

function put_client_first_name_in_localstorage()
{
   
    let get_client_first_name = document.getElementById("first_name").value.trim();

    if(get_client_first_name.trim().length !== 0 &&  !get_client_first_name.match(regexnumber) && !ponctuations.test(get_client_first_name))

    {
        list_client_information1[1] = get_client_first_name;
        return true;
    }
    else
    {
        document.getElementById("error_text").textContent = "Prénom invalide ";
        document.getElementById("error_text").style.color = "red";
        return false;
    }
    
}

function put_client_number_in_localstorage()
{
  
    let number_validation = "^[\+]?[(]?[0-9]{5}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$";
    let get_client_number = document.getElementById("number").value.trim();

    if(get_client_number.match(number_validation) && get_client_number.trim().length !== 0)

    {
        list_client_information1[2] = get_client_number;
        return true;
    }
    else
    {
        document.getElementById("error_text").textContent = "Numéro de téléphone invalide, format accepté : +221123456789 ";
        document.getElementById("error_text").style.color = "red";
        document.getElementById("error_text").style.textAlign = "center";
        return false;
    }
    
}

function put_client_email_in_localstorage()

{
    
    let email_validation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let get_client_email = document.getElementById("email").value.trim();

    if(get_client_email.toLowerCase().match(email_validation) && get_client_email.trim().length !== 0)

    {
        list_client_information1[3] = get_client_email.toLowerCase();
        return true;
    }

    else

    {
        document.getElementById("error_text").textContent = "E-mail invalide ";
        document.getElementById("error_text").style.color = "red";
        document.getElementById("error_text").style.textAlign = "center";
        return false
    }
    
}
function put_commands_quantity_in_localstorage()
{
    let get_quantity = document.getElementById("quantity").value.trim();

    if(get_quantity.trim().length !== 0)

    {
        list_client_information1[4] = get_quantity;
        return true;
    }
    
}

function put_date_in_localstorage()
{
    let get_date = document.getElementById("date").value.trim();

    if(get_date.trim().length !== 0)

    {
        list_client_information1[5] = get_date;
        return true;
    }
    
}
