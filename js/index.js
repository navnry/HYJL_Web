$(".container-3 .list-tab ul li").on("click", function () {
    var index = $(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    $(".container-3 .list-item").eq(index).addClass("active").siblings().removeClass("active")
});

$(".column-title h3").on("click", function () {
    var index = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".container-7  .column-item").eq(index).addClass("active").siblings().removeClass("active")
});
$(".container-6 .list-tab ul li").on("click", function () {
    var index = $(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    $(".container-6 .list-item").eq(index).addClass("active").siblings().removeClass("active")
})
