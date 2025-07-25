$(function(){
    $('#repeat').keyup($(function(){
    $('#greet').text('oops ' + $('#repeat').val());
    })
})