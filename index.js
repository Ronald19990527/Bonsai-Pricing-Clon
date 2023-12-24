const accordionIcon1 = document.querySelector('#accordion-icon-1');
const accordionIcon2 = document.querySelector('#accordion-icon-2');
const accordionIcon3 = document.querySelector('#accordion-icon-3');
const accordionIcon4 = document.querySelector('#accordion-icon-4');
const accordionIcon5 = document.querySelector('#accordion-icon-5');
const accordionIcon6 = document.querySelector('#accordion-icon-6');
const accordionIcon7 = document.querySelector('#accordion-icon-7');
const product = document.querySelector('#product');
const industries = document.querySelector('#industries');
const templates = document.querySelector('#templates');
const resources = document.querySelector('#resources');
const accordionIcon1Rotate = document.querySelector('#accordion-icon-1-rotate');
const accordionIcon2Rotate = document.querySelector('#accordion-icon-2-rotate');
const accordionIcon3Rotate = document.querySelector('#accordion-icon-3-rotate');
const accordionIcon4Rotate = document.querySelector('#accordion-icon-4-rotate');
const accordionIcon5Rotate = document.querySelector('#accordion-icon-5-rotate');
const accordionIcon6Rotate = document.querySelector('#accordion-icon-6-rotate');
const accordionIcon7Rotate = document.querySelector('#accordion-icon-7-rotate');
const navbarLinksLoginStartFree = document.querySelector('#navbar-links-login-start-free');
const navbarLinksLoginStartFreeCollapsed = document.querySelector('#navbar-links-login-start-free-collapsed');
var accordionIconContainer = document.getElementsByClassName("accordion-icon-container");
var iterarAccordionIconContainer;
let ubicacionActual = window.pageYOffset;
let navBar2 = document.querySelector('#navbar2');
let navBar1 = document.querySelector('#navbar1');
let header = document.querySelector('#header');
let optionMonthlyYearlyContainerCursor = document.querySelector('#option-monthly-yearly-container-cursor');
let toogleOption = document.querySelector('#toogle-option');
let monthly = document.querySelector("#monthly");
let yearlyText = document.querySelector("#yearly-text");
let theBestPlanForYourBusinessCard = document.querySelector('#the-best-plan-for-your-business-card');
let theBestPlanForYourBusinessCardTwo = document.querySelector('#the-best-plan-for-your-business-card-two');
let section2 = document.querySelector("#section-2");

    window.addEventListener('scroll', function () {
      let ubicacionSiguiente = window.pageYOffset;

      if ( ubicacionActual >= ubicacionSiguiente && ubicacionSiguiente <= 9 ) {
        navBar2.style.top = "67.188px";
        navBar1.style.boxShadow = null;
      }
      else  if ( ubicacionActual < ubicacionSiguiente && ubicacionSiguiente > 9 ) {
        navBar2.style.top = "20px";
        navBar1.style.boxShadow = "15px 5px 10px 5px rgba(0, 0, 0, .06)";
      }

      if ( ubicacionSiguiente === 9 ) {
        header.style.backgroundColor = "#ddd";
      }
      else {
        header.style.backgroundColor = "#fff";
      }

      if ( ubicacionSiguiente >= 12 ) {
        navBar1.style.backgroundColor = "#fff";
      }
      else {
        navBar1.style.backgroundColor = null;
      }

      ubicacionActual = ubicacionSiguiente;
    })

    for (iterarAccordionIconContainer = 0; iterarAccordionIconContainer < accordionIconContainer.length; iterarAccordionIconContainer++) {
      accordionIconContainer[iterarAccordionIconContainer].addEventListener("click", function () {
        var menu = this.nextElementSibling;

        if (menu.style.maxHeight) {
          menu.style.maxHeight = null;
        } else {
          menu.style.maxHeight = menu.scrollHeight + "px";
        }
      });
    }

    navbarLinksLoginStartFree.addEventListener('click', e => {
      if (navbarLinksLoginStartFreeCollapsed.style.maxHeight) {
        navbarLinksLoginStartFreeCollapsed.style.maxHeight = null;
      } else {
        navbarLinksLoginStartFreeCollapsed.style.maxHeight = 506 + "px";
      }
    })

    accordionIcon1.addEventListener('click', e => {
      accordionIcon1Rotate.classList.toggle('rotate-accordion-z');
      product.classList.toggle('color-change');
    })

    accordionIcon2.addEventListener('click', e => {
      accordionIcon2Rotate.classList.toggle('rotate-accordion-z');
      industries.classList.toggle('color-change');
    })

    accordionIcon3.addEventListener('click', e => {
      accordionIcon3Rotate.classList.toggle('rotate-accordion-z');
      templates.classList.toggle('color-change');
    })

    accordionIcon4.addEventListener('click', e => {
      accordionIcon4Rotate.classList.toggle('rotate-accordion-z');
      resources.classList.toggle('color-change');
    })

    accordionIcon5.addEventListener('click', e => {
      accordionIcon5Rotate.classList.toggle('rotate-accordion-z');
    })

    accordionIcon6.addEventListener('click', e => {
      accordionIcon6Rotate.classList.toggle('rotate-accordion-z');
    })

    accordionIcon7.addEventListener('click', e => {
      accordionIcon7Rotate.classList.toggle('rotate-accordion-z');
    })

    optionMonthlyYearlyContainerCursor.addEventListener('click', e => {
      toogleOption.classList.toggle('toogle-option-left');

      monthly.classList.toggle('monthly-color');

      yearlyText.classList.toggle('yearly-text-color');

      if (theBestPlanForYourBusinessCard.style.display === "none") {
        setTimeout(function () {
          theBestPlanForYourBusinessCard.style.display = "flex";

          theBestPlanForYourBusinessCard.style.opacity = "1";
        }, 150);
      }
      else {
        theBestPlanForYourBusinessCard.style.display = "none";

        theBestPlanForYourBusinessCard.style.opacity = "0";
      }

      if (theBestPlanForYourBusinessCardTwo.style.display === "none") {
        setTimeout(function () {
          theBestPlanForYourBusinessCardTwo.style.display = "flex";

          theBestPlanForYourBusinessCardTwo.style.opacity = "1";
        }, 150);
      }
      else {
        theBestPlanForYourBusinessCardTwo.style.display = "none";

        theBestPlanForYourBusinessCardTwo.style.opacity = "0";
      }
    })