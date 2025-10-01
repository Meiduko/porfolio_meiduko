import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BZZvE4oG.mjs';
import { $ as $$Layout, a as $$Navbar, b as $$Title, c as $$Projects, d as $$AboutMe, e as $$Footer } from '../chunks/Footer_CtD9LZbS.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main class="my-18 w-10/12 md:w-8/12 xl:w-6/12 place-self-center flex flex-col gap-20"> ${renderComponent($$result2, "Title", $$Title, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "AboutMe", $$AboutMe, {})} <!-- <Contact/> --> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/Borja/Coding/porfolio_meiduko/src/pages/index.astro", void 0);

const $$file = "C:/Users/Borja/Coding/porfolio_meiduko/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
