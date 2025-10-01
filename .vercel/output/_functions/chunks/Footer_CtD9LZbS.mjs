import { b as createAstro, c as createComponent, d as addAttribute, e as renderScript, f as renderHead, g as renderSlot, a as renderTemplate, m as maybeRenderHead, s as spreadAttributes, r as renderComponent, o as objectType, h as dateType, n as numberType, i as arrayType, j as stringType, A as AstroError, U as UnknownContentCollectionError, R as RenderUndefinedEntryError, u as unescapeHTML, k as escape, l as renderUniqueStylesheet, p as renderScriptElement, q as createHeadAndContent } from './astro/server_BZZvE4oG.mjs';
/* empty css                         */
import { r as removeBase, i as isRemotePath, p as prependForwardSlash } from './path_JRU2J8bK.mjs';
import { V as VALID_INPUT_FORMATS } from './consts_BmVDRGlB.mjs';
import { u as unflatten } from './parse_BxWlCxqB.mjs';

const $$Astro$e = createAstro("https://porfolio-meiduko.vercel.app/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Layout;
  const currentLocale = Astro2.currentLocale;
  return renderTemplate`<html${addAttribute(currentLocale, "lang")} data-theme="dark"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderScript($$result, "C:/Users/Borja/Coding/porfolio_meiduko/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}<title>Porfolio de Meiduko</title>${renderHead()}</head> <body class="dark:bg-[#080616] bg-[#aaa] dark:text-white text-gray-800"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Borja/Coding/porfolio_meiduko/src/layouts/Layout.astro", void 0);

const $$Astro$d = createAstro("https://porfolio-meiduko.vercel.app/");
const $$HomeIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$HomeIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"> <path opacity="0.25" d="M20 18.8V6.63998L13.6514 2.81501L13.6514 2.815C13.0511 2.45333 12.751 2.2725 12.4304 2.20186C12.1469 2.13938 11.8531 2.13938 11.5696 2.20186C11.249 2.2725 10.9489 2.45334 10.3486 2.81501L4 6.64001V18.8C4 19.9201 4 20.4802 4.21799 20.908C4.40973 21.2843 4.71569 21.5903 5.09202 21.782C5.51984 22 6.0799 22 7.2 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4802 20 19.9201 20 18.8Z" fill="currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.14251 9.5145C1.42665 9.98808 2.04091 10.1416 2.51449 9.85749L12 4.16619L21.4855 9.85749C21.9591 10.1416 22.5733 9.98808 22.8575 9.5145C23.1416 9.04092 22.9881 8.42666 22.5145 8.14251L13.029 2.45121C12.3956 2.07119 11.6044 2.07119 10.971 2.45121L1.4855 8.14251C1.01192 8.42666 0.858357 9.04092 1.14251 9.5145Z" fill="currentColor"></path> <path d="M9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16V22H9V16Z" fill="currentColor"></path> </svg>`;
}, "C:/Users/Borja/Coding/porfolio_meiduko/src/assets/icons/HomeIcon.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="sticky z-10 backdrop-blur-xs top-0 w-full flex items-center justify-evenly py-3"> ${renderComponent($$result, "HomeIcon", $$HomeIcon, { "class": "size-8 md:size-12 transition-transform duration-300 hover:scale-150 hover:translate-y-1/2" })} <h2 class="text-3xl hidden sm:block md:text-4xl font-semibold tracking-wide">
Meiduko
</h2> <h2 class="text-3xl font-semibold tracking-tight block sm:hidden">MDK</h2> <select id="selectLang" class="bg-white/40 px-3 py-1 rounded-lg focus:rounded-b-none appearance-none"> <option value="en" class="text-black"> en </option> <option value="es" class="text-black"> es </option> <option value="gl" class="text-black"> gl </option> </select> </nav>`;
}, "C:/Users/Borja/Coding/porfolio_meiduko/src/components/Navbar.astro", void 0);

const defaultLang = "es";
const ui = {
  es: {
    "Title.h1": "Hola, soy Meiduko",
    "Title.span": "+2 años",
    "Title.p": "Estudiando desarrollo web y diseño UI/UX con las herramientas más populares.",
    "Projects.h3": "Proyectos",
    "About.p1": "Mi nombre es Borja y soy de Galicia, España. Desde pequeño me ha interesado la tecnología, pero no fue hasta 2022 que decidí estudiar desarrollo web, y dadas las circunstancias, me he visto obligado a aprender de forma autodidacta, con la ayuda de cursos online y divulgadores de tecnología.",
    "About.p2.1": "Soy un desarrollador junior con experiencia en diversas tecnologías web que disfruta construyendo aplicaciones y herramientas",
    "About.p2.span": "user-frendly",
    "About.p2.2": ", eficientes y escalables. Me encanta aprender nuevas tecnologías y mejorar mis habilidades constantemente.",
    //TODO: Refactor with some span for emphasis (interfaces, visualmente atractivas, intuitivas, buenas prácticas)
    "About.p3.1": "Me gusta aprender afrontando nuevos retos, buscando una forma",
    "About.p3.span.1": "creativa y eficiente",
    "About.p3.2": "de convertir ideas en código funcional y reutilizable, con un importante enfoque en el",
    "About.p3.span.2": "detalle y la adaptabilidad.",
    "About.p4": "Trato de crear interfaces que no solo sean visualmente atractivas, sino también intuitivas y fáciles de usar. Me esfuerzo por mantenerme actualizado con las últimas tendencias y mejores prácticas de cada una de las tecnologías que utilizo.",
    "About.p5.1": "Tengo ",
    "About.p5.span": "conocimientos ",
    "About.p5.2": "de: "
  },
  gl: {
    "Title.h1": "Ola, son Meiduko",
    "Title.span": "+2 anos",
    "Title.p": "Estudando desenvolvemento web e deseño UI/UX coas ferramentas máis populares",
    "Projects.h3": "Proxectos",
    "About.p1": "O meu nome é Borja e son de Galicia, España. Dende pequeno intereseime pola tecnoloxía, pero non foi ata 2022 cando decidín estudar desenvolvemento web e, dadas as circunstancias, vinme obrigado a aprender de forma autodidacta, coa axuda de cursos en liña e divulgadores de tecnoloxía.",
    "About.p2.1": "Son un desenvolvedor júnior con experiencia en diversas tecnoloxías web que goza construíndo aplicacións e ferramentas",
    "About.p2.span": "user-frendly",
    "About.p2.2": ", eficientes e escalables. Encántame aprender novas tecnoloxías e mellorar constantemente as miñas habilidades.",
    "About.p3.1": "Gústame aprender afrontando novos retos, buscando unha forma",
    "About.p3.span.1": "creativa e eficiente",
    "About.p3.2": "de converter ideas en código funcional e reutilizable, cun importante enfoque no",
    "About.p3.span.2": "detalle e na adaptabilidade.",
    "About.p4": "Trato de crear interfaces que non só sexan visualmente atractivas, senón tamén intuitivas e fáciles de usar. Esfórzome por manterme ao día coas últimas tendencias e boas prácticas de cada unha das tecnoloxías que utilizo.",
    "About.p5.1": "Teño ",
    "About.p5.span": "coñecementos ",
    "About.p5.2": "de: "
  },
  en: {
    "Title.h1": "Hi, I'm Meiduko",
    "Title.span": "+2 years",
    "Title.p": "studying front-end web programming with the most popular tools. I strive to tackle any challenge in the most creative and efficient way possible.",
    "Projects.h3": "Projects",
    "About.p1": "My name is Borja and I am from Galicia, Spain. I have been interested in technology since I was a child, but it wasn't until 2022 that I decided to study web development. Given the circumstances, I have had to learn in a self-taught way, with the help of online courses and technology educators.",
    "About.p2.1": "I am a junior developer with experience in various web technologies who enjoys building",
    "About.p2.span": "user-friendly",
    "About.p2.2": ", efficient, and scalable applications and tools. I love learning new technologies and constantly improving my skills.",
    "About.p3.1": "I like learning by facing new challenges, looking for a",
    "About.p3.span.1": "creative and efficient",
    "About.p3.2": "way to turn ideas into functional and reusable code, with a strong focus on",
    "About.p3.span.2": "detail and adaptability.",
    "About.p4": "I try to create interfaces that are not only visually appealing but also intuitive and easy to use. I strive to stay up to date with the latest trends and best practices in each of the technologies I use.",
    "About.p5.1": "With ",
    "About.p5.span": "knowledge ",
    "About.p5.2": "of: "
  }
};

function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang;
  return defaultLang;
}
function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key] || key;
  };
}

const $$Astro$c = createAstro("https://porfolio-meiduko.vercel.app/");
const $$Title = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Title;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section id="Title" class="pt-20 flex flex-col gap-12 items-center justify-center"> <div class="flex flex-row items-baseline justify-start gap-6"> <img src="meiduko.webp" alt="Me in a good day" class="size-16 sm:size-18 md:size-20 xl:size-28 rounded-full"> <h1 class="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold tracking-tight -translate-y-3"> ${t("Title.h1")} </h1> </div> <p class="text-xl md:text-2xl text-pretty tracking-wide"> <span class="text-yellow-400 font-medium"> ${t("Title.span")} </span> ${t("Title.p")} </p> </section>`;
}, "C:/Users/Borja/Coding/porfolio_meiduko/src/components/Title.astro", void 0);

