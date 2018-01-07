Smog Detection App for disaster mitigation:

Android app
-Created using MIT app inventor
-The aia and the apk for the app have been included in the 'Android App' folder
-Takes values from Firebase realtime database and changes colors of geocoded markers(using Open Maps API) in the app

Node_MCU(Hardware Unit)
-Uses gas sensor and ESP8266 which is connected to Wifi
-Continuously sends smog data to a Firebase database
-Present in the Node_MCU folder. Can be run by uploading the codes to 3 ESP8266 module using the Arduino IDE. Connections to be made according to pin numbers in the code.

Web Page
-A NodeJS server that uses Google maps API and firebase API to show our current location and a heatmap of the sensors placed in various places based on the smog levels detected.
-Present in the Web Page folder
-Run server.js using Node/Nodemon for localhost or can be run on a cloud.

The user can directly install the app or visit the webpage to obtain smog level information collected by the sensors.
The smog level information displayed is real time and is synchronized with the firebase realtime Database.
