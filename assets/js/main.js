function main() { 
  menuToggle()
  popup()
  select()
  animateBlocks()
} main()

// Menu Toggle
function menuToggle() { 
    const menuBtn = document.querySelector('.nav-menu')
    const navMenu = document.querySelector('.nav')
    menuBtn.addEventListener('click', ()=> {
      if (menuBtn.classList.contains('navigation__btn--active')) {
        menuBtn.classList.remove('navigation__btn--active')
        navMenu.style.cssText = `right: -115%`
        menuBtn.children[1].style.cssText = `width: 75%;`
        for (let i = 0; i < menuBtn.children.length; i++) {
          menuBtn.children[i].style.cssText += `
          top: 50%;
          transform: rotate(0deg) translateY(-50%);
          -webkit-transform: rotate(0deg) translateY(-50%);
          -moz-transform: rotate(0deg) translateY(-50%);
          -ms-transform: rotate(0deg) translateY(-50%);
          -o-transform: rotate(0deg) translateY(-50%);
          `
        }
        setTimeout(() => {
          menuBtn.children[1].style.cssText = `
            top: calc(50% + .75rem);
          `
          menuBtn.children[0].style.cssText = ``
        }, 300);
      } else {
        menuBtn.classList.add('navigation__btn--active')
        navMenu.style.cssText = `right: 0%`
        for (let i = 0; i < menuBtn.children.length; i++) {
          menuBtn.children[i].style.cssText += `
          width: 100%;
          top: 50%;
          `
        }
        menuBtn.children[0].style.cssText += `
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        `
        menuBtn.children[1].style.cssText += `
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        `
        setTimeout(() => {
          menuBtn.children[0].style.cssText += `
          transform: rotate(-45deg);
          -webkit-transform: rotate(-45deg);
          -moz-transform: rotate(-45deg);
          -ms-transform: rotate(-45deg);
          -o-transform: rotate(-45deg);
          `
          menuBtn.children[1].style.cssText += `
          transform: rotate(45deg);
          -webkit-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          -o-transform: rotate(45deg);
          `
        }, 300);
      }
    })
}

// Popup
function popup() {
  const popupOpenBtns = document.querySelectorAll('.btn-popup-open'),
        popupCloseBtn = document.querySelector('.close-popup'),
        popupWrap     = document.querySelector('.popup-wrap')

  popupOpenBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      popupWrap.style.cssText = `display: block;`
    })
  })
  popupCloseBtn.addEventListener('click', () => {
    popupWrap.style.cssText = `display: none;`
  })
}

// Select
function select() {
  const selectSingle = document.querySelector('.__select');
  const selectSingle_title = selectSingle.querySelector('.__select__title');
  const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

  // Toggle menu
  selectSingle_title.addEventListener('click', () => {
    if ('active' === selectSingle.getAttribute('data-state')) {
      selectSingle.setAttribute('data-state', '');
    } else {
      selectSingle.setAttribute('data-state', 'active');
    }
  });

  // Close when click to option
  for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
      selectSingle_title.textContent = evt.target.textContent;
      selectSingle.setAttribute('data-state', '');
    });
  }
}

// Animations 
function animateBlocks() {
  window.addEventListener('scroll', () => {
    console.log(document.querySelector('.decision__img-wrap').getBoundingClientRect().y - document.querySelector('.decision__img-wrap').offsetHeight);
    if (document.querySelector('.decision__img-wrap').getBoundingClientRect().y - document.querySelector('.decision__img-wrap').offsetHeight <= 0 && window.innerWidth >= 768) {
      document.querySelector('.decision__img').style.cssText = `opacity: 1;left: 0;`
      return
    }
    if (document.querySelector('.decision__img-wrap').getBoundingClientRect().y - document.querySelector('.decision__img-wrap').offsetHeight <= 300 && window.innerWidth <= 768) {
      document.querySelector('.decision__img').style.cssText = `opacity: 1;left: 0;`
      return
    }
  })
}