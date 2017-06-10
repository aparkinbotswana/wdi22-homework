

var secPicture = document.getElementById('secondPicture');
secPicture.src = "https://s-media-cache-ak0.pinimg.com/originals/d9/f5/a5/d9f5a5e4a35726f2d3c537ac38ba5311.gif";

secPicture.style.position = 'relative';
secPicture.style.top = '0px';
secPicture.style.left = '900px';


var llamaMove = function() {
  var oldLeft = parseInt(secPicture.style.left);
  var newLeft = oldLeft + -15;
  secPicture.style.left = newLeft + 'px';

  if (secPicture.style.left < '30px') {
    var orientation = secPicture.style.transform = "rotate(-15deg)";
    var oldTop = parseInt(secPicture.style.top);
    var newTop = oldTop + 10;
    secPicture.style.top = newTop + 'px';
  }

};

window.setInterval(llamaMove, 100);

// on button click in nav bar, make clips ply

// PSEUDO
//
//
// image should probably use .each and this. method for calling all images so that you can have different images and directions set for each one.
//
// last function to written will be a function which opens a new window and automatically runs the function to bring up Cage. See if there is a way to incrementally increase the speed that the photos fly about in so that with each window, the speed of each image is increased. It should essentially form a loop that will continually call with each click. new window. remember to apply the click ONLY to the body. allow the header to be imune to this so that videos can still be played.
