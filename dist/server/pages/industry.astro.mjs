import { e as createComponent, r as renderTemplate, i as renderComponent, j as renderScript, m as maybeRenderHead } from '../chunks/astro/server_CFKIYPJ7.mjs';
import 'kleur/colors';
import { $ as $$Navigation, a as $$Footer, b as $$Layout } from '../chunks/Footer_CsiJbHVJ.mjs';
/* empty css                                    */
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Industry = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blockchain4Indonesia", "data-astro-cid-pxdnpbjq": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="vanta-background" data-astro-cid-pxdnpbjq></div> <div id="container" data-astro-cid-pxdnpbjq> ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-pxdnpbjq": true })} <main data-astro-cid-pxdnpbjq> <section id="hero" class="hero-section" data-astro-cid-pxdnpbjq> <div class="hero-content" data-astro-cid-pxdnpbjq> <h1 data-astro-cid-pxdnpbjq>Industry And Case Study As The Heading</h1> <p class="hero-description" data-astro-cid-pxdnpbjq>
The global trade finance gap is a $2.5 trillion challenge that's holding back developing economies and small businesses. Here are some ways to address the gap: 
            Use digital technology
            Digital platforms and blockchain technology can make financing more efficient and accessible. Banks can use digital technology to raise trade finance as an attractive asset class. 
            Prioritize ESG principles
            Promoting green, resilient, and socially responsible practices can make trade finance more sustainable and inclusive. 
            Expand risk-sharing mechanisms
            Multilateral agencies and development banks can work together to support programs that mitigate risk. 
            Strengthen supply chain finance
            Supply chain finance is vital for enabling small and medium-sized enterprises (SMEs) to participate in global trade. 
            Build local capacity
            Governments and development finance institutions can support local financial institutions and SMEs. 
            Develop climate-friendly criteria
            As economies transition to low-carbon models, there's a need for developing criteria for trade finance that supports climate-related goods and technologies.
</p> </div> </section> </main></div> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-pxdnpbjq": true })} ` })}  ${renderScript($$result, "D:/Documents/Code/web/vigorous-velocity/src/pages/Industry.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Documents/Code/web/vigorous-velocity/src/pages/Industry.astro", void 0);

const $$file = "D:/Documents/Code/web/vigorous-velocity/src/pages/Industry.astro";
const $$url = "/Industry";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Industry,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
