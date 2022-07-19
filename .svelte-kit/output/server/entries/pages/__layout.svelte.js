import { c as create_ssr_component, v as validate_component } from "../../immutable/chunks/index-6c47069c.js";
const app = "";
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"flex justify-center w-full m-5"}"><a href="${"/"}" class="${"mx-5"}">Home</a>
    <a href="${"/about"}">About</a></nav>`;
});
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
<div class="${"p-8 max-w-6xl mx-auto"}">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  _layout as default
};
