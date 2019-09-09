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

// document.addEventListener('DOMContentLoaded', function() {
// console.log('DOMLoaded');
var popup = document.querySelector('.pop-up');
var openPopup = document.querySelector('.hotels-search-btn');

openPopup.addEventListener('click', function(evt) {
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

var plusAdults = document.querySelector('.wrapper-adults .more');
var minusAdults = document.querySelector('.wrapper-adults .less');
var plusKids = document.querySelector('.wrapper-kids .more');
var minusKids = document.querySelector('.wrapper-kids .less');
var adultsCounterNode = document.querySelector('#adults');
var kidsCounterNode = document.querySelector('#kids');
var adultsCounter = 0;
var kidsCounter = 0;
console.dir(adultsCounter);

plusAdults.addEventListener('click', function(evt) {
  evt.preventDefault();
  adultsCounter++;
  adultsCounterNode.innerText = adultsCounter;
});

minusAdults.addEventListener('click', function(evt) {
  evt.preventDefault();
  adultsCounter--;
  adultsCounterNode.innerText = adultsCounter;
});

plusKids.addEventListener('click', function(evt) {
  evt.preventDefault();
  kidsCounter++;
  kidsCounterNode.innerText = kidsCounter;
});

minusKids.addEventListener('click', function(evt) {
  evt.preventDefault();
  kidsCounter--;
  kidsCounterNode.innerText = kidsCounter;
});
// });
