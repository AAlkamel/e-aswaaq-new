// var platform=document.getElementById('platform');
//     console.log(navigator.userAgent);
var fonts = ['sofia', 'slabo', 'roboto', 'inconsolata', 'ubuntu'];
				var toolbarOptions = [
					[{ 'font': fonts }],
					[{ 'header': [1, 2, 3, 4, 5, 6, false] }],
					['bold', 'italic', 'underline', 'strike'],        // toggled buttons
					//['blockquote', 'code-block'],
					//[{ 'header': 1 }, { 'header': 2 }],               // custom button values
					[{ 'align': [] }],
					[{ 'color': [] }, { 'background': [] }],  
					[{ 'list': 'ordered'}, { 'list': 'bullet' }],
					//[{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
					//[{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
					[{ 'direction': 'rtl' }],                         // text direction
					[ 'link', 'image', 'video'],
					//[{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
					

					        // dropdown with defaults from theme
					//[{ 'font': [] }],
					
					
					//['clean']                                         // remove formatting button
					];


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
            var check=document.querySelectorAll(".talab input[type='checkbox']");
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
    var don;
        $(".inc").on('click',function(){
            if(tCounter<4){
                tCounter++;
                if(stut<tCounter) stut=tCounter;
                $('.body').children().hide();

                chil = document.querySelector('.body').children[tCounter].classList[0];
                $( '.'+chil ).show();
                //$('.head ul').children().removeClass("active")
                act = document.querySelector('.head ul').children[tCounter];
                don = document.querySelector('.head ul').children[tCounter-1];
                if(don){
                    don.classList.add("last");
                }
                act.classList.add("active");
                if(tCounter==4){
                    act.classList.add("last");
                }
            } 
            
        });
        $(".dec").on('click',function(){
            if(tCounter>0){
                tCounter--;
                $('.body').children().hide();
                chil = document.querySelector('.body').children[tCounter].classList[0];
                $( '.'+chil ).show();
            } 
        });
        $('.head ul li').on('click',function(){
            var no = $(this).data("no");
            if(no<=stut){
                if(no!=tCounter){
                    tCounter=no;
                    $('.body').children().hide();
                    chil = document.querySelector('.body').children[tCounter].classList[0];
                    $( '.'+chil ).show();
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
            $(".set01").show()
        }else{
            $(".set01").hide()
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
    $('.tb2').on("click", function(){
        if( $(this).hasClass("off")){
            $(this).children('small').text("لا")
        }else{
            $(this).children('small').text("نعم")
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
    $('#pp-top-0').on("click",function(){
        $(".pp0").fadeIn();
        $(".pp1").hide();
        $(".pp2").hide();

        $(".filter-pp0").fadeIn();
        $(".filter-pp1").hide();
        $(".filter-pp2").hide();
    })
    $('#pp-top-1').on("click",function(){
        $(".pp0").hide();
        $(".pp1").fadeIn();
        $(".pp2").hide();

        $(".filter-pp0").hide();
        $(".filter-pp1").fadeIn();
        $(".filter-pp2").hide();
    })
    $('#pp-top-2').on("click",function(){
        $(".pp0").hide();
        $(".pp1").hide();
        $(".pp2").fadeIn();

        $(".filter-pp0").hide();
        $(".filter-pp1").hide();
        $(".filter-pp2").fadeIn();
    })
    //---------------------------------------------
    //التبديل بين العملاؤ والتقييمات
   
    $('#c-ppp-top-0').on("click",function(){
        $(".c-ppp1").hide();
        $(".c-ppp2").hide();
        $(".c-ppp3").hide();
        $(".c-ppp4").hide();
        $(".c-ppp0").fadeIn();
        $(".c-filter-con").css("top","63px")

        $(".c-filter-ppp1").hide();
        $(".c-filter-ppp2").hide();
        $(".c-filter-ppp3").hide();
        $(".c-filter-ppp4").hide();
        $(".c-filter-ppp0").fadeIn();
    })
    $('#c-ppp-top-1').on("click",function(){
        $(".c-ppp0").hide();
        $(".c-ppp2").hide();
        $(".c-ppp3").hide();
        $(".c-ppp4").hide();
        $(".c-ppp1").fadeIn();
        $(".c-filter-con").css("top","63px")

        $(".c-filter-ppp0").hide();
        $(".c-filter-ppp2").hide();
        $(".c-filter-ppp3").hide();
        $(".c-filter-ppp4").hide();
        $(".c-filter-ppp1").fadeIn();
    })
    $('#c-ppp-top-2').on("click",function(){
        $(".c-ppp0").hide();
        $(".c-ppp1").hide();
        $(".c-ppp3").hide();
        $(".c-ppp4").hide();
        $(".c-ppp2").fadeIn();
        $(".c-filter-con").css("top","63px")

        $(".c-filter-ppp0").hide();
        $(".c-filter-ppp1").hide();
        $(".c-filter-ppp3").hide();
        $(".c-filter-ppp4").hide();
        $(".c-filter-ppp2").fadeIn();
    })
    $('#c-ppp-top-3').on("click",function(){
        $(".c-ppp0").hide();
        $(".c-ppp2").hide();
        $(".c-ppp1").hide();
        $(".c-ppp4").hide();
        $(".c-ppp3").fadeIn();
        $(".c-filter-con").css("top","63px")

        $(".c-filter-ppp0").hide();
        $(".c-filter-ppp2").hide();
        $(".c-filter-ppp1").hide();
        $(".c-filter-ppp4").hide();
        $(".c-filter-ppp3").fadeIn();
    })
    $('#c-ppp-top-4').on("click",function(){
        $(".c-ppp0").hide();
        $(".c-ppp2").hide();
        $(".c-ppp3").hide();
        $(".c-ppp1").hide();
        $(".c-ppp4").fadeIn();
        $(".c-filter-con").css("top","63px")

        $(".c-filter-ppp0").hide();
        $(".c-filter-ppp2").hide();
        $(".c-filter-ppp3").hide();
        $(".c-filter-ppp1").hide();
        $(".c-filter-ppp4").fadeIn();
    })
   
     //التبديل بين عددالتقييمات ومصدرها
    $("#t-el-ex").on("change",function(){
        if(this.value==1){
            $('.el-c').show();
            $('.el-d').hide();
        }else{
            $('.el-c').hide();
            $('.el-d').show();
        }
    })
     //---------------------------------------------
    // التاريخ في الفلتر
    $('.d-date input[type="date"]').on('click',function(e){
        e.stopPropagation();
    });


    //  فلتر  الأقسام والمنتجات والعلامات

    $('#pp-filter').on('click',function(){
        $(".hawy").toggleClass('f-open');

    });
    $('#c-ppp0-filter').on('click',function(){
        $(".hawy").toggleClass('f-open');

    });
    $('#c-ppp1-filter').on('click',function(){
        $(".hawy").toggleClass('f-open');

    });
    $('#c-ppp2-filter').on('click',function(){
        $(".hawy").toggleClass('f-open');

    });
    $('#c-ppp3-filter').on('click',function(){
        $(".hawy").toggleClass('f-open');

    });
    $('#c-ppp4-filter').on('click',function(){
        $(".hawy").toggleClass('f-open');

    });
    $('#r-pp-filter').on('click',function(){
        $(".hawy").toggleClass('f-open');

    });
    //---------------------------------------------
    //إجراءات الأقسام والمنتجات
    //1- المنتجات----------------
    $('.pp0-tc0').on('click',function(e){
        e.preventDefault();
        window.location.href = "./proNew.html";
    });
    $('.pp0-tc1').on('click',function(e){
        e.preventDefault();
        $('.taqapro').show();
    });
    $('.pp0-tc2').on('click',function(e){
        e.preventDefault();
        $('#s115').show();
    });
    $('.pp0-tc3').on('click',function(e){
        e.preventDefault();
        $('#s119').show();
    });

    //2- الأقسام---------------- 
    $('.pp1-tc0').on('click',function(e){
        e.preventDefault();
        window.location.href = "./part.html";
    });
    $('.pp1-tc1').on('click',function(e){
        e.preventDefault();
        $('.taqapart').show();
    });
    $('.pp1-tc2').on('click',function(e){
        e.preventDefault();
        $('#s115').show();
    });
    $('.pp1-tc3').on('click',function(e){
        e.preventDefault();
        $('#s117').show();
    });

    

    //3- العلامات---------------- 
    $('.pp2-tc0').on('click',function(e){
        e.preventDefault();
        $('#s118').show()
    });
    $('.pp2-tc1').on('click',function(e){
        e.preventDefault();
        $('.taqapart').show();
        
    });
    $('.pp2-tc2').on('click',function(e){
        e.preventDefault();
        $('#s115').show();
    });
    
    // $('.pp2 .tc0').change(function () { 

    //     if(this.value==1){
    //         $('#s118').show()
    //     }else if(this.value==2){
        
    //     }else if(this.value==3){
    //         $('#s115').show();
    //     }else if(this.value==4){
    //         // $('#s116').show();
    //     }
    //     $(this).val("0");
    // });

// تحميل صورة 
        // $("#i-in-001").on('change',function(e){
        //     files = e.target.files[0];
        //     console.log(files);
        //     var reader = new FileReader();
        //     reader.readAsDataURL(files);
        //     reader.onload = function(e){
        //         document.getElementById('i-p-001').src=e.target.result;
        //     };
        // });
        $("#i-in-01").on('change',function(e){
            files = e.target.files[0];
            console.log(files);
            var reader = new FileReader();
            reader.readAsDataURL(files);
            reader.onload = function(e){
                document.getElementById('i-p-01').src=e.target.result;
            };
        });
        $("#i-in-02").on('change',function(e){
            files = e.target.files[0];
            console.log(files);
            var reader = new FileReader();
            reader.readAsDataURL(files);
            reader.onload = function(e){
                document.getElementById('i-p-02').src=e.target.result;
            };
        });
        $("#i-in-03").on('change',function(e){
            files = e.target.files[0];
            console.log(files);
            var reader = new FileReader();
            reader.readAsDataURL(files);
            reader.onload = function(e){
                document.getElementById('i-p-03').src=e.target.result;
            };
        });
        $("#i-in-04").on('change',function(e){
            files = e.target.files[0];
            console.log(files);
            var reader = new FileReader();
            reader.readAsDataURL(files);
            reader.onload = function(e){
                document.getElementById('i-p-04').src=e.target.result;
            };
        });
        $("#i-in-05").on('change',function(e){
            files = e.target.files[0];
            console.log(files);
            var reader = new FileReader();
            reader.readAsDataURL(files);
            reader.onload = function(e){
                document.getElementById('i-p-05').src=e.target.result;
            };
        });

    //---------------------تحميل صور المنتجات------------------------
    // $('i').on('click',function(e){
    //     console.log('erdtfuyg')
    //     e.stopPropagation();
    // });

    $('#cphotoinput').on('click',function(e){
        e.preventDefault();
        $('#images').click();
    });

    $('#images-to-upload').on('click','.upload',function(){
        
        $('#images').click();
    });

    //-----------
    var fileCollection = [];
    var files;

    $('#images').on('change',function(e){
        files = e.target.files;
        //console.log(files);
        // fileCollection = [];
        buld(fileCollection ,files);
    });

    $('body').on('click','.img i',function(){
        var index0= $(this).parent().data('index');
        console.log(index0);
        fileCollection.splice(index0,1);
        console.log(fileCollection);
        buld0();
    });

    //---------------------------------------------
    function buld(rock,fils){

        $('#images-to-upload').html('<div class="upload"><i class="fas fa-images"></i><span>تصفح أو اسحب الصورة هنا</span></div>');
        $.each(fils, function(i, file){
            rock.push(file);
            console.log(rock);
        });

        $.each(rock, function(j, fi){
            var reader = new FileReader();
            reader.readAsDataURL(fi);
            reader.onload = function(e){
                var template = '<div class="img" data-index="'+ j +'"><img src="'+e.target.result+'"><i>x</i></div> ';
                $('#images-to-upload').append(template);
            };
        });

    };

    function buld0(){

        $('#images-to-upload').html('<div class="upload"><i class="fas fa-images"></i><span>تصفح أو اسحب الصورة هنا</span></div>');

        $.each(fileCollection, function(j, fi){
            var reader = new FileReader();
            reader.readAsDataURL(fi);
            reader.onload = function(e){
                var template = '<div class="img" data-index="'+ j +'"><img src="'+e.target.result+'"><i>x</i></div> ';
                $('#images-to-upload').append(template);
            };
        });
    };

    $(window).on('dragenter', function(e){
        e.preventDefault();
    });
    $('#images-to-upload').bind('dragover', function(e){
        e.preventDefault();
        $(this).addClass('over');
    });

    $('#images-to-upload').bind('dragleave', function(){
        $(this).removeClass('over');
    });
    
    var toUp =document.getElementById('images-to-upload');
    if(toUp){
        toUp.addEventListener('drop', e =>{
            e.preventDefault();
            var drages = e.dataTransfer.files;
            buld(fileCollection,drages)
        });
        toUp.addEventListener('dragend', e =>{
            toUp.classList.remove('over')
        });
    }
    
    
    

    $('.ar').on('click',function(){
        console.log('dcghg')
        $(this).removeClass('btn2').addClass('btn1');
        $(this).siblings().removeClass('btn1').addClass('btn2');
        $(this).parent().next().show();
        $(this).parent().next().next().hide();
    });

    $('.en').on('click',function(){
        $(this).removeClass('btn2').addClass('btn1');
        $(this).siblings().removeClass('btn1').addClass('btn2');
        $(this).parent().next().hide();
        $(this).parent().next().next().show();
    });

    $('.select input[type=date]::before').on('click',function(){
        $("input::-webkit-calendar-picker-indicator").click();
    });
//------------- فتح وإغلاق الإعدادات النتقدمة في إضافة منتج--------------
    $('#btn-ad').on('click',function(e){
        e.preventDefault();
        $('#con-ad').fadeToggle();
        $('.rotate').toggleClass("ti-angle-double-up");
        $('.rotate').toggleClass("ti-angle-double-down");
    });


    //---------------------------------------------
    //  اضافة فئة 
    $('.plus').on('click',function(){
        $(this).next().click()
    });
    $("#f2ah").on('click',function(e){
        e.preventDefault();
        $("#s111").show()
    });
    $("#f2ah-close").on('click',function(e){
        e.preventDefault();
        $("#s111").hide()
    });
    //---------------------------------------------
    $("#f2ah01-close").on('click',function(e){
        e.preventDefault();
        $("#s117").hide()
    });
    //---------------------------------------------
    //---------------------------------------------
    //  اضافة علامة تجارية 
    $("#3lama").on('click',function(e){
        e.preventDefault();
        $("#s112").show()
    });
    $("#3lama-close").on('click',function(e){
        e.preventDefault();
        $("#s112").hide()
    });
    //---------------------------------------------
    //  تعديل بيانات عميل
    $(".tsneef03").on('click',function(e){
        e.preventDefault();
        $("#s125").show()
    });
    $("#tsneef03-close").on('click',function(e){
        e.preventDefault();
        $("#s125").hide()
    });
    //---------------------------------------------
    //  تعديل القسم
    $("#ed-part").on('click',function(e){
        e.preventDefault();
        $("#s126").show()
    });
    $("#ed-part-close").on('click',function(e){
        e.preventDefault();
        $("#s126").hide()
    });
    //---------------------------------------------
    //  اضافة تصنيف 
    $("#tsneef01").on('click',function(e){
        e.preventDefault();
        $("#s122").show()
    });
    $("#tsneef01-close").on('click',function(e){
        e.preventDefault();
        $("#s122").hide()
    });
    $("#tsneef02").on('click',function(e){
        e.preventDefault();
        $("#s123").show()
    });
    $("#tsneef02-close").on('click',function(e){
        e.preventDefault();
        $("#s123").hide()
    });

    //  اضافة  ضريبة 
    $("#add-tax").on('click',function(e){
        e.preventDefault();
        $("#s113").show()
    });
    $("#tax-close").on('click',function(e){
        e.preventDefault();
        $("#s113").hide()
    });
    //  تطبيق  ضريبة  محددة
    $(".cer-tax").on('click',function(e){
        e.preventDefault();
        $("#s114").show()
    });
    $("#cer-tax-close").on('click',function(e){
        e.preventDefault();
        $("#s114").hide()
    });
    $("#cer-tax-close01").on('click',function(e){
        e.preventDefault();
        $("#s119").hide()
    });
    //  اضافة خصم
    $("#khasm-close").on('click',function(e){
        e.preventDefault();
        $("#s115").hide()
    });
    $("#khasm-close01").on('click',function(e){
        e.preventDefault();
        $("#s115").hide()
    });
    //  اضافة علامة 01
    $("#3lama01").on('click',function(e){
        e.preventDefault();
        $("#s116").show()
    });
    $("#3lama01-close").on('click',function(e){
        e.preventDefault();
        $("#s116").hide()
    });
    //  اضافة علامة 02
    $("#3lama02-close").on('click',function(e){
        e.preventDefault();
        $("#s118").hide()
    });
    //  الرجوع من إضافة قسم 02
    $("#part-back").on('click',function(e){
        e.preventDefault();
        history.go(-1)
    });
    //اضافة تصنيف جديد
    $("#add-tsnef").on('click',function(e){
        e.preventDefault();
        $("#s121").show()
    });
    $("#add-tsnef-close").on('click',function(e){
        e.preventDefault();
        $("#s121").hide()
    });


//-----------------------------------------------------------------------------------
//   ---------------     مربع الخيارات    ----------------------------------------------
var chil1 =`<div class="op-el my-1">
<span class="btn2 kh">  <strong>+</strong> وصف الخيار</span>
<div  class="p-m-c">
    <input type="number" value="0" class="num-c">
    <span class="plus-c">+</span>
    <span id="mins-c01" class="mins-c">-</span>
</div>
<div  class="p-m-c">
    <input type="number" value="0" class="num-c">
    <span  class="plus-c">+</span>
    <span  class="mins-c">-</span>
</div>
<div class="p-m-c">
    <input type="number" value="0" class="num-c">
    <span  class="plus-c">+</span>
    <span  class="mins-c">-</span>
</div>
<span class="kh">0</span>
<div style="position: relative;">
    <div style="" class="fil">
        <div class="s111-img">
            <img src="./images/img05.jpg" alt="">
        </div>
        <span class="p-btn">+</span>
        <input class="i-in-001" type="file"  >
    </div>
</div>
<span class="ti-trash"></span>
</div>`;
        // addDes.addEventListener("click",function(){
        $('body').on("click",'.add-des',function(){
            

            var x =$(this).parent().prev().html();
            x=x+chil1;
            $(this).parent().prev().html(x);
            //console.log(chil);
        });


    // تحميل صورة 
    $('body').on('click','.p-btn',function(){
        $(this).next().click();
        //console.log('jglc,');
    })
    $("body").on('change', ".i-in-001",function(e){
        var ths =$(this);
        files = e.target.files[0];
       // console.log(files);
        var reader = new FileReader();
        reader.readAsDataURL(files);
        reader.onload = function(e){
            //document.getElementById('i-p-001').src=e.target.result;
          //  console.log(ths.prev().prev().children());
            ths.prev().prev().children().attr('src',e.target.result);
        };
    });


    $("body").on("click",".plus-c",function(){
        var x=$(this).prev().val();
        x=parseFloat(x);
        x=x+1;
        $(this).prev().val(x);
        console.log(x);
    });
    $("body").on("click",".mins-c",function(){
        var x=$(this).prev().prev().val();
        x=parseFloat(x);
        x=x-1;
        $(this).prev().prev().val(x);
        console.log(x);
    });
///-----------------------------------------------------------
// ---------------------- select 2 -------------------------
var n;

$('#mySelect2').on('select2:select', function (e) {
    var data = e.params.data;
    n=data.text;
    var m=`<h6 class="mt-4 mb-2">${n}</h6>
<div style="overflow-x: auto; min-height: 106px;">
    <div class="op-el my-1">
        <span></span>
        <span>الكمية</span>
        <span>السعر</span>
        <span>الوزن</span>
        <span>إجمالي التكلفة</span>
        <span>أضف صورة</span>
        <span></span>
    </div>
    <div class="op-el my-1">
        <span class="btn2 kh">  <strong>+</strong> وصف الخيار</span>
        <div  class="p-m-c">
            <input type="number" value="0" class="num-c">
            <span class="plus-c">+</span>
            <span class="mins-c">-</span>
        </div>
        <div  class="p-m-c">
            <input type="number" value="0" class="num-c">
            <span  class="plus-c">+</span>
            <span class="mins-c">-</span>
        </div>
        <div id="p-m-c01" class="p-m-c">
            <input type="number" value="0" class="num-c">
            <span  class="plus-c">+</span>
            <span class="mins-c">-</span>
        </div>
        <span class="kh">0</span>
        <div style="position: relative;">
            <div  class="fil">
                <div class="s111-img">
                    <img src="./images/img05.jpg" alt="">
                </div>
                <span class="p-btn">+</span>
                <input class="i-in-001" type="file"  >
            </div>
        </div>
        <span class="ti-trash"></span>
    </div>
</div>
<div class="my-3">
    <span class="btn2 kh add-des"> <strong>+</strong> أضف وصف جديد </span>
</div>`
    var op =document.getElementById('option-con');
    if(op){
        op.innerHTML+=m;
    }
});

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
