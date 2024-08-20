<script>
    import BoxHS from "$lib/components/BoxHS.svelte";
</script>

<section>
    <h1>Eventos Importantes</h1>
    <BoxHS namePropHTML={"Formatura EPCAR"} dateProp={"2024-12-13"} />
    
    <BoxHS namePropHTML={"Espadim"} dateProp={"2025-06-11"} />
    
    <BoxHS namePropHTML={"Aspirantado"} dateProp={"2028-12-08"} />
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        margin: 1rem auto;
    }
    h1 {
        text-align: center;
        border-top: solid 5px var(--primaryColor);
        border-bottom: solid 5px var(--primaryColor);
        font: var(--h2);
        line-height: 4rem;
        margin: 1rem auto;
    }
</style>