jQuery(document).ready(function(){
	var intro = $('.cd-intro-block');
	var projectsContainer = $('.cd-projects-wrapper');

	//show the projects slider if user clicks the show-projects button
	intro.click(function(event) {
		event.preventDefault();
		intro.addClass('projects-visible');
		projectsContainer.addClass('projects-visible');
		//animate single project - entrance animation

	});

	intro.on('click', function(event) {
		//projects slider is visible - hide slider and show the intro panel
		if( intro.hasClass('projects-visible') && !$(event.target).is('a[data-action="show-projects"]') ) {
			intro.removeClass('projects-visible');
			projectsContainer.removeClass('projects-visible');
		}
	});
});