(function(){

function albumViewController($scope,$routeParams,albumProvider){
$scope.album_name= $routeParams.album_name;
$scope.load_error="";
// try{
// 	var album= albumProvider.getAlbumByName($scope.album_name);
// 	$scope.photos=album.photos;
// }
// catch(e){
//     $scope.load_error="Couldn't find that album";
// }
    albumProvider.getAlbumByName($scope.album_name,function(err,album){
        
        var photos=[];

    if (err) 
    {
         $scope.load_error = "Unexpected error loading album: "+ err.message;
           
     } else {
                
                $.each(album,function(i, value){
    
                    photos=JSON.parse(value.photos);
                    $scope.photos=photos;
});
            }
});
}

app.controller("albumViewController",albumViewController);

}
)();