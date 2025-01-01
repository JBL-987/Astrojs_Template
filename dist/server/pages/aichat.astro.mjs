import { e as createComponent, r as renderTemplate, i as renderComponent, j as renderScript, m as maybeRenderHead } from '../chunks/astro/server_CFKIYPJ7.mjs';
import 'kleur/colors';
import { $ as $$Navigation, a as $$Footer, b as $$Layout } from '../chunks/Footer_CsiJbHVJ.mjs';
/* empty css                                    */
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$AiChat = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blockchain4Indonesia", "data-astro-cid-qs6qthln": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="vanta-background" data-astro-cid-qs6qthln></div> <div id="container" data-astro-cid-qs6qthln> ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-qs6qthln": true })} <main data-astro-cid-qs6qthln> <section id="ai-chat" class="ai-chat-section" data-astro-cid-qs6qthln> <div class="chat-container" data-astro-cid-qs6qthln> <div class="chat-header" data-astro-cid-qs6qthln> <h1 data-astro-cid-qs6qthln>Blockchain4Indonesia AI Assistant</h1> <button type="reset" class="reset-btn" onClick="window.location.reload();" data-astro-cid-qs6qthln> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-qs6qthln> <path d="M3 12a9 9 0 1 1 9 9 9.75 9.75 0 0 1-6.74-2.74" data-astro-cid-qs6qthln></path> <path d="M3 12h9" data-astro-cid-qs6qthln></path> </svg>
Reset Chat
</button> </div> <div class="chat-messages" id="chatMessages" data-astro-cid-qs6qthln> <div class="welcome-message" data-astro-cid-qs6qthln> <div class="welcome-icon" data-astro-cid-qs6qthln>🤖</div> <h2 data-astro-cid-qs6qthln>Hello How can I assist you today?</h2> <p data-astro-cid-qs6qthln>Feel free to ask me anything about blockchain technology</p> </div> </div> <div class="chat-input-container" data-astro-cid-qs6qthln> <div class="chat-input-wrapper" data-astro-cid-qs6qthln> <textarea id="chatInput" rows="1" placeholder="Type your message here..." class="chat-input" data-astro-cid-qs6qthln></textarea> <button id="sendButton" class="send-button" aria-label="Send message" data-astro-cid-qs6qthln> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-qs6qthln> <line x1="22" y1="2" x2="11" y2="13" data-astro-cid-qs6qthln></line> <polygon points="22 2 15 22 11 13 2 9 22 2" data-astro-cid-qs6qthln></polygon> </svg> </button> </div> <p class="input-info" data-astro-cid-qs6qthln>Powered by Gemini AI</p> </div> </div> </section> </main> </div> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-qs6qthln": true })} ` })}  ${renderScript($$result, "D:/Documents/Code/web/vigorous-velocity/src/pages/AiChat.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Documents/Code/web/vigorous-velocity/src/pages/AiChat.astro", void 0);

const $$file = "D:/Documents/Code/web/vigorous-velocity/src/pages/AiChat.astro";
const $$url = "/AiChat";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AiChat,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
