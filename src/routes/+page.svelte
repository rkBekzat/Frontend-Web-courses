
<svelte:head>
    <title> Home </title>
    <meta name="Home" content="Portfolio" >
</svelte:head>

<div id="home">
    <div>
        <h1> Bekzat Rakhimbayev </h1>
        <p>
            Hi! my name is Bekzat. I am 21 year old. I from Kazakhstan. 
            I like solving programming problems and enjoy sport. One of sport which I like is football, table tennis, baketball, volleyball. 
            Also I like watch anime. For me best anime is ONE PIECE:). 
        </p>
        <div class="links">
            <h2> Contacts: </h2>
            <a href="https://github.com/rkBekzat" id="gh-link">
                <img src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU" alt="github">
            </a>
            <a href="https://www.instagram.com/rkbekzat/" id="inst-link">
                <img src="https://i0.wp.com/tbrsteakhouse.com/wp-content/uploads/2018/11/instagram-colourful-icon.png?ssl=1" alt="instagram">
            </a>
            <a href="https://www.linkedin.com/in/bekzat-rakhimbayev-534904192/" id="ln-link">
                <img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" alt="linkedin">
            </a>
            <a href="https://t.me/rkbekzat" id="tg-link">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8speAAnt4Yod8mo+D4/P7p9fvt9vz0+v3X7Pij0+/f7/nw+P2t1/F9wupKr+O73vOaz+7F4/W12/Jht+ZEreM2qOGTy+1Xs+WCxOrA4fR2v+lru+fQ6Pbi8fqJxusWEaRNAAAJMklEQVR4nO1d2WKqMBCVJLgrRRBxq///lxeqtqhg5gxZuG3Ou8IhmTUzk9EoICAgICAgICAgICAgICAgIOCvYTqZjBezxXgymfp+FbNYzg7zS54UkZTiCimjIskv88Ns6fvleiKerfZ5VDNSKnqGUjXjKN+vZr7fk4d4syulqKi9cnvkqaRQ5W4T+35hDMvsVL33W2pPRIU8Zf/Nll2uymrtAHo3klKUq7Hvlyfgg0XvhopkNuztOtv3oHcnuR6u5vlIINnrghLlwTeVNsTzSBqgd4Uo5r75PGO6k3235yNkNB+UQKbS3PrdUPkDqW9a38gM7s8mZJT5pvaFsxn90gYlkrNveqN4LSzRu0KsPYvjQeN29oeKfJqOaW5tgzYoitxbOLmJ7PP74hht/BBcO1jAG0Wx9sBvvLVjItoht86jjrNZF0YLJR3bjdTZDv2mKJy6OJaNYDtcCmPpUgR/IEtH/JZb1zv0DrV1YhnHjqxgK8XIgUpd+OP3xXFhm+DZjwj+QFrO4swcm8E2ilZX8dP3CtaQn/YIjodAsJJFa+pmWvjmdkNhy2gk3mXwBpXYIXgaxh6tIY82CO58+KJdEDvzBDdDIlhRNB72D0SN/kCaVqjevO0uqK1ZguuhLWG1iEbDxYEJ4RUmRXHqMWDqhorMGf58iAQrirkpgoch7tEawlDCPx7kHq2hIjPHNuuhEqwoGtGns6Hu0RrCRMQ/mIiiDcpAgvFjyEtYLeJHb4a+KWjRl+B8eO7aI2TPypt46AQriv0sRvofMOx1JhUPWY/eofosoicprAuk6annXpJovZak9Y1FvssOqyP16yrFJ/jhfgmV2K5uQdEn9TeSbxMTm1xa31WcGsf1G+oHZqdPXXukMkofi9mpQQ3bO3UaVCiRvGw2auTNDjEcLqFUl5ZDsyP1EwsewcyVnqm1S6tNI2dPJK8QtbRK647K9B27xGhL/hdWEDV2sUlVpV0mna9AT58ITgbcgT+jRP4ul7SkvwHLr7FuDKXcvT+vXgC7iGESLW/SSrto2w0OwC5ibNOVzU1abU9CSh6RE7mCGZ7smXvt9rwB8TjUCWZor8OgpDrKkLmCA4yzHTGUYk8v+IE+skArbFMLa9jpu7RjCn1khSYzzB83VZERFgJgoQ18EGWYoBJFirb5gn4xKIiIsdU/m2YcngEKisAq+gzGFZXruWPVTYD2Cowv9qZ2qdY4xLMuz5seWVyftIcYlmYYStkW2DYwXktRdFAHXwFUNSboKZFoXKlp3VjUdUD2CasChKABt1uKzsD2juwrHdt1PkbOtN0hugPNV/St5q6Mw1xXCrIsv/puOisp4fgU6hvqpUpr46B/WHZL23fWp8HKDlKmPXy2Oi+hNw7L/CYH3aX3cAQOHUKxM6XEeQjZ/UDkTW8BvI0gc8E0FpVxoAR+09Ndkb0huISVHWQuQGN7fYBIaIJw+D44e9cdwjhSQOox8aJ88kiS+HsB3x83MJRdh+vQ+hbgX9fGgRj4Ndrb37cw7RiCQg8+gUQlFjnEx5/eU03rCyNPJOnx2QRJcgGRw6Z5pqz5FUMVSLpTM6FKOVm71Igb7e3aRkJOjQTAkOiWSokMPGrOJ1CFbkNxPGMgK0xy6wmuZxPN5mg9QZZnLOhNbfocBjpX5dw8RlJbvdLjpNwBhto1VBFW/rBv/qFKCFr9wpBDgKFOCMCe6nPRXBBazznHbwTkUKNLwTaAy8O/SZr3yHGMEWvxXgjUBeA3e1jASNJOUCCfg8FQ8/9ImPK4gOTJD6xSHsCn0fql1F06exrxQm4b5CUZgEMRTWyhEtrXem7KpI8n4fjdSGyhdQqVzA/aD7Z4ntEj6Oe0rPNZJD7UnzwpKU4fbzdr+ixKSFk9KwRHYnxSnktJmWddJF8WUCFHmKzycihPQ8211SRb58a+LCA2z4J19AXV1ACqrNquyfzJXfp8nZKFzSRB6kx+GCKeJOjZVyTTnyUa715qtNG5MqwWASjnTQ6BfzgIUa53abo7Rq9DsuDZQOSyyyYEdMjMeMC1xL5tfjclWnoER5WC/UEmCxUY/WWcp4Pnh5zwrBMwQdZ4AygeMHqOL/EiBfjo8Os52Dm+uVoMhXiLN7CqBsFaDIP1NIzKT9bRF1rYZkzVcNaQU2EO10SZq2tjDK3kPAauazNYmwgvIn50GDFqEw0KoipBg8/6ungDm8EaYRVhao6jShk1wkbrvLH+OU4Kg1HnbbZWXyDRKUePc1pKeN5vF+SWvlM5g+84M5VM98wIagjOyQazemaMt5SInKZTOdlgVt+T+bYg4mx1TvcxbwCI+a4ZJY6EZWS4U8z+w9hCy4Uq9K4HwxIL5tABVrZE+zLaQBVX4oo7KNJOL7fULSP+VP6kIUstiO/NP179zO/HtzZTQRZvPjqewugxUwFoxAXxRhoZngafoMVeYBl1SSOcwug3ZcjicJOuA29U+PuMNhnZbejucHFQyeg7KMrqhJo2FwfNY/ZcQttd+epVGlGfre8SWp/XJvZPx1Kw+u5L0PrMPfW4COjJoYGZe6ba2LrRHLyDjko1MTfRwaSherzJoSY5vqDPMjL70smooXp8WdFyeqz7mZl50K5m0OKGydQM2t8/R/gPzIL+A/O8f/9M9tFoP7wpnxLrTtfi19+NALVCOQFQ1E3EwETR/B0lf+CemT9wV9CAprPbuu9pFA/mzi5rN1kP5MIge/eu/YG780ajxQDuP7R8xeOvv8OyvsXSL0Hr95B6lkW7MnjHuPB2H3Dh6P7xOPF0pzOlgdgQjl7u5bbkqrXj19+tXlsNtxQVo9S4J5ZOhVESu1bNAk7B86EvwrGDs6tkeOeZv3VMcwcKR4nc1gXHFBysL6OKjKXueYjXdqVRrN1Z+S6cE2tbFZ0RYw1ZZMdwyIhXNmoDqTTPUfa7jMs0pjuzHFXFz78APmJqch1llPq0EJ3IzOictluDBoPZXvT1yMkDGL3ho+xBUooyG5r4tWCyqknChSNf4yccZSn6Y5kdI2QpK3bRMfMRIPXBbJ4rCsuKncrnA5e9TixW61KKjlkS9ZAJIcv1ykEK1C7Gm1W6z5Oi8lLEFZXlLJJ8n642/43c0TCdTMaL2WI8mQzSnAcEBAQEBAQEBAQEBAQEBAQEWMU/WI6QrT4sGCgAAAAASUVORK5CYII=" alt="telegram">
            </a>
            <a href="mailto:b.rakhimbayev@innopolis.university" id="email">
                <img src="https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI" alt="mail">
            </a>
        </div>
    </div>
    <img src="me.jpg" alt="Bekzat" class="photo">
</div>

<style>
    h1 {
        margin-bottom: 0;
    }
    p {
        max-width: 600px;
    }
    div {
        display: flex;
        flex-direction: column;
        justify-content: start;
    }
    #home {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        margin-bottom: 50px;
    }
    .photo {
        height: 400px;
        width: 400px;
    }
    .links {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-left: 10px;
    }
</style>



