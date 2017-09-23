(function(){
function albumListController($scope, albumProvider, $location){
        $scope.add_album_error="";
        $scope.page_load_error="";
        $scope.new_album= {};

        albumProvider.getAlbums(function (err, albums) {
            if (err) {
                $scope.page_load_error = "Unexpected error loading albums: " + err.message;
            } else {
                $scope.albums = albums;
            }
        });
		$scope.addAlbum=function(new_album){
		  albumProvider.addAlbum(new_album, function (err, results) {
                if (err) {
                    if (err.code == "missing_title")
                        $scope.add_album_error = "Missing title";
                    else if (err.code == "bad_date")
                        $scope.add_album_error = "You must specify a date (yyyy/mm/dd)";
                    else if (err.code == "missing_description")
                        $scope.add_album_error = "Missing description";
                    else if (err.code == "bad_name")
                        $scope.add_album_error = "Short album name must be at least 6 chars (ironic, yes)";
                } else {
                    // looks good!
                    $scope.new_album = {};
                    $scope.add_error_text = '';
                    $location.path("/albums/"+new_album.name);
                }

            });
		
		}
        $scope.removeAlbum=function(album){
          albumProvider.removeAlbum(album.name, function (err, results) {
                if (err) {
                    
                        $scope.add_album_error = "Something went wrong";

                } else {
                       
                        $location.path("/albums/");
                }

            });
        
        }
	};
	 //    $scope.removeAlbum=function(album){
          
  //         alert(album.$index);
		// $scope.albums.splice(album.$index,1);
		
//	};
	
	app.controller("albumListController",albumListController);
})();