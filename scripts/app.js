const titleText = document.getElementById("titleText");
const greetingDiv = document.getElementById("greetingDiv");
const imageDiv = document.getElementById("imageDiv");

//========================= Buttons =============================\\
const changeTitleTextButton = document.getElementById("changeTitleTextButton");
const changeBackgroundColorButton = document.getElementById("changeBackgroundColorButton");
const changeTitleFontButton = document.getElementById("changeTitleFontButton");
const loadAGreetingButton = document.getElementById("loadAGreetingButton");
const addAnImageButton = document.getElementById("addAnImageButton");
const dailyStatsButton = document.getElementById("dailyStatsButton");
const weeklyStatsButton = document.getElementById("weeklyStatsButton");
const monthlyStatsButton = document.getElementById("monthlyStatsButton");
const displayRandomStarWarsCharacterButton = document.getElementById("displayRandomStarWarsCharacterButton");
const displayRandomStarWarsPlanetButton = document.getElementById("displayRandomStarWarsPlanetButton");
const displayRandomStarWarsStarshipButton = document.getElementById("displayRandomStarWarsStarshipButton");
const submitButton = document.getElementById("submitButton");
const randomStudentButton = document.getElementById("randomStudentButton");
//========================= End of Buttons =============================\\

//=======================HTML Elements==========================\\
const workCurrentTime = document.getElementById("workCurrentTime");
const workPreviousTime = document.getElementById("workPreviousTime");
const playCurrentTime = document.getElementById("playCurrentTime");
const playPreviousTime = document.getElementById("playPreviousTime");
const studyCurrentTime = document.getElementById("studyCurrentTime");
const studyPreviousTime = document.getElementById("studyPreviousTime");
const exerciseCurrentTime = document.getElementById("exerciseCurrentTime");
const exercisePreviousTime = document.getElementById("exercisePreviousTime");
const socialCurrentTime = document.getElementById("socialCurrentTime");
const socialPreviousTime = document.getElementById("socialPreviousTime");
const selfcareCurrentTime = document.getElementById("selfcareCurrentTime");
const selfcarePreviousTime = document.getElementById("selfcarePreviousTime");
const starWarsCharacterName = document.getElementById("starWarsCharacterName");
const starWarsCharacterRole = document.getElementById("starWarsCharacterRole");
const starWarsCharacterHomeWorld = document.getElementById("starWarsCharacterHomeWorld");
const starWarsCharacterLightSaber = document.getElementById("starWarsCharacterLightSaber");
const starWarsPlanetName = document.getElementById("starWarsPlanetName");
const starWarsPlanetClimate = document.getElementById("starWarsPlanetClimate");
const starWarsPlanetPopulation = document.getElementById("starWarsPlanetPopulation");
const starWarsStarshipName = document.getElementById("starWarsStarshipName");
const starWarsStarshipModel = document.getElementById("starWarsStarshipModel");
const starWarsStarshipCrew = document.getElementById("starWarsStarshipCrew");
const userInput = document.getElementById("userInput");
const studentFirstName = document.getElementById("studentFirstName");
const studentLastName = document.getElementById("studentLastName");
const studentEmail = document.getElementById("studentEmail");
const studentFavoriteFood = document.getElementById("studentFavoriteFood");
//=======================End of HTML Elements==========================\\

//=====================Event Listeners====================\\
changeTitleTextButton.addEventListener("click", () => {
    titleText.innerText = "Success!!! You've Changed the Title";
});

changeBackgroundColorButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "#dd7c05";
});

changeTitleFontButton.addEventListener("click", () => {
    titleText.style.fontFamily = "fantasy";
});

loadAGreetingButton.addEventListener("click", () => {
    const greeting = document.createElement("p");
    greeting.innerText = "Hello World!";
    greetingDiv.appendChild(greeting);
});
addAnImageButton.addEventListener("click", () => {
    const image = document.createElement("img");
    image.src = "../assets/doxie1.jpg"
    image.style.borderRadius = "1000px"
    imageDiv.appendChild(image);
});
dailyStatsButton.addEventListener("click", () => {
    showDailyCurrentStats();
    showDailyPreviousStats();
});
weeklyStatsButton.addEventListener("click", () => {
    showWeeklyCurrentStats();
    showWeeklyPreviousStats();
});
monthlyStatsButton.addEventListener("click", () => {
    showMonthlyCurrentStats();
    showMonthlyPreviousStats();
});
displayRandomStarWarsCharacterButton.addEventListener("click", () => {
    displayRandomStarWarsCharacterName();
});
displayRandomStarWarsPlanetButton.addEventListener("click", () => {
    displayRandomStarWarsPlanet();
});
displayRandomStarWarsStarshipButton.addEventListener("click", () => {
    displayRandomStarship();
});
userInput.addEventListener("keydown", (event) => {
    
});
submitButton.addEventListener("click", () => {

});
randomStudentButton.addEventListener("click", () => {
    displyRandomStudent();
});
//=====================End of Event Listeners====================\\

