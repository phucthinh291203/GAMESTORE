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
            $(".DatHang .turnoff").on("click",function(){
                $(".DatHang").hide(1000);
        })
        })

        
        
    }); 
    
    