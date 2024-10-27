/*$(window).scroll(function() {
    var hT = $('#info').offset().top,
        hH = $('#info').height(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
     console.log((hT+hH-wH), wS);
    let menu = document.getElementsByClassName("navbar-bg");
    let menu2 = document.getElementsByClassName("navbar");
    if (wS >= (hT+hH-wH)-20){
        menu[0].style.position = "fixed";
        menu[0].style.top = "0"
        menu2[0].style.position = "fixed";
        menu2[0].style.top = "0"
    }
    else
    {
        menu[0].style.position = "";
        menu[0].style.top = ""
        menu2[0].style.position = "";
        menu2[0].style.top = ""
    }
 });*/

const element1 = document.querySelector('#middleSchool');
const observer1 = new IntersectionObserver(entries => {
  element1.classList.toggle( 'animationT', entries[0].isIntersecting );
});

observer1.observe( element1 );

const element2 = document.querySelector('#university');
const observer2 = new IntersectionObserver(entries => {
  element2.classList.toggle( 'animationT', entries[0].isIntersecting );
});

observer2.observe( element2 );

const element3 = document.querySelector('#highSchool');
const observer3 = new IntersectionObserver(entries => {
  element3.classList.toggle( 'animationB', entries[0].isIntersecting );
});

observer3.observe( element3 );

function toggleMenu(menu) {
  menu.classList.toggle('open');
}