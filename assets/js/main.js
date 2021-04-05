function main() { 
  menuToggle()
} main()

// Menu Toggle
function menuToggle() { 
    const menuBtn = document.querySelector('.nav-menu')
    const navMenu = document.querySelector('.nav')
    menuBtn.addEventListener('click', ()=> {
      if (menuBtn.classList.contains('navigation__btn--active')) {
        menuBtn.classList.remove('navigation__btn--active')
        navMenu.style.cssText = `right: -100%`
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