var e=e=>Object.prototype.toString.call(e),t=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),o=t=>"[object Date]"===e(t),n=t=>"[object RegExp]"===e(t),r=t=>"[object Error]"===e(t),s=t=>"[object Boolean]"===e(t),l=t=>"[object Number]"===e(t),i=t=>"[object String]"===e(t),c=Array.isArray,u=Object.getOwnPropertyDescriptor,a=Object.prototype.propertyIsEnumerable,f=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.keys;function d(e){const t=h(e),o=f(e);for(let n=0;n<o.length;n++)a.call(e,o[n])&&t.push(o[n]);return t}function b(e,t){return !u(e,t)?.writable}function y(e,u){if("object"==typeof e&&null!==e){let a;if(c(e))a=[];else if(o(e))a=new Date(e.getTime?e.getTime():e);else if(n(e))a=new RegExp(e);else if(r(e))a={message:e.message};else if(s(e)||l(e)||i(e))a=Object(e);else {if(t(e))return e.slice();a=Object.create(Object.getPrototypeOf(e));}const f=u.includeSymbols?d:h;for(const t of f(e))a[t]=e[t];return a}return e}var g={includeSymbols:false,immutable:false};function m(e,t,o=g){const n=[],r=[];let s=true;const l=o.includeSymbols?d:h,i=!!o.immutable;return function e(u){const a=i?y(u,o):u,f={};let h=true;const d={node:a,node_:u,path:[].concat(n),parent:r[r.length-1],parents:r,key:n[n.length-1],isRoot:0===n.length,level:n.length,circular:void 0,isLeaf:false,notLeaf:true,notRoot:true,isFirst:false,isLast:false,update:function(e,t=false){d.isRoot||(d.parent.node[d.key]=e),d.node=e,t&&(h=false);},delete:function(e){delete d.parent.node[d.key],e&&(h=false);},remove:function(e){c(d.parent.node)?d.parent.node.splice(d.key,1):delete d.parent.node[d.key],e&&(h=false);},keys:null,before:function(e){f.before=e;},after:function(e){f.after=e;},pre:function(e){f.pre=e;},post:function(e){f.post=e;},stop:function(){s=false;},block:function(){h=false;}};if(!s)return d;function g(){if("object"==typeof d.node&&null!==d.node){d.keys&&d.node_===d.node||(d.keys=l(d.node)),d.isLeaf=0===d.keys.length;for(let e=0;e<r.length;e++)if(r[e].node_===u){d.circular=r[e];break}}else d.isLeaf=true,d.keys=null;d.notLeaf=!d.isLeaf,d.notRoot=!d.isRoot;}g();const m=t(d,d.node);if(void 0!==m&&d.update&&d.update(m),f.before&&f.before(d,d.node),!h)return d;if("object"==typeof d.node&&null!==d.node&&!d.circular){r.push(d),g();for(const[t,o]of Object.entries(d.keys??[])){n.push(o),f.pre&&f.pre(d,d.node[o],o);const r=e(d.node[o]);i&&p.call(d.node,o)&&!b(d.node,o)&&(d.node[o]=r.node),r.isLast=!!d.keys?.length&&+t==d.keys.length-1,r.isFirst=0==+t,f.post&&f.post(d,r),n.pop();}r.pop();}return f.after&&f.after(d,d.node),d}(e).node}var j=class{#e;#t;constructor(e,t=g){this.#e=e,this.#t=t;}get(e){let t=this.#e;for(let o=0;t&&o<e.length;o++){const n=e[o];if(!p.call(t,n)||!this.#t.includeSymbols&&"symbol"==typeof n)return;t=t[n];}return t}has(e){let t=this.#e;for(let o=0;t&&o<e.length;o++){const n=e[o];if(!p.call(t,n)||!this.#t.includeSymbols&&"symbol"==typeof n)return  false;t=t[n];}return  true}set(e,t){let o=this.#e,n=0;for(n=0;n<e.length-1;n++){const t=e[n];p.call(o,t)||(o[t]={}),o=o[t];}return o[e[n]]=t,t}map(e){return m(this.#e,e,{immutable:true,includeSymbols:!!this.#t.includeSymbols})}forEach(e){return this.#e=m(this.#e,e,this.#t),this.#e}reduce(e,t){const o=1===arguments.length;let n=o?this.#e:t;return this.forEach(((t,r)=>{t.isRoot&&o||(n=e(t,n,r));})),n}paths(){const e=[];return this.forEach((t=>{e.push(t.path);})),e}nodes(){const e=[];return this.forEach((t=>{e.push(t.node);})),e}clone(){const e=[],o=[],n=this.#t;return t(this.#e)?this.#e.slice():function t(r){for(let t=0;t<e.length;t++)if(e[t]===r)return o[t];if("object"==typeof r&&null!==r){const s=y(r,n);e.push(r),o.push(s);const l=n.includeSymbols?d:h;for(const e of l(r))s[e]=t(r[e]);return e.pop(),o.pop(),s}return r}(this.#e)}};

/*
How it works:
`this.#head` is an instance of `Node` which keeps track of its current value and nests another instance of `Node` that keeps the value that comes after it. When a value is provided to `.enqueue()`, the code needs to iterate through `this.#head`, going deeper and deeper to find the last value. However, iterating through every single item is slow. This problem is solved by saving a reference to the last value as `this.#tail` so that it can reference it to add a new value.
*/

class Node {
	value;
	next;

	constructor(value) {
		this.value = value;
	}
}

class Queue {
	#head;
	#tail;
	#size;

	constructor() {
		this.clear();
	}

	enqueue(value) {
		const node = new Node(value);

		if (this.#head) {
			this.#tail.next = node;
			this.#tail = node;
		} else {
			this.#head = node;
			this.#tail = node;
		}

		this.#size++;
	}

	dequeue() {
		const current = this.#head;
		if (!current) {
			return;
		}

		this.#head = this.#head.next;
		this.#size--;
		return current.value;
	}

	peek() {
		if (!this.#head) {
			return;
		}

		return this.#head.value;

		// TODO: Node.js 18.
		// return this.#head?.value;
	}

	clear() {
		this.#head = undefined;
		this.#tail = undefined;
		this.#size = 0;
	}

	get size() {
		return this.#size;
	}

	* [Symbol.iterator]() {
		let current = this.#head;

		while (current) {
			yield current.value;
			current = current.next;
		}
	}

	* drain() {
		while (this.#head) {
			yield this.dequeue();
		}
	}
}

function pLimit(concurrency) {
	validateConcurrency(concurrency);

	const queue = new Queue();
	let activeCount = 0;

	const resumeNext = () => {
		if (activeCount < concurrency && queue.size > 0) {
			queue.dequeue()();
			// Since `pendingCount` has been decreased by one, increase `activeCount` by one.
			activeCount++;
		}
	};

	const next = () => {
		activeCount--;

		resumeNext();
	};

	const run = async (function_, resolve, arguments_) => {
		const result = (async () => function_(...arguments_))();

		resolve(result);

		try {
			await result;
		} catch {}

		next();
	};

	const enqueue = (function_, resolve, arguments_) => {
		// Queue `internalResolve` instead of the `run` function
		// to preserve asynchronous context.
		new Promise(internalResolve => {
			queue.enqueue(internalResolve);
		}).then(
			run.bind(undefined, function_, resolve, arguments_),
		);

		(async () => {
			// This function needs to wait until the next microtask before comparing
			// `activeCount` to `concurrency`, because `activeCount` is updated asynchronously
			// after the `internalResolve` function is dequeued and called. The comparison in the if-statement
			// needs to happen asynchronously as well to get an up-to-date value for `activeCount`.
			await Promise.resolve();

			if (activeCount < concurrency) {
				resumeNext();
			}
		})();
	};

	const generator = (function_, ...arguments_) => new Promise(resolve => {
		enqueue(function_, resolve, arguments_);
	});

	Object.defineProperties(generator, {
		activeCount: {
			get: () => activeCount,
		},
		pendingCount: {
			get: () => queue.size,
		},
		clearQueue: {
			value() {
				queue.clear();
			},
		},
		concurrency: {
			get: () => concurrency,

			set(newConcurrency) {
				validateConcurrency(newConcurrency);
				concurrency = newConcurrency;

				queueMicrotask(() => {
					// eslint-disable-next-line no-unmodified-loop-condition
					while (activeCount < concurrency && queue.size > 0) {
						resumeNext();
					}
				});
			},
		},
	});

	return generator;
}

function validateConcurrency(concurrency) {
	if (!((Number.isInteger(concurrency) || concurrency === Number.POSITIVE_INFINITY) && concurrency > 0)) {
		throw new TypeError('Expected `concurrency` to be a number from 1 and up');
	}
}

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_DW8AHZ36.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://porfolio-meiduko.vercel.app/", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
objectType({
  tags: arrayType(stringType()).optional(),
  maxAge: numberType().optional(),
  lastModified: dateType().optional()
});
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection,
  liveCollections
}) {
  return async function getCollection(collection, filter) {
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
      });
    }
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, {})?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('./_astro_assets_gV3ooSO7.mjs').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute,
      // This attribute is used by the toolbar audit
      ...Object.assign(__vite_import_meta_env__, {}).DEV ? { "data-image-component": "true" } : {}
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new j(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('./content-modules_Dz-S_Wwv.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const liveCollections = {};

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
	liveCollections,
});

