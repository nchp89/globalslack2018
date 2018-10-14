angular.module("angularfireSlackApp").factory("Auth", function($firebaseAuth) {
  var auth = $firebaseAuth();

  return auth;
})
;

// .factory("Languages", function($firebaseArray) {
//   var ref = firebase.database().ref("Languages");
//   var languages = $firebaseArray(ref);

//   return languages;
// })