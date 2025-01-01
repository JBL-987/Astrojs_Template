import { e as createComponent, r as renderTemplate, i as renderComponent, j as renderScript, m as maybeRenderHead } from './astro/server_CFKIYPJ7.mjs';
import 'kleur/colors';
import { $ as $$Navigation, a as $$Footer, b as $$Layout } from './Footer_CsiJbHVJ.mjs';
/* empty css                            */
/* empty css                        */

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blockchain4Indonesia", "data-astro-cid-cygrgcmh": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="vanta-background" data-astro-cid-cygrgcmh></div> <div id="container" data-astro-cid-cygrgcmh> ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-cygrgcmh": true })} <main data-astro-cid-cygrgcmh> <section id="home" class="home-section" data-astro-cid-cygrgcmh> <div class="home-content" data-astro-cid-cygrgcmh> <h1 data-astro-cid-cygrgcmh>Welcome to Blockchain4Indonesia</h1> <p class="home-description" data-astro-cid-cygrgcmh>
we are a team of blockchain enthusiasts who are passionate about the 
           potential of blockchain technology to revolutionize the way we do business.
</p> </div> </section> </main></div> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-cygrgcmh": true })} ` })}  ${renderScript($$result, "D:/Documents/Code/web/vigorous-velocity/src/pages/Home.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Documents/Code/web/vigorous-velocity/src/pages/Home.astro", void 0);

const $$file = "D:/Documents/Code/web/vigorous-velocity/src/pages/Home.astro";
const $$url = "/Home";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Home,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Home as $, _page as _ };