const $$Astro$b = createAstro("https://porfolio-meiduko.vercel.app/");
const $$GithubMark = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$GithubMark;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 98 96" width="24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" class="dark:fill-white fill-[#24292f]"></path> </svg>`;
}, "C:/Users/Borja/Coding/porfolio_meiduko/src/assets/icons/Github/githubMark.astro", void 0);

const $$Astro$a = createAstro("https://porfolio-meiduko.vercel.app/");
const $$AstroIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$AstroIcon;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 256 366" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"${spreadAttributes(Astro2.props)}><path fill="#fff" d="M182.022 9.147c2.982 3.702 4.502 8.697 7.543 18.687L256 246.074a276.467 276.467 0 0 0-79.426-26.891L133.318 73.008a5.63 5.63 0 0 0-10.802.017L79.784 219.11A276.453 276.453 0 0 0 0 246.04L66.76 27.783c3.051-9.972 4.577-14.959 7.559-18.654a24.541 24.541 0 0 1 9.946-7.358C88.67 0 93.885 0 104.314 0h47.683c10.443 0 15.664 0 20.074 1.774a24.545 24.545 0 0 1 9.95 7.373Z"></path><path fill="#FF5D01" d="M189.972 256.46c-10.952 9.364-32.812 15.751-57.992 15.751-30.904 0-56.807-9.621-63.68-22.56-2.458 7.415-3.009 15.903-3.009 21.324 0 0-1.619 26.623 16.898 45.14 0-9.615 7.795-17.41 17.41-17.41 16.48 0 16.46 14.378 16.446 26.043l-.001 1.041c0 17.705 10.82 32.883 26.21 39.28a35.685 35.685 0 0 1-3.588-15.647c0-16.886 9.913-23.173 21.435-30.48 9.167-5.814 19.353-12.274 26.372-25.232a47.588 47.588 0 0 0 5.742-22.735c0-5.06-.786-9.938-2.243-14.516Z"></path></svg>`;
}, "C:/Users/Borja/Coding/porfolio_meiduko/src/assets/icons/tech/AstroIcon.astro", void 0);

const $$Astro$9 = createAstro("https://porfolio-meiduko.vercel.app/");
const $$CSSIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$CSSIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"${spreadAttributes(Astro2.props)}><path fill="#264de4" d="M71.357 460.819 30.272 0h451.456l-41.129 460.746L255.724 512z"></path><path fill="#2965f1" d="m405.388 431.408 35.148-393.73H256v435.146z"></path><path fill="#ebebeb" d="m124.46 208.59 5.065 56.517H256V208.59zm-5.041-57.875H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"></path><path fill="#fff" d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z"></path></svg>`;
}, "C:/Users/Borja/Coding/porfolio_meiduko/src/assets/icons/tech/CSSIcon.astro", void 0);

