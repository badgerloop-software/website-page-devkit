angular.module('badgerloop-site')

.directive('badgerloopHr', function() {
  return {
      restrict: 'E',
      template: '<hr md-colors="{borderColor: \'primary-900\', backgroundColor: \'primary-900\'}">'
  }
});
