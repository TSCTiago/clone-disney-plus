$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 40){
            $('.navbar').addClass("scroll");
            $('.logo-esquerda').removeClass("hidden");
            $('.assine').removeClass("hidden");
        }else{
            $('.navbar').removeClass("scroll");
            $('.logo-esquerda').addClass("hidden");
            $('.assine').addClass("hidden")

       }
    });
})