"use strict"

let intestazioni = ["idMeal", "strMeal", "img", "", ""];
let larghezze = ["50px", "310px", "60px", "40px", "40px"];

window.onload = function () {
    let _radioWrapper = document.getElementById("radioWrapper");
    let _table = document.getElementById("table");
    let _dettagliWrapper = document.getElementById("dettagliWrapper");
    let categoria = "Breakfast";

    caricaRadioButtons();
    caricaTabella();

    /* *********************** FUNZIONI ***********************  */
    function caricaRadioButtons(params) {
        for (const key in categoryList) {
            let radioButton = document.createElement("input");
            radioButton.type = "radio";
            radioButton.name = "category";
            radioButton.value = key;
            _radioWrapper.appendChild(radioButton);

            let _span = document.createElement("span");
            _span.innerHTML = key;
            _radioWrapper.appendChild(_span);

            let _br = document.createElement("br");
            _radioWrapper.appendChild(_br);

            if (key == "breakfast") {
                radioButton.checked = true;
            }
            radioButton.addEventListener("click", function () {
                categoria = this.value;
                caricaTabella();
            });
        }
    }

    function  creaIntestazioni() {
        let _tr = document.createElement("tr");
        _table.appendChild(_tr);
        
        for (let i = 0; i < intestazioni.length; i++) {
            let _th = document.createElement("th");
            _th.innerHTML = intestazioni[i];
            _th.style.width = larghezze[i];
            _tr.appendChild(_th);
        }
    }

    function caricaTabella() {
        _table.innerHTML = "";
        creaIntestazioni();

        for (const item of categoryList[categoria]) {
            let _tr = document.createElement("tr");
            _table.appendChild(_tr);

            // Id
            let _td = document.createElement("td");
            _td.innerHTML = item.idMeal;
            _tr.appendChild(_td);

            // Nome
            _td = document.createElement("td");
            _td.innerHTML = item.strMeal;
            _tr.appendChild(_td);

            // Immagine
            let _img = document.createElement("img");
            _td = document.createElement("td");
            _img.src = item.strMealThumb;
            _img.idMeal = item.idMeal;
            _img.addEventListener("click", visualizzaVideo)
            _img.style.width = "55px";
            _td.appendChild(_img);
            _tr.appendChild(_td);

            // lente
            _img = document.createElement("img");
            _td = document.createElement("td");
            _img.src = "img/lente.jpg";
            _img.idMeal = item.idMeal;
            _img.addEventListener("click", visualizzaDettagli);
            _img.style.width = "30px";
            _td.appendChild(_img);
            _tr.appendChild(_td);

            // Delete
            _img = document.createElement("img");
            _td = document.createElement("td");
            _img.src = "img/delete.png";
            _img.idMeal = item.idMeal;
            _img.addEventListener("click", cancella);
            _img.style.width = "30px";
            _td.appendChild(_img);
            _tr.appendChild(_td);
        }
    }

    function cancella() {
        for (let i = 0; i < categoryList[categoria].length; i++) {
            let item = categoryList[categoria][i];
            if (item.idMeal == this.idMeal) {
                categoryList[categoria].splice(i, 1);
                break;
            }
        }

        caricaTabella();
    }

    function visualizzaDettagli() {
        // details.meals --> accedo alla chiave meals
        for (const item of details.meals) {
            let meal = item.meals[0];
            if (meal.idMeal == this.idMeal) {
                let s = "<b>" + meal.strMeal + " </b>"
                s += meal.strInstructions;
                _dettagliWrapper.innerHTML = s;
            }
        }
    }

    function visualizzaVideo() {
        for (const item of details.meals) {
            let meal = item.meals[0];
            if (meal.idMeal == this.idMeal) {
                window.open(meal.strYoutube);
                break;
            }
        }
    }
}