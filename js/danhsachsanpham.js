function init(){
    var index =1;
    var imgs=["img/screen_index.jpg","/img/screen_index_2.jpg"];
 changeImage = function(){
         document.getElementById('img').src = imgs[index];
         index++;
         if(index == imgs.length)
         index =0;
}       
setInterval(changeImage,3000);
 
$(document).ready(function(){
    $("#chienthuat .products .product-item").slice(0,4).show();
    $(".btn.chienthuat").on("click",function(){
        if ($("#chienthuat .products .product-item:hidden").length == 0) {
            $(".btn.chienthuat").fadeOut('slow');
            $(".end.chienthuat").append("<b> Đã hết sản phẩm</b>");}
        else  $("#chienthuat .products .product-item:hidden").slice(0,4).show(1000);
            
        }
    )

    $("#kinhdi .products .product-item").slice(0,4).show();
    $(".btn.kinhdi").on("click",function(){
        if ($("#kinhdi .products .product-item:hidden").length == 0) {
            $(".btn.kinhdi").fadeOut('slow');
            $(".end.kinhdi").append("<b> Đã hết sản phẩm</b>");}
        else  $("#kinhdi .products .product-item:hidden").slice(0,4).show(1000);
            
        }
    )

    $("#nhapvai .products .product-item").slice(0,4).show();
    $(".btn.nhapvai").on("click",function(){
        if ($("#nhapvai .products .product-item:hidden").length == 0) {
            $(".btn.nhapvai").fadeOut('slow');
            $(".end.nhapvai").append("<b> Đã hết sản phẩm</b>");}
        else  $("#nhapvai .products .product-item:hidden").slice(0,4).show(1000);
            
        }
    )

    $("#phieuluu .products .product-item").slice(0,4).show();
    $(".btn.phieuluu").on("click",function(){
        if ($("#phieuluu .products .product-item:hidden").length == 0) {
            $(".btn.phieuluu").fadeOut('slow');
            $(".end.phieuluu").append("<b> Đã hết sản phẩm</b>");}
        else  $("#phieuluu .products .product-item:hidden").slice(0,4).show(1000);
            
        }
    )

    $("#sinhton .products .product-item").slice(0,4).show();
    $(".btn.sinhton").on("click",function(){
        if ($("#sinhton .products .product-item:hidden").length == 0) {
            $(".btn.sinhton").fadeOut('slow');
            $(".end.sinhton").append("<b> Đã hết sản phẩm</b>");}
        else  $("#sinhton .products .product-item:hidden").slice(0,4).show(1000);
            
        }
    )

    $("#gameonline .products .product-item").slice(0,4).show();
    $(".btn.gameonline").on("click",function(){
        if ($("#gameonline .products .product-item:hidden").length == 0) {
            $(".btn.gameonline").fadeOut('slow');
            $(".end.gameonline").append("<b> Đã hết sản phẩm</b>");}
        else  $("#gameonline .products .product-item:hidden").slice(0,4).show(1000);
            
        }
    )
});
  
}

