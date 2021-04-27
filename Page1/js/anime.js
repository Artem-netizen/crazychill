document.addEventListener('DOMContentLoaded', () => {
    anime({
        targets: '.logo',
        translateY: [-50, 0],
        easing: 'easeOutExpo',
        duration: 2000,
        delay: 1000,
        opacity: [0, 1],
    })
    anime({
        targets: '.header__title',
        translateX: [-150, 0],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: 1200,
        opacity: [0, 1],
    })
    anime({
        targets: '.nav__item',
        translateY: [-200, 0],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: (el, i) => {
            return 1000 + 100 * i;
        },
        opacity: [0, 1],
    })
    anime({
        targets: '.header__text',
        translateX: [150, 0],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: 1200,
        opacity: [0, 1],
    })
    anime({
        targets: '.header__box .header__button',
        translateX: [-100, 0],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: 1200,
        opacity: [0, 1],
    })
    anime({
        targets: '.basket__btn',
        translateX: [-100, 0],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: 1200,
        opacity: [0, 1],
    })
    anime({
        targets: '.inner__image',
        translateX: [100, 0],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: (el, i) => {
            return 1000 + 100 * i;
        },
        opacity: [0, 1],
    })
    anime({
        targets: '.header__arrow',
        translateY: [100, 0],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: (el, i) => {
            return 1000 + 100 * i;
        },
        opacity: [0, 1],
    })
})