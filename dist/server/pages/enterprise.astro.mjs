import { e as createComponent, r as renderTemplate, i as renderComponent, j as renderScript, m as maybeRenderHead } from '../chunks/astro/server_CFKIYPJ7.mjs';
import 'kleur/colors';
import { $ as $$Navigation, a as $$Footer, b as $$Layout } from '../chunks/Footer_CsiJbHVJ.mjs';
/* empty css                                    */
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const $$Enterprise = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blockchain4Indonesia", "data-astro-cid-k2vkk2j3": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="vanta-background" data-astro-cid-k2vkk2j3></div> <div id="container" data-astro-cid-k2vkk2j3> ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-k2vkk2j3": true })} <main data-astro-cid-k2vkk2j3> <section id="services" class="services-section" data-astro-cid-k2vkk2j3> <div class="services-content" data-astro-cid-k2vkk2j3> <h1 data-astro-cid-k2vkk2j3>Enterprise</h1> <p class="services-description" data-astro-cid-k2vkk2j3>
We work with enterprise grade, open source blockchain protocol. With EVM-compatible chain with smart contract capabilities, which are uniquely suited to revolutionize, 
            decentralize and liquefy the trade finance industry through tokenization of real world assets and financial instruments.
</p> </div> </section> </main></div> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-k2vkk2j3": true })} ` })}  ${renderScript($$result, "D:/Documents/Code/web/vigorous-velocity/src/pages/Enterprise.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Documents/Code/web/vigorous-velocity/src/pages/Enterprise.astro", void 0);

const $$file = "D:/Documents/Code/web/vigorous-velocity/src/pages/Enterprise.astro";
const $$url = "/Enterprise";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Enterprise,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
