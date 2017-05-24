function carregarCardapio() {

//$(document).ready(function () {

    $.getJSON('json/pizzas_tradicionais.json', function (data) {
        var items = [];
        $.each(data, function (key, val) {
            $('#pizzas_tradicionais tr:last').after('<tr>' +
                '<th><b>' + val.n + '</b></th>' +
                '<td><i>' + val.i + '</i></td>' +
                '<td><center>' + val.vp + '</center></td>' +
                '<td><center>' + val.vm + '</center></td>' +
                '<td><center>' + val.vg + '</center></td>' +
                '</tr>');
        });

    });

    $.getJSON('json/pizzas_doces.json', function (data) {
        var items = [];
        $.each(data, function (key, val) {
            $('#pizzas_doces tr:last').after('<tr>' +
                '<th><b>' + val.n + '</b></th>' +
                '<td><i>' + val.i + '</i></td>' +
                '<td><center>' + val.vp + '</center></td>' +
                '<td><center>' + val.vm + '</center></td>' +
                '<td><center>' + val.vg + '</center></td>' +
                '</tr>');
        });

    });


    $.getJSON('json/acai.json', function (data) {
        var items = [];
        $.each(data, function (key, val) {
            $('#acai tr:last').after('<tr>' +
                '<th><b>' + val.n + '</b></th>' +
                '<td><i>' + val.i + '</i></td>' +
                '<td><center>' + val.vp + '</center></td>' +
                '<td><center>' + val.vm + '</center></td>' +
                '</tr>');
        });

    });

//});

}