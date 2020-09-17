const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Communication Skills",
				weight: 8
			}, {
				text: "Coaching",
				weight: 8
			}, {
				text: "Business Analysis",
				weight: 9
			}, {
				text: "System Analysis",
				weight: 6
			}, {
				text: "Project Management",
				weight: 11
			}, {
				text: "SDLC",
				weight: 10
			}, {
				text: "Monitoring",
				weight: 9
			}, {
				text: "Data Structure",
				weight: 10
			}, {
				text: "Stakeholder Management",
				weight: 7
			}, {
				text: "ITIL Framework",
				weight: 9
			}, {
				text: "Agile Methodology",
				weight: 12
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"I am a Full time Technical Systems Analyst & Freelance Developer."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
