//the file for controller objects (Angular JS)

var app = angular.module('MyKitchen.controllers', ['ionic', 'ngCordova'])

.controller('ItemScannerCtrl', function($scope) {})

.controller('InventoryCtrl', function($scope) {})

.controller('PersonalCtrl', function($scope) {});

.controller("BCScannerCtrl", function($scope, $cordovaBarcodeScanner) {
	 
		$scope.scanBarcode = function() {
			$cordovaBarcodeScanner.scan().then(function(imageData) {
				alert(imageData.text);
				console.log("Barcode Format -> " + imageData.format);
				console.log("Cancelled -> " + imageData.cancelled);
			}, function(error) {
				console.log("An error happened -> " + error);
			});
		};
	 
});
