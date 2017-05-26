// Check Off Specific Todos By Clicking
$("li").click(function(){
    $(this).css({
        color:"grey",
        textDecoration:"line-through"
    });
});