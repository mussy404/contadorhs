<script>
    import "./styles.css";
</script>

<div class="app">    
    <header>
        <h1>CAVOK <strong style="color: rgb(100, 250, 100)">H</strong><strong style="color: rgb(250, 200, 0)">S</strong></h1>
        <h2>Contador automático de HS's do Esquadrão Cavok</h2>
    </header>

    <main>
        <slot />
    </main>

    <footer>
        <p>Rolo Compressor 2k22</p>
    </footer>
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        max-width: 64rem;
    }

    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem auto;
        padding: 1rem;
        text-align: center;
        text-shadow: #000000FF 2px 2px 0px;
    }
    header h1 {
        margin: .6rem;
        font-family: 'Kanit', sans-serif;
        font-size: 3em;
    }
    header h2 {
        margin: .6rem;
        font-family: 'Work Sans', sans-serif;
    }
    footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem auto;
    }
</style>