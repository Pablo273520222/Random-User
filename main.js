import { mapToPersonObjects } from './utils.js';
import { fetchPerson, fetchCurrentTime } from './api.js';

const outputElement = document.querySelector('.container');
const cardDiv = document.createElement('div');
cardDiv.classList.add('card');
outputElement.appendChild(cardDiv);

const img = document.createElement('img');
const nameSpan = document.createElement('span');
const emailSpan = document.createElement('span');
const phoneSpan = document.createElement('span');
const locationSpan = document.createElement('span');
const timeSpan = document.createElement('span');
const button = document.createElement('button');
button.textContent = 'GENERATE USER';
button.addEventListener('click', generateRandomUser);

img.src = "recurso/user_nt_found.jpg";
nameSpan.textContent = "Name: name surname";
emailSpan.textContent = "Mail: mail";
phoneSpan.textContent = "Phone: phone";
locationSpan.textContent = "Location: city ";
timeSpan.textContent = "Current Time: time";



cardDiv.appendChild(img);
cardDiv.appendChild(nameSpan);
cardDiv.appendChild(emailSpan);
cardDiv.appendChild(phoneSpan);
cardDiv.appendChild(locationSpan);
cardDiv.appendChild(timeSpan);
outputElement.appendChild(button);

async function generateRandomUser() {
    try {
        const personData = await fetchPerson();
        const personObject = await mapToPersonObjects(personData);

        const currentTimeData = await fetchCurrentTime(personObject.location.city);
        console.log(personObject);

        img.src = `${personObject.picture.large}`;
        nameSpan.textContent = `Name: ${personObject.name.first} ${personObject.name.last}`;
        emailSpan.textContent = `Mail: ${personObject.email}`;
        phoneSpan.textContent = `Phone: ${personObject.phone}`;
        locationSpan.textContent = `Location: ${personObject.location.city}`;
        timeSpan.textContent = `Current Time:  ${currentTimeData.hour}:${currentTimeData.minute}:${currentTimeData.second} `;

        console.log(personObject.name);
    } catch (error) {
        console.error('Error al generar usuario aleatorio:', error);
    }
}