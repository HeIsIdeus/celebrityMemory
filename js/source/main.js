(function(){

  'use strict';

  $(document).ready(init);

/* This function initializes game play with three seperate click events
   the first-user presses "begin game" button, second-only AFTER the user
   clicks "begin game" can they see or be "shown" the hidden picture,
   third-user presses "reset game" the page refreshes and browser cache emptied */

  function init(){
    $('.btnStartGame').click(shuffleMe);
    $('.img').click(showPic);
    $('#resetPlayer').click(pageRefresh);
  }
// Build an array to store our game images //

  var imgArray = [];

  imgArray[0] = 'img/icon16.png';
  imgArray[1] = 'img/icon17.png';
  imgArray[2] = 'img/icon26.png';
  imgArray[3] = 'img/icon19.png';
  imgArray[4] = 'img/icon20.png';
  imgArray[5] = 'img/icon21.png';
  imgArray[6] = 'img/icon22.png';
  imgArray[7] = 'img/icon23.png';
  imgArray[8] = 'img/icon24.png';
  imgArray[9] = 'img/icon25.png';

/* This function serves the purpose of randomizing our hidden array of game images
   so our table data images do not appear in different boxes every single time the game is played */

  function shuffleMe(){
    var newArray = [[imgArray],[imgArray]];
    newArray = _.shuffle(_.flatten(newArray));
    $('td.img').each(function(){
      $(this).append('<img src=' + newArray[0] + ' class="hidden">');
      newArray.shift();
    });
  }

/* The purpose of matchDivs is to "show" the hidden images when user selects the first and second image.
   matchDivs also returns the "hidden" class when the two images selected by the user are NOT identical */

  function matchDivs() {
    if ($('.shown:eq(0)').attr('src') === $('.shown:eq(1)').attr('src')) {
      $('.shown').addClass('matched').removeClass('shown');
    } else {
      setTimeout(function() {

        $('.shown').addClass('hidden').removeClass('shown');
      },1000);
    }
  }

/* The showPic function is activated when the first and second image selected by the user are identical */

  function showPic() {
    if($('.shown').length === 2) {
      return;
    }

    $(this).children().removeClass('hidden').addClass('shown');

    if($('.shown').length === 2) {
      matchDivs();
    }

  }

/* Is used to reset the game by refreshing the page and completely clearing out the browser cache */

  function pageRefresh() {
    $('#resetPlayer').click(function() {
      location.reload();
    });
  }
})();
