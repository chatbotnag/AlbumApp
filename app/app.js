var app=angular.module("albumApp",[ "ngRoute" ]);

app.config(function($routeProvider){
	$routeProvider
	   .when("/albums",{ controller: "albumListController" ,templateUrl: "app/partials/album_list.html" })
	   .when("/albums/:album_name",{ controller: "albumViewController" ,templateUrl: "app/partials/album_view.html" })
	   .when("/albums/:album_name/photos/:photo_filename",{ controller: "photoViewController" ,templateUrl: "app/partials/photo_view.html" })
	   .otherwise( {redirectTo: "/404_page"});
});

app.value("usageStats",{
	page_views:0
});