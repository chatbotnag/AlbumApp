(function (){
 function albumProvider($http){

    this.getAlbums=function(callback){
 		$http.get("http://localhost:8080/api/albums")
        .success(function(data, status, headers, conf){
            callback(null,data);
        })
        .error(function(data, status, headers, conf){
            callback(data);
        });
 	};

  this.addAlbum = function (album_data, callback) {

            if (!album_data.title) throw new Error("missing_title");
            if (!album_data.desc) throw new Error("missing_description");
            if (!album_data.date) throw new Error("bad_date");

            var d = new Date(album_data.date.trim());
            if (isNaN(d.getTime())) throw new Error("bad_date");

            $http.post("http://localhost:8080/api/albums", album_data)
                .success(function (data, status, headers, conf) {
                    callback(null, data);
                })
                .error(function (data, status, headers, conf) {
                    callback(data);
                });
        };


        this.getAlbumByName = function (name, callback) {
                
            $http.get("http://localhost:8080/api/albums/"+name)
                .success(function (data, status, headers, conf) {
                    //data=data[0].photos[0];
                    console.log("photo 1  "+":"+data[0].name);
                    callback(null, data);
                })
                .error(function (data, status, headers, conf) {
                    // just send back the error
                    callback(data);
                });
        };

        this.removeAlbum = function (album_name, callback) {

            $http.delete("http://localhost:8080/api/albums/"+album_name)
                .success(function (data, status, headers, conf) {
                    callback(null, data);
                })
                .error(function (data, status, headers, conf) {
                    callback(data);
                });
        };
    }
 	
 
 app.service("albumProvider",albumProvider);
})();