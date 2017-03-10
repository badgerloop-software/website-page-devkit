angular.module('controllers', [])

.controller('navbarController', function($scope, $location) {
    
    $scope.buttons = [
        { text: "docs",         enabled: false },
        { text: "pod",          enabled: false },
        { text: "contact",      enabled: true  },
        { text: "sponsorship",  enabled: false },
        { text: "media",        enabled: false },
        { text: "team",         enabled: false }
    ];
    $scope.homeButton = { text: "home", enabled: false };
    $scope.curr_button = $scope.buttons[0];
    
    $scope.changeView = function(button) {
        console.log(button.text + " button pressed.");
    };
    
});

var themeColors = {
    primary: 'red',
    accent: 'deep-orange',
    warn: 'orange',
    background: 'grey'
};

angular.module('badgerloop-site', ['ngMaterial', 'controllers'])

.config(function($mdThemingProvider) { // $mdIconProvider

	$mdThemingProvider
	.theme('default')
	.primaryPalette(themeColors.primary)
	.accentPalette(themeColors.accent)
	.warnPalette(themeColors.warn)
	.backgroundPalette(themeColors.background);

});

