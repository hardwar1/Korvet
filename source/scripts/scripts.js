'use strict';

window.addEventListener("DOMContentLoaded", () => {
  let DEVICE_WIDTH;

  function widthDevice() {
    DEVICE_WIDTH = document.documentElement.clientWidth;
  }
  widthDevice();

  window.addEventListener('resize', () => {
    widthDevice();
    contentPaddingTop();
    slideON1(DEVICE_WIDTH, '.category__swiper', 768);
    slideON2(DEVICE_WIDTH, '.offers__swiper', 768);
    slideON3(DEVICE_WIDTH, '.advantages__swiper', 768);
  });

  let swiper = new Swiper('.top-month__swiper', {
    speed: 400,
    spaceBetween: 0,
    loop: true,

    navigation: {
      prevEl: '.top-month .slider-btns__btn--prev',
      nextEl: '.top-month .slider-btns__btn--next',
    },
  });

  swiper = new Swiper('.hero__swiper', {
    speed: 400,
    spaceBetween: 0,
    loop: true,

    pagination: {
      el: '.hero .swiper-pagination',
      type: 'bullets',
    },

    navigation: {
      prevEl: '.hero .slider-btns__btn--prev',
      nextEl: '.hero .slider-btns__btn--next',
    },
  });

  swiper = new Swiper('.about__swiper', {
    speed: 400,
    spaceBetween: 0,
    loop: true,

    navigation: {
      prevEl: '.about .slider-btns__btn--prev',
      nextEl: '.about .slider-btns__btn--next',
    },
  });

  swiper = new Swiper('.reviews__swiper', {
    speed: 400,
    spaceBetween: 80,
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    navigation: {
      prevEl: '.reviews .slider-btns__btn--prev',
      nextEl: '.reviews .slider-btns__btn--next',
    },
  });

  swiper = new Swiper('.certificates__swiper', {
    speed: 400,
    spaceBetween: 80,
    loop: true,
    centeredSlides: true,
    slideShadows: false,
    slidesPerView: 'auto',
    effect: "cards",
    grabCursor: true,
    perSlideOffset: 35,
    perSlideRotate: 8,

    navigation: {
      prevEl: '.certificates .slider-btns__btn--prev',
      nextEl: '.certificates .slider-btns__btn--next',
    },
  });

  swiper = new Swiper('.slider-section__swiper', {
    speed: 400,
    spaceBetween: 24,
    // loop: true,
    // centeredSlides: true,
    // slideShadows: false,
    slidesPerView: 'auto',
    autoHeight: 'auto',

    navigation: {
      prevEl: '.slider-section .slider-btns__btn--prev',
      nextEl: '.slider-section .slider-btns__btn--next',
    },
  });

  $('.header__burger').click(function () {
    $(this).toggleClass('active');
    $('.header__bottom').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.column-content__burger').click(function () {
    $(this).toggleClass('active');
    $('.column-content__aside').toggleClass('active');
  });

  function closePopaps() {
    $('body').removeClass('lock');
    $('.js-active.active').removeClass('active');
  }

  function openPopaps(name) {
    $('body').addClass('lock');
    $(name).addClass('active');
    $(`.overlay`).addClass('active');
  }

  $('.overlay').click(closePopaps);

  $(document).keyup(function (e) {
    if (e.keyCode == 27) closePopaps();
  });

  $('.popap__close').click(closePopaps);

  function contentPaddingTop() {
    $('.page-padding-top').css('padding-top', $('.header').height() + 'px');
  }
  contentPaddingTop();

  $('.drop-menu-btn').click(function (e) {
    e.preventDefault();
  });

  $(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 600) {
        $('.scroll-top').show();
      } else {
        $('.scroll-top').hide();
      }
    });

    $('.scroll-top').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 600);
      return false;
    });
  });

  function maskInputTypeTel(selector, masked = '+7 (___) ___-__-__') {
    const elems = document.querySelectorAll(selector);

    function mask(event) {
      const keyCode = event.keyCode;
      const template = masked,
        def = template.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
      let i = 0,
        newValue = template.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
      i = newValue.indexOf("_");
      if (i !== -1) {
        newValue = newValue.slice(0, i);
      }
      let reg = template.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}";
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = newValue;
      }
      if (event.type === "blur" && this.value.length < 5) {
        this.value = "";
      }

    }

    for (const elem of elems) {
      elem.addEventListener("input", mask);
      elem.addEventListener("focus", mask);
      elem.addEventListener("blur", mask);
    }

  }
  maskInputTypeTel('[type="tel"]');

  function scrollToId() {
    document.querySelectorAll('a[href^="#"').forEach(link => {
      if (link.getAttribute('href').length > 1) {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          let href = this.getAttribute('href').substring(1);
          const scrollTarget = document.getElementById(href);

          if (scrollTarget) {
            const topOffset = 0;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset - 70;

            window.scrollBy({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }

        });
      }
    });
  }
  scrollToId();

  let windowSize1 = 'big';
  let windowSize2 = 'big';
  let windowSize3 = 'big';
  let windowSize4 = 'big';
  let windowSize5 = 'big';

  let swiperON1, swiperON2, swiperON3, swiperON4, swiperON5;

  slideON1(DEVICE_WIDTH, '.category__swiper', 768);
  slideON2(DEVICE_WIDTH, '.offers__swiper', 768);
  slideON3(DEVICE_WIDTH, '.advantages__swiper', 768);

  function slideON1(x, selector, breakpoint) {
    const slider = document.querySelector(selector);

    if (slider) {
      let sliderWrapper = slider.querySelector('ul'),
        sliderItems = slider.querySelectorAll('li');
      if (x < breakpoint && windowSize1 == 'big') {
        windowSize1 = 'notbig';

        slider.classList.add('swiper');
        sliderWrapper.classList.add('swiper-wrapper');

        for (const i of sliderItems) {
          i.classList.add('swiper-slide');
        }

        swiperON1 = new Swiper(`${selector}.swiper`, {
          speed: 400,
          spaceBetween: 30,
          slidesPerView: 'auto',
          loop: true,
          navigation: {
            prevEl: '.category .slider-btns__btn--prev',
            nextEl: '.category .slider-btns__btn--next',
          },
          breakpoints: {
            481: {
              spaceBetween: 50
            },
          }

        });
      } else if (x >= breakpoint && windowSize1 != 'big') {
        windowSize1 = 'big';
        sliderWrapper.removeAttribute('style');
        sliderItems.forEach(item => item.removeAttribute('style'));
        $('.category .swiper-slide-duplicate').remove();
        slider.classList.remove('swiper');
        sliderWrapper.classList.remove('swiper-wrapper');

        for (const i of sliderItems) {
          i.classList.remove('swiper-slide');
        }
      }
    }
  }

  function slideON2(x, selector, breakpoint) {
    const slider = document.querySelector(selector);

    if (slider) {
      let sliderWrapper = slider.querySelector('ul'),
        sliderItems = slider.querySelectorAll('li');
      if (x < breakpoint && windowSize2 == 'big') {
        windowSize2 = 'notbig';

        slider.classList.add('swiper');
        sliderWrapper.classList.add('swiper-wrapper');

        for (const i of sliderItems) {
          i.classList.add('swiper-slide');
        }

        swiperON2 = new Swiper(`${selector}.swiper`, {
          speed: 400,
          spaceBetween: 35,
          slidesPerView: 'auto',
          loop: true,
          navigation: {
            prevEl: '.offers .slider-btns__btn--prev',
            nextEl: '.offers .slider-btns__btn--next',
          },

        });
      } else if (x >= breakpoint && windowSize2 != 'big') {
        windowSize2 = 'big';
        sliderWrapper.removeAttribute('style');
        sliderItems.forEach(item => item.removeAttribute('style'));
        $('.offers .swiper-slide-duplicate').remove();
        slider.classList.remove('swiper');
        sliderWrapper.classList.remove('swiper-wrapper');

        for (const i of sliderItems) {
          i.classList.remove('swiper-slide');
        }
      }
    }
  }

  function slideON3(x, selector, breakpoint) {
    const slider = document.querySelector(selector);

    if (slider) {
      let sliderWrapper = slider.querySelector('ul'),
        sliderItems = slider.querySelectorAll('li');
      if (x < breakpoint && windowSize3 == 'big') {
        windowSize3 = 'notbig';

        slider.classList.add('swiper');
        sliderWrapper.classList.add('swiper-wrapper');

        for (const i of sliderItems) {
          i.classList.add('swiper-slide');
        }

        swiperON3 = new Swiper(`${selector}.swiper`, {
          speed: 400,
          spaceBetween: 35,
          slidesPerView: 'auto',
          loop: true,
          navigation: {
            prevEl: '.advantages .slider-btns__btn--prev',
            nextEl: '.advantages .slider-btns__btn--next',
          },
        });
      } else if (x >= breakpoint && windowSize3 != 'big') {
        windowSize3 = 'big';
        sliderWrapper.removeAttribute('style');
        sliderItems.forEach(item => item.removeAttribute('style'));
        $('.advantages .swiper-slide-duplicate').remove();
        slider.classList.remove('swiper');
        sliderWrapper.classList.remove('swiper-wrapper');

        for (const i of sliderItems) {
          i.classList.remove('swiper-slide');
        }
      }
    }
  }

  function accardionMenuToggle() {
    $('.accardion-menu__body').hide();

    $('.accardion-menu__btn').click(function () {
      $(this).toggleClass('active');
      $(this).parent('li').find('.accardion-menu__body').slideToggle();
    })
  }
  accardionMenuToggle();

  function groupsMoreBtns() {
    const groups = document.querySelectorAll('.product-groups__item');

    if (groups.length < 1) return;

    for (const group of groups) {
      const listItems = group.querySelectorAll('li');
      const moreBtn = group.querySelector('.product-groups__btn-more');

      if (listItems.length < 4) {
        moreBtn.style.display = 'none';
        continue;
      }

      moreBtn.textContent = `еще ${listItems.length - 3}`;

      moreBtn.onclick = () => {
        const hideWrapper = group.querySelector('.product-groups__hide-wrapper');
        const hideContentHeight = hideWrapper.querySelector('ul').offsetHeight;
        console.log(hideContentHeight);
        hideWrapper.style.height = hideContentHeight + 'px';
        moreBtn.style.display = 'none';
      }
    }
  }
  groupsMoreBtns();

  function breadcrumbsBtns() {
    const breadcrumbsBody = document.querySelector('.breadcrumbs__inner');
    if(!breadcrumbsBody) return;

    const toEndBtn = document.querySelector('.breadcrumbs__btn--to-end');
    const toStartBtn = document.querySelector('.breadcrumbs__btn--to-start');

    function showHideBtn() {

      if (breadcrumbsBody.scrollLeft == 0) {
        toStartBtn.classList.remove('show')
      } else {
        toStartBtn.classList.add('show')
      }

      if (breadcrumbsBody.scrollLeft === breadcrumbsBody.scrollWidth - breadcrumbsBody.clientWidth) {
        toEndBtn.classList.remove('show')
      } else {
        toEndBtn.classList.add('show')
      }
    }
    showHideBtn();

    breadcrumbsBody.onscroll = () => {
      showHideBtn();
    };

    window.addEventListener('resize', showHideBtn);

    toEndBtn.onclick = () => {
      breadcrumbsBody.scrollBy({
        left: breadcrumbsBody.scrollWidth,
        behavior: 'smooth'
      })
    }

    toStartBtn.onclick = () => {
      breadcrumbsBody.scrollBy({
        left: - breadcrumbsBody.scrollWidth,
        behavior: 'smooth'
      })
    }
  }
  breadcrumbsBtns();

  function hideTableAfter() {
    const tableShadows = document.querySelectorAll('.table-shadow');

    if (tableShadows.length < 1) return;

    for (const shadow of tableShadows) {
      const table = shadow.querySelector('table');

      function showHide() {
        if (table.scrollLeft !== table.scrollWidth - table.clientWidth) {
          shadow.classList.add('show')
        } else {
          shadow.classList.remove('show')
        }
      }
      showHide();

      table.onscroll = () => {
        showHide();
      };

      window.addEventListener('resize', showHide);
    }
  }
  hideTableAfter();

  function openInput() {
    const btn = document.querySelector('.header__form-btn');

    btn.addEventListener('click', () => {
      document.querySelector('.header__input').classList.toggle('active')

    });
  }
  openInput();

});

window.addEventListener('load', () => {
  function hideAny() {
    const hideBoxs = document.querySelectorAll('.hide-wrapper');

    if (hideBoxs.length < 1) return;

    for (const box of hideBoxs) {
      const content = box.querySelector('.hide-wrapper-content');
      if (content.classList.contains('hidden')) {
        box.style.height = 0
      } else {
        box.style.height = content.offsetHeight + 'px';
      }
    }

    const btns = document.querySelectorAll('.hide-wrapper-btn');

    if (btns.length < 1) return;

    for (const btn of btns) {
      btn.onclick = function () {
        const hideBox = this.parentNode.querySelector('.hide-wrapper');

        this.classList.toggle('active');
        console.log('object');

        if (this.classList.contains('active')) {
          console.log('true');
          hideBox.style.height = '0px';
        } else {
          const boxContent = hideBox.querySelector('.hide-wrapper-content');
          hideBox.style.height = boxContent.offsetHeight + 'px';
        }
      }
    }
  }

  hideAny();

});


