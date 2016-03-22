$(function() {

    // remember initial states
    var cache1 = $('#one').html(),
        cache2 = $('#two').html()
    ;

    var initialize = function() {

        $('.droppable-box').droppable({
            drop: function (event, ui) {
                var dropped = ui.draggable,
                    droppedOn = this
                ;

                if ($(droppedOn).children().length > 0) {
                    dropped.parent().append($(droppedOn).children());
                }

                $(dropped).detach().css({
                    // offset css because of margin and border
                    top: -8,
                    left: -8
                }).prependTo($(droppedOn));
            }
        });

        $('.draggable-box').draggable({
            zIndex: 10, // ensure dragged element stays on top
            revert: 'invalid',
            snap: '.droppable-box',
            snapMode: 'inner',
            snapTolerance: 25,
            scroll: false
        });
    };

    initialize();

    $('#reset').click(function() {
        $('#one').html(cache1);
        $('#two').html(cache2);

        initialize();
    });

    $('#randomize').click(function() {

        var num,
            target,
            firstContainer = [],
            secondContainer = [],
            containers = $('.box'),
            boxes = $('.droppable-box')
        ;

        for (var i = 0; i < boxes.length; i++) {
            num = Math.random();
            if (num < .5) {
                if (firstContainer.length < 9) {
                    target = firstContainer;
                } else {
                    target = secondContainer;
                }
            } else {
                if (secondContainer.length < 9) {
                    target = secondContainer;
                } else {
                    target = firstContainer;
                }
            }
            target.push(boxes[i]);
        }

        containers.empty();
        $('#one').append(firstContainer);
        $('#two').append(secondContainer);

        initialize();

    });
});
