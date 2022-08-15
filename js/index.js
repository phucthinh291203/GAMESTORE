function init(){

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
})


const nav=document.querySelector('nav');
const toggle_menu=document.querySelector('.toggle-menu');

toggle_menu.onclick = function(){
 nav.classList.toggle('hide');
 
}


}