const $$Astro$8 = createAstro("https://porfolio-meiduko.vercel.app/");
const $$JavaScriptIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$JavaScriptIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z"></path><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"></path></svg>`;
}, "C:/Users/Borja/Coding/porfolio_meiduko/src/assets/icons/tech/JavaScriptIcon.astro", void 0);

const $$Astro$7 = createAstro("https://porfolio-meiduko.vercel.app/");
const $$ReactIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ReactIcon;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 569 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"${spreadAttributes(Astro2.props)}><g fill="none" fill-rule="evenodd"><g transform="translate(-227, -256)" fill="#58C4DC" fill-rule="nonzero"><g transform="translate(227, 256)"><path d="M285.5,201 C255.400481,201 231,225.400481 231,255.5 C231,285.599519 255.400481,310 285.5,310 C315.599519,310 340,285.599519 340,255.5 C340,225.400481 315.599519,201 285.5,201" id="react_dark__Path"></path><path d="M568.959856,255.99437 C568.959856,213.207656 529.337802,175.68144 466.251623,150.985214 C467.094645,145.423543 467.85738,139.922107 468.399323,134.521063 C474.621631,73.0415145 459.808523,28.6686204 426.709856,9.5541429 C389.677085,-11.8291748 337.36955,3.69129898 284.479928,46.0162134 C231.590306,3.69129898 179.282771,-11.8291748 142.25,9.5541429 C109.151333,28.6686204 94.3382249,73.0415145 100.560533,134.521063 C101.102476,139.922107 101.845139,145.443621 102.708233,151.02537 C97.4493791,153.033193 92.2908847,155.161486 87.3331099,157.39017 C31.0111824,182.708821 0,217.765415 0,255.99437 C0,298.781084 39.6220545,336.307301 102.708233,361.003527 C101.845139,366.565197 101.102476,372.066633 100.560533,377.467678 C94.3382249,438.947226 109.151333,483.32012 142.25,502.434597 C153.629683,508.887578 166.52439,512.186771 179.603923,511.991836 C210.956328,511.991836 247.567589,495.487529 284.479928,465.972527 C321.372196,495.487529 358.003528,511.991836 389.396077,511.991836 C402.475265,512.183856 415.36922,508.884856 426.75,502.434597 C459.848667,483.32012 474.661775,438.947226 468.439467,377.467678 C467.897524,372.066633 467.134789,366.565197 466.291767,361.003527 C529.377946,336.347457 569,298.761006 569,255.99437 M389.155214,27.1025182 C397.565154,26.899606 405.877839,28.9368502 413.241569,33.0055186 C436.223966,46.2772304 446.540955,82.2775015 441.522965,131.770345 C441.181741,135.143488 440.780302,138.556788 440.298575,141.990165 C414.066922,134.08804 387.205771,128.452154 360.010724,125.144528 C343.525021,103.224055 325.192524,82.7564475 305.214266,63.9661533 C336.586743,39.7116483 366.032313,27.1025182 389.135142,27.1025182 M378.356498,310.205598 C368.204912,327.830733 357.150626,344.919965 345.237759,361.405091 C325.045049,363.479997 304.758818,364.51205 284.459856,364.497299 C264.167589,364.51136 243.888075,363.479308 223.702025,361.405091 C211.820914,344.919381 200.80007,327.83006 190.683646,310.205598 C180.532593,292.629285 171.306974,274.534187 163.044553,255.99437 C171.306974,237.454554 180.532593,219.359455 190.683646,201.783142 C200.784121,184.229367 211.770999,167.201087 223.601665,150.764353 C243.824636,148.63809 264.145559,147.579168 284.479928,147.591877 C304.772146,147.579725 325.051559,148.611772 345.237759,150.68404 C357.109048,167.14607 368.136094,184.201112 378.27621,201.783142 C388.419418,219.363718 397.644825,237.458403 405.915303,255.99437 C397.644825,274.530337 388.419418,292.625022 378.27621,310.205598 M419.724813,290.127366 C426.09516,307.503536 431.324985,325.277083 435.380944,343.334682 C417.779633,348.823635 399.836793,353.149774 381.668372,356.285142 C388.573127,345.871232 395.263781,335.035679 401.740334,323.778483 C408.143291,312.655143 414.144807,301.431411 419.805101,290.207679 M246.363271,390.377981 C258.848032,391.140954 271.593728,391.582675 284.5,391.582675 C297.406272,391.582675 310.232256,391.140954 322.737089,390.377981 C310.880643,404.583418 298.10766,417.997563 284.5,430.534446 C270.921643,417.999548 258.18192,404.585125 246.363271,390.377981 Z M187.311556,356.244986 C169.137286,353.123646 151.187726,348.810918 133.578912,343.334682 C137.618549,325.305649 142.828222,307.559058 149.174827,290.207679 C154.754833,301.431411 160.736278,312.655143 167.239594,323.778483 C173.74291,334.901824 180.467017,345.864539 187.311556,356.285142 M149.174827,221.760984 C142.850954,204.473938 137.654787,186.794745 133.619056,168.834762 C151.18418,163.352378 169.085653,159.013101 187.211197,155.844146 C180.346585,166.224592 173.622478,176.986525 167.139234,188.210257 C160.65599,199.433989 154.734761,210.517173 149.074467,221.760984 M322.616657,121.590681 C310.131896,120.827708 297.3862,120.385987 284.379568,120.385987 C271.479987,120.385987 258.767744,120.787552 246.242839,121.590681 C258.061488,107.383537 270.801211,93.9691137 284.379568,81.4342157 C297.99241,93.9658277 310.765727,107.380324 322.616657,121.590681 Z M401.70019,188.210257 C395.196875,176.939676 388.472767,166.09743 381.527868,155.68352 C399.744224,158.819049 417.734224,163.151949 435.380944,168.654058 C431.331963,186.680673 426.122466,204.426664 419.785029,221.781062 C414.205023,210.55733 408.203506,199.333598 401.720262,188.230335 M127.517179,131.790423 C122.438973,82.3176579 132.816178,46.2973086 155.778503,33.0255968 C163.144699,28.9632474 171.455651,26.9264282 179.864858,27.1225964 C202.967687,27.1225964 232.413257,39.7317265 263.785734,63.9862316 C243.794133,82.7898734 225.448298,103.270812 208.949132,125.204763 C181.761691,128.528025 154.90355,134.14313 128.661281,141.990165 C128.199626,138.556788 127.778115,135.163566 127.456963,131.790423 M98.4529773,182.106474 C101.54406,180.767925 104.695358,179.429376 107.906872,178.090828 C114.220532,204.735668 122.781793,230.7969 133.498624,255.99437 C122.761529,281.241316 114.193296,307.357063 107.8868,334.058539 C56.7434387,313.076786 27.0971497,284.003505 27.0971497,255.99437 C27.0971497,229.450947 53.1907013,202.526037 98.4529773,182.106474 Z M155.778503,478.963143 C132.816178,465.691432 122.438973,429.671082 127.517179,380.198317 C127.838331,376.825174 128.259842,373.431953 128.721497,369.978497 C154.953686,377.878517 181.814655,383.514365 209.009348,386.824134 C225.500295,408.752719 243.832321,429.233234 263.805806,448.042665 C220.069,481.834331 180.105722,492.97775 155.838719,478.963143 M441.502893,380.198317 C446.520883,429.691161 436.203894,465.691432 413.221497,478.963143 C388.974566,493.017906 348.991216,481.834331 305.274481,448.042665 C325.241364,429.232737 343.566681,408.752215 360.050868,386.824134 C387.245915,383.516508 414.107066,377.880622 440.338719,369.978497 C440.820446,373.431953 441.221885,376.825174 441.563109,380.198317 M461.193488,334.018382 C454.869166,307.332523 446.294494,281.231049 435.561592,255.99437 C446.289797,230.744081 454.857778,204.629101 461.173416,177.930202 C512.216417,198.911955 541.942994,227.985236 541.942994,255.99437 C541.942994,284.003505 512.296705,313.076786 461.153344,334.058539" id="react_dark__Shape"></path></g></g></g></svg>`;
}, "C:/Users/Borja/Coding/porfolio_meiduko/src/assets/icons/tech/ReactIcon.astro", void 0);

