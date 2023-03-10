// To find all property first I use js file and print the data which fetched using id. Here show me this properties, so I write all lof them to not lose data, even if we not use them. 
interface Comic{
    alt: string,
    day: string,
    img: string,
    link: string,
    month: string,
    news: string,
    num: number,
    safe_title: string,
    title: string,
    transcript: string,
    year: string,
}


function fetchID(mail : string) : Promise<number>  {
    const params : URLSearchParams = new URLSearchParams();
    if(mail){
        params.append('email',mail);
    }
    console.log("MAIL: " + params.toString());
    return fetch('https://fwd.innopolis.app/api/hw2?' + params.toString()).then(result => result.json());
}

function fetchImage(id : number) : Promise<Comic>  {
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

function define(image : Comic ) : void {   
    img.setAttribute('src', image.img);
    img.setAttribute('alt', image.alt);
    title.textContent = image.title;
    const date : string  = new Date(Number(image.year), Number(image.month), Number(image.day)).toLocaleDateString();
    uploadDate.textContent = "Date: " + date;
    alt.textContent = "Alt: " + image.alt;
}


const mail : string = "b.rakhimbayev@innopolis.university";
fetchID(mail).then(id => fetchImage(id)).then(image => define(image));
console.log("DONE");



