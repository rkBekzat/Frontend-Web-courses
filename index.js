function fetchID(mail){
    const params = new URLSearchParams();
    if(mail){
        params.append('email',mail);
    }
    console.log("MAIL: " + params.toString());
    return fetch('https://fwd.innopolis.app/api/hw2?' + params.toString()).then(result => result.json());
}

function fetchImage(id){
    const params = new URLSearchParams();
    if(id){
        params.append('num',id);
    }
    console.log("ID: " + params.toString());
    return  fetch('https://getxkcd.vercel.app/api/comic?' + params.toString()).then(result => result.json())
}


const button = document.getElementById('buttonHW2')
const img = document.getElementById('imageHW2')
const title = document.getElementById('TitleHW2')
const upload_date = document.getElementById('Date')
const alt = document.getElementById('Alt')
const box = document.getElementById('Hw2')

function define(image){
    button.textContent = "new image"        
    img.setAttribute('src', image.img);
    img.setAttribute('alt', image.alt);
    title.textContent = image.title;
    const date = new Date(Date.UTC(image.year, image.month, image.day)).toLocaleDateString();
    upload_date.textContent = "Date: " + date;
    alt.textContent = "Alt: " + image.alt;
}

button.addEventListener('click', async function (e){
    const id = await fetchID('rakhimbayevbekzat@gmail.com');
    const image = await fetchImage(id);
    define(image);
    console.log(image)
});
