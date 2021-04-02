import { settingsStorage } from "settings";

// TODO: Needs testing on actual device, Fitbit Simulator does not implement permissions.

let date = new Date();
let todayDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`; 


for (let index = 0; index < settingsStorage.length; index++) {
    let key = settingsStorage.key(index);
    if (key && key === "oauth") {
        let data = JSON.parse(settingsStorage.getItem(key))
        fetch(`https://api.fitbit.com/1/user/-/foods/log/date/${todayDate}.json`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${data.access_token}`,
            }
        })
        .then(function(response) {
            console.log("Getting food log...")
            console.log(todayDate)
            console.log(response.json());
        })    
    }
}
  