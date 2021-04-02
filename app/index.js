import document from "document";
import clock from "clock";
import { me as appbit } from "appbit";
import { today } from "user-activity";

const zeroPad = (n => (n < 10) ? "0" + n : n);

let myClock = document.getElementById("myClock");
let myCalories = document.getElementById("myCalories");
let date = new Date();
let todayDate = `${date.getFullYear()}-${zeroPad(date.getMonth() + 1)}-${zeroPad(date.getDate())}`; 

clock.granularity = 'seconds';


clock.ontick = function(evt) {
  myClock.text = ("0" + evt.date.getHours()).slice(-2) + ":" +
                      ("0" + evt.date.getMinutes()).slice(-2) + ":" +
                      ("0" + evt.date.getSeconds()).slice(-2);
};

if (appbit.permissions.granted("access_activity")) {
  // TODO: Needs fix: This value is unexpected - it does not match the value on the device and it keeps increasing.
  // Perhaps use: ActivityHistoryRecord
  // https://dev.fitbit.com/build/reference/device-api/user-activity/
  console.log("Getting calories from device...")
  console.log(todayDate)
  console.log(`${today.adjusted.calories} Cal`);
  myCalories.text = `${today.adjusted.calories} Cal`;
}

