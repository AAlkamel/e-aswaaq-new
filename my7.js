// var platform=document.getElementById('platform');
//     console.log(navigator.userAgent);


$( document ).ready(function() {

    $(".owl-carousel").owlCarousel({
        items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true
    });

    // ----------------------------------
    $('input[type="checkbox"]').on("click",function(e){
        e.stopPropagation();
    });
    // ----------------------------------
    // ----------------------------------

    if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Mac OS X/i)){
        $(".mac").show();
    }
    // ----------------------------------
    $('.req .item').on("click",function(){
        var x =$(this).children("h5").text();
        $(".sa").text(x)
    });
    // ----------------------------------

    $(".m-menu span.close").on("click",function(){
        $(".m-menu").animate({
            "right":"-303px"
        },400);
    });

    $(".nav-menu ul li:first-of-type a").on("click",function(e){
        e.preventDefault();
        $(".m-menu").animate({
            "right":"0px"
        },400);
    });
    //-------------------------------------------------------
    $(".x-manage-menu").on("click",function(){
        if($(".manage-menu").hasClass('show')){
            $(".manage-menu").animate({
                "right":"-256px"
            },400);
            $(".manage-menu").removeClass('show');
            $("main").animate({
                'padding-right': '0px',
                ' padding-left': '0px',
            },400);
        }else{
            $(".manage-menu").animate({
                "right":"0px"
            },400);
            $(".manage-menu").addClass('show');
            $("main").animate({
                'padding-right': '265px',
                ' padding-left': '15px',
            },400);
        }
    });
    $(".xs-manage-menu").on("click",function(){
        if($(".manage-menu").hasClass('collaps')){
            $(".manage-menu").removeClass('collaps');
            $("main").animate({
                'padding-right': '265px',
                ' padding-left': '15px',
            },200);
            $(".manage-menu").animate({
                "width":"250px"
            },200);
            $(".manage-menu.m-m-s ul li a").animate({
                "right":"0px"
            },200);
        }else{
            $(".manage-menu").addClass('collaps');
            $("main").animate({
                'padding-right': '55px',
                ' padding-left': '15px',
            },200);
            $(".manage-menu").animate({
                "width":"40px"
            },200);
            $(".manage-menu.m-m-s ul li a").animate({
                "right":"209px"
            },200);
        }
    });

        //-------------------------------------------------------
        $(".b-d.btn1").on("click",function(){
            $(this).children(".sub-m").slideToggle()
        })
        $(".b-d.b-d-1").on("click",function(){
            $(this).children(".sub-m").slideToggle()
        })
        $(document).on("click",function(){
            $(".sub-m").slideUp();
        });
        $('.b-d').on("click",function(e){
            e.stopPropagation();
            
        });
        $('.set .sub-m.sub-m-3').on("click",function(e){
            e.stopPropagation();
            
        });
        //-------------------------------------------------------
        $(".sear i").on("click",function(){
            $(".manage .searc").show()
        })
        $(".manage .conta i").on("click",function(){
            $(".manage .searc").hide()
        })
        //-------------------------------------------------------
        $("#ch01").change(function() {
            var check=document.querySelectorAll(".talab2 input[type='checkbox']");
            if(this.checked) {
                // var check=$(".talab input[type='checkbox']");
                check.forEach(el => {
                    el.checked=true
                });
            }else{
                check.forEach(el => {
                    el.checked=false
                });
            }
        });
         //-------------------------------------------------------
         $("#ch02").change(function() {
            var check=document.querySelectorAll(".talab2 input[type='checkbox']");
            if(this.checked) {
                // var check=$(".talab input[type='checkbox']");
                check.forEach(el => {
                    el.checked=true
                });
            }else{
                check.forEach(el => {
                    el.checked=false
                });
            }
        });
         //-------------------------------------------------------
         $("#ch03").change(function() {
            var check=document.querySelectorAll(".talab2 input[type='checkbox']");
            if(this.checked) {
                // var check=$(".talab input[type='checkbox']");
                check.forEach(el => {
                    el.checked=true
                });
            }else{
                check.forEach(el => {
                    el.checked=false
                });
            }
        });
        //-------------------------------------------------------
        $(".req .talab:not(:nth-child(2))").on('click',function(){
            window.location.href = "./talab.html";
        })
        
        //-------------------------------------------------------
        $('#fato').on('click',function(){
            $(".talab .sec7").slideToggle();
        })


        $('#sejl').on('click',function(){
            $(".talab .sec8").slideToggle();
        })



        $('#tala').on('click',function(){
            $(".talab .sec2").slideToggle();
        })
        //-------------------------------------------------------
    


    $(".ts-bx > span a").on("click",function(e){
        e.preventDefault();
        if( $(this).parent().next().hasClass('active')){
            $(".op").removeClass('active');
        }else{
            $(".op").removeClass('active');
            $(this).parent().next().addClass('active');
        }
        
    });
    $(document).on("click",function(){
        $(".op").removeClass('active');
    });
    $('.ts-bx').on("click",function(e){
        e.stopPropagation();
        
    });
    //---------------------------------------------
    $(".tm-bx > span a").on("click",function(e){
        //e.preventDefault();
        if( $(this).parent().next().hasClass('active')){
            $(".m-op").removeClass('active');
        }else{
            $(".m-op").removeClass('active');
            $(this).parent().next().addClass('active');
        }
        
    });
    $(document).on("click",function(){
        $(".m-op").removeClass('active');
    });
    $('.tm-bx').on("click",function(e){
        e.stopPropagation();
        
    });
    //-------------------------------------------------------
    $(".ts-bx-m > a").on("click",function(e){
        e.preventDefault();
        $(this).next().slideToggle();
    });
    //---------------------------------------------
    var tCounter =0;
    var stut     =0;
    var chil;
    var act;
        $(".inc").on('click',function(){
            if(tCounter<5){
                tCounter++;
                if(stut<tCounter) stut=tCounter;
                $('.body').children().slideUp();

                chil = document.querySelector('.body').children[tCounter].classList[0];
                $( '.'+chil ).slideDown();
                //$('.head ul').children().removeClass("active")
                act = document.querySelector('.head ul').children[tCounter];
                act.classList.add("active");
            } 
            
        });
        $(".dec").on('click',function(){
            if(tCounter>0){
                tCounter--;
                $('.body').children().slideUp();
                chil = document.querySelector('.body').children[tCounter].classList[0];
                $( '.'+chil ).slideDown();
            } 
        });
        $('.head ul li').on('click',function(){
            var no = $(this).data("no");
            if(no<=stut){
                if(no!=tCounter){
                    tCounter=no;
                    $('.body').children().slideUp();
                    chil = document.querySelector('.body').children[tCounter].classList[0];
                    $( '.'+chil ).slideDown();
                }
            }
        })
    //---------------------------------------------
    $('input[type=radio][name=mos]').change(function () { 
        if(this.value==0){
          //  $(".mos").slideUp()
        }else{
          //  $(".mos").slideDown()
        }
    });
    //---------------------------------------------
    $('#set01').change(function () { 
        if(this.value==2){
            $(".set01").slideDown()
        }else{
            $(".set01").slideUp()
        }
    });
    //---------------------------------------------
    $(".tog-btn").on("click",function(){
        $(this).toggleClass("off");
        
    });
    //---------------------------------------------
    
    $('.tb0').on("click", function(){
        if( $(this).hasClass("off")){
            $(this).children('small').text("غير متوفر")
        }else{
            $(this).children('small').text("متوفر")
        }
    });
    //---------------------------------------------
    $('.tb1').on("click", function(){
        if( $(this).hasClass("off")){
            $(this).children('small').text("معطل")
        }else{
            $(this).children('small').text("مفعل")
        }
    });
    //---------------------------------------------
    //--------------table edite products-----------
    $("#ta51").on("click",function(){
        $(".manage .table").show()
    })
    $(".manage .conta i").on("click",function(){
        $(".manage .table").hide()
        $(".manage .taqapro").hide()
        $(".manage .taqapart").hide()
    })
    $('.s-t').on('click',function(e){
        $('input[name="tin"]').css("z-index","-1");
        e.stopPropagation();
        $(this).next().css("z-index","0");
    })
    $('input[name="tin"]').on('click',function(e){
        e.stopPropagation();
    })
    $('input[name="tin"]').change(function(){
        let x =$(this).val();
        $(this).prev().text(x)
    })
    $(document).on("click",function(){
        $('input[name="tin"]').css("z-index","-1");
    })

    $('input[name="tin"]').keypress(function(e){
        var keycode = (e.keyCode ? e.keyCode : e.which);
        if(keycode == '13'){
            $('input[name="tin"]').css("z-index","-1");  
        }
    });
    //---------------------------------------------
    //التبديل بين الأقسام والمنتجات
    $('#pp').change(function () { 
        $(".pp0").hide();
        $(".pp1").hide();
        $(".pp2").hide();
        if(this.value==2){
            $(".pp2").show();
        }else if(this.value==1){
            $(".pp1").show();
        }else{
            $(".pp0").show();
        }
    });

     //---------------------------------------------
    //التبديل بين الخصم والعرض الخاص والحملات الإعلانيه 
    $('.hh').change(function () { 
        $(".hh0").hide();
        $(".hh1").hide();
        $(".hh2").hide();
        if(this.value==2){
            $(".hh2").show();
        }else if(this.value==1){
            $(".hh1").show();
        }else{
            $(".hh0").show();
            $(".hh1").hide();
            $(".hh2").hide();
        }
    });
    //---------------------------------------------
    //إجراءات الأقسام والمنتجات
    $('.tc').change(function () { 

        if(this.value==1){
            window.location.href = "./proNew.html";
        }else if(this.value==2){
            $('.taqapro').show();
        }
        $(this).val("0")
    });
    $('.tc0').change(function () { 

        if(this.value==1){
            window.location.href = "./partNew.html";
        }else if(this.value==2){
            $('.taqapart').show();
        }
        $(this).val("0")
    });
    //---------------------------------------------

});

