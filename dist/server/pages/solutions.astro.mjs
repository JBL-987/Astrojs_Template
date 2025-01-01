import { e as createComponent, r as renderTemplate, i as renderComponent, j as renderScript, m as maybeRenderHead } from '../chunks/astro/server_CFKIYPJ7.mjs';
import 'kleur/colors';
import { $ as $$Navigation, a as $$Footer, b as $$Layout } from '../chunks/Footer_CsiJbHVJ.mjs';
/* empty css                                    */
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Solutions = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blockchain4Indonesia", "data-astro-cid-5sq4n3x7": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="vanta-background" data-astro-cid-5sq4n3x7></div> <div id="container" data-astro-cid-5sq4n3x7> ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-5sq4n3x7": true })} <main data-astro-cid-5sq4n3x7> <section id="hero" class="hero-section" data-astro-cid-5sq4n3x7> <div class="hero-content" data-astro-cid-5sq4n3x7> <h1 data-astro-cid-5sq4n3x7>Solutions</h1> <p class="hero-description" data-astro-cid-5sq4n3x7>
We work with ground breaking blockchains that have impressive speeds, scalability, low fees 
           and military grade security. When working blockchains4Indonesia your business will improve record keeping, 
           exchange data and transfer your assets more efficiently and more securely.
</p> <a href="/blockchain" class="primary-button" data-astro-cid-5sq4n3x7>What is Blockchain</a> </div> </section> </main></div> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-5sq4n3x7": true })} ` })}  ${renderScript($$result, "D:/Documents/Code/web/vigorous-velocity/src/pages/Solutions.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Documents/Code/web/vigorous-velocity/src/pages/Solutions.astro", void 0);

const $$file = "D:/Documents/Code/web/vigorous-velocity/src/pages/Solutions.astro";
const $$url = "/Solutions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Solutions,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
