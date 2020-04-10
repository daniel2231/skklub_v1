$(document).ready(function () {
    $(".modal .btn_close").click(function () {
        setCookieMobile( "todayCookie", "done" , 1);
        $(".modal").hide();
    });
});
 
function setCookieMobile ( name, value, expiredays ) {
    var todayDate = new Date();
    todayDate.setDate( todayDate.getDate() + expiredays );
    document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}
function getCookieMobile () {
    var cookiedata = document.cookie;
    if ( cookiedata.indexOf("todayCookier=done") < 0 ){
         $(".modal").show();
    }
    else {
        $(".modal").hide();
    }
}
getCookieMobile();