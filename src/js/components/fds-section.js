var $ = window.jQuery = require('jquery');

$('body').on('change', '[data-behavior~="toggle-fullscreen-components"]', function(event) {

  $('.fam-section')    .toggleClass('fam-section--fullscreen');
  $('.fam-tophat')     .toggleClass('fam-tophat--fullscreen');
  $('.fam-header-app') .toggleClass('fam-header-app--fullscreen');
  $('.fam-nav-global') .toggleClass('fam-nav-global--fullscreen');
  $('.fam-topper')     .toggleClass('fam-topper--fullscreen');
  $('.fam-footer')     .toggleClass('fam-footer--fullscreen');
  $('.fam-screen-id')  .toggleClass('fam-screen-id--fullscreen');

})

