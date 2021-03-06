$(function() {

	// Set options
	var options = {
		offset: '#showHere',
		offsetSide: 'top',
		classes: {
			clone:   'banner--clone',
			stick:   'banner--stick',
			unstick: 'banner--unstick'
		}
	};

        // Initialise with options
        var banner = new Headhesive('.banner', options);

        // Headhesive destroy
        // banner.destroy();

        $(".menu ul li a, .button").mPageScroll2id({
        	offset: 60
        });

        $('.popup').magnificPopup();

        $('.popslide1').magnificPopup({
        	items: {
        		src: 'img/foto1_sect6.jpg'
        	},
        	type: 'image'
        });
        $('.popslide2').magnificPopup({
        	items: {
        		src: 'img/foto2_sect6.jpg'
        	},
        	type: 'image'
        });
        $('.popslide3').magnificPopup({
        	items: {
        		src: 'img/foto3_sect6.jpg'
        	},
        	type: 'image'
        });
        $('.popslide4').magnificPopup({
        	items: {
        		src: 'img/foto4_sect6.jpg'
        	},
        	type: 'image'
        });
        $('.popslide5').magnificPopup({
        	items: {
        		src: 'img/foto5_sect6.jpg'
        	},
        	type: 'image'
        });
        $('.popslide6').magnificPopup({
        	items: {
        		src: 'img/foto6_sect6.jpg'
        	},
        	type: 'image'
        });

        $(".slider2").owlCarousel({
        	navigation: true,
        	navigationText: "",
        	items: 3,
        	itemsDesktop      : [1199,3],
        	itemsDesktopSmall     : [979,3],
        	itemsTablet       : [768,3],
          itemsMobile       : [479,3]
        });

        var sync1 = $("#sync1");
        var sync2 = $("#sync2");

        sync1.owlCarousel({
        	singleItem : true,
        	slideSpeed : 1000,
        	navigation: true,
        	navigationText: "",
        	loop: true,
        	pagination:false,
        	afterAction : syncPosition,
        	responsiveRefreshRate : 200,
        });

        sync2.owlCarousel({
        	items : 4,
        	itemsDesktop      : [1199,4],
          itemsDesktopSmall     : [979,4],
          itemsTablet       : [768,4],
          itemsMobile       : [479,4],
        	pagination:false,
        	responsiveRefreshRate : 100,
        	afterInit : function(el){
        		el.find(".owl-item").eq(0).addClass("synced");
        	}
        });

        function syncPosition(el){
        	var current = this.currentItem;
        	$("#sync2")
        	.find(".owl-item")
        	.removeClass("synced")
        	.eq(current)
        	.addClass("synced")
        	if($("#sync2").data("owlCarousel") !== undefined){
        		center(current)
        	}
        }

        $("#sync2").on("click", ".owl-item", function(e){
        	e.preventDefault();
        	var number = $(this).data("owlItem");
        	sync1.trigger("owl.goTo",number);
        });

        function center(number){
        	var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
        	var num = number;
        	var found = false;
        	for(var i in sync2visible){
        		if(num === sync2visible[i]){
        			var found = true;
        		}
        	}

        	if(found===false){
        		if(num>sync2visible[sync2visible.length-1]){
        			sync2.trigger("owl.goTo", num - sync2visible.length+2)
        		}else{
        			if(num - 1 === -1){
        				num = 0;
        			}
        			sync2.trigger("owl.goTo", num);
        		}
        	} else if(num === sync2visible[sync2visible.length-1]){
        		sync2.trigger("owl.goTo", sync2visible[1])
        	} else if(num === sync2visible[0]){
        		sync2.trigger("owl.goTo", num-1)
        	}

        }




	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
