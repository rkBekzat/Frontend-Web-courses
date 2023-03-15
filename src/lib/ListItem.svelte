<script lang="ts">
    export let title : string;
    export let text : string;
    export let stack : string[];

</script>

<div class="item">
    <p class="title">{title}</p>
    <p class="description">{text}</p>
    <div class="stacks">
    {#each stack as item}
        <p class="tech">{item}</p>
    {/each}
    </div>
</div>

<style>
    .item{ 
        height: 400;
        width: 300;
        padding: 20px;
        border: 1px solid black;
        margin: 10px;
    }
    .title{
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
        text-align: center;
        padding: 10px;
    }
    .description{
        font-size: 16px;
        text-align: center;
    }
    .stacks{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .tech {
        font-size: 14px;
        padding: 5px
    }
</style>