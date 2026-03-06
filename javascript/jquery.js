// var menuElem = document.getElementById('breakfast');
// var titleElem = menuElem.querySelector('.title');

// titleElem.onclick = function(){
//     menuElem.classList.toggle('open');
// };

// $(селектор).действие()
// $(this).hide();
// $("p").hide();

// $(document).ready(function(){
//     $("button").click(function(){
//         $("#test").hide();
//     });
// });

$(document).ready(function(){
    $("#b1").click(function(){
        alert("Text:" + $("#test").text());
    });

    // $("#b2").click(function(){
    //     alert("HTML: " + $("#test").html());
    // });
    $("#p1").append('Text added by append');

    $("img").after('<br>A little bit of our text');

    // $("#ad").remove();
    // $('div').remove(".test");

    $("#qq").empty();
    $('#ad').css("background-color", "#bf2192");
    $("#b2").click(function(){
        alert("Backgroundcolor = " + 
        $('#ad').css("background-color"))
    });

    $("p").css({
        "background-color": "#bf2192",
        "font-size":"200%"
    });
});