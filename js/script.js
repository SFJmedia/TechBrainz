/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    // Header flow on scroll start
    jQuery(document).on('scroll', function () {
        var scroll = jQuery(document).scrollTop();
        if (scroll >= 200) {
            jQuery(".header_container").addClass("header_container_scroll");
        } else {
            jQuery(".header_container").removeClass("header_container_scroll");
        }
    });
    jQuery(function () {
        jQuery('.menu_div li.dropdown a').click(function (event) {
            var hash = jQuery(this).attr("href");
            window.location.href = hash;
        });
    });
// Header flow on scroll end

// Typing text start
    var TxtRotate = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 300 - Math.random() * 100;

        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };

    window.onload = function () {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #0274b5 }";
        document.body.appendChild(css);
    };
// Typing text end
// Scroll to top start
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        $('#back-to-top').tooltip('show');
    });
// Scroll to top end
// Count set value start
    $(function () {
        function isScrolledIntoView($elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            var elemTop = $elem.offset().top;
            var elemBottom = elemTop + $elem.height();
            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }
        function count($this) {
            var current = parseInt($this.html(), 10);
            if (isScrolledIntoView($this) && !$this.data("isCounting") && current < $this.data('count')) {
                $this.html(++current);
                $this.data("isCounting", true);
                setTimeout(function () {
                    $this.data("isCounting", false);
                    count($this);
                }, 50);
            }
        }
        $(".c-section4").each(function () {
            $(this).data('count', parseInt($(this).html(), 10));
            $(this).html('0');
            $(this).data("isCounting", false);
        });
        function startCount() {
            $(".c-section4").each(function () {
                count($(this));
            });
        }
        ;
        $(window).scroll(function () {
            startCount();
        });
        startCount();
    });
// Count set value end
// Bind script tag in head tag start
//    (function () {
//        var gads = document.createElement('script');
//        gads.type = 'text/javascript';
//        gads.async = true;
//        var useSSL = 'https:' === document.location.protocol;
//        gads.src = (useSSL ? 'https:' : 'http:') +
//                'URL Comes Here';
//        var node = document.getElementsByTagName('script')[0];
//        node.parentNode.insertBefore(gads, node);
//    })();
// Bind script tag in head tag end
// Faq start
    $(document).ready(function () {
        $('.panel-collapse').on('show.bs.collapse', function () {
            $(this).siblings('.panel-heading').addClass('active');
        });

        $('.panel-collapse').on('hide.bs.collapse', function () {
            $(this).siblings('.panel-heading').removeClass('active');
        });
    });

    $(document).ready(function () {
        // Add minus icon for collapse element which is open by default
        $(".collapse.in").each(function () {
            $(this).siblings(".panel-heading").find(".glyphicon").addClass("glyphicon-minus").removeClass("glyphicon-plus");
        });

        // Toggle plus minus icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function () {
            $(this).parent().find(".glyphicon").removeClass("glyphicon-plus").addClass("glyphicon-minus");
        }).on('hide.bs.collapse', function () {
            $(this).parent().find(".glyphicon").removeClass("glyphicon-minus").addClass("glyphicon-plus");
        });
    });

// Faq end
// Owl start
    jQuery(".related_course_container .owl-demo").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        responsive: true,
        addClassActive: true,
        items: 5,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [979, 5],
        itemsTablet: [768, 2],
        itemsMobile: [640, 2],
        itemsMobileSmall: [320, 1],
        stopOnHover: true
    });
    jQuery(".popular_container .owl-demo").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        responsive: true,
        addClassActive: true,
        items: 5,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [979, 5],
        itemsTablet: [768, 2],
        itemsMobile: [640, 2],
        itemsMobileSmall: [320, 1],
        stopOnHover: true
    });
// Owl end
// Owl testimonial start 
    $(document).ready(function () {
        $("#testimonial-slider").owlCarousel({
            items: 2,
            itemsDesktop: [1000, 2],
            itemsDesktopSmall: [979, 2],
            itemsTablet: [768, 1],
            itemsMobile: [640, 2],
            itemsMobileSmall: [320, 1],
            pagination: false,
            navigation: true,
            navigationText: ["", ""],
            autoPlay: true
        });
    });
// Owl restimonial end
// Sliding partner start 
    $(document).ready(function () {
        $(".sliding_partner .owl-demo1").owlCarousel({
            items: 6,
            itemsDesktop: [1000, 6],
            itemsDesktopSmall: [979, 4],
            itemsTablet: [768, 4],
            itemsMobile: [640, 2],
            itemsMobileSmall: [320, 1],
            pagination: false,
            navigation: true,
            navigationText: ["", ""],
            autoPlay: true
        });
    });
// Sliding partner end
// Animate site start
    $(document).ready(function () {
        new WOW().init();
        jQuery.noConflict();
    });
// Animate site end
});