
function fetchID(mail : string) : Promise<number>  {
    const params : URLSearchParams = new URLSearchParams();
    if(mail){
        params.append('email',mail);
    }
    console.log("MAIL: " + params.toString());
    return fetch('https://fwd.innopolis.app/api/hw2?' + params.toString()).then(result => result.json());
}

function fetchImage(id : number) : Promise<any>  {
    const params : URLSearchParams= new URLSearchParams();
    if(id){
        params.append('num', String(id));
    }
    console.log("ID: " + params.toString());
    return  fetch('https://getxkcd.vercel.app/api/comic?' + params.toString()).then(result => result.json())
}


const img = document.getElementById('comicImage') as HTMLImageElement;
const title = document.getElementById('TitleHW2') as HTMLParagraphElement;
const uploadDate = document.getElementById('Date') as HTMLParagraphElement;
const alt = document.getElementById('Alt') as HTMLParagraphElement;

function define(image : any ) : void {   
    img.setAttribute('src', image.img);
    img.setAttribute('alt', image.alt);
    title.textContent = image.title;
    const date : string  = new Date(image.year, image.month, image.day).toLocaleDateString();
    uploadDate.textContent = "Date: " + date;
    alt.textContent = "Alt: " + image.alt;
}


const mail : string = "b.rakhimbayev@innopolis.university";
fetchID(mail).then(id => fetchImage(id)).then(image => define(image));
console.log("DONE");



