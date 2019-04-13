;(function($){
	'use strict';

	const tabs = $('.tabs__item');
	const content = $('[data-content');

	$(tabs).click(function(){
		$(tabs).removeClass('active');
		$(this).addClass('active');
		const target = $(this).attr('data-target');
		content.removeClass('visible');
		$(`[data-content=${target}]`).addClass('visible');
	});

	function appendCircle(className, value = 0, size = '100px'){

		//required html structure
		/*
			<div class="className">
				<span>7.7</span>
			</div>
		*/
			const field = $(className);
			if(value){
				field.find('span').text(value);
			}

			const rate = value || parseFloat($(field).text());

			$(field)
			.css({
				'position': 'relative',
				'font-size': '0'
			})
			.find('span')
			.addClass('rate-value')
			.css({
				'background': 'none',
				'border': 'none',
				'position': 'absolute',
				'top': '0',
				'right': '0',
				'bottom': '0',
				'left': '0',
				'display': 'flex',
				'align-items': 'center',
				'justify-content': 'center',
				'max-width': '100%'
			});

			$(field).append(
				`
				<svg class="circles">
				<circle class="circles__inner" />
				<circle class="circles__outer" />
				</svg>
				`
				);

			const circles = $(field)
			.find('.circles')
			.css({
				'width': size,
				'height': size
			});
			const halfField = circles.width() / 2;
			const circleRadius = (circles.width() - 10) / 2;
			const D = Math.round(Math.PI * circleRadius * 2);
			const percentage = Math.round(D * rate * 10 / 100);

			$(circles).children().each(function(i) {
				let radius;
				if(!i) {
					radius = circleRadius - parseFloat($(this).css('stroke-width'))
				} else {
					$(this)
					.css({
						'stroke-dasharray': `${percentage}px ${D}px`,
						'transition': 'stroke-dasharray .5s ease'
					});
					radius = circleRadius
				}
				$(this)
				.attr('r', radius)
				.attr('cx', -halfField)
				.attr('cy', halfField)
				.css({
					'transform': 'rotate(-90deg)',
					'fill': 'transparent'
				});
			});
		}

		appendCircle('.card-info__rate', '5.0', '90px');


	})(jQuery);