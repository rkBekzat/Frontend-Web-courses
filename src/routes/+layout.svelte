<script>
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Author.svelte";
</script>

<div class="app">
    <Header />
    <main>
        <slot />
    </main>
    <Footer/>
</div>

<style>
    .app {
        margin-left: 3%;
        margin-right: 5%;
    }
</style>
