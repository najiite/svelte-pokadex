import { c as create_ssr_component, e as escape, b as add_attribute } from "../../../immutable/chunks/index-6c47069c.js";
import "html2canvas";
async function load({ params }) {
  const id = params.id;
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokeman = await res.json();
  return { props: { pokeman } };
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pokeman } = $$props;
  let imageCapture;
  if ($$props.pokeman === void 0 && $$bindings.pokeman && pokeman !== void 0)
    $$bindings.pokeman(pokeman);
  return `<div class="${"flex flex-col items-center"}" id="${"capture"}"><h1 class="${"text-4xl text-center my-8 uppercase text-slate-900"}">${escape(pokeman.name)}</h1>
    <p class="${"font-bold uppercase text-center"}">Type: ${escape(pokeman.types[0].type.name)} | Height: ${escape(pokeman.height)} | Weight: ${escape(pokeman.weight)}</p>
    <img class="${"h-200 w-200"}"${add_attribute("alt", pokeman.name, 0)}${add_attribute("src", pokeman.sprites["front_default"], 0)}></div>
<div class="${"flex flex-col items-center"}"><button class="${"bg-slate-800 p-2 rounded text-white text-center w-40 hover:bg-slate-500"}">Capture</button></div>
<img${add_attribute("src", imageCapture, 0)} alt="${"screenshot"}">`;
});
export {
  U5Bidu5D as default,
  load
};
