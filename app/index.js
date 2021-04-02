import document from "document";
import clock from "clock";
import { me as appbit } from "appbit";
import { today } from "user-activity";

let myClock = document.getElementById("myClock");
let myCalories = document.getElementById("myCalories");
let date = new Date();
let todayDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`; //YYYY-MM-DD

clock.granularity = 'seconds'; // seconds, minutes, hours


clock.ontick = function(evt) {
  myClock.text = ("0" + evt.date.getHours()).slice(-2) + ":" +
                      ("0" + evt.date.getMinutes()).slice(-2) + ":" +
                      ("0" + evt.date.getSeconds()).slice(-2);
};

if (appbit.permissions.granted("access_activity")) {
  // TODO: Needs fix: This value is unexpected - it does not match the value on the device and it keeps increasing.
  // Perhaps use: ActivityHistoryRecord
  // https://dev.fitbit.com/build/reference/device-api/user-activity/
  // Or maybe it's zero-padding on the dates - example below
  // https://blogs.msmvps.com/bsonnino/2021/01/24/creating-a-fitbit-clock-face-with-vscode-and-typescript/
  console.log("Getting calories from device...")
  console.log(todayDate)
  console.log(`${today.adjusted.calories} Cal`);
  myCalories.text = `${today.adjusted.calories} Cal`;
}

