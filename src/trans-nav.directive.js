(function(angular) {
	"use strict";
	
	angular.module('jpa.js.ng.transNav', []);
	
	angular.module('jpa.js.ng.transNav').directive('transNav', ['$window', transNavbarFn]);
	
	function transNavbarFn($window) {
		return {
			restrict: 'A',
			scope: true,
			link: transNavbarLink
		};
		
		function transNavbarLink(scope, element, attrs) {
			var ngWindow 	= angular.element($window),
				ngTarget 	= angular.element(attrs.navTarget),
				activeClass = attrs.navActive,
				navActive 	= isNavActive();
			
			ngWindow.on('scroll', animateNavBar);
			
			/**
			 * Animates navbar transition
			 * 
			 * @returns {undefined}
			 */
			function animateNavBar() {
				if (isNavActive() !== navActive) {
		            if (isNavActive() && !navActive) {
		                element.addClass(activeClass);
		            }
		            else if (!isNavActive() && navActive) {
		                element.removeClass(activeClass);
		            }
					navActive = isNavActive();
		        }
			}
			
			/**
		     * Determines whether navbar should be active.
		     * 
		     * @return {boolean}
		     */
		    function isNavActive() {
		        return ngWindow.scrollTop() >= ngTarget.offset().top;
		    }
		}
	}
})(window.angular);