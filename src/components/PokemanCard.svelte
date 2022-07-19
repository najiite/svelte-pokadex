<script>
    export let pokeman
</script>
<a class="py-6 bg-slate-900 text-slate-100 font-bold text-center uppercase  rounded-md shadow-sm hover:shadow-md flex flex-col items-center" href={`/pokeman/${pokeman.id}`}>
    <img src={pokeman.image} alt={pokeman.name}/>
    <h2>{pokeman.id}. {pokeman.name}</h2>
</a>