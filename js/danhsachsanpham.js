function init(){
    var index =1;
    var imgs=["img/screen_index.jpg","img/screen_index_2.jpg"];
 changeImage = function(){
         document.getElementById('img').src = imgs[index];
         index++;
         if(index == imgs.length)
         index =0;
}       
setInterval(changeImage,3000);



    
    let kw = document.getElementById("keyword");
    kw.addEventListener("change", function() {
        let subjects = $("#all").find(".product-name");
        for (let s of subjects) {
            let t = s.textContent.toLowerCase();
            if (t.indexOf(this.value.toLowerCase()) >= 0) {
                s.parentElement.classList.remove("search");
                setTimeout(function() {
                    s.parentElement.classList.add("search");
                }, 100)
            }
                
        }
    });
  



var games = ['Gta V' ,'Fifa' , 'Garry mod' ,'Outlast' ,'Terraria','Five night','Standew Valley','Than Trung'];
    $("#keyword").keyup(function(){
        let txt = $(this).val().toLowerCase();
        let h ='';


        for(let c of games)
            if(c.toLowerCase().indexOf(txt) >= 0 ){
               h += `
                <li style="min-width:200px"><a href="#all">${c}</a></li>
                `;
             }
       if( h != ''){
           $("#suggest").html(h);
           $("#suggest").show();
       }      
    });

    $("#suggest").on("click","a",function(){
        $("#keyword").val($(this).text());
        $("#suggest").hide();
    });
        
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

    $("#playstation .products .product-item").slice(0,4).show();
    $(".btn.playstation").on("click",function(){
        if ($("#playstation .products .product-item:hidden").length == 0) {
            $(".btn.playstation").fadeOut('slow');
            $(".end.playstation").append("<b> Đã hết sản phẩm</b>");}
        else  $("#playstation .products .product-item:hidden").slice(0,4).show(1000);
            
        }
    )

    $("#x-box .products .product-item").slice(0,4).show();
    $(".btn.x-box").on("click",function(){
        if ($("#x-box .products .product-item:hidden").length == 0) {
            $(".btn.x-box").fadeOut('slow');
            $(".end.x-box").append("<b> Đã hết sản phẩm</b>");}
        else  $("#x-box .products .product-item:hidden").slice(0,4).show(1000);
            
        }
    )

    $("#all .products .product-item").slice(0,4).show();
    $(".btn.all").on("click",function(){
        if ($("#all .products .product-item:hidden").length == 0) {
            $(".btn.all").fadeOut('slow');
            $(".end.all").append("<b> Đã hết sản phẩm</b>");}
        else  $("#all .products .product-item:hidden").slice(0,4).show(1000);
            
        }
    )

    $("#gotopbutton").hide()

    $(window).scroll(function(){
         if($(this).scrollTop() >= 10){
                 $("nav").css({
                         "position":"fixed",
                         "left":0,
                         "right":0,
                         "z-index":998,
                         "opacity":0.8,
                 })  
 
                 
         }
 
         else {
                 $("nav").css({
                         "position":"relative",
                         "z-index":998,
                         "opacity":1,
                         "top":0,
                 })   
 
                 $(".toggle-menu").css({
                         "position":"fixed",
                         
                 })
                         
         }
    })
 
    $(window).scroll(function(){
         if($(this).scrollTop() >= 100)
         {
         $("#gotopbutton").show("slow")
         $(".toggle-menu").show("slow")
         }
         else 
         $("#gotopbutton").hide("slow")
    })
 
    $("#gotopbutton").click(function(){
         $("html,body").animate({
                 scrollTop:0
         },500);
    })
    
    
});
  
const nav=document.querySelector('.menu');
const toggle_menu=document.querySelector('.toggle-menu');

toggle_menu.onclick = function(){
 nav.classList.toggle('hide');
 toggle_menu.classList.toggle('show');
}

}

