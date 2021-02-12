﻿"use strict";
$(document).ready(function() {

    let wrapper = $("#wrapper");

    let utenti = [
        { "id": 1, "nome": "pippo", "password": "pippo" },
        { "id": 2, "nome": "pluto", "password": "pluto" },
        { "id": 3, "nome": "minnie", "password": "minnie" },
        { "id": 4, "nome": "sonny", "password": "sonny" }
    ]

    let ombrelloni = []
        /*
        	[{"id":1, stato:[0,0,0,0, etc]},
        	 {"id":2, stato:[0,0,0,0, etc]},
        	 {"id":3, stato:[0,0,0,0, etc]}]  */

    for (let i = 1; i <= 666; i++) {
        let ombrellone = { "id": i, stato: [] }
        for (let j = 1; j <= 107; j++)
            ombrellone.stato.push(0)
        ombrelloni.push(ombrellone);
    }

    // <a hfer="#" download="ombrelloni.json"> salva json si disco </a>

    $("<a>").prop({ "download": "ombrelloni.json", "href": "#" }).text("salva json su disco")
        .appendTo(wrapper).on("click", function() {
            let json = { "utenti": utenti, "ombrelloni": ombrelloni }
            json = JSON.stringify(json, null, 3)
            let blob = new Blob([json], { type: 'application/json' });
            $(this).prop("href", URL.createObjectURL(blob));
        })
})