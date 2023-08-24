// Jquery

$(document).ready(function(){
    let borderStyles = ['solid', 'dotted', 'dashed', 'double']; //array for random border style 

    $('.change-button').on('click', function(){     //generate random border components when change button is clicked
        let boxNumber = $(this).data('box-number'); //retrieves value associated with the clicked button
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


    $('#change').on('click', function(){ //change all button
        $('.box').each(function() { //generate random border components
            $(this).css({
                'background-color': randomColor(), 
                'border-radius': Math.floor(Math.random() * 25) + 'px',
                'border-style': borderStyles[Math.floor(Math.random() * borderStyles.length)],
                'border-color': randomColor(),
                'border-width': Math.floor(Math.random() * 20) + 'px'
            });
        });
    });

    // Generate random colors for boxes
    function randomColor() {
        return 'rgb(' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ')';
    }

    //selected hide buttons will hide boxNumber
    $('.hide-button').on('click', function(){
        var boxNumber = $(this).data('box-number');
        if (boxNumber !== undefined) {
            $('.box[data-box-number="' + boxNumber + '"]').css('visibility', 'hidden');
        } 
    });

    // Hide All button will hide all boxes
    $('#hide').on('click', function(){
        $('.hide-all').css('visibility', 'hidden');
    });

    // Show All button will make boxes visible
    $('#show').on('click', function(){
        $('.show-all').css('visibility', 'visible');
    });

    // Reset button will rest boxes to original  css style
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
            'background-color': '#76daa8',
            'border': '4px solid magenta'
        })
    })
});




