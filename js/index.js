function main_banner(){
    $('.main-banner > .img').css('opacity','1');
};

function mobile_click(){
    $('.mobile-menu-box-1 > ul > li:not(:only-child)').click(function(){
        var $click = $(this);
        var origin_height = $(this).height();
    });
    $('.mobile-bottom-site-menu-box-1 > ul').click(function(){
        var $click1 = $(this);
        var origin_height = $(this).height();
        

        console.log(origin_height);
    });
}


function mobile_menu(){
    var $menuBtn = $('.mobile-menu-btn');
    var $mobileMenu = $('.all-page > .mobile-menu-box-1');
    var $part_page = $('.part-1');
    var $html = $('html');
    var $mobile_bg = $('.part-1 > .mobile-menu-bg');
    var $serch = $('.mobile-menu-box-1 > ul > .serch-box > input');
    var $mobile_active = $('.mobile-menu-box-1 > ul > li');
    
        

    $menuBtn.click(function(){
        if ( $mobileMenu.hasClass('active')){
            $mobileMenu.removeClass('active');
            $part_page.removeClass('active');
            $html.removeClass('active');
            $mobile_bg.removeClass('active');
        }
        else {
            $mobileMenu.addClass('active');
            $part_page.addClass('active');
            $html.addClass('active');
            $mobile_bg.addClass('active');
        }
    })
    $serch.click(function(){
        $serch.addClass('active');
    })
    $('.mobile-menu-box-1 > ul > li:not(:only-child)').click(function(){
        if ($mobile_active.hasClass('active')) {
            $(this).removeClass('active');
        }
        else {
            $(this).addClass('active');
        }
    })

}
function menu_hover_border_bottom(){
    $('.menu-box-1 > ul > li > a').mouseenter(function(){
        $(this).addClass('hover');
    })
    $('.menu-box-1 > ul > li > a').mouseleave(function(){
        $(this).removeClass('hover');
    })
};

function main_slide(){
    var $btn = $('.main-slider > .dots-box >.dot');
    var $slider = $('.main-slider > .slider');

    $('.main-slider > .dots-box > div:first-child').click(function(){
        $btn.removeClass('active');
        $(this).addClass('active');
        $slider.css('margin-left','0px');
    })
    $('.main-slider > .dots-box > div:nth-child(2)').click(function(){
        $btn.removeClass('active');
        $(this).addClass('active');
        $slider.css('margin-left','-1215px');
    })
    $('.main-slider > .dots-box > div:nth-child(3)').click(function(){
        $btn.removeClass('active');
        $(this).addClass('active');
        $slider.css('margin-left','-2415px');
    })
    $('.main-slider > .dots-box > div:last-child').click(function(){
        $btn.removeClass('active');
        $(this).addClass('active');
        $slider.css('margin-left','-2816px');
    })
};

function like_hover(){
    var $sns_facebook_active = $('.bottom-site-menu-box-2 > .sns-icon > .mobile-res > .facebook > .sns-flow-box');
    var $sns_facebook = $('.bottom-site-menu-box-2 > .sns-icon > .mobile-res > .facebook');
    var $sns_youtube_active = $('.bottom-site-menu-box-2 > .sns-icon > .mobile-res > .youtube > .sns-flow-box');
    var $sns_youtube = $('.bottom-site-menu-box-2 > .sns-icon > .mobile-res > .youtube');
    var $sns_instagram_active = $('.bottom-site-menu-box-2 > .sns-icon > .mobile-res > .instagram > .sns-flow-box');
    var $sns_instagram = $('.bottom-site-menu-box-2 > .sns-icon > .mobile-res > .instagram');
    var $sns_flow_close_btn = $('.bottom-site-menu-box-2 > .sns-icon > .mobile-res > li > .sns-flow-box > .close-btn');

    $('.whats-new-section > .new-item > ul > li > a > .img > span').mouseenter(function(){
        $(this).parent().siblings('.like-heart').addClass('active');
    })
    $('.whats-new-section > .new-item > ul > li > a > .img > span').mouseleave(function(){
        $(this).parent().siblings('.like-heart').removeClass('active');
    })
    
    $sns_facebook.mouseenter(function(){
        $sns_facebook_active.addClass('active');
    })
    $sns_youtube.mouseenter(function(){
        $sns_youtube_active.addClass('active');
    })
    $sns_instagram.mouseenter(function(){
        $sns_instagram_active.addClass('active');
    })
    $sns_flow_close_btn.click(function(){
        $('.bottom-site-menu-box-2 > .sns-icon > .mobile-res > li > .sns-flow-box').removeClass('active');
    })
    


}

function mobile_bottom_site_map(){
    $('.mobile-bottom-site-menu-box-1 > ul').click(function(){
        var $click = $(this);

        if ($click.hasClass('active')){
            $click.removeClass('active');
        }
        else {
            $click.addClass('active');
        }
        

        
    })
}


function sub_ex_btn(){
    $('.sub-ex-btn').click(function(){
        var $subText = $('.sub-ex-text');
        var $subBtn = $('.sub-ex-btn > span');

        if ($subText.hasClass('active')){
            $subText.removeClass('active');
            $subBtn.removeClass('active');
        }
        else {
            $subText.addClass('active');
            $subBtn.addClass('active');
        }       
    });
}




$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 450) {
        $(".top-move-btn").addClass('active');
      }
      else{
        $(".top-move-btn").removeClass('active');   
      }
      $(".top-move-btn").click(function(){
          $(window).scrollTop('0');
      })
    })
  })


  function alerted(){
	$('.alerted > .alert-box > .close-btn > .close-text').click(function(){
		$('.alerted').removeClass('active');
	})
}


$(function(){
    mobile_menu();
    main_banner();
    menu_hover_border_bottom();
    main_slide();
    like_hover();
    mobile_bottom_site_map();
    sub_ex_btn();
    mobile_click();
    alerted();
});