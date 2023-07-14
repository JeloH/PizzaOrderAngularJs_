var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.opts = {
    val1: false,
    val2: false,
    val3: false
  };
  
  $scope.computedTotal_Small = function () {
    var opts = $scope.opts;
    var total = (opts.val1_small_tomato ? 1 : 0) +
    (opts.val1_small_onions ? 0.50 : 0)+
    (opts.val1_small_BellPepper ? 1 : 0)+
    (opts.val1_small_Mushrooms ? 1 : 0)+
    (opts.val1_small_Pineapple? 0.75 : 0)+
    (opts.val1_small_sausage? 1 : 0)+
    (opts.val1_small_Pepperonei? 2 : 0)+
    (opts.val1_small_Barbecue? 3 : 0)  
    ;


     if (total==0) {
       small_price=0
     } else {
      small_price=5
     }

 
     return small_price + total ;
  }


 $scope.computedTotal_medium = function () {
    var opts = $scope.opts;
    var total = (opts.val1_medium_tomato ? 1 : 0) +
    (opts.val1_medium_onions ? 0.50 : 0)+
    (opts.val1_medium_BellPepper ? 1 : 0)+
    (opts.val1_Medium_Mushrooms ? 1 : 0)+
    (opts.val1_medium_Pineapple? 0.75 : 0)+
    (opts.val1_medium_sausage? 1 : 0)+
    (opts.val1_medium_Pepperonei? 2 : 0)+
    (opts.val1_Medium_Barbecue? 3 : 0)             
    ;

    var val1_offer1 =(opts.val1_offer1? 5 : 0)   ;
    var val1_offer2 =(opts.val1_offer2? 9 : 0)   ;
    
    if (val1_offer1==5) {
       total=0
       medium_price=0   

     }


  if (val1_offer2==9) {
       total=0
       medium_price=0   
       val1_offer1=0
     }

       
     if (total==0) {
       medium_price=0
     } else {
      medium_price=7
     }




     return medium_price + total + val1_offer1 + val1_offer2; 
  }





$scope.computedTotal_large_Discount = function () {
    var opts = $scope.opts;
    var total = (opts.val1_large_tomato ? 1 : 0) +
    (opts.val1_large_onions ? 0.50 : 0)+
    (opts.val1_large_BellPepper ? 1 : 0)+
    (opts.val1_Large_Mushrooms? 1 : 0)+
    (opts.val1_large_Pineapple? 0.75 : 0)+
    (opts.val1_large_sausage? 1 : 0)+
    (opts.val1_large_Pepperonei? 2 : 0)+
    (opts.val1_large_Barbecue? 3 : 0)
  
    ;
    
    
    
     if (opts.val1_offer3) {
       total=total/2
       
     } else {
      total=0
     }



     return total;
  }





 $scope.computedTotal_large = function () {
    var opts = $scope.opts;
    var total = (opts.val1_large_tomato ? 1 : 0) +
    (opts.val1_large_onions ? 0.50 : 0)+
    (opts.val1_large_BellPepper ? 1 : 0)+
    (opts.val1_Large_Mushrooms? 1 : 0)+
    (opts.val1_large_Pineapple? 0.75 : 0)+
    (opts.val1_large_sausage? 1 : 0)+
    (opts.val1_large_Pepperonei? 2 : 0)+
    (opts.val1_large_Barbecue? 3 : 0)
  
    ;
    
    
    
     if (total==0) {
       large_price=0
     } else {
      large_price=8
     }



     return large_price + total;
  }




 $scope.computedTotal_Extralarge = function () {
    var opts = $scope.opts;
    var total = (opts.val1_Extralarge_tomato ? 1 : 0) +
    (opts.val1_Extralarge_onions ? 0.50 : 0)+
    (opts.val1_Extralarge_BellPepper ? 1 : 0)+
    (opts.val1_Extralarge_Mushrooms ? 1 : 0)+
    (opts.val1_Extralarge_Pineapple? 0.75 : 0)+
    (opts.val1_Extralarge_sausage? 1 : 0)+
    (opts.val1_Extralarge_Pepperonei? 2 : 0)+
    (opts.val1_Extralarge_Barbecue? 3 : 0)
  
    ;
    
    
    
     if (total==0) {
       LargeExtra_price=0
     } else {
      LargeExtra_price=9
     }



     return LargeExtra_price + total;
  }

    




});
