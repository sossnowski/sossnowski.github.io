/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

const handleSectionShow = () => {
    if ($('#read-more-section-1').hasClass('show-section')){
        $('#read-more-section-1').removeClass('show-section')
    } else $('#read-more-section-1').addClass('show-section')
}

const handleSection2Show = () => {
    if ($('#read-more-section-2').hasClass('show-section')){
        $('#read-more-section-2').removeClass('show-section')
    } else $('#read-more-section-2').addClass('show-section')
}

// read more buttons
$('#read-more-trigger-1').click(handleSectionShow)
$('#read-more-trigger-1-1').click(handleSectionShow)

$('#read-more-trigger-2').click(handleSection2Show)
$('#read-more-trigger-2-1').click(handleSection2Show)