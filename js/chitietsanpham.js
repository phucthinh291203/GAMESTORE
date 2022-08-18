function init() {

    function TaoThanhSearch(){
        document.getElementsByClassName('search-form').style.scaleY = 1;
}


    let m = document.getElementById("main");
    let images = document.querySelectorAll(".thumb img");
    for (let i = 0; i < images.length; i++)
        images[i].addEventListener("mouseenter", function() {
            m.src = this.src;
        })
    }

$(document).ready(function(){
        $("#flip").click(function(){
          $("#panel").slideDown(4000);
          $("#flip").hide();
        });
        $("#stop").click(function(){
          $("#panel").slideUp(3000);
          $("#flip").show();
        });

        $(".product-item").slice(0,4).show();
        $(".btn").on("click",function(){
            if ($(".product-item:hidden").length == 0) {
                $(".btn").fadeOut('slow');
                $(".end").append("<b> Đã hết sản phẩm</b>");}
            else  $(".product-item:hidden").slice(0,4).show(1000);
                
            }
        )

        $(".order").on("click",function(){
            $(".DatHang").show(1000);
            $(".thuc-hien-thanh-toan").on("click",function(){
                $(".DatHang-thanhcong").show();
                $(".DatHang-thanhcong .turnoff").on("click",function(){
                    $(".DatHang-thanhcong").hide();
                    $(".DatHang").hide();
                })
            })
            $(".DatHang .turnoff").on("click",function(){
                $(".DatHang").hide(1000);
        })
        })

        
        $(window).scroll(function(){
            if($(this).scrollTop() >= 50){
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

       const nav=document.querySelector('nav');
const toggle_menu=document.querySelector('.toggle-menu');

toggle_menu.onclick = function(){
 nav.classList.toggle('hide');
 
}


    }); 
    
    