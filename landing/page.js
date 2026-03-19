$(document).ready(function() {
    $('.nav-links a, .navbar-right a').hover(
        function() {
            $(this).css({
                'border': '1px solid #1a1e2b',
                'border-radius': '20px',
                'padding': '6px 16px',
                'margin': '-6px -16px'
            });
        },
        function() {
            $(this).css({
                'border': 'none',
                'padding': '0',
                'margin': '0'
            });
        }
    );

    $('#signInBtn').click(function(e) {
        e.preventDefault();
        alert('Это кнопка авторизации.');
    });

    $('[id$="DemoBtn"], #demoBtn, #heroDemoBtn, #aboutDemoBtn, #ctaDemoBtn').click(function(e) {
        e.preventDefault();
        alert('Это демо-версия.');
    });

    $('img').hover(
        function() {
            $(this).stop().animate({
                scale: '1.05'
            }, 200);
        },
        function() {
            $(this).stop().animate({
                scale: '1'
            }, 200);
        }
    );

    $('#linkBenefits').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#featuresSection').offset().top - 80
        }, 800);
    });

    $('#linkFeatures').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#aboutSection').offset().top - 80
        }, 800);
    });

    $('#linkContacts').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#footer').offset().top - 20
        }, 800);
    });

    $('#footerCol1Title, #footerCol2Title, ' +
      '#footerLinkFeatures, #footerLinkSupport, #footerLinkTerms, #footerLinkPrivacy, ' +
      '#footerLinkStyle, #footerLinkLicenses, #footerLinkInstructions, #footerLinkChangelog')
        .hover(
            function() {
                $(this).css({
                    'color': 'hotpink',
                    'font-weight': 'bold'
                });
            },
            function() {
                $(this).css({
                    'color': '',
                    'font-weight': ''
                });
            }
        )
        .click(function(e) {
            e.preventDefault();
            alert('Это футер с контактами');
        });
});