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
//                '//rtbpassback.andbeyond.media/prebid1.31.0.3.js';
//        var node = document.getElementsByTagName('script')[0];
//        node.parentNode.insertBefore(gads, node);
//    })();
// Bind script tag in head tag end
});