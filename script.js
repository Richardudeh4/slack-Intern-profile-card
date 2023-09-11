// contants
const slackName = document.getElementById("slackUserName");
const slackProfileImage = document.getElementById("slackDisplayImage");
const CurrentDayOfTheWeek = document.getElementById("currentDayOfTheWeek");
const CurrentUTCTime = document.getElementById("currentUTCTime");
const track = document.getElementById("myTrack");
const GithubURL = document.getElementById("githubURL");

// to isplay the profile image
const imgElement = document.createElement("img");

imgElement.src =`./images/slackProfilePicture.jpg`;
imgElement.alt =" Richard Udeh";


// to find the day of the week
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const dayWeek = new Date();
const DayOfTheWeek = weekday[dayWeek.getDay()];
// to get the current UTC

const showTime =()=> {
const now = new Date();

let utcHours = now.getUTCHours() + 1;
let utcMinutes = now.getUTCMinutes();
let utcSeconds = now.getUTCSeconds();
let utcTime;

utcHours = utcHours < 10 ? `0${utcHours} ` : utcHours;
utcMinutes = utcMinutes < 10 ? `0${utcMinutes}` : utcMinutes;
utcSeconds = utcSeconds < 10 ? `0${utcSeconds}` : utcSeconds;

utcTime = ` Utc Time : ${utcHours}:${utcMinutes}:${utcSeconds}`;
CurrentUTCTime.textContent= utcTime;

// function for UTC time update
setTimeout(showTime,1000);
};
showTime();

// DOM manipulation
slackName.innerText=`Name: Richard Udeh`
slackProfileImage.innerHTML = imgElement.outerHTML;
CurrentDayOfTheWeek .innerText = `Day of the week : ${DayOfTheWeek} `;

track.innerText = `Track:Frontend`;
GithubURL.innerHTML = `<a href="https://github.com/Richardudeh4/slack-Intern-profile-card"> GitHub Url</a>`
