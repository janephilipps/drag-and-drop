$(function() {

    var cache1 = $('#one').html();
    var cache2 = $('#two').html();

    var initialize = function() {

        $('.droppable-box').droppable({
            drop: function (event, ui) {
                var dropped = ui.draggable;
                var droppedOn = this;

                if ($(droppedOn).children().length > 0) {
                    dropped.parent().append($(droppedOn).children());
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

    $('#reset').click(function() {
        $('#one').html(cache1);
        $('#two').html(cache2);

        initialize();
    });

    $('#randomize').click(function() {

        var containers = $('.box');
        var boxes = $('.droppable-box');

        var firstContainer = [];
        var secondContainer = [];

        for (var i = 0; i < boxes.length; i++) {
            var num = Math.floor(Math.random() * 10);
            if (num < 5) {
                if (firstContainer.length < 9) {
                    firstContainer.push(boxes[i]);
                } else {
                    secondContainer.push(boxes[i]);
                }
            } else {
                if (secondContainer.length < 9) {
                    secondContainer.push(boxes[i]);
                } else {
                    firstContainer.push(boxes[i]);
                }
            }
        }
        containers.empty();
        $('#one').append(firstContainer);
        $('#two').append(secondContainer);

        initialize();

    });
});
