angular
  .module("angularfireSlackApp")
  .controller("AuthCtrl", function(Auth, $state) {
    var authCtrl = this;

    authCtrl.user = {
      email: "",
      password: "",
      region: "",
      lang: ""
    };




    authCtrl.login = function() {
      Auth.$signInWithEmailAndPassword(
        authCtrl.user.email,
        authCtrl.user.password
      ).then(
        function(auth) {
          $state.go("home");
        },
        function(error) {
          authCtrl.error = error;
        }
      );
    };

    authCtrl.register = function() {
      Auth.$createUserWithEmailAndPassword(
        authCtrl.user.email,
        authCtrl.user.password,
        authCtrl.user.region,
        authCtrl.user.lang
      ).then(
        function(user) {
           $state.go("home");
        },
        function(error) {
          authCtrl.error = error;
        }
      );
    };
  });
