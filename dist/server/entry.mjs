import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_aDciL-MN.mjs';
import { manifest } from './manifest_9wQkyA7Y.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about-us.astro.mjs');
const _page2 = () => import('./pages/aichat.astro.mjs');
const _page3 = () => import('./pages/api/chat.astro.mjs');
const _page4 = () => import('./pages/blockchain.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/enterprise.astro.mjs');
const _page7 = () => import('./pages/feedback.astro.mjs');
const _page8 = () => import('./pages/home.astro.mjs');
const _page9 = () => import('./pages/industry.astro.mjs');
const _page10 = () => import('./pages/jobs.astro.mjs');
const _page11 = () => import('./pages/mletr.astro.mjs');
const _page12 = () => import('./pages/partner.astro.mjs');
const _page13 = () => import('./pages/policy.astro.mjs');
const _page14 = () => import('./pages/pricing.astro.mjs');
const _page15 = () => import('./pages/services.astro.mjs');
const _page16 = () => import('./pages/solutions.astro.mjs');
const _page17 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/About-us.astro", _page1],
    ["src/pages/AiChat.astro", _page2],
    ["src/pages/api/chat.ts", _page3],
    ["src/pages/blockchain.astro", _page4],
    ["src/pages/Contact.astro", _page5],
    ["src/pages/Enterprise.astro", _page6],
    ["src/pages/Feedback.astro", _page7],
    ["src/pages/Home.astro", _page8],
    ["src/pages/Industry.astro", _page9],
    ["src/pages/Jobs.astro", _page10],
    ["src/pages/mletr.astro", _page11],
    ["src/pages/Partner.astro", _page12],
    ["src/pages/Policy.astro", _page13],
    ["src/pages/Pricing.astro", _page14],
    ["src/pages/Services.astro", _page15],
    ["src/pages/Solutions.astro", _page16],
    ["src/pages/index.astro", _page17]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///D:/Documents/Code/web/vigorous-velocity/dist/client/",
    "server": "file:///D:/Documents/Code/web/vigorous-velocity/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
