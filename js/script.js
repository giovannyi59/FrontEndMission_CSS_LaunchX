// Efecto scroll del menu
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");

    header.classList.toggle("solid", window.scrollY > 100);
});

// Menú responsive
const menuButton = document.getElementById("menu-button");
const nav = document.getElementById("nav-items");

menuButton.addEventListener("click", function () {
    nav.classList.toggle("active");
});


// Programación del acordeón
const acordion = document.getElementsByClassName("accordion-box");
const iconDown = document.getElementsByClassName("fa-caret-down");
const iconUp = document.getElementsByClassName("fa-caret-up");

for(let i = 0; i < acordion.length; i++) {
    acordion[i].addEventListener("click", function() {
        this.classList.toggle("active");
    });
}

//api de google maps
var searchInput = 'search_input';

$(document).ready(function () {
    var autocomplete;
    autocomplete = new google.maps.places.Autocomplete((document.getElementById(searchInput)), {
        types: ['geocode'],
    });
        
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        var near_place = autocomplete.getPlace();
        document.getElementById('loc_lat').value = near_place.geometry.location.lat();
        document.getElementById('loc_long').value = near_place.geometry.location.lng();
                
        document.getElementById('latitude_view').innerHTML = near_place.geometry.location.lat();
        document.getElementById('longitude_view').innerHTML = near_place.geometry.location.lng();
    });
});