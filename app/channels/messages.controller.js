angular
  .module("angularfireSlackApp")
  .controller("MessagesCtrl", function(
    $stateParams,
    profile,
    channelName,
    messages
  ) {
    var messagesCtrl = this;

    var langRef = firebase.database().ref("users");
    var lang = langRef.child(profile.$id).child("lang");

    lang.on("value", snapshot => {});

    var qRef = firebase.database().ref("Questions");

    var usersRef = firebase.database().ref("users");
    var lang = usersRef.child(profile.$id).child("lang");
    var chnMsg = firebase.database().ref("channelMessages");
    var lan = usersRef.child(profile.$id).child("lang");

    lan.on("value", snapshot => {
      here = snapshot.val();
    });

    messagesCtrl.messages = messages;
    messagesCtrl.channelName = channelName;
    messagesCtrl.message = "";

    chnMsg.on("value", snapshot => {
      lang.on("value", snapshot => {
        for (var i = 0; i < messages.length; i++) {
          messages[i].translations["ar"] =
            messages[i].translations[snapshot.val()];
        }
      });
    });

    messagesCtrl.sendMessage = function() {
      var rando = (messagesCtrl.messages.length / 2) % 15;

      if (messagesCtrl.message.length > 0) {
        if ($stateParams.uid == "VofbMGFPlaPDMU2LJ3pGmEUXG1j1") {
          qRef
            .orderByChild("Language")
            .equalTo("en")
            .on("value", snapshot => {
              //alert(JSON.stringify(snapshot.val()));
              prompter = snapshot.val()[rando].Prompt;
              choices = snapshot.val()[rando].Choices;
              answer = snapshot.val()[rando].Answer;

              review = "";

              if (answer == messagesCtrl.message) {
                review =
                  "You are Correct!!!" + " " + answer + " is the right answer";
              } else if (
                answer != messagesCtrl.message &&
                messagesCtrl.messages.length != 0
              ) {
                review =
                  "You are Incorrect." + " " + answer + " is the right answer";
              }

              messagesCtrl.messages
                .$add({
                  uid: profile.$id,
                  body: messagesCtrl.message,
                  timestamp: firebase.database.ServerValue.TIMESTAMP
                })
                .then(function() {
                  messagesCtrl.message = "";
                });
              messagesCtrl.messages.$add({
                uid: "VofbMGFPlaPDMU2LJ3pGmEUXG1j1",
                body:
                  review +
                  " " +
                  prompter +
                  " " +
                  choices[1] +
                  " " +
                  choices[2] +
                  " " +
                  choices[3] +
                  " " +
                  choices[4], //messagesCtrl.message,
                timestamp: firebase.database.ServerValue.TIMESTAMP
              });
            });
        }
      }
    };
  });
