
/*Tien Le - addmore-item-checked - on facilities tab*/
$(document).ready(function(){

    $('.addmore-function .checkall').on('click', function(){
        $('.addmore-item input[type="checkbox"]').prop('checked', true);
        $('.addmore-item').addClass('addmore-item-checked');
        
    });
    $('.addmore-function .uncheckall').on('click', function(){
        $('.addmore-item input[type="checkbox"]').prop('checked', false);
        $('.addmore-item').removeClass('addmore-item-checked');
    });
    $('.addmore-item').on('click', function(){
        $(this).find('.custom-control-input').prop('checked', true);
        if( $(this).hasClass('.addmore-item-checked') ) {
            $(this).removeClass('addmore-item-checked');
        }else {
            $(this).addClass('addmore-item-checked');
        }
        
    });
    // $('input[type="checkbox"]').on('click', function(){
    //     if($(this).prop("checked") == true){
    //         $(this).prop('checked', true);
    //         $(this).closest('.addmore-item').addClass('addmore-item-checked');
    //     }
    //     else if($(this).prop("checked") == false){
    //         $(this).prop('checked', false);
    //         $(this).closest('.addmore-item').removeClass('addmore-item-checked');
    //     }
    // });
    $('#room-types-details-tab a.nav-link').on('click', function(){
        $('h1.title-page').html($(this).html());
    });

    
});
