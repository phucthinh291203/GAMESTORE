   
      var x= document.getElementById("login");
      var y=document.getElementById("register");
      var z=document.getElementById("btn");
  
      function register(){
        x.style.left ="-400px";
        y.style.left ="50px";
        z.style.left="110px";
      }
      function login(){
        x.style.left ="50px";
        y.style.left ="450px";
        z.style.left="0px";
      }

var hidepass = true;
function showpassword(){
  if(hidepass == true)
  {
  document.getElementById("password").type = "text";
  hidepass = false;
  }
  else 
  {
    document.getElementById("password").type = "password";
  hidepass = true;
  }
}

var hidepass1 = true;
function showpassword1(){
  if(hidepass1 == true)
  {
  document.getElementById("password1").type = "text";
  hidepass1 = false;
  }
  else 
  {
    document.getElementById("password1").type = "password";
  hidepass1 = true;
  }
}

var hidepass2 = true;
function showpassword2(){
  if(hidepass2 == true)
  {
  document.getElementById("password2").type = "text";
  hidepass2 = false;
  }
  else 
  {
    document.getElementById("password2").type = "password";
  hidepass2 = true;
  }
}

var accept = false;
function agree(){
  if(accept == false)
  {
confirm("Khi bạn đã ấn đồng ý tức là bạn đã tuân thủ những nguyên tắc của chúng tôi, mọi vấn đề xảy ra chúng tôi sẽ không giải quyết");
    agree = true;
  }
  else agree = false;
};

function ThongBaoKhiAnDangNhap() {
  alert("Đăng nhập thành công");
}
function ThongBaoKhiAnDangKy() {
  alert("Đăng ký thành công");
}
