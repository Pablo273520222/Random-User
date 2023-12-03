import { mapToPersonObjects } from './utils.js';
import { fetchPerson, fetchCurrentTime } from './api.js';

const outputElement = document.querySelector('.container');
const cardDiv = document.createElement('div');
cardDiv.classList.add('card');
outputElement.appendChild(cardDiv);

const img = document.createElement('img');

const button = document.createElement('button');
button.textContent = 'GENERATE USER';
button.addEventListener('click', generateRandomUser);

img.src = "recurso/user_nt_found.jpg";

const spanNames = ['Name', 'Mail', 'Phone', 'Location', 'Current Time'];
const spans = {};

for (const spanName of spanNames) {
    spans[spanName.toLowerCase()] = document.createElement('span');
}

spans['name'].textContent = "Name: name surname";
spans['mail'].textContent = "Mail: mail";
spans['phone'].textContent = "Phone: phone";
spans['location'].textContent = "Location: city";
spans['current time'].textContent = "Current Time: time";

cardDiv.appendChild(img);

for (const spanName of spanNames) {
    cardDiv.appendChild(spans[spanName.toLowerCase()]);
}

outputElement.appendChild(button);

async function generateRandomUser() {
    try {
        const personData = await fetchPerson();
        const personObject = await mapToPersonObjects(personData);

        const currentTimeData = await fetchCurrentTime(personObject.location.city);

        img.src = `${personObject.picture.large}`;
        spans['name'].textContent = `Name: ${personObject.name.first} ${personObject.name.last}`;
        spans['mail'].textContent = `Mail: ${personObject.email}`;
        spans['phone'].textContent = `Phone: ${personObject.phone}`;
        spans['location'].textContent = `Location: ${personObject.location.city}`;
        spans['current time'].textContent = `Current Time:  ${currentTimeData.hour}:${currentTimeData.minute}:${currentTimeData.second}`;

        console.log(personObject.name);
    } catch (error) {
        console.error('Error al generar usuario aleatorio:', error);
    }
}