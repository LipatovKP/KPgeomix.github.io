const headerMenu = () => {
    const headerEl = document.querySelector(".header__nav__el.active");
    const headerMenuEl = document.querySelector(".header__menu");
    const headerOverlay = document.querySelector(".overlay");
    const headerMenuWrapper = document.querySelector(".header__menu__wrapper");

    headerEl.addEventListener("mouseover", () => {
        headerOverlay.classList.add("active");
        headerMenuEl.classList.add("active");
        document.body.classList.add("active-menu");
        
        headerEl.classList.add("rotate-arrow");
    });

    headerMenuWrapper.addEventListener("mouseleave", () => {
        headerOverlay.classList.remove("active");
        headerMenuEl.classList.remove("active");
        document.body.classList.remove("active-menu");
        
        headerEl.classList.remove("rotate-arrow");
    });
};

const sliderBanner = () => {
    const swiper = new Swiper('.banner__wrapper__row', {
        direction: 'horizontal',
        loop: true,  
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
};

const sliderDecisions = () => {
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 100,
        watchOverflow: true,
        slidesPerGroup: 3,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1441: {
                slidesPerView: 3,
                spaceBetween: 100,
                watchOverflow: true,
                slidesPerGroup: 3,
            },
            1025: {
                slidesPerView: 3,
                spaceBetween: 80,
                watchOverflow: true,
                slidesPerGroup: 3,
            },
            769: {
                slidesPerView: 2,
                spaceBetween: 80,
                watchOverflow: true,
                slidesPerGroup: 2,
            },
            500: {
                slidesPerView: 1,
                spaceBetween: 80,
                watchOverflow: true,
                slidesPerGroup: 1,
            },
            375: {
                slidesPerView: 1,
                spaceBetween: 80,
                watchOverflow: true,
                slidesPerGroup: 1,
            },
            350: {
                slidesPerView: 1,
                spaceBetween: 80,
                watchOverflow: true,
                slidesPerGroup: 1,
            },
        }
    });
}


/* Слайдеры на Услугах */
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".consultation__link a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const targetId = this.getAttribute("data-target");

            document.querySelectorAll(".consultation__wrapper__row").forEach(swiper => {
                swiper.classList.remove("active");
            });

            const targetSwiper = document.getElementById(targetId);
            if (targetSwiper) {
                targetSwiper.classList.add("active");
            }

            links.forEach(link => {
                link.classList.remove("active");
            });
            this.classList.add("active");
        });
    });
});

const consultationSwiper = () => {
    const consultationSwiper = new Swiper('.consultation-swiper', {
        direction: 'horizontal',
        slidesPerView: 2,
        spaceBetween: 10,
        slidesPerGroup: 1,
        pagination: {
            el: '.consultation__pagination',
        },
        navigation: {
            nextEl: '.consultation__button__next',
            prevEl: '.consultation__button__prev',
        },
        breakpoints: {
            1440: {
                slidesPerView: 2,
                spaceBetween: 10,
                slidesPerGroup: 1,
            },
            1000: {
                slidesPerView: 2,
                spaceBetween: 10,
                slidesPerGroup: 1,
            },
            768: {
                slidesPerView: 1.5,
                spaceBetween: 10,
                slidesPerGroup: 1,
            },
            480: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            310: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
        },
    });
};

const consultationSwiperIntegration = new Swiper('.consultation-swiper-integration', {
    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 1,
    pagination: {
        el: '.consultation__pagination',
    },
    navigation: {
        nextEl: '.consultation__button__next',
        prevEl: '.consultation__button__prev',
    },
    breakpoints: {
        1440: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerGroup: 1,
        },
        1000: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 1.5,
            spaceBetween: 10,
            slidesPerGroup: 1,
        },
        480: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        310: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    },

});

