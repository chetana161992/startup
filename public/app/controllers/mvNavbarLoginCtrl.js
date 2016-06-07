angular.module('app').controller('mvNavbarLoginCtrl',function($scope,$http,mvNotifier,mvIdentity,mvAuth,$location){
    
    $scope.identity=mvIdentity;
    $scope.signin=function (username,password) {
        mvAuth.authenticateUser(username,password).then(function(success){
            if(success)
            {
                 mvNotifier.notify('You have successfully logged in');
                
            }else
            {
                 mvNotifier.notify('Username /password combination is incorrect');
            }
           
        });
        // body...
        
    },
    $scope.signout=function(){
        mvAuth.logoutuser().then(function(){
            $scope.username="";
            $scope.password="";
            mvNotifier.notify("You have successfully logged out");
            $location.path('/');
        });
    };
});