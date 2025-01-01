import { e as createComponent, r as renderTemplate, i as renderComponent, j as renderScript, m as maybeRenderHead } from '../chunks/astro/server_CFKIYPJ7.mjs';
import 'kleur/colors';
import { $ as $$Navigation, a as $$Footer, b as $$Layout } from '../chunks/Footer_CsiJbHVJ.mjs';
/* empty css                                    */
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Mletr = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blockchain4Indonesia", "data-astro-cid-v6l366yr": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="vanta-background" data-astro-cid-v6l366yr></div> <div id="container" data-astro-cid-v6l366yr> ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-v6l366yr": true })} <main data-astro-cid-v6l366yr> <section id="hero" class="hero-section" data-astro-cid-v6l366yr> <div class="hero-content" data-astro-cid-v6l366yr> <h1 data-astro-cid-v6l366yr>MLETR</h1> <p class="hero-description" data-astro-cid-v6l366yr>
Model Law on Electronic Transferable Records. UNCITRAL (UN Commission on International Trade Law) 
           has developed a scope to allow the use of transferable documents and instruments in electronic form. 
           Transferable Edocuments and instruments typically include bills of lading, warehouse receipts, bills of exchange, 
           promissory notes and cheques.
</p> </div> </section> </main></div> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-v6l366yr": true })} ` })}  ${renderScript($$result, "D:/Documents/Code/web/vigorous-velocity/src/pages/mletr.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Documents/Code/web/vigorous-velocity/src/pages/mletr.astro", void 0);

const $$file = "D:/Documents/Code/web/vigorous-velocity/src/pages/mletr.astro";
const $$url = "/mletr";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Mletr,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
