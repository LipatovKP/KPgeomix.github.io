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
    var swiper = new Swiper(".mySwiper", {
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





// Выбор слайдера на Услугах
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

});

const techSupport = new Swiper('.techSupport', {
    slidesPerView: 3,
    spaceBetween: 60,
    slidesPerGroup: 2,
    pagination: {
        el: '.techSupport__pagination',
    },
    navigation: {
        nextEl: '.techSupport__next',
        prevEl: '.techSupport__prev',
    },

});


const tabs = () => {
    const tabsEl = document.querySelectorAll(".product__column__header");
    const tabContentsEl = document.querySelectorAll(".product__tab");

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
    tabs()
    sliderDecisions()
};

document.addEventListener('DOMContentLoaded', init);