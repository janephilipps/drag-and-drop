$(function() {

    var cache = $('.box').html();

    $('.box').sortable({
        connectWith: '.box',
        cursor: 'move',
        delay: 150,
        distance: 5,
        scroll: false
    });

    $('#reset').click(function() {

        $('#one').html(cache).sortable('refresh');
        $('#two').empty();
    });
});