const $$Astro$6 = createAstro("https://porfolio-meiduko.vercel.app/");
const $$TailwindIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$TailwindIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33"${spreadAttributes(Astro2.props)}><g clip-path="url(#tailwindcss__a)"><path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"></path></g><defs><clipPath id="tailwindcss__a"><path fill="#fff" d="M0 0h54v32.4H0z"></path></clipPath></defs></svg>`;
}, "C:/Users/Borja/Coding/porfolio_meiduko/src/assets/icons/tech/TailwindIcon.astro", void 0);

const $$Astro$5 = createAstro("https://porfolio-meiduko.vercel.app/");
const $$HTMLIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$HTMLIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520"${spreadAttributes(Astro2.props)}><path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52"></path><path fill="#ef652a" d="M226 472l149-41 35-394H226"></path><path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"></path><path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"></path></svg>`;
}, "C:/Users/Borja/Coding/porfolio_meiduko/src/assets/icons/tech/HTMLIcon.astro", void 0);

const TECHENUM = ["Astro", "React", "TailwindCSS", "CSS", "JavaScript", "HTML"];
const iconMap = {
  "Astro": $$AstroIcon,
  "React": $$ReactIcon,
  "TailwindCSS": $$TailwindIcon,
  "CSS": $$CSSIcon,
  "JavaScript": $$JavaScriptIcon,
  "HTML": $$HTMLIcon
};

const $$Astro$4 = createAstro("https://porfolio-meiduko.vercel.app/");
const $$Project = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Project;
  const project = Astro2.props.project;
  const { name, description, thumbnailPath, technologies, repo, Url } = project;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col lg:flex-row gap-8"> <div class="absolute left-1/12 md:left-2/12 xl:left-3/12 size-3.5 -translate-x-[calc(50%-1.5px)] rounded-full bg-yellow-500"></div> <img${addAttribute(thumbnailPath, "src")} class="w-full h-full md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-1/3 rounded-lg aspect-auto"${addAttribute(`Photo of the project: ${name}`, "alt")}> <div> <h4 class="text-2xl md:text-3xl font-medium">${name}</h4> <p class="text-lg md:text-xl">${description[lang]}</p> ${Url && renderTemplate`<a target="_blank" class="text-blue-950 dark:text-blue-400 underline"${addAttribute(Url, "href")}> ${name} site
