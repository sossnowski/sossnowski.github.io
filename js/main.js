let pixelScrolled = -10
jQuery(document).ready(function($) {
    hideLoader()
    logoLive()
    scrollHandler()
    handleNavbarClick()
    arrowClickHandler()
    arrowUpClickHandler()
})


scrollHandler = () => {
    let deltaStep = 0.5
    let deltaStepX = 0.2
    let wrapperWidth = parseInt($('.main-gap').width()) + parseInt($('.about-page').width())
     + parseInt($('.mission-page').width()) + 2 * parseInt($('.half-gap').width()) + parseInt($('.join-page').width())
    $(document).bind('wheel', function(e){
        if (Math.abs(e.originalEvent.deltaY) >= Math.abs(e.originalEvent.deltaX)) {
            pixelScrolled += e.originalEvent.deltaY * deltaStep * -1
        } else {
            pixelScrolled += e.originalEvent.deltaX * deltaStepX * -2
        }
        if (pixelScrolled > 0) pixelScrolled = 0
        if (Math.abs(pixelScrolled) > wrapperWidth) pixelScrolled = -wrapperWidth
        $('.wrapper').css('transform', 'translate3d('+ pixelScrolled +'px,0,0)')
    });
}

let delayTime = 1000
let durationTime = 1000
let mainDelay = 200

logoLive = () => {
    mainPartLive()
    setTimeout(() => { firstPartLive() }, mainDelay)
    setTimeout(() => { secondPartLive() }, 2 * mainDelay)
    setTimeout(() => { thirdPartLive() }, 3 * mainDelay)
    setTimeout(() => { fourthPartLive() }, 4 * mainDelay)
    setTimeout(() => { fifthPartLive() }, 5 * mainDelay)
    setTimeout(() => { sixthPartLive() }, 6 * mainDelay)
}

firstPartLive = () => {
    let firstPart = document.getElementsByClassName('logo-img-part-1')
    setInterval(() => { addMarginTop(firstPart) }, durationTime)
    setInterval(() => { removeMarginTop(firstPart) }, durationTime)

}

secondPartLive = () => {
    let secondPart = document.getElementsByClassName('logo-img-part-2')
    setInterval(() => { addMarginTop(secondPart) }, durationTime)
    setInterval(() => { removeMarginTop(secondPart) }, durationTime)
}

thirdPartLive = () => {
    let thirdPart = document.getElementsByClassName('logo-img-part-3')
    setInterval(() => { addMarginTop(thirdPart) }, durationTime)
    setInterval(() => { removeMarginTop(thirdPart) }, durationTime)

}

fourthPartLive = () => {
    let fourthPart = document.getElementsByClassName('logo-img-part-4')
    setInterval(() => { addMarginTop(fourthPart) }, durationTime)
    setInterval(() => { removeMarginTop(fourthPart) }, durationTime)
    
}

fifthPartLive = () => {
    let fifthPart = document.getElementsByClassName('logo-img-part-5')
    setInterval(() => { addMarginTop(fifthPart) }, durationTime)
    setInterval(() => { removeMarginTop(fifthPart) }, durationTime)

}

sixthPartLive = () => {
    let sixthPart = document.getElementsByClassName('logo-img-part-6')
    setInterval(() => { addMarginTop(sixthPart) }, durationTime)
    setInterval(() => { removeMarginTop(sixthPart) }, durationTime)
}

mainPartLive = () => {
    let mainPart = document.getElementsByClassName('logo-img-part-0')
    setInterval(() => { addMarginTop(mainPart) }, durationTime)
    setInterval(() => { removeMarginTop(mainPart) }, durationTime)
}


addMarginTop = (element) => {
    $(element).animate({ marginTop: '100px'}, 1000);
}

removeMarginTop = (element) => {
    $(element).animate({ marginTop: '0'}, 1000);
}

arrowClickHandler = () => {
    $('.arrow').on('click', function(){
        if($('.video-wrapper').hasClass('heightTo100')) {
            $('.video-wrapper').removeClass('heightTo100')
            $('.video-wrapper').addClass('heightTo10')
        } else {
            $('.video-wrapper').addClass('heightTo10')
        }
        $('.arrow').toggleClass('disapear')
        $('.page-header').toggleClass('disapear')   
    }) 
}

arrowUpClickHandler = () => {
    $('.arrow-up').on('click', function(){
        if($('.video-wrapper').hasClass('heightTo10')) {
            $('.video-wrapper').removeClass('heightTo10')
            $('.video-wrapper').addClass('heightTo100')
        } else {
            $('.video-wrapper').addClass('heightTo100')
        } 
        $('.arrow').toggleClass('disapear')
        $('.page-header').toggleClass('disapear')  
    }) 
}

scrollToPage = (currentValue, value) => {
    let counter = currentValue
    let numberOfPixels = 10
    if (Math.abs(currentValue) > Math.abs(value)) numberOfPixels *= -1
    let id = setInterval(() => {
        $('.wrapper').css('transform', 'translate3d(-'+ counter +'px,0,0)')
        counter += numberOfPixels
        let tmp = value - counter
    if (Math.abs(tmp) <= Math.abs(numberOfPixels)) {
        counter += tmp
        $('.wrapper').css('transform', 'translate3d(-'+ counter +'px,0,0)')
        clearInterval(id);
    }
    }, 1)
}

handleNavbarClick = () => {
    let screenWidth = $(window).width()
    $('#about').on('click', function() {
        let transform = $('.wrapper').css('transform')
        if (transform != "none") {
            let currTrans = transform.split(/[()]/)[1];
            let posx = parseInt(currTrans.split(',')[4]) * -1;
            scrollToPage(posx, screenWidth)
        } else {
            scrollToPage(0, screenWidth)
        }
        pixelScrolled = screenWidth * -1
    })
    $('#mission').on('click', function() {
        let transform = $('.wrapper').css('transform')
        if (transform != "none") {
            let currTrans = transform.split(/[()]/)[1];
            let posx = parseInt(currTrans.split(',')[4]) * -1;
            scrollToPage(posx, 2.5 * screenWidth)
        } else {
            scrollToPage(0, 2.5 * screenWidth)
        }
        pixelScrolled = 2.5 * screenWidth * -1
    })
    $('#join').on('click', function() {
        let transform = $('.wrapper').css('transform')
        if (transform != "none") {
            let currTrans = transform.split(/[()]/)[1];
            let posx = parseInt(currTrans.split(',')[4]) * -1;
            scrollToPage(posx, 4 * screenWidth)
        } else {
            scrollToPage(0, 4 * screenWidth)
        }
        pixelScrolled = 4 * screenWidth * -1
    })
    $('#main').on('click', function() {
        scrollToStart()
        pixelScrolled = 0
    })
}

scrollToStart = () => {
    let transform = $('.wrapper').css('transform')
        if (transform != "none") {
            $('.wrapper').css('transform', 'translate3d( 0,0,0)')
        }
}

hideLoader = () => {
    setTimeout(() => {
        $('.loader').addClass('disapear')
    }, 3000)
}