$(window).on("load",function(){
    $(".loader-wrapper").fadeOut();





let t1 = gsap.timeline({
    scrollTrigger:{
        trigger:'.box',
        start: 'center bottom'
        
    }
});
t1.from('.h3',{y:30, opacity:0, duration:0.8})
    .from('.box',{x:-340, opacity:0, stagger:0.1, duration:1})
    .from('.move',{y:30, opacity:0, duration:0.5})



let t2 = gsap.timeline({
    scrollTrigger:{
        trigger:'.pr',
        start: 'center bottom'
    }
});
t2.from('.grid-container',{x:20, y:30, opacity:0, stagger:0.1, duration:0.8})
    .from('.gridi',{x:-20, opacity:0, stagger:0.1, duration:1},'-=0.5')
    .from('.pr .but.mo',{y:20, opacity:0, duration:0.8},'-=2')
    
let t3 = gsap.timeline({
    scrollTrigger:{
        trigger:'.s4',
        start: 'center bottom'
    }
});
t3.from('.s4-move',{y:30, opacity:0, stagger:0.3, duration:0.8})


let t4 = gsap.timeline({
    scrollTrigger:{
        trigger:'.s5',
        start: 'center bottom'
    }
});
t4.from('.s5-move',{y:30, opacity:0, stagger:0.3, duration:0.8})
    
let t5 = gsap.timeline({
    scrollTrigger:{
        trigger:'.s6',
        start: 'center bottom'
    }
});
t5.from('.s6 li',{y:30, opacity:0, stagger:0.3, duration:0.8})

let t6 = gsap.timeline({
    scrollTrigger:{
        trigger:'.cs1',
        start: 'center bottom'
    }
});
t6.from('.cs1 .img',{y:20, opacity:0, duration:0.8})
  .from('.cs1 h4',{y:30, opacity:0, duration:0.8})

let t7 = gsap.timeline({
    scrollTrigger:{
        trigger:'.cs2',
        start: 'center bottom'
    }
});
t7.from('.cs2 .img',{y:20, opacity:0, duration:0.8})
  .from('.cs2 h4',{y:30, opacity:0, duration:0.8})

let t8 = gsap.timeline({
    scrollTrigger:{
        trigger:'.cs3',
        start: 'center bottom'
    }
});
t8.from('.cs3 .img',{y:20, opacity:0, duration:0.8})
  .from('.cs3 h4',{y:30, opacity:0, duration:0.8})

let t9 = gsap.timeline({
    scrollTrigger:{
        trigger:'.sap',
        start: 'center bottom'
    }
});
t9.from('.login-move',{y:20, opacity:0, stagger:0.3, duration:0.8},'+=.5')
let t10 = gsap.timeline({
    scrollTrigger:{
        trigger:'.signup',
        start: 'center bottom'
    }
});
t10.from('.signup-move',{y:20, opacity:0, stagger:0.3, duration:0.8},'+=.5')
let t11 = gsap.timeline({
    scrollTrigger:{
        trigger:'.sec1',
        start: 'top bottom'
    }
});
t11.from('.sec1-move',{y:20, opacity:0, stagger:0.3, duration:0.8},'+=.5')
t11.from('.card strong',{innerText:0, duration:0.8, stagger:0.3, snap:"innerText"},'-=2')
let t12 = gsap.timeline({
    scrollTrigger:{
        trigger:'.sec2',
        start: 'top bottom'
    }
});
t12.from('.sec2-move',{y:20, opacity:0, stagger:0.3, duration:0.8},'+=.5')
//t12.from('.talab strong',{innerText:0, duration:0.8, stagger:0.3, snap:"innerText"},'-=1')

let t13 = gsap.timeline({
    scrollTrigger:{
        trigger:'.sec3',
        start: 'top bottom'
    }
});
t13.from('.sec3-move',{y:20, opacity:0, stagger:0.1, duration:0.5},'+=.5')

let t14 = gsap.timeline({
    scrollTrigger:{
        trigger:'.sec4',
        start: 'center bottom'
    }
});
t14.from('.sec4-move',{y:20, opacity:0, stagger:0.1, duration:0.8},'+=.5')



let t15 = gsap.timeline({
    scrollTrigger:{
        trigger:'.sec5',
        start: 'top bottom'
    }
});
t15.from('.sec5-move',{y:20, opacity:0, stagger:0.3, duration:0.8},'+=.5')
t15.from('.item strong',{innerText:0, duration:0.8, stagger:0.3, snap:"innerText"},'-=2.7')







});