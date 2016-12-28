(function() {
	/* In animations (to close icon) */

	var beginAC = 80,
	    endAC = 320,
	    beginB = 80,
	    endB = 320;

	function inAC(s) {
	    s.draw('80% - 240', '80%', 0.3, {
	        delay: 0.1,
	        callback: function() {
	            inAC2(s)
	        }
	    });
	}

	function inAC2(s) {
	    s.draw('100% - 545', '100% - 305', 0.6, {
	        easing: ease.ease('elastic-out', 1, 0.3)
	    });
	}

	function inB(s) {
	    s.draw(beginB - 60, endB + 60, 0.1, {
	        callback: function() {
	            inB2(s)
	        }
	    });
	}

	function inB2(s) {
	    s.draw(beginB + 120, endB - 120, 0.3, {
	        easing: ease.ease('bounce-out', 1, 0.3)
	    });
	}

	/* Out animations (to burger icon) */

	function outAC(s) {
	    s.draw('90% - 240', '90%', 0.1, {
	        easing: ease.ease('elastic-in', 1, 0.3),
	        callback: function() {
	            outAC2(s)
	        }
	    });
	}

	function outAC2(s) {
	    s.draw('20% - 240', '20%', 0.3, {
	        callback: function() {
	            outAC3(s)
	        }
	    });
	}

	function outAC3(s) {
	    s.draw(beginAC, endAC, 0.7, {
	        easing: ease.ease('elastic-out', 1, 0.3)
	    });
	}

	function outB(s) {
	    s.draw(beginB, endB, 0.7, {
	        delay: 0.1,
	        easing: ease.ease('elastic-out', 2, 0.4)
	    });
	}

	/* Awesome burger default */


	/* Scale functions */

	function addScale(m) {
		m.className = 'menu-icon-wrapper scaled';
	}

	function removeScale(m) {
		m.className = 'menu-icon-wrapper';
	}

	/* Awesome burger scaled */

	var pathD = document.getElementById('pathD'),
		pathE = document.getElementById('pathE'),
		pathF = document.getElementById('pathF'),
		segmentD = new Segment(pathD, beginAC, endAC),
		segmentE = new Segment(pathE, beginB, endB),
		segmentF = new Segment(pathF, beginAC, endAC),
		wrapper2 = document.getElementById('menu-icon-wrapper2'),
		trigger2 = document.getElementById('menu-icon-trigger2'),
		toCloseIcon2 = true,
		dummy2 = document.getElementById('nav');

	wrapper2.style.visibility = 'visible';
	
	trigger2.onclick = function() {
		addScale(wrapper2);
		if (!$('body').hasClass('on')) {
			
			inAC(segmentD);
			inB(segmentE);
			inAC(segmentF);

			dummy2.className = 'wap_nav';
			$('body').addClass('on');
			$('#nav').slideToggle();
			
		} else {
			outAC(segmentD);
			outB(segmentE);
			outAC(segmentF);
			$('body').removeClass('on');
			$('#nav').slideToggle();
		}
		toCloseIcon2 = !toCloseIcon2;
		setTimeout(function() {
			removeScale(wrapper2);
		}, 450);
	};
	
	/*$('.right-nav nav a').click(function(){
			outAC(segmentD);
			outB(segmentE);
			outAC(segmentF);
			$('body').removeClass('on');
			toCloseIcon2 = !toCloseIcon2;
			setTimeout(function() {
				removeScale(wrapper2);
			}, 450);
	});*/
	/*$("header").on("touchstart", function(e) {
		e.preventDefault();
		startX = e.originalEvent.changedTouches[0].pageX,
		startY = e.originalEvent.changedTouches[0].pageY;

	});
	$("header").on("touchmove", function(e) {
		e.preventDefault();
		moveEndX = e.originalEvent.changedTouches[0].pageX,
		moveEndY = e.originalEvent.changedTouches[0].pageY,
		X = moveEndX - startX,
		Y = moveEndY - startY;
		
		if ( X > 0  ) {	
		if ($('body').hasClass('on')) {
				addScale(wrapper2);
				outAC(segmentD);
				outB(segmentE);
				outAC(segmentF);
				$('body').removeClass('on');
		}
		}
		else if ( X < 0  ) {
		if (!$('body').hasClass('on')) {	
			addScale(wrapper2);
			inAC(segmentD);
			inB(segmentE);
			inAC(segmentF);
			dummy2.className = 'right-nav wh-center';
			$('body').addClass('on');
		}
		}
		toCloseIcon2 = !toCloseIcon2;
		setTimeout(function() {
			removeScale(wrapper2);
		}, 450);
	});	*/
})();
