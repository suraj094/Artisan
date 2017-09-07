var baseUrl = 'http://localhost:3000/collections/ashford';

$(document).ready(function () {

    // listen to change event (customize selector to your needs)
    // $('input[type=checkbox]').change(function (e) {
        $('#button1,#button2,#button3,#button-4,#button5').click(function (e) {        
        e.preventDefault();
        url = window.location.href.split('/filter');
        // window.location = url[0]; 
        // var filtername = $('input[type=checkbox]').attr('name'); 

        // if ($('input[type=checkbox]').is(':checked')) {

        //     // read in value
        //     var queryString = $('input[type=checkbox]').val();

        //     // loop through siblings (customize selector to your needs)
        //     var s = $('input[type=checkbox]').siblings();
        //     $.each(s, function () {

        //         // see if checked
        //         if ($('input[type=checkbox]').is(':checked')) {

        //             // append value
        //             queryString += ' OR ' + $('input[type=checkbox]').val();
        //         }
        //     });

        //     // jump to url
        //     window.location = baseUrl + '/filter/?'+ filtername + "=" +queryString;
        // }

        // var selectedFilter = $('input[type=checkbox]').filter(':checked');
        // if (selectedFilter.length){
        //     selectedFilterValues = [];
        //     selectedFilter.each(function(){
        //         var currentFilter = $(this);
        //         selectedFilterValues.push(currentFilter.attr('name'),currentFilter.val())
        //     })
             
        // }

        // Obj = ArrToObj(selectedFilterValues);
        // window.location = url[0] + "/filter?" + $.param(Obj);
        window.location = url[0] + '/filter/?'+ $.param($('input[type=checkbox]').filter(':checked').serializeObject());
        });

        $(".cb1,.cb2,.cb3,.cb4,.cb5").css("display", "none");
        
        $("#button-filter1").click(function(){
            var button_html = document.getElementById('button-filter1');
            if (button_html.className == 'fa fa-arrow-down'){
                $(".cb1").css("display", "block");
                button_html.className = 'fa fa-arrow-up';
            } else {
                $(".cb1").css("display", "none");
                button_html.className = 'fa fa-arrow-down';
            } 
    });
    $("#button-filter2").click(function(){
            var button_html = document.getElementById('button-filter2');
            if (button_html.className == 'fa fa-arrow-down'){
                $(".cb2").css("display", "block");
                button_html.className = 'fa fa-arrow-up';
            } else {
                $(".cb2").css("display", "none");
                button_html.className = 'fa fa-arrow-down';
            } 
    });
    $("#button-filter3").click(function(){
            var button_html = document.getElementById('button-filter3');
            if (button_html.className == 'fa fa-arrow-down'){
                $(".cb3").css("display", "block");
                button_html.className = 'fa fa-arrow-up';
            } else {
                $(".cb3").css("display", "none");
                button_html.className = 'fa fa-arrow-down';
            } 
    });
    $("#button-filter4").click(function(){
            var button_html = document.getElementById('button-filter4');
            if (button_html.className == 'fa fa-arrow-down'){
                $(".cb4").css("display", "block");
                button_html.className = 'fa fa-arrow-up';
            } else {
                $(".cb4").css("display", "none");
                button_html.className = 'fa fa-arrow-down';
            } 
    });
    $("#button-filter5").click(function(){
            var button_html = document.getElementById('button-filter5');
            if (button_html.className == 'fa fa-arrow-down'){
                $(".cb5").css("display", "block");
                button_html.className = 'fa fa-arrow-up';
            } else {
                $(".cb5").css("display", "none");
                button_html.className = 'fa fa-arrow-down';
            } 
    });
    });



function ArrToObj(array){
  var Obj = {};
  var len = array.length;
  for (var i = 0; i < len; i+=2){
    Obj[array[i]] = array[i+1]
  }
  return Obj;
}

function applySetting() {
var checkboxValues = null;
  localStorage.checkboxValues = null;
checkboxValues = {};
  var  $checkboxes = $('input[type=checkbox]').filter(':checked');

// $checkboxes.on("change", function(){
  $checkboxes.each(function(){
    checkboxValues[this.id] = this.checked;
  });
  
  localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
// });
  
}

function checkbox(){
    url = window.location.href.split('/filter');
    if(url.length == 1){
        localStorage.checkboxValues = null;
    }
 checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {};   
 $.each(checkboxValues, function(key, value) {
  $("#" + key).prop('checked', value);
});

}


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

var url1 = window.location.href.split('/filter');

if(url1.length > 1 ){
    $("#filter-btn").css("display", "block");
}

function div_show() {
document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
}

function SUBMIT(){
var url = window.location.href; 
  $('#form5').submit(function(e) {
    var name    = document.getElementById('name');
    var email   = document.getElementById('email');
    var item_id = document.getElementById('item_id');
    var message = document.getElementById('message');
    if (!name.value || !email.value || !message.value) {
      alert("Fill All Fields !");
      return false;
    } else {
    $.ajax({
    url: "https://mailthis.to/surajprakash094@gmail.com", 
    method: "POST",
    data: {name: name.value,
       email: email.value,
       item_id : item_id.value,
        message : message.value},
    dataType: "text/html",
});
      e.preventDefault();
      $(this).get(0).reset();
      document.getElementById('return-text').innerHTML = "* Thank You! Our program advisor will contact you soon";
    //   window.location = "http://localhost:3000/products";
      window.history.go(0);
    }
    // window.history.go(0);
  });
  
};

///////////////////////////////////product page slick////////////////
var context;
var $window = $(window);

   $(document).on('ready', function() {
    if($window.width() >= 768) {
        
          // $(window).resize(function() {
      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
      });
    // });
    } else if (($window.width() >= 480) &&($window.width()  <= 767)) {
        // $(document).on('ready', function() {
          // $(window).resize(function() {
      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
      });
    // });
    } else if ($window.width() <= 479) {
        // $(document).on('ready', function() {
          // $(window).resize(function() {
      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
      });
    // });
    }
});

var year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

function SUBSCRIBE(){
var url = window.location.href; 
  $('#subscribe').submit(function(e) {
    var email = document.getElementById('emailId');
    if(!email.value){
        alert("Fill All Fields !");
        return false;
    }
    else
    {
        $.ajax({
        url: "https://mailthis.to/artisandecor@artisanindia.com",
        method: "POST",
        data: {email: email.value},
        dataType: "text/html",
});
      e.preventDefault();
      $(this).get(0).reset();
      document.getElementById('emailId').value = "Thank You for subscribing our newsletter";
      setTimeout(function(){
        location.reload();
      }, 5000);
    }

  });
  
}

function SUBMIT(){
var url = window.location.href; 
  $('#form').submit(function(e) {
    var name = document.getElementById('cont_name');
    var email = document.getElementById('cont_email');
    var sub = document.getElementById('cont_subject');
    var message = document.getElementById('cont_message');
    if (!name.value || !email.value || !message.value || !sub.value) {
      alert("Fill All Fields !");
      return false;
    } else {
    $.ajax({
    url: "https://mailthis.to/artisandecor@artisanindia.com", //
    method: "POST",
    data: {name: name.value,
       email: email.value,
       subject : sub.value,
        message : message.value},
    dataType: "text/html",
});
      e.preventDefault();
      $(this).get(0).reset();
      document.getElementById('return-text-contact').innerHTML = "Thank You! We will contact you soon";
    //   document.getElementById('return-text-contact').style.display = "block";
    setTimeout(function(){
	location.reload();
	},5000);
    }
  });
  
}