//=========================== Fetch ==========================\\
//Fetch for Time Tracker JSON Data
const fetchJSONData = async () => {
    const response = await fetch("../data/data.json");
    const data = await response.json();
    console.log(data);
    return data;
};

const fetchStarWarsJSONData = async () => {
    const response = await fetch("../data/starWars.json")
    const data = await response.json();
    console.log(data);
    return data;
};

const fetchStudentData = async () => {
    const response = await fetch("../data/studentList.json")
    const data = await response.json();
    console.log(data)
    return data;
};
//======================= End of Fetch ==========================\\
fetchStarWarsJSONData();
fetchJSONData(); //This does not need the await keyword since we are calling it within the scope of the script


//=================Time Tracker Functions====================\\
const showDailyCurrentStats = async () => {
    let JSONCurrentTimesData = await fetchJSONData(); //Here we need to use the await keyword since we are storing the async fetch function to a variable
    workCurrentTime.innerText = `${JSONCurrentTimesData[0].timeframes.daily.current}hrs`
    playCurrentTime.innerText = `${JSONCurrentTimesData[1].timeframes.daily.current}hrs`
    studyCurrentTime.innerText = `${JSONCurrentTimesData[2].timeframes.daily.current}hrs`
    exerciseCurrentTime.innerText = `${JSONCurrentTimesData[3].timeframes.daily.current}hrs`
    socialCurrentTime.innerText = `${JSONCurrentTimesData[4].timeframes.daily.current}hrs`
    selfcareCurrentTime.innerText = `${JSONCurrentTimesData[5].timeframes.daily.current}hrs`
};

const showDailyPreviousStats = async () => {
    let JSONPreviousTimesData = await fetchJSONData();
    workPreviousTime.innerText = `Yesterday - ${JSONPreviousTimesData[0].timeframes.daily.previous}hrs`
    playPreviousTime.innerText = `Yesterday - ${JSONPreviousTimesData[1].timeframes.daily.previous}hrs`
    studyPreviousTime.innerText = `Yesterday - ${JSONPreviousTimesData[2].timeframes.daily.previous}hrs`
    exercisePreviousTime.innerText = `Yesterday - ${JSONPreviousTimesData[3].timeframes.daily.previous}hrs`
    socialPreviousTime.innerText = `Yesterday - ${JSONPreviousTimesData[4].timeframes.daily.previous}hrs`
    selfcarePreviousTime.innerText = `Yesterday - ${JSONPreviousTimesData[5].timeframes.daily.previous}hrs`
};

const showWeeklyCurrentStats = async () => {
    let JSONWeeklyCurrentData = await fetchJSONData();
    workCurrentTime.innerText = `${JSONWeeklyCurrentData[0].timeframes.weekly.current}hrs`
    playCurrentTime.innerText = `${JSONWeeklyCurrentData[1].timeframes.weekly.current}hrs`
    studyCurrentTime.innerText = `${JSONWeeklyCurrentData[2].timeframes.weekly.current}hrs`
    exerciseCurrentTime.innerText = `${JSONWeeklyCurrentData[3].timeframes.weekly.current}hrs`
    socialCurrentTime.innerText = `${JSONWeeklyCurrentData[4].timeframes.weekly.current}hrs`
    selfcareCurrentTime.innerText = `${JSONWeeklyCurrentData[5].timeframes.weekly.current}hrs`
};

const showWeeklyPreviousStats = async () => {
    let JSONWeeklyPreviousData = await fetchJSONData();
    workPreviousTime.innerText = `Last Week - ${JSONWeeklyPreviousData[0].timeframes.weekly.previous}hrs`
    playPreviousTime.innerText = `Last Week - ${JSONWeeklyPreviousData[1].timeframes.weekly.previous}hrs`
    studyPreviousTime.innerText = `Last Week - ${JSONWeeklyPreviousData[2].timeframes.weekly.previous}hrs`
    exercisePreviousTime.innerText = `Last Week - ${JSONWeeklyPreviousData[3].timeframes.weekly.previous}hrs`
    socialPreviousTime.innerText = `Last Week - ${JSONWeeklyPreviousData[4].timeframes.weekly.previous}hrs`
    selfcarePreviousTime.innerText = `Last Week - ${JSONWeeklyPreviousData[5].timeframes.weekly.previous}hrs`
};

const showMonthlyCurrentStats = async () => {
    let JSONMonthlyCurrentData = await fetchJSONData();
    workCurrentTime.innerText = `${JSONMonthlyCurrentData[0].timeframes.monthly.current}hrs`
    playCurrentTime.innerText = `${JSONMonthlyCurrentData[1].timeframes.monthly.current}hrs`
    studyCurrentTime.innerText = `${JSONMonthlyCurrentData[2].timeframes.monthly.current}hrs`
    exerciseCurrentTime.innerText = `${JSONMonthlyCurrentData[3].timeframes.monthly.current}hrs`
    socialCurrentTime.innerText = `${JSONMonthlyCurrentData[4].timeframes.monthly.current}hrs`
    selfcareCurrentTime.innerText = `${JSONMonthlyCurrentData[5].timeframes.monthly.current}hrs`
};

