$(function() {

    var cache = $('.box').html();

    // draggable boxes need to be draggable
    // draggable boxes can only be dropped on boxes
    // if draggable box is dragged onto another draggable box, it needs to swap
    // if draggable box is dragged onto empty box, it needs to drop correctly inside and original box needs to have white space where it was picked up



    var initialize = function() {
        // $('.draggable-box').draggable({
        //     revert: true
        // }).droppable({
        //     drop: function(event,ui) {
        //         console.log($(this).get(0));
        //         console.log((ui.draggable).get(0));
        //         swapNodes($(this).get(0),$(ui.draggable).get(0));
        //     }
        // });

        $('.droppable-box').droppable({
            drop: function (event, ui) {
                var dropped = ui.draggable;
                var droppedOn = this;

                if ($(droppedOn).children().length > 0) {
                    console.log('swapping');
                    // child needs to move to where the draggable came from
                    console.log('DROPPED', dropped);
                    console.log('PARENT', dropped.parent().parent())
                    console.log('NEXT SIB', dropped.parent().next())
                    dropped.parent().append($(droppedOn).children());
                    // draggable needs to be dropped
                }

                $(dropped).detach().css({
                    top: -8,
                    left: -8
                }).prependTo($(droppedOn));
            }
        });

        $('.draggable-box').draggable({
            zIndex: 10,
            revert: 'invalid',
            snap: '.droppable-box',
            snapMode: 'inner',
            snapTolerance: 75
        });
    };

    initialize();


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

        initialize();
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

        initialize();

    });
});
