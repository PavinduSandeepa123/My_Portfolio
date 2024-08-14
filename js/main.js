(function ($){
    "use strict";

//Navbar on scrolling

$(window).scroll(function(){
    if ($(this).scrollTop()>200){
        $('.navbar').css('display', 'flex');
    }else{
        $('.navbar').css('display', 'flex');
    }
});


    // Typed Initiate
    if ($('.typed-text-output').length == 1){
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });

// Portfolio isotope and filter
        var PortfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item', 
            layoutMode: 'fitRows'
        });
        $('#portfolio-flters li').on('click',function (){
            $('#portfolio-flters li').removeClass('active');
            $(this).addClass('active');

            PortfolioIsotope.isotope({filter: $(this).data('filter')});
        });

       
        // Skill Bar
        document.addEventListener("DOMContentLoaded", function() {
            const skillBars = document.querySelectorAll('.skill-percentage');
        
            skillBars.forEach(bar => {
                const percentage = bar.getAttribute('data-percentage');
                bar.style.width = percentage + '%';
            });
        });


    }
})(jQuery);