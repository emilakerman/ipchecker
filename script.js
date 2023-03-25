// f150eea8c5814c56ba3a4d0b0f07f06c ipfind
// ipinfo.io curl "ipinfo.io/37.123.163.64?token=08af4bace63546"
let container = document.getElementById('container');
let fetchButton = document.getElementById('fetchData');
let column1 = document.createElement('div');
let column2 = document.createElement('div');
let column1City = document.createElement('div');
let column2City = document.createElement('div');
let column1Country = document.createElement('div');
let column2Country = document.createElement('div');
let column1ISP = document.createElement('div');
let column2ISP = document.createElement('div');
let column1Timezone = document.createElement('div');
let column2Timezone = document.createElement('div');



fetchButton.addEventListener('click', () => {
    if (column1.innerHTML == '') {
        fetchNewIP();
    }
});

// const fetchThisIP = () => {
//     fetch(`https://app.ipfind.io/api/iplocation?apikey=f150eea8c5814c56ba3a4d0b0f07f06c&ip=37.123.163.64`)
//     .then(resp => resp.json())
//     .then((data) => {
//         console.log(data.country);
//     });
// }
const fetchNewIP = () => {
    fetch("https://ipinfo.io/json?token=08af4bace63546")
    .then((resp) => resp.json())
    .then((data) => {
        column1.innerHTML = 'IP address'
        column2.innerHTML = data.ip;
        column1.className = 'column1';
        container.appendChild(column1);
        container.appendChild(column2);

        column1City.innerHTML = 'City';
        column1City.className = 'column1';
        container.appendChild(column1City);
        column2City.innerHTML = data.city;
        container.appendChild(column2City);

        column1Country.innerHTML = 'Country';
        column1Country.className = 'column1';
        container.appendChild(column1Country);
        column2Country.innerHTML = data.country;
        container.appendChild(column2Country);

        column1ISP.innerHTML = 'ISP';
        column1ISP.className = 'column1';
        container.appendChild(column1ISP);
        column2ISP.innerHTML = data.org;
        container.appendChild(column2ISP);

        column1Timezone.innerHTML = 'Timezone';
        column1Timezone.className = 'column1';
        container.appendChild(column1Timezone);
        column2Timezone.innerHTML = data.timezone;
        container.appendChild(column2Timezone);
        
    });
}