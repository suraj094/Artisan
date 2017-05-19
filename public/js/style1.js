var baseUrl = 'http://localhost:3000/collections/ashford';

$(document).ready(function () {

    // listen to change event (customize selector to your needs)
    // $('input[type=checkbox]').change(function (e) {
        $('#button').click(function (e) {        
        // e.preventDefault();
        // var filtername = $(this).attr('name'); 

        // if ($(this).is(':checked')) {

        //     // read in value
        //     var queryString = $(this).val();

        //     // loop through siblings (customize selector to your needs)
        //     var s = $(this).siblings();
        //     $.each(s, function () {

        //         // see if checked
        //         if ($(this).is(':checked')) {

        //             // append value
        //             queryString += ' OR ' + $(this).val();
        //         }
        //     });

        //     // jump to url
            window.location = baseUrl + '/filter/?'+ $.param($('input[type=checkbox]').filter(':checked').serializeObject());
        // }
        
    });

    $(".cb1,.cb2,.cb3,.cb4,.cb5").css("display", "none");
        
        $("#button-filter1").click(function(){
            var button_html = document.getElementById('button-filter1');
            if (button_html.innerHTML == 'Show More'){
                $(".cb1").css("display", "block");
                button_html.innerHTML = 'Show Less';
            } else {
                $(".cb1").css("display", "none");
                button_html.innerHTML = 'Show More';
            } 
    });
    $("#button-filter2").click(function(){
            var button_html = document.getElementById('button-filter2');
            if (button_html.innerHTML == 'Show More'){
                $(".cb2").css("display", "block");
                button_html.innerHTML = 'Show Less';
            } else {
                $(".cb2").css("display", "none");
                button_html.innerHTML = 'Show More';
            } 
    });
    $("#button-filter3").click(function(){
            var button_html = document.getElementById('button-filter3');
            if (button_html.innerHTML == 'Show More'){
                $(".cb3").css("display", "block");
                button_html.innerHTML = 'Show Less';
            } else {
                $(".cb3").css("display", "none");
                button_html.innerHTML = 'Show More';
            } 
    });
    $("#button-filter4").click(function(){
            var button_html = document.getElementById('button-filter4');
            if (button_html.innerHTML == 'Show More'){
                $(".cb4").css("display", "block");
                button_html.innerHTML = 'Show Less';
            } else {
                $(".cb4").css("display", "none");
                button_html.innerHTML = 'Show More';
            } 
    });
    $("#button-filter5").click(function(){
            var button_html = document.getElementById('button-filter5');
            if (button_html.innerHTML == 'Show More'){
                $(".cb5").css("display", "block");
                button_html.innerHTML = 'Show Less';
            } else {
                $(".cb5").css("display", "none");
                button_html.innerHTML = 'Show More';
            } 
    });

});


$(function () {
                $.fn.serializeObject = function()
                {
                    var o = {};
                    var a = this.serializeArray();
                    $.each(a, function() {
                        if (o[this.name] !== undefined) {
                            if (!o[this.name].push) {
                                o[this.name] = [o[this.name]];
                            }
                            o[this.name].push(this.value || '');
                        } else {
                            o[this.name] = this.value || '';
                        }
                    });
                    return o;
                };
});