/*global describe, angular, $, alert, socket */
//above is for jslint to ignore thes


var Game = angular.module('Game', []);
// Game.directive('draggable', function() {
//     return {
//         // A = attribute, E = Element, C = Class and M = HTML Comment
//         restrict:'A',
//         link: function(scope, element, attrs) {
//         	$(element).draggable({
//         		revert:"invalid",
//         		start : function(event, ui) {
//         			socket.emit("grabPiece", {pieceId: this.id}, function(success){

//         			});
//         		}
//         	});
//         }
//     };
// });
// Game.directive('droppable', function(){
// 	return {
// 		restrict: 'A',
// 		link: function(scope, element, attrs) {
// 			$(element).droppable({
// 				drop: function(event, ui) {
				
// 					console.log($(ui.draggable));
// 				}
// 			});
// 		}
// 	};
// });
