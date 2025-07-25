$(function() {
    $('#repeat').keyup(function() {
        $('#greet').text('oops ' + $('#repeat').val());
    });
});

// error in calling.
// $(function(){
//     $('#repeat').keyup($(function(){
//     $('#greet').text('oops ' + $('#repeat').val());
//     })
// })