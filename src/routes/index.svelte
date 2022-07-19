<script>
    import {Pokemon} from '../stores/pokastores'
    import PokemanCard from '../components/PokemanCard.svelte'
import About from './about.svelte';
    let searchTerm = ""
    let filteredPokemon  = []
    $: {
        if (searchTerm) {
            filteredPokemon = $Pokemon.filter($Pokeman => $Pokeman.name.toLowerCase().includes(searchTerm.toLowerCase()))
        } else {
            filteredPokemon = [... $Pokemon]
        }
    }
</script>
<svelte:head>
    <title>Home | Pokadex built with SvelteKit</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase text-slate-900">Welcome to SvelteKit Pokadex</h1>

<input class="w-full rounded-md my-10 p-4 border-2 border-slate-300" 
type="text" bind:value={searchTerm} placeholder="Search for a Pokemon"/>

<div class="grid gap-4 md:grid-cols-3 lg:grid-cols-4 grid-cols-2">
   {#each filteredPokemon as pokeman}
    <PokemanCard {pokeman}/>
{/each} 
</div>


<style>
</style>
