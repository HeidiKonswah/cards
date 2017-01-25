var app = angular.module('myApp',[]);
app.controller('myCtr',function($scope){
  $scope.cards= [
    {img:'http://vectorpatterns.co.uk/wp-content/uploads/2015/09/blue-abstract-cirlcle-pattern1-650x400.png',heading:'Pattern No.1',details:'Blue and white pattern.'},
    {img:'http://static1.squarespace.com/static/53def2e7e4b071b54b34502c/54657eb5e4b0fd29092294d1/546582e1e4b02ea346905c82/1415938786389/Pattern_Bananas.jpg',heading:'Pattern No.2',details:'Bananas!'},
 {img:'http://www.psdgraphics.com/file/2016/turquoise-circles-pattern.png',heading:'Pattern No.3', details:'And there goes a third one.'}
    
  ]
  
});