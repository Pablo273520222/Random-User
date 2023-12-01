export const fetchPerson = async function fetchRandomUser() {
    try {
        const response = await fetch('https://randomuser.me/api');
        const data = await response.json();
        return data.results[0];
    } catch {
        console.error('Error fetching');
    }
};

export const fetchCurrentTime = async function fetchCurrentTime(location) {
    const url = `https://world-time-by-api-ninjas.p.rapidapi.com/v1/worldtime?city=${location}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bb2933d7admsh3a9c922ab33f00cp1ce815jsne81cb4069232',
            'X-RapidAPI-Host': 'world-time-by-api-ninjas.p.rapidapi.com',
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error('Error fetching current time:', error);
    }
};