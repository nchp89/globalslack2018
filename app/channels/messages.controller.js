angular
  .module("angularfireSlackApp")
  .controller("MessagesCtrl", function(profile, channelName, messages) {
    var messagesCtrl = this;

    messagesCtrl.messages = messages;
    messagesCtrl.channelName = channelName;
    messagesCtrl.message = "";

    var usersRef = firebase.database().ref("users");
    var lang = usersRef.child(profile.$id).child("lang");
    var chnMsg = firebase.database().ref("channelMessages");

    chnMsg.on("value", snapshot => {
      lang.on("value", snapshot => {
        for (var i = 0; i < messages.length; i++) {
          messages[i].translations["ar"] =
            messages[i].translations[snapshot.val()];
        }
      });
    });

    messagesCtrl.sendMessage = function() {
      if (messagesCtrl.message.length > 0) {
        messagesCtrl.messages
          .$add({
            uid: profile.$id,
            body: messagesCtrl.message,
            timestamp: firebase.database.ServerValue.TIMESTAMP
          })
          .then(function() {
            messagesCtrl.message = "";
          });
      }
    };
  });
