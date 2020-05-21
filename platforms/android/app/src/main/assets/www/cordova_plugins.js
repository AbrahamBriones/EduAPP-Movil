cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "phonegap-plugin-push.PushNotification",
    "file": "plugins/phonegap-plugin-push/www/push.js",
    "pluginId": "phonegap-plugin-push",
    "clobbers": [
      "PushNotification"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-vibration": "3.1.1",
  "cordova-support-google-services": "1.3.2",
  "phonegap-plugin-multidex": "1.0.0",
  "phonegap-plugin-push": "2.3.0",
  "cordova-plugin-whitelist": "1.3.4"
};
// BOTTOM OF METADATA
});