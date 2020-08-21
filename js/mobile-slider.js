/* mobile-main-slider 커스텀 */
function mobile_slide(){
    var $mobileBtn = $('.mobile-slider > .mobile-dots-box >.dot');
    var $mobileSlide = $('.mobile-slider > .slider');
    
    $mobileBtn.click(function(){
        var index = $(this).index();
        var sliderWidth = $('.mobile-slider > .slider > li').width();
        var $mobileDotActive = $('.mobile-slider > .mobile-dots-box').find('>.active');


        $mobileDotActive.removeClass('active');
        $(this).addClass('active');
        $mobileSlide.css('margin-left',-sliderWidth * index);
        console.log(index);
    })
};
/* mobile-latest-news 커스텀 */
function mobile_news_latest_slide() {
    var $mobileBtn = $('.mobile-news-list > .slider > .dots-box > .dot');
    var $mobileSlide = $('.mobile-news-list > .slider > nav');

    $mobileBtn.click(function(){
        var index = $(this).index();
        var sliderWidth = $('.mobile-news-list > .slider > nav > ul> li').width()*2;
        var $mobileDotActive = $('.mobile-news-list > .slider > .dots-box').find('>.active');

        $mobileDotActive.removeClass('active');
        $(this).addClass('active');
        $mobileSlide.css('margin-left',-sliderWidth * index);
        console.log(index);
        console.log(sliderWidth);
    })

}



$(function(){
    mobile_slide();
    mobile_news_latest_slide();
})