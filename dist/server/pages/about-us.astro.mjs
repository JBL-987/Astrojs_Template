import { e as createComponent, r as renderTemplate, i as renderComponent, j as renderScript, m as maybeRenderHead } from '../chunks/astro/server_CFKIYPJ7.mjs';
import 'kleur/colors';
import { $ as $$Navigation, a as $$Footer, b as $$Layout } from '../chunks/Footer_CsiJbHVJ.mjs';
/* empty css                                    */
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$AboutUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blockchain4Indonesia", "data-astro-cid-fg34scy4": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="vanta-background" data-astro-cid-fg34scy4></div> <div id="container" data-astro-cid-fg34scy4> ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-fg34scy4": true })} <main data-astro-cid-fg34scy4> <section id="hero" class="hero-section" data-astro-cid-fg34scy4> <div class="hero-content" data-astro-cid-fg34scy4> <h1 data-astro-cid-fg34scy4>About Us</h1> <p class="hero-description" data-astro-cid-fg34scy4>
Blockchain4Indonesia could give power back to you and your business partners. By leveraging blockchain,
            DLT, fintec and web 3 we're opening up doors for owning, 
            controlling your own trade, trade finance and business data. 
            Creating very inexpensive advanced instant settlements, high grade military security, 
            decentralized data storage chain. Opening up economics boarders 24/7 
            365 accelerating your business.
            We use leading edge providers of digital asset infrastructure for finance, send cross boarder 
            payments in real time. Engage with tokenization and digital assets, meeting regulatory compliant with 
            MLETR standards. We use 
            our own development of Dapps that aims to redefine the global trade finance industry by digitizing the whole process. 
            Working closely with its solution eco system partners it promises to deliver interoperability 
            of MLETR solutions, funding for trade edocuments on a MLETR compliant standard.
</p> <a href="/mletr" class="primary-button" data-astro-cid-fg34scy4>What is MLETR</a> </div> </section> </main></div> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-fg34scy4": true })} ` })}  ${renderScript($$result, "D:/Documents/Code/web/vigorous-velocity/src/pages/About-us.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Documents/Code/web/vigorous-velocity/src/pages/About-us.astro", void 0);

const $$file = "D:/Documents/Code/web/vigorous-velocity/src/pages/About-us.astro";
const $$url = "/About-us";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AboutUs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