</a>`} <div class="w-full pt-4 flex flex-row justify-between content-center"> <ul class="flex flex-row content-center gap-x-4"> ${technologies.map((tech) => {
    const Icon = iconMap[tech];
    return Icon && renderTemplate`<li> ${renderComponent($$result, "Icon", Icon, { "title": tech, "class": "size-6" })} </li>`;
  })} </ul> <a class="" target="_blank"${addAttribute(repo, "href")}> ${renderComponent($$result, "GithubMark", $$GithubMark, {})} </a> </div> </div> </article>`;
}, "C:/Users/Borja/Coding/porfolio_meiduko/src/components/Project.astro", void 0);

const $$Astro$3 = createAstro("https://porfolio-meiduko.vercel.app/");
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Projects;
  const projects = await getCollection("projects");
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section id="Projects" class="pt-28"> <h3 class="text-3xl -translate-x-4 font-semibold mb-6"> <span class="text-4xl font-medium">&lt;/&gt;</span> ${t("Projects.h3")} </h3> <div class="border-l-3 border-white pl-12 flex flex-col gap-y-18"> ${projects.map((project) => {
    const { data } = project;
    return renderTemplate`${renderComponent($$result, "Project", $$Project, { "project": data, "key": project.id })}`;
  })} </div> </section>`;
}, "C:/Users/Borja/Coding/porfolio_meiduko/src/components/Projects.astro", void 0);

const $$Astro$2 = createAstro("https://porfolio-meiduko.vercel.app/");
const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AboutMe;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section class="w-full"> <div class="flex flex-col justify-start gap-y-4 md:gap-y-10 text-xl md:text-2xl dark:text-white/90 text-black/80"> <p> ${t("About.p1")} </p> <p> ${t("About.p2.1")} <span class="text-yellow-400 font-semibold">${t("About.p2.span")} </span> ${t("About.p2.2")} ${t("About.p2.1")} <span class="text-yellow-400 font-semibold">${t("About.p2.span")} </span> ${t("About.p2.2")} </p> <p> ${t("About.p3.1")} <span class="text-yellow-400 font-semibold"> ${t("About.p3.span.1")}</span> ${t("About.p3.2")} <span class="text-yellow-400 font-semibold"> ${t("About.p3.span.2")} </span> </p> <p> ${t("About.p4")} </p> <p> ${t("About.p5.1")} <span class="text-yellow-400 font-semibold">${t("About.p5.span")} </span> ${t("About.p5.2")} </p> </div> <ul class="w-full flex flex-row flex-wrap justify-center gap-x-8 mt-4"> ${TECHENUM.map((tech) => {
    const Icon = iconMap[tech];
    return Icon ? renderTemplate`<li class="hover:scale-125 dark:hover:bg-white/10 hover:bg-black/10 hover:-translate-y-1/3 active:scale-125 active:bg-white/10 active:-translate-y-1/3 transition-all duration-500 p-3 rounded-lg"> ${renderComponent($$result, "Icon", Icon, { "title": tech, "class": "size-8 md:size-12" })} </li>` : null;
  })} </ul> </section>`;
}, "C:/Users/Borja/Coding/porfolio_meiduko/src/components/AboutMe.astro", void 0);

