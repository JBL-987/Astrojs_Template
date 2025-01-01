import { e as createComponent, r as renderTemplate, i as renderComponent, j as renderScript, m as maybeRenderHead } from '../chunks/astro/server_CFKIYPJ7.mjs';
import 'kleur/colors';
import { $ as $$Navigation, a as $$Footer, b as $$Layout } from '../chunks/Footer_CsiJbHVJ.mjs';
/* empty css                                    */
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Partner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blockchain4Indonesia", "data-astro-cid-ncj5pypz": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="vanta-background" data-astro-cid-ncj5pypz></div> <div id="container" data-astro-cid-ncj5pypz> ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-ncj5pypz": true })} <main data-astro-cid-ncj5pypz> <section id="partner" class="partner-section" data-astro-cid-ncj5pypz> <div class="partner-content" data-astro-cid-ncj5pypz> <h1 data-astro-cid-ncj5pypz>Partner networks</h1> <p class="partner-description" data-astro-cid-ncj5pypz>
We work with enterprise grade, open source blockchain protocol. With EVM-compatible chain with smart 
        contract capabilities, which are uniquely suited to revolutionize, decentralize a
        nd liquefy the trade finance industry through tokenization of real world assets and financial instruments.
</p> <a href="https://xdc.org/" class="primary-button" data-astro-cid-ncj5pypz>Find Out About XDC More</a> </div> </section> </main></div> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-ncj5pypz": true })} ` })}  ${renderScript($$result, "D:/Documents/Code/web/vigorous-velocity/src/pages/Partner.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Documents/Code/web/vigorous-velocity/src/pages/Partner.astro", void 0);

const $$file = "D:/Documents/Code/web/vigorous-velocity/src/pages/Partner.astro";
const $$url = "/Partner";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Partner,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
