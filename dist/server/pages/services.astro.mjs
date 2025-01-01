import { e as createComponent, r as renderTemplate, i as renderComponent, j as renderScript, m as maybeRenderHead } from '../chunks/astro/server_CFKIYPJ7.mjs';
import 'kleur/colors';
import { $ as $$Navigation, a as $$Footer, b as $$Layout } from '../chunks/Footer_CsiJbHVJ.mjs';
/* empty css                                    */
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blockchain4Indonesia", "data-astro-cid-bmxvjkmm": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="vanta-background" data-astro-cid-bmxvjkmm></div> <div id="container" data-astro-cid-bmxvjkmm> ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-bmxvjkmm": true })} <main data-astro-cid-bmxvjkmm> <section id="services" class="services-section" data-astro-cid-bmxvjkmm> <div class="services-content" data-astro-cid-bmxvjkmm> <h1 data-astro-cid-bmxvjkmm>Services</h1> <p class="services-description" data-astro-cid-bmxvjkmm>
We work with enterprise grade, open source blockchain protocol. With EVM-compatible chain with smart contract capabilities, which are uniquely suited to revolutionize, 
            decentralize and liquefy the trade finance industry through tokenization of real world assets and financial instruments.
</p> </div> </section> </main></div> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-bmxvjkmm": true })} ` })}  ${renderScript($$result, "D:/Documents/Code/web/vigorous-velocity/src/pages/Services.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Documents/Code/web/vigorous-velocity/src/pages/Services.astro", void 0);

const $$file = "D:/Documents/Code/web/vigorous-velocity/src/pages/Services.astro";
const $$url = "/Services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
