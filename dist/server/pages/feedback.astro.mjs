import { e as createComponent, r as renderTemplate, i as renderComponent, j as renderScript, m as maybeRenderHead } from '../chunks/astro/server_CFKIYPJ7.mjs';
import 'kleur/colors';
import { $ as $$Navigation, a as $$Footer, b as $$Layout } from '../chunks/Footer_CsiJbHVJ.mjs';
/* empty css                                    */
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Feedback = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blockchain4Indonesia", "data-astro-cid-aibebzua": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="vanta-background" data-astro-cid-aibebzua></div> <div id="container" data-astro-cid-aibebzua> ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-aibebzua": true })} <main data-astro-cid-aibebzua> <section id="feedback" class="feedback-section" data-astro-cid-aibebzua> <div class="feedback-content" data-astro-cid-aibebzua> <div class="feedback-header" data-astro-cid-aibebzua> <h1 data-astro-cid-aibebzua>Get in Touch with Us</h1> <p class="feedback-description" data-astro-cid-aibebzua>
We value your feedback and are committed to improving our services. Share your thoughts with us and help shape the future of Blockchain4Indonesia.
</p> </div> <form class="feedback-form" id="feedbackForm" data-astro-cid-aibebzua> <div class="form-group" data-astro-cid-aibebzua> <div class="input-wrapper" data-astro-cid-aibebzua> <input type="text" id="name" name="name" placeholder=" " required data-astro-cid-aibebzua> <label for="name" data-astro-cid-aibebzua>Your Name</label> </div> </div> <div class="form-group" data-astro-cid-aibebzua> <div class="input-wrapper" data-astro-cid-aibebzua> <input type="email" id="email" name="email" placeholder=" " required data-astro-cid-aibebzua> <label for="email" data-astro-cid-aibebzua>Your Email</label> </div> </div> <div class="form-group" data-astro-cid-aibebzua> <div class="input-wrapper" data-astro-cid-aibebzua> <select id="category" name="category" required data-astro-cid-aibebzua> <option value="" disabled selected data-astro-cid-aibebzua>Select Category</option> <option value="general" data-astro-cid-aibebzua>General Feedback</option> <option value="bug" data-astro-cid-aibebzua>Bug Report</option> <option value="feature" data-astro-cid-aibebzua>Feature Request</option> <option value="other" data-astro-cid-aibebzua>Other</option> </select> </div> </div> <div class="form-group" data-astro-cid-aibebzua> <div class="input-wrapper" data-astro-cid-aibebzua> <textarea id="feedback" name="feedback" placeholder=" " rows="5" required data-astro-cid-aibebzua></textarea> <label for="feedback" data-astro-cid-aibebzua>Your Feedback</label> </div> </div> <button type="submit" class="primary-button" data-astro-cid-aibebzua> <span class="button-content" data-astro-cid-aibebzua> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-aibebzua> <path d="M22 2L11 13" data-astro-cid-aibebzua></path> <path d="M22 2L15 22L11 13L2 9L22 2z" data-astro-cid-aibebzua></path> </svg>
Send Feedback
</span> </button> </form> </div> </section> </main> </div> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-aibebzua": true })} ` })}  ${renderScript($$result, "D:/Documents/Code/web/vigorous-velocity/src/pages/Feedback.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Documents/Code/web/vigorous-velocity/src/pages/Feedback.astro", void 0);

const $$file = "D:/Documents/Code/web/vigorous-velocity/src/pages/Feedback.astro";
const $$url = "/Feedback";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Feedback,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