const $$Astro$1 = createAstro("https://porfolio-meiduko.vercel.app/");
const $$ProjectsIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectsIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8 20C8 19.4477 8.44772 19 9 19H15C15.5523 19 16 19.4477 16 20V21C16 22.6569 14.6569 24 13 24H11C9.34315 24 8 22.6569 8 21V20Z" fill="currentColor"></path><path opacity="0.25" d="M20 8C20 10.5264 18.8289 12.7793 17 14.2454V15C17 16.1046 16.1046 17 15 17C10.8358 17 15.5135 17 9 17C7.89543 17 7 16.1046 7 15V14.2454C5.17107 12.7793 4 10.5264 4 8C4 3.58172 7.58172 0 12 0C16.4183 0 20 3.58172 20 8Z" fill="currentColor"></path><path d="M10.7071 8.29289C10.3166 7.90237 9.68342 7.90237 9.29289 8.29289C8.90237 8.68342 8.90237 9.31658 9.29289 9.70711L11 11.4142V17H13V11.4142L14.7071 9.70711C15.0976 9.31658 15.0976 8.68342 14.7071 8.29289C14.3166 7.90237 13.6834 7.90237 13.2929 8.29289L12 9.58579L10.7071 8.29289Z" fill="currentColor"></path></svg>`;
}, "C:/Users/Borja/Coding/porfolio_meiduko/src/assets/icons/ProjectsIcon.astro", void 0);

