// Toggle the sidebar menu

$('.menu-toggle').click(function() {
    $('.layout__aside').toggleClass('layout__aside--push');
    $('.layout__main').toggleClass('layout__main--push');
    $(this).toggleClass('menu-toggle--push');
});
$('.menu-close').click(function() {
    $('.layout__aside').removeClass('layout__aside--push');
    $('.layout__main').removeClass('layout__main--push');
});