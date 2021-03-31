"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', (response) => {
        $('#fortune-text').text(response);
    });
    
}

$('#get-fortune-button').on('click', showFortune);







// PART 2: SHOW WEATHER


function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};
    
    $.get(url, formData, (res) => {
        $('#weather-info').html(res.forecast);
    });
};

    // TODO: request weather with that URL and show the forecast in #weather-info
$("#weather-form").on('submit', showWeather);
 



// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    const formData = {
        'qty': $('#qty-field').val(),
        'melon_type': $('#melon-type-field').val()
    };
    
    console.log(formData);

    let url = "/order-melons.json";
    //let formData = {'code': result_code, 'msg': result_text}
    // TODO: show the result message after your form
    $.post(url, formData, (res) => {
        if (res.msg === 'OK') {
            $('#order-status').html(res.msg);
        }
        else {
            $('#order-status').addClass("order-error");
            $('#order-status').html(res.msg);
        }
    });
    // TODO: if the re)sult code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


