jQuery(function ($) {
	"use strict"
	$(document).ready(function () {

		$('.toggle-submenu-show').on('click', function () {
			$('.toggle-submenu').slideToggle();
		});

		$('.menu-tggle').on('click', function () {
			$('.menu-toggle-bar').addClass('show');

		});

		$('.toggle-close-btn').on('click', function () {
			$('.menu-toggle-bar').removeClass('show');
		});




		$('.menu-search').on('click', function () {
			$('.search-panel').removeClass('popup-hide');
		});

		$('.btn-popup-close').on('click', function () {
			$('.search-panel').addClass('popup-hide');
		});



		// slider

		var swiper = new Swiper('.swiper', {
			slidesPerView: 3,
			direction: getDirection(),
			autoplay: {
				delay: 5000,
			},
			navigation: {
				nextEl: '.slide-btn-next',
				prevEl: '.slide-btn-prev',
			},
			on: {
				resize: function () {
					swiper.changeDirection(getDirection());
				},
			},
		});

		function getDirection() {
			var windowWidth = window.innerWidth;
			var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

			return direction;
		}

	});
});