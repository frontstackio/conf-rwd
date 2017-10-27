/* **********************************************
 *
 *   FRONTSTACK.IO
 *   =============
 *
 ********************************************** */
{

// Use window.onscroll without killing performance
// see http://joshbroton.com/hooking-up-to-the-window-onscroll-event-without-killing-your-performance/
let hasScrolledRecently = false;
setInterval(() => {
  if (hasScrolledRecently) hasScrolledRecently = false;
}, 100);

// Set active section
const pageSections = Array.from( document.querySelectorAll('.section') );
window.addEventListener('scroll', (event) => {

  if (hasScrolledRecently) return;
  hasScrolledRecently = true;

  function isInView(el) {
    const elementStart = el.offsetTop;
    const elementEnd = el.offsetTop + el.clientHeight;
    const viewportScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    return (viewportScrollTop > (elementStart - (window.innerHeight / 2))) &&
           (viewportScrollTop < (elementEnd - (window.innerHeight / 5)))
  }

  pageSections.forEach((page) => {
    const pageLink = document.querySelector(`a[href="#${page.id}"]`);
    isInView(page) ? pageLink.classList.add('active') : pageLink.classList.remove('active');
  });

}); // end window.addEventListener

}
