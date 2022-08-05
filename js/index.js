var index =1;

 changeImage = function(){
         var imgs=["img/screen_index.jpg","img/screen_index_2.jpg"];
         document.getElementById('img').src = imgs[index];
         index++;
         if(index === 2)
         index =0;
 }

 setInterval(changeImage,3000);

