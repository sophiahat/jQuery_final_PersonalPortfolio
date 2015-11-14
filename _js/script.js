
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
    
    
});