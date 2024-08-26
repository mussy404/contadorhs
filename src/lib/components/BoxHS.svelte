<script>
    export let namePropHTML = "HS sem nome";
    export let dateProp = "2024-07-15";
    let now_date = new Date().getTime();
    let event_date = new Date(dateProp).getTime();
    // Cálculo do HS
    let hs = 0;
    try {
        hs = event_date - now_date;
        hs = Math.ceil(hs / (1000 * 60 * 60 * 24)) // milisegundos pra dias
        hs = hs > 0 ? hs : 0;
    } catch (e) {
        console.log("=CavokHS= ERRO em Date.parse dentro de hsbox. Verifique os parâmetros ou a função.");
        console.error(e);
        hs = 0;
    }
</script>

<div class="container">
    <p class="title">{@html namePropHTML}</p>
    <p class="hs">HS-{hs.toString()}</p>
    <p class="date">Data estimada: {dateProp.split("-")[2]}/{dateProp.split("-")[1]}/{dateProp.split("-")[0]}</p>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        background-color: var(--thirdColor);
        margin: 1rem;
        padding: 1rem;
        border-radius: 2rem;
        border: solid 5px var(--accentColor2);
        box-shadow: var(--shadowsolid);
    }
    .title {
        margin: 0;
        font: var(--h3);
        font-family: "Kanit";
    }
    .hs {
        margin: 1rem auto;
        font: var(--h1);
        text-shadow: var(--secondaryColor) 2px 2px;
    }
    .date {
        margin: 0;
        font: var(--subtext);
        text-decoration: underline var(--primaryColor);
    }
</style>