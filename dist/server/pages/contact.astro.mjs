import { e as createComponent, r as renderTemplate, i as renderComponent, j as renderScript, m as maybeRenderHead } from '../chunks/astro/server_CFKIYPJ7.mjs';
import 'kleur/colors';
import { $ as $$Navigation, a as $$Footer, b as $$Layout } from '../chunks/Footer_CsiJbHVJ.mjs';
/* empty css                                    */
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blockchain4Indonesia", "data-astro-cid-6klqy6yr": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="vanta-background" data-astro-cid-6klqy6yr></div> <div id="container" data-astro-cid-6klqy6yr> ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-6klqy6yr": true })} <main data-astro-cid-6klqy6yr> <section id="contact" class="contact-section" data-astro-cid-6klqy6yr> <div class="contact-content" data-astro-cid-6klqy6yr> <div class="contact-header" data-astro-cid-6klqy6yr> <h1 data-astro-cid-6klqy6yr>Contact Us</h1> <p class="contact-description" data-astro-cid-6klqy6yr>
Reach out to us via email, phone, or visit our office. We're here to assist you.
</p> </div> <div class="contact-info" data-astro-cid-6klqy6yr> <div class="contact-item" data-astro-cid-6klqy6yr> <img class="icon" src="https://img.icons8.com/isometric/50/email.png" alt="email" data-astro-cid-6klqy6yr> <span data-astro-cid-6klqy6yr>Email: <a href="mailto:contact@blockchain4indonesia.com" data-astro-cid-6klqy6yr>contact@blockchain4indonesia.com</a></span> </div> <div class="contact-item" data-astro-cid-6klqy6yr> <img class="icon" src="https://img.icons8.com/isometric/50/phone.png" alt="phone" data-astro-cid-6klqy6yr> <span data-astro-cid-6klqy6yr>Phone: <a href="tel:+62123456789" data-astro-cid-6klqy6yr>+62 123 456 789</a></span> </div> <div class="contact-item" data-astro-cid-6klqy6yr> <img class="icon" src="https://img.icons8.com/isometric/50/address.png" alt="address" data-astro-cid-6klqy6yr> <span data-astro-cid-6klqy6yr>Address: Jl. Merdeka No.123, Jakarta, Indonesia</span> </div> </div> </div> </section> </main> </div> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-6klqy6yr": true })} ` })}  ${renderScript($$result, "D:/Documents/Code/web/vigorous-velocity/src/pages/Contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Documents/Code/web/vigorous-velocity/src/pages/Contact.astro", void 0);

const $$file = "D:/Documents/Code/web/vigorous-velocity/src/pages/Contact.astro";
const $$url = "/Contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
