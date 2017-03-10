angular.module('badgerloop-site')

.directive('badgerloopNavbar', function() {
return {
    restrict: 'E',
    controller: 'navbarController',
    template: 

'\
<md-toolbar md-whiteframe="6" style="padding: 0.25em">\
    <div class="md-toolbar-tools" layout-align="space-between center">\
        <md-button class="md-raised" ng-click="changeView(homeButton)" ng-disabled="true" aria-label="home">\
          <img class="headerImg" src="im/background/BadgerLoopLogoV5.png">\
          <md-tooltip md-direction="bottom">HOME</md-tooltip>\
        </md-button>\
        <span flex></span>\
        <md-button hide show-gt-sm ng-repeat="button in buttons" ng-click="changeView(button)" ng-disabled="button.enabled">\
            {{button.text}}\
        </md-button>\
        <span hide-gt-sm>Welcome<span hide show-sm> to Badgerloop</span></span>\
        <span flex></span>\
        <md-menu hide-gt-sm>\
          <md-button ng-click="$mdOpenMenu()" aria-label="menu" class="md-icon-button"><i class="material-icons">menu</i></md-button>\
          <md-menu-content width="4">\
            <md-menu-item ng-repeat="button in buttons">\
              <md-button ng-click="changeView(button)" ng-disabled="button.enabled">\
                <span style="text-transform: uppercase">{{button.text}}</span>\
              </md-button>\
            </md-menu-item>\
          </md-menu-content>\
        </md-menu>\
        <md-button class="md-raised"><b>Login</b></md-button>\
    </div>\
</md-toolbar>\
'

}
});
