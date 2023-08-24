// JQUERY

$(document).ready(function() {
    let borderStyles = ['solid', 'dotted', 'dashed', 'double'];

    $('.change-button').on('click', function() {
        var boxNumber = $(this).data('box-number');
        if (boxNumber) {
            $('.box[data-box-number="' + boxNumber + '"]').css({
                'background-color': randomColor(),
                'border-radius': Math.floor(Math.random() * 25) + 'px',
                'border-style': borderStyles[Math.floor(Math.random() * borderStyles.length)],
                'border-color': randomColor(),
                'border-width': Math.floor(Math.random() * 20) + 'px'
            });
        }
    });

    $('#change').on('click', function() {
        $('.box').each(function() {
            $(this).css({
                'background-color': randomColor(),
                'border-radius': Math.floor(Math.random() * 25) + 'px',
                'border-style': borderStyles[Math.floor(Math.random() * borderStyles.length)],
                'border-color': randomColor(),
                'border-width': Math.floor(Math.random() * 20) + 'px'
            });
        });
    });

    $('.hide-button').on('click', function() {
        var boxNumber = $(this).index() + 1; // Assuming the index corresponds to the box number
        $('.box[data-box-number="' + boxNumber + '"]').css('visibility', 'hidden');
    });

    $('.hide-all').on('click', function() {
        $('.box').css('visibility', 'hidden');
    });

    $('.show-all').on('click', function() {
        $('.box').css('visibility', 'visible');
    });

    function randomColor() {
        return 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
    }
});



