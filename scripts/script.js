// Jquery

$(document).ready(function(){
    let borderStyles = ['solid', 'dotted', 'dashed', 'double'];

    $('.change-button').on('click', function(){
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


    $('#change').on('click', function(){
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

    function randomColor() {
        return 'rgb(' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ')';
    }

    $('.hide-button').on('click', function(){
        var boxNumber = $(this).data('box-number');
        if (boxNumber !== undefined) {
            $('.box[data-box-number="' + boxNumber + '"]').css('visibility', 'hidden');
        } 
    });

    $('#hide').on('click', function(){
        $('.hide-all').css('visibility', 'hidden');
    });

    $('#show').on('click', function(){
        $('.show-all').css('visibility', 'visible');
    });

    $('#reset').on('click', function(){
        $('.first').css({
            'background-color': '#f9665e',
            'border': '4px solid black'
        })
        $('.sec').css({
            'background-color': '#799fcb',
            'border': '5px dashed yellow'
        })
        $('.third').css({
            'background-color': '#A9c3B6',
            'border': '4px solid magenta'
        })
    })
});




