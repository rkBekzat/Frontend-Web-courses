
<script lang="ts">
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

let imgSrc : string;
let imgAlt : string;
let title : string; 
let date : string;
function define(image : Comic ) : void {   
    imgSrc = image.img;
    imgAlt = image.alt;
    title = image.title;
    date = new Date(Number(image.year), Number(image.month), Number(image.day)).toLocaleDateString();
}


const mail : string = "b.rakhimbayev@innopolis.university";
fetchID(mail).then(id => fetchImage(id)).then(image => define(image));
console.log("DONE");

</script>

<h2>Comic:</h2>
<div id="comicBox">
    <img src={imgSrc} alt={imgAlt}>
    <section class="descript">
        <h4> {title}</h4>
        <p> {date}</p>
        <p> {imgAlt}</p>
    </section>
</div>

<style>
    #comicBox {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 100px;
        border: 1px solid black;
        border-radius: 10px;
        padding: 20;
    }
    #comicBox img {
        margin: 20px;
        max-width: 100%;
        max-height: 100%;
    }
    .descript{
        margin: 10px;
        display: flex;
        flex-direction: column;
        width: 400px;
    }
    #comicBox h4 {
        font-size: 20px;
        font-weight: bold;
    }
    #comicBox p {
        font-size: 16px;
        font-weight: normal;
    }
</style>