var index =1;

 changeImage = function(){
         var imgs=["img/screen_index.jpg","img/screen_index_2.jpg"];
         document.getElementById('img').src = imgs[index];
         index++;
         if(index === 2)
         index =0;
 }

 setInterval(changeImage,3000);


function TaoThanhSearch(){
        document.getElementsByClassName('search-form').style.scaleY = 1;
}


$(document).ready(function(){
   $("#gotopbutton").hide()

   $(window).scroll(function(){
        if($(this).scrollTop() >= 100){
                $("nav").css({
                        "position":"fixed",
                        "left":0,
                        "right":0,
                        "z-index":999,
                        "top":0,
                        "opacity":0.8,
                })
        }

        else {
                $("nav").css({
                        "position":"relative",
                        "z-index":999,
                        "opacity":1,
                })   
        }
   })

   $(window).scroll(function(){
        if($(this).scrollTop() >= 100)
        $("#gotopbutton").show("slow")
        else 
        $("#gotopbutton").hide("slow")
   })

   $("#gotopbutton").click(function(){
        $("html,body").animate({
                scrollTop:0
        },500);
   })
})