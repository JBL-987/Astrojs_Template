import { e as createComponent, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_CFKIYPJ7.mjs';
import 'kleur/colors';
import { $ as $$Home } from '../chunks/Home_B5eafyxs.mjs';
import { b as $$Layout } from '../chunks/Footer_CsiJbHVJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Home", $$Home, {})} ` })}`;
}, "D:/Documents/Code/web/vigorous-velocity/src/pages/index.astro", void 0);

const $$file = "D:/Documents/Code/web/vigorous-velocity/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
