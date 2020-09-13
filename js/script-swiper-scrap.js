// old code

// var swiper = new Swiper('.swiper-container', {
//     navigation: {
//         nextEl: '.slider-next',
//         prevEl: '.slider-prev',
//     },
//     pagination: {
//         el: '.swiper-pagination'
//     },
//     slidesPerView: "auto",
//     spaceBetween: 50,
//     speed: 20,

//     effect: 'fade',
//     on: {
//         slideChangeTransitionStart: function () {
//             document.querySelector('.swiper-slide.swiper-slide-active').style.transform = "translateX(0px)";
//         },
//         slideChange: function () {
//             console.log(this);
//             console.log(document.querySelector('.swiper-slide.swiper-slide-active'));
//             document.querySelector('.swiper-slide.swiper-slide-active').style.transform = "translateX(100%)";
//         }
//     }
// });

var swiper = new Swiper('.swiper-container', {

    speed: 1000, // Set the speed of your animation in ms
    watchSlidesProgress: true, // enable the 'proress' property on each slide
    virtualTranslate: true, // makes the slider not move automatically, you'll have to do the translate animation
    watchSlidesVisibility: true, // slides that in viewport will have additional visible class
    effect: "myCustomTransition", // optional - set the name of your animation. You can later check if your animation is actually applied and abort animation if not.

    //
    slidesPerView: "auto",
    spaceBetween: 35,
    loop: true,
    navigation: {
        nextEl: '.slider-next',
        prevEl: '.slider-prev',
    },
    pagination: {
        el: '.swiper-pagination'
    },
    //
    on: {
        progress(progress) {
            const swiper = this;
            if (swiper.params.effect !== "myCustomTransition") return;
            that.progress(swiper, progress);
        },
        setTransition(transition) {
            const swiper = this;
            if (swiper.params.effect !== "myCustomTransition") return;
            that.setTransition(swiper, transition);
        },
        setTranslate(translate) {
            const swiper = this;
            if (swiper.params.effect !== "myCustomTransition") return;
            that.setTranslate(swiper, translate);
        }
    }
});

swiper.on('slideChange', function () {
    // console.log('slide changed');
    // document.querySelector('.swiper-slide-active').style.border = "5px solid green";
    // gsap.fromTo('.swiper-slide-prev', { x: 0 }, { x: '100%', duration: 0.5 })
    // console.log(this.slides)
})

swiper.on('slideNextTransitionStart', function () {
    gsap.fromTo('.swiper-slide-prev', { x: 0 }, { x: '100%', duration: 2 })
})

swiper.on('transitionStart', function () {
    // console.log('transition start');
    // document.querySelector('.swiper-slide-active').style.border = "5px solid green";
    // gsap.to('.swiper-slide-active', { x: '50%', duration: 0.5 })
})

let interleaveOffset = 0.3;

swiper.on('progress', function () {
    // console.log('slide progress');

    // document.querySelector('.swiper-slide-active').style.border = "5px solid green";

    var swiper = this;
    // console.log(swiper.slides)
    // for (var i = 0; i < swiper.slides.length; i++) {
    //     var slideProgress = swiper.slides[i].progress;
    //     var innerOffset = swiper.width * interleaveOffset;
    //     var innerTranslate = slideProgress * innerOffset;
    // swiper.slides[i].querySelector(".slide-inner").style.transform =
    //     "translate3d(" + innerTranslate + "px, 0, 0)";
    // }
})