const $$Astro = createAstro("https://porfolio-meiduko.vercel.app/");
const $$ThemeIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ThemeIcon;
  return renderTemplate`${maybeRenderHead()}<svg class="text-yellow-400 dark:text-gray-300 rotate-90 dark:-translate-y-3 dark:rotate-45 size-8 md:size-12 dark:size-10 dark:md:size-16 cursor-pointer"${spreadAttributes(Astro2.props)} viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"> <mask id="myMask1"> <rect x="0" y="0" width="100%" height="100%" fill="white"></rect> <circle r="9" fill="black" cx="100%" cy="0%"></circle> </mask> <mask id="myMask2"> <rect x="0" y="0" width="100%" height="100%" fill="white"></rect> <circle r="9" fill="black" cx="50%" cy="23%"></circle> </mask> <circle cx="12" cy="12" fill="#1e2939" class="mask-[url(#myMask1)] dark:mask-[url(#myMask2)] dark:scale-125 dark:-translate-y-1 transition-all fill-yellow-400 dark:fill-gray-300" r="5"></circle> <g class="dark:opacity-0 opacity-100 transition-opacity" stroke="currentColor" opacity="1"> <line x1="12" y1="1" x2="12" y2="3"></line> <line x1="12" y1="21" x2="12" y2="23"></line> <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line> <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line> <line x1="1" y1="12" x2="3" y2="12"></line> <line x1="21" y1="12" x2="23" y2="12"></line> <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line> <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line> </g> </svg>`;
}, "C:/Users/Borja/Coding/porfolio_meiduko/src/assets/icons/ThemeIcon.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="sticky bottom-0 left-0 w-full py-6 mb-4 flex justify-center items-center"> <div class="absolute w-1/2 sm:w-1/3 h-9 translate-y-1.5 rounded-full bg-black/20 dark:bg-white/20 backdrop-blur-xs"></div> <ul class="w-1/3 mx-12 z-10 rounded-full flex flex-row justify-evenly gap-4"> <li> <a href="#Title"> ${renderComponent($$result, "HomeIcon", $$HomeIcon, { "class": "size-8 md:size-12 hover:scale-150 hover:-translate-y-1/2 transition-scale duration-300" })} </a> </li> <li> <a href="#Projects" class=""> ${renderComponent($$result, "ProjectsIcon", $$ProjectsIcon, { "class": "size-8 md:size-12 hover:scale-150 hover:-translate-y-1/2 transition-scale duration-300" })} </a> </li> <li id="ToggleTheme" class="hover:scale-150 active:rotate-0 hover:-translate-y-1/2 flex items-center hover:rotate-180 transition-scale duration-300"> ${renderComponent($$result, "ThemeIcon", $$ThemeIcon, { "class": "" })} </li> </ul> </footer>`;
}, "C:/Users/Borja/Coding/porfolio_meiduko/src/components/Footer.astro", void 0);

export { $$Layout as $, $$Navbar as a, $$Title as b, $$Projects as c, $$AboutMe as d, $$Footer as e };
