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

    authCtrl.languages = [{"code": "af", "displayName": "Afrikaans"},
    {"code": "sq", "displayName": "Albanian"},
    {"code": "am", "displayName": "Amharic"},
    {"code": "ar", "displayName": "Arabic"},
    {"code": "hy", "displayName": "Armenian"},
    {"code": "az", "displayName": "Azeerbaijani"},
    {"code": "eu", "displayName": "Basque"},
    {"code": "be", "displayName": "Belarusian"},
    {"code": "bn", "displayName": "Bengali"},
    {"code": "bs", "displayName": "Bosnian"},
    {"code": "bg", "displayName": "Bulgarian"},
    {"code": "ca", "displayName": "Catalan"},
    {"code": "ceb (ISO-639-2)", "displayName": "Cebuano"},
    {"code": "zh-CN (BCP-47)", "displayName": "Chinese (Simplified)"},
    {"code": "zh-TW (BCP-47)", "displayName": "Chinese (Traditional)"},
    {"code": "co", "displayName": "Corsican"},
    {"code": "hr", "displayName": "Croatian"},
    {"code": "cs", "displayName": "Czech"},
    {"code": "da", "displayName": "Danish"},
    {"code": "nl", "displayName": "Dutch"},
    {"code": "en", "displayName": "English"},
    {"code": "eo", "displayName": "Esperanto"},
    {"code": "et", "displayName": "Estonian"},
    {"code": "fi", "displayName": "Finnish"},
    {"code": "fr", "displayName": "French"},
    {"code": "fy", "displayName": "Frisian"},
    {"code": "gl", "displayName": "Galician"},
    {"code": "ka", "displayName": "Georgian"},
    {"code": "de", "displayName": "German"},
    {"code": "el", "displayName": "Greek"},
    {"code": "gu", "displayName": "Gujarati"},
    {"code": "ht", "displayName": "Haitian Creole"},
    {"code": "ha", "displayName": "Hausa"},
    {"code": "haw (ISO-639-2)", "displayName": "Hawaiian"},
    {"code": "he**", "displayName": "Hebrew"},
    {"code": "hi", "displayName": "Hindi"},
    {"code": "hmn (ISO-639-2)", "displayName": "Hmong"},
    {"code": "hu", "displayName": "Hungarian"},
    {"code": "is", "displayName": "Icelandic"},
    {"code": "ig", "displayName": "Igbo"},
    {"code": "id", "displayName": "Indonesian"},
    {"code": "ga", "displayName": "Irish"},
    {"code": "it", "displayName": "Italian"},
    {"code": "ja", "displayName": "Japanese"},
    {"code": "jw", "displayName": "Javanese"},
    {"code": "kn", "displayName": "Kannada"},
    {"code": "kk", "displayName": "Kazakh"},
    {"code": "km", "displayName": "Khmer"},
    {"code": "ko", "displayName": "Korean"},
    {"code": "ku", "displayName": "Kurdish"},
    {"code": "ky", "displayName": "Kyrgyz"},
    {"code": "lo", "displayName": "Lao"},
    {"code": "la", "displayName": "Latin"},
    {"code": "lv", "displayName": "Latvian"},
    {"code": "lt", "displayName": "Lithuanian"},
    {"code": "lb", "displayName": "Luxembourgish"},
    {"code": "mk", "displayName": "Macedonian"},
    {"code": "mg", "displayName": "Malagasy"},
    {"code": "ms", "displayName": "Malay"},
    {"code": "ml", "displayName": "Malayalam"},
    {"code": "mt", "displayName": "Maltese"},
    {"code": "mi", "displayName": "Maori"},
    {"code": "mr", "displayName": "Marathi"},
    {"code": "mn", "displayName": "Mongolian"},
    {"code": "my", "displayName": "Myanmar (Burmese)"},
    {"code": "ne", "displayName": "Nepali"},
    {"code": "no", "displayName": "Norwegian"},
    {"code": "ny", "displayName": "Nyanja (Chichewa)"},
    {"code": "ps", "displayName": "Pashto"},
    {"code": "fa", "displayName": "Persian"},
    {"code": "pl", "displayName": "Polish"},
    {"code": "pt", "displayName": "Portuguese (Portugal, Brazil)"},
    {"code": "pa", "displayName": "Punjabi"},
    {"code": "ro", "displayName": "Romanian"},
    {"code": "ru", "displayName": "Russian"},
    {"code": "sm", "displayName": "Samoan"},
    {"code": "gd", "displayName": "Scots Gaelic"},
    {"code": "sr", "displayName": "Serbian"},
    {"code": "st", "displayName": "Sesotho"},
    {"code": "sn", "displayName": "Shona"},
    {"code": "sd", "displayName": "Sindhi"},
    {"code": "si", "displayName": "Sinhala (Sinhalese)"},
    {"code": "sk", "displayName": "Slovak"},
    {"code": "sl", "displayName": "Slovenian"},
    {"code": "so", "displayName": "Somali"},
    {"code": "es", "displayName": "Spanish"},
    {"code": "su", "displayName": "Sundanese"},
    {"code": "sw", "displayName": "Swahili"},
    {"code": "sv", "displayName": "Swedish"},
    {"code": "tl", "displayName": "Tagalog (Filipino)"},
    {"code": "tg", "displayName": "Tajik"},
    {"code": "ta", "displayName": "Tamil"},
    {"code": "te", "displayName": "Telugu"},
    {"code": "th", "displayName": "Thai"},
    {"code": "tr", "displayName": "Turkish"},
    {"code": "uk", "displayName": "Ukrainian"},
    {"code": "ur", "displayName": "Urdu"},
    {"code": "uz", "displayName": "Uzbek"},
    {"code": "vi", "displayName": "Vietnamese"},
    {"code": "cy", "displayName": "Welsh"},
    {"code": "xh", "displayName": "Xhosa"},
    {"code": "yi", "displayName": "Yiddish"},
    {"code": "yo", "displayName": "Yoruba"},
    {"code": "zu", "displayName": "Zulu"}];


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
