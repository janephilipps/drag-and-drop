$(function() {

    var cache = $('.box').html();

    // $('.box').sortable({
    //     connectWith: '.box',
    //     cursor: 'move',
    //     delay: 150,
    //     distance: 5,
    //     scroll: false
    // })
    $('.box').droppable();
    $('.draggable-box').draggable({
        revert: 'invalid'
    }).droppable({
        drop: function(event,ui) {
            swapNodes($(this).get(0),$(ui.draggable).get(0));
        }
    });


    //by bobince - http://stackoverflow.com/a/698440/2033671
    function swapNodes(a, b) {
        var aparent= a.parentNode;
        var asibling= a.nextSibling === b ? a : a.nextSibling;
        b.parentNode.insertBefore(a, b);
        aparent.insertBefore(b, asibling);
    };

    $('#reset').click(function() {
        $('#one').html(cache);
        $('#two').empty();
    });

    $('#randomize').click(function() {

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
