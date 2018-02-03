jQuery(function ($) {

    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    (function () {
        $('#preloader').delay(200).fadeOut('slow');
    }());

    // --------------------------------------------------------------------
    // One Page Navigation
    // --------------------------------------------------------------------

    (function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 50) {
                $('nav.navbar').addClass('sticky-nav');
            }
            else {
                $('nav.navbar').removeClass('sticky-nav');
            }
        });
    }());

    // --------------------------------------------------------------------
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    // --------------------------------------------------------------------

    (function () {
        $('a.page-scroll').on('click', function (e) {
            e.preventDefault();
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
        });
    }());

    // --------------------------------------------------------------------
    // Closes the Responsive Menu on Menu Item Click
    // --------------------------------------------------------------------

    (function () {
        $('.navbar-collapse ul li a').on('click', function () {
            if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
                $('.navbar-toggle:visible').trigger('click');
            }
        });
    }());

    // --------------------------------------------------------------------
    // Google Map
    // --------------------------------------------------------------------

    (function () {
        if ($('#googleMap').length > 0) {

            //set your google maps parameters
            var $latitude  = 50.061958, //If you unable to find latitude and longitude of your address. Please visit http://www.latlong.net/convert-address-to-lat-long.html you can easily generate.
                $longitude = 19.919863,
                $map_zoom  = 16;
            /* ZOOM SETTING */

            //google map custom marker icon
            var $marker_url = 'img/google-map-marker.png';

            //we define here the style of the map
            var style = [
            {
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#f5f5f5"
                  }
                ]
              },
              {
                "elementType": "labels.icon",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#f5f5f5"
                  }
                ]
              },
              {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#bdbdbd"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#eeeeee"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#e5e5e5"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#ffffff"
                  }
                ]
              },
              {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#dadada"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#e5e5e5"
                  }
                ]
              },
              {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#eeeeee"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#c9c9c9"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              }
            ];

            //set google map options
            var map_options = {
                center            : new google.maps.LatLng($latitude, $longitude),
                zoom              : $map_zoom,
                panControl        : false,
                zoomControl       : true,
                mapTypeControl    : false,
                streetViewControl : false,
                mapTypeId         : google.maps.MapTypeId.ROADMAP,
                scrollwheel       : false,
                styles            : style,
            }
            //initialize the map
            var map = new google.maps.Map(document.getElementById('googleMap'), map_options);
            //add a custom marker to the map
            var marker = new google.maps.Marker({
                position : new google.maps.LatLng($latitude, $longitude),
                map      : map,
                visible  : true,
                icon     : $marker_url
            });
        }
    }());

    // --------------------------------------------------------------------
    // COUNTDOWN TIMER PLUGIN
    // --------------------------------------------------------------------

    (function () {
        $("#getting-started").countdown("2018/05/12", function(event) {
            $('#countdown-days').text(event.strftime('%D d'));
            $('#countdown-hours').text(event.strftime('%H h '));
            $('#countdown-minutes').text(event.strftime('%M m '));
            $('#countdown-seconds').text(event.strftime('%S s '));

        });
    }());

    // --------------------------------------------------------------------
    // OWL CAROUSEL - PARTNERS
    // --------------------------------------------------------------------

    (function () {
        $('.owl-carousel').owlCarousel({
            loop:true,
            autoplay: true,
            autoplayTimeout: 2000,
            smartSpeed: 500,
            autoplayHoverPause:true,
            margin:20,
            nav:false,
            touchDrag: true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        })
    }());
    // --------------------------------------------------------------------
    // CONTACT FOOTER - SOCIAL ICONS HOVER
    // --------------------------------------------------------------------

    (function() {
        $('.contact-social-hover').mouseenter(function() {
          $(this).css({'background-color':'#000'});
          $(this).find('a').css({'color':'#fff'});
          $(this).find('a').addClass('neon');
        });
        $('.contact-social-hover').mouseleave(function() {
          $(this).css({'background-color':'transparent'});
          $(this).find('a').css({'color':'#000'});
          $(this).find('a').removeClass('neon');
        });
    }());


    // --------------------------------------------------------------------
    // NAVBAR DROPDOWN SLIDE EFFECT
    // --------------------------------------------------------------------

    (function() {
      $('.navbar .dropdown').hover(function() {
        $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideDown();
      }, function() {
        $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp()
      });

    }());
    
        // --------------------------------------------------------------------
    // CREATE MODAL ON THUMBNAIL CLICK
    // --------------------------------------------------------------------
    (function(){
        $(".thumbnail").on("click", function(e){
            var el = $(this);
            e.preventDefault();
            $.get("js/data.json", function(data){appendInformation(data, el)});
        })
    }());
    
    
    var appendInformation = function(data, elem){
        if (document.querySelector(".modal") == null){
            var modalNode = document.createElement("div");
            var containerNode = document.createElement("div");
            var rowNode = document.createElement("div");
            var imgNode = document.createElement("img");
            var clickedImg = elem[0].querySelector("img").getAttribute("src");
            imgNode.setAttribute("src", clickedImg);
            var column1Node = document.createElement("div");
            var column2Node = document.createElement("div");
            $(column1Node).addClass("col-sm-6 modal-section");
            $(column2Node).addClass("col-sm-6 modal-section");
            column1Node.appendChild(imgNode);
            //here import the text - I will be using elementText to look for the right name in the json file 
            var elementText = elem[0].querySelector("h3").dataset.name;
            var description;
            var allSpeakers = data.main.speakers;
            for (var i=0;i <allSpeakers.length; i++){
                if (allSpeakers[i].name == elementText){
                    description = allSpeakers[i]["description"];
                }
            }
            //now that I have a description, I should append it 
            var descriptionTitle = document.createElement("h2");
            var descContent = document.createTextNode(elem[0].querySelector("h3").innerHTML.split("<small>")[0]);
            descriptionTitle.appendChild(descContent);
            $(descriptionTitle).addClass("modal-custom-content neon event-subtitle");
            var descriptionContent = document.createElement("div");
            var descContentText = document.createTextNode(description);
            descriptionContent.appendChild(descContentText);
            $(descriptionContent).addClass("modal-custom-content");
            column2Node.appendChild(descriptionTitle);
            column2Node.appendChild(descriptionContent);
            $(rowNode).addClass("row modal-row");
            rowNode.appendChild(column1Node);
            rowNode.appendChild(column2Node);
            $(containerNode).addClass("container");
            $(containerNode).addClass("modal-container");
            containerNode.appendChild(rowNode);
            $(modalNode).addClass("modal full-modal");
            //also create an exit icon
            var exitCross = document.createElement("button");
            var exitSpan = document.createElement("span");
            var exitContent = document.createTextNode("×");
            $(exitCross).addClass("close neon");
            $(exitCross).attr("aria-label", "Close");
            $(exitSpan).attr("aria-hidden", "true");
            $(exitCross).on("click", function(e){
                e.preventDefault();
                var modal = document.querySelector(".modal");
                modal.remove();
            })
            exitSpan.appendChild(exitContent);
            exitCross.appendChild(exitSpan);
            modalNode.appendChild(exitCross);
            
            modalNode.appendChild(containerNode);
            document.body.appendChild(modalNode);
            
            
        } 
    }
}); // JQuery end