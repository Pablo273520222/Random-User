import { Person } from './Person.js';

export const mapToPersonObjects = ({ picture, name, email, phone, location, currentime }) => {
    return new Promise((resolve, reject) => {
        const isValidData = picture && name;
        if (isValidData) {
            console.log(currentime);
            const personObject = new Person(picture, name);
            personObject.email = email;
            personObject.phone = phone;
            personObject.location = location;
            resolve(personObject);
        } else {
            const errorMessage = 'Invalid data: Picture and Name are required fields.';
            reject(errorMessage);
        }
    });
};