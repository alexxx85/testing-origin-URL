$("#inpt_search").on('focus', function () {
    $(this).parent('label').addClass('active');
});

$("#inpt_search").on('blur', function () {
    if($(this).val().length == 0)
        $(this).parent('label').removeClass('active');
});

$('.LP') .mouseover( (e) => {
    ('hovering!');
    var parentWidth = $(e.currentTarget).width();
    $(e.currentTarget).children('ul').width( parentWidth );
});
