var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 111.8301581, lng: 34.8544438 },
    zoom: 16,
  });
  var marker = new google.maps.Marker({
    position: { lat: 111.8301581, lng: 34.8544438 },
    map: map,
  });
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMLoaded');
  var popup = document.querySelector('.pop-up');
  var openPopup = document.querySelector('.hotels-search-btn');

  openPopup.addEventListener('click', function(evt) {
    console.log('wtf');

    if (evt.target !== openPopup) {
      return;
    }
    popup.classList.toggle('pop-up-show');
  });

  window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains('pop-up-show')) {
        popup.classList.remove('pop-up-show');
      }
    }
  });

  var plus = document.querySelector('.wrapper-adults .more');
  console.log(plus);
  var minus = document.querySelectorAll('.less');
  var adultsCounterNode = document.querySelector('#adults');
  var kidsCounter = document.querySelector('#kids');
  var adultsCounter = 0;
  console.dir(adultsCounter);

  plus.addEventListener(
    'click',
    function(evt) {
      console.log('plus clicked');
      evt.stopPropagation();
      evt.preventDefault();

      adultsCounter++;
      adultsCounterNode.innerText = adultsCounter;
    },
    true
  );
});
