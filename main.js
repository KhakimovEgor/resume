$(document).ready(function(){
    var myHref1 = $('.myHref1');
    var myHref2 = $('.myHref2');
    var myHref3 = $('.myHref3');
    var myHref4 = $('.myHref4');

    var myHref5 = $('.myHref5');
    var myHref6 = $('.myHref6');
    var myHref7 = $('.myHref7');
    var myHref8 = $('.myHref8');
    var myHref9 = $('.myHref9');
    var myHref10 = $('.myHref10');
      
    myHref1.on('click',function(){
        $(location).attr('href', "https://www.codewars.com/users/KhakimovEgor");
    });
      myHref2.on('click',function(){
        $(location).attr('href', "https://www.linkedin.com/in/dizbalance-undefined-663320243/");
    });
      myHref3.on('click',function(){
        $(location).attr('href', "https://vk.com/id161115694");
    });
      myHref4.on('click',function(){
      $(location).attr('href', "https://github.com/KhakimovEgor");
    });

    myHref5.on('click',function(){
      $(location).attr('href', "file:///D:/%D0%93%D0%90%D0%9B%D0%95%D0%A0%D0%95%D0%AF%20%D0%9E%D0%A2%D0%A7%D0%98%D0%A1%D0%9B%D0%95%D0%9D%D0%9D%D0%AB%D0%A5/index.html");
  });
    myHref6.on('click',function(){
      $(location).attr('href', "./TicTacToe/index.html");
  });
    myHref7.on('click',function(){
      $(location).attr('href', "./Clicker/index.html");
  });
    myHref8.on('click',function(){
    $(location).attr('href', "https://github.com/Edward-Radzinski/RocketMans");
  });
    myHref9.on('click',function(){
    $(location).attr('href', "https://github.com/Edward-Radzinski/Race-The-Sun-Clone");
  });
    myHref10.on('click',function(){
    $(location).attr('href', "https://github.com/Edward-Radzinski/ChickenRunner");
  });

  
  
    $( ".scroll-me" ).click(function() {
        var x = $(window).scrollTop();
        $('html, body').animate({ scrollTop: x + 1000 }) 
    });

    $( ".scroll-me-2" ).click(function() {
        var x = $(window).scrollTop();
        $(window).scrollTop(x+600);
    });
  });

  // add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}