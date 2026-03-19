$(document).ready(function() {

    $('#first_project, #second_project, #third_project, #aboutme_img').hover(
        function() {
            $(this).stop().animate({
                scale: '1.05'
            }, 200);
            $(this).css({
                'box-shadow': '0 20px 40px rgba(255, 255, 255, 0.3)',
                'transition': 'box-shadow 0.2s ease'
            });
        },
        function() {
            $(this).stop().animate({
                scale: '1'
            }, 200);
            $(this).css({
                'box-shadow': '0 10px 30px rgba(0,0,0,0.1)'
            });
        }
    );

    $('#linkProjects').click(function(e) {
        $('html, body').animate({
            scrollTop: $('.project').offset().top - 70
        }, 800);
    });

    $('#linkAboutMe').click(function(e) {
        $('html, body').animate({
            scrollTop: $('.about_me').offset().top - 70
        }, 800);
    });

    $('#linkContacts').click(function(e) {
        $('html, body').animate({
            scrollTop: $('#footer').offset().top - 20
        }, 800);
    });

    $('.project-text a').hover(
        function() {
            $(this).css({
                'transform': 'scale(1.05)',
                'box-shadow': '0 10px 20px rgba(0,0,0,0.2)'
            });
        },
        function() {
            $(this).css({
                'transform': 'scale(1)',
                'box-shadow': 'none'
            });
        }
    );

    $('#newsletterForm').submit(function(e) {
        let email = $('#newsletterEmail').val();
        if (email) {
            alert(`Спасибо за подписку, ${email}!`);
            $('#newsletterEmail').val('');
        }
    });
    
    $('#footerCol1 a').hover(
        function() {
            $(this).css({
                'color': '#1a1e2b',
            });
        },
        function() {
            $(this).css({
                'color': '#C7DEED',
            });
        }
    );
});