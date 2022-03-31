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


		// Isotop init
		var gridfilter = $('#news-filter-content');
		if (gridfilter.length) {
			$('#news-filter-content').imagesLoaded(function () {
				$('#news-filter-nav').on('click', 'button', function () {
					var filterValue = $(this).attr('data-filter');
					$grid.isotope({
						filter: filterValue
					});
				});
				var $grid = $('#news-filter-content').isotope({
					itemSelector: '.news-filter-item',
					percentPosition: true,
					masonry: {
						columnWidth: '.news-filter-item',
					}
				});
			});
		}

		if ($('#news-filter-nav button').length) {
			var projectfiler = $('#news-filter-nav button');
			if (projectfiler.length) {
				$('#news-filter-nav button').on('click', function (event) {
					$(this).siblings('.active').removeClass('active');
					$(this).addClass('active');
					event.preventDefault();
				});
			}
		}

	});
});