
myApp.directive('avatar', function(){
    return{
        restrict: 'E', //Element (Tag)
        template:
        '<div class="avatar">'+
            '<img ng-src="{{user.picture}}">'+
            '<div class="name">{{user.name}}</div>'+
        '</div>'
    };
});