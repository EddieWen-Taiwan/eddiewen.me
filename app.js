import './css/reset.css';

import './css/components/first-window.css';
import './css/components/name-wrapper.css';
import './css/components/tag-box.css';
import './css/components/pic-banner.css';
import './css/components/white-section.css';
import './css/components/section-title.css';
import './css/components/sub-title.css';
import './css/components/self-intro.css';
import './css/components/pic-divider.css';
import './css/components/period-wrapper.css';
import './css/components/quote-wrapper.css';
import './css/components/grid-wrapper.css';
import './css/components/footer.css';

window.onload = () => {

	const windowH = window.innerHeight;

	/**
	 * target height
	 */
	const topOf = {
		about: document.querySelector('.white-section.-about').offsetTop,
		quote: document.querySelector('.quote-wrapper').offsetTop,
		portfolio: document.querySelector('.white-section.-portfolio').offsetTop,
	};

	/**
	 * target on DOM
	 */
	const target = {
		quote: document.querySelector('.quote-wrapper'),
		section: document.querySelectorAll('.section-title'),
	};

	let scrollNow = 0;

	window.addEventListener( 'scroll', (e) => {

		scrollNow = e.currentTarget.pageYOffset;

		/**
		 * show section-title of `About me`
		 */
		if( !target.section[0].classList.contains('-show') && scrollNow >= topOf.about - (windowH * 0.6) ) {

			target.section[0].classList.add('-show');

		}

		/**
		 * show quote - `write the code, change the world`
		 */
		if( !target.quote.classList.contains('bounceInRight') && scrollNow >= topOf.quote - (windowH * 0.6) ) {

			target.quote.classList.add('bounceInRight');

		}

		/**
		 * show section-title of `Portfolio`
		 */
		if( !target.section[1].classList.contains('-show') && scrollNow >= topOf.portfolio - (windowH * 0.6) ) {

			target.section[1].classList.add('-show');

		}

	});

};
