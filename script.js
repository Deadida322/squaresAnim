let count = 1;
$(function() {
    $('button').on('click', function(e){
        e.preventDefault();
        count++;
        console.log(1)
        if(count%2){
            $('button').html('запустить')
            $('.square').css({
                'animation-play-state':'paused'
            })
        }else{
            $('button').html('остановить')
            $('.square').css({
                'animation-play-state':'running'
            })
        }
        
    })
});