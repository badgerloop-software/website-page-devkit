angular.module('badgerloop-site')

.directive('badgerloopFooter', function() {
return {
    restrict: 'E',
    template: 
'\
<footer md-colors="{background: \'primary-500\'}">\
<div layout="row" layout-align="center center">\
    <div layout="row" flex>\
	<md-button hide show-gt-sm style="color:white">Hyperloop Feasibility<md-tooltip md-direction="top">Feasibility</md-tooltip></md-button>\
	<div flex></div>\
    </div>\
    <div class="social">\
	<md-button class="social-button" aria-label="Facebook"><img src="im/social/facebook-white.png" /><md-tooltip md-direction="top">Facebook</md-tooltip></md-button>\
	<md-button class="social-button" aria-label="Instagram"><img src="im/social/instagram-white.png" /><md-tooltip md-direction="top">Instagram</md-tooltip></md-button>\
	<md-button class="social-button" aria-label="Twitter"><img src="im/social/twitter-white.png" /><md-tooltip md-direction="top">Twitter</md-tooltip></md-button>\
	<md-button class="social-button" aria-label="YouTube"><img src="im/social/youtube-white.png" /><md-tooltip md-direction="top">YouTube</md-tooltip></md-button>\
    </div>\
    <div layout="row" flex>\
	<div flex></div>\
	<md-button hide show-gt-xs style="color:white" class="md-icon-button"><i class="material-icons">code</i><md-tooltip md-direction="top">Source Code</md-tooltip></md-button>\
    </div>\
</div>\
</footer>\
'
}
});