const consultationSwiperEconomy = new Swiper('.consultation-swiper-economy', {
    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 1,
    pagination: {
        el: '.consultation__pagination',
    },
    navigation: {
        nextEl: '.consultation__button__next',
        prevEl: '.consultation__button__prev',
    },
    breakpoints: {
        1440: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerGroup: 1,
        },
        1000: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 1.5,
            spaceBetween: 10,
            slidesPerGroup: 1,
        },
        480: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        310: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    },
});

const techSupport = () =>{
    const techSupport = new Swiper('.techSupport', {
        slidesPerView: 3,
        spaceBetween: 60,
        slidesPerGroup: 3,
        pagination: {
            el: '.techSupport__pagination',
        },
        navigation: {
            nextEl: '.techSupport__next',
            prevEl: '.techSupport__prev',
        },
        breakpoints: {
            1440: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            1000: {
                slidesPerView: 2,
                slidesPerGroup: 1,
            },
            768: {
                slidesPerView: 2,
                spaceBetween:20,
                slidesPerGroup: 1,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 0,
                slidesPerGroup: 1,
                grid: {
                    rows: 2,
                    },
            },
            360: {
                slidesPerView: 1,
                spaceBetween: 0,
                slidesPerGroup: 1,
                grid: {
                    rows: 2,
                },
            },
        }
    });
};
/* Слайдеры на услугах конец */

/*Слайдеры о нас */

const numbersAndEvidence = () =>{
    const numbersAndEvidence = new Swiper('.about-company-quotes', {
        slidesPerView: 4,
        spaceBetween: 60,
        slidesPerGroup: 1,
        loop: true,
        autoplay: {
            delay: 0,
        },
        speed: 3500,
        breakpoints: {
            1440: {
                slidesPerView: 3,
                slidesPerGroup: 1,
            },
            1000: {
                slidesPerView: 3,
                spaceBetween: 30,
                slidesPerGroup: 1,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
                slidesPerGroup: 1,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 30,
                slidesPerGroup: 1,
            },
            320: {
                slidesPerView: 2,
                spaceBetween: 30,
                slidesPerGroup: 1,
            },

        },
    });
};

const licensesCertificates = () =>{
    const licensesCertificates = new Swiper('.licenses-certificates', {
        slidesPerView: 3,
        slidesPerGroup: 1,
        centeredSlides: true,
        pagination: {
            el: '.licenses__certificates__pagination',
        },
        navigation: {
            nextEl: '.licenses__certificates__next',
            prevEl: '.licenses__certificates__prev',
        },
        breakpoints: {
            1440: {
                centeredSlides: true,
                loop: true,
                initialSlide: 2,
                slidesPerView: 3,
                slidesPerGroup: 1,
            },
            1000: {
                centeredSlides: true,
                loop: true,
                slidesPerView: 0,
                spaceBetween: 30,
                slidesPerGroup: 1,
            },
            768: {
                centeredSlides: false,
                loop: false,
                slidesPerView: 2,
                spaceBetween: 30,
                slidesPerGroup: 1,
            },
            480: {
                centeredSlides: false,
                loop: false,
                slidesPerView: 1,
                spaceBetween: 30,
                slidesPerGroup: 1,
            },
            320: {
                centeredSlides: false,
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
        },
    });
};

const achievementsSlider = () =>{
    const achievementsSlider = new Swiper('.achievements-slider', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        pagination: {
            el: '.licenses__achievements__pagination',
        },
        navigation: {
            nextEl: '.licenses__achievements__next',
            prevEl: '.licenses__achievements__prev',
        },
    });
};

const ourClients = () =>{
    const ourClients = new Swiper('.our-clients', {
        slidesPerView: 2,
        spaceBetween: 10,
        slidesPerGroup: 1,
        pagination: {
            el: '.our__clients__pagination',
        },
        navigation: {
            nextEl: '.our__clients__next',
            prevEl: '.our__clients__prev',
        },
        breakpoints: {
            1440: {
                slidesPerView: 2,
                spaceBetween: 20,
                slidesPerGroup: 2,
            },
            1000: {
                slidesPerView: 2,
                slidesPerGroup: 1,
            },
            769: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
        },
    });
};

