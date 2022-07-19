import { n as noop, a as safe_not_equal, c as create_ssr_component, b as add_attribute, e as escape, d as subscribe, f as each, v as validate_component } from "../../immutable/chunks/index-6c47069c.js";
/* empty css                                                                   */const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const Pokemon = writable([]);
const fetchPokemon = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=100";
  const res = await fetch(url);
  const data = await res.json();
  const loadedPokemon = data.results.map((data2, index) => {
    return {
      id: index + 1,
      name: data2.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
    };
  });
  Pokemon.set(loadedPokemon);
};
fetchPokemon();
const PokemanCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pokeman } = $$props;
  if ($$props.pokeman === void 0 && $$bindings.pokeman && pokeman !== void 0)
    $$bindings.pokeman(pokeman);
  return `<a class="${"py-6 bg-slate-900 text-slate-100 font-bold text-center uppercase rounded-md shadow-sm hover:shadow-md flex flex-col items-center"}"${add_attribute("href", `/pokeman/${pokeman.id}`, 0)}><img${add_attribute("src", pokeman.image, 0)}${add_attribute("alt", pokeman.name, 0)}>
    <h2>${escape(pokeman.id)}. ${escape(pokeman.name)}</h2></a>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $Pokemon, $$unsubscribe_Pokemon;
  $$unsubscribe_Pokemon = subscribe(Pokemon, (value) => $Pokemon = value);
  let searchTerm = "";
  let filteredPokemon = [];
  {
    {
      {
        filteredPokemon = [...$Pokemon];
      }
    }
  }
  $$unsubscribe_Pokemon();
  return `${$$result.head += `${$$result.title = `<title>Home | Pokadex built with SvelteKit</title>`, ""}`, ""}

<h1 class="${"text-4xl text-center my-8 uppercase text-slate-900"}">Welcome to SvelteKit Pokadex</h1>

<input class="${"w-full rounded-md my-10 p-4 border-2 border-slate-300"}" type="${"text"}" placeholder="${"Search for a Pokemon"}"${add_attribute("value", searchTerm, 0)}>

<div class="${"grid gap-4 md:grid-cols-3 lg:grid-cols-4 grid-cols-2"}">${each(filteredPokemon, (pokeman) => {
    return `${validate_component(PokemanCard, "PokemanCard").$$render($$result, { pokeman }, {}, {})}`;
  })} 
</div>`;
});
export {
  Routes as default
};
