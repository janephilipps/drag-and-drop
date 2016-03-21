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

    $('#randomize').click(function() {

        // get containers
        // initialize empty array for each container
        // shuffle boxes and depending on number push into either array

        var containers = $('.box');
        var boxes = containers.children();

        var firstContainer = [];
        var secondContainer = [];

        for (var i = 0; i < boxes.length; i++) {
            var num = Math.floor(Math.random() * 10);

            if (num < 5) {
                firstContainer.push(boxes[i]);
            } else {
                secondContainer.push(boxes[i]);
            }
        }
        containers.empty();
        $('#one').append(firstContainer);
        $('#two').append(secondContainer);

    });
});
