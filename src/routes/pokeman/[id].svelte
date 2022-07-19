<script context="module">
    export async function load({params}){
        const id = params.id
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        const res = await fetch(url)
        const pokeman = await res.json()
        return {props: {pokeman}}
    }
</script>
<script>
    import html2canvas from "html2canvas";
    export let pokeman
    let imageCapture 
    const takeScreenchot =()=>{
        html2canvas(document.getElementById("capture"), {
                letterRendering: 1,
                allowTaint: true,
                useCORS: true,
            })
                .then(function (canvas) {
                    imageCapture = canvas.toDataURL("image/png", 0.5)
                })
                .catch((e) => {
                    alert(e)
                })
        
    }
</script>
<div class="flex flex-col items-center" id="capture">
    <h1 class="text-4xl text-center my-8 uppercase text-slate-900">{pokeman.name}</h1>
    <p class="font-bold uppercase text-center"> 
        Type: {pokeman.types[0].type.name} | Height: {pokeman.height} | Weight: {pokeman.weight}</p>
    <img class="h-200 w-200" alt={pokeman.name} src={pokeman.sprites['front_default']} />

</div>
<div class="flex flex-col items-center">
    <button class="bg-slate-800 p-2 rounded text-white text-center w-40 hover:bg-slate-500" on:click={takeScreenchot}> Capture</button>
</div>
{#if imageCapture}
    
<img src={imageCapture} alt="screenshot"/>
<p class="text-center">Right click or long press to save image</p>
{/if}