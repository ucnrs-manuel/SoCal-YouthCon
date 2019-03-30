/*
	Author: Will Gunadi - JQuery 
	Date Created: 3/27/2019
	Purpose: Create Coutndown function
*/
(function ($) {
	function pad(n) {
		return (n < 10) ? ("0" + n) : n;
	}

	$.fn.showclock = function () {
		//Variable Declaration
		let currentDate = new Date();
		let fieldDate = $(this).data('date').split('-');
		let fieldTime = [0, 0];

		if ($(this).data('time') != undefined) {

			fieldTime = $(this).data('time').split(':');
		}
		//Calculate difference
		let futureDate = new Date(fieldDate[0], fieldDate[1] - 1, fieldDate[2], fieldTime[0], fieldTime[1]);
		let seconds = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

		if (seconds <= 0 || isNaN(seconds)) {
			this.hide();
			return this;
		}

		//Get Days
		let days = Math.floor(seconds / 86400);
		seconds = seconds % 86400;

		//Get hours
		let hours = Math.floor(seconds / 3600);
		seconds = seconds % 3600;

		//get minutes
		let minutes = Math.floor(seconds / 60);
		seconds = Math.floor(seconds % 60);

		//push into DOM
		let html = "";

		if (days != 0) {
			html += "<div class='countdown-container days'>"
			html += "<span class='countdown-value days-bottom'>" + pad(days) + "</span>";
			html += "<span class='countdown-heading days-top'>Days</span>";
			html += "</div>";
		}

		html += "<div class='countdown-container hours'>"
		html += "<span class='countdown-value hours-bottom'>" + pad(hours) + "</span>";
		html += "<span class='countdown-heading hours-top'>Hours</span>";
		html += "</div>";

		html += "<div class='countdown-container minutes'>"
		html += "<span class='countdown-value minutes-bottom'>" + pad(minutes) + "</span>";
		html += "<span class='countdown-heading minutes-top'>Minutes</span>";
		html += "</div>";

		html += "<div class='countdown-container seconds'>"
		html += "<span class='countdown-value seconds-bottom'>" + pad(seconds) + "</span>";
		html += "<span class='countdown-heading seconds-top'>Seconds</span>";
		html += "</div>";

		this.html(html);
	};

	$.fn.countdown = function () {
		var el = $(this);
		el.showclock();
		setInterval(function () {
			el.showclock();
		}, 1000);

	}

}(jQuery));

jQuery(document).ready(function () {
	if (jQuery(".countdown").length > 0) {
		jQuery(".countdown").each(function () {
			jQuery(this).countdown();
		})

	}
})