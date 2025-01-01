import { e as createComponent, r as renderTemplate, i as renderComponent, j as renderScript, m as maybeRenderHead } from '../chunks/astro/server_CFKIYPJ7.mjs';
import 'kleur/colors';
import { $ as $$Navigation, a as $$Footer, b as $$Layout } from '../chunks/Footer_CsiJbHVJ.mjs';
/* empty css                                    */
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const $$Blockchain = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blockchain4Indonesia", "data-astro-cid-lqozxlq4": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="vanta-background" data-astro-cid-lqozxlq4></div> <div id="container" data-astro-cid-lqozxlq4> ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-lqozxlq4": true })} <main data-astro-cid-lqozxlq4> <section id="hero" class="hero-section" data-astro-cid-lqozxlq4> <div class="hero-content" data-astro-cid-lqozxlq4> <h1 data-astro-cid-lqozxlq4>Blockchain</h1> <p class="hero-description" data-astro-cid-lqozxlq4>
A blockchain is a decentralized network of stored data base transactions on a block that's linked through a cryptographically recorded hash of the previous blocks transaction
           We choose to work along side blockchains that offer a decentralized public ledger with layer 1 and 2 networks 
           which enables information transparency and provides a distributed, universal ledger of truth- unburdened by central administration controls or a single point of failure.
</p></div> </section> </main></div> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-lqozxlq4": true })} ` })}  ${renderScript($$result, "D:/Documents/Code/web/vigorous-velocity/src/pages/blockchain.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Documents/Code/web/vigorous-velocity/src/pages/blockchain.astro", void 0);

const $$file = "D:/Documents/Code/web/vigorous-velocity/src/pages/blockchain.astro";
const $$url = "/blockchain";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blockchain,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
