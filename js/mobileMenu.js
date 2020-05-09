$("#bars").on("click",function () {
    $("header menu").toggleClass("display");
    $("#bars").css("display","none");
    $("#cross").css("display","inherit");
})
$("#cross").on("click",function () {
    $("header menu").toggleClass("display");
    $("#cross").css("display","none");
    $("#bars").css("display","inherit");
})
