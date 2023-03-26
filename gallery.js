
// Using mansory layout: https://masonry.desandro.com/layout.html

window.onload = () => {
  var grid = document.querySelector('.grid');

  var msnry = new Masonry( grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });
  
  imagesLoaded( grid ).on( 'progress', function() {
    // layout Masonry after each image loads
    msnry.layout();
  });
  

}




