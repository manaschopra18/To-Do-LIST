$(function(e) 
{   

$('li').on('click',function(event){$(this).toggleClass("done")});
$("#new_todo_icon").on('click',function(){$('#new_todo_input').fadeToggle()});

$('.icon').on('click',function(event){
$(this).parent().fadeOut('500', function(){
    $(this).remove();
});
event.stopPropagation(); //DOESNT LET PARENT ELEMENTS GET CLICKED
});

$("#new_todo_input").keypress(function(e){
if (e.which===13){
    var input=$(this).val();
    $("ul").append("<li><span class='icon'><i class='fa fa-trash'></i></span>"+input+"</li>");

    $('li').on('click',function(event){$(this).toggleClass("done")});
    $('.icon').on('click',function(event){
        $(this).parent().fadeOut('500', function(){
        $(this).remove();
        });
    event.stopPropagation(); //DOESNT LET PARENT ELEMENTS GET CLICKED
    });
}

});
});
