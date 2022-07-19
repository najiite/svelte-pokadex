import { c as create_ssr_component } from "../../immutable/chunks/index-6c47069c.js";
/* empty css                                                                   */const css = {
  code: "h1.svelte-1sfacv1{color:#1e1e54;text-align:center}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>About  | Pokadex built with SvelteKit</title>`, ""}`, ""}

<h1 class="${"text-4xl text-blue text-center my-8 uppercase text-slate-900 svelte-1sfacv1"}">About Pokadex</h1>`;
});
export {
  About as default
};
