
$('document').ready(function() {
    var path = location.pathname;
    var pathArray = path.split('/');
    var pArrLength = pathArray.length;
    for(i = 0; i < pArrLength; i++) {
        $("a[href*='" + pathArray[i] + "']").addClass("selected");
 

    }
    $('#accordion').accordion({
       heightStyle: "content"
    });
    
    $('nav li').hover(function() {
        $(this).find('.subnav').slideDown(1000);
        $(this).find('a').addClass('active');
        $(this).stop(true,true);
    }, function() {
        $(this).find('.subnav').slideUp(1000);
        $(this).find('a').removeClass('active');
        $(this).stop(true,true);
    });
        
});