<script lang="ts">
    import ListItem from "$lib/ListItem.svelte";
</script>

<svelte:head>
    <title> About </title>
    <meta name="About" content="Portfolio" >
</svelte:head>

<div id="Experience">
<h2>My experience with programming</h2>
<p>
    I start programming in 2015, started with language c++. First 4 year I study competitive programming where solving different kind of problems.
    In university I participated on ICPC, competitions from university such as KBTU, NU, IITU. When I was freshman, in second semestr I work in educational center and teach 
    to algorithm and data structure, this oriented for competitive programming. I am interested in backend on python, fronted on react and mobile 
    application on flutter. Also I did few project which you can see in bottom:

</p>

<div >
    <br>
    <h2>Projects</h2>
    <div class="Projects">
        <ListItem title={"Mini Games"} text={"I implemented mini games such as snake, tank"} stack={["Python", "RabbitMQ", "Pygame lib"]} />
        <ListItem title={"DNP Course"} text={"Working with TCP and UDP, also used gRPC, ZMQ, Threading"} stack={["Python", "gRPC", "ZMQ"]} />
        <ListItem title={"SNA course"} text={"This team project, where we implement copy of moodle"} stack={["Flask", "Yandex cloud", "Gitlab CI/CD"]} />
    </div>
</div>

</div>

<style>
    .Projects{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
        flex-direction: row;
    }
    #Experience{
        margin: 30px;
    }
</style>