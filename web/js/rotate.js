function rotate(id) {
  var rotated = false;

  document.getElementById(id).onclick = function() {
      var div = document.getElementById(id),
          deg = rotated ? 0 : 360;

      div.style.webkitTransform = 'rotate('+deg+'deg)'; 
      div.style.mozTransform    = 'rotate('+deg+'deg)'; 
      div.style.msTransform     = 'rotate('+deg+'deg)'; 
      div.style.oTransform      = 'rotate('+deg+'deg)'; 
      div.style.transform       = 'rotate('+deg+'deg)'; 

      rotated = !rotated;
  }
}