const teamSwiper = () =>{
    const teamSwiper = new Swiper('.team-swiper', {
        slidesPerView: 3,
        slidesPerGroup: 1,
        loop: true,
        centeredSlides: true,
        effect: 'coverflow',
        coverflowEffect:{
            stretch: -45,
            slideShadows: false,
            rotate: 1,
        },
        pagination: {
            el: '.team__slider__pagination',
        },
        navigation: {
            nextEl: '.team__slider__next',
            prevEl: '.team__slider__prev',
        },
        breakpoints: {
            1440: {
                loop: true,
                centeredSlides: true,
                slidesPerView: 3,
                spaceBetween: 10,
                slidesPerGroup: 1,
            },
            1000: {
                slidesPerView: 2,
                slidesPerGroup: 1,

                coverflowEffect:{
                    stretch: 122,
                    slideShadows: true,
                    rotate: 1,
                },
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                loop: true,
                coverflowEffect:{
                    stretch: 120,
                    slideShadows: true,
                    rotate: 1,
                },
            },
            480: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
        },

    });
};

const historyDevelopment = () =>{
    const historyDevelopment = new Swiper('.history-development', {
        slidesPerView: 13,
        pagination: {
            el: '.history__development__pagination',
            type: 'progressbar',
            clickable: true,
        },
        breakpoints: {
            481: {
                slidesPerView: 13,
                direction: 'horizontal',
            },
            310: {
                slidesPerView: 13,
                direction: 'vertical',
            },
        },
    });
};

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".history__development__slide a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const targetId = this.getAttribute("data-target");

            document.querySelectorAll(".history__development__cross__wrapper").forEach(swiper => {
                swiper.classList.remove("active");
            });

            const targetSwiper = document.getElementById(targetId);
            if (targetSwiper) {
                targetSwiper.classList.add("active");
            }

            links.forEach(link => {
                link.classList.remove("active");
            });
            this.classList.add("active");
        });
    });
});

// прогресс-бар
document.querySelectorAll('.history__development__slide a').forEach((link, index) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        let totalLinks = document.querySelectorAll('.history__development__slide a').length;

        let percentage = ((index + 1) / totalLinks) * 100;


        document.querySelector('.progress-bar').style.width = percentage + '%';
        document.querySelector('.progress-bar--height').style.height = percentage + '%';

    });
});

/*Слайдеры о нас конец */

/* Слайдеры решения */

const solutionSlider = () =>{
    const solutionSlider = new Swiper('.solution-slider', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 40,
        loop:false,
        pagination: {
            el: '.solution__slider__pagination',
            clickable: true,
        },
    });
};

/* слайдеры решения конец */
const tabs = () => {
    const tabsEl = document.querySelectorAll(".product__column__header");
    const tabContentsEl = document.querySelectorAll(".product__tab");
    const starTextEl = document.querySelectorAll(".link__blue");

    tabsEl.forEach((tabEl, index) => {
        tabEl.addEventListener("click", () => {
            // Удаляем класс "active" у всех заголовков вкладок
            tabsEl.forEach((el) => {
                el.classList.remove("active");
            });
            
            // Добавляем класс "active" к текущему заголовку вкладки
            tabEl.classList.add("active");

            // Удаляем класс "active" у всех содержимых вкладок
            tabContentsEl.forEach((content) => {
                content.classList.remove("active");
            });
            
            // Добавляем класс "active" только к соответствующему содержимому вкладки
            tabContentsEl[index].classList.add("active");

        });
    });
};

const init = () => {
    headerMenu()
    sliderBanner()
    consultationSwiper()
    licensesCertificates()
    teamSwiper()
    historyDevelopment()
    ourClients()
    achievementsSlider()
    techSupport()
    solutionSlider()
    tabs()
    sliderDecisions()
    numbersAndEvidence()
};

document.addEventListener('DOMContentLoaded', init);