$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Register_Card.feature");
formatter.feature({
  "line": 1,
  "name": "Test Register Your Card",
  "description": "",
  "id": "test-register-your-card",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Register card test scenario",
  "description": "",
  "id": "test-register-your-card;register-card-test-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open evenity site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "click on patient",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click on register from dropdown menu",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on Register Your Card button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I complete Eligibility qn",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Enter Patient Information",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Register_CardTest.open_evenity_site()"
});
formatter.result({
  "duration": 12956920300,
  "status": "passed"
});
formatter.match({
  "location": "Register_CardTest.click_on_patient()"
});
formatter.result({
  "duration": 31574200,
  "error_message": "org.openqa.selenium.NoAlertPresentException: no such alert\n  (Session info: chrome\u003d83.0.4103.61)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-C3UG4MO\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565498 (ea082db3280dd6..., userDataDir: C:\\Users\\ubox0\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 83.0.4103.61, webStorageEnabled: true}\nSession ID: ab7ce6341122c75f78a550bfbc2d0fff\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.alert(RemoteWebDriver.java:931)\r\n\tat sTEPDEfinatioN.Register_CardTest.click_on_patient(Register_CardTest.java:44)\r\n\tat ✽.And click on patient(Register_Card.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Register_CardTest.click_on_register_from_dropdown_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register_CardTest.click_on_Register_Your_Card_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register_CardTest.i_complete_Eligibility_qn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register_CardTest.enter_Patient_Information()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register_CardTest.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});