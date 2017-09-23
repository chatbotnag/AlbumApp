(function(){

function photoViewController($scope,$routeParams){
$scope.album_name=$routeParams.album_name;
$scope.photo_filename=$routeParams.photo_filename;
}




app.controller("photoViewController",photoViewController);

})();