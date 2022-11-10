const navFunction = () => {
  /*=============== SHOW MENU ===============*/
  const navMenu = document.getElementById('nav-menu')
  const navToggle = document.getElementById('nav-toggle')
  const navClose = document.getElementById('nav-close')
  const header = document.getElementById('header')

  /*===== Menu Show ======== */
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
    })
  }

  /*===== Menu Hidden ======== */
  /* Validate if constant exists */
  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
    })
  }

  /*=============== CHANGE BACKGROUND HEADER ===============*/
  const scrollHeader = () => {
    // When the scroll is greater than 50 viewport height, add the scroll-header class
    window.scrollY >= 50
      ? header.classList.add('bg-header')
      : header.classList.remove('bg-header')
  }
  window.addEventListener('scroll', scrollHeader)
}

export default navFunction
