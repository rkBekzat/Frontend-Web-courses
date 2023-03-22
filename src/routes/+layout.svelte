<script>
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Author.svelte";
</script>

<div>
    <Header />
    <main>
        <slot />
    </main>
    <Footer/>
</div>

<style>
    div {
        margin-left: 3%;
        margin-right: 5%;
    }
</style>