const showMonthlyPreviousStats = async () => {
    let JSONMonthlyPreviousData = await fetchJSONData();
    workPreviousTime.innerText = `Last Week - ${JSONMonthlyPreviousData[0].timeframes.monthly.previous}hrs`
    playPreviousTime.innerText = `Last Week - ${JSONMonthlyPreviousData[1].timeframes.monthly.previous}hrs`
    studyPreviousTime.innerText = `Last Week - ${JSONMonthlyPreviousData[2].timeframes.monthly.previous}hrs`
    exercisePreviousTime.innerText = `Last Week - ${JSONMonthlyPreviousData[3].timeframes.monthly.previous}hrs`
    socialPreviousTime.innerText = `Last Week - ${JSONMonthlyPreviousData[4].timeframes.monthly.previous}hrs`
    selfcarePreviousTime.innerText = `Last Week - ${JSONMonthlyPreviousData[5].timeframes.monthly.previous}hrs`
};
//=================End of Time Tracker Functions====================\\

//=========================Star Wars Functions========================\\
const randomizedStarWarsCharacterIndex = async () => {
    let charactersListLength = await fetchStarWarsJSONData();
    const randomizedIndex = Math.floor(Math.random() * charactersListLength.characters.length)
    console.log(randomizedIndex);
    return randomizedIndex;
};
randomizedStarWarsCharacterIndex();

const randomizedStarWarsPlanetIndex = async () => {
    let planetListLength = await fetchStarWarsJSONData();
    const randomizedPlanetIndex = Math.floor(Math.random() * planetListLength.planets.length)
    console.log(randomizedPlanetIndex);
    return randomizedPlanetIndex;
};
randomizedStarWarsPlanetIndex();

const randomizedStarWarsStarshipIndex = async () => {
    let starshipListLength = await fetchStarWarsJSONData();
    const randomizedStarshipIndex = Math.floor(Math.random() * starshipListLength.starships.length)
    console.log(randomizedStarshipIndex);
    return randomizedStarshipIndex;
};
randomizedStarWarsStarshipIndex();

const displayRandomStarWarsCharacterName = async () => {
    let starWarsJSONData = await fetchStarWarsJSONData();
    let randomizedCharacterIndex = await randomizedStarWarsCharacterIndex();
    starWarsCharacterName.textContent = starWarsJSONData.characters[randomizedCharacterIndex].name;
    starWarsCharacterRole.textContent = `Role: ${starWarsJSONData.characters[randomizedCharacterIndex].role}`;
    starWarsCharacterHomeWorld.textContent = `HomeWorld: ${starWarsJSONData.characters[randomizedCharacterIndex].homeworld}`;
    starWarsCharacterLightSaber.textContent = `LightSaber: ${starWarsJSONData.characters[randomizedCharacterIndex].lightsaber}`;
};

const displayRandomStarWarsPlanet = async () => {
    let starWarsJSONData = await fetchStarWarsJSONData();
    let randomizedPlanetIndex = await randomizedStarWarsPlanetIndex();
    starWarsPlanetName.textContent = starWarsJSONData.planets[randomizedPlanetIndex].name;
    starWarsPlanetClimate.textContent = `Planet Climate: ${starWarsJSONData.planets[randomizedPlanetIndex].climate}`;
    starWarsPlanetPopulation.textContent = `Planet Population: ${starWarsJSONData.planets[randomizedPlanetIndex].population}`;
};

const displayRandomStarship = async () => {
    let starWarsJSONData = await fetchStarWarsJSONData();
    let randomizedStarshipIndex = await randomizedStarWarsStarshipIndex();
    starWarsStarshipName.textContent = starWarsJSONData.starships[randomizedStarshipIndex].name;
    starWarsStarshipModel.textContent = `Starship Model: ${starWarsJSONData.starships[randomizedStarshipIndex].model}`;
    starWarsStarshipCrew.textContent = `Starship Crew Count: ${starWarsJSONData.starships[randomizedStarshipIndex].crew}`;

};
//=========================End of Star Wars Functions========================\\

//======================= Start of JavaScript Search Functions =====================\\
const randomStudentListIndex = async () => {
    let studentListData = await fetchStudentData();
    const randomIndexNum = Math.floor(Math.random() * studentListData.length)
    console.log(randomIndexNum);
    return randomIndexNum;
};
randomStudentListIndex();
const displyRandomStudent = async () => {
    let studentListJSONData = await fetchStudentData();
    const randomStudentIndex = await randomStudentListIndex();
    studentFirstName.textContent = `First Name: ${studentListJSONData.season8[randomStudentIndex].firstName}`
    // studentLastName.textContent = 
    // studentEmail.textContent =
};
//======================= End of JavaScript Search Functions ========================\\